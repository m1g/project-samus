import { ProjectSamusPage } from './app.po';

describe('project-samus App', () => {
  let page: ProjectSamusPage;

  beforeEach(() => {
    page = new ProjectSamusPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
