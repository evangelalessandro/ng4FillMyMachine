import { Ng4FillMyTruckPage } from './app.po';

describe('ng4-fill-my-truck App', () => {
  let page: Ng4FillMyTruckPage;

  beforeEach(() => {
    page = new Ng4FillMyTruckPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
