//Import connection
import mongoose from '../db/connection'
import {IAuthor} from './interfaces'

/* Create Author as new schema
    properties:
    firstName (string),
    lastName (string),
    cookbooks[] (reference to Cookbook model by id)
*/

const AuthorSchema: mongoose.Schema = new mongoose.Schema ({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    cookbooks: [
            {
                ref: 'Cookbooks',
                type: mongoose.Schema.Types.ObjectId
            }
    ]
})


//export model named "Author"
const Author = mongoose.model<IAuthor>('Authors', AuthorSchema);
module.exports = Author;
