import { Component, Host, h } from '@stencil/core';

@Component({
    tag: 'basic-layout',
    styleUrl: 'basic-layout.scss',
    shadow: true,
})
export class BasicLayout {
    render() {
        return (
            <Host>
                <div class="basic-layout">
                    <div class="basic-layout__header">
                        <slot name="header"></slot>
                        <div class="burger">
                            <div class="bar"></div>
                        </div>
                    </div>
                    <div class="basic-layout__navigation">
                        <slot name="navigation"></slot>
                    </div>
                    <div class="basic-layout__content">
                        <slot name="content"></slot>
                    </div>
                    <div class="basic-layout__footer">
                        <slot name="footer"></slot>
                    </div>
                </div>
            </Host>
        );
    }
}
