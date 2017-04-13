import { PFLLoginPage } from './app.po';

describe('pfllogin App', function() {
  let page: PFLLoginPage;

  beforeEach(() => {
    page = new PFLLoginPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
