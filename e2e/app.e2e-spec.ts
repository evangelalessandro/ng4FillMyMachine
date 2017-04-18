import { Ng4FillMymacchinaPage } from './app.po';

describe('ng4-fill-my-macchina App', () => {
  let page: Ng4FillMymacchinaPage;

  beforeEach(() => {
    page = new Ng4FillMymacchinaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
