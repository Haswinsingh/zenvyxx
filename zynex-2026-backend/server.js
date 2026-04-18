import express from "express";
import cors from "cors";
import { google } from "googleapis";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// using credentials.json for Google Service Account
const auth = new google.auth.GoogleAuth({
  keyFile: "credentials.json",
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const SHEET_ID = process.env.SHEET_ID;

app.post("/register", async (req, res) => {
  try {
    const DEADLINE = new Date("2026-05-01T12:00:00+05:30").getTime();
    if (Date.now() > DEADLINE) {
      return res.status(403).json({ success: false, error: "Registration deadline exceeded" });
    }

    const data = req.body;

    // Create an ordered array of values to ensure they match google sheet columns
    // Team Name | Leader Name | Year | Student ID | Email | Phone | Team Size |
    // Member1 Name | Member1 Email | Member2 Name | Member2 Email | ...

    const rowValues = [
      data.teamName || "",
      data.leaderName || "",
      data.yearDept || "",
      data.studentId || "",
      data.email || "",
      data.phone || "",
      data.teamSize || "",
    ];

    // Add members sequentially based on user requirement
    if (data.members && data.members.length > 0) {
      data.members.forEach((member) => {
        rowValues.push(member.name || "");
        rowValues.push(member.email || "");
        rowValues.push(member.phone || "");
        rowValues.push(member.yearDept || "");
        rowValues.push(member.studentId || "");
      });
    }

    const client = await auth.getClient();
    const sheets = google.sheets({ version: "v4", auth: client });

    await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: "Sheet1!A1",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [rowValues],
      },
    });

    // Send Email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Zenvyxx Hackathon" <${process.env.EMAIL_USER}>`,
      to: data.email,
      subject: "Zenvyxx Registration Confirmed 🚀",
      html: `
  <div style="margin:0; padding:0; font-family: 'Segoe UI', Arial, sans-serif; background: linear-gradient(135deg, #4a00e0, #8e2de2); padding:40px 0;">
    
    <div style="max-width:650px; margin:auto; background:#ffffff; border-radius:15px; overflow:hidden; box-shadow:0 8px 25px rgba(0,0,0,0.2);">
      
      <!-- Header -->
      <div style="background: linear-gradient(135deg, #4a00e0, #8e2de2); color:white; text-align:center; padding:30px;">
        <h1 style="margin:0; font-size:28px;">🚀 Zenvyxx Hackathon</h1>
        <p style="margin-top:8px; opacity:0.9;">Innovation Starts Here</p>
      </div>

      <!-- Body -->
      <div style="padding:25px; color:#333;">
        <p style="font-size:16px;">Dear Participant,</p>

        <p style="font-size:15px;">
          Your registration for <b style="color:#4a00e0;">Zenvyxx Hackathon</b> has been successfully confirmed 🎉  
        </p>

        <!-- Timeline Card -->
        <div style="background:#f5f7ff; padding:15px; border-radius:10px; margin-top:20px;">
          <h3 style="margin-top:0; color:#4a00e0;">📅 Event Timeline</h3>

          <p>🔹 <b>Round 1 – Neural Aptitude Assessment</b><br/>May 3, 6:00 PM</p>
          <p>🔹 <b>Round 1 Shortlisting Results</b><br/>May 4, 8:00 PM</p>

          <p>🔹 <b>Round 2 – Project Phase</b><br/>
          May 4 – May 9,12:00 PM<br/>
          • Problem Selection<br/>
          • Abstract + PPT Submission</p>

          <p>🔹 <b>Round 2 Shortlisting</b><br/>May 10,8:00 PM</p>

          <p>🔹 <b>Final Hackathon Day</b><br/>May 12</p>
        </div>

        <!-- CTA -->
        <div style="text-align:center; margin:30px 0;">
          <a href="https://chat.whatsapp.com/Cr9J3nOKkZeIvAnWPxRyEx" 
             style="background: linear-gradient(135deg, #25D366, #128C7E); color:white; padding:14px 25px; text-decoration:none; border-radius:30px; font-weight:bold; font-size:15px; box-shadow:0 4px 10px rgba(0,0,0,0.2);">
             📲 Join WhatsApp Group
          </a>
        </div>

        <p style="font-size:14px; color:#555;">
          Stay active in the group and follow all deadlines carefully.
        </p>

        <!-- Footer -->
        <div style="margin-top:30px; border-top:1px solid #eee; padding-top:15px; text-align:center;">
          <p style="margin:5px;"><b>Team Zenvyxx</b></p>
          <p style="margin:5px; font-size:13px; color:#777;">Code Club</p>
          <p style="margin:5px; font-size:13px; color:#777;">Sri Sairam Engineering College</p>
        </div>

      </div>
    </div>
  </div>
  `,
    });

    res.json({ success: true, message: "Registration successful" });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ success: false, error: "Registration failed" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
