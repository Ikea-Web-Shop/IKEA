


const Topics=[
    {
    id:1,
    text:"Circularity",
},
{
    id:2,
    text:"Climate positive",
}, {
    id:3,
    text:"Collaborations",
}, {
    id:4,
    text:"Collection",
}, {
    id:5,
    text:"Community engagement",
},
, {
    id:6,
    text:"Corporate",
}, {
    id:7,
    text:"Democratic design days",
}, {
    id:8,
    text:"Design",
}, {
    id:9,
    text:"Fair and equal",
}, {
    id:10,
    text:"Food",
}
, {
    id:11,
    text:"Healthy and sustainable living",
}, {
    id:12,
    text:"Innovation",
}, {
    id:13,
    text:"Materials and sourcing",
}, {
    id:14,
    text:"Partnerships",
}, {
    id:15,
    text:"Play",
}, {
    id:16,
    text:"Food",
}, {
    id:17,
    text:"Retail",
}, {
    id:18,
    text:"Safety",
}, {
    id:19,
    text:"Social entrepreneurship",
}, {
    id:20,
    text:"Technology",
}
]
function AboutTopics(){
   
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

export default AboutTopics;