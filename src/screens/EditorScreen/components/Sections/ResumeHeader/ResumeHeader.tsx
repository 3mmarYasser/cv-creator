// import React, {useState , useRef} from 'react';
// import classNames from "classnames"
// import StyledMenu from "../../../../../components/StyledMenu/StyledMenu";
// import IconButton from '@mui/material/IconButton';
// import MenuItem from '@mui/material/MenuItem';
// import Divider from '@mui/material/Divider';
// import PhoneIcon from '@mui/icons-material/Phone';
// import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
// import AttachFileIcon from '@mui/icons-material/AttachFile';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import CloudUploadIcon from '@mui/icons-material/CloudUpload';
// import SettingsIcon from '@mui/icons-material/Settings';
// import StyledSwitch from "../../../../../components/StyledSwitch/StyledSwitch";
// import UserImage from "../../../../../assets/svgs/user.svg";
// import Styles from './ResumeHeader.module.scss';
//
// interface Props{
//
// }
//
// interface Styling{
//     title:boolean
//     phone:boolean
//     link:boolean
//     email:boolean
//     location:boolean
//     uppercase:boolean
//     photo:boolean
//     curve:boolean
// }
// const ResumeHeader :React.FC<Props> = () => {
//     const ResumeHeaderRef = useRef<HTMLDivElement | null>(null);
//     const [bar , setBar] = useState<boolean>(false);
//     const [styling ,SetStyling ] = useState<Styling>({
//         title:true,
//         phone:true,
//         link:true,
//         email:true,
//         location:true,
//         uppercase:true,
//         photo:true,
//         curve:true
//     })
//     const [image , setImage] = useState(UserImage);
//     const fileTypes = [
//         "image/apng",
//         "image/bmp",
//         "image/gif",
//         "image/jpeg",
//         "image/pjpeg",
//         "image/png",
//         "image/svg+xml",
//         "image/tiff",
//         "image/webp",
//         "image/x-icon"
//     ];
//     const upload = (e:React.ChangeEvent<HTMLInputElement>):void=>{
//         const target = e.target.files
//         if(target !== null && target[0] !== null){
//             fileTypes.forEach(type =>{
//                 if(target[0].type === type){
//                     const image = URL.createObjectURL(target[0]);
//                     console.log(image)
//                     setImage(image)
//                 }
//             })
//         }
//     }
//
//     const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
//     const open = Boolean(anchorEl);
//     const handleClick = (event: React.MouseEvent<HTMLElement>) => {
//         setAnchorEl(event.currentTarget);
//     };
//     const handleClose = () => {
//         setAnchorEl(null);
//     };
//     return (
//         <div onMouseEnter={()=>setBar(true)} onMouseLeave={()=>setBar(false)} ref={ResumeHeaderRef} className={classNames("w-[100%] p-[8px] rounded-[8px] relative flex justify-between",[Styles.resume_header])} data-editable={true}>
//               <div className="-calc-w-150">
//                   <p className={classNames("editing_Text mb-[5px]  text-5xl font-bold",{"uppercase": styling.uppercase})} placeholder="Your Name" suppressContentEditableWarning={true} contentEditable="true" ></p>
//                   {styling.title ? <p className="editing_Text text-2xl mb-[5px] premium_color"  placeholder="Your next desired role?" suppressContentEditableWarning={true} contentEditable="true" ></p>:null}
//                   <div className="flex flex-wrap w-[80%]">
//                       {styling.phone ? <div className="flex w-[50%] items-center"><PhoneIcon className="premium_color mr-[5px] text-[5px] small-icon "/><div placeholder="Phone" className="editing_Text max-w-[90%] overflow-hidden" suppressContentEditableWarning={true} contentEditable="true"></div></div>:null}
//                       {styling.email ? <div className="flex w-[50%] items-center"><AlternateEmailIcon className="premium_color mr-[5px] small-icon"/><div placeholder="Email"  className="editing_Text max-w-[110%]" suppressContentEditableWarning={true} contentEditable="true"></div></div>:null}
//                       {styling.link ? <div className="flex w-[50%] items-center"><AttachFileIcon className="premium_color mr-[5px] small-icon "/><div placeholder="website/link"  className="editing_Text max-w-[90%]" suppressContentEditableWarning={true} contentEditable="true"></div></div>:null}
//                       {styling.location ?  <div className="flex w-[50%] items-center"><LocationOnIcon className="premium_color mr-[5px] small-icon"/><div placeholder="location" className="editing_Text max-w-[110%]" suppressContentEditableWarning={true} contentEditable="true"></div></div>:null}
//                   </div>
//               </div>
//             {styling.photo ? <div className={classNames("w-[150px] h-[150px] bg-cover rounded-[7px] relative ",[Styles.Image],{[Styles.curveImage]:styling.curve})} style={{backgroundImage:`url(${image})`}}>
//                 <div className="flex justify-center items-center w-[100%] h-[100%] absolute ">
//                     <label className="cursor-pointer main_bg p-[10px] rounded-3xl" htmlFor="ResumeImage"><CloudUploadIcon className="text-amber-50"/></label>
//                     <input id="ResumeImage" className="cursor-pointer w-[50px] h-[50px]" type={"file"} accept="image/*"    multiple={false} onChange={upload} name="ResumeProfileImage" />
//                 </div>
//             </div> : null}
//             {bar ? <div className={classNames("absolute flex justify-center items-center top-[-40px] left-[50%] p-[10px] h-[40px] bg_color rounded-[20px]",[Styles.selectionNav])}>
//
//                 <IconButton
//                     aria-label="more"
//                     id="long-button"
//                     aria-controls={open ? 'long-menu' : undefined}
//                     aria-expanded={open ? 'true' : undefined}
//                     aria-haspopup="true"
//                     onClick={handleClick}>
//                     <SettingsIcon />
//                 </IconButton>
//                 <StyledMenu
//                     MenuListProps={{
//                         'aria-labelledby': 'demo-customized-button',
//                     }}
//                     anchorEl={anchorEl}
//                     open={open}
//                     onClose={handleClose}
//                 >
//                     <MenuItem disableRipple>
//                        <div className="mr-auto">Show Title</div>
//                         <StyledSwitch onChange={(e:React.ChangeEvent<HTMLInputElement>):void => {
//                             SetStyling({...styling ,  title: e.target.checked})
//                         }} name="title" checked={styling.title}/>
//                     </MenuItem>
//
//                     <MenuItem disableRipple>
//                         <div className="mr-auto">Show Phone</div>
//                         <StyledSwitch onChange={(e:React.ChangeEvent<HTMLInputElement>):void => {
//                             SetStyling({...styling ,  phone: e.target.checked})
//                         }} name="phone" checked={styling.phone}/>
//                     </MenuItem>
//
//                     <MenuItem disableRipple>
//                         <div className="mr-auto">Show Link</div>
//                         <StyledSwitch onChange={(e:React.ChangeEvent<HTMLInputElement>):void => {
//                             SetStyling({...styling ,  link: e.target.checked})
//                         }} name="link" checked={styling.link}/>
//                     </MenuItem>
//
//                     <MenuItem disableRipple>
//                         <div className="mr-auto">Show Email</div>
//                         <StyledSwitch onChange={(e:React.ChangeEvent<HTMLInputElement>):void => {
//                             SetStyling({...styling ,  email: e.target.checked})
//                         }} name="email" checked={styling.email}/>
//                     </MenuItem>
//
//                     <MenuItem disableRipple>
//                         <div className="mr-auto">Show Location</div>
//                         <StyledSwitch onChange={(e:React.ChangeEvent<HTMLInputElement>):void => {
//                             SetStyling({...styling ,  location: e.target.checked})
//                         }} name="location" checked={styling.location}/>
//                     </MenuItem>
//
//                     <MenuItem disableRipple>
//                         <div className="mr-auto">Show Photo</div>
//                         <StyledSwitch onChange={(e:React.ChangeEvent<HTMLInputElement>):void => {
//                             SetStyling({...styling ,  photo: e.target.checked})
//                         }} name="photo" checked={styling.photo}/>
//                     </MenuItem>
//
//                     <Divider sx={{ my: 0.5 }} />
//
//                     <MenuItem  disableRipple>
//                         <div className="mr-auto">UpperCase Name</div>
//                         <StyledSwitch onChange={(e:React.ChangeEvent<HTMLInputElement>):void => {
//                             SetStyling({...styling ,  uppercase: e.target.checked})
//                         }} name="uppercase" checked={styling.uppercase}/>
//                     </MenuItem>
//
//                     <MenuItem disableRipple>
//                         <div className="mr-auto">Curve Photo</div>
//                         <StyledSwitch onChange={(e:React.ChangeEvent<HTMLInputElement>):void => {
//                             SetStyling({...styling ,  curve : e.target.checked})
//                         }} name="curve" checked={styling.curve}/>
//                     </MenuItem>
//
//                 </StyledMenu>
//
//             </div>:null}
//         </div>
//     );
// };
//
// export default ResumeHeader ;
 export {}