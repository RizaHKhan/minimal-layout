import { newE2EPage } from '@stencil/core/testing';

describe('basic-layout', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<basic-layout></basic-layout>');

    const element = await page.find('basic-layout');
    expect(element).toHaveClass('hydrated');
  });
});
