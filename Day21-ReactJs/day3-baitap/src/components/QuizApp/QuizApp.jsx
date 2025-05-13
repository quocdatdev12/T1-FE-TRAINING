import React, { useState } from "react";
import { MyButton } from "./MyButton";
import { DataQuestion } from "./data";
export { DataQuestion } from "./data";

export const QuizApp = () => {
  console.log(DataQuestion, "DataQuestion");
  const [indexQuestion, setIndexQueston] = useState(0);
  const [isResult, setIsReusult] = useState(false);
  const [score,setScore] = useState(0);

  const handleNextQuestion = (isCorrect) => {
    if (indexQuestion + 1 < DataQuestion.length) {
      setIndexQueston(indexQuestion + 1);
    } else {
      setIsReusult(true);
    }

    if(isCorrect){
      setScore(score + 1);
    }
  };
  console.log(score,'score');

  const handleGoBack = () => {
    setIndexQueston(0);
    setIsReusult(false);
    setScore(0);
  }
  

  return isResult ? (
    <div className=" border m-auto w-[250px] p-5 rounded">
      <h1 className="text-red-600">Mà hiện ra kết quả</h1>
      <div>Câu trả lời đúng: {score}</div>
      <div>Câu trả lời sai: {DataQuestion.length - score}</div>
      <MyButton onClick={handleGoBack}  className="p-2 mb-3 w-full rounded-full cursor-pointer text-white bg-indigo-400">Làm lại</MyButton>
    </div>
  ) : (
    <div className="m-auto w-[300px] pt-3">
      <h2>
        Câu {indexQuestion + 1}: {DataQuestion[indexQuestion].questionText}
      </h2>
      <div className="pt-3">
        {DataQuestion[indexQuestion].answerOptions.map((item) => (
          <MyButton
            onClick={() => handleNextQuestion(item.isCorrect)}
            key={item.answerText}
            className="p-2 mb-3 w-full rounded-full cursor-pointer text-white bg-indigo-400"
          >
            {item.answerText}
          </MyButton>
        ))}
      </div>
    </div>
  );
};
