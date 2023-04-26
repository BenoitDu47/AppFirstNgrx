import { Component, OnInit } from '@angular/core';
import { Aircraft } from 'src/app/model/aircraft.model';
import { AircraftsService } from 'src/app/services/aircrafts.service';

@Component({
  selector: 'app-aircraftsnavbar',
  templateUrl: './aircraftsnavbar.component.html',
  styleUrls: ['./aircraftsnavbar.component.css']
})
export class AircraftsnavbarComponent  implements OnInit {
  aircrafts: Aircraft[] | null = null;
  error: null | undefined;

  constructor(private aircraftsService: AircraftsService) { }

  ngOnInit(): void {

  }

  getAllAircrafts() {
    this.aircraftsService.getAircrafts().subscribe({
      next: (data) => this.aircrafts = data,
      error: (err) => this.error = err.message,
      complete: () => this.error = null
    })
  }
  getDesignAircrafts() {
    this.aircraftsService.getDesignAircrafts().subscribe({
      next: (data) => this.aircrafts = data,
      error: (err) => this.error = err.message,
      complete: () => this.error = null
    })
  }
  getDevelopmentAircrafts() {
    this.aircraftsService.getDevelopmentAircrafts().subscribe({
      next: (data) => this.aircrafts = data,
      error: (err) => this.error = err.message,
      complete: () => this.error = null
    })
  }
}
