import { Component, inject, OnInit } from '@angular/core';
//1 importar el servicio queremos hacer get de los productos
import { ProductsService } from '../../services/products.service';
import { Product } from '../../interfaces/product';

 
@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {

  //1 inyeccion de dependencias y declaracion de variable 
_productService = inject(ProductsService);

//2 crear una variable para almacenar los productos
allproducts : Product[] = [] //vamos almacenar los productos

showProducts(){
 this._productService.getProduct().subscribe({
  //3 capturar el error
  next: (response: any) => {
    this.allproducts = response; 
    console.log(this.allproducts);
  },
  error: (error: any) => {
    console.error(error);
  }

 }
 )
}

ngOnInit(): void {
  this.showProducts();
}

}