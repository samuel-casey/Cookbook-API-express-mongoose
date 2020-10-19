const Author = require('../models/Author')
const Cookbook = require('../models/Cookbook')
import mongoose, {db} from './connection'
import { Schema } from 'mongoose'
import {IAuthor, ICookbook} from '../models/interfaces'

Author.find().deleteMany(()=> {
  Cookbook.find().deleteMany(() => {
    let meera = Author.create({
      firstName: 'meera',
      lastName: 'sodha'
    }).then((author: IAuthor) => {
      Promise.all([
        Cookbook.create({
          title: 'made in india',
          yearPublished: 2014
        }).then((cookbook: {type: Schema.Types.ObjectId}) => {
          author.cookbooks.push(cookbook)
        }),
        Cookbook.create({
          title: 'fresh india',
          yearPublished: 2018
        }).then((cookbook: {type: Schema.Types.ObjectId}) => {
          author.cookbooks.push(cookbook)
        })
      ]).then(() => {
        author.save()
      })
    })
    let alison = Author.create({
      firstName: 'alison',
      lastName: 'roman'
    }).then((author: IAuthor )=> {
      Promise.all([
        Cookbook.create({
          title: 'dining in',
          yearPublished: 1917
        }).then((cookbook: {type: Schema.Types.ObjectId}) => {
          author.cookbooks.push(cookbook)
        })
      ]).then(() => {
        author.save()
      })
    })
    let kenji = Author.create({
      firstName: 'j. kengi',
      lastName: 'lópez-alt'
    }).then((author: IAuthor) => {
      Promise.all([
        Cookbook.create({
          title: 'the food lab',
          yearPublished: 2015
        }).then((cookbook: {type: Schema.Types.ObjectId}) => {
          author.cookbooks.push(cookbook)
        })
      ])
      let bFlay= Author.create({
      firstName: 'Bobby',
      lastName: 'Flay'
      }).then((author: IAuthor) => {
      Promise.all([
        Cookbook.create({
          title: 'Bobby Flay Fit',
          yearPublished: 2018
        }).then((cookbook: {type: Schema.Types.ObjectId}) => {
          author.cookbooks.push(cookbook)
        }),
         Cookbook.create({
          title: "Boy Gets Grill",
          yearPublished: 2009
        })
        .then((cookbook: {type: Schema.Types.ObjectId}) => {
          author.cookbooks.push(cookbook)
        })
      ])
      .then(() => {
        author.save()
      })
    }).catch((error: Error )=> console.log(error))
  })
})
})

db.close()
