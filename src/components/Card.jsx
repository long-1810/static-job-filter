import { nanoid } from "nanoid";

export default function Card(props) {
  const {
    logo,
    company,
    isNew,
    isFeatured,
    position,
    postedAt,
    contract,
    location,
    tags,
    addTag,
  } = props;

  const styleTag =
    "text-sm text-primary bg-bg-color px-2 py-1 hover:text-white hover:bg-primary cursor-pointer transition duration-100";

  const styleNew =
    "px-2 py-1 rounded-full text-xs bg-primary text-filter-color";
  const styleFeatured =
    "px-2 py-1 rounded-full text-xs bg-neutral-2 text-filter-color";

  return (
    <div
      className={
        "bg-white p-8 flex lg:gap-8 justify-between md:justify-center sm:justify-center md:flex-col sm:flex-col font-bold items-center shadow-lg rounded-md " +
        (isFeatured ? "border-l-4 border-primary" : "")
      }
    >
      <div className="relative grid grid-rows-3 grid-cols-[repeat(3,auto)] sm:grid-rows-4 sm:grid-cols-1 gap-x-8 gap-y-2 md:border-b-2 md:border-neutral-1 sm:border-b-2 sm:border-neutral-1 md:pb-4 sm:pb-4">
        <img
          className="row-span-3 w-[88px] h-[88px]"
          src={logo}
          alt="Photosnap"
        />
        <div className="flex justify-start items-center gap-4 col-span-2">
          <p className="text-primary" id="name">
            {company}
          </p>
          {isNew && (
            <p className={styleNew} id="new">
              NEW!
            </p>
          )}
          {isFeatured && (
            <p className={styleFeatured} id="featured">
              FEATURED
            </p>
          )}
        </div>
        <p
          className="col-span-2 text-neutral-2 hover:text-primary cursor-pointer transition duration-100"
          id="position"
        >
          {position}
        </p>

        <div className="flex col-span-2 gap-3 items-center">
          <p className="text-neutral-1 font-normal" id="time">
            {postedAt}
          </p>
          <img className="" src="/images/dot.svg" alt="" />
          <p className="text-neutral-1 font-normal" id="work-time">
            {contract}
          </p>
          <img className="" src="/images/dot.svg" alt="" />
          <p className="text-neutral-1 font-normal" id="location">
            {location}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap justify-end md:justify-start sm:justify-start gap-4 md:pt-6 sm:pt-6">
        {tags.map((tag) => (
          <div
            className={styleTag}
            key={nanoid()}
            onClick={() => {
              addTag(tag);
            }}
          >
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
}
