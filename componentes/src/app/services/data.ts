import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  constructor( private http: HttpClient ){}

  getUsuarios(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
  
  getHeroes(){
    return this.http.get<Comment[]>('/assets/data/superheroes.json');
  }
}
