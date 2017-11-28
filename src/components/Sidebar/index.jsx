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
        items: PropTypes.array.isRequired,
    };
    
    static defaultProps = {
        collapsed: false,
        items: [],
    };
    
    render() {
        const { collapsed, items } = this.props;
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
                    defaultSelectedKeys={['0']}
                >
                    {
                        items.map((item, key) => (
                            <Menu.Item key={key}>
                                <Icon type={item.icon} />
                                <Link to={item.path}>
                                    {item.text}
                                </Link>
                            </Menu.Item>),
                        )
                    }
                </Menu>
            </Sider>
        );
    }
}
