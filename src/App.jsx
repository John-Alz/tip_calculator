import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [tip, setTip] = useState("0.00")
  const [total, setTotal] = useState("0.00")
  const [input, setInput] = useState({
    bill: "",
    porcentajeDef: "",
    custom: "",
    people: ""
  });

  const calculo = () => {
    let porcentaje = !input.porcentajeDef && input.custom ? input.custom : input.porcentajeDef;
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
    if (input.bill && input.porcentajeDef && input.people) {
      calculo()
    } else {
      console.log("erros");
    }
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
      <div className='bg-white w-3/5 flex flex-row rounded-2xl'>
        <div className='w-2/4 py-10 pl-10'>
          <form className='flex flex-col pb-10'>
            <label className='pb-2' style={{color: "hsl(186, 14%, 43%)"}}>Bill</label>
            <input
            className='px-4 py-2 rounded-lg text-right'
            style={{backgroundColor: "#F3F8FA", color: "#00474B", fontSize: "24px"}}
              type='number'
              value={input.bill}
              name='bill'
              placeholder='0'
              onChange={handleChange}
            />
          </form>
          <p className='pb-2' style={{color: "hsl(186, 14%, 43%)"}}>Select Tip %</p>
          <div className='grid gap-4 grid-cols-3 grid-rows-2 pb-10'>
            <button className='w-22 py-2 text-white text-2xl rounded-md' style={{backgroundColor: "#00474B"}} onClick={handleSubmit} value={checkPercentage.inputUno} name='porcentajeDef'>5%</button>
            <button className='w-22 text-white text-2xl rounded-md' style={{backgroundColor: "#00474B"}} onClick={handleSubmit} value={checkPercentage.inputDos} name='porcentajeDef'>10%</button>
            <button className='w-22 text-white text-2xl rounded-md' style={{backgroundColor: "#00474B"}}  onClick={handleSubmit} value={checkPercentage.inputTres} name='porcentajeDef'>15%</button>
            <button className='w-22 text-white text-2xl rounded-md' style={{backgroundColor: "#00474B"}}  onClick={handleSubmit} value={checkPercentage.inputCuatro} name='porcentajeDef'>25%</button>
            <button className='w-22 text-white text-2xl rounded-md' style={{backgroundColor: "#00474B"}}  onClick={handleSubmit} value={checkPercentage.inputCuatro} name='porcentajeDef'>50%</button>
            <input
            className='w-22 p-2 rounded-md placeholder-emerald-800'
            style={{backgroundColor: "#F3F8FA", color: "hsl(185, 41%, 84%)", fontSize: "24px"}}
              type='text'
              value={input.porcentajeDef}
              name='porcentajeDef'
              onChange={handleChange}
              placeholder='Custom'
            />

          </div>
          <form className='flex flex-col pb-10'>
            <label className='pb-2' style={{color: "hsl(186, 14%, 43%)"}}>Number of poeple</label>
            <input
            className='px-4 py-2 rounded-lg text-right'
            style={{backgroundColor: "#F3F8FA", color: "#00474B", fontSize: "24px"}}
              type='number'
              value={input.people}
              name='people'
              placeholder='0'
              onChange={handleChange}
            />
          </form>
        </div>
        <div className='w-2/5 my-8 ml-14 rounded-2xl' style={{backgroundColor: "#00474B"}}>
        <div className='mt-12'>
          <div className='flex flex-row place-content-around pb-12'>
          <div>
          <p className='text-white'>Tip Amount</p>
          <p className='text-slate-400'>/ person</p>
        </div>
          <div className='pl-10 text-5xl'>
          <p style={{color: "#28BFAC"}}>${tip}</p>
          </div>
        </div>
        <div className='flex flex-row place-content-around'>
          <div>
          <p className='text-white'>Total</p>
          <p className='text-slate-400'>/ person</p>
        </div>
          <div className='pl-10 text-5xl'>
          <p style={{color: "#28BFAC"}}>${total}</p>
          </div>
        </div>
      <div className='flex justify-center pt-36'>
      <button className='w-5/6 text-white rounded-lg p-2' style={{backgroundColor: "#28BFAC", color: "#00474B", fontSize: "24px"}} onClick={handleReset}>Reset</button>
      </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default App
