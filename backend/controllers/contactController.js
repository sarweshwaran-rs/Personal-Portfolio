const db = require("../config/firestore.js");

exports.submitContact = async (req, res) => {
    try {
        const {personname, email, linkedinurl } = req.body;
        
        if (!personname || !email || !linkedinurl) {
            return res.status(400).json({error : "All fields are required"});
        }

        await db.collection("details").add({
            personname, 
            email,
            linkedinurl,
            timestamp: new Date()
        });
        res.status(201).json({message: "Contact saved Successfully"});
        console.log("Data Saved successfully");
    } catch (error) {
        console.log(`Error in saving data: ${error}`);
        res.status(500).json({error:"Failed to save contact"});
    }
};