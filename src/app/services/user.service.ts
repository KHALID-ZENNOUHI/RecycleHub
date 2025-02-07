import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { map } from 'rxjs/operators'; 

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  // Add user to JSON Server
  register(userData: any): Observable<any> {
    const userWithId = { ...userData, id: uuidv4(), role: 'particulier' };
    return this.http.post<any>(this.apiUrl, userWithId);
  }

  // Login user by verifying credentials
  login(email: string, password: string): Observable<any> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map((users: any[]) => {
        // Type `users` as an array of any objects
        return users.find((user: any) => user.email === email && user.password === password);
      })
    );
  }


  isAuthenticated(): boolean {
    return !!localStorage.getItem('user');
  }
}
