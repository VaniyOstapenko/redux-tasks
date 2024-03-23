import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getPalindrom } from "../../Slice/palindrom2";
import { getStr } from "../../Slice/palindrom2";

function Task5() {
  const inp = useSelector((state) => state.palindrom2);
  const dispatch = useDispatch();
  function clickButton() {
    dispatch(getPalindrom());
  }
  return (
    <>
      <h1>Задача 5</h1>
      <p>
        Создайте компонент формы. По клику на кнопку собрать данные из input и
        проверить вводимую строку на палиндром
      </p>

      <h1>{inp.isPalindrom}</h1>
      <button onClick={clickButton}>Click me</button>
      <input onChange={(e) => dispatch(getStr(e.target.value))} type="text" />
      <p>
        <Link to="/">Вернуться к главной странице</Link>
      </p>
    </>
  );
}

export default Task5;
