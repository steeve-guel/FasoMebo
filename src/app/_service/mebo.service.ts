import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Initiative } from '../_models/initiative';
import { Don } from '../_models/don';

@Injectable({
  providedIn: 'root'
})
export class MeboService {

  url: String = 'https://6882101b66a7eb81224d4569.mockapi.io/initiative';

  constructor(private http:HttpClient) { }

  listeInitiative():Observable<Don[]>{
    return this.http.get<Don[]>(`${this.url}`);
  }

  createInitiative(initiative: Don): Observable<Don> {
    return this.http.post<Don>(`${this.url}`, initiative);
  }
}
