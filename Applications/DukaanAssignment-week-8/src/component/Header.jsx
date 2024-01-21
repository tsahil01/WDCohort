import Navbar from "./Nav/Navbar";

export default function Header({title}){
    return<>
    <header>
        <Navbar title = {title} />
    </header>
    </>
}