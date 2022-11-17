
import  images from "../../../Importer/Importer"
function Museum(){
    return (
        <>
      <header className="w-screen p-3 bg-white shadow fixed">
    <div className="">
    <img src={images['Navbar/logo.png']} alt="IKEA logo" width="60" height="8"  className="w-24 -mt-1"/>
  <p className="font-normal   text-xl">Museum</p>
           
            </div>
</header>

        </>
    )
}

export default Museum;