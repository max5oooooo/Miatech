const Button = ({ onIncrement, onDecrement, onReset }) => {
    return (
      <>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
        <button onClick={onReset}>Reset</button>
      </>
    )
  }
  
  export default Button