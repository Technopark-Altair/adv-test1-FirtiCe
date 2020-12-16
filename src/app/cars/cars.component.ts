import { Component, OnInit } from '@angular/core';
import {CarsService} from '../cars.service';
import {CarModel} from '../car.model';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})

export class CarsComponent implements OnInit {
  public cars: Array<CarModel>;

  constructor(public carsService: CarsService) {
    this.cars = this.carsService.cars();
  }

  ngOnInit(): void {
  }
}
