import Table from '../pages/Table';
import Sensor from '../pages/Sensor';

const ROUTES = [
  { path: '/table', element: Table, name: 'Table' },
  { path: '/sensor', element: Sensor, name: 'Sensor' },
];

const SSE_URL = 'https://hopp-frontend-api.herokuapp.com/stream';

export { ROUTES, SSE_URL };
