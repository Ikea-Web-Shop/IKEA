


const Topics=[
    {
    id:1,
    text:"Collections",
},
{
    id:2,
    text:"Fair and equal",
}, {
    id:3,
    text:"Food",
}, {
    id:4,
    text:"Healthy and sustainable living",
}, {
    id:5,
    text:"Materials and sourcing",
},
, {
    id:6,
    text:"Partnerships",
}, {
    id:7,
    text:"Play",
}, {
    id:8,
    text:"Retail",
}, {
    id:9,
    text:"Safety",
}, {
    id:10,
    text:"Social entrepreneurship",
}
]
function NewsroomTopics(){
   
    return (
        <>
        <p className="font-bold mt-12  text-xl">Topics</p>
          <div className="flex flex-wrap">

{Topics.map((label) => (
<a className="bg-gray py-3 px-4 mx-2  h-8 mt-3 hover:opacity-75 rounded-full  font-semibold  flex justify-center items-center w-fit">{label.text}</a>
     
           
                 
            ))}
          </div>
             

        </>
    )
}

export default NewsroomTopics;