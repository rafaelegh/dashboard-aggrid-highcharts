import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { cardsDataType } from '../../Data/Data';
import {AiOutlineClose} from 'react-icons/ai';
import './ExpandedCard.css';
import { SeriesAreaOptions } from 'highcharts';

interface ExpandedCardProps extends cardsDataType {
    setExpanded: () => void;
}

const chartOptions = {
    options: {
        chart: {
            type: "area",
            height: "auto",
        },

        dropShadow: {
            enabled: false,
            enabledOnSeries: undefined,
            top: 0,
            left: 0,
            blur: 3,
            color: "#000",
            opacity: 0.35,
        },

        fill: {
            colors: ["#fff"],
            type: "gradient",
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "smooth",
            colors: ["white"],
        },
        tooltip: {
            x: {
                format: "dd/MM/yy HH:mm",
            },
        },
        grid: {
            show: true,
        },
        xaxis: {
            type: "datetime",
        },
    },
};

const options: Highcharts.Options = {
    chart: {
        backgroundColor: 'transparent'
    },
    title:{
        text: undefined,
    },
    legend : {
        enabled: undefined,
    },
    series: [{
        data: [1,2,3],
        type: 'areaspline',
        color: '#FFF',
        fillColor: {
            linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
            stops: [
                [0, Highcharts.getOptions().colors![0] as string],
                [1, Highcharts.color(Highcharts.getOptions().colors![0]).setOpacity(0).get('rgba') as string],
            ]
        },
        lineWidth: 5,
        dataLabels: {
            enabled: false // set dataLabels to false
        },
    }],
    xAxis: {
        type: 'datetime'   
    },
    yAxis: {
        title: {
            text: ''
        },
    },

}

const xValues = [
    "2018-09-19T00:00:00.000Z",
    "2018-09-19T01:30:00.000Z",
    "2018-09-19T02:30:00.000Z",
    "2018-09-19T03:30:00.000Z",
    "2018-09-19T04:30:00.000Z",
    "2018-09-19T05:30:00.000Z",
    "2018-09-19T06:30:00.000Z",
];

export default function ExpandedCard({
    setExpanded,
    title,
    color,
    series
}: ExpandedCardProps) {

    const newSeries =  series[0].data.map((value, index) => [Date.parse(xValues[index]), value]);
    console.log(newSeries);
    (options.series![0] as SeriesAreaOptions).data = newSeries;
    const newChartOptions = Object.assign({}, options);
    
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
                <HighchartsReact
                    highcharts={Highcharts} 
                    options={newChartOptions}
                />
            </div>
            <span>Last 24 hours</span>
        </div>  
        );
}
