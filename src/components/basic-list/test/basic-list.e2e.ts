import { newE2EPage } from '@stencil/core/testing';

describe('basic-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<basic-list></basic-list>');

    const element = await page.find('basic-list');
    expect(element).toHaveClass('hydrated');
  });
});
