import { Injectable } from "@angular/core";
declare let alertify: any;
@Injectable({
  providedIn: "root"
  //  bu kısım buradan silinerek app module dosyasında provider kısmına alertify service eklenirse global olarak tanımlanmış olur
})
export class AlertifyService {
  constructor() {}

  success(message: string) {
    alertify.success(message);
  }

  error(message: string) {
    alertify.error(message);
  }
}
