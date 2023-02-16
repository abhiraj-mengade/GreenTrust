import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { Auth, useAuth } from "@arcana/auth-react";
import { useEffect } from "react";
import NavBar from "@/components/Navbar";
import RoleCard from "@/components/RoleCard";
import { PolywrapClient } from "@polywrap/client-js";

const client = new PolywrapClient();

const response=async ()=> {
  console.log("response");
  const projectId = '2Ln8ZP0EreH0IInN40eJm52wZa7';
  const projectSecret = 'ffc9d27761543211de14432fee351c80';
  const auth = 'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');
  console.log(auth);
    
    await client.invoke({
    uri: "wrap://ens/http.polywrap.eth",
    method: "get",
    args: {
      url: "https://ipfs.infura.io:5001/api/v0/",
      request: {
        responseType: "BINARY",
        urlParams: [{key:"query", value:"kall"}],
        headers: [[{"Authorization": auth}]],
        body: "{data: 'test-request'}",
      }
    }
  })
};

response();
const inter = Inter({ subsets: ["latin"] });

// export default function Home() {
//   const auth = useAuth();

//   useEffect(() => {
//     if (auth?.isLoggedIn){
//       console.log(auth.user);
//     }
//   }, [auth?.user]);

//   const onLogin = async () => {
//     console.log("Logged in with address: " + auth.provider);
//     const info = await auth.getUser()
//      console.log(auth.getUser());

//   };
//   const logout = async()=>{
//     await auth.logout();
//   }
//   return (
//     <>
//       {auth.loading ? (
//         "Loading"
//       ) : auth.isLoggedIn ? (
//         <div>
//         Logged In
//         <button onClick={logout}>Logout</button>
//         </div>
//       ) : (
//         <div>
//           <Auth externalWallet={true} theme={"light"} onLogin={onLogin}/>
//         </div>
//       )}
//     </>
//   )
// }

export default function Home({}) {
  return (
    <>
        <div className="flex flex-col md:flex-row justify-center md:justify-around items-center min-h-screen -mt-10">
          <p className="h-32 font-bold text-6xl text-primary font-comfortaa mt-20 md:mt-0 text-left mr-16 md:mr-0">
            Get <br></br>Verified
          </p>
          <div className="flex space-x-[20px] flex-col md:flex-row">
            <RoleCard name={"Farmer"} imagePath={"farmer-woman.png"} />
            <RoleCard name={"Licensed Inspector"} imagePath={"sheriff.png"} />
          </div>
        </div>
      
    </>
  );
}
