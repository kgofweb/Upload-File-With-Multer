const multer = require('multer');

// Check file
const checFileType = require('./checkFileType');

// File dictionary
const MIME_TYPES = {
   'image/jpg': 'jpg',
   'image/jpeg': 'jpg',
   'image/png': 'png',
   'image/gif': 'gif',
} 

const storage = multer.diskStorage({
   // Destination
   destination: (req, file, callback) => {
      callback(null, './public/uploads');
   },
   // Using file name
   filename: (req, file, callback) => {
      // Generate a new name of file
      const name = file.originalname.split(' ').join('_');
      const extension = MIME_TYPES[file.mimetype];
      callback(null, name + Date.now() + '.' + extension);
   }
});

module.exports = multer({
   storage,
   limits: { fileSize: 1000000 },
   fileFilter: (req, file, callback) => {
      checFileType(file, callback);
   }
}).single('myImage');