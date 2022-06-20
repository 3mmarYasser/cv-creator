import React from 'react';
import {
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    AreaChart, ResponsiveContainer, ComposedChart, Area, Legend, BarChart, Bar
} from 'recharts';
import StyledSwitch from "../../../../components/StyledSwitch/StyledSwitch";

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
const data3 = [
    {
        name: 'January',
        Visitor: 40000,
        User: 2400,
    },
    {
        name: 'February',
        Visitor: 30000,
        User: 1398,
    },
    {
        name: 'March',
        Visitor: 20000,
        User: 9800,
    },
    {
        name: 'April',
        Visitor: 27080,
        User: 3908,
    },
    {
        name: 'May',
        Visitor: 10890,
        User: 4800,
    },
    {
        name: 'June',
        Visitor: 20390,
        User: 3800,
    },
    {
        name: 'July',
        Visitor: 30490,
        User: 4300,
    },
];

interface Props {

}

const DashIndex: React.FC<Props> = () => {

    return (
        <div className="w-[100vw] min-h-[100vh]">
            <div
                className="w-[100vw]   flex flex-col justify-between md:flex-row">
                <div className="w-[100vw] p-[10px] lg:w-[70%]">
                    <div className="stats mb-[40px] m-auto stats-vertical lg:stats-horizontal shadow  w-[100%]">

                        <div className="stat">
                            <div className="stat-figure text-secondary">
                                <i className="material-icons text-[2rem]">visibility</i>
                            </div>
                            <div className="stat-title">View</div>
                            <div className="stat-value">31K</div>
                            <div className="stat-desc">Jan 1st - Feb 1st</div>
                        </div>

                        <div className="stat">
                            <div className="stat-figure text-secondary">
                                <i className="material-icons text-[2rem]">group_add</i>
                            </div>
                            <div className="stat-title">New Users</div>
                            <div className="stat-value">4,200</div>
                            <div className="stat-desc">↗︎ 400 (22%)</div>
                        </div>

                        <div className="stat">
                            <div className="stat-figure text-secondary">
                                <i className="material-icons text-[2rem]">create_new_folder</i>
                            </div>
                            <div className="stat-title">Resume Created</div>
                            <div className="stat-value">1,200</div>
                            <div className="stat-desc">↘︎ 90 (14%)</div>
                        </div>

                        <div className="stat">
                            <div className="stat-figure text-secondary">
                                <i className="material-icons text-[2rem]">add_card</i>
                            </div>
                            <div className="stat-title">Cover Letter Created</div>
                            <div className="stat-value">1,800</div>
                            <div className="stat-desc">↗︎ 90 (+14%)</div>
                        </div>

                    </div>
                    <div className="flex flex-col w-full border-opacity-50">
                        <div className="grid max-w-[100%] card bg-base-300 rounded-box place-items-center">
                            <ResponsiveContainer width="100%" height={400}>
                                <BarChart
                                    data={data3}
                                    margin={{
                                        top: 5,
                                        right: 30,
                                        left: 20,
                                        bottom: 5,
                                    }}
                                >
                                    <CartesianGrid strokeDasharray="3 3"/>
                                    <XAxis dataKey="name"/>
                                    <YAxis/>
                                    <Tooltip/>
                                    <Legend/>
                                    <Bar dataKey="User" fill="#8884d8"/>
                                    <Bar dataKey="Visitor" fill="#82ca9d"/>
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="divider"><i className="material-icons text-[2rem]">settings</i></div>
                        <div className="grid card bg-base-300 rounded-box place-items-center">

                            <div className="card w-[100%] flex flex-col md:flex-row bg-neutral text-neutral-content">
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">Languages!</h2>
                                    <p>Set The Default Language Know.</p>
                                    <div className="card-actions justify-end text-primary">
                                        <select onChange={(e) => console.log(e)} defaultValue={"EN"}
                                                className="select select-bordered w-full max-w-xs">
                                            <option>EN</option>
                                            <option>AR</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="card-body  items-center text-center">
                                    <h2 className="card-title">Danger Zone!</h2>
                                    <p>Be Sure After Editing Here.</p>
                                    <div className="card-actions justify-end ">
                                        <StyledSwitch check={false} toggle={(e: any) => {
                                            e.target.checked = !e.target.checked
                                        }}>
                                            <p className="pr-[10px] text-base-100">Under Attack Mode </p>
                                        </StyledSwitch>
                                        <StyledSwitch check={true} toggle={() => {
                                        }}>
                                            <p className="pr-[10px] text-base-100">Under maintenance </p>
                                        </StyledSwitch>
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
