import { newSpecPage } from '@stencil/core/testing';
import { BasicLayout } from '../basic-layout';

describe('basic-layout', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BasicLayout],
      html: `<basic-layout></basic-layout>`,
    });
    expect(page.root).toEqualHtml(`
      <basic-layout>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </basic-layout>
    `);
  });
});
