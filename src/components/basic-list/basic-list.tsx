import { Component, Prop, State, Host, h, Listen } from '@stencil/core';
import { ListItem } from '../../types/types';

@Component({
    tag: 'basic-list',
    styleUrl: 'basic-list.scss',
    shadow: true,
})
export class BasicList {
    /**
     * List item is a array of @ListItem
     */
    // @Prop() list: ListItem[];

    /**
     * Test
     */
    @State() list = [
        { text: 'One', value: 'one' },
        { text: 'Two', value: 'two' },
        {
            text: 'Three',
            value: [
                { text: 'ThreeOne', value: 'ThreeOne' },
                { text: 'ThreeTwo', value: 'ThreeTwo' },
            ],
        },
    ];

    @Listen('click', { capture: true })
    handleItemClick(event: MouseEvent): void {
        console.log('some item', event);
    }

    render() {
        return (
            <Host>
                <div>
                    {this.list.map(item => (
                        <p>{item.text}</p>
                    ))}
                </div>
            </Host>
        );
    }
}
