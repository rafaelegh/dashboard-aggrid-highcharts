import { customerReviewData } from "../../Data/Data";
import Chart from "../Chart/Chart";

const CustomerReview = () => {
  const data = {
    series: [
      {
        name: "Review",
        data: [10, 50, 30, 90, 40, 120, 100],
      },
    ],
    options: {
      chart: {
        type: "area",
        height: "auto",
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
        colors: ["rgba(186, 106, 194, 1)", "rgba(113, 106, 204, 1)"],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      grid: {
        show: false,
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
      },
      yaxis: {
        show: false
      },
      toolbar:{
        show: false
      }
    },
  };
  return (
    <div className="CustomerReview">
      <Chart series={customerReviewData.series} lineColor="purple" disableYAxis height={200}  />
    </div>
  );
};

export default CustomerReview;
