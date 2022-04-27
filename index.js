/*requiring the express library */
const express = require("express");
/*initialzing my server */
const app = express()
/*assigning my port to a enviornment variable and if not then making th port 5001 */
const PORT = process.env.PORT || 5001;
/*using express json to parse text into json format */
app.use(express.json());

app.get('/cars',(req,res)=>{
    res.status(200).send({
        make: 'Chevy',
        model: 'Camaro'

    })
})

app.get('/',(req,res) =>{
    res.send("<H1>Home Page</H1>")

});


app.listen(PORT, () => console.log(`server running on http://localhost:${PORT}`))