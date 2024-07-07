import ReactApexChart from "react-apexcharts";
import { chartLineData } from "../../../assets/data/chart/chartLineData.js";
import { useState } from "react";

const ChartLineCompo = (props) => {
  // eslint-disable-next-line react/prop-types
  const [situation] = useState(props.situation);

  const options = {
    xaxis: {
      show: true,
      categories: ["2024", "2025", "2026", "2027", "2028", "2029", "2030"],
      labels: {
        show: true,
        style: {
          fontFamily: "Inter, sans-serif",
          cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400",
        },
      },
    },
    yaxis: {
      show: true,
      labels: {
        show: true,
        style: {
          fontFamily: "Inter, sans-serif",
          cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400",
        },
        formatter: function (value) {
          return value.toFixed(0);
        },
      },
    },
    chart: {
      sparkline: {
        enabled: false,
      },
      height: "100%",
      width: "100%",
      type: "area",
      fontFamily: "Inter, sans-serif",
      dropShadow: {
        enabled: false,
      },
      toolbar: {
        show: true,
      },
    },
    tooltip: {
      enabled: true,
      x: {
        show: false,
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        opacityFrom: 0.55,
        opacityTo: 0,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: [5, 5, 5],
      curve: "straight",
      dashArray: [0, 12, 0],
    },
    legend: {
      show: false,
    },
    grid: {
      show: false,
    },
  };

  return (
    <div className="max-w-full w-full bg-white rounded-lg shadow dark:bg-gray-800">
      <div className="flex justify-between p-4 md:p-6 pb-0 md:pb-0">
        <div>
          <h5 className="leading-none text-2xl font-bold text-gray-900 dark:text-white pb-2">
            Simulation sur 6 ans
          </h5>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            toolbar
          </p>
        </div>
        {/*<div className="flex items-center px-2.5 py-0.5 text-base font-semibold text-green-500 dark:text-green-500 text-center">*/}
        {/*  23%*/}
        {/*  <svg*/}
        {/*    className="w-3 h-3 ms-1"*/}
        {/*    aria-hidden="true"*/}
        {/*    xmlns="http://www.w3.org/2000/svg"*/}
        {/*    fill="none"*/}
        {/*    viewBox="0 0 10 14"*/}
        {/*  >*/}
        {/*    <path*/}
        {/*      stroke="currentColor"*/}
        {/*      strokeLinecap="round"*/}
        {/*      strokeLinejoin="round"*/}
        {/*      strokeWidth="2"*/}
        {/*      d="M5 13V1m0 0L1 5m4-4 4 4"*/}
        {/*    />*/}
        {/*  </svg>*/}
        {/*</div>*/}
      </div>
      <div id="labels-chart" className="px-2.5">
        <ReactApexChart
          options={options}
          series={chartLineData[situation]}
          type="area"
          height="350"
        />
      </div>
    </div>
  );
};

export default ChartLineCompo;
