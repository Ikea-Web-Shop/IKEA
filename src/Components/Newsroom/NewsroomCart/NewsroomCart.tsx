

interface info {
	subject:string;
    data:string;
  text:string
    title : string;
    src: string;
   
 
   }

export const NewsroomCart=(props:info)=>{
    return (
        <>
      
<p className="font-bold my-8  text-4xl ">{props.title}</p>
	
					<div className='flex     flex-col  '>
						<img
							src={props.src}
							alt='NewsroomCart'
							className='w-full '
						/>
						<div className='p-6 bg-gray w-full'>
						<div className="flex my-4">
                                <p className="text-[14px]">{props.subject}</p>
                                <p className="pl-4 text-[14px]">{props.data}</p>
                            </div>
							<a className='text-2xl	font-bold mb-6 hover:underline'>{props.text}</a>
						
							<button className='bg-black w-14 h-14 rounded-full flex items-center justify-center mt-48'>
								<svg className='fill-white w-6 h-6' viewBox='0 0 24 24'>
									<path d='M19.2937 12.7074L20.0008 12.0003L19.2938 11.2932L12.0008 3.99927L10.5865 5.41339L16.1727 11.0003H4V13.0003H16.1723L10.5855 18.5868L11.9996 20.0011L19.2937 12.7074Z'></path>
								</svg>
							</button>
						</div>
					</div>
				 
		
        </>
    )
}