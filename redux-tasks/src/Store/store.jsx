import { configureStore } from "@reduxjs/toolkit";
import counter1 from "../Slice/counter1";
import counter2 from "../Slice/counter2";
import getInput from "../Slice/getInput";
import palindrom from "../Slice/palindrom";
import palindrom2 from "../Slice/palindrom2";
import see from "../Slice/see";
import validationEmail from "../Slice/validationEmail";
import getSum from "../Slice/getSum";
import validPass from "../Slice/validPass";
import getLengthText from "../Slice/getLengthText";
import getLanguage from "../Slice/getLanguage";
import bringTheTask from "../Slice/bringTheTask";

const store = configureStore({
  reducer: {
    counter1: counter1,
    counter2: counter2,
    getInput: getInput,
    palindrom: palindrom,
    palindrom2: palindrom2,
    see: see,
    validationEmail: validationEmail,
    getSum: getSum,
    validPass: validPass,
    getLengthText: getLengthText,
    getLanguage: getLanguage,
    bringTheTask: bringTheTask,
  },
});

export default store;
