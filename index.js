const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const courses = require('./data/programming-language.json')
const cors = require('cors')
app.use(cors())
app.get('/',(req, res) =>{
    res.send('API Running')
})

app.get('/courses', (req, res) =>{
    res.send(courses)
})

app.get('/course/:id',(req, res)=>{
    const id = req.params.id
    const selectedCourse = courses.find(n => n.courseName_id === id)
    res.send(selectedCourse)
    console.log(req.params)
})
app.listen(port, () => {
    console.log('Server running on port test', port)
})

