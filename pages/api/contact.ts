import type { NextApiRequest, NextApiResponse } from "next";
import { sendEmail } from "../../utils/mailer";

interface ResponseData {
  success: boolean;
  message: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Método no permitido" });
  }

  const { nombre, mail, mensaje } = req.body;

  if (!nombre || !mail || !mensaje) {
    return res.status(400).json({ success: false, message: "Datos incompletos" });
  }

  try {
    const emailResponse = await sendEmail({
      to: process.env.SMTP_USER || "",
      subject: `Nuevo mensaje de contacto de ${nombre}`,
      text: `Nombre: ${nombre}\nCorreo: ${mail}\nMensaje:\n${mensaje}`,
      html: `
        <h1>Nuevo mensaje de ${nombre} Xplendev.com</h1>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Correo:</strong> ${mail}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${mensaje}</p>
      `,
    });

    if (emailResponse.success) {
      return res.status(200).json({ success: true, message: "Correo enviado" });
    } else {
      throw new Error("Error enviando correo");
    }
  } catch (error) {
    console.error("Error en el handler: ", error);
    return res.status(500).json({ success: false, message: "Error al enviar el correo" });
  }
}
