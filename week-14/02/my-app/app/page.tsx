import axios from "axios"

export default async function(){
  const userData = await getUserDetails();
  return <>
    <div className="flex flex-col text-center justify-center h-screen gap-5 border border-black">
      <div>
        {userData.name}
      </div>
      <div>
        {userData.email}
      </div>
    </div>
  </>
}

export async function getUserDetails(){
  const response = await axios.get('https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details');
  return  response.data;
}