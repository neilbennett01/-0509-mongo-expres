import { MongoClient } from "mongodb";
import express from "express";
import cors from "cors"

const app = express()
app.use(express.json()) //clarity
app.use(cors()) //clarity

app.listen(5050, () => {console.log("listening on Port: 5050!")})

const getDb = async () => {
    const client = new MongoClient("mongodb+srv://neilbennett01:Password@cluster0.oautb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
    await client.connect()

    return client.db("carCollection")
}

const getCarTypes = async () => {
    const db = await getDb()

    return db.collection("Cars")
}

