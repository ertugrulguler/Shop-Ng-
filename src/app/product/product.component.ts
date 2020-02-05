import { Component, OnInit } from "@angular/core";
import { Product } from "./product";
import { AlertifyService } from "../services/alertify.service";
// declare let alertify: any;
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponent implements OnInit {
  constructor(
    private alertifyService: AlertifyService,
    private http: HttpClient
  ) {}

  title = "Ürün Listesi";
  filterText = "";
  products: Product[];
  apiEndPoint = "http://localhost:3000/products";
  showAlert(product) {
    // alertify.success("Ürünün adı :" + product);
    this.alertifyService.error("ürünün adı: " + product);
  }
  ngOnInit() {
    this.http.get<Product[]>(this.apiEndPoint).subscribe(response => {
      this.products = response;
      console.log(this.products);
    });
  }
}
