import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment.prod";

@Injectable({
  providedIn: "root",
})
export class CepService {
  constructor(public http: HttpClient) {}

  getCep(cep) {
    const { cepAPI } = environment;
    return this.http.get(`${cepAPI}${Number(cep)}/json/`).toPromise();
  }
}
