import { Injectable } from '@angular/core';
import { HttpModule, Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: Http) { }

  FetchData() {
    return this.http.get('/assets/companies.json')
      .map((res: Response) => res.json()).
      catch((error: Response | any) => error.json());

  }
  PostNewData(){
    // return this.http.post().map().catch();

  }

}
