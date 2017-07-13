/**
 * Created by Min on 2017/7/11.
 */
import React, { Component } from 'react';
import { Spin, Row, Col } from 'antd';
import styles from './style';

export default class Loading extends Component {
    render() {
        return (
            <Row className={styles.container}>
                <Col span={12} />
                <Spin tip="加载中…" size="large" />
            </Row>
        );
    }
}
