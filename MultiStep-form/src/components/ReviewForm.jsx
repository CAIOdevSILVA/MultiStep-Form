import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs";

import "./ReviewForm.css";

function ReviewForm({ data, updateFieldHandler }) {
  return (
    <div className="review-form">
      <div className="form-control score-container">
        
        <label className="radio-container">
          <input
            type="radio"
            value="Unsatisfied"
            name="review"
            required 
            checked= { data.review === "Unsatisfied"}
            onChange={(e) => updateFieldHandler("review", e.target.value)}
            />
          <BsFillEmojiFrownFill />
          <p>Insatisfeito</p>
        </label>

        <label className="radio-container">
          <input 
            type="radio"
            value="Neutral"
            name="review"
            required 
            checked= { data.review === "Neutral"}
            onChange={(e) => updateFieldHandler("review", e.target.value)}
            />
          <BsFillEmojiNeutralFill />
          <p>Neutro</p>
        </label>

        <label className="radio-container">
          <input
            type="radio"
            value="Satisfied"
            name="review"
            required 
            checked= { data.review === "Satisfied"}
            onChange={(e) => updateFieldHandler("review", e.target.value)}
            />
          <BsFillEmojiSmileFill />
          <p>Satisfeito</p>
        </label>

        <label className="radio-container">
          <input 
            type="radio"
            value="Very_Satisfied"
            name="review"
            required 
            checked= { data.review === "Very_Satisfied"}
            onChange={(e) => updateFieldHandler("review", e.target.value)}
            />
          <BsFillEmojiHeartEyesFill />
          <p>Muito Satisfeito</p>
        </label>
      </div>

      <div className="form-control">
        <label htmlFor="comment">Comentário</label>
        <textarea
          name="comment"
          id="comment"
          placeholder="Conte como foi a sua experiência com o produto..."
          value={ data.comment || "" }
          onChange={(e) => updateFieldHandler("comment", e.target.value)}
          required
        ></textarea>
      </div>
    </div>
  );
}

export default ReviewForm;
