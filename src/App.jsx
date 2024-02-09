import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [tip, setTip] = useState("$0.00")
  const [total, setTotal] = useState("$0.00")
  const [input, setInput] = useState({
    bill: "",
    porcentajeDef: "",
    custom: "",
    people: ""
  });

  // useEffect(() => {
  //   calculo()
  // }, [input.bill])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value
    })
    console.log(input);
  }

  const calculo = () => {
    let porcentaje = !input.custom ? input.porcentajeDef : input.custom;
    let cantidad = input.bill;
    let cantidadDePersonas = input.people;
    let resultadoPorcentaje = (cantidad * porcentaje) / 100;
    let propPorPer = resultadoPorcentaje / cantidadDePersonas;
    setTip(propPorPer)
    let cantidadDivida = cantidad / cantidadDePersonas;
    let totalPorPerson = cantidadDivida + propPorPer;
    setTotal(totalPorPerson)
  }

  const handleClick = () => {
    calculo()
  }

  const handleSubmit = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value
    })
    console.log(input.porcentajeDef);
  }

  const handleReset = () => {
    setInput({
      bill: "",
      porcentajeDef: "",
      custom: "",
      people: ""
    })
    setTip("$0.00")
    setTotal("$0.00")
  }

  let checkPercentage = {
    inputUno: 5,
    inputDos: 10,
    inputTres: 15,
    inputCuatro: 25,
    inputCinco: 50
  };

  return (
    <>
      <div>
        <div className='left_container'>
          <form>
            <label>Bill</label>
            <input
              type='number'
              value={input.bill}
              name='bill'
              onChange={handleChange}
            />
          </form>
          <div>
            <button onClick={handleSubmit} value={checkPercentage.inputUno} name='porcentajeDef'>5%</button>
            <button onClick={handleSubmit} value={checkPercentage.inputDos} name='porcentajeDef'>10%</button>
            <button onClick={handleSubmit} value={checkPercentage.inputTres} name='porcentajeDef'>15%</button>
            <button onClick={handleSubmit} value={checkPercentage.inputCuatro} name='porcentajeDef'>25%</button>
            <button onClick={handleSubmit} value={checkPercentage.inputCuatro} name='porcentajeDef'>50%</button>
            <input
              type='number'
              value={input.custom}
              name='custom'
              onChange={handleChange}
            />

          </div>
          <form>
            <label>Number of poeple</label>
            <input
              type='number'
              value={input.people}
              name='people'
              onChange={handleChange}
            />
          </form>
          <button onClick={handleClick}>clauclar</button>
        </div>
        <div className='right_container'>
          <p>tip mount {tip}</p>
          <p>total {total}</p>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    </>
  )
}

export default App
