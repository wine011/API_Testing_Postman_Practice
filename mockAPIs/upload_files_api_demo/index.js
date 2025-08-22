const express = require("express");
const multer = require("multer");
const fs = require("fs");
const path = require("path");

const app = express();

// Ensure "uploads" folder exists
const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Configure Multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir); // always inside uploads/
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname); // timestamp prefix
  },
});

const upload = multer({ storage });

// ✅ Single File Upload
app.post("/uploadFile", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }
  res.json({
    fileName: req.file.filename,
    fileDownloadUri: `/uploads/${req.file.filename}`,
    fileType: req.file.mimetype,
    size: req.file.size,
  });
});

// ✅ Multiple File Upload
app.post("/uploadMultipleFiles", upload.array("files", 5), (req, res) => {
  if (!req.files || req.files.length === 0) {
    return res.status(400).json({ message: "No files uploaded" });
  }
  const fileInfos = req.files.map((file) => ({
    fileName: file.filename,
    fileDownloadUri: `/uploads/${file.filename}`,
    fileType: file.mimetype,
    size: file.size,
  }));
  res.json(fileInfos);
});

// Serve uploaded files statically
app.use("/uploads", express.static(uploadDir));

app.listen(3000, () => {
  console.log("🚀 Server running at http://localhost:3000");
});
