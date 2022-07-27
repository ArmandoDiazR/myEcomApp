import { Component, Input, OnInit } from '@angular/core';
import { ProductoService } from '../producto.service';
import { Producto } from '../producto';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {

  imageSrc = 'assets/images/anya.jpg';
  imageAlt = 'Anya Kwayyy';

  public productos? : Producto[];



  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.getProductos();
  }


  public getProductos(): void {
    this.productoService.getProductos().subscribe(
      (response: Producto[]) => {
        this.productos = response;
        console.log(this.productos);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
