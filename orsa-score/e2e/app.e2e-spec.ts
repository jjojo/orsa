import { OrsaScorePage } from './app.po';

describe('orsa-score App', () => {
  let page: OrsaScorePage;

  beforeEach(() => {
    page = new OrsaScorePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
