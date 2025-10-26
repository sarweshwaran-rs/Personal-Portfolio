const {google} = require('googleapis');

async function sendEmail(auth, to, subject, html) {
    const gmail = google.gmail({ version: "v1", auth });

    const fromAddress = `Portfolio Contact <${process.env.GOOGLE_GMAIL_USER}>`;
    const messageParts = [
        "Content-Type: text/html; charset=utf-8",
        "MIME-Version: 1.0",
        `from: ${fromAddress}`,
        `To: ${to}`,
        `Subject: ${subject}`,
        "",
        html,
    ];

    const message = messageParts.join("\n");

    const encodedMessage = Buffer.from(message)
        .toString("base64")
        .replace(/\+/g, "-")
        .replace(/\//g, "_")
        .replace(/=+$/, "");

    try {
        const res = await gmail.users.messages.send({
            userId: "me",
            requestBody: {
                raw: encodedMessage,
            },
        });

        console.log("Email sent successfully!", res.data.id);
        return res.data;
    } catch (error) {
        console.error("Email sending failed:", error);
        throw error;
    }
}

module.exports  = sendEmail;