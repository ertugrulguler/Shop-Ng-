import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Product } from "../product";
import { CategoryService } from "src/app/services/category.service";
import { Category } from "src/app/category/category";
import { ProductService } from "src/app/services/product.service";
import { AlertifyService } from "src/app/services/alertify.service";

@Component({
  selector: "app-product-add-forms2",
  templateUrl: "./product-add-forms2.component.html",
  styleUrls: ["./product-add-forms2.component.css"],
  providers: [CategoryService, ProductService, AlertifyService]
})
export class ProductAddForms2Component implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private categoryService: CategoryService,
    private productService: ProductService,
    private alertifyService: AlertifyService
  ) {}

  productAddForm: FormGroup;
  product: Product = new Product();
  categories: Category[];

  createProduct() {
    this.productAddForm = this.formBuilder.group({
      name: ["", Validators.required],
      description: ["", Validators.required],
      imageUrl: ["", Validators.required],
      price: ["", Validators.required],
      categoryId: ["", Validators.required]
    });
  }

  ngOnInit() {
    this.createProduct();
    this.categoryService.getCategories().subscribe(response => {
      this.categories = response;
    });
  }

  add() {
    if (this.productAddForm.valid) {
      this.product = Object.assign({}, this.productAddForm.value);
    }
    this.productService.createProduct(this.product).subscribe(response => {
      this.alertifyService.success(response.name + " başarıyla eklendi.");
    });
  }
}
