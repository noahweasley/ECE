const express = require("express")
// const request = require('request');
const pdfModel = require("../db")

const router = express.Router()

// getting all pdfs
router.get("/", async (req, res)=>{
  const allPdfs = await pdfModel.find()
  if(allPdfs){
  res.status(200).json(allPdfs)
  }else{
    res.status(500).json({mesage: "internal server error"})
  }
})

// getting the download link of a particular pdfs
router.get("/download/:id", async (req, res)=>{
  const id = req.params.id
  const pdf = await pdfModel.findById(id)
  try{
   res.setHeader('Content-Type', 'application/pdf');
   res.setHeader('Content-Disposition', `attachment; filename=${pdf.fileName}.pdf`);
      const url = pdf.url
      request.get(url).pipe(res)
  }catch(err){
    res.redirect("/")
    console.log(`There was an error: ${err}`)
  }
})

module.exports = router