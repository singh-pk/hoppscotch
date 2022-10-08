import Charts from 'components/Charts';

import classes from './Sensor.module.scss';

const Sensor = () => {
  return (
    <div className={classes.sensor}>
      <Charts event='sensor' type='bar' />
    </div>
  );
};

export default Sensor;
