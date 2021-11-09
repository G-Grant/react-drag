import { RouteConfig } from 'react-router-config';
import Home from '@/pages/home';
import H5 from '@/pages/h5';
import Mouse from '@/pages/mouse';
import Sort from '@/pages/sort';
import PreviewImage from '@/pages/preview-image';
import CrossBrowserDragImage from '@/pages/cross-browser-drag-image';
import ReceiveImage from '@/pages/receive-image';
import Demo from '@/pages/demo';

const routesConfig: RouteConfig[] = [
    {
        path: '/',
        exact: true,
        component: Home,
    },
    {
        path: '/h5',
        component: H5,
    },
    {
        path: '/mouse',
        component: Mouse,
    },
    {
        path: '/sort',
        component: Sort,
    },
    {
        path: '/preview-image',
        component: PreviewImage,
    },
    {
        path: '/cross-browser-drag-image',
        component: CrossBrowserDragImage,
    },
    {
        path: '/receive-image',
        component: ReceiveImage,
    },
    {
        path: '/demo',
        component: Demo,
    },
];

export default routesConfig;
