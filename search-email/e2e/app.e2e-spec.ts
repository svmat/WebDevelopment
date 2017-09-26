import { SearchEmailPage } from './app.po';

describe('search-email App', function() {
  let page: SearchEmailPage;

  beforeEach(() => {
    page = new SearchEmailPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
