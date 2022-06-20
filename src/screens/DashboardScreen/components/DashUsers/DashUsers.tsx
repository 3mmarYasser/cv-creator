import React from 'react';

interface Props {

}

interface ListProps {
    data: { userName: string, image: string }
}

const UserList: React.FC<ListProps> = ({data}) => {
    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={data.image}
                                 alt="Avatar User Dashboard"/>
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{data.userName}</div>
                        <div className="text-sm opacity-50">User</div>
                    </div>
                </div>
            </td>


            <th>
                <button className="btn btn-ghost btn-xs">Show & Edit</button>
            </th>
        </tr>

    )
}

const DashUsers: React.FC<Props> = () => {
    const Users = [
        {userName: "User", image: "https://api.lorem.space/image/face?hash=3791"},
        {userName: "Unknown", image: "https://api.lorem.space/image/face?hash=3371"},
        {userName: "User3", image: "https://api.lorem.space/image/face?hash=379"}

    ]
    return (
        <div className=" overflow-x-auto w-full">
            <div className="max-w-[1024px] m-auto">
                <div className="form-control">
                    <div className="input-group mb-[20px]">
                        <input type="text" placeholder="Search…"
                               className="input input-bordered input-group-lg  w-[100%]"/>
                        <button className="btn btn-square">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                            </svg>
                        </button>
                    </div>
                </div>

                <table className="table  m-auto table-compact w-full">
                    <thead>
                    <tr>
                        <th>UserName</th>
                        <th>More Data</th>
                    </tr>
                    </thead>
                    <tbody>
                    {Users.map((user, index) => (
                        <UserList key={index} data={user}/>
                    ))}
                    </tbody>
                    <tfoot>
                    <tr className="p-[5px]">
                        <th>Role</th>
                        <th>Edit User</th>
                    </tr>
                    </tfoot>

                </table>

            </div>

        </div>
    );
};

export default DashUsers;
