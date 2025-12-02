"use client"
import React, { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send, User, Bot } from "lucide-react";
import { faqData } from "@/data/chatBotAnswerData";

const COLORS = {
  primary: "#80B1FB",
  accent: "#ed6e6a", 
  dark: "#4E4D59", 
  light: "#F0F3F7", 
};

type ChatMessage = {
  sender: "user" | "bot";
  text: string;
};

// Component for a single message bubble
const ChatBubble = ({ message }: { message: ChatMessage }) => (
  <div
    className={`flex items-start gap-3 ${message.sender === "user" ? "justify-end" : "justify-start"}`}
  >
    {message.sender === "bot" && (
      // Bot Avatar
      <div className="shrink-0 p-2 rounded-full bg-white shadow-sm border border-gray-200">
        <Bot size={16} style={{ color: COLORS.primary }} />
      </div>
    )}
    <div
      className={`p-3 text-sm rounded-3xl max-w-[80%]  whitespace-pre-wrap transition-all duration-300 ${
        message.sender === "user"
          ? "bg-[#4E4D59] text-white rounded-tr-none" 
          : "bg-white text-gray-800 rounded-tl-none border border-gray-100"
      }`}
      style={message.text === "..." ? { color: COLORS.accent, fontStyle: 'italic', boxShadow: 'none' } : {}}
      dangerouslySetInnerHTML={{ __html: message.text.replace(/\n/g, "<br/>") }}
    />
    {message.sender === "user" && (
      <div className="shrink-0 p-2 rounded-full bg-gray-200">
        <User size={16} style={{ color: COLORS.dark }} />
      </div>
    )}
  </div>
);


const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  // Auto scroll to bottom (Fixed TypeScript error with explicit null check)
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  // Initial welcome message
  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([{ 
        sender: "bot", 
        text: "Hi there! I'm your Sway Assistant, ready to help you move better. How can I assist you today? Try asking about 'services' or 'pricing' or 'workout plans' or others." 
      }]);
    }
  }, [open]);

  // Handle user sending message
  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg: ChatMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput(""); 

    const typingMsg: ChatMessage = { sender: "bot", text: "..." };
    setMessages((prev) => [...prev, typingMsg]);

    const reply = getBotReply(input);
    
    // Simulate thinking time
    setTimeout(() => {
      setMessages((prev) => {
        const newMessages = prev.slice(0, -1);
        return [...newMessages, { sender: "bot", text: reply }];
      });

      // Meeting button trigger (after the bot message is fully rendered)
      setTimeout(() => {
        attachMeetingButtonListener();
      }, 100);
    }, 800);
  };

  // Matching FAQ logic
  const getBotReply = (text: string) => {
    const lower = text.toLowerCase();

    for (const item of faqData) {
      if (item.keywords.some((key) => lower.includes(key))) {
        return item.answer;
      }
    }

    return "I’m not sure about this. I can only answer questions related to our membership, workouts, or booking a call. Try rephrasing your question!";
  };

  // Clicking “Book Meeting” will open your meeting modal
  const attachMeetingButtonListener = () => {
    const btn = document.getElementById("open-meeting-modal");
    if (btn) {
      btn.onclick = () => {
        const event = new CustomEvent("open-meeting-modal");
        window.dispatchEvent(event);
      };
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          style={{ backgroundColor: COLORS.primary }}
          className="fixed bottom-8 right-8 text-white p-5 rounded-full shadow-2xl hover:scale-105 transition-transform duration-300 z-9999 animate-pulse-slow"
        >
          <MessageCircle size={28} strokeWidth={2.5} />
        </button>
      )}

      {/* Chat Window */}
      {open && (
        <div 
          className="fixed bottom-8 right-8 w-80 md:w-96 bg-white rounded-2xl shadow-2xl z-9999 flex flex-col h-[70vh] max-h-[550px] transform transition-all duration-300 ease-out animate-slideIn border-4 border-gray-100/50"
        >
          
          {/* Header */}
          <div 
            className="flex items-center justify-between px-5 py-4 text-white rounded-t-[14px] shadow-md"
            style={{ 
                background: `linear-gradient(90deg, ${COLORS.primary} 0%, #6a97d5 100%)`, 
                color: 'white'
            }}
          >
            <div className="flex items-center">
              <MessageCircle size={20} className="mr-2 opacity-80" />
              <h3 className="font-extrabold text-lg tracking-wide">Sway Support</h3>
            </div>
            <button 
              onClick={() => setOpen(false)}
              className="p-1 rounded-full hover:bg-white/20 transition"
              aria-label="Close Chat"
            >
              <X size={22} />
            </button>
          </div>

          {/* Messages Container */}
          <div 
            className="flex-1 p-4 overflow-y-auto space-y-4"
            style={{ backgroundColor: COLORS.light }}
          >
            {messages.map((msg, idx) => (
              <ChatBubble key={idx} message={msg} />
            ))}
            <div ref={chatEndRef}></div> 
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-gray-200 flex gap-3 bg-white">
            <input
              className="flex-1 border-2 border-gray-300 focus:border-[#80B1FB] rounded-full px-4 py-3 text-sm outline-none transition shadow-sm"
              style={{ color: COLORS.dark }}
              placeholder="Type your question..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              disabled={messages.length > 0 && messages[messages.length - 1].text === "..."}
            />
            <button
              onClick={handleSend}
              disabled={!input.trim()}
              style={{ backgroundColor: COLORS.primary }}
              className={`text-white p-3 rounded-full transition duration-200 shadow-lg ${
                input.trim() 
                  ? "hover:bg-[#6a97d5] active:scale-95" 
                  : "opacity-60 cursor-not-allowed"
              }`}
              aria-label="Send Message"
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      )}

      {/* ANIMATIONS */}
      <style jsx global>{`
        /* Floating Button Pulse Animation */
        @keyframes pulse-slow {
          0%, 100% {
            box-shadow: 0 0 0 0 ${COLORS.primary}90;
          }
          50% {
            box-shadow: 0 0 0 8px ${COLORS.primary}00;
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s infinite cubic-bezier(0.4, 0, 0.6, 1);
        }

        /* Chat Window Slide In */
        @keyframes slideIn {
          from { 
            opacity: 0; 
            transform: translateY(20px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        .animate-slideIn {
          animation: slideIn 0.3s ease-out forwards;
        }

        /* Override link/button style inside bot message */
        .bg-white button#open-meeting-modal {
            /* Styling for the embedded button in the bot message */
            border: none;
            cursor: pointer;
            transition: background-color 0.2s;
        }
        
      `}</style>
    </>
  );
};

export default ChatBot;