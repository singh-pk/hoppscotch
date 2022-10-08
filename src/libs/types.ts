import type { TableRow } from './interface';

type TableSchema = {
  header: String;
  id: String;
  data: (row: TableRow) => String | Number;
  align?: 'center' | 'left' | 'right';
  width?: number | string;
};

export type { TableSchema };
