import React from 'react';

const ProfileAds: React.FC = () => {
    return (
        <>
            <h1 className="text-2xl md:text-3xl">Profile Adds</h1>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">AD ID "1"</span>
                    <span className="label-text-alt">Customize ADD "1"</span>
                </label>
                <textarea className="textarea textarea-bordered h-24 textarea-ghost"
                          placeholder="HTML AD CODE"></textarea>
            </div>
        </>
    );
};

export default ProfileAds;
