import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment.prod";
import { CepInterface } from "../interfaces/cep.interface";
import { CepErrorInterface } from "../interfaces/cep.error.interface";

@Injectable({
  providedIn: "root",
})
export class CepService {
  constructor(private http: HttpClient) {}

  getCep(cep: string): Promise<CepInterface | CepErrorInterface> {
    const { cepAPI } = environment;
    return this.http
      .get<CepInterface | CepErrorInterface>(`${cepAPI}${cep}/json/`)
      .toPromise();
  }
}
