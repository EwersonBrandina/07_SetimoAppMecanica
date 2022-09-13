import { TestBed } from '@angular/core/testing';

import { DadosProdutosService } from './dados-produtos.service';

describe('DadosProdutosService', () => {
  let service: DadosProdutosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DadosProdutosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
