import { Application, Request, Response } from "express";
import axios from 'axios'
import User = require('../models/user.model')
import * as http from 'http'
import fetch from 'node-fetch'
import { db } from '../models/user.model'

const UserController = require("../controllers/user.controller")
//Not sure what type I should assign to this.

module.exports = function(app: Application){
    // app.post('/api/users', UserController.initialize)
    app.get('/api/users', UserController.list)
    app.post('/api/users/create', UserController.create);
    app.get('/api/users/:id', UserController.detail);
    app.put('/api/users/update/:id', UserController.update);
    app.delete("/api/users/delete/:id/", UserController.delete)
    app.get('/initialize', (req: Request, res: Response)=>{
        const fetchRandomData = () =>{ 
    return axios.get("https://reqres.in/api/users?per_page=20")
    .then(({data}) =>{
        for(let i =0; i < data.data.length; i++){
            const user: User = new User({ 
                first_name: data.data[i].first_name, 
                last_name: data.data[i].last_name, 
                email: data.data[i].email, 
                avatar: data.data[i].avatar 
            })
            user.save();
            console.log(user)
            console.log(user.first_name)
        }
    })
    .catch((err)=>{
        console.log(err);
    })
}
fetchRandomData();
    })
}