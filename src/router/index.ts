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
        exact: true,
        strict: true,
    },
    {
        path: '/first',
        component: Loadable({
            loader: () => import(/* webpackChunkName: "first" */ '../components/First'),
            loading: Loading,
        }),
        exact: true,
        strict: true,
    },
    {
        path: '/second',
        component: Loadable({
            loader: () => import(/* webpackChunkName: "second" */ '../components/Second'),
            loading: Loading,
        }),
        exact: true,
        strict: true,
    },
    {
        path: '/demo',
        component: Loadable({
            loader: () => import(/* webpackChunkName: "demo" */ '../containers/Demo'),
            loading: Loading,
        }),
        exact: true,
        strict: true,
    },
];

export default routes;
