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
                <button className="btn btn-ghost btn-xs">Edit</button>
            </th>
        </tr>

    )
}

const DashUsers: React.FC<Props> = () => {
    const Users = [
        {userName: "User1", image: "https://api.lorem.space/image/face?hash=33791"},
        {userName: "User2", image: "https://api.lorem.space/image/face?hash=33791"},
        {userName: "User3", image: "https://api.lorem.space/image/face?hash=33791"}

    ]
    return (
        <div className=" pt-[170px] overflow-x-auto w-full">
            <table className="table max-w-[1024px] m-auto table-compact w-full">
                <thead>
                <tr>
                    <th>UserName</th>
                    <th>Edit</th>
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
                    <th>Details</th>
                </tr>
                </tfoot>

            </table>
        </div>
    );
};

export default DashUsers;
