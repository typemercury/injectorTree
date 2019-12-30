import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HiService {
  private _text = '';
  constructor(from: string) {
    this._text = `Hi, this servcie is from <span class="${from[0].toLowerCase()}">${from}</span>`;
  }
  get text() {
    return this._text;
  }
}
