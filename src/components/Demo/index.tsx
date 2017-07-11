/**
 * Created by Min on 2017/7/11.
 */
import React from 'react';
import { Button } from 'antd';

import './style';

export interface Props {
    name: string;
    enthusiasmLevel?: number;
    onIncrement?: () => void;
    onDecrement?: () => void;
}

export default function({ name, enthusiasmLevel = 1, onDecrement, onIncrement }: Props) {
    if (enthusiasmLevel <= 0) {
        throw new Error('Something is wrong');
    }

    return (
        <div className="container">
            <div className="content">
                {name + getExclamationMarks(enthusiasmLevel)}
            </div>
            <div className="opr">
                <Button className="decrement" onClick={onDecrement} type="danger">-</Button>
                <Button onClick={onIncrement} type="primary">+</Button>
            </div>
        </div>
    );
}

// helpers

function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join('🤗 ');
}
