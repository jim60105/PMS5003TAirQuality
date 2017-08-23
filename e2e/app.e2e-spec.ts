import { PMS5003TAirQualityPage } from './app.po';

describe('pms5003-tair-quality App', () => {
  let page: PMS5003TAirQualityPage;

  beforeEach(() => {
    page = new PMS5003TAirQualityPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
