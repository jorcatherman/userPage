import express, { response } from 'express'
import * as bodyParser from 'body-parser'
import cors from 'cors'
import axios from 'axios'
import User from './models/user.model'
import { connect } from 'http2'

const app: express.Application = express();


require('../build/config/mongoose.config')
app.use(cors());
app.use(express.json())
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }))
require('../build/routes/user.routes')(app);

app.listen(8000, () =>{
    console.log("Listening at port 8000")
})