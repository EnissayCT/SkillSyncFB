import React from "react";

const ContactPage = () => {
    return (
        <div className="min-h-screen bg-white text-black flex flex-col items-center px-4 py-10">
            {/* About Us Section */}
            <div className="bg-gray-100 rounded-2xl shadow-md p-8 w-full max-w-2xl space-y-4">
                <h1 className="text-4xl font-bold text-center">Welcome to SkillSync 👋</h1>
                <p className="text-gray-600 text-center">
                    At <strong>SkillSync</strong>, we're redefining resume management. We extract, parse, and rank candidates using smart tech — so companies can hire faster and better. Whether you're recruiting or job-hunting, we're here to streamline your journey.
                </p>
            </div>

            {/* Contact Form Section */}
            <div className="bg-gray-100 rounded-2xl shadow-md p-8 mt-10 w-full max-w-2xl space-y-6">
                <h2 className="text-3xl font-semibold text-center">Let's Talk 📬</h2>
                <p className="text-gray-500 text-center">
                    Got questions, ideas, or feedback? We’d love to hear from you!
                </p>

                <form className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm text-gray-700 mb-1">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            placeholder="e.g. Yassine Bouzid"
                            className="w-full border border-gray-300 rounded-md px-4 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm text-gray-700 mb-1">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="e.g. yassine@email.com"
                            className="w-full border border-gray-300 rounded-md px-4 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm text-gray-700 mb-1">
                            Message
                        </label>
                        <textarea
                            id="message"
                            rows={5}
                            placeholder="Write your message..."
                            className="w-full border border-gray-300 rounded-md px-4 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-black text-white font-medium py-2 rounded-md hover:bg-gray-800 transition"
                    >
                        Send Message
                    </button>
                </form>

            </div>
        </div>
    );
};

export default ContactPage;
