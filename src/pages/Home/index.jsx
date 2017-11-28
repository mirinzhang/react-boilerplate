/**
 * Created by Min on 2017/7/11.
 */
import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
// import PropTypes from 'proptypes';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import { store } from './mobx';
import './style';

const { Header, Sider, Content } = Layout;

@observer
export default class Home extends Component {
    componentDidMount() {
        console.log(this.props, '--------');
    }
    
    render() {
        return (
            <Layout className="home-container">
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={store.collapsed}
                >
                    <Link to="/"><div className="logo" /></Link>
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={[ '1' ]}
                    >
                        <Menu.Item key="1">
                            <Icon type="bars" />
                            <span><Link to="/todo" className="link">TODO</Link></span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="minus-square-o" />
                            <span>Page1</span>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Icon type="minus-square-o" />
                            <span>Page2</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header className="home-header">
                        <Icon
                            className="trigger"
                            type={store.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={store.toggle}
                        />
                    </Header>
                    <Content className="home-content">
                        Context
                    </Content>
                </Layout>
            </Layout>
        );
    }
}
