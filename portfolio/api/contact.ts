import type { VercelRequest, VercelResponse } from '@vercel/node'
import mailer from 'nodemailer'

const user = process.env.GMAIL_USERNAME;
const pass = process.env.GMAIL_PASS;

export default async function handler(req: VercelRequest, res: VercelResponse){
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { name, email, message } = req.body

    if (!name || !email || !message) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    try {
        let transporter = mailer.createTransport({
            service: 'gmail',
            auth: {
                user: user,
                pass: pass
            }
        });

        await transporter.sendMail({
            from: user,
            to: user,
            subject: `Portfolio Contact from ${name}`,
            text: `From ${name} <${email}>\n\nMessage:\n${message}`
        });

        return res.status(200).json({success: true, message: 'Email sent!'});
    } catch (err: any) {
        console.log(err);
        return res.status(500).json({error: 'Failed to send email!'});
    }
}