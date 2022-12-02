
interface info {
   link:string;
    text : string;
  
    
  }
function PrivacyList (props: info){
    return (
        <>
<div className="mt-6">
    <a className="block underline">{props.link}</a>
    <ul className="list-disc pl-2">
        <li>{props.text}</li>
    </ul>
</div>

        </>
    )
}
export default PrivacyList;