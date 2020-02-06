import { Injectable, ErrorHandler } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from "@angular/common/http";
import { Product } from "../product/product";
import { Observable, throwError } from "rxjs";
import { tap, catchError } from "rxjs/operators";

@Injectable()
export class ProductService {
  constructor(private http: HttpClient) {}

  apiEndPoint = "http://localhost:3000/products";

  getProducts(categoryId): Observable<Product[]> {
    let newEndPoint = this.apiEndPoint;
    if (categoryId) {
      newEndPoint += "?categoryId=" + categoryId;
    }
    return this.http.get<Product[]>(newEndPoint).pipe(
      tap(response => console.log(JSON.stringify(response))),
      catchError(this.handleError)
    );
  }

  createProduct(product: Product): Observable<Product> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
        // "Authorization": "Token"
      })
    };
    return this.http.post<Product>(this.apiEndPoint, product, httpOptions).pipe(
      tap(response => console.log(JSON.stringify(response))),
      catchError(this.handleError)
    );
  }

  handleError(err: HttpErrorResponse) {
    let errorMessage = "";
    if (err.error instanceof ErrorEvent) {
      errorMessage = "Bir hata oluştu" + err.error.message;
    } else {
      errorMessage = "Sistemsel bir hata";
    }
    return throwError(errorMessage);
  }
}
