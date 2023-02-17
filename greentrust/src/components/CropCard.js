import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faSeedling } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Info from "./Info";

export default function CropCard({ cropDetails }) {
  console.log(cropDetails, "This is crop details")
  let details = JSON.parse(cropDetails.details);
  
  return (
    <Link href={`/farm/${cropDetails.farmId}/crop/${cropDetails.id}`}>
      <div className="flex flex-col gap-2.5 py-6 px-5 shadow-lg rounded-2xl w-full">
        <Info icon={faSeedling} text={"Tomata"} style="text-brown !w-[32px] !h-[32px]" textStyle="font-semibold text-xl" />
        <Info icon={faCalendarDays} text={details.sowedOn} style="text-gray !w-[18px] !h-[18px]" iconDivStyle="w-[32px]" textStyle="!text-gray font-bold" />
      </div>
    </Link>
  );
}
