import React from 'react';
import {ADS} from "../../interfaces/ads";


interface Props {
    data: ADS
}

const Ads: React.FC<Props> = ({data}) => {
    const {width, height} = data;
    return (
        <div className="w-auto h-auto flex justify-center items-center">
            <div className="w-fit h-fit p-1 bg-base-200">
                <div className={`relative overflow-hidden`}
                     style={{maxWidth: `${width}px`, maxHeight: `${height}px`}}>
                    <img draggable={false} onContextMenu={e => e.preventDefault()}
                         src={`https://dummyimage.com/${width}x${height}/fff/aaa`} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Ads;
