


interface info {
    subject:string;
    data:string;
  
    title : string;
    src: string;
    
   
 
   }

export const DataCart=(props:info)=>{
    return (
        <>
      
	
					<div className='w-full    '>
						<img
							src={props.src}
							alt='Datacart'
							className='w-full'
						/>
						<div className='p-6 bg-gray h-full'>
                            <div className="flex">
                                <p>{props.subject}</p>
                                <p>{props.data}</p>
                            </div>
							<h2 className='text-2xl	font-bold mb-6'>{props.title}</h2>
						
							<button className='bg-black w-10 h-10 rounded-full flex items-center justify-center mt-12'>
								<svg className='fill-white w-6 h-6' viewBox='0 0 24 24'>
									<path d='M19.2937 12.7074L20.0008 12.0003L19.2938 11.2932L12.0008 3.99927L10.5865 5.41339L16.1727 11.0003H4V13.0003H16.1723L10.5855 18.5868L11.9996 20.0011L19.2937 12.7074Z'></path>
								</svg>
							</button>
						</div>
					</div>
					<div className='w-full sm:w-1/2 sm:pl-8 xl:pl-20 mt-6 sm:mt-0 '>
						<img
							className='w-full'
							src='https://gbl-sc9u2-prd-cdn.azureedge.net/-/media/aboutikea/images/life-at-home/five-democratic-design-principles-ai05-04-px104231-ikea-l.jpg?rev=e178460d10c54b7d8fc61384f0e083e2'
							alt=''
						/>
					
					</div>
			
		
        </>
    )
}