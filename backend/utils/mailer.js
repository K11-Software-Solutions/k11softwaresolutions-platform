import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "Outlook",
  auth: {
    user: process.env.EMAIL_HOST_USER,
    pass: process.env.EMAIL_HOST_PASSWORD,
  },
});

export const sendMail = async ({ to, subject, html }) => {
  return transporter.sendMail({
    from: process.env.EMAIL_HOST_USER,
    to,
    subject,
    html,
  });
};

export default sendMail;
