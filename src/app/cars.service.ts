import {Injectable} from '@angular/core';
import {CarModel} from './car.model';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  public list: Array<CarModel> = [
    { carID: 0, carBrand: 'Tesla', carModel: 'Model X', carPrice: 10000000},
    { carID: 1, carBrand: 'Tesla', carModel: 'Model 3', carPrice: 12000000},
    { carID: 2, carBrand: 'Tesla', carModel: 'Model S', carPrice: 15000000}
  ];

  cars(): Array<CarModel> {
    return this.list;
  }

  findCar(id: number): CarModel {
    return this.list.find(car => car.carID === id);
  }
}


