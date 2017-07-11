/**
 * Created by Min on 2017/7/11.
 */
import React from 'react';
import { Spin, Row, Col } from 'antd';

import './style';

export default function() {
    return (
        <Row className="load-container">
            <Col span={12}/>
            <Spin tip="加载中…" size="large" />
        </Row>
    );
}
