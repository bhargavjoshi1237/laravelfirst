import React from "react";
import { Inertia } from "@inertiajs/inertia";
import DataListView from "@/pages/Students/datalistview"; // <-- Add this import
import Navbar from "@/mycomponents/navbar";

const Index = () => {
    const {data} = usePage().props;
  return (
    <div className="bg-[#161616] min-h-screen w-full">
     <Navbar   />
<div className=" mt-5 w-[95%] ml-auto mr-auto flex itcems-start justify-start  ">

 
  <button className="ml-auto mt-1 border border-[#474747] text-[#e7e7e7] rounded-md hover:bg-[#282828] px-2 py-1">
  Add New
  </button>
 </div>
 
<div className=" mt-5 w-[95%] ml-auto mr-auto flex itcems-start justify-start  ">

<DataListView data={data}    />    
</div>
    </div>
  );
}
export default Index;