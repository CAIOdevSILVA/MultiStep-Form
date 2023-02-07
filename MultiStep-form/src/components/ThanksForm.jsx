import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill
} from "react-icons/bs"

import "./Thanks.css"

const emojiData = {
  Unsatisfied: < BsFillEmojiFrownFill/>,
  Neutral: <BsFillEmojiNeutralFill/>,
  Satisfied: <BsFillEmojiSmileFill/>,
  Very_Satisfied: <BsFillEmojiHeartEyesFill/>,
}


function ThanksForm({ data }){
  return(
    <div className="thanks-container">
      <h2>Falta Pouco...</h2>
      <p>
        A sua compra é muito importante, em breve você receberá um cupom de 10%
        de desconto para sua próxima compra.
      </p>

      <p>Para concluir sua avalição clique no botão de enviar abaixo.</p>
      <h3>Aqui está o resumo da sua avaliação:{data.name} </h3>

      <p className="review-data">
        <span>Satistação com o produto:</span>
        {emojiData[data.review]}
      </p>
      
      <p className="review-data">
        <span>Comentário: </span>
        {data.comment}
      </p>
    </div>
  )
}

export default ThanksForm;