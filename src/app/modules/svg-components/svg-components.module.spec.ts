import { SvgComponentsModule } from './svg-components.module';

describe('SvgComponentsModule', () => {
  let svgComponentsModule: SvgComponentsModule;

  beforeEach(() => {
    svgComponentsModule = new SvgComponentsModule();
  });

  it('should create an instance', () => {
    expect(svgComponentsModule).toBeTruthy();
  });
});
