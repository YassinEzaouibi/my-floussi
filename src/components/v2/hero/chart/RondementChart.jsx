import React, { PureComponent } from 'react';
import data from '../../../../utils/json/rondementChartData.json'

// const dataReformed = data.map((d) => {
//     return {
//         "date": d.date,
//         "Masi Rtb Brut": d['Masi Rtb Brut'].toFixed(2),
//         "model": d.model.toFixed(2)
//     }
// }
// )
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from "recharts";


class CustomizedAxisTick extends PureComponent {
    render() {
        const { x, y, stroke, payload } = this.props;

        return (
            <g transform={`translate(${x},${y})`}>
                <text style={{ fontSize: 10 }} x={0} y={0} dy={6} textAnchor="end" fill="#666" transform="rotate(-35)">
                    {payload.value}
                </text>
            </g>
        );
    }
}

class CustomizedYAxisTick extends PureComponent {
    render() {
        const { x, y, stroke, payload } = this.props;

        return (
            <g transform={`translate(${x},${y})`}>
                <text style={{ fontSize: 10 }} x={0} y={0} dy={6} textAnchor="end" fill="#666" >
                    {payload.value}
                </text>
            </g>
        );
    }
}


const RondementChart = () => {
    return (
        <ResponsiveContainer width="100%" height={400}>
            <LineChart

                data={data}
            >
                <CartesianGrid strokeDasharray="1 1" />
                <XAxis
                    tick={<CustomizedAxisTick />}
                    dataKey="date"
                // tickMargin={20}
                />

                <YAxis
                    tick={<CustomizedYAxisTick />}
                />
                <Tooltip />
                <Legend
                    wrapperStyle={{
                        paddingTop: 40
                    }}
                // style={{ marginTop: 40 }}
                />
                <Line
                    dot={false}
                    type="monotone"
                    dataKey="Masi Rtb Brut"
                    stroke="#009AD5"
                />
                <Line dot={false}
                    type="monotone" dataKey="model" stroke="#F49352" />
            </LineChart>
        </ResponsiveContainer >
    )
}

export default RondementChart