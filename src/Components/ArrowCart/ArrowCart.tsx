


interface info {
  
    title : string;
    src: string;
    
   
 
   }

export const ArrowCart=(props:info)=>{
    return (
        <>
      
	
					<div className='w-full     '>
						<img
							src={props.src}
							alt='Arrowcart'
							className='w-full'
						/>
						<div className='py-12 pb-6 px-6 bg-gray '>
							<h2 className='text-2xl	font-bold mt-6 mb-1 hover:underline'>{props.title}</h2>
						
							<button className=' w-10 h-10  flex items-center justify-center '>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
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