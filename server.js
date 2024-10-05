const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(express.static('public'));  // Serve static files

// Handle file upload
app.post('/upload', upload.single('dataset'), (req, res) => {
    const file = req.file;
    if (!file) {
        return res.status(400).send('No file uploaded.');
    }
    res.send('File uploaded successfully.');
});

// Serve the app on port 3000
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
