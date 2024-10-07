const InputText = ({ value, Change}) => {
    return (
      <>
      <div>
      <input type="text" value={value} onChange={Change}/>
      <p>Hai inserito: {value}</p>
    </div>
      </>
    )
  }
  
  export default InputText