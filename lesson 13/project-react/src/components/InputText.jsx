const InputText = ({ value, Change}) => {
    return (
      <>
      <div className="my-6">
      <input className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" value={value} onChange={Change}/>
      <p>Hai inserito: {value}</p>
    </div>
      </>
    )
  }
  
  export default InputText