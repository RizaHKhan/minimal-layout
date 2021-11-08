import { Component, Host, State, h } from '@stencil/core';

@Component({
    tag: 'basic-layout',
    styleUrl: 'basic-layout.scss',
    shadow: true,
})
export class BasicLayout {
    /**
     * This component has no props
     */

    /**
     * Show
     */
    @State() show: boolean = false;

    /**
     * Some text and show some values
     */
    @State() someText: string = 'Foobar';

    private handleBurgerClick = (): void => {
        this.show = !this.show;
    };

    private generateBurgerClass = (): Record<string, boolean> => ({
        burger: true,
        show: this.show ? true : false,
    });

    componentDidLoad() {
        console.log('Some stuff about this or that');
    }

    render() {
        return (
            <Host>
                <div class="basic-layout">
                    <div class="basic-layout__header">
                        <slot name="header"></slot>
                        <div class={this.generateBurgerClass()} onClick={this.handleBurgerClick}>
                            <div class="bar"></div>
                        </div>
                    </div>
                    <div class="basic-layout__navigation">
                        <slot name="navigation"></slot>
                    </div>
                    <div class="basic-layout__content">
                        <slot></slot>
                    </div>
                    <div class="basic-layout__footer">
                        <slot name="footer"></slot>
                    </div>
                </div>
            </Host>
        );
    }
}
