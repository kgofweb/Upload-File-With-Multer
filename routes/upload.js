const express = require('express');
const router = express.Router();

// Multer
const upload = require('../middlewares/multer');

router.post('/upload', (req, res) => {
   upload(req, res, (error) => {
      // Check error
      if(error) {
         res.render('index', {
            message: error
         });
      } else {
         // console.log(req.file);
         // res.send('test');

         // Display images
         if(req.file == undefined) {
            res.render('index', {
               message: 'Error: No file selected'
            });
         } else {
            res.render('index', {
               message: 'File Uploaded',
               file: `uploads/${req.file.filename}`
            });
         }
      }
   });
});

module.exports = router;