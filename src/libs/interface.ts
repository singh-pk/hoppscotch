import type { TableSchema } from './types';

interface CustomTableProps {
  tableSchema: TableSchema[];
  event: string;
}

interface CustomTableHeaderProps {
  tableSchema: TableSchema[];
}

interface TableRow {
  customer_city: String;
  customer_email: String;
  customer_name: String;
  customer_purchase_amount: Number;
}

interface ChartsProps {
  event: string;
  type: 'bar';
}

interface Sensor {
  air_temperature: Number;
  humidity: Number;
  light_intensity: Number;
}

export type {
  CustomTableProps,
  CustomTableHeaderProps,
  TableRow,
  ChartsProps,
  Sensor,
};
