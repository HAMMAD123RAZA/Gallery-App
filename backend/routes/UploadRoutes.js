const { Router } = require('express')
const uploadMiddleware = require('../middlewares/Multer')
const  uploadSchema  = require('../models/UploadModel')
const router = Router()

router.post('/api/save', uploadMiddleware.single('photo'), (req, res) => {
  const photo = req.file.filename
  console.log(photo)

  uploadSchema
    .create({ photo })
    .then((data) => {
      console.log(' uploaded successfully')
      console.log(data)
      res.send(data)
    })
    .catch((err) => {
      console.log(err)
    })
})

router.get('/api/get', async (req, res) => {
  const data2 = await uploadSchema.find().sort({ createdAt: 'descending' })
  res.send(data2)
  console.log(data2)
})

router.delete('/api/delete/:id', async (req, res) => {
  try {
    const id = req.params.id;
    await uploadSchema.findByIdAndDelete(id);
    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router