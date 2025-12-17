import Link from 'next/link';

function RetreatPage() {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-4 text-center">
            {/* Heading */}
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
                Coming Soon
            </h1>

            {/* Subtext */}
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
                Our exclusive retreat page is on its way! Stay tuned for updates and prepare for an amazing experience.
            </p>

            {/* Button */}
            <Link
                href="/"
                className="relative overflow-hidden px-8 py-4 rounded-2xl border-2 border-gray-800 font-semibold text-gray-800 group"
            >
                {/* Sliding background */}
                <span className="absolute inset-0 bg-[#FF6464] scale-x-0 origin-left transition-transform duration-500 ease-in-out group-hover:scale-x-100"></span>

                {/* Button text */}
                <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
                    Go Back Home
                </span>
            </Link>
        </div>
    );
}

export default RetreatPage;
