import { ReactiveFormModule } from './reactive-form.module';

describe('ReactiveFormModule', () => {
  let reactiveFormModule: ReactiveFormModule;

  beforeEach(() => {
    reactiveFormModule = new ReactiveFormModule();
  });

  it('should create an instance', () => {
    expect(reactiveFormModule).toBeTruthy();
  });
});
