

interface info {
    title : string;
  
    text : string;
    src: string;
    
   
 
   }

export const ScreenCart=(props:info)=>{
    return (
        <>
      
<p className="font-bold my-8  text-3xl">{props.title}</p>
	
					<div className='flex    lg:flex-row md:flex-row flex-col  '>
						<img
							src={props.src}
							alt='ScreenCart'
							className='lg:w-2/3 md:w-2/3'
						/>
						<div className='p-6 bg-gray lg:w-1/3 md:w-1/3'>
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