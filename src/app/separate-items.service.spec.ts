import { TestBed } from '@angular/core/testing';

import { SeparateItemsService } from './separate-items.service';

describe('SeparateItemsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SeparateItemsService = TestBed.get(SeparateItemsService);
    expect(service).toBeTruthy();
  });
});
