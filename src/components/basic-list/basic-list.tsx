import { Component, State, Host, h, Listen, Fragment } from '@stencil/core';
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
     * Padding with increases as the list is rendered
     */
    @State() padding: number = 0;

    /**
     * Test convert to prop
     */
    @State() list: ListItem[] = [
        { text: 'One', value: 'one' },
        { text: 'Two', value: 'two' },
        {
            text: 'Three',
            children: [
                { text: 'Three - One', value: 'ThreeOne' },
                {
                    text: 'Three - Two',
                    children: [
                        { text: 'Foo', value: 'foo' },
                        { text: 'Barr', value: 'barr' },
                    ],
                },
                {
                    text: 'Three - Four',
                    children: [
                        { text: 'Khadija', value: 'foo' },
                        {
                            text: 'Hamza',
                            children: [
                                { text: 'Hamza One', value: 'hamz' },
                                { text: 'Hamza Two', value: 'hamz two' },
                            ],
                        },
                    ],
                },
            ],
        },
        { text: 'Six', value: 'six' },
        { text: 'Seven', value: 'seven' },
    ];

    @Listen('click', { capture: true })
    handleItemClick(event: MouseEvent): void {
        console.log('some item', event);
    }

    // private setStyle = (): Record<string, string> => ({
    //     'padding-left': `${this.padding}px`,
    // });

    private renderChildren(children: ListItem[]) {
        return (
            <Fragment>
                {children.map(child => (
                    <Fragment>{this.renderParent(child)}</Fragment>
                ))}
            </Fragment>
        );
    }

    private renderParent(item: ListItem) {
        return !item.hasOwnProperty('children') ? (
            <li>
                <p>{item.text}</p>
            </li>
        ) : (
            <li>
                <p>{item.text}</p>
                <ul>{this.renderChildren(item.children)}</ul>
            </li>
        );
    }

    render() {
        return (
            <Host>
                <ul>
                    {/* The main level */}
                    {this.list.map(item => (
                        <Fragment>{this.renderParent(item)}</Fragment>
                    ))}
                </ul>
            </Host>
        );
    }
}
