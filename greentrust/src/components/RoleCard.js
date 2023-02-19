import { useRouter } from "next/router";
import { createSuperFlow } from "@/utils";
import { SnackbarContext } from "@/context/snackbarContext";
import { LoaderContext } from "@/context/loaderContext";
import { useAuth } from "@/auth/useAuth";
import { useContext } from "react";

export default function RoleCard({ name, imagePath, path }) {
  const router = useRouter();
  const auth = useAuth();
  const { snackbarInfo, setSnackbarInfo } = useContext(SnackbarContext);
  const { loading, setLoading } = useContext(LoaderContext);

  const handleClick = async() => {
    if (name === "Farmer") {
      setLoading(true);
      try {
        await createSuperFlow(auth);
        router.push(path);
      } catch(e) {
        console.log(e, "superflow error");
        setSnackbarInfo({
          open: true,
          severity: "error",
          message: "Error creating superflow for subscription"
        });
      }
      setLoading(false);
    } else { 
      router.push(path);
    }
  }

  return (
    <div className="rounded-[20px] p-10 shadow-xl flex justify-center items-center transform hover:scale-105 cursor-pointer" onClick={handleClick}>
      <div className="flex flex-row md:flex-col justify-around items-center">
        <img
          src={imagePath}
          className="w-[200px] h-[200px]"
        ></img>
        <p className="w-[7rem] font-bold text-2xl text-center text-gray-700 font-comfortaa pt-4">
          {name}
        </p>
      </div>
    </div>
  );
}
