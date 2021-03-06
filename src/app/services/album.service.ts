import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private http: HttpClient) { }


  getData(): Observable<any> {

    const url = "https://jsonplaceholder.typicode.com/users/1/albums"
    return this.http.get<any>(url)
  }


}
