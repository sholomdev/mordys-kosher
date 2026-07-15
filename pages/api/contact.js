import postmark from 'postmark';

const postmarkClient = new postmark.ServerClient(process.env.POSTMARK_SERVER_TOKEN);

async function sendEmail(req, res) {
  const emailData = {
    From: 'sholom@sholom.dev',
    To: 'sholom@sholom.dev',
    Subject: 'New message submitted via mordyskosher.com',
    HtmlBody:  `
         <ul>
         <li><strong>From:</strong>${req.body.data.name}</li>
         <li><strong>Email:</strong>${req.body.data.email}</li>
         <li><strong>Message:</strong>${req.body.data.message}</li>
         </ul>`,
  };

  try {
    const result = await postmarkClient.sendEmail(emailData);
    console.log('Email sent successfully!');
    return res.status(200).json({ error: '' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }
}

export default sendEmail;
