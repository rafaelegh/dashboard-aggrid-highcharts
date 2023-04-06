import { AgGridReact } from 'ag-grid-react'
import { useState } from 'react'
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { TableData, ITableData } from '../../Data/Data';
import './Table.css';
import StatusCellRenderer from './StatusCellRenderer';
import DetailsCellRenderer from './DetailsCellRenderer';
import { ColDef } from 'ag-grid-community';

const rowWidth = 150;

export default function Table() {

    const [columnDefs, setColumnDefs] = useState([
        { field: 'product' },
        { field: 'trackingId' },
        { field: 'date' },
        { field: 'status', cellRenderer: StatusCellRenderer },
        { field: '', cellRenderer: DetailsCellRenderer }
    ]);

    const [rowData, setRowData] = useState(TableData);

    const defaultColDef: ColDef = {
        sortable: true,
        filter: true,
        resizable: true,
        width: rowWidth
    }

    return (
    <div className="table">
        <h3>Recent Orders</h3>
            <div className="ag-theme-alpine" style={{ width: "100%", height: "70%" }}>
                <AgGridReact<ITableData>
                    columnDefs={columnDefs}
                    rowData={rowData}
                    animateRows={true} rowSelection='multiple'
                    defaultColDef={defaultColDef}
                />
            </div>
    </div>
  )
}
