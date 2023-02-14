import { HiLocationMarker } from "@react-icons/all-files/hi/HiLocationMarker";

const FarmCard = ({image, name, location}) => {
  return (
    <div className="flex-none w-72 mr-8 md:pb-4 border bg-white rounded-lg shadow-lg mr-6">
      <img className="object-cover w-full h-56" src={image} alt="avatar" />

      <div className="py-5 flex flex-col justify-center items-center">
        <a
          href="#"
          className="block text-xl font-bold text-gray-800 font-comfortaa"
          tabindex="0"
          role="link"
        >
          {name}
        </a>
        <div className="flex mt-2 mr-2">
            <HiLocationMarker className="text-red-600"/>&nbsp;
            <span className="text-sm text-gray-700 font-comfortaa">  {location}</span>
        </div>
      </div>
    </div>
  );
};

export default FarmCard;