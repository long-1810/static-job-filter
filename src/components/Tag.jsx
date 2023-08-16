import removeIcon from "/images/icon-remove.svg";

export default function Tag(props) {
  return (
    <div className="flex">
      <p className="font-bold text-xs p-1 pr-2 text-primary bg-filter-color rounded-l-sm">
        {props.value}
      </p>
      <button className="pointer bg-primary rounded-r-sm w-6 h-6 flex items-center justify-center hover:bg-neutral-2 transition duration-10">
        <img
          src={removeIcon}
          alt="Remove"
          className="w-3 h-3"
          onClick={() => {
            props.deleteTag(props.value);
          }}
        />
      </button>
    </div>
  );
}
