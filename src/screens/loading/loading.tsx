import React from 'react';


const Page404: React.FC = () => {
    return (
        <div className="w-screen h-screen flex justify-center items-center text-6xl bg-base-300 flex-col">
            <div className="animate-spin h-8 w-8">
                .
            </div>


            <p className="pt-10 uppercase text-lg">please wait</p>
            <p className=" uppercase text-error text-xl animate-pulse">....... Failed Build .......</p>


        </div>
    );
};

export default Page404;
