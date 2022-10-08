import CustomTable from 'components/CustomTable';

import { tableSchema } from 'utils';

const Table = () => {
  return (
    <div>
      <CustomTable tableSchema={tableSchema} event='table' />
    </div>
  );
};

export default Table;
