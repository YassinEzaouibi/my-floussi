import ReactApexChart from "react-apexcharts";
import { chartPieT } from "../../../../assets/data/chart/pie/chartPieT.js";

// eslint-disable-next-line react/prop-types
const ChartPieT = ({ personType }) => {
  const dataForPersonType = chartPieT[personType][0];
  const options = {
    colors: ["#1C64F2", "#16BDCA", "#ab9bcf", "#5e4b8a", "#9061F9"],
    chart: {
      height: 420,
      width: "100%",
      type: "pie",
    },
    stroke: {
      colors: ["white"],
      lineCap: "",
    },
    plotOptions: {
      pie: {
        labels: {
          show: false,
        },
        size: "100%",
        dataLabels: {
          offset: -25,
        },
      },
    },
    labels: dataForPersonType.labels,
    dataLabels: {
      enabled: true,
      style: {
        fontFamily: "Inter, sans-serif",
      },
    },
    legend: {
      position: "bottom",
      fontFamily: "Inter, sans-serif",
      size: "2px",
    },
    yaxis: {
      labels: {
        formatter: function (value) {
          return value + "%";
        },
      },
    },
    xaxis: {
      labels: {
        formatter: function (value) {
          return value + "%";
        },
      },
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
    },
  };

  return (
    <div className="w-full  bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
      <div className="flex justify-between items-start w-full">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white me-1">
          Societe de gestion
        </h5>
      </div>
      <div className="py-6" id="pie-chart">
        <ReactApexChart
          options={options}
          series={dataForPersonType.series}
          type="pie"
          height="350"
        />
      </div>
    </div>
  );
};
export default ChartPieT;