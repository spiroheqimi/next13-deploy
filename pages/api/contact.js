import nodemailer from 'nodemailer'

const user = process.env.user;

export default async function ContactAPI(req, res) {

  const { name, email, message } = req.body

  const data = {
    name, email, message
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: user,
      pass: process.env.pass,
    },
  });

  try {
    
    const mail = await transporter.sendMail({
      from: user,
      to: "spiroheqimi92@gmail.com",
      subject: `Contact from ${name}`,
      html: `
        <p>Name: ${name} </p>
        <p>Email: ${email} </p>
        <p>Message: ${message} </p>
      `,
    });
    res.status(200).json({ message: 'success' })
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Could not send the mail"
    });
  }

  
}

