import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Torre } from '../models/torre';

@Injectable({
  providedIn: 'root'
})
export class TorreService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  public listaTorre(): Observable<Torre[]>{
    return this.http.get<Torre[]>(`${this.baseUrl}/listaTorre`);
  }

  public torreById(idTorre: number): Observable<Torre>{
    return this.http.get<Torre>(`${this.baseUrl}/detalleTorre/${idTorre}`);
  }

  public crearTorre(torre: Torre): Observable<any>{
    return this.http.post(`${this.baseUrl}/crearTorre`, torre);
  }

  public actualizarTorre(idTorre: number, torre: Torre): Observable<any>{
      return this.http.put<any>(`${this.baseUrl}/actualizarTorre/${idTorre}`, torre);
  }

  public borrarTorre(idTorre: number): Observable<any>{
    return this.http.delete<any>(`${this.baseUrl}/borrarTorre/${idTorre}`);
  }

}
