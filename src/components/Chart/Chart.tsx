import Highcharts, { YAxisOptions } from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { SeriesAreaOptions } from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import { cardsDataType } from '../../Data/Data';

HC_exporting(Highcharts);

const options: Highcharts.Options = {
    chart: {
        backgroundColor: 'transparent',
    },
    title: {
        text: undefined,
    },
    legend: {
        enabled: undefined,
    },
    series: [{
        data: [1, 2, 3],
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
        marker: {
            states: {
                hover: {
                    fillColor: Highcharts.getOptions().colors![0] as string
                }
            }
        }
    }],
    xAxis: {
        type: 'datetime',
        labels: {
            style: {
                color: 'black'
            }
        }
    },
    yAxis: {
        title: {
            text: ''
        },
        labels: {
            style: {
                color: 'black'
            },
            enabled: true,
        },
        
    },
    exporting: {
        buttons: {
            contextButton: {
                theme: {
                    fill: 'transparent'
                }
            }
        }
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


interface ChartProps {
    disableYAxis?: boolean;
    lineColor?: string;
    series: cardsDataType['series'];
}

export default function Chart({ disableYAxis = false, lineColor = 'white', series }: ChartProps) {

    const newSeries = series[0].data.map((value, index) => [Date.parse(xValues[index]), value]);

    const newChartOptions = Object.assign({}, options);
    (newChartOptions.series![0] as SeriesAreaOptions).data = newSeries;
    (newChartOptions.series![0] as SeriesAreaOptions).name = series[0].name;
    (newChartOptions.series![0] as SeriesAreaOptions).color = lineColor;
    (newChartOptions.yAxis as YAxisOptions).labels!.enabled = !disableYAxis;

    return (
        <HighchartsReact
            highcharts={Highcharts}
            options={newChartOptions}
        />
    )
}
