import React, { useState } from "react";
import "./index.scss";

const questions = [
    {
        title: "React - is  ... ?",
        variants: ["a library", "a framework", "an app"],
        correct: 0,
    },
    {
        title: "What are the features of React?",
        variants: [
            "JSX, components, virtual DOM, two-way data binding, high perfomance",
            "JSX, components, virtual DOM, one-way data binding, high perfomance",
            "JSX, components, virtual DOM, two-way data binding, less code framework",
        ],
        correct: 1,
    },
    {
        title: "Component - is ... ",
        variants: [
            "an app",
            "a part of app or page",
            "independent and reusable bit of code",
        ],
        correct: 2,
    },
    {
        title: "What is JSX?",
        variants: [
            "It's another name for HTML",
            "It's a function",
            "it is a syntax extension to JavaScript that allows to write HTML in React",
        ],
        correct: 2,
    },
    {
        title: "What is useState hook?",
        variants: [
            "It is a hook that lets you add React state to function component",
            "It is a hook that adds the ability to perform side effects from a function component.",
            "It is a hook that used to store and update states. It accepts a reducer function as its first parameter and the initial state as the second.",
        ],
        correct: 0,
    },
];

function Result({ correctAnswers, onClickStartAgain }) {
    return (
        <div className="result">
            <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
            <h2>
                You score is {correctAnswers} out of {questions.length}
            </h2>
            <button onClick={onClickStartAgain}>Try again</button>
        </div>
    );
}

function Game({ step, question, onClickVariant }) {
    const percentage = Math.round((step / questions.length) * 100);

    return (
        <>
            <div className="progress">
                <div
                    style={{ width: `${percentage}%` }}
                    className="progress__inner"
                ></div>
            </div>
            <h1>{question.title}</h1>
            <ul>
                {question.variants.map((variant, index) => (
                    <li onClick={() => onClickVariant(index)} key={variant}>
                        {variant}
                    </li>
                ))}
            </ul>
        </>
    );
}

function App() {
    const [step, setStep] = useState(0);
    const [correctAnswers, setCorrectAnswers] = useState(0);

    const question = questions[step];

    const onClickVariant = (index) => {
        setStep(step + 1);
        if (index === question.correct) {
            setCorrectAnswers(correctAnswers + 1);
        }
    };

    const onClickStartAgain = () => {
        setStep(0);
        setCorrectAnswers(0);
    };

    return (
        <div className="App">
            {step !== questions.length ? (
                <Game
                    step={step}
                    question={question}
                    onClickVariant={onClickVariant}
                />
            ) : (
                <Result
                    correctAnswers={correctAnswers}
                    onClickStartAgain={onClickStartAgain}
                />
            )}
        </div>
    );
}

export default App;
