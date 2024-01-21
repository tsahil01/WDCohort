import CardHeading from "./CardHeading";

export default function Card({
    title,
    amount,
    orders
}){
    return (
        <div className="bg-white font-bold flex-grow p-3 rounded-md drop-shadow-xl">
            <CardHeading title={title} />
            <div className="flex justify-between py-4">
                <div className="font-bold text-4xl">₹{amount}</div>
                {orders !== 0 | null | undefined ? (
                    <div className="flex gap-3 underline my-auto">
                        <p>{orders} Orders</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>
                    </div>
                ) : null}
            </div>
        </div>
    );
}
