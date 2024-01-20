export const RevenuCard = ({
    title,
    showWarning,
    amount,
    orderCount
})=>{
    return <div className="bg-white rounded shadow-md p-4">
        <div className="text-grey-700">
            {title}
            ?
        </div>
        <div className="flex justify-between">
            <div className="font-bold">
                $ {amount}
            </div>
            {orderCount ? <div className="flex">
                <div>
                    {orderCount} order(s)
                </div>
            </div> : null}
        </div>
    </div>
}