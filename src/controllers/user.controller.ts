import { request, Request, response, Response } from 'express'
import User = require('../models/user.model')
import * as http from 'http'
import fetch from 'node-fetch'
import axios from 'axios'
import { db } from '../models/user.model'


module.exports.list = (request: Request, response: Response) =>{
    User.find({})
        .then(users =>{
            response.json(users)
        })
        .catch(err =>{
            response.status(400).json(err)
        })
}
module.exports.create = (request: Request, response: Response) =>{
    const { first_name, last_name, email, avatar} = request.body as User;
    User.create({
        first_name,
        last_name,
        email, 
        avatar
    })
    .then(user=>{
        response.json(user)
    })
    .catch(err =>{
        response.status(400).json(err)
    })
}

module.exports.detail = (request: Request, response: Response)=>{
    const {id} = request.params;
    User.findOne({_id: id})
        .then(user=>{
            response.json(user)
        })
        .catch(err =>{
            response.status(400).json(err)
        })
}

module.exports.update = (request: Request, response: Response) =>{
    const {id} = request.params;
    const { first_name, last_name, email, avatar} = request.body as User;
    User.findOneAndUpdate({_id: id},{
        first_name,
        last_name,
        email,
        avatar
    },
    {
        new: true,
        useFindAndModify: true
    })
        .then(user=>{
            response.json(user)
        })
        .catch(err =>{
            response.status(400).json(err)
        })
}
module.exports.delete = (request: Request, response: Response)=>{
    const {id} = request.params;
    User.deleteOne({_id: id})
        .then(deleteConfirmation=>{
            response.json(deleteConfirmation);
        })
        .catch(err =>{
            response.status(400).json(err)
        })
}
