import HowItWorks from "./Buttons/HowItWorks";
import Msgs from "./Buttons/Msgs";
import Profile from "./Buttons/Profile";
import SearchBar from "./SearchBar";

export default function Navbar({
    title,
}){
    return (
        <div className="flex justify-between sm:px-8 p-2 px-4 sm:gap-4 gap-2 sticky top-0 items-center border-b-2 border-solid">

            <div className="flex justify-items-start sm:gap-4">
                <div className="font-bold text-2xl">{title}</div>
                <HowItWorks/>
            </div>

            <div className="border-2 p-2 rounded-md bg-slate-200 flex gap-2 md:w-96 items-center overflow-auto">
                <SearchBar/>
            </div>

            <div className="flex justify-end gap-2">
                <Profile/>
                <Msgs/>
            </div>
            
            
        </div>
    )
}