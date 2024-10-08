const Button = ({ onIncrement, onDecrement, onReset }) => {
    return (
      <>
        <button onClick={onIncrement} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mt-3 mr-1 hover:bg-sky-200 active:bg-sky-700">+</button>
        <button onClick={onDecrement} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mt-3 mr-1 hover:bg-sky-200 active:bg-sky-700">-</button>
        <button onClick={onReset} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mt-3  hover:bg-sky-200 active:bg-sky-700">Reset</button>
      </>
    )
  }
  
  export default Button