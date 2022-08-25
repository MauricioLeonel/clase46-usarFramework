// import { Document } from 'mongoose'
export interface Producto  {
	id?:number;
	nombre:string;
	codigo:string;
	descripcion:string;
	foto:string;
	precio:number;
	stock:number;
	// timestamp: Date
}