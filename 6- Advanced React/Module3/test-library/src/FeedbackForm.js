import { useState } from "react"

const FeedbackForm = ({onSubmit}) => {
    const [score, setScore] = useState("10");
    const [comment, setComment] = useState("");

    const isDisabled = Number(score) < 5 && comment.length <= 10;

    const textAreaPlaceholder = isDisabled
    ? "Please provide a comment explaining why the experience was not good. Minimun length is 10 characters"
    : "Optional feedback"

    const handleSubmit = (e) => {
        if (isDisabled === true) {
            alert("Please provide a valid feedback commment")
            return;
        }
        e.preventDefault();
        onSubmit({score, comment})
    }

    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <h1>Feedback Form</h1>
                    <div className="Field">
                    <label htmlFor="score">Score: {score}⭐</label>
                    <input 
                        type="range"
                        name="score"
                        min="0"
                        max="10"
                        value={score}
                        onChange={e => setScore(e.target.value)}
                    />
                    </div>
                    <div className="Field">
                        <label>Coment: </label>
                        <textarea 
                            placeholder={textAreaPlaceholder} 
                            name="comment" 
                            value={comment} 
                            onChange={e => setComment(e.target.value)} 
                        />
                    </div>
                    <button type="submit">Submit</button>
                </fieldset>
            </form>
        </div>
    )
}

export default FeedbackForm;