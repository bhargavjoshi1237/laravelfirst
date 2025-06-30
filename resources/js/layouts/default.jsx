import DataListView from "@/mycomponents/datalistview";
import Navbar from "@/mycomponents/navbar";

export default function DefaultLayout({ data }) {
  return (
    <div className="bg-[#161616] min-h-screen w-full">
     <Navbar />

<div className=" mt-5 w-[95%] ml-auto mr-auto flex itcems-start justify-start  ">
    <p className="text-3xl text-[#e7e7e7] "> Student Management System </p>
<br />

</div>
<br />
<DataListView data={data} />    
    </div>
  );
}