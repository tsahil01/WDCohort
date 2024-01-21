import OverViewSection from "./OverViewSection/OverviewSection";

export default function MainSection(){
    const data = [{
        title: "Next Payout",
        amount: "2,312.23",
        orders: 23
    }, {
    title: "Amount Pending",
        amount: "92,312.20",
        orders: 24
    },{
        title: "Amount Processed",
        amount: "3,92,312.19",
        orders:0
        }]
        
    

    return<>
    <main className="p-6 sm:p-10 w-full gap-8 flex flex-col bg-slate-50">
        <OverViewSection 
        data={data}
        />
    </main>
    </>
}