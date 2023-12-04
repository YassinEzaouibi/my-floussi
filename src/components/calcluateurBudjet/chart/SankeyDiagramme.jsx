import React from 'react'
import { Chart } from "react-google-charts";
import { _revenus, step1, step2, step3 } from '../../../utils/sankeyData/steps';

// export const _data = {
//     Investissements: [
//         {
//             title: 'Investissements mensuels',
//             data: [
//                 {
//                     nom: 'Assurance vie',
//                     montant: 200,

//                 },
//                 {
//                     nom: 'Action',
//                     montant: 400,

//                 },
//             ]
//         },
//         {
//             title: 'Bource',
//             data: [
//                 {
//                     nom: 'casa bource',
//                     montant: 400,

//                 }
//             ]
//         }
//     ],
//     Depences: [
//         {
//             title: 'Logement',
//             data: [
//                 {
//                     nom: 'Charges',
//                     montant: 1000
//                 }
//             ]
//         }
//     ],
// }





// export const data = [
//     ["Budget", "Investissements", "Dépenses"],
//     // ["Salaire", "Budget", 3000],
//     // ["Ecom", "Budget", 300],
//     // ...step1(_data.revenus, 'Budget'),
//     // ["Budget", "Investissements mensuels", 600],
//     // ["Budget", "Logement", 1000],
//     // ["Budget", "Bource", 400],
//     ...step1(_revenus),
//     ...step2(_data),
//     ...step3(_data)
//     // ["Logement", "Charges", 1000],
//     // ["Bource", 'casa bource', 400],
//     // ["Investissements mensuels", "Assurance Vie", 200],
//     // ["Investissements mensuels", "Actions", 400],
// ];


// console.log(step1(revenus))
// console.log(step2(_data))
// console.log(step3(_data))

const colors = ['#F49352', '#D6475D', '#85357D', '#6F50E5', '#3C898E', '#F08696']
export const options = {
    sankey: {
        // link: { color: { fill: "#F49352" } },
        link: {
            // colors,
            // color: {
            //     stroke: 'black', strokeWidth: 1
            // }
            colorMode: 'target',
            color: {
                // fill: '#efd',     // Color of the link.
                fillOpacity: 1, // Transparency of the link.
                // Thickness of the link border (default 0).
            },

        },
        node: {
            colors,
            label: {
                fontName: 'Times-Roman',
                fontSize: 14,
                color: '#fff',
                bold: true,

            },
            color: {
                // fill: '#efd',     // Color of the link.
                fillOpacity: 0.8, // Transparency of the link.
                // Thickness of the link border (default 0).
            },

        },
    },
};

const SankeyDiagramme = ({ data }) => {
    // console.log(stepe2(_data))
    return (
        <Chart
            chartType="Sankey"
            width="100%"
            height="400px"
            data={data}
            style
            options={options}

        />
    )
}

export default SankeyDiagramme