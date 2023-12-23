import React from 'react'
import ReactECharts from 'echarts-for-react';

import { graphic } from 'echarts'

const data = [
    {
        name: 'Grandpa',
        children: [
            {
                name: 'Uncle Leo',
                value: 15,
                children: [
                    {
                        name: 'Cousin Jack',
                        value: 2
                    },
                    {
                        name: 'Cousin Mary',
                        value: 5,
                        children: [
                            {
                                name: 'Jackson',
                                value: 2
                            }
                        ]
                    },
                    {
                        name: 'Cousin Ben',
                        value: 4
                    }
                ]
            },
            {
                name: 'Father',
                value: 10,
                children: [
                    {
                        name: 'Me',
                        value: 5
                    },
                    {
                        name: 'Brother Peter',
                        value: 1
                    }
                ]
            }
        ]
    },
    {
        name: 'Nancy',
        children: [
            {
                name: 'Uncle Nike',
                children: [
                    {
                        name: 'Cousin Betty',
                        value: 1
                    },
                    {
                        name: 'Cousin Jenny',
                        value: 2
                    }
                ]
            }
        ]
    }
];

var barData = [5, 20, 36, 10, 10, 20];
var barColors = [
    ['rgba(176,196,222, 0.3)', 'rgba(176,196,222, 1)'],
    ['rgba(220,20,60, 0.3)', 'rgba(220,20,60, 1)'],
    ['rgba(189,183,107, 0.3)', 'rgba(189,183,107, 1)'],
    ['rgba(47,79,79, 0.3)', 'rgba(47,79,79, 1)'],
    ['rgba(30,144,255, 0.3)', 'rgba(30,144,255, 1)'],
    ['rgba(112,128,144, 0.3)', 'rgba(112,128,144, 1)'],
];
const SunBurst = ({ data, total }) => {

    const options = {
        series: {
            type: 'sunburst',
            data: data,
            radius: [6, '80%'],
            itemStyle: {
                borderRadius: 5,
                borderWidth: 3,
                borderColor: '#fff'
            },
            label: {
                show: true,
                fontSize: 10,
                rotate: 'tangential',
                color: '#000',
                formatter: function (params) {
                    return `${params.name}: ${(+params.value / total * 100).toFixed(2)}% `
                },
                emphasis: {
                    show: true,
                    fontWeight: 'bold'
                }

            },
            levels: [
                {},
                {
                    itemStyle: {
                        color: new graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#2b3964'
                        },
                        {
                            offset: 1,
                            color: '#7fa6ee'
                        }
                        ])
                    },
                    label: {
                        rotate: 'tangential',
                        color: '#000'

                    }
                },
                {
                    itemStyle: {
                        color: new graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#6fe7db'
                        },
                        {
                            offset: 1,
                            color: '#7fa6ee'
                        }
                        ])
                    },
                    label: {
                        rotate: 'tangential'
                    }
                },
                {
                    itemStyle: {
                        color: new graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#f2fc9f'
                        },
                        {
                            offset: 1,
                            color: '#edbb91'
                        }
                        ])
                    },
                    label: {
                        rotate: 'radial'
                    }
                }
            ]
        }
    };

    return (
        <div className={'echarts-demo'}>
            <div className='w-full'>
                <ReactECharts
                    style={{ height: 400 }}
                    option={options}
                    notMerge={true}
                    lazyUpdate={true}
                    theme={"theme_name"}
                />

            </div>
        </div>
    )
}

export default SunBurst