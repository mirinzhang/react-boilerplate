/**
 * Created by Min on 2017/7/11.
 */
import React, { Component } from 'react';
import { Layout } from 'antd';
import { Link } from 'react-router-dom';
import styles from './style';

const { Header, Content, Footer } = Layout;

export default class Home extends Component {
    render() {
        return (
            <Layout>
                <Header>
                    <div className={styles.homeTitle}>React-Mobx-Boilerplate</div>
                </Header>
                <Content>
                    <div className={styles.homeContent}>
                        <Link to="/timer">Todo</Link>
                        <Link to="/second">Second--2</Link>
                    </div>
                </Content>
                <Footer>
                    <div className={styles.homeFooter}>By MiRinZhang</div>
                </Footer>
            </Layout>
        );
    }
}
