import "./index.scss";

const questions = [
    {
        title: "React - is  ... ?",
        variants: ["a library", "a framework", "an app"],
        correct: 0,
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
];

function Result() {
    return (
        <div className="result">
            <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
            <h2>You score is 3 out of 10</h2>
            <button>Try again</button>
        </div>
    );
}

function Game() {
    return (
        <>
            <div className="progress">
                <div style={{ width: "50%" }} className="progress__inner"></div>
            </div>
            <h1>What is useState hook?</h1>
            <ul>
                <li>
                    It is a hook that lets you add React state to function
                    components
                </li>
                <li>
                    It is a hook that adds the ability to perform side effects
                    from a function component.
                </li>
                <li>
                    It is a hook that used to store and update states. It
                    accepts a reducer function as its first parameter and the
                    initial state as the second.
                </li>
            </ul>
        </>
    );
}

function App() {
    return (
        <div className="App">
            <Game />
            {/* <Result /> */}
        </div>
    );
}

export default App;
