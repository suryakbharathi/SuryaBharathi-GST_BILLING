import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FirstpageService } from '../firstpage.service';
import {ToolbarModule} from 'primeng/toolbar';  
import * as $ from 'jquery';


@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.component.html',
  styleUrls: ['./firstpage.component.css']
})
export class FirstpageComponent implements OnInit {

  //DECLARING VARIABLES
  product_code: String;
  product_name: String;
  product_price: Number;
  product_gst: Number;

  allentries;

  constructor(
    private router: Router,
    private FirstpageService: FirstpageService,
  ) 
  {
    console.log("Entering First Page!");
  }

  ngOnInit() {
    //this.getAllProducts();
  }

  add_product(event){
    event.preventDefault();
    let product_code = this.product_code;
    let product_name = this.product_name;
    let product_price = this.product_price;
    let product_gst = this.product_gst;
    
   

    let product = {
      "product_code": product_code,
      "product_name": product_name,
      "product_price": product_price,
      "product_gst": product_gst
    }
    console.log(product);

    this.FirstpageService.post_product(product).subscribe(response => {
      //console.log(response);
      let res = response;
      console.log("added");
    }); 

    this.product_code = "";
    this.product_name = "";
    this.product_price = 0;
    this.product_gst = 0;

   // this.getAllProducts();
  }

  getAllProducts() {
    this.FirstpageService.getAllProducts().subscribe(
      (res) => {
        console.log(res[0]);
        let response = res[0];
        this.allentries = response;
      },
      (err) => console.log(err),
      () => console.log('done!')
    );

  }

}
