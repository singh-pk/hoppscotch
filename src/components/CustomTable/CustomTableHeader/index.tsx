import type { FC } from 'react';

import type { CustomTableHeaderProps } from 'libs/interface';

const CustomTableHeader: FC<CustomTableHeaderProps> = ({ tableSchema }) => {
  return (
    <div>
      <table cellPadding={0} cellSpacing={0} border={0}>
        <thead>
          <tr>
            {tableSchema.map((col, idx) => (
              <td
                key={idx}
                // align={col.align ?? 'left'}
                width={col.width ?? '8%'}
              >
                {col.header}
              </td>
            ))}
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default CustomTableHeader;
