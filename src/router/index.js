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
        path: '/plain',
        component: Loadable({
            loader: () => import(/* webpackChunkName: "second" */ '../pages/Plain'),
            loading: Loading,
        }),
        exact: true,
        strict: true,
        key: 2,
    },
];

export default routes;
