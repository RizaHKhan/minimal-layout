import { Component, Prop, State, Host, h, Listen } from '@stencil/core';
import { ListItem } from '../../types/types';

/**
 * Component should emit the 'value'
 */

/**
 * Component should render children when clicking item with children
 * Item with children is indicated by down caret
 */

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
    @State() list: ListItem[] = [
        { text: 'One', value: 'one' },
        { text: 'Two', value: 'two' },
        {
            text: 'Three',
            children: [
                { text: 'ThreeOne', value: 'ThreeOne' },
                {
                    text: 'ThreeTwo',
                    children: [
                        { text: 'Foo', value: 'foo' },
                        { text: 'Barr', value: 'barr' },
                    ],
                },
            ],
        },
    ];

    @Listen('click', { capture: true })
    handleItemClick(event: MouseEvent): void {
        console.log('some item', event);
    }

    private callback(item: ListItem) {
        if (item.hasOwnProperty('value')) {
            return <p>{item.text}</p>;
        } else if (item.children.length) {
            return item.children.map(i => this.callback(i));
        }
    }

    render() {
        return (
            <Host>
                {this.list.map(item => {
                    return this.callback(item);
                })}
            </Host>
        );
    }
}
