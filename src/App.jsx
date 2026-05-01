import "./App.css";
/**
 * # 1. Component parent và child
 * App <=> parent component
 * Feature <=> child component
 *
 * App có thể chứa nhiều Feature, nhưng Feature không thể chứa App
 *
 * #2. Props
 * Props là một đối tượng chứa các thuộc tính được truyền từ component cha xuống component con.
 * Props giúp chúng ta có thể tái sử dụng component một cách linh hoạt và dễ dàng hơn.
 * Props chỉ có thể truyền từ component cha xuống component con, không thể truyền ngược lại.
 * Props có thể là bất kỳ kiểu dữ liệu nào, bao gồm cả function, object, array, v.v.
 * Props giúp chúng ta có thể tạo ra các component động và linh hoạt hơn, vì chúng ta có thể truyền các giá trị khác nhau vào cùng một component để tạo ra các kết quả khác nhau.
 * Props cũng giúp chúng ta có thể tách biệt logic và giao diện của component, vì chúng ta có thể truyền các giá trị từ component cha xuống component con mà không cần phải lo lắng về cách chúng được sử dụng trong component con.
 *
 */

/** Component YoutubeItem */
const YoutubeItem = ({ title, author, image, image2 }) => {
  const props = { title, author, image };
  console.log(">>>props", props);

  return (
    <div className="youtube-item">
      <div className="youtube-image">
        <img src={image} alt="ảnh-1" />
      </div>
      <div className="youtube-footer">
        <img src={image2} alt="" className="youtube-avt" />
        <div className="youtube-info">
          <h3 className="youtube-title">{title}</h3>
          <h4 className="youtube-author">{author}</h4>
        </div>
      </div>
    </div>
  );
};
/** End YoutubeItem */

/**
 * App <=> parent component
 * Feature <=> child component
 * YoutubeItem <=> child component
 * */

/** parent component */
const App = () => {
  return (
    <>
      <YoutubeItem
        title="Youtube Title"
        author="Youtube Author"
        image="https://fastly.picsum.photos/id/248/800/300.jpg?hmac=c1tZlY3eIi14JuXRdZBj6HrK2lz1AvGQvUCsd-gjagw"
        image2="https://fastly.picsum.photos/id/622/800/300.jpg?hmac=pYuCMhtu7RoQPlN0bon0-avH_JqQeB_Ek0wRU-eFPG8"
      />
    </>
  );
};

export default App;
