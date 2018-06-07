import { TemplateDrivenFormModule } from './template-driven-form.module';

describe('TemplateDrivenFormModule', () => {
  let templateDrivenFormModule: TemplateDrivenFormModule;

  beforeEach(() => {
    templateDrivenFormModule = new TemplateDrivenFormModule();
  });

  it('should create an instance', () => {
    expect(templateDrivenFormModule).toBeTruthy();
  });
});
