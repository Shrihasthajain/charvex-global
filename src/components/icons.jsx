import React, { useState, useRef, useEffect } from "react";
import "./icons.css";

const WHATSAPP_NUMBER = "91XXXXXXXXXX"; 
const WHATSAPP_MESSAGE = "Hi Charvex Global, I'd like to know more.";
const EMAIL_ADDRESS = "info@charvexglobal.com";
const EMAIL_SUBJECT = "Enquiry from website";

const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;
const mailHref = `mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(
  EMAIL_SUBJECT
)}`;

export default function FloatingContact() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Hi! I'm the Charvex Global assistant. Ask me anything.",
    },
  ]);
  const listRef = useRef(null);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages, isChatOpen]);

  const sendMessage = () => {
    const text = input.trim();
    if (!text) return;

    setMessages((prev) => [...prev, { from: "user", text }]);
    setInput("");

    // ----------------------------------------------------------------
    // TODO: replace this with a real call to your AI backend, e.g.
    //
    // const res = await fetch("/api/assistant", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ message: text }),
    // });
    // const data = await res.json();
    // setMessages((prev) => [...prev, { from: "bot", text: data.reply }]);
    // ----------------------------------------------------------------
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          text: "Thanks for your message — a real reply will appear here once the assistant is connected.",
        },
      ]);
    }, 500);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="fc">
      {isChatOpen && (
        <div className="fc__panel" role="dialog" aria-label="AI assistant chat">
          <div className="fc__panelHeader">
            <span>Charvex Assistant</span>
            <button
              className="fc__closeBtn"
              onClick={() => setIsChatOpen(false)}
              aria-label="Close chat"
            >
              ×
            </button>
          </div>

          <div className="fc__messages" ref={listRef}>
            {messages.map((m, i) => (
              <div
                key={i}
                className={`fc__bubble ${
                  m.from === "user" ? "fc__bubble--user" : "fc__bubble--bot"
                }`}
              >
                {m.text}
              </div>
            ))}
          </div>

          <div className="fc__inputRow">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type a message..."
              aria-label="Type a message"
            />
            <button onClick={sendMessage} aria-label="Send message">
              <svg viewBox="0 0 24 24" width="18" height="18">
                <path
                  fill="currentColor"
                  d="M2 21l21-9L2 3v7l15 2-15 2z"
                />
              </svg>
            </button>
          </div>
        </div>
      )}

      <div className="fc__stack">
        <button
          className="fc__btn fc__btn--ai"
          onClick={() => setIsChatOpen((v) => !v)}
          aria-label="Ask AI assistant"
        >
          <span className="fc__tooltip">Ask AI Assistant</span>
          {!isChatOpen && <span className="fc__pulse" aria-hidden="true" />}
          <svg viewBox="0 0 24 24" width="26" height="26">
            {/* Robot head */}
            <rect x="4" y="8" width="16" height="12" rx="3" fill="none" stroke="currentColor" strokeWidth="1.6" />
            <rect x="7.5" y="12" width="3" height="3.4" rx="1" fill="currentColor" />
            <rect x="13.5" y="12" width="3" height="3.4" rx="1" fill="currentColor" />
            <path d="M9 17.5h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none" />
            <path d="M12 8V5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            <circle cx="12" cy="3.6" r="1.3" fill="currentColor" />
            <path d="M4 12H2M22 12h-2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>

        <a
          className="fc__btn fc__btn--whatsapp"
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
        >
          <span className="fc__tooltip">WhatsApp</span>
          <svg viewBox="0 0 32 32" width="24" height="24">
            <path
              fill="currentColor"
              d="M16.04 3C9.4 3 4 8.4 4 15.04c0 2.42.71 4.68 1.94 6.58L4.4 27.6l6.15-1.5a11.9 11.9 0 0 0 5.49 1.34c6.64 0 12.04-5.4 12.04-12.04C28.08 8.4 22.68 3 16.04 3zm0 21.9a9.8 9.8 0 0 1-5-1.36l-.36-.21-3.65.9.94-3.6-.24-.37a9.83 9.83 0 0 1-1.51-5.22c0-5.45 4.43-9.88 9.88-9.88 5.45 0 9.88 4.43 9.88 9.88s-4.43 9.86-9.94 9.86zm5.42-7.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.48-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.15-.15.33-.4.5-.6.17-.2.22-.35.33-.57.11-.22.05-.42-.05-.57-.1-.15-.63-1.51-.86-2.07-.23-.55-.46-.47-.64-.48-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.05 3.13 4.98 4.27 2.93 1.14 2.93.76 3.46.71.53-.05 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z"
            />
          </svg>
        </a>

        <a
          className="fc__btn fc__btn--email"
          href={mailHref}
          aria-label="Email us"
        >
          <span className="fc__tooltip">Email us</span>
          <svg viewBox="0 0 24 24" width="22" height="22">
            <path
              fill="currentColor"
              d="M2 4h20v16H2V4zm2 2v.01L12 12l8-5.99V6H4zm16 12V8.24l-8 6-8-6V18h16z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}