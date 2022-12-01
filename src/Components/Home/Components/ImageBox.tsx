

interface Info{
    title:string;
    text:string;
    image:string;
}
function ImageBox(props:Info){
    return (
        <>
        <div className="w-[620px] rounded mt-6 h-[500px]">
        <img src={props.image} alt={props.title} className="rounded-md w-full h-full"/>
        <p>{props.title}</p>
        <p>{props.text}</p>
        </div>
        </>
    )
}
export default ImageBox;