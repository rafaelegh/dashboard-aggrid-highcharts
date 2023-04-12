import { ICellRendererParams } from 'ag-grid-community';
import { ITableData } from '../../Data/Data';

export default function StatusCellRenderer(p: ICellRendererParams<ITableData ,string>) {
    const cellClass = `status ${p.value.toLowerCase()}`;
    return (
        <div className={cellClass}>{p.value}</div>
    );
}
