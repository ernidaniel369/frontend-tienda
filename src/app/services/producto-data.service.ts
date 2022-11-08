import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Productos } from '../models/Producto';
import {Pedido} from '../models/pedido';


const URL = "http://localhost:3000/productos";
const URLp = "http://localhost:3000/pedidos";

@Injectable({
    providedIn: 'root'
})
export class ProductoDataService {

    private _productos: Productos[] = [];
    private _productosSubjects: BehaviorSubject<Productos[]> = new BehaviorSubject(this._productos);
    public productos: Observable<Productos[]> = this._productosSubjects.asObservable();

    constructor(private http: HttpClient) {
        this.http.get<Productos[]>(URL).subscribe(data => {
            this._productos.push(...data);
        });
    }

    descuento(id: number, produc: Productos): Observable<Productos> {
        return this.http.put<Productos>(`${URL}/descuento/${id}`, produc);
    }



    pedido(pedido: Pedido){
      return this.http.post(`${URLp}`, pedido);
    }

    
}