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
	newProductById(producto:Producto):Producto {
			return this.productos[0]
		// return this.productos.find(producto=>producto.id === id)
	}
	updateProductById(id:number, producto:Producto):Producto {
			return this.productos[0]
		// return this.productos.find(producto=>producto.id === id)
	}

	deleteProductById(id:number):boolean {
			// return this.productos[0]
			return true
		// return this.productos.find(producto=>producto.id === id)
	}




}
