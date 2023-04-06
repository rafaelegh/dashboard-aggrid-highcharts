import Highcharts, { Options } from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const options = {
    chart: {
        backgroundColor: {
            linearGradient: { x1: 1, x2: 1, y1: 0, y2: 0 },
            stops: [
                [0, 'rgba(187, 103, 255, 0)'],
                [1, 'rgba(196, 132, 243, 1)']
            ]
        }
    },
    title: {
        text: 'My chart'
    },
    series: [{
        data: [1, 2, 3],
    }]
}

export const ChartExample = () => 
    <div>
        <HighchartsReact
            highcharts={Highcharts}
            options={options}
        />
    </div>