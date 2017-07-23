import { FinalProjectPage } from './app.po';

describe('final-project App', () => {
  let page: FinalProjectPage;

  beforeEach(() => {
    page = new FinalProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
