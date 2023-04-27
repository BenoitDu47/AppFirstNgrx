import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Aircraft } from 'src/app/model/aircraft.model';
import { GetAllAircraftsAction } from 'src/app/ngrx/aircrafts.action';
import { AircraftsService } from 'src/app/services/aircrafts.service';

@Component({
  selector: 'app-aircraftsnavbar',
  templateUrl: './aircraftsnavbar.component.html',
  styleUrls: ['./aircraftsnavbar.component.css']
})
export class AircraftsnavbarComponent  implements OnInit {

  constructor(private store:Store<any>) { }

  ngOnInit(): void {

  }

  getAllAircrafts() {
    this.store.dispatch(new GetAllAircraftsAction({}));
  }
  getDesignAircrafts() {
   
  }
  getDevelopmentAircrafts() {
   
  }
}
