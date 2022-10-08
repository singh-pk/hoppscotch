import { FC, useEffect, useRef } from 'react';
import type { CustomTableProps, TableRow } from 'libs/interface';

import { useSSE } from 'hooks';
import { SSE_URL } from 'utils/constants';

import classes from './CustomTableBody.module.scss';

const CustomTableBody: FC<CustomTableProps> = ({ tableSchema, event }) => {
  const { data } = useSSE<TableRow>(SSE_URL, [event]);

  const tableBodyRef = useRef<HTMLTableSectionElement>(null);

  useEffect(() => {
    if (tableBodyRef.current) {
      const { current } = tableBodyRef;

      current.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
        inline: 'end',
      });
    }
  }, [data]);

  return (
    <div className={classes.tableBodyContainer}>
      <table cellPadding={0} cellSpacing={0} border={0}>
        <tbody ref={tableBodyRef}>
          {data[event]?.map((row: TableRow, idx) => (
            <tr key={idx} className={classes.tableRow}>
              {tableSchema.map((col, idx) => {
                return (
                  <td key={idx} width={col.width ?? '8%'}>
                    <>{col.data(row)}</>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomTableBody;
