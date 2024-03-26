import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getLang } from "../../Slice/getLanguage";

function Task11() {
  const arr = {
    Rus: {
      header: "Типы данных",
      description: "описание типов данных",
    },
    En: {
      header: "Data Types",
      description: "description Data Types",
    },
  };

  const lang = useSelector((state) => state.getLanguage);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Задача 11</h1>
      <p>
        Создайте компонент, который позволяет пользователю выбирать язык
        интерфейса. При выборе языка текст на странице должен изменяться
        соответствующим образом.
      </p>

      <button onClick={() => dispatch(getLang("Rus"))}>
        Включить русский текст
      </button>
      <button onClick={() => dispatch(getLang("En"))}>
        Включить английский текст
      </button>
      <h1>{arr[lang]?.header}</h1>
      <h1>{arr[lang]?.description}</h1>

      <p>
        <Link to="/">Вернуться к главной странице</Link>
      </p>
    </>
  );
}

export default Task11;
