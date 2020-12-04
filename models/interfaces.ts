import mongoose, { Document, Schema } from 'mongoose';

export interface ICookbook extends Document {
    firstName: {type: string, required: true},
    lastName: {type: number, required: true}
}

export interface IAuthor extends Document {
    firstName: {type: string, required: true},
    lastName: {type: string, required: true},
    cookbooks: [{type: Schema.Types.ObjectId}]
}