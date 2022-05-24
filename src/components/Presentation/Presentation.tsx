import React, {useEffect, useRef} from 'react';
import {gsap} from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";

import classNames from "classnames";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Styles from './Presentation.module.scss';

const Presentation :React.FC = () => {

    const allRef = useRef<any |null>(null),
     newRef = useRef<SVGSVGElement |null>(null),
     selection1Ref  = useRef<SVGPathElement |null>(null),
     selection2Ref  = useRef<SVGPathElement |null>(null),
     selection3Ref  = useRef<SVGLineElement |null>(null),
     selection4Ref  = useRef<SVGLineElement |null>(null),
     selectionE1Ref = useRef<SVGEllipseElement |null>(null),
     selectionE2Ref = useRef<SVGEllipseElement |null>(null),
     selectionE3Ref = useRef<SVGEllipseElement |null>(null),
     selectionE4Ref = useRef<SVGEllipseElement |null>(null),
     contentRef     = useRef<HTMLDivElement |null>(null),
     ImageRef     = useRef<HTMLDivElement |null>(null),
    stkRef = useRef<SVGPathElement |null>(null);

    useEffect(():void=>{
        gsap.registerPlugin(ScrollTrigger);
        const tm =  gsap.timeline();
        tm
            .from("header",{opacity:0,translateY:-60})
            .from(contentRef.current , {opacity : 0 , translateX:-60})
            .from(ImageRef.current , {opacity : 0 , translateX:60});


        const parallax = gsap.timeline();
        parallax
            .from(newRef.current ,{ opacity:0 ,translateY:-40 ,translateX:0 ,rotate:0},"<")
            .fromTo(selection1Ref.current ,{cssText:"stroke-dashoffset: 1;"},{cssText:"stroke-dashoffset: 0;"},"<")
            .fromTo(selection2Ref.current ,{cssText:"stroke-dashoffset: 1;"},{cssText:"stroke-dashoffset: 0;"},"<")
            .fromTo(selection3Ref.current ,{cssText:"stroke-dashoffset: 1;"},{cssText:"stroke-dashoffset: 0;"},"<")
            .fromTo(selection4Ref.current ,{cssText:"stroke-dashoffset: 1;"},{cssText:"stroke-dashoffset: 0;"},"<")
            .from(selectionE1Ref.current ,{ opacity:0},"<")
            .from(selectionE2Ref.current ,{ opacity:0},"<")
            .from(selectionE3Ref.current ,{ opacity:0},"<")
            .from(selectionE4Ref.current ,{ opacity:0},"<")
            .fromTo(stkRef.current ,{cssText:"stroke-dashoffset: 1;"},{cssText:"stroke-dashoffset: 0;"},"<")




        ScrollTrigger.create({
            animation:parallax,
            trigger:allRef.current,
            start:"top 0%",
            end:"bottom 0%",
            scrub :2,
            pin:true,
            pinType:"fixed"

        })
    },[])

    return (
        <div ref={allRef} className={classNames("pt-[100px] top-0 left-0 pb-[35px] content_color flex justify-center",[Styles.Presentation])}>

            <div ref={contentRef} className={classNames("w-[50%] ml-[15px] flex   flex-col justify-center items-start ",[Styles.content])}>
                <div className="mb-[5px]">
                    <svg ref={newRef} className="w-[60px]  h-[60px] translate-x-[100%] -rotate-45"  xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" data-name="NEW" viewBox="0 0 512 512">
                        <defs>
                            <linearGradient id="a" x1="256" x2="256" y1="12" y2="492.337" gradientUnits="userSpaceOnUse">
                                <stop offset="0.3" className="stop-c-main"/>
                                <stop offset="0.5" className="stop-c-premium"/>
                                <stop offset="1" className="stop-c-main"/>
                            </linearGradient><linearGradient id="b" x1="167" x2="167" y1="12" y2="492.337" xlinkHref="#a"/>
                            <linearGradient id="c" x1="239.5" x2="239.5" y1="12" y2="492.337" xlinkHref="#a"/>
                            <linearGradient id="d" x1="323.718" x2="323.718" y1="12" y2="492.337" xlinkHref="#a"/>
                        </defs>
                        <g data-name="&lt;Group&gt;">
                            <path fill="url(#a)" d="M443.453,209.7a12.085,12.085,0,0,1-1.964-7.265l2.045-37.139A28,28,0,0,0,428.2,138.765l-33-16.668a11.917,11.917,0,0,1-5.3-5.3l-16.669-33A27.992,27.992,0,0,0,346.7,68.466l-37.14,2.045a12.113,12.113,0,0,1-7.264-1.964L271.413,48.182a27.967,27.967,0,0,0-30.825,0L209.7,68.547a12.082,12.082,0,0,1-7.265,1.964L165.3,68.466A28.017,28.017,0,0,0,138.766,83.8l-16.669,33a11.917,11.917,0,0,1-5.3,5.3l-33,16.668A28,28,0,0,0,68.466,165.3l2.045,37.137a12.088,12.088,0,0,1-1.963,7.265L48.182,240.587a27.971,27.971,0,0,0,0,30.826L68.547,302.3a12.085,12.085,0,0,1,1.964,7.265L68.466,346.7A28,28,0,0,0,83.8,373.235l33,16.668a11.917,11.917,0,0,1,5.3,5.3l16.669,33a28,28,0,0,0,26.53,15.333l37.14-2.045a12.1,12.1,0,0,1,7.264,1.964l30.887,20.365a27.968,27.968,0,0,0,30.825,0L302.3,443.453a12.087,12.087,0,0,1,7.265-1.964l37.139,2.045a27.987,27.987,0,0,0,26.53-15.333l16.669-33a11.917,11.917,0,0,1,5.3-5.3l33-16.668A28,28,0,0,0,443.534,346.7l-2.045-37.137a12.088,12.088,0,0,1,1.963-7.265l20.366-30.888a27.971,27.971,0,0,0,0-30.826Zm7.008,52.905-20.367,30.889a28.191,28.191,0,0,0-4.581,16.951l2.045,37.138a12,12,0,0,1-6.572,11.371l-33,16.668a27.807,27.807,0,0,0-12.368,12.367l-16.669,33a11.972,11.972,0,0,1-11.37,6.571l-37.139-2.044a28.17,28.17,0,0,0-16.951,4.581L262.6,450.46a11.982,11.982,0,0,1-13.209,0L218.507,430.1a28.206,28.206,0,0,0-15.444-4.623q-.753,0-1.507.042l-37.139,2.044a11.982,11.982,0,0,1-11.37-6.571l-16.669-33a27.807,27.807,0,0,0-12.367-12.368l-33-16.668a12,12,0,0,1-6.572-11.371l2.045-37.139a28.188,28.188,0,0,0-4.582-16.951L61.539,262.606a11.989,11.989,0,0,1,0-13.211l20.367-30.889a28.191,28.191,0,0,0,4.581-16.951l-2.045-37.138a12,12,0,0,1,6.572-11.371l33-16.668a27.807,27.807,0,0,0,12.368-12.367l16.669-33a11.99,11.99,0,0,1,11.37-6.571l37.139,2.044a28.207,28.207,0,0,0,16.951-4.581L249.4,61.54a11.981,11.981,0,0,1,13.208,0h0l30.888,20.365a28.173,28.173,0,0,0,16.951,4.581l37.139-2.044a11.983,11.983,0,0,1,11.37,6.571l16.669,33a27.807,27.807,0,0,0,12.367,12.368l33,16.668a12,12,0,0,1,6.572,11.371l-2.045,37.139a28.188,28.188,0,0,0,4.582,16.951l20.366,30.887A11.989,11.989,0,0,1,450.461,262.605Z" data-name="&lt;Compound Path&gt;"/>
                            <path fill="url(#b)" d="M186,216.106c-4.078,0-9,1.447-9,5.524v34.317l-16.437-31.234c-4.133-7.94-6.491-8.607-12.731-8.607-4.4,0-8.832,1.741-8.832,5.631v67.884c0,3.87,4.743,5.632,9,5.632s9-1.762,9-5.632v-34.4L176.174,290.5c2.273,4.187,6.323,4.751,9.864,4.751,4.256,0,8.962-1.762,8.962-5.632V221.63C195,217.553,190.077,216.106,186,216.106Z" data-name="&lt;Path&gt;"/><path fill="url(#c)" d="M259.475,232c3.253,0,5.524-3.469,5.524-8.107,0-3.814-1.708-7.893-5.524-7.893H221.416c-3.742,0-7.416,1.868-7.416,5.737v67.884c0,3.87,3.674,5.379,7.416,5.379h38.059c3.816,0,5.524-3.579,5.524-7.393,0-4.638-2.271-7.607-5.524-7.607H231V263h15.859c3.8,0,5.525-3.615,5.525-6.893,0-3.489-1.9-7.107-5.525-7.107H231V232Z" data-name="&lt;Path&gt;"/><path fill="url(#d)" d="M361.776,216.106c-3.118,0-5.187,1.229-5.825,3.458L340.238,272.6l-8.013-34.289c-.73-3.281-4.92-4.775-8.506-4.775s-7.778,1.494-8.506,4.77L307.2,272.6l-15.712-53.026c-.637-2.233-2.707-3.463-5.826-3.463-5.117,0-11.3,3.18-11.3,7.128a5.226,5.226,0,0,0,.24,1.544l21.272,65.207c1.37,4.362,7.045,5.909,11.488,5.909,4.941,0,10.346-1.839,11.285-5.952l5.072-23.11,5.071,23.115c.939,4.108,6.345,5.947,11.285,5.947,5.747,0,10.255-2.314,11.484-5.9l21.276-65.217a5.28,5.28,0,0,0,.239-1.547C373.074,219.286,366.894,216.106,361.776,216.106Z" data-name="&lt;Path&gt;"/>
                        </g>
                    </svg>
                    <h1 className="text-6xl mb-[10px] font-bold">Build a CV in
                        <span className="main_color relative inline-block p-[10px] ml-[10px] z-[1]">

                    <svg    className={classNames("absolute",[Styles.selectionPre])} xmlns="http://www.w3.org/2000/svg" viewBox="55.435 126.29 319 138">
                        <g transform="matrix(1, 0, 0, 1, 0.935483, 126.290321)">
                            <title>Selection Presentation</title>
                            <g>
                                <path className="draw-svg"  ref={selection1Ref} transform="rotate(90 62.5 73)"  d="m1,74.5l123,-3" strokeWidth="2" pathLength="1" />
                                <line className="draw-svg"  ref={selection3Ref} strokeWidth="3"  y2="129" x2="367.5" y1="132" x1="63.5" pathLength="1" />
                                <line className="draw-svg"  ref={selection4Ref} strokeWidth="3"  y2="7" x2="365.5" y1="10" x1="61.5"  pathLength="1" />
                                <path className="draw-svg"  ref={selection2Ref} transform="rotate(90 366.5 69)"  d="m305,70.5l123,-3" strokeWidth="2" pathLength="1"/>
                                <ellipse ref={selectionE1Ref}  ry="7" rx="7"  cy="9" cx="61.5" strokeWidth="0" />
                                <ellipse ref={selectionE2Ref} ry="7" rx="7"   cy="131" cx="63.5" strokeWidth="0" />
                                <ellipse ref={selectionE3Ref} ry="7" rx="7"   cy="128" cx="366.5" strokeWidth="0" />
                                <ellipse ref={selectionE4Ref} ry="7" rx="7"   cy="7" cx="364.5" strokeWidth="0" />
                            </g>
                        </g>
                    </svg>

                    less
                </span>
                        <br/>
                        than a minute.</h1>
                    <svg className={classNames("stk_1 w-[250px] h-[50px] self-center mr-auto ml-auto  -translate-x-[50px]" , [Styles.stk])} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" id="eQRSxdgHmcN1" viewBox="0 0 72 20" shapeRendering="geometricPrecision" textRendering="geometricPrecision">
                        <path className="draw-svg"  ref={stkRef} pathLength="1" d="M57.268557,49.824867l65.113688-.30714-65.420828,3.0714l62.656567,1.84284-54.363786,2.764261c18.082611,2.01807,35.447025.729757,45.763865.614279l-35.628244,4.6071l18.735542,2.149981L82.45404,67.638987" transform="matrix(1.089174 0 0 1.007945-62.040894-48.176379)" fill="none"/>
                    </svg>
                </div>
                <p className="text-1xl mb-[40px]">Our CV get people hired at top companies
                    <br/>
                    Like Tesla , Google , Apple , Samsung , Amazon ,Facebook , Spotify , Vodafone , Orange</p>
                <button className="premium_button"><ArrowForwardIcon className="btn_icon"/> Try It</button>
            </div>

            <div ref={ImageRef} className={classNames("w-[50%] flex justify-center items-center overflow-hidden",[Styles.imagesShow])}>

                <img className="h-[50vw] max-h-[100%]" src="https://d18jg6w55vcmy1.cloudfront.net/images/home-img-1.svg" alt="PresentationImage" title="Presentation Image"/>

            </div>
        </div>
    );
};

export default Presentation ;
