import { newSpecPage } from '@stencil/core/testing';
import { BasicList } from '../basic-list';

describe('basic-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BasicList],
      html: `<basic-list></basic-list>`,
    });
    expect(page.root).toEqualHtml(`
      <basic-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </basic-list>
    `);
  });
});
