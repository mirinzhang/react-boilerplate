/**
 * Created by Min on 2017/7/11.
 */
import Loadable from 'react-loadable';
import Loading from '../components/Loading';

const routes = [
    {
        path: '/',
        component: Loadable({
            loader: () => import(/* webpackChunkName: "home" */ '../pages/Home'),
            loading: Loading,
        }),
        routes: [
            {
                path: '/todo',
                component: Loadable({
                    loader: () => import(/* webpackChunkName: "todo" */ '../pages/Todo'),
                    loading: Loading,
                }),
            },
        ],
        strict: true,
        key: 0,
    },
    {
        path: '/timer',
        component: Loadable({
            loader: () => import(/* webpackChunkName: "timer" */ '../pages/Timer'),
            loading: Loading,
        }),
        exact: true,
        strict: true,
        key: 1,
    },
    {
        path: '/second',
        component: Loadable({
            loader: () => import(/* webpackChunkName: "second" */ '../pages/Second'),
            loading: Loading,
        }),
        exact: true,
        strict: true,
        key: 2,
    },
    {
        path: '/third',
        component: Loadable({
            loader: () => import(/* webpackChunkName: "third" */ '../pages/Third'),
            loading: Loading,
        }),
        exact: true,
        strict: true,
        key: 3,
    },
];

export default routes;
