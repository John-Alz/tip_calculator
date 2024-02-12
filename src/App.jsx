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
    <div className='flex items-center justify-center pt-20 lg:h-full lg:pt-0'>
    <div className='bg-white flex flex-col lg:flex-row lg:w-3/5 md:w-[90%] sm:w-[100%] rounded-2xl'>
      <div className='w-[90%] mx-auto mt-8 lg:w-[50%] '>
        <form className='flex flex-col pb-10 relative'>
          <label className='pb-2' style={{ color: "hsl(186, 14%, 43%)" }}>Bill</label>
          <svg className='absolute inset-y-[45px] left-2 w-6 h-6 m-2 fill-current text-gray-400' xmlns="http://www.w3.org/2000/svg" width="11" height="17"><path fill="#9EBBBD" d="M6.016 16.328v-1.464c1.232-.08 2.22-.444 2.964-1.092.744-.648 1.116-1.508 1.116-2.58v-.144c0-.992-.348-1.772-1.044-2.34-.696-.568-1.708-.932-3.036-1.092V4.184c.56.144 1.012.4 1.356.768.344.368.516.816.516 1.344v.288h1.824v-.432c0-.448-.088-.876-.264-1.284a3.783 3.783 0 00-.744-1.116A4.251 4.251 0 007.54 2.9a5.324 5.324 0 00-1.524-.492V.872H4.288V2.36a5.532 5.532 0 00-1.416.324c-.448.168-.84.392-1.176.672-.336.28-.604.616-.804 1.008-.2.392-.3.844-.3 1.356v.144c0 .96.316 1.708.948 2.244.632.536 1.548.884 2.748 1.044v3.912c-.704-.16-1.248-.472-1.632-.936-.384-.464-.576-1.08-.576-1.848v-.288H.256v.576c0 .464.08.924.24 1.38.16.456.404.88.732 1.272.328.392.744.728 1.248 1.008s1.108.476 1.812.588v1.512h1.728zM4.288 7.424c-.688-.128-1.164-.332-1.428-.612-.264-.28-.396-.644-.396-1.092 0-.464.176-.832.528-1.104.352-.272.784-.448 1.296-.528v3.336zm1.728 5.712V9.344c.768.128 1.328.328 1.68.6.352.272.528.688.528 1.248 0 .544-.196.984-.588 1.32-.392.336-.932.544-1.62.624z"/></svg>
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
        <div className='grid gap-4 grid-cols-2 grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 pb-10'>
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
        <form className='flex flex-col pb-4 relative lg:pb-10'>
          <label className='pb-2' style={{ color: "hsl(186, 14%, 43%)" }}>Number of poeple</label>
          <svg className='absolute inset-y-[45px] left-2 w-6 h-6 m-2 fill-current text-gray-400' xmlns="http://www.w3.org/2000/svg" width="13" height="16"><path fill="#9EBBBD" d="M9.573 7.729c.406 0 .784.07 1.126.209.342.14.639.33.881.569.232.227.438.503.614.82a5.1 5.1 0 01.407.949c.097.312.178.654.242 1.016.062.359.105.699.126 1.011.02.307.031.624.031.945 0 .836-.259 1.512-.768 2.01-.504.492-1.17.742-1.98.742H2.748c-.81 0-1.477-.25-1.98-.742C.259 14.76 0 14.084 0 13.248c0-.322.01-.64.032-.945.02-.312.063-.652.126-1.01.063-.363.144-.705.242-1.017.1-.323.238-.643.407-.948.176-.318.382-.594.613-.821.243-.238.54-.43.882-.57.342-.138.72-.208 1.125-.208.16 0 .313.067.61.265.183.123.397.264.636.421.204.134.48.259.822.372.333.11.671.167 1.005.167a3.19 3.19 0 001.006-.167c.341-.113.618-.238.822-.372l.636-.42c.296-.2.45-.266.61-.266zM6.598 0C7.63 0 8.522.38 9.252 1.129s1.1 1.666 1.1 2.724c0 1.06-.37 1.976-1.1 2.725-.73.75-1.623 1.13-2.654 1.13-1.03 0-1.924-.38-2.653-1.13-.73-.749-1.1-1.666-1.1-2.725 0-1.058.37-1.975 1.1-2.724C4.675.379 5.567 0 6.598 0z"/></svg>
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
