import { Injectable } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

getData(): Observable<any> {

  const url = "https://jsonplaceholder.typicode.com/users"
  return this.http.get<any>(url)
}


}
