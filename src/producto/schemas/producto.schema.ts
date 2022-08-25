// import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
// import { Document } from 'mongoose';

// export type ProductoDocument = Producto & Document;

// @Schema()
// export class Producto {
//   @Prop({ type: Number, required: true })
//   id: number;

//   @Prop()
//   nombre: string;

//   @Prop()
//   descripcion: string;

//   @Prop()
//   foto: string; 

//   @Prop()
//   codigo: string;

//   @Prop()
//   precio: number;

//   @Prop()
//   stock: number;

//   @Prop({ type: Date, required: true })
//   timestamp: Date;
// }

// export const ProductoSchema = SchemaFactory.createForClass(Producto);


import mongoose from 'mongoose'


export const ProductoSchema = new mongoose.Schema({
	// _id:{type:Number,required:true},
	nombre:String,
	descripcion:String,
	foto:String,
	codigo:String,
	precio:Number,
	stock:Number,
	// timestamp:{ type: Date, default: Date.now }
})


// export const ProductoSchema = mongoose.model('productos',modelsProducto)
