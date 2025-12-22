
"use client";
import { useState } from "react";

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [minimized, setMinimized] = useState(false);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages((msgs) => [...msgs, { from: "user", text: input }]);
    setLoading(true);
    try {
      // Simulate AI response (replace with real API call if needed)
      const response = await new Promise((resolve) =>
        setTimeout(() => resolve({ text: "I'm an AI bot. This is a demo response!" }), 1000)
      );
      setMessages((msgs) => [...msgs, { from: "bot", text: response.text }]);
    } finally {
      setLoading(false);
      setInput("");
    }
  };

  return (
    <div className={`fixed bottom-6 right-6 w-80 bg-white border rounded-2xl shadow-lg z-50 flex flex-col transition-all duration-200 ${minimized ? 'h-16' : 'h-[34rem]'}`}>
      <div className="bg-blue-700 text-white px-4 py-2 rounded-t-2xl font-bold flex items-center gap-2 justify-between">
        <div className="flex items-center gap-2">
          <img src="/images/k11_logo.png" alt="K11 Logo" className="h-8 w-8 rounded-full bg-white object-contain" style={{background:'#fff'}} />
          <span>AI Chatbot</span>
        </div>
        <div className="flex items-center gap-2">
          {minimized ? (
            <button
              aria-label="Maximize"
              className="hover:bg-blue-600 rounded p-1"
              onClick={() => setMinimized(false)}
            >
              {/* Maximize icon (square) */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <rect x="4" y="4" width="12" height="12" rx="2" fill="currentColor" />
              </svg>
            </button>
          ) : (
            <button
              aria-label="Minimize"
              className="hover:bg-blue-600 rounded p-1"
              onClick={() => setMinimized(true)}
            >
              {/* Minimize icon (horizontal line) */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <rect x="5" y="9.5" width="10" height="1" rx="0.5" fill="currentColor" />
              </svg>
            </button>
          )}
        </div>
      </div>
      {!minimized && (
        <>
          <div className="flex-1 p-3 overflow-y-auto max-h-[25rem] flex flex-col gap-2">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={
                  msg.from === "bot"
                    ? "self-start bg-blue-100 text-blue-900 px-3 py-2 rounded-xl"
                    : "self-end bg-blue-700 text-white px-3 py-2 rounded-xl"
                }
              >
                {msg.text}
              </div>
            ))}
            {loading && <div className="self-start text-xs text-gray-400">Bot is typing...</div>}
          </div>
          <form onSubmit={sendMessage} className="flex border-t">
            <input
              className="flex-1 p-2 rounded-bl-2xl outline-none"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              disabled={loading}
            />
            <button
              type="submit"
              className="bg-blue-700 text-white px-4 py-2 rounded-br-2xl font-semibold disabled:opacity-50"
              disabled={loading || !input.trim()}
            >
              Send
            </button>
          </form>
        </>
      )}
    </div>
  );
}

