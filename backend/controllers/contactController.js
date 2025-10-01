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
            `
                <body style="margin:0; padding:0; background-color:#f5f5f5; font-family:Arial, sans-serif;">
                    <!-- Outer container (Blue rounded box) -->
                    <div style="background-color:#0496FF; border-radius:20px; max-width:650px; margin:30px auto; padding:20px;">

                        <!-- Header -->
                        <div style="background-color:#ffffff; border-radius:12px; padding:15px; text-align:center; margin-bottom:20px;">
                            <span style="font-size:18px; font-weight:600; color:#270b98;">Contact Submission-Received</span>
                        </div>

                        <!-- Content Section -->
                        <div style="background-color:#ffffff; border-radius:12px; padding:20px; font-size:15px; line-height:1.5; color:#333;">
                            <p style="margin:0 0 12px 0;">Hi, <strong>${personname}</strong>,</p>
                            <p style="margin:0 0 12px 0;">&emsp; I am <b>Sarwesharan R S</b>. Thank you for reaching out! I have received your message and will get back to you as soon as possible.</p>
                            <p style="margin:0;">Best Regards:<br>Sarweshwaran R S</p>
                        </div>

                        <!-- Footer -->
                        <div style="background-color:#ffffff; border-radius:12px; text-align:center; font-size:13px; color:#555; margin-top:20px; padding:10px;">
                            &copy; 2025 Sarweshwaran R S
                            <a href="https://www.linkedin.com/in/sarweshwaranrs" target="_blank"
                                style="text-decoration:none; color:inherit; margin-left:8px;">
                                <img src="https://raw.githubusercontent.com/sarweshwaranrs-dev/Personal-Portfolio/development/frontend/public/assets/images/linkedin.svg" height="20" width="20" style="vertical-align:middle;" />
                            </a>
                            <a href="https://www.github.com/sarweshwaran-rs" target="_blank"
                                style="text-decoration:none; color:inherit; margin-left:8px;">
                                <img src="https://raw.githubusercontent.com/sarweshwaranrs-dev/Personal-Portfolio/development/frontend/public/assets/images/github.svg" height="20" width="20" style="vertical-align:middle;" />
                            </a>
                        </div>
                    </div>
                </body>
            `
        );

        //Send the Notification to my mail
        await mailer(
            process.env.GOOGLE_PERSONAL_EMAIL,
            "New Portfolio Submitted",
            `
                <body style="margin:0; padding:0; background-color:#f5f5f5; font-family:Arial, sans-serif;">
                    <!-- Outer container -->
                    <div style="background-color:#0496FF; border-radius:20px; max-width:650px; margin:30px auto; padding:20px;">

                        <!-- Header -->
                        <div style="background-color:#ffffff; border-radius:12px; padding:15px; text-align:center; margin-bottom:20px;">
                            <span style="font-size:18px; font-weight:600; color:#270b98;">New Portfolio Submission</span>
                        </div>

                        <!-- Message Section -->
                        <div style="background-color:#ffffff; border:1px solid #ddd; border-radius:12px; padding:20px; margin-top:15px; font-size:15px; line-height:1.6; color:#333;">
                            <p style="margin:0 0 12px 0;">Hi, <strong>Sarweshwaran R S</strong>,</p>
                            <p style="margin:0 0 12px 0;"> &emsp; You have received a new portfolio submission. Below are the details: </p>
                            <p style="margin:0 0 8px 0;"><strong>Name:</strong> ${personname}</p>
                            <p style="margin:0 0 8px 0;"><strong>Email:</strong> ${email}</p>
                            <p style="margin:0;"><strong>LinkedIn:</strong> ${linkedinurl}</p>
                        </div>

                        <!-- Footer -->
                        <div style="background-color:#f9f9f9; border-radius:20px; text-align:center; font-size:13px; color:#333; margin-top:15px; padding:10px;">
                            &copy; 2025 Sarweshwaran R S
                        </div>
                    </div>
                </body>
            `
        );

        res.status(201).json({ message: "Contact saved Successfully & Mail Sent" });
        console.log("Data Saved successfully");
    } catch (error) {
        console.log(`Error in saving data: ${error}`);
        res.status(500).json({ error: "Failed to save contact & Mail not sent" });
    }
};