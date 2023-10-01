import { TestBed } from '@angular/core/testing';

import { CartElementViewService } from './cart-element-view.service';

describe('CartElementViewService', () => {
  let service: CartElementViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartElementViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
