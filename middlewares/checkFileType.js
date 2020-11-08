const path = require('path');

module.exports = (file, callback) => {
   // Allowed exit
   const fileTypes = /jpeg|jpg|png|gif/;
   // Check exit
   const extension = fileTypes.test(path.extname(file.originalname).toLowerCase());
   // Check mime
   const mimeType = fileTypes.test(file.mimetype);

   if(extension && mimeType) {
      return callback(null, true);
   } else {
      callback('Error: Only images !');
   }
}