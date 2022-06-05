import React from 'react';
import {
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    AreaChart, ResponsiveContainer, ComposedChart, Line, Area, Bar, Legend,
} from 'recharts';

const data = [
    {
        name: 'May',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Jun',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'May',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Jun',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'May',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: '1Years Ago',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    }
];

const data2 = [
    {
        name: 'Page A',
        uv: 590,
        pv: 800,
        amt: 1400,
    },
    {
        name: 'Page B',
        uv: 868,
        pv: 967,
        amt: 1506,
    },
    {
        name: 'Page C',
        uv: 1397,
        pv: 1098,
        amt: 989,
    },
    {
        name: 'Page D',
        uv: 1480,
        pv: 1200,
        amt: 1228,
    },
    {
        name: 'Page E',
        uv: 1520,
        pv: 1108,
        amt: 1100,
    },
    {
        name: 'Page F',
        uv: 1400,
        pv: 680,
        amt: 1700,
    },
];

interface Props {

}

const DashIndex: React.FC<Props> = () => {

    return (
        <div
            className="w-[100vw] grid pt-[170px] grid-cols-1 gap-y-12 gap-6 md:grid-cols-2 lg:grid-cols-4 bg-base-300 min-h-[100vh]">

            <div className=" p-[10px] w-[100vw] md:w-[400px] lg:w-[600px]">
                <ResponsiveContainer width="100%" height={200}>
                    <AreaChart
                        width={500}
                        height={200}
                        data={data}
                        syncId="anyId"
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3"/>
                        <XAxis dataKey="name"/>
                        <YAxis/>
                        <Tooltip/>
                        <Area type="monotone" dataKey="pv" stroke="#82ca9d" fill="#82ca9d"/>
                    </AreaChart>
                </ResponsiveContainer>
                <h1 className="text-center">SITE Views</h1>
            </div>

        </div>

    );
};

export default DashIndex;
