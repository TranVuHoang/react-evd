import "./App.css";
import YoutubeData from "./Components/YoutubeData";

const YoutubeItem = (props) => {
  const { image, image2, title, author, className } = props;
  // console.log(props);
  return (
    <div className={`youtube-item ${className}`}>
      <div className="youtube-image" style={{ height: "250px" }}>
        <img
          className="youtube-bg"
          src={image}
          alt=""
          // style={{ display: "block", maxWidth: "100%", width: "100%", height:"100%"}}
        />
      </div>
      <div className="youtube-footer">
        <img src={image2} alt="youtube-avt" className="youtube-avt" />
        <div className="youtube-info">
          <h3 className="youtube-title">{title || "This is title h3"}</h3>
          <h4 className="youtube-author">
            {author || "This is example of author name"}
          </h4>
        </div>
      </div>
    </div>
  );
};
console.log(">>>YoutubeData:", YoutubeData);
//parent component
const App = () => {
  const array = [1, 2, 3, 4, 5];
  const double = array.map((item) => {
    return item * 2;
  });
  console.log(double);

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
      {/* {YoutubeData.map((item, index) => {
          return <div>Hello {index + 1}</div>;
        })} */}
    </div>
  );
};

export default App;
