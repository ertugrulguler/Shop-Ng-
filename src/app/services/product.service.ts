import { Injectable, ErrorHandler } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Product } from "../product/product";
import { Observable, throwError } from "rxjs";
import { tap, catchError } from "rxjs/operators";

@Injectable()
export class ProductService {
  constructor(private http: HttpClient) {}

  apiEndPoint = "http://localhost:3000/products";

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiEndPoint).pipe(
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
