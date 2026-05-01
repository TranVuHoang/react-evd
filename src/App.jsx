import "./App.css";
import YoutubeData from "./components/YoutubeData";

/** #2.13 Rendering list
 * - Khi muốn render một list các phần tử giống nhau, ta có thể sử dụng hàm map để duyệt qua mảng dữ liệu và trả về một component cho mỗi phần tử trong mảng đó.
 * - Mỗi phần tử trong list cần có một thuộc tính key duy nhất để giúp React xác định và quản lý các phần tử trong quá trình render lại.
 * - Trong ví dụ dưới đây, chúng ta có một component YoutubeItem đại diện cho một video trên YouTube, và chúng ta sử dụng component này để render một danh sách các video dựa trên dữ liệu được truyền vào qua <props className=""></props>
 */
const YoutubeItem = (props) => {
  console.log(props);

  return (
    <div className="">
      <div className="youtube-item">
        <div className="youtube-image" style={{ height: "250px" }}>
          <img
            className="youtube-bg"
            src={props.image}
            alt=""
            // style={{ display: "block", maxWidth: "100%", width: "100%", height:"100%"}}
          />
        </div>
        <div className="youtube-footer">
          <img
            src="https://images.unsplash.com/photo-1499117901949-e34ef1b2444a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZsb3dlcnxlbnwwfHwwfHx8MA%3D%3D"
            alt="youtube-avt"
            className="youtube-avt"
          />
          <div className="youtube-info">
            <h3 className="youtube-title">
              {props.titleh3 || "This is title h3"}
            </h3>
            <h4 className="youtube-author">
              {props.author || "This is example of author name"}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};
//parent component
const App = () => {
  const array = [1, 2, 3, 4, 5];
  const double = array.map((item) => {
    return item * 2;
  });

  return (
    <div className="">
      <h1>Less12</h1>
      <div className="youtube-list">
        <YoutubeItem
          image="https://images.unsplash.com/photo-1487139975590-b4f1dce9b035?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zmxvd2VyfGVufDB8fDB8fHww"
          // titleh3="PHP master"
          // author="Phan Van Cuong"
        ></YoutubeItem>
        <YoutubeItem
          image="https://plus.unsplash.com/premium_photo-1683121484963-a491b935780b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZsb3dlcnxlbnwwfHwwfHx8MA%3D%3D"
          titleh3="PHP master"
          author="Phan Van Cuong"
        ></YoutubeItem>
        <YoutubeItem
          image="https://media.istockphoto.com/id/1915475777/photo/pink-cherry-blossom-in-the-morning.webp?b=1&s=612x612&w=0&k=20&c=nzpo3p-xd2XgsNajdrPd7kyRYs4afvo51Rh8mQmWQxE="
          titleh3="HTML CSS Pro"
          author="Sơn Đặng F8 pro"
        ></YoutubeItem>
        <YoutubeItem
          image="https://media.istockphoto.com/id/1481416659/photo/close-up-of-working-bee-flying-on-canola-field.webp?b=1&s=612x612&w=0&k=20&c=1xFFFP2CIQhUdp5el4BIXs9rJ_YjjaD7V5qnRNggfbM="
          titleh3="Laravel"
          author="Hoangan unicode"
        ></YoutubeItem>
      </div>
    </div>
  );
};

export default App;
