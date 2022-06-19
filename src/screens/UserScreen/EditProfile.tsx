import React from 'react';
import {Field, Form, Formik} from "formik";
import {Profile} from "../../interfaces/profile";

const EditProfile: React.FC = () => {
    const initValues: Profile = {
        fullName: "",
        smallDisc: "",
        disc: "",
        photo: "",
        backdropPhoto: "",
        jobs: [{photo: "", details: "", title: ""}],
        clients: [""],
        facts: {coffee: 0, happy: 0, hours: 0, projects: 0},
        skills: [{title: "", progress: 0}],
        ways: [{title: "", details: "", photo: ""}],
        map: "",
        contact: {email: "", phone: "", location: ""},
        social: {facebook: "", youtube: "", twitter: ""}
    }
    const updateProfile = (values: any) => {
        console.log(values)
    }
    return (
        <div className="pt-[120px] w-screen min-h-screen bg-base-100">
            <div className="max-w-screen-md p-5 m-auto">
                <Formik initialValues={initValues} onSubmit={updateProfile}>
                    <Form>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <Field name="fullName" type="text" placeholder="Full Name"
                                   className="input input-bordered"/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Brief about you</span>
                            </label>
                            <Field as={"textarea"} name="smallDisc" placeholder="Brief about you"
                                   className="textarea textarea-bordered h-24"/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">About you</span>
                            </label>
                            <Field as={"textarea"} name="disc" placeholder="About you"
                                   className="textarea textarea-bordered h-24"/>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Cover photo</span>
                            </label>
                            <div
                                className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                <div className="space-y-1 text-center">
                                    <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none"
                                         viewBox="0 0 48 48" aria-hidden="true">
                                        <path
                                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    <div className="flex text-sm text-gray-600">
                                        <label htmlFor="file-upload"
                                               className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                            <span>Upload a file</span>
                                            <Field id="file-upload" name="backdropPhoto" type="file"
                                                   as={"file"}
                                                   className="sr-only"
                                            />
                                        </label>
                                        <p className="pl-1">or drag and drop</p>
                                    </div>
                                    <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                </div>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">Save</button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    );
};

export default EditProfile;
