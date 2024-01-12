import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors';
const { Schema } = mongoose;

const app = express()
const port = 3000

app.use(express.json())
app.use(cors())

const ProductSchema = new Schema({
    image: String,
    type: String,
    name: String,
    price: String
})

const ExamPart1 = mongoose.model('ExamPart1', ProductSchema);

app.get('/product', async (req, res) => {
    const data = await ExamPart1.find({})
    res.send(data)
})

app.get('/product/:id', async (req, res) => {
    try {
        const { id } = req.params
        const data = await ExamPart1.findById(id).exec();
        res.status(200).send(data)
    } catch (error) {
        res.status(404).send(error)

    }
})

app.post('/product', async (req, res) => {
    try {
        const data = new ExamPart1(req.body)
        await data.save()
        res.status(200).send("Create new Product")
    } catch (error) {
        res.status(404).send("Not Create new Product")

    }

})

app.delete('/product/:id', async (req, res) => {
    try {
        const { id } = req.params
        const data = await ExamPart1.findByIdAndDelete(id).exec();
        res.status(200).send("Deleted product")
    } catch (error) {
        res.status(404).send("Not Deleted Product")

    }
})

mongoose.connect('mongodb+srv://AliIsmayil:ali123@cluster0.tzldidp.mongodb.net/')
    .then(() => console.log('Connected!'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})