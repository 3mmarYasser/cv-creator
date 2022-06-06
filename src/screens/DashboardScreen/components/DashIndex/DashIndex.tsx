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
        Views: 4000,
    },
    {
        name: 'Jun',
        Views: 3000,

    },
    {
        name: 'May',
        Views: 2000,

    },
    {
        name: 'Jun',
        Views: 2780,

    },
    {
        name: 'May',
        Views: 1890,

    },
    {
        name: '1Year',
        Views: 2390,

    }
];

const data2 = [
    {
        name: 'May',
        Resume: 590,
    },
    {
        name: 'Jan',
        Resume: 868,
    },
    {
        name: '1Year',
        Resume: 1397,
    }
];

interface Props {

}

const DashIndex: React.FC<Props> = () => {

    return (
        <div className="w-[100vw] min-h-[100vh] pt-[170px]">
            <div
                className="w-[100vw]  m-auto flex flex-col justify-between md:flex-row ">
                <div className="w-[100vw] lg:w-[70%]">
                    <div className="hero bg-base-200">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                                <div className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="text" placeholder="email" className="input input-bordered"/>
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="text" placeholder="password" className="input input-bordered"/>
                                        <label className="label">
                                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                        </label>
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn btn-primary">Login</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="flex flex-col justify-between w-[100vw] lg:w-[30%]">
                    <div className=" p-[10px]">
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
                                <Area type="monotone" dataKey="Views" stroke="#82ca9d" fill="#82ca9d"/>
                            </AreaChart>
                        </ResponsiveContainer>
                        <h1 className="text-center">SITE Views</h1>
                    </div>
                    <div className=" p-[10px] ">
                        <ResponsiveContainer width="100%" height={400}>
                            <ComposedChart
                                data={data2}
                                margin={{
                                    top: 20,
                                    right: 80,
                                    bottom: 20,
                                    left: 20,
                                }}
                            >
                                <CartesianGrid stroke="#f5f5f5"/>
                                <XAxis dataKey="name"
                                       label={{value: 'Date', position: 'insideBottomRight', offset: 0}}
                                       scale="band"/>
                                <YAxis label={{value: 'Resume Created', angle: -90, position: 'insideLeft'}}/>
                                <Tooltip/>
                                <Legend/>
                                <Area type="monotone" dataKey="Resume" fill="#8884d8"
                                      stroke="#8884d8"/>
                            </ComposedChart>
                        </ResponsiveContainer>
                    </div>
                </div>


            </div>
        </div>

    );
};

export default DashIndex;
