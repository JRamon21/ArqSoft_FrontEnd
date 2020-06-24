import { Content1, Content2 } from '../views/pages';

export const routes = [
    {
        path: '/content1',
        component: Content1,
        exact: true,
        label: 'Content1'
    },
    {
        path: '/content2',
        component: Content2,
        exact: true,
        label: 'Content2'
    },
]