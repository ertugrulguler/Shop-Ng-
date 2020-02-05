import { Component, OnInit } from "@angular/core";
import { Product } from "./product";
import { AlertifyService } from "../services/alertify.service";
import { ProductService } from "../services/product.service";
// declare let alertify: any;

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {
  constructor(
    private alertifyService: AlertifyService,
    private productService: ProductService
  ) {}

  title = "Ürün Listesi";
  filterText = "";
  products: Product[];
  showAlert(product) {
    // alertify.success("Ürünün adı :" + product);
    this.alertifyService.error("ürünün adı: " + product);
  }
  ngOnInit() {
    this.productService.getProducts().subscribe(response => {
      this.products = response;
    });
  }
}
