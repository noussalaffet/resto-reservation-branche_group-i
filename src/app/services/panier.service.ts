import { Injectable } from '@angular/core';

import { LocalStorageService } from "src/app/services/local-storage.service";

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  public panierContent: any[] = [];

  constructor(
    private localStorageService: LocalStorageService
  ) {
    this.panierContent = this.load();
   }

  add(productId: string) {
    const plat = this.panierContent.filter(elem => elem.id == productId)[0];
    if (plat) {
      plat.quantity++;
    } else {
      this.panierContent.push({id: productId, quantity: 1})
    }
    this.localStorageService.set('panier', this.panierContent);
  }

  load() {
    return this.localStorageService.get('panier')
  }

  clear() {
    // 1st method
    // this.localStorageService.clear('panier');
    // 2st method
    this.panierContent = [];
    this.localStorageService.set('panier', this.panierContent);
  }
}
