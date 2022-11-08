import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {Productos} from '../tienda/Producto';


@Injectable({
  providedIn: 'root'
})
export class ProductoCartService {


  private _productos : Productos [] = [];
  private _productosSubjects : BehaviorSubject<Productos[]> = new BehaviorSubject(this._productos);
  public productos : Observable<Productos[]> = this._productosSubjects.asObservable();
  constructor(private http: HttpClient) {}

  addToCart(producto: Productos){
 
    let index = this._productos.findIndex(b => b.nombre === producto.nombre);
     if(index === -1)
       this._productos.push(producto);
     else
      this._productos[index].quantity = producto.quantity;

     if(producto.quantity == 0){
       this._productos.splice(index,1);
    } 

  }


}


 



