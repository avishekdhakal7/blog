import React from 'react';

export default function About() {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
            <div className="bg-white shadow-md rounded-lg p-8 max-w-2xl mx-auto">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">About Us</h1>
                <p className="text-gray-600 text-lg text-center mb-6">
                    Welcome to our company! We are dedicated to providing the best service possible. Our team is passionate about delivering high-quality products and ensuring customer satisfaction.
                </p>
                <div className="flex justify-center mb-6">
                    <img src="https://via.placeholder.com/150" alt="Team" className="rounded-full shadow-lg" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-blue-100 p-4 rounded-lg shadow-md hover:shadow-lg hover:shadow-blue-500/50 transition duration-300">
                        <h2 className="text-2xl font-semibold text-blue-800 mb-2">Our Mission</h2>
                        <p className="text-gray-700">
                            Our mission is to innovate and lead in our industry, providing top-notch solutions that meet the needs of our clients.
                        </p>
                    </div>
                    <div className="bg-green-100 p-4 rounded-lg shadow-md hover:shadow-lg hover:shadow-green-500/50 transition duration-300">
                        <h2 className="text-2xl font-semibold text-green-800 mb-2">Our Vision</h2>
                        <p className="text-gray-700">
                            We envision a world where our services empower businesses to achieve their goals and drive success.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
