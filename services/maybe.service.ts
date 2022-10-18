import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MaybeService {

  constructor() { }

  say()
  {
    return Math.random() < 0.5;
  }
}
