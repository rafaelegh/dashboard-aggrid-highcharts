import { useState } from 'react'
import ExpandedCard from './ExpandedCard';
import CompactCard from './CompactCard';
import { cardsDataType } from '../../Data/Data';

interface CardProps extends cardsDataType {}

export default function Card(props: CardProps) {
    const [expanded, setExpanded] = useState(false);
    return (
        <>
            {expanded ? (
                <ExpandedCard {...props} setExpanded={() => setExpanded(false)} />
            ) : (
                <CompactCard {...props} setExpanded={() => setExpanded(true)} />
            )}
        </>
    );
}
