import { ICellRendererParams } from 'ag-grid-community';
import { ITableData } from '../../Data/Data';

export default function DetailsCellRenderer(p: ICellRendererParams<ITableData, string>) {
    return (
        <span className='details'>Details</span>
    );
}
