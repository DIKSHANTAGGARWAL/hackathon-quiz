import React, { useEffect, useState } from "react";

const Sports = () => {

    const [ques, setQues] = useState([])
    const [correct_answer, setCorrect_answer] = useState([])
    const [incorrect_answers, setIncorrect_answer] = useState([])
    const [ans, setAns] = useState([])
    const [score, setScore] = useState([])


    function displayMessage(message) {
        const div = document.createElement("div");
        div.textContent = message;
        document.getElementById("message-container").append(div);
    }

    function marks() {
        if (ans == correct_answer) {
            score++
        }
    }
    useEffect(() => {

        let q = fetch("https://opentdb.com/api.php?amount=10&category=21")
        q.then((value1) => {
            return value1.json()
        }).then((value2) => {
            console.log(value2)

            setQues(value2.results)
        })

    }, [])
    return (

        <div className="header">
            <h1 className="header-text">Questions</h1>
            {
                ques.map(e => <div>
                    <ul > {e.question}
                        <li>{e.correct_answer}</li>
                        <li>{e.incorrect_answers[0]}</li>
                        <li>{e.incorrect_answers[1]}</li>
                        <li>{e.incorrect_answers[2]}</li>
                        <input type='text' placeholder='Enter your answer' className=''
                             onChange={(e) => { setAns(e.target.value) }}
                        />
                        <br />
                        <br />
                    </ul>
                </div>
                )
            }

            <button onClick={marks}>submit</button>
        </div>
    )
}

export default Sports