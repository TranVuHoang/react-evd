import YoutubeData from "../data";
import YoutubeItem from "./YoutubeItem";

const YoutubeList = () => {
  return (
    <div className="youtube-list">
      {YoutubeData.map((item, index) => (
        <YoutubeItem
          key={index}
          image={item.image}
          image2={item.image2 || item.image}
          title={item.title}
          author={item.author}
          className={item.id === 2 ? "youtube-item-2" : ""}
        />
      ))}
    </div>
  );
};

export default YoutubeList;
