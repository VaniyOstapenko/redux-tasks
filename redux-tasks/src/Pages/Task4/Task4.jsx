import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getStr } from "../../Slice/palindrom";

function Task4() {
  const inp = useSelector((state) => state.palindrom);
  const dispatch = useDispatch();

  function clickButton() {
    if (inp == inp.split("").reverse().join("")) {
      console.log("palindrom");
    } else {
      console.log("not palindrom");
    }
  }
  return (
    <>
      <h1>Задача 4</h1>
      <p>
        Создайте компонент формы. По клику на кнопку собрать данные из input и
        проверить вводимую строку на палиндром
      </p>

      <button onClick={clickButton}>Click me</button>
      <input onChange={(e) => dispatch(getStr(e.target.value))} type="text" />
      <p>
        <Link to="/">Вернуться к главной странице</Link>
      </p>
    </>
  );
}

export default Task4;
