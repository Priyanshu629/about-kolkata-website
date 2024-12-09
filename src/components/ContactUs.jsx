import React from 'react';

const ContactUs = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Add form submission logic here
        console.log("Form submitted");
    };

    return (
        <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
            <section className="w-[95%] mx-auto p-4 flex flex-col items-center">
                <p className="mb-4 text-white font-serif text-lg text-center">
                    Hello there 😀, please help us improve this site by giving your valuable feedback!
                </p>

                <form
                    onSubmit={handleSubmit}
                    className="w-[40%] max-w-sm flex flex-col border-4 border-red-400 p-4 rounded-lg bg-gray-800 shadow-lg"
                    aria-label="Contact Us Form"
                >
                    <h1 className="text-2xl bg-pink-300 text-center font-semibold py-2 rounded">Contact Us</h1>
                    
                    <label htmlFor="name" className="text-sm font-medium mt-4">Name</label>
                    <input
                        id="name"
                        name="name"
                        className="p-2 m-2 border-2 border-gray-400 rounded"
                        type="text"
                        placeholder="Enter your name"
                        required
                    />

                    <label htmlFor="email" className="text-sm font-medium mt-4">Email</label>
                    <input
                        id="email"
                        name="email"
                        className="p-2 m-2 border-2 border-gray-400 rounded"
                        type="email"
                        placeholder="Enter your email"
                        required
                    />

                    <label htmlFor="message" className="text-sm font-medium mt-4">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        className="p-2 m-2 border-2 border-gray-400 rounded"
                        placeholder="Type your message here"
                        rows="4"
                        required
                    />

                    <button
                        type="submit"
                        className="mt-4 bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded"
                    >
                        Send
                    </button>
                </form>
            </section>
        </div>
    );
};

export default ContactUs;
