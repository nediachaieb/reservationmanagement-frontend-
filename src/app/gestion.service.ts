import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class GestionService {

  username: any = "";
  token: any = "";
    constructor(private http: HttpClient) {}
    connexion(request: any) {
      return this.http.post("http://127.0.0.1:8080/auth/login", request, { observe: 'response' });
    }

    saveToken(token: any) {
      let hp = new JwtHelperService();
      this.username = hp.decodeToken(token).sub;
      this.token = token;

    }



    getAllTerrains(){
      let token: any = localStorage.getItem("token");
    let headers = new HttpHeaders({ "authorization": token });
      return this.http.get(`http://localhost:8080/back/terrains`,{headers:headers});
    }

    addTerrain(terrain: any){
      let token: any = localStorage.getItem("token");
      let headers = new HttpHeaders({ "authorization": token });
      return this.http.post(`http://localhost:8080/back/addTerrains`, terrain,{headers:headers});
    }

    deleteTerrain(id: number){
      let token: any = localStorage.getItem("token");
    let headers = new HttpHeaders({ "authorization": token });
      return this.http.delete(`http://localhost:8080/back/terrains/${id}`,{headers:headers});
    }


    getAllAdherants() {
      let token: any = localStorage.getItem("token");
    let headers = new HttpHeaders({ "authorization": token });
      return this.http.get(`http://localhost:8080/back/adherants`,{headers:headers});
    }

    addAdherant(adherant: any) {
      let token: any = localStorage.getItem("token");
    let headers = new HttpHeaders({ "authorization": token });

      return this.http.post(`http://localhost:8080/back/addAdherant`, adherant,{headers:headers});
    }

    deleteAdherant(id: number){
      let token: any = localStorage.getItem("token");
    let headers = new HttpHeaders({ "authorization": token });
      return this.http.delete(`http://localhost:8080/back/adherants/${id}`,{headers:headers});
    }

    getAllReservations() {
      let token: any = localStorage.getItem("token");
    let headers = new HttpHeaders({ "authorization": token });
      return this.http.get(`http://localhost:8080/back/reservations`,{headers:headers});
    }

    addReservation(reservation: any) {
      let token: any = localStorage.getItem("token");
    let headers = new HttpHeaders({ "authorization": token });
      return this.http.post(`http://localhost:8080/back/addReservation`,reservation,{headers:headers});
    }

    deleteReservation(id: number) {
      let token: any = localStorage.getItem("token");
    let headers = new HttpHeaders({ "authorization": token });
      return this.http.delete(`http://localhost:8080/back/reservations/${id}`,{headers:headers});
    }
    getUsername(): string {
      return this.username;
    }
}
