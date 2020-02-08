import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";
import { Injectable } from "@angular/core";
import { AccountService } from "../services/account.service";

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(private accountService: AccountService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot, // gideceği yer  route ismi önemli angular7 de next idi angular8 de route oldu
    state: RouterStateSnapshot // bulunduğu yer
  ): boolean {
    // tslint:disable-next-line:prefer-const
    let logged = this.accountService.isLoggedIn();
    if (logged) {
      return true;
    }
    this.router.navigate(["login"]);
    return false;
  }
}
