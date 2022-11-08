import { Component, OnInit } from '@angular/core';
import { ProductoCartService } from '../services/producto-cart.service';
import { ProductoDataService } from '../services/producto-data.service';
import { Productos } from '../models/Producto';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {

  productos: Productos[] = [];


  constructor(private productoDataService: ProductoDataService, private productoCartService: ProductoCartService) { }

  ngOnInit(): void {
    this.productoDataService.productos.subscribe(productos => this.productos = productos);
  }
  public des = 0;

  upQuantity(producto: Productos): void {

    if (producto.cantidad > 0) {
      producto.quantity++;
      this.des = producto.cantidad--;
      this.productoCartService.addToCart(producto);
    }

  }

  downQuantity(producto: Productos): void {
    if (producto.quantity > 0) {
      producto.quantity--;
      this.des = producto.cantidad++;
      this.productoCartService.addToCart(producto);

    }
  }
  

  



  

}
