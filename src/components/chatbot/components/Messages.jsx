export const MessageUser = ({ message }) => {
  return (
    <div className="chatbot-body_user">
      <div>
        { message }
      </div>
    </div>
  )
}


export const MessageBot = ({ message }) => {
  return (
    <div className="chatbot-body_bot">
      <div>
        { message }
      </div>
    </div>
  )
}
