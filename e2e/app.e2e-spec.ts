import { HonorNgx5Page } from './app.po';

describe('honor-ngx5 App', () => {
  let page: HonorNgx5Page;

  beforeEach(() => {
    page = new HonorNgx5Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
