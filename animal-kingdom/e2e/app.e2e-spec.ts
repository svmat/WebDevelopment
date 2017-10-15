import { AnimalKingdomPage } from './app.po';

describe('animal-kingdom App', function() {
  let page: AnimalKingdomPage;

  beforeEach(() => {
    page = new AnimalKingdomPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
