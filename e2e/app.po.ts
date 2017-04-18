import { browser, element, by } from 'protractor';

export class Ng4FillMymacchinaPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
