import { Component, OnInit } from '@angular/core';
import { PanierService } from '../services/panier.service';
import { PlatService } from '../services/plat.service';
//import { plats } from "./plats-list";
@Component({
  selector: 'app-plat',
  templateUrl: './plat.component.html',
  styleUrls: ['./plat.component.css']
})
export class PlatComponent implements OnInit {
  public platsList: any = [];

  constructor(
    private panierService: PanierService,
    private platService: PlatService
  ) { }

  ngOnInit(): void {
    this.platService.all().subscribe(
      res => this.platsList = res
    );
  }

  public addToPanier(id: string) {
    this.panierService.add(id);
  }

}
