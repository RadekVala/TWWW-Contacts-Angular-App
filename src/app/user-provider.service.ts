import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserProviderService {

  constructor( private http: HttpClient ) { 

  }

  getAllUsers(){
    return  this.http.get('http://jsonplaceholder.typicode.com/users');
  }

}
