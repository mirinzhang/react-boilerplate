/**
 * Created by Min on 2017/7/11.
 */
import Loadable from 'react-loadable';
import Loading from '../components/Loading';

const routes = [
    {
        path: '/',
        component: Loadable({
            loader: () => import(/* webpackChunkName: "todo" */ '../pages/Todo'),
            loading: Loading,
        }),
        exact: true,
        strict: true,
        key: 1,
    },
    {
        path: '/timer',
        component: Loadable({
            loader: () => import(/* webpackChunkName: "timer" */ '../pages/Timer'),
            loading: Loading,
        }),
        exact: true,
        strict: true,
        key: 2,
    },
    {
        path: '/plain',
        component: Loadable({
            loader: () => import(/* webpackChunkName: "second" */ '../pages/Second'),
            loading: Loading,
        }),
        exact: true,
        strict: true,
        key: 3,
    },
];

export default routes;
