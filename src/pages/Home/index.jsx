/**
 * Created by Min on 2017/7/11.
 */
import React, { Component } from 'react';
import { Layout } from 'antd';
// import PropTypes from 'proptypes';
import { observer } from 'mobx-react';
import { Route, Switch } from 'react-router-dom';
import SideBar from '../../components/Sidebar';
import CustomHeader from '../../components/CustomHeader';
import routes from '../../router';
import { store } from './mobx';
import { sideBar } from '../../common/sidebar';
import './style';

const { Content } = Layout;

@observer
export default class Home extends Component {
    render() {
        return (
            <Layout className="home-container">
                <SideBar
                    items={sideBar}
                    collapsed={store.collapsed} />
                <Layout>
                    <CustomHeader
                        toggle={store.toggle}
                        collapsed={store.collapsed} />
                    <Content className="content">
                        <Switch>
                            {routes.map(route => <Route {...route} />)}
                        </Switch>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}
