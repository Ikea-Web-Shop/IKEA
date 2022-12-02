
import { useState } from "react"
import {MediaContactsData} from "../data"
function MediaContacts (){
    const [Box]=useState(MediaContactsData)
    return (
        <>
         <div className='mb-12 bg-gray  py-12 lg:px-10 px-3'>
		<h1 className='text-3xl xl:text-4xl	font-bold mb-12'>Media contacts</h1>
        <div className="grid  lg:grid-cols-3 grid-cols-1 gap-5 lg:grid-rows-1 grid-rows-3  my-10 ">
            
            {Box.map((item) => (
            <div>
                <h1 className="font-bold text-xl my2">{item.title}</h1>
                <p className="my-4">{item.text}</p>
                <p className="my-4">{item.email}</p>
                <p>{item.number}</p>


            
            </div>
	 ))}
            
     </div>
     </div>


        </>
    )
}


export default MediaContacts