
  import { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css"
const TabsData=[
  {
    id:1,
    text:"مدیریت کاربران",
    route:"/users",

  },
  {
    id:2,
    text:"مدیریت نظرات",
    route:"/comments",

  },{
    id:3,
    text:"اطلاعیه ها",
    route:"",

  },{
    id:4,
    text:"درخواست های ناشر شو",
    route:"",

  },{
    id:5,
    text:"تسویه حساب",
    route:"",

  },{
    id:6,
    text:"گزارش ترافیک",
    route:"",

  },{
    id:7,
    text:"تست تیبل",
    route:"",

  },{
    id:8,
    text:"مدیریت پست ها",
    route:"/posts",

  }
]
  function VerticalTabs(){
    const [data]=useState(TabsData)
      return (
<>


<div className="p-4" dir="rtl">
   
<div className="tab w-64 float-right p-2 rounded-lg flex flex-col px-10 h-screen mb-4 ">
  {data.map(item=>(
<a className="text-white hover:text-yellow text-xl my-3">
<Link 
to={item.route}
>
  {item.text}
</Link>
</a>
  ))}

</div>


</div>
</>
      )
  }

  export default VerticalTabs;