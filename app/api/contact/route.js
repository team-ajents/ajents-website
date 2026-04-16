import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.ionos.de",
  port: 465,
  secure: true,
  auth: {
    user: "team@ajents.de",
    pass: process.env.SMTP_PASSWORD,
  },
});

export async function POST(request) {
  try {
    const { name, company, email, message } = await request.json();

    if (!name || !email || !message) {
      return Response.json({ error: "Pflichtfelder fehlen." }, { status: 400 });
    }

    await transporter.sendMail({
      from: '"ajents Kontaktformular" <team@ajents.de>',
      to: "team@ajents.de",
      replyTo: email,
      subject: `Neue Anfrage von ${name}${company ? ` – ${company}` : ""}`,
      text: `Name: ${name}\nUnternehmen: ${company || "–"}\nE-Mail: ${email}\n\nNachricht:\n${message}`,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("SMTP error:", error);
    return Response.json({ error: "E-Mail konnte nicht gesendet werden." }, { status: 500 });
  }
}
