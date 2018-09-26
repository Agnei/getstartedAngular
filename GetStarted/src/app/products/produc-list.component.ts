import {Component, OnInit} from '@angular/core';
import { empty } from 'rxjs';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    selector:"pm-products",
    templateUrl:"./product-list.component.html",
    styleUrls: ["./product-list.component.css"]
})

export class ProductListCompoment implements OnInit {

    pageTitle:  string = "Product List!";
    imagemWidth: number = 30;
    imagemMargin: number = 2;
    showImage: boolean = false;
    filteredProducts:IProduct[];
    products: IProduct[];

   constructor(private productService: ProductService){
   }

    _listFilter: string
    get listFilter(): string {
      return this._listFilter;
    } 

    set listFilter(value: string){
      this._listFilter = value;
      this.filteredProducts = this.listFilter ? this.performeFilter(this.listFilter) : this.products
    }

    toogleButton(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void{
        this.products = this.productService.getProduct();
        this.filteredProducts = this.products;
    }

    onRatingClicked(message: string):void{
        this.pageTitle = message;
    }

    performeFilter(filterby: string): IProduct[] {
        filterby = filterby.toLocaleLowerCase();
        return this.products.filter((product: IProduct) => 
                product.productName.toLocaleLowerCase().indexOf(filterby) !== -1);
    }

}