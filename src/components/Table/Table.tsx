import { AgGridReact } from 'ag-grid-react'
import { useState } from 'react'
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { TableData, ITableData } from '../../Data/Data';
import './Table.css';

export default function Table() {

    const [columnDefs, setColumnDefs] = useState([
        { field: 'product' },
        { field: 'trackingId' },
        { field: 'date' },
        { field: 'status' },
    ]);

    const [rowData, setRowData] = useState(TableData);

    return (
    <div className="table">
        <h3>Recent Orders</h3>
            <div className="ag-theme-alpine" style={{ width: "100%", height: "50%" }}>
                <AgGridReact
                    columnDefs={columnDefs}
                    rowData={rowData}
                    animateRows={true} rowSelection='multiple'
                />
            </div>
    </div>
  )
}
