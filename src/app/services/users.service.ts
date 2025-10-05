import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { User } from '../interfaces/user';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
private _httpClient = inject(HttpClient);
private apiUrl = environment.appUrl;


// metodos para hacer las peticiones a la api

//peticion post
postUser(userToCreate: User) {
 return this._httpClient.post(`${this.apiUrl}/users`, userToCreate);
};

//peticion get
getUser() {
 return this._httpClient.get(`${this.apiUrl}/users`);
}

// peticion put
putUser(userToUpdate:User, id:string) {
 return this._httpClient.put(`${this.apiUrl}/users/${id}`, userToUpdate);
}

// peticion delete
deleteUser(id:string) {
 return this._httpClient.delete(`${this.apiUrl}/users/${id}`);  
}

}
