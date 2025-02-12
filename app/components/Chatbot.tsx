"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

declare global {
  interface Window {
    botpressWebChat?: any;
  }
}

const Chatbot = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isBotLoaded, setIsBotLoaded] = useState(false); // Para verificar que Botpress está listo

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
            avatarUrl: "https://i.postimg.cc/qRTrnDtv/XElisse-Ai.png",
            showCloseButton: true,
            layoutWidth: "400px",
            layoutHeight: "500px",
            stylesheetOptions: {
              avatarUrl: "https://i.postimg.cc/qRTrnDtv/XElisse-Ai.png",
            },
          });

          setIsBotLoaded(true); // Confirmamos que Botpress está listo
        } else {
          console.error("❌ Botpress WebChat no está disponible.");
        }
      };

      document.body.appendChild(botScript);
    };

    document.body.appendChild(script);

    // Ocultar el botón flotante de Botpress después de 3 segundos
    setTimeout(() => {
      const botpressButton = document.querySelector(".bpFabContainer") as HTMLElement;
      if (botpressButton) {
        botpressButton.style.display = "none";
      }
    }, 3000);
  }, []);

  // ✅ Función para alternar el chat manualmente
  const toggleChat = () => {
    if (!isBotLoaded) {
      console.warn("⚠️ Botpress aún no está listo. Espera unos segundos...");
      return;
    }

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
      {/* Botón flotante personalizado con imagen de Xelisse */}
      <button
        onClick={toggleChat}
        className="fixed bottom-5 right-5 bg-[#28ECC9] rounded-full shadow-lg p-3 transition-all duration-300 hover:scale-105 z-50"
      >
        <Image
          src="https://i.postimg.cc/qRTrnDtv/XElisse-Ai.png"
          alt="Chatbot Xelisse"
          width={50}
          height={50}
          className="w-12 h-12 rounded-full"
        />
      </button>
    </>
  );
};

export default Chatbot;
