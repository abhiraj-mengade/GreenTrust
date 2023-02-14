import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Button({ text, icon, color }) {
  return (
    <div>
      <a
        role="button"
        class={
          color +
          " hover:bg-red-700 text-white text-sm px-4 py-2 items-center border rounded-full text-lg md:text-lg font-comfortaa mr-2"
        }
      >
        <FontAwesomeIcon
          icon={icon}
          style={{ color: "white" }}
          className="mr-2"
        />
        {text}
      </a>
    </div>
  );
}