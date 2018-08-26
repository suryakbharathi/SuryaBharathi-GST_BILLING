import { SuryaRoutingModule } from './surya-routing.module';

describe('SuryaRoutingModule', () => {
  let suryaRoutingModule: SuryaRoutingModule;

  beforeEach(() => {
    suryaRoutingModule = new SuryaRoutingModule();
  });

  it('should create an instance', () => {
    expect(suryaRoutingModule).toBeTruthy();
  });
});
