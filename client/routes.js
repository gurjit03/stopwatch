import MainLayout from '../imports/ui/layouts/main-layout.jsx';
import StopWatch from '../imports/ui/components/stopwatch.jsx';

const Routes = {
  path: '/',
  component: MainLayout,
  indexRoute: {component: StopWatch},
}

export default Routes;
