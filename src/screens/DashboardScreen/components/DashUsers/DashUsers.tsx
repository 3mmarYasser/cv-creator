import React from 'react';

interface Props {

}

interface ListProps {
    data: { userName: string, image: string }
}

const UserList: React.FC<ListProps> = ({data}) => {
    return (
        <article className="flex items-start space-x-6 p-6 bg-base-200 rounded-box mb-[20px] border-none">
            <img src={data.image} alt="" width="60" height="88"
                 className="flex-none rounded-md bg-slate-100"/>
            <div className="min-w-0 relative flex-auto">
                <h2 className="font-semibold text-slate-900 truncate pr-20">{data.userName}</h2>
                <div className="absolute top-0 right-0 flex items-center space-x-1">
                    <dt className="text-primary">
                        <button>
                            <i className="material-icons">edit</i>
                        </button>
                    </dt>
                </div>
            </div>

        </article>
    )
}

const DashUsers: React.FC<Props> = () => {
    const Users = [
        {userName: "User1", image: "https://api.lorem.space/image/face?hash=33791"},
        {userName: "User2", image: "https://api.lorem.space/image/face?hash=33791"},
        {userName: "User3", image: "https://api.lorem.space/image/face?hash=33791"}

    ]
    return (
        <div className="mt-[50px] w-[100vw]">
            <h1 className="text-2xl text-center mb-[20px]">List OF Users</h1>
            <ul className="divide-y m-auto max-w-[1000px] divide-slate-100">
                {Users.map((data, index) => (
                    <UserList key={index} data={data}/>
                ))}
            </ul>
        </div>
    );
};

export default DashUsers;
