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
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)

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

  const infoMap = [
    {
      inputId: 1,
      valueInput: 5,
    },
    {
      inputId: 2,
      valueInput: 10,
    },
    {
      inputId: 3,
      valueInput: 15,
    },
    {
      inputId: 4,
      valueInput: 25,
    },
    {
      inputId: 5,
      valueInput: 25,
    },
  ]


  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value
    })
    console.log(input);
  }



  useEffect(() => {
    if (input.bill && input.porcentajeDef && input.people) {
      calculo()
    } else {
      console.log("error");
    }
  }, [input.bill, input.porcentajeDef, input.custom, input.people])

  const handleSubmit = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value
    })
    console.log(input.porcentajeDef);
    setIsClicked(!isClicked)
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

  

  return (
    <div className='flex items-center justify-center pt-24'>
    <div className='bg-white flex flex-col lg:flex-row lg:w-3/5 md:w-[90%] sm:w-[100%] rounded-2xl'>
      <div className='w-[90%] mx-auto mt-8 lg:w-[50%] '>
        <form className='flex flex-col pb-10'>
          <label className='pb-2' style={{ color: "hsl(186, 14%, 43%)" }}>Bill</label>
          <input
            className='px-4 py-2 rounded-lg text-right border border-2 border-gray-100 focus:border-emerald-600 focus:outline-none'
            style={{ backgroundColor: "#F3F8FA", color: "#00474B", fontSize: "24px" }}
            type='number'
            value={input.bill}
            name='bill'
            placeholder='0'
            onChange={handleChange}
          />
        </form>
        <p className='pb-2' style={{ color: "hsl(186, 14%, 43%)" }}>Select Tip %</p>
        <div className='grid gap-4 grid-cols-2 grid-rows-3 md:grid-cols-3 grid-rows-2 pb-10'>
          {infoMap.map((item) => (
            <button className='w-22 text-white text-2xl rounded-md'
              style={{ backgroundColor: isHovered == item.inputId ? " hsl(172, 67%, 45%)" : "#00474B" }}
              onMouseEnter={() => setIsHovered(item.inputId)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={handleSubmit}
              value={item.valueInput}
              name='porcentajeDef'>{item.valueInput}%</button>
          ))}
          <input
            className='w-22 p-2 rounded-md placeholder-emerald-800 border border-2 border-gray-100 focus:border-emerald-600 focus:outline-none'
            style={{ backgroundColor: "#F3F8FA", color: "hsl(185, 41%, 84%)", fontSize: "24px" }}
            type='text'
            value={input.porcentajeDef}
            name='porcentajeDef'
            onChange={handleChange}
            placeholder='Custom'
          />
        </div>
        <form className='flex flex-col pb-10 '>
          <label className='pb-2' style={{ color: "hsl(186, 14%, 43%)" }}>Number of poeple</label>
          <input
            className='px-4 py-2 rounded-lg text-right border border-2 border-gray-100 focus:border-emerald-600 focus:outline-none'
            style={{ backgroundColor: "#F3F8FA", color: "#00474B", fontSize: "24px" }}
            type='number'
            value={input.people}
            name='people'
            placeholder='0'
            onChange={handleChange}
          />
        </form>
      </div>
      <div className='w-[90%] rounded-2xl my-8 mx-auto lg:w-[40%] ' style={{ backgroundColor: "#00474B" }}>
        <div className='mt-12'>
          <div className='flex flex-row place-content-around pb-12'>
            <div>
              <p className='text-white'>Tip Amount</p>
              <p className='text-slate-400'>/ person</p>
            </div>
            <div className='text-3xl pl-10 md:text-4xl lg:text-[46px]'>
              <p style={{ color: "#28BFAC" }}>${tip}</p>
            </div>
          </div>
          <div className='flex flex-row place-content-around'>
            <div>
              <p className='text-white'>Total</p>
              <p className='text-slate-400'>/ person</p>
            </div>
            <div className='text-3xl pl-10 md:text-4xl  lg:text-[46px]'>
              <p style={{ color: "#28BFAC" }}>${total}</p>
            </div>
          </div>
          <div className='flex justify-center pt-12 pb-10 lg:pt-36'>
            <button className='w-5/6 text-white rounded-lg p-2' style={{ backgroundColor: "#28BFAC", color: "#00474B", fontSize: "24px" }} onClick={handleReset}>Reset</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default App
