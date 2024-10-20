export default function HeadingBar(){
    return <>
        <div className="flex justify-between content-center">
            <div className=" text-2xl font-semibold my-auto ">Overview</div>
            <div className="bg-slate-100 rounded-lg border-1 my-auto">
                <button className="flex p-2">This Month
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3" />
                </svg>
                </button>
            </div>
        </div>
    </>
}