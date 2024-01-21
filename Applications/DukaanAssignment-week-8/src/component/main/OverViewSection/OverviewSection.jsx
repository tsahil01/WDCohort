import Card from "./Card/OverviewCard";
import HeadingBar from "./Headingbar";

export default function OverViewSection({data}){

    return<>
    <div>
        <HeadingBar/>
        <div className="flex justify-between flex-wrap gap-4 py-4 ">
        {data.map((ele)=>{
           return <Card title = {ele.title} amount={ele.amount} orders={ele.orders}/>
        })}
        </div>
    </div>
    </>
}