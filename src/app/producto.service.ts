import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from './producto';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.apiServerUrl}/producto/all`);
  }

  public addProducto(producto: Producto): Observable<Producto> {
    return this.http.post<Producto>(`${this.apiServerUrl}/producto/add`, producto);
  }


}
