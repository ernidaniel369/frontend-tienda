import { Component, HostBinding, OnInit } from '@angular/core';
import { ProductoCartService } from '../services/producto-cart.service';
import { Productos } from '../models/Producto';
import { ProductoDataService } from '../services/producto-data.service';
import { Router, ActivatedRoute } from '@angular/router';
import {Pedido} from '../models/pedido';



@Component({
  selector: 'app-carro',
  templateUrl: './carro.component.html',
  styleUrls: ['./carro.component.css']
})
export class CarroComponent implements OnInit {
  @HostBinding('class') clases = 'row';

  productos: Productos[] = []; 
  produc: Productos = {
    id: 0,
    precio: 0,
    cantidad: 0,
    quantity: 0
  }
  
  constructor(private productoCartService: ProductoCartService, private productoDataService: ProductoDataService, private router: Router) { }

  ngOnInit(): void {
    this.productoCartService.productos.subscribe(data => this.productos = data);
  }

  total() {

    let sum = 0;
    this.productos.forEach(producto => {
      sum += producto.quantity * producto.precio
    });
    return sum;
  }
  

}


