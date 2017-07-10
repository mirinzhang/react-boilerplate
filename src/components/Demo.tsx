/**
 * Created by Min on 2017/7/10.
 */
import React from 'react';
import './Demo';

export interface Props {
    name: string;
    enthusiasmLevel?: number;
    onIncrement?: () => void;
    onDecrement?: () => void;
}

export default function Demo({ name, enthusiasmLevel = 1, onIncrement, onDecrement }: Props) {
    if (enthusiasmLevel <= 0) {
        throw new Error('You could be a little more enthusiastic.🤣');
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
