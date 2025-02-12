"use client";
import { useEffect, useState } from "react";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

declare global {
  interface Window {
    botpressWebChat?: any;
  }
}

const Chatbot = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.botpress.cloud/webchat/v2.2/inject.js";
    script.async = true;
    script.onload = () => {
      console.log("✅ Botpress WebChat script cargado.");
      
      const botScript = document.createElement("script");
      botScript.src = "https://files.bpcontent.cloud/2025/02/11/07/20250211073314-9PIEZBC1.js";
      botScript.async = true;
      botScript.onload = () => {
        console.log("✅ Script del bot cargado.");

        if (window.botpressWebChat) {
          console.log("✅ Inicializando Botpress WebChat...");
          window.botpressWebChat.init({
            botId: "fba6a6eb2-ecc3-49de-b810-827cda7680a6",
            host: "https://cdn.botpress.cloud/webchat/v2",
            messagingUrl: "https://messaging.botpress.cloud",
            botName: "Xelisse",
            avatarUrl: "https://your-avatar-url.png",
            showCloseButton: true,
            layoutWidth: "400px",
            layoutHeight: "500px",
          });
        } else {
          console.error("❌ Botpress WebChat no está disponible.");
        }
      };

      document.body.appendChild(botScript);
    };

    document.body.appendChild(script);
  }, []);

  const toggleChat = () => {
    setIsChatOpen((prev) => !prev);
    console.log(`🟢 Toggle Chat: ${!isChatOpen}`);

    setTimeout(() => {
      if (window.botpressWebChat) {
        window.botpressWebChat.sendEvent({ type: isChatOpen ? "hide" : "show" });
        console.log(`📢 Enviando evento: ${isChatOpen ? "hide" : "show"}`);
      } else {
        console.error("❌ Botpress WebChat no está definido.");
      }
    }, 500);
  };

  return (
    <>
      {/* Botón flotante en color verde */}

    </>
  );
};

export default Chatbot;
