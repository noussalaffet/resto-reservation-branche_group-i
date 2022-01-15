import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  minDate = new Date();

  loading = true;

  constructor(

    private route: ActivatedRoute) { 
  }
  ngOnInit() {
 

  }
}