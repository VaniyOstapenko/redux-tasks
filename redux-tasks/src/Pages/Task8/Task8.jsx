import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { changeUnput1, changeUnput2, sumInputs } from "../../Slice/getSum";

function Task8() {
  const inp = useSelector((state) => state.getSum);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Задача 8</h1>
      <p>
        Создайте компонент, который отображает сумму значений input. Компонент
        состоит из Input для ввода математического значения и кнопки сложения
        для высчитываниярезультата внутри строки.
      </p>

      <input
        onChange={(e) => dispatch(changeUnput1(e.target.value))}
        type="text"
      />
      <input
        onChange={(e) => dispatch(changeUnput2(e.target.value))}
        type="text"
      />

      <button onClick={() => dispatch(sumInputs())}>Click me</button>
      <h1>{inp.result}</h1>
      <p>
        <Link to="/">Вернуться к главной странице</Link>
      </p>
    </>
  );
}

export default Task8;
