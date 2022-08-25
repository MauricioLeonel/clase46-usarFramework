import { Injectable } from '@nestjs/common';
import { Producto } from './interfaces/Producto'//interface que va a machear con
import { ProductoSchema } from './schemas/producto.schema';


@Injectable()
export class ProductoService {
	productos =  [
		{id:1,nombre:'fiat',descripcion:'para andar',codigo:'10x100',foto:'www.google.com',precio:100,stock:200},
		{id:2,nombre:'fiat',descripcion:'para andar',codigo:'20x200',foto:'www.google.com',precio:1200,stock:200}
		]
	getAllProduct():Producto[] {
		return this.productos
	}
	getProductById(id:number):Producto {
		return this.productos.find(producto=>producto.id === id)
	}
	newProductById(producto):Producto {
			producto.id = this.productos[this.productos.length -1 ].id +1
			// producto.id = this.productos[this.productos.length -1 ].id
			// console.log({id:3,nombre:'fiat',descripcion:'para andar',codigo:'20x200',foto:'www.google.com',precio:1200,stock:200})
			this.productos.push(producto)
			return producto
		// return this.productos.find(producto=>producto.id === id)
	}
	updateProductById(id:number, producto):Producto {
			producto.id = id
			let index = this.productos.findIndex(producto=>producto.id === id)
			this.productos[index]= {...producto}
			return producto
		// return this.productos.find(producto=>producto.id === id)
	}

	deleteProductById(id:number):boolean {
			// return this.productos[0]
			const index = this.productos.findIndex(producto=>producto.id === id)
			if(index != -1 ){
				this.productos.splice(index,1)
				return true
			}
			return false
		// return this.productos.find(producto=>producto.id === id)
	}




}