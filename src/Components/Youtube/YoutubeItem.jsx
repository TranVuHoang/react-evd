const YoutubeItem = ({ image, image2, title, author, className }) => {
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

export default YoutubeItem;
