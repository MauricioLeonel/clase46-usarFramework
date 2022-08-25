import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ProductoService } from './producto.service'
import { DtoProductos } from './dto/productos.dto'
import { Producto } from './interfaces/Producto'
// import { Producto ,ProductoDocument } from './schemas/producto.schema';


@Controller('producto')
export class ProductoController {
	constructor(private ProductoService:ProductoService){}
	@Get()//interface
	getAllProduct(): Producto[]{
		 return this.ProductoService.getAllProduct()
	}
	@Get(':id')
	getProductById(@Param('id') id:string ){
		
		return this.ProductoService.getProductById(parseInt(id))

	}
	@Post()//dto
	newProducto(@Body() producto:DtoProductos ){
		
		return this.ProductoService.newProductById(producto)

	}
	@Put(':id')//dto
	updateProducto(@Body() producto:DtoProductos, @Param('id') id ){

		return this.ProductoService.updateProductById(parseInt(id),producto)

	}
	@Delete(':id')
	deleteProducto(@Param('id') id ){
	
		return this.ProductoService.deleteProductById(parseInt(id))

	}


}
