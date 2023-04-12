import { cardsDataType } from '../../Data/Data';
import {AiOutlineClose} from 'react-icons/ai';
import Chart from '../Chart/Chart';
import './ExpandedCard.css';


interface ExpandedCardProps extends cardsDataType {
    setExpanded: () => void;
}

export default function ExpandedCard({
    setExpanded,
    title,
    color,
    series
}: ExpandedCardProps) {
    return (
        <div
            className='ExpandedCard'
            style={{
                background: color.backGround,
                boxShadow: color.boxShadow,
            }}
        >
            <div style={{ alignSelf: "flex-end", cursor: "pointer", color: "white" }}>
                <AiOutlineClose className='icon' onClick={setExpanded} />
            </div>
            <span>{title}</span>
            <div className="chartContainer">
                <Chart series={series} />
            </div>
            <span>Last 24 hours</span>
        </div>  
    );
}
