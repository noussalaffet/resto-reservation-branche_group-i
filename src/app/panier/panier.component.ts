import { Component, OnInit } from '@angular/core';

import { PanierService } from "src/app/services/panier.service";

import { plats } from "src/app/plat/plats-list";

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  public panierContent: any = [];
  public totalPrice: number = 0;
  public TAX_RATE: number = 0.2;

  constructor(
    private panierService: PanierService
  ) { }

  ngOnInit(): void {
    this.getPanierContentDetails();
    if (this.panierContent.length > 0) {
      this.computeTotalPrice();
    }
  }

  private getPanierContentDetails():void {
    this.panierContent = this.panierService.panierContent;
    if (this.panierContent.length > 0) {
      for (let index = 0; index < this.panierContent.length; index++) {
        const plat = plats.filter(plat => plat.id == this.panierContent[index].id)[0]
        this.panierContent[index].title = plat.nom;
        this.panierContent[index].price = plat.prix;
       }
    }
  }

  private computeTotalPrice():void {
    this.panierContent.forEach((item: { price: number; quantity: number; }) => {
      this.totalPrice += item.price * item.quantity;
    });
  }

  public clearPanier():void {
    this.panierService.clear();
    this.ngOnInit();
  }

}
