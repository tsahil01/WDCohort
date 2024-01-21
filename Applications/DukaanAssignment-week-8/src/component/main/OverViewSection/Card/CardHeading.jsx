import QueBtn from "./Buttons/QuestionButton";

export default function CardHeading({title}){
    return <>
        <div className="flex gap-3 py-3">
            <div>{title}</div>
            <QueBtn/>
        </div>
    </>
}