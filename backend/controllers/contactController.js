const db = require("../config/firestore.js");
const mailer = require('../utils/mailer.js');

exports.submitContact = async (req, res) => {
    try {
        const { personname, email, linkedinurl } = req.body;

        if (!personname || !email || !linkedinurl) {
            return res.status(400).json({ error: "All fields are required" });
        }

        await db.collection("details").add({
            personname,
            email,
            linkedinurl,
            timestamp: new Date()
        });

        //send mail to the user who contacted
        await mailer(
            email,
            "Thanks for contacting me",
            `Hi ${personname}, I am Sarweshwaran R S, thank you for contacting me`,
            `<p1>Hi ${personname},</p><p>Thanks for Contacting me via my Portfolio, I have received your information, I'll respond to you soon</p><p><b>Feel free to contact me through Linked In:${process.env.LINKEDIN_URL}}`
        );

        //Send the Notification to my mail
        await mailer(
            process.env.GOOGLE_PERSONAL_EMAIL,
            "New Portfolio Submitted",
            `New Submission: ${personname} - email:${email}, LinkedIn URL: ${linkedinurl}`,
            `
            <body style="margin:0; padding:0; background-color:#f5f5f5; font-family:Arial, sans-serif;">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%"
                    style="background-color:#f5f5f5; margin:0; padding:24px 0;">
                    <tr>
                        <td style="margin:0 auto; padding:0;">
                            <!-- Main Container -->
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600"
                                style="margin:0 auto; background-color:#0496FF; border-radius:20px; overflow:hidden;">
                                <tr>
                                    <td style="padding:20px;">

                                        <!-- Card Section -->
                                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%"
                                            style="background-color:#f9f9f9; border:1px solid #270b98; border-radius:20px;">
                                            <tr>
                                                <td style="padding:20px; text-align:center;">
                                                    <table role="presentation" cellspacing="0" cellpadding="0" border="0"
                                                        style="margin:0 auto;">
                                                        <tr>
                                                            <td style="vertical-align:middle; padding-right:12px;">
                                                                <img src="https://drive.google.com/file/d/10HDpMWiY5SY1OABCX2UhZAiyMD3nlqjj/view?usp=sharing" 
                                                                    alt="portfolio-logo"
                                                                    width="40" height="40" style="display:block;"
                                                                />
                                                            </td>
                                                            <td style="vertical-align:middle; text-align:left;">
                                                                <p
                                                                    style="font-size:16px; font-weight:600; color:#270b98; margin:0;">
                                                                    New Portfolio Submission - Received
                                                                </p>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>

                            <!-- Message Section -->
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%"
                                style="margin-top:15px; background-color:#ffffff; border:1px solid #ddd; border-radius:12px;">
                                <tr>
                                    <td
                                        style="padding:20px; text-align:left; font-size:15px; line-height:1.6; color:#333;">
                                        <p style="margin:0 0 12px 0;">Hi, <strong>Sarweshwaran R S</strong>,</p>
                                        <p style="margin:0 0 12px 0;"> You have received a new portfolio submission.
                                            Below are the details: </p>
                                        <p style="margin:0 0 8px 0;"> <strong>Name:</strong>${personname}</p>
                                        <p style="margin:0 0 8px 0;"> <strong>Email:</strong>${email}</p>
                                        <p style="margin:0;"> <strong>LinkedIn:</strong> ${linkedinurl}</p>
                                    </td>
                                </tr>
                            </table>

                            <!-- Footer -->
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%"
                                style="margin-top:15px; background-color:#f9f9f9; border-radius:20px;">
                                <tr>
                                    <td style="padding:10px; text-align:center; font-size:13px; color:#333;">
                                        &copy; 2025 Sarweshwaran R S
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
                <!-- End Main Container -->
            </body>`
        );

        res.status(201).json({ message: "Contact saved Successfully & Mail Sent" });
        console.log("Data Saved successfully");
    } catch (error) {
        console.log(`Error in saving data: ${error}`);
        res.status(500).json({ error: "Failed to save contact & Mail not sent" });
    }
};