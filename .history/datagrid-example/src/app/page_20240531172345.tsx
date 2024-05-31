'use client'
import React,{useEffect,useState} from "react";

import Button from '@mui/material/Button';
import { DataGrid, useGridApiRef } from '@mui/x-data-grid';
import type { GridPaginationMeta } from '@mui/x-data-grid';
import { createFakeServer } from '@mui/x-data-grid-generator';

const SERVER_OPTIONS = {
  useCursorPagination: false,
};

const { useQuery, ...data } = createFakeServer({ rowLength: 1000 }, SERVER_OPTIONS);

export default function Home() {

  const apiRef = useGridApiRef();
  const [paginationModel, setPaginationModel] = React.useState({
    page: 0,
    pageSize: 50,
  });

  const {
    isLoading,
    rows,
    pageInfo: { hasNextPage },
  } = useQuery(paginationModel);

  const paginationMetaRef = React.useRef<GridPaginationMeta>({});
 



  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
          
      <div style={{ height: 700,width: '100%'  }}>
        <DataGrid
          
          rows={rows}
          {...data}
          initialState={{ ...data.initialState, pagination: { rowCount: -1 } }}
          estimatedRowCount={100}
          
          loading={isLoading}
          pageSizeOptions={[10, 25, 50, 100]}
          paginationModel={paginationModel}
          paginationMode="server"
          onPaginationModelChange={setPaginationModel}
        />
      </div>
    </main>
  );
}
