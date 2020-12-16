import { Component, OnInit } from '@angular/core';
import {CarsService} from '../cars.service';
import {ActivatedRoute} from '@angular/router';
import {CarModel} from '../car.model';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  private id: number;
  public car: CarModel;

  constructor(public cars: CarsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((data) => {
        this.id = +data.id;
        this.car = this.cars.findCar(this.id);
      }
    );
  }

}
