import { Environment } from './environment';
import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  env: Environment;

  constructor(private http:HttpClient) {
    this.env = new Environment();
   }

   postMensaje(cipherText: object){
     return this.http.post(this.env.urlMain + '/text/post', cipherText);
   }

   getMensaje(){
     return this.http.get<object>(this.env.urlMain + '/text/msg');
   }
}
