import { Injectable } from '@angular/core';
import jwt_decode from "jwt-decode";

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
const projet = 'projet';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  constructor() { }

  signOut(): void {
    window.sessionStorage.clear();
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  public getUSERKEY(): string | null {
    return window.sessionStorage.getItem(USER_KEY);
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public saveProjectId(id:string){
    window.sessionStorage.setItem(projet, id);
  }
  public getProjectId(){
    window.sessionStorage.getItem(projet);
  }

  public getUser(): any {
    if(window.sessionStorage.getItem(USER_KEY)){
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return user;
    }}
    return false;

  }
}
