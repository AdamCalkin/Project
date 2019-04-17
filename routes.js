const express = require('express')
const router = express.Router()
// // const fs = require('fs')

// // const data = require('./dataFiles/data.json')

router.get('/',  async (req, res) => {
try{
    res.redirect('/pages/index');
}
catch (error) {
    console.error('Something went wrong: ' + error.message);
}
})
  