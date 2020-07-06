import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';
declare var window: any;

@Injectable({
  providedIn: 'root'
})
export class AppInitService {

  constructor() { }

  public init() {

    return from(
      fetch('assets/config/config.json').then((response) => {
        return response.json();
      },
      )).pipe(
        map((config) => {
          window.config = config;
          return config;
        })).toPromise();
  }
}
