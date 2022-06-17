import React from 'react';
import {Template} from "./ResumeBuilder.service";
import Editor from "../../../components/Editor/Editor";

const ResumeBuilder: React.FC = () => {
    const {data, loading, err} = Template()
    return (
        <div>
            <Editor data={data} loading={loading} err={err}/>
        </div>
    );
};

export default ResumeBuilder;
