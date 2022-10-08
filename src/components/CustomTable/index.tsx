import type { FC } from 'react';

import type { CustomTableProps } from 'libs/interface';

import CustomTableHeader from './CustomTableHeader';
import CustomTableBody from './CustomTableBody';

import classes from './CustomTable.module.scss';

const CustomTable: FC<CustomTableProps> = ({ tableSchema, event }) => {
  return (
    <div className={classes.tableContainer}>
      <CustomTableHeader tableSchema={tableSchema} />

      <CustomTableBody tableSchema={tableSchema} event={event} />
    </div>
  );
};

export default CustomTable;
