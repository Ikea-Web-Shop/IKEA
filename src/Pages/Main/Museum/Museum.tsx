
import { Link } from "react-router-dom"
import  images from "../../../Importer/Importer"
function Museum(){
    return (
        <>
      <header className="w-screen p-3 bg-white shadow  flex justify-between">
      <div className="">
 <Link to="/">   <img src={images['Navbar/logo.png']} alt="IKEA logo" width="60" height="8"  className="w-24 -mt-1"/></Link>
  <p className="font-normal   text-xl">Museum</p>
           
            </div>
            <div className="flex pr-3">
           <p>EN</p>
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
</svg>
            </div>
</header>

<div className="flex pb-4 lg:flex-row md:flex-row flex-col">
    <div>
      <img src={images['Museum/1.jpg']} alt="Museum"   className=""/>
 
 </div>
 <div>
      <img src={images['Museum/2.jpg']} alt="Museum"   className=""/>
 
 </div>
            </div>


            <div className="bg-black pt-16 pb-4 px-10">
            <a className="text-gray-dark "><Link to="/">Home</Link></a>
            <p className="font-bold mt-12  text-3xl text-white">Looking for something?</p>
            <p className="font-bold mt-12   text-white">IKEA Museum Älmhult</p>
            <div className="flex justify-between w-2/6 mt-4">
            <a className="font-bold   hover:underline text-white">Visit</a>
            <a className="font-bold   hover:underline text-white">The museum</a>
            </div>
            <div className="flex justify-between w-2/6 mt-4 mb-4 lg:flex-row md:flex-row flex-col">
            <a className="font-bold   hover:underline text-white">What’s on</a>
            <a className="font-bold  hover:underline  text-white">Press room</a>
            </div>
            <a className="font-bold  hover:underline  text-white">Exhibitions</a>


            <div className="flex justify-between  mt-4 mb-4 text-gray-dark">
            <p className="  text-2xl lg:text-xl text-white  ">Museum</p>
           <div className="flex justify-between">
           <div>
           <svg
  className="w-6 h-6 text-2xl lg:text-xl fill-current"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24">
  <path
    d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
  />
</svg>
           </div>
           <div className="pl-8">
           <svg
  className="w-6 h-6 text-2xl lg:text-xl fill-current"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 496 512">
  <path
    d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"
  ></path>
</svg>
           </div>

           </div>
            </div>


            <div className="flex justify-between  mt-4 mb-4 text-gray-dark lg:flex-row flex-col">
            <p className="    ">© Inter IKEA Systems B.V. 2022</p>
           <div className="flex justify-between">
            <a className="text-gray-dark pr-16"><Link to="/">Terms of Use</Link></a>
            <a className="text-gray-dark "><Link to="/contact">Contact</Link></a>

           </div>
            </div>



            </div>

        </>
    )
}

export default Museum;