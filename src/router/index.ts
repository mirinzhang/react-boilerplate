/**
 * Created by Min on 2017/7/11.
 */
import Loadable from 'react-loadable';
import Loading from '../components/Loading';

const routes = [
    {
        path: '/',
        component: Loadable({
            loader: () => import(/* webpackChunkName: "home" */ '../components/Home'),
            loading: Loading,
        }),
        key: 0,
        exact: true,
        strict: true,
    },
    {
        path: '/first',
        component: Loadable({
            loader: () => import(/* webpackChunkName: "first" */ '../components/First'),
            loading: Loading,
        }),
        key: 1,
        exact: true,
        strict: true,
    },
    {
        path: '/second',
        component: Loadable({
            loader: () => import(/* webpackChunkName: "second"*/ '../components/Second'),
            loading: Loading,
        }),
        key: 2,
        exact: true,
        strict: true,
    },
    {
        path: '/demo',
        component: Loadable({
            loader: () => import(/* webpackChunkName: "demo" */ '../components/Demo'),
            loading: Loading,
        }),
        key: 3,
        exact: true,
        strict: true,
    },
];

export default routes;
