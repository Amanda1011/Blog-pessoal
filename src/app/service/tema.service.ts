import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';


@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(
  
    private http: HttpClient
  ) { }

  token = {
     headers: new HttpHeaders().set('Authorization', environment.token)
    
  }

  getAllTema(): Observable<Tema[]>{
    console.log(this.token.headers)
    return this.http.get<Tema[]>('https://mands-blog.netlify.app/tema', this.token)
  }

  getByIdTema(id: number): Observable<Tema>{
    return this.http.get<Tema>(`https://mands-blog.netlify.app/tema/${id}`, this.token)
  }

  getByNomeTema(descricao: string): Observable<Tema[]>{
    return this.http.get<Tema[]>(`https://mands-blog.netlify.app/tema/descricao/${descricao}`, this.token)
  }

  postTema(tema: Tema): Observable<Tema>{
    return this.http.post<Tema>('https://mands-blog.netlify.app/tema', tema, this.token)
  }

  putTema(tema: Tema): Observable<Tema>{
    return this.http.put<Tema>('https://mands-blog.netlify.app/tema', tema, this.token)
  }

  deleteTema(id: number){
    return this.http.delete(`https://mands-blog.netlify.app/tema/${id}`, this.token)
  }
}
