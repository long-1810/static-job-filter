import Filter from "./components/Filter";
import Card from "./components/Card";
import data from "./assets/data.json";
import { useState } from "react";
import { useEffect } from "react";

export default function App() {
  const [cardData, setCardData] = useState(data);
  const [cards, setCards] = useState([]);
  const [tagList, setTagList] = useState([]);

  useEffect(() => {
    generateCards(filter());
  }, [tagList]);

  function filter() {
    let filteredCardData = [];

    if (tagList.length !== 0) {
      for (let i = 0; i < cardData.length; i++) {
        let tags = [
          cardData[i].role,
          cardData[i].level,
          ...cardData[i].languages,
          ...cardData[i].tools,
        ];
        for (let j = 0; j < tagList.length; j++) {
          if (tags.includes(tagList[j]) && j === tagList.length - 1) {
            filteredCardData.push(cardData[i]);
          }
          if (!tags.includes(tagList[j])) {
            break;
          }
        }
      }
      return filteredCardData;
    } else {
      return cardData;
    }
  }

  function addTag(newTag) {
    setTagList((oldTagList) =>
      !oldTagList.includes(newTag) ? [...oldTagList, newTag] : oldTagList
    );
  }

  function deleteTag(tag) {
    setTagList((oldTags) => oldTags.filter((oldTag) => oldTag !== tag));
  }

  function clearTags() {
    setTagList([]);
  }

  function generateCards(cardData) {
    setCards(
      cardData.map((card) => (
        <Card
          key={card.id}
          logo={card.logo}
          company={card.company}
          isNew={card.new}
          isFeatured={card.featured}
          position={card.position}
          postedAt={card.postedAt}
          contract={card.contract}
          location={card.location}
          tags={[card.role, card.level, ...card.languages, ...card.tools]}
          addTag={addTag}
        />
      ))
    );
  }

  return (
    <>
      <div
        className={
          "relative bg-wave-pattern w-full min-h-[156px] text-bg-color bg-primary " +
          (tagList.length !== 0 ? "mb-8" : "")
        }
      >
        {tagList.length !== 0 && (
          <Filter
            tagList={tagList}
            deleteTag={deleteTag}
            clearTags={clearTags}
          />
        )}
      </div>
      <div className="lg:px-32 md:px-16 sm:px-4 py-16 space-y-8">{cards}</div>
    </>
  );
}
