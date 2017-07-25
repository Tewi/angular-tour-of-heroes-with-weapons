import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Weapon } from './weapon';


@Injectable()
export class WeaponService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private weaponsUrl = 'api/weapons';

  constructor(private http: Http) { }

  getWeapons(): Promise<Weapon[]> {
    return this.http.get(this.weaponsUrl)
               .toPromise()
               .then(response => response.json().data as Weapon[])
               .catch(this.handleError);
  }

  getWeapon(id: number): Promise<Weapon> {
    const url = `${this.weaponsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Weapon)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
