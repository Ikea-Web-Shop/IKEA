
interface info {
   
    text : string;
  
    
  }
function SimpleText (props: info){
    return (
        <>
<p className="block  mb-5">{props.text}</p>

        </>
    )
}
export default SimpleText;