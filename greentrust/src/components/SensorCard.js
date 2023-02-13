import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHashtag, faChartLine } from "@fortawesome/free-solid-svg-icons";

export default function SensorCard({ sensorDetails }) {
  return (
    <div className="rounded-[20px]  shadow-xl flex justify-center items-center w-fit mx-3 px-3">
      <div className=" my-6 space-y-3 ">
        <div className="flex flex-row items-center">
        <FontAwesomeIcon icon={faChartLine}  style={{ color: "black" }}/>
          <p className="font-comfortaa font-bold text-xl text-darkGray ml-3">
            {sensorDetails.get("sensorName")}
          </p>
        </div>
        <div className="flex flex-row">
          <FontAwesomeIcon icon={faHashtag} style={{ color: "black" }}/>
          <p className="font-comfortaa font-bold  text-sm text-darkGray ml-3">
            {sensorDetails.get("sensorId")}
          </p>
        </div>
      </div>
    </div>
  );
}
