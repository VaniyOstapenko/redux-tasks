import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getInput } from "../../Slice/validPass";

function Task9() {
  const inp = useSelector((state) => state.validPass);
  const dispatch = useDispatch();

  function checkPassword() {
    try {
      if (!/[A-Z]+/gm.test(inp))
        throw new Error("There are no big letters in the password");
      if (!/[a-z]+/gm.test(inp))
        throw new Error("There are no small letters on the password");
      if (!/[0-9]+/gm.test(inp))
        throw new Error("There are no numbers in the password");
      console.log("The password corresponds");
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <>
      <h1>Задача 9</h1>
      <p>
        Реализуйте компонент для ввода пароля с валидацией. Пользователь должен
        ввести пароль, который соответствует определенным требованиям (например,
        содержание букв,цифри специальных символов).
      </p>

      <input onChange={(e) => dispatch(getInput(e.target.value))} type="text" />
      <button onClick={() => checkPassword()}>Check pass</button>
      <p>
        <Link to="/">Вернуться к главной странице</Link>
      </p>
    </>
  );
}

export default Task9;
