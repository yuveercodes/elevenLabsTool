const express=require("express")
const https = require("follow-redirects").https;
const app = express();

app.get("/:num", (req,res) => {
    var finalData = {};
    https.get(`https://script.google.com/macros/s/AKfycbxuIoJMc79TD6c8h7Nbmrif-8PPTLkMKtf1rMatHVYnQ7tod2uI5YF8kGNW6b3ac_Aa/exec?path=Orders&action=readOne&num=${req.params.num}` , resp => {
        let data ="";
        resp.on('data', chunk => data+=chunk);
        resp.on('end', () => {
            finalData = JSON.parse(data);
            res.send(finalData);
        })
    })

})

app.listen(3000, () => console.log("running"))