import { Component, HostBinding, OnInit } from '@angular/core';
import { ProductoCartService } from '../services/producto-cart.service';
import { Productos } from '../tienda/Producto';
import { ProductoDataService } from '../services/producto-data.service';
import { Router, ActivatedRoute } from '@angular/router';
import {Pedido} from './pedido';



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
  pedido: Pedido = {
    id: 0,
    id_producto: 0,
    quantity: 0,
    clientName: '',
    email: '',
    address: ''

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

  

  descuento() {
  this.productos.forEach(descuento => {
    this.produc.quantity = descuento.quantity;
    this.produc.id = descuento.id;
    this.pedido.id_producto = descuento.id;
    this.pedido.quantity = descuento.quantity;
    this.productoDataService.descuento(this.produc.id, this.produc).subscribe(
      res => { 
        console.log(res);
        
      },
      err => console.error(err)
    );
    //esto es para generar y guardar el pedido, falta la informacion del comprador 
    /* this.productoDataService.pedido(this.pedido).subscribe(
      res => {
        console.log(res);
      },
      err => console.error(err)
    ) */
    console.log(this.produc);
    
    location.reload();
    
  });
}
  

}


