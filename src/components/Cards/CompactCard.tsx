import { cardsDataType } from '../../Data/Data'
import { CircularProgressbar } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";
import './CompactCard.css';

interface CompactCardProps extends cardsDataType {
    setExpanded: () => void;
}

export default function CompactCard({
    setExpanded,
    barValue,
    title,
    color,
    value,
    png
}: CompactCardProps) {
    const Png = png;
    return (
        <div
            className="CompactCard"
            style={{
                background: color.backGround,
                boxShadow: color.boxShadow,
            }}
            onClick={setExpanded}
        >
            <div className="radialBar">
                <CircularProgressbar
                    value={barValue}
                    text={`${barValue}%`}
                />
                <span>{title}</span>
            </div>
            <div className="detail">
                <Png className='icon' />
                <span>${value}</span>
                <span>Last 24 hours</span>
            </div>
        </div>
    )
}
