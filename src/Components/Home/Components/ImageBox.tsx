

interface Info{
    id:number;
    title:string;
    text:string;
    image:string;
}
function ImageBox(props:Info){
    return (
        <>
        <div className="lg:w-[620px] w-full rounded lg:mt-16 mt-28 h-[550px] text-white relative ">
        <img src={props.image} alt={props.title} className="rounded-md w-full h-[500px]"/>
    {(props.id==1 || props.id==2 || props.id==3 || props.id==4 || props.id==9 || props.id==10 )?
          <div className="text-white py-6 absolute top-80 px-2">
          <p className=" ">{props.title}</p>
            <p className="font-bold text-3xl">{props.text}</p>
          </div>
        :<></>
    }

{(props.id==5 || props.id==6 || props.id==7 || props.id==8 || props.id==11 || props.id==12 )?
          <div className="text-black py-6 ">
          <p className="">{props.title}</p>
            <p className="font-bold text-3xl">{props.text}</p>
          </div>
        :<></>
    }
        </div>
        </>
    )
}
export default ImageBox;