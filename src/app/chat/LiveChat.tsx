"use client";
import { useEffect, useState, useRef } from "react";
import io, { Socket } from "socket.io-client";
import { Lobster, Outfit,Inter } from "next/font/google";
let socket: Socket;

interface LiveChatProps {
  closeChat: () => void; // Close function from the parent component
}

const lobster = Lobster({
    display: "block",
    style: "normal",
    weight: "400",
});
const outfit = Outfit({
    display: "swap",
    style: "normal",
    weight: "400",
});

const inter = Inter({
    display: "block",
    style: "normal",
    weight: "400",
});
export default function LiveChat({ closeChat }: LiveChatProps) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<string[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null); // Ref to scroll to bottom

  useEffect(() => {
    socket = io();

    socket.on("message", (msg: string) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    // Scroll to the bottom when a new message is added
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (message.trim()) {
      socket.emit("message", message);
      setMessages((prev) => [...prev, message]);
      setMessage("");
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-md w-full relative flex flex-col h-full">
      {/* Close Button at the Top */}
      <button
        onClick={closeChat}
        className="absolute top-2 right-2 text-gray-600 dark:text-gray-300 hover:text-red-500 text-2xl font-bold focus:outline-none"
      >
        &times;
      </button>

      {/* Chat Messages */}
      <div className="flex flex-col-reverse h-full overflow-y-auto p-4 pb-2">
        <div className="flex flex-col">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-2 rounded-lg mb-2 ${
                index % 2 === 0
                  ? `bg-blue-500 text-white self-end ${inter.className}`
                  : `bg-gray-200 dark:bg-green-600 text-black dark:text-white self-start ${outfit.className}`
              }`}
            >
              {msg}
            </div>
          ))}
          {/* Invisible div for auto-scrolling */}
          <div ref={messagesEndRef} />
        </div>
      </div>
      {/* Message Input and Send Button */}
      <div className="flex w-full border-t border-gray-300">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && sendMessage()}
          className="flex-grow p-2 border-0 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Type a message..."
        />
        <button
          onClick={sendMessage}
          className={`bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 ${lobster.className}`}
        >
          Send
        </button>
      </div>
    </div>
  );
}
