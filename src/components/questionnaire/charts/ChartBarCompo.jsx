import ReactApexChart from "react-apexcharts";
import { chartBarData } from "../../../assets/data/chart/chartBarData.js";
import { useState } from "react";

const ChartBarCompo = (props) => {
  // eslint-disable-next-line react/prop-types
  const [situation] = useState(props.situation);

  const options = {
    chart: {
      height: 350,
      type: "bar",
      toolbar: {
        show: true,
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 5,
        columnWidth: "75%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 0,
    },
    grid: {
      row: {
        colors: ["#fff", "#f2f2f2"],
      },
    },
    xaxis: {
      tickPlacement: "on",
    },
    yaxis: {
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
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "horizontal",
        shadeIntensity: 0.2,
        gradientToColors: undefined,
        inverseColors: true,
        opacityFrom: 0.85,
        opacityTo: 0.85,
        stops: [50, 0, 100],
      },
    },
    // colors: ["#1A56DB", "#FDBA8C"],
    // series: [
    //     {
    //         name: "Organic",
    //         color: "#1A56DB",
    //         data: [
    //             { x: "2015", y: 0 },
    //             { x: "2016", y: 32.31074996 },
    //             { x: "2017", y: 12.08894892 },
    //             { x: "2018", y: -7.3063248 },
    //             { x: "2019", y: 11.76699042 },
    //             { x: "2020", y: -1.268919414 },
    //             { x: "2021", y: 16.0867248 },
    //             { x: "2022", y: -14.94226351 },
    //             { x: "2023", y: 10.38802732 },
    //             { x: "2024", y: 4.723757685 },
    //         ],
    //     },
    //     {
    //         name: "Social media",
    //         color: "#FDBA8C",
    //         data: [
    //             { x: "2015", y: 0 },
    //             { x: "2016", y: 27.55822394 },
    //             { x: "2017", y: 9.956522072 },
    //             { x: "2018", y: -6.735024314 },
    //             { x: "2019", y: 12.1259429 },
    //             { x: "2020", y: -4.163982242 },
    //             { x: "2021", y: 18.77835919 },
    //             { x: "2022", y: -16.14836651 },
    //             { x: "2023", y: 8.835905749 },
    //             { x: "2024", y: 5.352987544 },
    //         ],
    //     },
    // ],
    // chart: {
    //     type: "bar",
    //     height: "320px",
    //     fontFamily: "Inter, sans-serif",
    //     toolbar: {
    //         show: false,
    //     },
    // },
    // plotOptions: {
    //     bar: {
    //         horizontal: false,
    //         columnWidth: "70%",
    //         borderRadiusApplication: "end",
    //         borderRadius: 8,
    //     },
    // },
    // tooltip: {
    //     shared: true,
    //     intersect: false,
    //     style: {
    //         fontFamily: "Inter, sans-serif",
    //     },
    // },
    // states: {
    //     hover: {
    //         filter: {
    //             type: "darken",
    //             value: 1,
    //         },
    //     },
    // },
    // stroke: {
    //     show: true,
    //     width: 0,
    //     colors: ["transparent"],
    // },
    // grid: {
    //     show: false,
    //     strokeDashArray: 4,
    //     padding: {
    //         left: 2,
    //         right: 2,
    //         top: -14
    //     },
    // },
    // dataLabels: {
    //     enabled: false,
    // },
    // legend: {
    //     show: false,
    // },
    // xaxis: {
    //     floating: false,
    //     labels: {
    //         show: true,
    //         style: {
    //             fontFamily: "Inter, sans-serif",
    //             cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
    //         }
    //     },
    //     axisBorder: {
    //         show: false,
    //     },
    //     axisTicks: {
    //         show: false,
    //     },
    // },
    // yaxis: {
    //     show: false,
    // },
    // fill: {
    //     opacity: 1,
    // },
  };

  return (
    <div className="max-w-full w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
      <div className="flex justify-between pb-4 mb-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center">
          <div>
            <h5 className="leading-none text-2xl font-bold text-gray-900 dark:text-white pb-1">
              Rendement Annuel
            </h5>
            <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
              toolbar
            </p>
          </div>
        </div>
        {/*<div>*/}
        {/*  <span className="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-1 rounded-md dark:bg-green-900 dark:text-green-300">*/}
        {/*    <svg*/}
        {/*      className="w-2.5 h-2.5 me-1.5"*/}
        {/*      aria-hidden="true"*/}
        {/*      xmlns="http://www.w3.org/2000/svg"*/}
        {/*      fill="none"*/}
        {/*      viewBox="0 0 10 14"*/}
        {/*    >*/}
        {/*      <path*/}
        {/*        stroke="currentColor"*/}
        {/*        strokeLinecap="round"*/}
        {/*        strokeLinejoin="round"*/}
        {/*        strokeWidth="2"*/}
        {/*        d="M5 13V1m0 0L1 5m4-4 4 4"*/}
        {/*      />*/}
        {/*    </svg>*/}
        {/*    numbers*/}
        {/*  </span>*/}
        {/*</div>*/}
      </div>

      <div id="column-chart">
        <ReactApexChart
          options={options}
          series={chartBarData[situation]}
          type="bar"
          height="350"
        />
      </div>
    </div>
  );
};
export default ChartBarCompo;
