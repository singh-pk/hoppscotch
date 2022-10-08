import type { TableRow } from 'libs/interface';

const tableSchema = [
  {
    header: 'City',
    id: 'customer_city',
    data: (row: TableRow) => row.customer_city,
    width: '15%',
  },
  {
    header: 'Email',
    id: 'customer_email',
    data: (row: TableRow) => row.customer_email,
    width: '25%',
  },
  {
    header: 'Name',
    id: 'customer_name',
    data: (row: TableRow) => row.customer_name,
    width: '20%',
  },
  {
    header: 'Amount',
    id: 'customer_purchase_amount',
    data: (row: TableRow) => row.customer_purchase_amount,
    width: '5%',
  },
];

export { tableSchema };
