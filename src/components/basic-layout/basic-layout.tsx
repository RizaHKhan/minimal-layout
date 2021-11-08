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
     * Show variable used to show/hide the side bar which becomes a dropdown
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
        'basic-layout__navigation': true,
        'show': this.show ? true : false,
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
                        <div class="burger" onClick={this.handleBurgerClick}>
                            <div class="bar"></div>
                        </div>
                    </div>
                    <div class={this.generateBurgerClass()}>
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
