/**
 * Created by Min on 2017/7/11.
 */
import React from 'react';

import './style';

interface LoadProps {
    message?: string;
}

export default function({ message = '加载中…' }: LoadProps) {
    return (
        <div className="load-container">
            <p>{message}</p>
        </div>
    );
}
