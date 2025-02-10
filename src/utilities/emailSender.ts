import { getPayload } from 'payload'
import config from '@payload-config';


export const sendEmail = async (to: any, name: any, phone: any, message: any, subject: any) => {
    const payload = await getPayload({
        config
    });

    // Create the email content
    const htmlContent = `
        <!doctype html>
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>${subject}</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4; color: #333333;">
            <table role="presentation" style="width: 100%; border-collapse: collapse">
                <tr>
                    <td align="center" style="padding: 40px 0">
                        <table role="presentation" style="width: 600px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                            <tr>
                                <td style="padding: 40px 30px; text-align: center; background-color: #4f46e5; border-radius: 8px 8px 0 0;">
                                    <h1 style="color: #ffffff; font-size: 28px; margin: 0">${subject}</h1>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding: 40px 30px">
                                    <p style="margin: 0 0 20px 0; font-size: 16px;">Họ và Tên: ${name}</p>
                                    <p style="margin: 0 0 20px 0; font-size: 16px;">Số Điện Thoại: ${phone}</p>
                                    <p style="margin: 0 0 20px 0; font-size: 16px;">Email: ${to}</p>
                                    <p style="margin: 0 0 20px 0; font-size: 16px;">Tin Nhắn: ${message}</p>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding: 30px; text-align: center; font-size: 14px; background-color: #f8f8f8; border-radius: 0 0 8px 8px;">
                                    <p style="margin: 0;">© 2024 Your Company Name. All rights reserved.</p>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </body>
        </html>
    `;
    // Send the email
    try {
        const email = await payload.email.sendEmail({
            to: 'huynhquocky97@gmail.com',
            subject: subject,
            html: htmlContent,
        });
    } catch (error) {
        console.error('Failed to send email:', error);
    }
};
