import React from 'react';
import {Link} from "react-router-dom";
import StyledModal from "../../components/StyledModal/StyledModal";


interface Props {

}

const UserEditScreen: React.FC<Props> = () => {
    return (
        <div className="min-h-[100vh] w-[100vw] pt-[120px] bg-base-200">
            <div className="max-w-[1200px] m-auto">
                <div className="w-[100%] justify-items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ">

                    <div className="flex-shrink-0 w-full max-w-sm">
                        <div className="card-body">
                            <h1 className="text-2xl pl-[0.25rem] mb-[30px]">Your Information</h1>
                            <div className="form-control pl-[0.25rem]">
                                <span className="label-text">Email</span>
                                <span className="opacity-[0.7] text-[0.8rem]">entar99ammar@gmail.com</span>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Full Name</span>
                                </label>
                                <input type="text" defaultValue="ᗩᗰᗰᗩᖇ" placeholder="Name"
                                       className="input input-bordered"/>
                            </div>

                        </div>

                    </div>
                    <div>
                        <h1 className="text-2xl pl-[0.25rem] mb-[30px]">Information's</h1>
                        <div className="card w-96 bg-primary text-primary-content mb-[50px]">
                            <div className="card-body">
                                <h2 className="card-title">Amazing news!</h2>
                                <p>You can Save Your Resume As a Profile</p>
                                <div className="card-actions justify-end mt-[10px]">
                                    <Link to="/me">
                                        <button className="btn">Try Now</button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="card w-96 bg-accent text-primary-content">
                            <div className="card-body">
                                <h2 className="card-title">Amazing Resumes Template!</h2>
                                <p>There Is A lot of Amazing Templates Waiting You to try Is ?</p>
                                <div className="card-actions justify-end">
                                    <button className="btn">Go Now</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <hr className="mt-[40px]"/>
                <ul className="flex flex-wrap mt-[50px] justify-center items-center">
                    <li className="mr-[15px]"><label htmlFor="change-password" className="link link-hover">Change
                        Password</label></li>
                    <li className="mr-[15px]"><label htmlFor="change-email" className="link link-hover">Change email
                        address</label></li>
                    <li className="mr-[15px]"><label htmlFor="delete-account" className="link link-hover">Delete
                        account</label></li>
                </ul>
            </div>
            <StyledModal id="change-password">
                <div className="card flex-shrink-0 w-full">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Current password</span>
                            </label>
                            <input type="password" placeholder="Current password" className="input input-bordered"/>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">New password</span>
                            </label>
                            <input type="password" placeholder="New password" className="input input-bordered"/>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Save Changes</button>
                        </div>
                    </div>
                </div>
            </StyledModal>
            <StyledModal id="change-email">
                <div className="card flex-shrink-0 w-full">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Old Email</span>
                            </label>
                            <input disabled type="email" value="email@gmail.com" placeholder="Old Email"
                                   className="input input-bordered"/>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">New Email</span>
                            </label>
                            <input type="email" placeholder="New Email" className="input input-bordered"/>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Save Changes</button>
                        </div>
                    </div>
                </div>
            </StyledModal>
            <StyledModal id="delete-account">
                <div className="pt-[15px]">
                    <h3 className="font-bold text-lg">After Deleting You Can Not Get This Account Back !</h3>
                    <div className="modal-action">
                        <label htmlFor="my-modal-6" className="btn btn-error">Delete!</label>
                    </div>
                </div>
            </StyledModal>

        </div>
    );
};

export default UserEditScreen;
