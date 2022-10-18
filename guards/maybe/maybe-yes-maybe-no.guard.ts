import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { MaybeService } from 'src/app/services/maybe.service';

@Injectable({
  providedIn: 'root'
})
export class MaybeYesMaybeNoGuard implements CanActivate {

  constructor(
    private _service: MaybeService
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      let theMaybeServiceSay = this._service.say();

      if (theMaybeServiceSay)
        console.log("The Maybe service say YES");
      else
        console.log("The Maybe service say NO");
        
      return theMaybeServiceSay;
  }
  
}
