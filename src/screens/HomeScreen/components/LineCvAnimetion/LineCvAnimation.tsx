import img1 from "./../../../../assets/images/img.png"

let images: string[] = [img1]
if (images.length < 3) {
    images.push(img1)
    images.push(img1)
    images.push(img1)
    images.push(img1)
    images.push(img1)
    images.push(img1)
    images.push(img1)
    images.push(img1)
    images.push(img1)
    images.push(img1)
}

const LineCvAnimation = () => {
    return (
        <div className="line-cv-animation space-y-4 mx-2">
            {
                images.map((image, index) => {
                    return (
                        <div key={index}
                             className="line-cv-animation__image relative bottom-0 drop-shadow-lg bg-primary">
                            <img draggable={false} onContextMenu={e => e.preventDefault()} src={image}
                                 className="dark:opacity-75  dark:invert-[.9]" alt="line-cv-animation__image_src "
                                 style={{boxShadow: "-12px 6px #00000021"}}/>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default LineCvAnimation;
