import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { Servers } from './servers';

@Injectable()
export class SaveserversToDbService {

  constructor(private http: Http) { }
  saveServersToDB(servers: Servers[]) {
    return this.http.put('https://ng-samplehttp.firebaseio.com/SomeDataABC.json', servers);
  }

  getServersFromDB() {
    return this.http.get('https://ng-samplehttp.firebaseio.com/SomeDataABC.json').map(
      (response: Response) => {
        const data = response.json();
        return data;
      });
  }

  getAppName() {
    return this.http.get('https://ng-samplehttp.firebaseio.com/SomeDataXYZ.json').map(
      (response: Response) => {
        return response.json();
      }
    );
  }
}
