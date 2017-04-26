import { Tp1Page } from './app.po';

describe('tp1 App', () => {
  let page: Tp1Page;

  beforeEach(() => {
    page = new Tp1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
