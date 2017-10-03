import { PatientDatabasePage } from './app.po';

describe('patient-database App', function() {
  let page: PatientDatabasePage;

  beforeEach(() => {
    page = new PatientDatabasePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
