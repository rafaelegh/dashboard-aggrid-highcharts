import Card from './Card';
import { cardsData } from '../../Data/Data';
import './Cards.css'

export default function Cards() {
  return (
    <div className="Cards">
        {cardsData.map((card, id) => 
            <div className="parentContainer" key={id}>
                <Card
                    title={card.title}
                    color={card.color}
                    barValue={card.barValue}
                    value={card.value}
                    png={card.png}
                    series={card.series}
                />
            </div>
        )}
    </div>
  )
}
