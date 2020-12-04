//import connection
import mongoose from '../db/connection'
import {ICookbook} from './interfaces'


/* Create Cookbook as new schema
    Properties:
    title (string),
    yearPublished (integer),
*/
const CookbookSchema: mongoose.Schema = new mongoose.Schema ({
    title: {type: String, required: true},
    yearPublished: {type: Number, required: true}
})


//export model
const Cookbook = mongoose.model<ICookbook>('Cookbooks', CookbookSchema);
module.exports = Cookbook;