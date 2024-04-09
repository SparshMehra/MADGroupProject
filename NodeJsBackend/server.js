const express = require('express');
const cors = require('cors'); // needed for cross-origin requests protection
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());


let globalData = {
    // Personal details
    fullName: "John Doe",
    DOB: "1900-01-01",
    email: "email@example.com",
    contact: "0000000000",
    gender: "male",

    // Burial details
    achievements: "None",
    graveLocation: "well",
    casket: "Shroud",
    graveMarker: "GPS"
};


// Endpoint to download current global data
app.get('/download', (req, res) => {
    res.json(globalData);
});

// Endpoint to upload new data
app.post('/upload', (req, res) => {
    console.log(req.body)
    globalData = { ...globalData, ...req.body };
    console.log(globalData);
    res.status(200).json({ message: 'Data uploaded successfully' });
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
