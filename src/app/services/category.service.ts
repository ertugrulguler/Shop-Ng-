import { Injectable, ErrorHandler } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { tap, catchError } from "rxjs/operators";
import { Category } from "../category/category";

@Injectable()
export class CategoryService {
  constructor(private http: HttpClient) {}

  apiEndPoint = "http://localhost:3000/categories";

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiEndPoint).pipe(
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
