import { TestBed } from '@angular/core/testing';

import { MetaTagService } from './meta-tag.service';

describe('MeteTagServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MetaTagService = TestBed.get(MetaTagService);
    expect(service).toBeTruthy();
  });
});
