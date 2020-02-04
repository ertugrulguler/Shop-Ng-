import { Component, OnInit } from "@angular/core";
import { Product } from "./product";

declare let alertify: any;

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponent implements OnInit {
  constructor() {}

  title = "Ürün Listesi";
  filterText = "";
  products: Product[] = [
    {
      id: 1,
      name: "Laptop",
      price: 2500,
      categoryId: 1,
      description: "Asus zenBook",
      imageUrl: "https://picsum.photos/200/200"
    },
    {
      id: 2,
      name: "Laptop",
      price: 2500,
      categoryId: 1,
      description: "Lenova",
      imageUrl: "https://picsum.photos/200/200"
    },
    {
      id: 3,
      name: "Mouse",
      price: 50,
      categoryId: 2,
      description: "A4 Tech",
      imageUrl: "https://picsum.photos/200/200"
    },
    {
      id: 4,
      name: "Telefon",
      price: 5000,
      categoryId: 3,
      description: "İphone 7",
      imageUrl: "https://picsum.photos/200/200"
    },
    {
      id: 5,
      name: "Telefon",
      price: 6500,
      categoryId: 3,
      description: "İphone 7 Plus",
      imageUrl: "https://picsum.photos/200/200"
    }
  ];

  showAlert(product) {
    alertify.success("Ürünün adı :" + product);
  }
  ngOnInit() {}
}
