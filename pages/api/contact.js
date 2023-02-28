// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import nodemailer from "nodemailer";

const configNodemailer = () => {
  return nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
    secure: true,
  });
};

const SendMessage = async (req, res) => {
  const transporter = configNodemailer();

  if (req.method === "POST") {
    const data = req.body;

    if (!data.name || !data.mail || !data.subject || !data.message) {
      return res.status(400).json({ message: "Bad request" });
    }

    try {
      await transporter.sendMail({
        from: data.mail,
        to: process.env.EMAIL,
        subject: `Portfolio message: ${data.subject}`,
        html: `
          <div>
            <h3> Name: ${data.name} </h3>
            <p style="font-size:15px"><strong> Mail: </strong><em> ${data.mail} <em></p>
            <p style="font-size:15px"> ${data.message} </p>
          </div>
        `,
      });
      res.status(200).json({ message: "Message sent successfully" });
    } catch (err) {
      console.log(err);
      res.status(400).json({ message: "Bad request" });
    }
  }
};

export default SendMessage;
