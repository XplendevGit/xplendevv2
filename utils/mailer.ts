import nodemailer from "nodemailer";

export async function sendEmail({ to, subject, text, html }: any) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || "587"), // Usa 465 para SSL o 587 para TLS
    secure: false, // Cambia a "true" si usas el puerto 465 (SSL)
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    const info = await transporter.sendMail({
      from: `"Xplendev" <${process.env.SMTP_USER}>`,
      to,
      subject,
      text,
      html,
    });

    console.log("Correo enviado: ", info.messageId);
    return { success: true };
  } catch (error) {
    console.error("Error al enviar el correo: ", error);
    return { success: false, error };
  }
}
