
import images from "../../../Importer/Importer";
import { Link } from "react-router-dom"
import "./style.css"
function Login(){
    return (
        <>
<div className="modal">
<div className="px-10 py-8 modal-content animate">

<img src={images['Navbar/logo.png']} alt="IKEA logo" width="150" height="4" loading="lazy" />
<a className=" "><Link to="/">Home</Link></a>
<p className="font-normal mt-12  text-xl">Sign in with your IKEA Network ID</p>
<form className="mb-12">
    <div className="flex flex-col">
        <input type="" id="" className="border mt-5 p-2 w-2/3" placeholder="IKEA Network ID" />
        <input type="password" id="" className="border mt-5 p-2 w-2/3" placeholder="Password" />

    </div>
<button className="bg-blue   h-8 mt-12 hover:opacity-80 text-white px-12 font-semibold py-6 flex justify-center items-center">
  Sign in
  </button>
</form>
<a className="font-normal  text-xl text-blue" href="password">Forgot my password</a>


<p className="font-normal mt-12  text-xl">By signing in your agree to the</p>

<a className="font-normal   text-xl text-blue" href="password">Terms of Use and of Cookies</a>

</div>
</div>
        </>
    )
}

export default Login;