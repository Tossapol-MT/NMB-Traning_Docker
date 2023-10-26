const express = require('express')

const PORT = 5011

const app = express();

app.get('/',(req,res) => {
    return res.json({
        "MIC" : "Docker hub push for latest"
    })
})

app.listen(PORT,() =>{
    console.log(`your listing port on ${PORT}`)
})