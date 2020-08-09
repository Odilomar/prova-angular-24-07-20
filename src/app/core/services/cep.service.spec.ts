import { TestBed } from "@angular/core/testing";

import { CepService } from "./cep.service";
import { HttpClientModule } from "@angular/common/http";

describe("CepService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    })
  );

  it("should be created", () => {
    const service: CepService = TestBed.get(CepService);
    expect(service).toBeTruthy();
  });

  it("should retrive address info by cep", async () => {
    const cepService: CepService = TestBed.get(CepService);
    const cepResult = await cepService.getCep("01001000");
    expect(cepResult).toEqual({
      cep: "01001-000",
      logradouro: "Praça da Sé",
      complemento: "lado ímpar",
      bairro: "Sé",
      localidade: "São Paulo",
      uf: "SP",
      unidade: "",
      ibge: "3550308",
      gia: "1004",
    });
  });
  it("should retrive error if cep is invalid", async () => {
    const cepService: CepService = TestBed.get(CepService);
    const cepResult = await cepService.getCep("11501010");
    expect(cepResult).toEqual({
      erro: true,
    });
  });
});
