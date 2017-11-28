/**
 * Created by Min on 2017/7/11.
 */
import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import PropTypes from 'proptypes';
import { Link } from 'react-router-dom';
import './style';

const { Sider } = Layout;

export default class Home extends Component {
    static propTypes = {
        collapsed: PropTypes.bool,
    };
    
    static defaultProps = {
        collapsed: false,
    };
    
    render() {
        const { collapsed } = this.props;
        return (
            <Sider
                trigger={null}
                collapsible
                collapsed={collapsed}
            >
                <Link to="/">
                    <div className="logo" />
                </Link>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                >
                    <Menu.Item key="1">
                        <Icon type="bars" />
                        <span><Link to="/todo" className="link">TODO</Link></span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Icon type="minus-square-o" />
                        <span><Link to="/timer" className="link">Timer</Link></span>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Icon type="minus-square-o" />
                        <span>Page2</span>
                    </Menu.Item>
                </Menu>
            </Sider>
        );
    }
}
