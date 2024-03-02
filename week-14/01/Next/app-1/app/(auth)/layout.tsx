export default function({children}: Readonly<{
    children: React.ReactNode;
  }>){
    return <>
        <div>
            Hiiiiiii 20% Off
            {children}
        </div>
    </>

}