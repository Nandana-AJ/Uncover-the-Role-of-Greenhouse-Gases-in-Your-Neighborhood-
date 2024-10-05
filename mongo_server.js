const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/ghg-mapping', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

// Define a schema for uploaded datasets
const datasetSchema = new mongoose.Schema({
    filename: String,
    dateUploaded: { type: Date, default: Date.now }
});

const Dataset = mongoose.model('Dataset', datasetSchema);

// Handle file upload and store in database
app.post('/upload', upload.single('dataset'), async (req, res) => {
    const file = req.file;
    if (!file) {
        return res.status(400).send('No file uploaded.');
    }

    // Save file info to the database
    const dataset = new Dataset({ filename: file.filename });
    await dataset.save();

    res.send('File uploaded and saved to database.');
});
