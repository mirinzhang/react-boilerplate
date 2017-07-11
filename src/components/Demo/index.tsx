/**
 * Created by Min on 2017/7/11.
 */
import React from 'react';

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
                <button onClick={onDecrement}>-</button>
                <button onClick={onIncrement}>+</button>
            </div>
        </div>
    );
}

// helpers

function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join('🤗 ');
}
