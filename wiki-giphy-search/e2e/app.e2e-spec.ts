import { WikiGiphySearchPage } from './app.po';

describe('wiki-giphy-search App', function() {
  let page: WikiGiphySearchPage;

  beforeEach(() => {
    page = new WikiGiphySearchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
