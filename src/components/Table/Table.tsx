import { FC } from 'react';
import { DataGrid, GridColDef, ptBR } from '@mui/x-data-grid';

type Props = {
  loading?: boolean;
  columns: GridColDef[];
  dataTable: Array<object>;
};

export const Table: FC<Props> = ({ loading, columns, dataTable }) => (
  <div style={{ width: '100%', height: 'calc(100vh - 240px)' }}>
    <DataGrid
      disableColumnMenu
      disableColumnFilter
      loading={loading}
      rows={dataTable}
      columns={columns}
      pagination
      autoPageSize
      localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
    />
  </div>
);
