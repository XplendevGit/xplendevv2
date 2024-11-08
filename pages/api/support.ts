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

  const { nombre, proyectoID, correo, tipoConsulta, mensaje } = req.body;

  // Validación de datos
  if (!nombre || !proyectoID || !correo || !tipoConsulta || !mensaje) {
    return res.status(400).json({
      success: false,
      message: "Por favor, completa todos los campos requeridos.",
    });
  }

  try {
    // Construcción del contenido del correo
    const emailSubject = `Soporte Técnico - ${tipoConsulta} de ${nombre}`;
    const emailText = `
      Nombre: ${nombre}
      Proyecto ID: ${proyectoID}
      Correo: ${correo}
      Tipo de Consulta: ${tipoConsulta}
      Mensaje:
      ${mensaje}
    `;
    const emailHtml = `
      <h1>Solicitud de Soporte Técnico</h1>
      <p><strong>Nombre:</strong> ${nombre}</p>
      <p><strong>Proyecto ID:</strong> ${proyectoID}</p>
      <p><strong>Correo:</strong> ${correo}</p>
      <p><strong>Tipo de Consulta:</strong> ${tipoConsulta}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${mensaje}</p>
    `;

    // Envío del correo
    const emailResponse = await sendEmail({
      to: process.env.SMTP_USER || "",
      subject: emailSubject,
      text: emailText,
      html: emailHtml,
    });

    if (emailResponse.success) {
      return res.status(200).json({ success: true, message: "Correo enviado exitosamente" });
    } else {
      throw new Error("Error enviando correo");
    }
  } catch (error) {
    console.error("Error en el handler de soporte: ", error);
    return res.status(500).json({
      success: false,
      message: "Error al enviar el correo. Por favor, inténtalo nuevamente.",
    });
  }
}
