import React,{useEffect,useState} from "react";

import Button from '@mui/material/Button';
import { DataGrid, useGridApiRef } from '@mui/x-data-grid';
import type { GridPaginationMeta } from '@mui/x-data-grid';
import { createFakeServer } from '@mui/x-data-grid-generator';

export default function Home() {

  const [rows, setRows] = useState([]);
const [paginationModel, setPaginationModel] = useState({
  page: 0,
  pageSize: 10,
});
const [filterModel, setFilterModel] = React.useState({ items: [] });
const [sortModel, setSortModel] = React.useState([]);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
      React.useEffect(() => {
  const fetcher = async () => {
    // fetch data from server
    const data = await fetch('https://my-api.com/data', {
      method: 'GET',
      body: JSON.stringify({
        page: paginationModel.page,
        pageSize: paginationModel.pageSize,
        sortModel,
        filterModel,
      }),
    });
    setRows(data.rows);
  };
  fetcher();
}, [paginationModel, sortModel, filterModel]);

<DataGridPro
  columns={columns}
  pagination
  sortingMode="server"
  filterMode="server"
  paginationMode="server"
  onPaginationModelChange={setPaginationModel}
  onSortModelChange={setSortModel}
  onFilterModelChange={setFilterModel}
/>;
    </main>
  );
}
