/**
 * Vercel Serverless Function: /api/send-enquiry
 * 
 * Delivers email notifications to:
 * 1. Company Receivers: info@dcrlogistics.in, dhruvanth@dcrlogistics.in
 * 2. Customer (Sender): Acknowledgment copy with full quotation specs
 * 
 * Supports:
 * - SMTP (GoDaddy secureserver.net, Gmail, Google Workspace, Zoho, etc.) via Nodemailer
 * - Resend API via RESEND_API_KEY
 */

import nodemailer from 'nodemailer';
import { Resend } from 'resend';

const COMPANY_RECEIVERS = ['info@dcrlogistics.in', 'dhruvanth@dcrlogistics.in'];

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed. Use POST.' });
  }

  const data = req.body || {};
  const {
    id = `DCR-${Date.now().toString().slice(-6)}`,
    type = 'quote',
    name = 'Valued Client',
    company = 'Not Specified',
    phone = 'Not Specified',
    email = '',
    service = '',
    serviceRequired = '',
    space = '',
    warehouseRequirement = '',
    location = 'Attibele Hub, Bangalore',
    startDate = 'Immediate',
    requirements = '',
    message = ''
  } = data;

  const resolvedService = service || serviceRequired || 'Warehousing & Logistics';
  const resolvedSpace = space || warehouseRequirement || 'As per operational requirement';
  const resolvedNotes = requirements || message || 'No additional notes provided';
  const isQuote = type === 'quote';

  // 1. HTML Email for Company (info@dcrlogistics.in & dhruvanth@dcrlogistics.in)
  const companySubject = `🚨 New ${isQuote ? 'Commercial Quotation Request' : 'Customer Contact Enquiry'} [${id}] - ${name} (${company})`;
  const companyHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #f8fafc; margin: 0; padding: 24px; color: #0f172a; }
        .card { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); }
        .header { background: #0B192C; padding: 24px; text-align: left; border-bottom: 3px solid #FF6500; }
        .header h1 { color: #ffffff; margin: 0; font-size: 20px; font-weight: 800; letter-spacing: -0.5px; }
        .header p { color: #94a3b8; margin: 4px 0 0 0; font-size: 12px; }
        .content { padding: 28px 24px; }
        .badge { display: inline-block; background: #ffedd5; color: #c2410c; padding: 4px 10px; border-radius: 9999px; font-size: 11px; font-weight: 700; text-transform: uppercase; margin-bottom: 16px; }
        .table { width: 100%; border-collapse: collapse; margin-top: 12px; }
        .table td { padding: 10px 12px; border-bottom: 1px solid #f1f5f9; font-size: 13px; }
        .table td.label { width: 35%; color: #64748b; font-weight: 600; text-transform: uppercase; font-size: 11px; letter-spacing: 0.5px; }
        .table td.value { color: #0f172a; font-weight: 600; }
        .notes-box { background: #f8fafc; border-left: 3px solid #FF6500; padding: 12px 16px; margin-top: 18px; border-radius: 0 8px 8px 0; font-size: 13px; color: #334155; }
        .footer { background: #f8fafc; padding: 16px 24px; text-align: center; font-size: 11px; color: #94a3b8; border-top: 1px solid #e2e8f0; }
        .cta-btn { display: inline-block; background: #FF6500; color: #ffffff !important; text-decoration: none; padding: 10px 20px; border-radius: 8px; font-weight: bold; font-size: 13px; margin-top: 16px; }
      </style>
    </head>
    <body>
      <div class="card">
        <div class="header">
          <h1>DCR LOGISTICS • NEW LEAD RECEIVED</h1>
          <p>Commercial Lead Reference: <strong>${id}</strong></p>
        </div>
        <div class="content">
          <span class="badge">${isQuote ? 'Quotation Request' : 'Contact Message'}</span>
          <h2 style="font-size: 18px; margin: 0 0 16px 0; color: #0f172a;">Customer Requirement Overview</h2>
          
          <table class="table">
            <tr>
              <td class="label">Client Name</td>
              <td class="value">${name}</td>
            </tr>
            <tr>
              <td class="label">Company / Brand</td>
              <td class="value">${company}</td>
            </tr>
            <tr>
              <td class="label">Phone Number</td>
              <td class="value"><a href="tel:${phone}" style="color: #FF6500; text-decoration: none; font-weight: bold;">${phone}</a></td>
            </tr>
            <tr>
              <td class="label">Email Address</td>
              <td class="value">${email ? `<a href="mailto:${email}" style="color: #0B192C;">${email}</a>` : '<span style="color:#94a3b8">Not Provided</span>'}</td>
            </tr>
            <tr>
              <td class="label">Service Required</td>
              <td class="value" style="color: #FF6500;">${resolvedService}</td>
            </tr>
            ${isQuote ? `
            <tr>
              <td class="label">Required Space</td>
              <td class="value">${resolvedSpace}</td>
            </tr>
            <tr>
              <td class="label">Expected Start Date</td>
              <td class="value">${startDate || 'Flexible'}</td>
            </tr>
            ` : ''}
            <tr>
              <td class="label">Target Location</td>
              <td class="value">${location}</td>
            </tr>
          </table>

          <div class="notes-box">
            <strong>Notes / Scope:</strong><br />
            ${resolvedNotes}
          </div>

          ${email ? `
            <div style="text-align: center; margin-top: 20px;">
              <a href="mailto:${email}?subject=Regarding Your Quote Request [${id}] - DCR Logistics" class="cta-btn">Reply Directly to Client</a>
            </div>
          ` : ''}
        </div>
        <div class="footer">
          DCR Logistics • Attibele Industrial Corridor, Bangalore – 562107, India<br />
          Dispatch Phone: +91 8792886452
        </div>
      </div>
    </body>
    </html>
  `;

  // 2. HTML Email for Customer / Sender (Acknowledgment Copy)
  const customerSubject = `Quotation Request Received - DCR Logistics [Ref: ${id}]`;
  const customerHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #f8fafc; margin: 0; padding: 24px; color: #0f172a; }
        .card { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); }
        .header { background: #0B192C; padding: 28px 24px; text-align: left; border-bottom: 3px solid #FF6500; }
        .header h1 { color: #ffffff; margin: 0; font-size: 22px; font-weight: 800; }
        .header p { color: #FF6500; margin: 4px 0 0 0; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; }
        .content { padding: 28px 24px; }
        .lead-p { font-size: 15px; line-height: 1.6; color: #334155; margin-top: 0; }
        .ref-box { background: #f1f5f9; border: 1px solid #cbd5e1; border-radius: 10px; padding: 12px 16px; text-align: center; margin: 20px 0; font-family: monospace; font-size: 16px; font-weight: bold; color: #0f172a; letter-spacing: 1px; }
        .summary-card { background: #fafafa; border: 1px solid #e5e5e5; border-radius: 12px; padding: 16px; margin: 20px 0; }
        .summary-title { font-size: 12px; font-weight: bold; text-transform: uppercase; color: #64748b; margin-bottom: 10px; border-bottom: 1px solid #e5e5e5; padding-bottom: 6px; }
        .summary-item { display: flex; justify-content: space-between; font-size: 13px; padding: 4px 0; }
        .summary-label { color: #64748b; }
        .summary-value { font-weight: 600; color: #0f172a; }
        .footer { background: #f8fafc; padding: 20px 24px; text-align: center; font-size: 12px; color: #64748b; border-top: 1px solid #e2e8f0; line-height: 1.6; }
        .cta-btn { display: inline-block; background: #25D366; color: #ffffff !important; text-decoration: none; padding: 12px 24px; border-radius: 10px; font-weight: bold; font-size: 14px; margin-top: 10px; }
      </style>
    </head>
    <body>
      <div class="card">
        <div class="header">
          <h1>DCR LOGISTICS</h1>
          <p>WE KEEP YOUR BUSINESS MOVING</p>
        </div>
        <div class="content">
          <p class="lead-p">
            Dear <strong>${name}</strong>,<br /><br />
            Thank you for reaching out to <strong>DCR Logistics</strong>. We have successfully registered your commercial requirement under Reference ID:
          </p>

          <div class="ref-box">
            Reference ID: ${id}
          </div>

          <div class="summary-card">
            <div class="summary-title">Summary of Your Request</div>
            <div class="summary-item">
              <span class="summary-label">Service:</span>
              <span class="summary-value">${resolvedService}</span>
            </div>
            ${company !== 'Not Specified' ? `
            <div class="summary-item">
              <span class="summary-label">Company:</span>
              <span class="summary-value">${company}</span>
            </div>
            ` : ''}
            <div class="summary-item">
              <span class="summary-label">Contact Phone:</span>
              <span class="summary-value">${phone}</span>
            </div>
            ${isQuote ? `
            <div class="summary-item">
              <span class="summary-label">Required Space:</span>
              <span class="summary-value">${resolvedSpace}</span>
            </div>
            ` : ''}
            <div class="summary-item">
              <span class="summary-label">Facility Location:</span>
              <span class="summary-value">Attibele Hub, Bangalore (Karnataka – 562107)</span>
            </div>
          </div>

          <p style="font-size: 13px; color: #475569; line-height: 1.6;">
            Our commercial operations desk at Attibele is reviewing your operational specifications and will reach out to you within <strong>2 to 4 business hours</strong> with rate estimates and feasibility details.
          </p>

          <div style="text-align: center; margin: 24px 0 10px 0;">
            <p style="font-size: 12px; color: #64748b; margin-bottom: 8px;">Need immediate warehouse space or urgent dispatch rates?</p>
            <a href="https://wa.me/918792886452?text=Hello%20DCR%20Logistics%2C%20I%20have%20submitted%20Quote%20Request%20${id}.%20Can%20we%20discuss%20urgently%3F" class="cta-btn">
              Chat on WhatsApp Directly
            </a>
          </div>
        </div>

        <div class="footer">
          <strong>DCR Logistics</strong><br />
          Attibele, Bangalore, Karnataka – 562107, India.<br />
          Commercial Dispatch Phone: +91 8792886452<br />
          Official Emails: info@dcrlogistics.in | dhruvanth@dcrlogistics.in
        </div>
      </div>
    </body>
    </html>
  `;

  // DELIVERY LOGIC: Check available credentials
  const resendApiKey = process.env.RESEND_API_KEY;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const smtpHost = process.env.SMTP_HOST || 'smtpout.secureserver.net'; // Default GoDaddy SMTP
  const smtpPort = parseInt(process.env.SMTP_PORT || '465', 10);

  // Strategy A: RESEND API
  if (resendApiKey) {
    try {
      const resend = new Resend(resendApiKey);
      const fromEmail = process.env.RESEND_FROM || 'DCR Logistics <onboarding@resend.dev>';

      // 1. Send to Company Receivers
      await resend.emails.send({
        from: fromEmail,
        to: COMPANY_RECEIVERS,
        subject: companySubject,
        html: companyHtml,
        reply_to: email || undefined
      });

      // 2. Send Acknowledgment copy to Customer (if valid email provided)
      if (email && email.includes('@')) {
        await resend.emails.send({
          from: fromEmail,
          to: [email],
          subject: customerSubject,
          html: customerHtml,
          reply_to: 'info@dcrlogistics.in'
        });
      }

      return res.status(200).json({
        success: true,
        message: 'Emails dispatched successfully via Resend API to both company and sender.',
        id
      });
    } catch (err) {
      console.error('Resend delivery error:', err);
      return res.status(500).json({
        success: false,
        error: `Resend error: ${err.message || err}`
      });
    }
  }

  // Strategy B: NODEMAILER / SMTP (GoDaddy, Gmail, Zoho, etc.)
  if (smtpUser && smtpPass) {
    try {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465, // true for 465, false for 587
        auth: {
          user: smtpUser,
          pass: smtpPass
        },
        tls: {
          rejectUnauthorized: false
        }
      });

      const senderFrom = `"DCR Logistics" <${smtpUser}>`;

      // 1. Send to Company Receivers
      await transporter.sendMail({
        from: senderFrom,
        to: COMPANY_RECEIVERS.join(', '),
        replyTo: email || smtpUser,
        subject: companySubject,
        html: companyHtml
      });

      // 2. Send Acknowledgment Copy to Customer
      if (email && email.includes('@')) {
        await transporter.sendMail({
          from: senderFrom,
          to: email,
          replyTo: 'info@dcrlogistics.in',
          subject: customerSubject,
          html: customerHtml
        });
      }

      return res.status(200).json({
        success: true,
        message: 'Emails dispatched successfully via SMTP to both company and sender.',
        id
      });
    } catch (err) {
      console.error('SMTP delivery error:', err);
      return res.status(500).json({
        success: false,
        error: `SMTP error: ${err.message || err}`
      });
    }
  }

  // If no credentials configured yet:
  return res.status(400).json({
    success: false,
    error: 'Email service credentials not configured. Please add SMTP_USER & SMTP_PASS (for GoDaddy/Gmail) or RESEND_API_KEY in your Vercel Environment Variables.',
    leadSavedLocally: true,
    id
  });
}
