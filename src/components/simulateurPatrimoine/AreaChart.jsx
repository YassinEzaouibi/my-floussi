import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// const data = [
//     {
//         year: 2023,
//         uv: 4000,
//         pv: 2400,
//         amt: 2400,
//     },
//     {
//         year: 2024,
//         uv: 3000,
//         pv: 1398,
//         amt: 2210,
//     },
//     {
//         year: 2025,
//         uv: 2000,
//         pv: 980,
//         amt: 2290,
//     },
//     {
//         year: 2026,
//         uv: 80,
//         pv: 308,
//         amt: 2000,
//     },

//     {
//         year: 2027,
//         uv: 230,
//         pv: 3800,
//         amt: 2500,
//     },
//     {
//         year: 2028,
//         uv: 340,
//         pv: 4300,
//         amt: 2100,
//     },

// ];

const formatter = (value) => `${value} MAD`;

const PatrimoineCharte = ({ data }) => {
    return (
        <ResponsiveContainer width="100%" height="30%">
            <AreaChart
                width={500}
                height={400}
                data={data}
                margin={{
                    top: 20,
                    right: 30,
                    left: 0,
                    bottom: 0,
                }}
            >
                <CartesianGrid strokeDasharray="1 2" />
                <XAxis dataKey={'year'} tick={false} />
                <YAxis type='number' tickFormatter={formatter} />
                <Tooltip />
                {/* <Area type="basis" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" /> */}
                <Area type="monotone" dataKey="Invetissements" stackId="1" strokeWidth={2} stroke="#0074E4" fill="#0074E4" fillOpacity={0.8} fillRule="nonzero" />



                <Area type="monotone" dataKey="Pmv Bourse" stackId="1" strokeWidth={2.5} stroke="#F49352" fill="#F49352" fillOpacity={0.8} />
                <Area type="monotone" dataKey="Pmv Autre" stackId="1" strokeWidth={2.5} stroke="#B6BBC4" fill="#B6BBC4" fillOpacity={0.8} />
                <Area type="monotone" dataKey="Versement cumulé" stackId="1" strokeWidth={2.5} stroke="#FFEA66" fill="#FFEA66" fillOpacity={0.8} />
            </AreaChart>
        </ResponsiveContainer>
    )
}

export default PatrimoineCharte