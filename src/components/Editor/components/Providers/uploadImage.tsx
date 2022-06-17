    const fileTypes = [
        "image/apng",
        "image/bmp",
        "image/gif",
        "image/jpeg",
        "image/pjpeg",
        "image/png",
        "image/svg+xml",
        "image/tiff",
        "image/webp",
        "image/x-icon"
    ];
    const uploadImage = (e:any ,setImage:Function):void=>{
        const target = e.target.files
        if(target !== null && target[0] !== null){
            fileTypes.forEach(type =>{
                if(target[0].type === type){
                    const image = URL.createObjectURL(target[0]);
                    console.log(image)
                    setImage(image)
                }
            })
        }
    }
    export default uploadImage;
