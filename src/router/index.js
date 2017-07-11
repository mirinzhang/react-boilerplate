/**
 * Created by Min on 2017/7/11.
 */
import Loadable from 'react-loadable';
import Loading from '../components/Loading';

const routes = [
    {
        path: '/first',
        component: Loadable({
            loader: () => import(/* webpackChunkName: "first" */ '../components/First'),
            loading: Loading,
        }),
        id: 1,
    },
    {
        path: '/second',
        component: Loadable({
            loader: () => import(/* webpackChunkName: "second" */ '../components/Second'),
            loading: Loading,
        }),
        id: 2,
    },
    {
        path: '/third',
        component: Loadable({
            loader: () => import(/* webpackChunkName: "third" */ '../components/Third'),
            loading: Loading,
        }),
        id: 3,
    },
];

export default routes;
