"use client";
import React from "react";

export default function Home() {
    // FAQ data
    const faqs = [
        {
            question: "How can I contact Naqaa support?",
            answer: "You can reach us via email at support@naqaa.com or call us at +20 123 456 7890.",
        },
        {
            question: "What is Naqaa?",
            answer: "Naqaa is a mobile app designed to help users manage their daily tasks efficiently and intuitively.",
        },
        {
            question: "Is Naqaa available for both iOS and Android?",
            answer: "Yes, Naqaa is available for download on App Store.",
        },
    ];

    // Collapsible FAQ item
    function FAQItem({
        question,
        answer,
    }: {
        question: string;
        answer: string;
    }) {
        const [open, setOpen] = React.useState(false);
        return (
            <div className="border-b border-gray-200 py-3">
                <button
                    className="w-full text-left flex justify-between items-center font-medium text-gray-800 focus:outline-none"
                    onClick={() => setOpen((o) => !o)}
                >
                    <span>{question}</span>
                    <span
                        className={`ml-2 transition-transform ${
                            open ? "rotate-90" : ""
                        }`}
                    >
                        ▶
                    </span>
                </button>
                {open && (
                    <div className="mt-2 text-gray-600 text-sm pl-2">
                        {answer}
                    </div>
                )}
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-4 py-8">
            <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6 flex flex-col gap-6">
                <h1 className="text-2xl font-bold text-center text-green-700">
                    Naqaa Support
                </h1>
                <section className="flex flex-col gap-2 text-center">
                    <h2 className="text-lg font-semibold text-gray-800">
                        Contact Us
                    </h2>
                    <p className="text-gray-700">
                        Email:{" "}
                        <a
                            href="mailto:karimelfarr@icloud.com"
                            className="text-green-600 hover:underline"
                        >
                            karimelfarr@icloud.com
                        </a>
                    </p>
                    <p className="text-gray-700">
                        Phone:{" "}
                        <a
                            href="tel:+201044719922"
                            className="text-green-600 hover:underline"
                        >
                            +20 104 471 9922
                        </a>
                    </p>
                </section>
                <section>
                    <h2 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                        FAQ
                    </h2>
                    <div className="divide-y divide-gray-200">
                        {faqs.map((faq, idx) => (
                            <FAQItem
                                key={idx}
                                question={faq.question}
                                answer={faq.answer}
                            />
                        ))}
                    </div>
                </section>
            </div>
            <footer className="mt-8 text-gray-500 text-sm text-center">
                © 2025 Naqaa
            </footer>
        </div>
    );
}
