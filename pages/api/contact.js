import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);
async function sendEmail(req, res) {
  const message = {
    to: 'sholommorgenstern@gmail.com', // Your email where you'll receive emails
    from: 'sholom@sholom.dev', // your website email address here
    subject: 'New message submitted via mordyskosher.com',
    text: `Submission via mordyskosher.com.\r\n
        From:${req.body.data.name} \r\n
        email:${req.body.data.email}\r\n
        Message:${req.body.data.message}`,
    html: `
         <ul>
         <li><strong>From:</strong>${req.body.data.name}</li>
         <li><strong>Email:</strong>${req.body.data.email}</li>
         <li><strong>Message:</strong>${req.body.data.message}</li>
         </ul>`,
  };
  try {
    await sendgrid.send(message);
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: '' });
}

export default sendEmail;
