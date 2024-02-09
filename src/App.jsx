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


  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value 
    })
    console.log(input);
    calculo()
  }



  useEffect(() => {
    calculo()
  }, [input.bill, input.porcentajeDef, input.custom, input.people])

  // const handleClick = () => {
  //   calculo()
  // }

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

  const checkPercentage = {
    inputUno: 5,
    inputDos: 10,
    inputTres: 15,
    inputCuatro: 25,
    inputCinco: 50
  };

  return (
    <div className=' flex items-center justify-center pt-32'>
      <div className='bg-white w-3/5 flex flex-row'>
        <div className='w-3/6 '>
          <form className='flex flex-col pb-10'>
            <label className=''>Bill</label>
            <input
            className='px-4 py-2 rounded-lg'
            style={{backgroundColor: "#F3F8FA"}}
              type='number'
              value={input.bill}
              name='bill'
              onChange={handleChange}
            />
          </form>
          <p className='pb-3'>Select Tip %</p>
          <div className='grid gap-4 grid-cols-3 grid-rows-2 pb-10'>
            <button className='w-22 text-white rounded-lg' style={{backgroundColor: "#00474B"}} onClick={handleSubmit} value={checkPercentage.inputUno} name='porcentajeDef'>5%</button>
            <button className='w-22 text-white rounded-lg' style={{backgroundColor: "#00474B"}} onClick={handleSubmit} value={checkPercentage.inputDos} name='porcentajeDef'>10%</button>
            <button className='w-22 text-white rounded-lg' style={{backgroundColor: "#00474B"}}  onClick={handleSubmit} value={checkPercentage.inputTres} name='porcentajeDef'>15%</button>
            <button className='w-22 text-white rounded-lg' style={{backgroundColor: "#00474B"}}  onClick={handleSubmit} value={checkPercentage.inputCuatro} name='porcentajeDef'>25%</button>
            <button className='w-22 text-white rounded-lg' style={{backgroundColor: "#00474B"}}  onClick={handleSubmit} value={checkPercentage.inputCuatro} name='porcentajeDef'>50%</button>
            <input
            className='w-22 p-2 rounded-lg'
            style={{backgroundColor: "#F3F8FA"}}
              type='number'
              value={input.custom}
              name='custom'
              onChange={handleChange}
              placeholder='CUSTOM'
            />

          </div>
          <form className='flex flex-col pb-10'>
            <label>Number of poeple</label>
            <input
            className='px-4 py-2 rounded-lg'
            style={{backgroundColor: "#F3F8FA"}}
              type='number'
              value={input.people}
              name='people'
              onChange={handleChange}
            />
          </form>
        </div>
        <div className='w-3/6' style={{backgroundColor: "#00474B"}}>
        <div className='flex flex-row'>
          <div>
          <p className='text-white'>Tip Amount</p>
          <p className='text-slate-400'>/ person</p>
        </div>
          <div className='pl-10'>
          <p style={{color: "#28BFAC"}}>{tip}</p>
          </div>
        </div>
        k
        <div className='flex flex-row'>
          <div>
          <p className='text-white'>Total</p>
          <p className='text-slate-400'>/ person</p>
        </div>
          <div className='pl-10'>
          <p style={{color: "#28BFAC"}}>{total}</p>
          </div>
        </div>
          <button className='w-4/6 text-white rounded-lg p-2' style={{backgroundColor: "#28BFAC", color: "#00474B"}} onClick={handleReset}>Reset</button>
        </div>
      </div>
    </div>
  )
}

export default App
