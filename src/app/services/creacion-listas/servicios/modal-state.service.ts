import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalStateService {

  constructor() { }

  private _isVisible: boolean = false;

    // Getter
    get isVisible(): boolean {
        return this._isVisible;
    }

    // Setter
    set isVisible(value: boolean) {
        this._isVisible = value;
    }
}
