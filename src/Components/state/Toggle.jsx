import { useState } from "react";

const Toggle = () => {
  // 1. enabling state(bật state lên ntn) -> import { useState } from "react";
  // 2. initialize state
  // 3. reading state
  // 4. update state

  // const array = useState(false);
  // console.log(array); // [false, function]
  // console.log(">>>", array[0]);
  // console.log(">>>", array[1]);

  // const arr = [1, 2];
  // console.log(arr[0], arr[1]);

  // const [a, b] = [1, 2];
  // console.log(a, b);

  // initialize value: boolean(true, false), number(1,2,3,...), string("Hoàng IT"), undefine, null, object(usename: "Hoàng Trần", age: 29), array[1,2,3,...]

  // const [title, setTitle]
  // const [isActive, setIsActive]

  const [on, setOn] = useState(false);
  console.log(">>>: ", on); // [false, function], giá trị của biến on chính bằng giá trị khởi tạp của useState(false) chính là giá trị false.

  return (
    <button className="toggle" onClick={() => setOn(true)}>
      Toggle {on ? "On" : "Off"}
    </button>
  );
};

export default Toggle;
