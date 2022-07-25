import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {

  imageSrc = 'assets/images/anya.jpg';
  imageAlt = 'Anya Kwayyy';


  constructor() { }

  ngOnInit(): void {
  }

}
