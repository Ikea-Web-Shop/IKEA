

interface props {
    title: string;
    image: string;
    Imagename: string;
    text : string;
   
    
  }

function IKEAImage(props){
    return(
        <>



<div className="flex items-stretch h-auto mt-0 w-screen flex-col" >
              <div  className="overflow-hidden rounded h-full relative w-screen min-h-200px">
    
        



      
    
        <div  className=" h-full inset-0  w-screen box-border text-white">
      
        <img className="absolute inset-0 w-screen rounded h-full border-none" src={props.image} alt={props.Imagename} width="100%" height="auto" />
  
  </div>

  {/* ----------text */}
    <div  className="justify-end w-screen flex ">
    <div  className="flex relative w-screen items-end z-4 my-0 mx-auto pt-12  pr-6 pb-6 top-20">
      <div  className="shrink grow">
                          < p  className="text-white font-black leading-6 text-sm">
                  {props.title}
                    </ p>
                          < p  className="text-white text-lg font-medium leading-6 mt-2">
          {props.text}
          </ p>
              </div>
{/* ----------text */}
              {/* ----------icon */}
      <div  className="shrink">
        <div  className="ml-5  text-xl font-medium leading-5 mt-2 text-white max-w-2xl">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
</svg>

        </div>
      </div>
 {/* ----------icon */}

    </div>
  </div>


  </div>
  </div>
 
        </>
    )
}
export default IKEAImage