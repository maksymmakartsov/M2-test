import { TestBed } from '@angular/core/testing';

import { ItemsSettingsService } from './items-settings.service';

describe('ItemsSettingsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItemsSettingsService = TestBed.get(ItemsSettingsService);
    expect(service).toBeTruthy();
  });
});
