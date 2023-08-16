import Tag from "./Tag";
import { nanoid } from "nanoid";

export default function Filter(props) {
  return (
    <div className="shadow-lg bg-white min-w-[60%] py-4 px-8 flex justify-between gap-4 items-center absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
      <div className="flex flex-wrap gap-4">
        {props.tagList.map((tagName) => (
          <Tag value={tagName} key={nanoid()} deleteTag={props.deleteTag} />
        ))}
      </div>
      <a
        href="#"
        id="clear"
        className="text-neutral-1 underline font-main font-bold hover:text-primary transition duration-100"
        onClick={props.clearTags}
      >
        Clear
      </a>
    </div>
  );
}
