import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { WishService } from 'src/app/services/wish.service';

declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  search: string;
  categoryCollect: string = "Categories";
  categoryList: Category[];
  productList: Product[];
  constructor(private categoryService: CategoryService, private productService: ProductService, private cartService: CartService, private wishService: WishService){}

  ngOnInit() {
    this.categoryService.getcategories().subscribe(
        (data: Category[]) => this.categoryList = data
    );
    // Mobile Nav toggle
    $('.menu-toggle > a').on('click', function (e: { preventDefault: () => void; }) {
      e.preventDefault();
      $('#responsive-nav').toggleClass('active');
    })

    // Fix cart dropdown from closing
    $('.cart-dropdown').on('click', function (e: { stopPropagation: () => void; }) {
      e.stopPropagation();
    });
  }
  research(name: string, ctgr: string) {
    if(ctgr === "Categories"){
      this.productService.getprodBycategoryAndName(name, ctgr).subscribe(
        (data: Product[]) => this.productList = data
      );
    }else{
      this.productService.getprodByName(name).subscribe(
        (data: Product[]) => this.productList = data
      );
    }
  }

}
