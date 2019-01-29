import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  visible: boolean = true;

  constructor() {}

  public hide() {
    this.visible = false;
  }
  public show() {
    this.visible = true;
  }
}