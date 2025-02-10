import type { NextApiRequest, NextApiResponse } from "next";
import { sendEmail } from "../../utils/mailer";

const DOWNLOAD_URL = "https://tu-servidor.com/ebook.pdf"; // URL del Ebook

interface ResponseData {
  success: boolean;
  message: string;
  downloadUrl?: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Método no permitido" });
  }

  const { nombre, email, phone, country, website } = req.body;

  if (!nombre || !email) {
    return res.status(400).json({ success: false, message: "Nombre y Email son obligatorios." });
  }

  try {
    const emailResponse = await sendEmail({
      to: process.env.SMTP_USER || "",
      subject: `Nuevo usuario descargó el Ebook - ${nombre}`,
      text: `Nombre: ${nombre}\nCorreo: ${email}\nTeléfono: ${phone || "No especificado"}\nPaís: ${country || "No especificado"}\nSitio Web: ${website || "No especificado"}`,
      html: `
        <h1>Nuevo usuario descargó el Ebook</h1>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Correo:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone || "No especificado"}</p>
        <p><strong>País:</strong> ${country || "No especificado"}</p>
        <p><strong>Sitio Web:</strong> ${website || "No especificado"}</p>
        <p>El usuario ha recibido el enlace de descarga.</p>
      `,
    });

    if (emailResponse.success) {
      return res.status(200).json({ success: true, message: "Correo enviado", downloadUrl: DOWNLOAD_URL });
    } else {
      throw new Error("Error enviando correo");
    }
  } catch (error) {
    console.error("Error en la API: ", error);
    return res.status(500).json({ success: false, message: "Error al enviar el correo." });
  }
}
