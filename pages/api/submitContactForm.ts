import SgMail from "@sendgrid/mail";

export default async function handler(req, res) {
  SgMail.setApiKey(process.env.SG_API_KEY);

  const { name, email, msg } = req.body;

  const message = {
    to: [email, "info@michalantczak.com"],
    from: "no-reply@michalantczak.com",
    subject: "Michal Antczak contact form submition",
    html: `
           <div style=" padding: 10px;">
  <h1
    style="font-family: sans-serif; font-size: 27px; letter-spacing: -1px; font-weight: 600; line-height: 0; text-shadow: 3px 3px 3px rgba(0,0,0,.3);">
    <span style="color: #1989b5">Michal</span> Antczak</h1>
  <h2
    style=" font-family: sans-serif; font-size: 16px; letter-spacing: -1px; font-weight: 600; line-height: .5; text-shadow: 3px 3px 3px rgba(0,0,0,.3);">
    Software Engineer</h2>
</div>
<div style="padding: 10px;">
  <h3 style="font-family: 'Forum', sans-serif; font-size: 16px; font-weight: 400; color: #0F284E;">Hi there, <strong><span style="color: #1989b5">${name}</span></strong>!
    I've received you message!</h3>
  <p style="font-family: 'Forum', sans-serif; font-size: 16px; color: #222; line-height: 1.3; margin: 0;">I will response to your message as soon as possible.</p>
  </br>
  <div style="border: 5px solid #1989b5;  padding: 9px; max-width: 600px;">
    <p
      style="font-family: 'Forum', sans-serif; font-size: 16px; color: #18191F; line-height: 1.3; margin-top: 27px; padding: 9px; ">
      Your contact e-mail: <strong>${email}</strong></p>
    <p
      style="font-family: 'Forum', sans-serif; font-size: 16px; color: #18191F; line-height: 1.3; margin: 0;margin-bottom: 27px; padding: 9px; ">
      Your message: <strong>${msg}</strong>
    </p>
  </div>
 
  </br>
  <p style="font-family: 'Forum', sans-serif; font-size: 16px; color: #222; line-height: 1.3; margin: 0;">Kind regards,</p>
  <p style="font-family: 'Forum', sans-serif; font-size: 16px; color: #222; line-height: 1.3; margin: 0;">Michal Antczak
  </p>
  
  <a href="mailto:info@itcontext.nl" style="font-family: 'Forum', sans-serif; font-size: 16px; color: #222; line-height: 1.3; margin: 0;">
    info@itcontext.nl</a>
    </br>
  <a href="tel:0031682307051" style="font-family: 'Forum', sans-serif; font-size: 16px; color: #222; line-height: 1.3; margin: 0;">06 82 30 70 51</a>
</div>
        `,
  };

  SgMail.send(message);

  res.status(200).json({ msg: "Sucess" });
}
