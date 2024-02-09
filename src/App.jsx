import { TextField,Stack,Button } from '@mui/material'
import './App.css'
import { useState } from 'react'


function App() {

//create state to store data
const [interest,setInterest] = useState(0)
const [principle,setPrinciple] = useState(0)
const [rate,setRate] = useState(0)
const [year,setYear] = useState(0)


      const [pricipleAmountValid,setPrincipleAmountVaild] = useState(true)
      const[rateAmountVaild,setRateAmountVaild] = useState(true)
      const[yearAmountVaild,setYearAmountVaild] =useState(true)

      console.log(principle);


const handleReset = () => {
  //reset all state
  setInterest(0)
  setPrinciple(0)
  setRate(0)
  setYear(0)
  setPrincipleAmountVaild(true)
  setRateAmountVaild(true)
  setYearAmountVaild(true)
}

    const handleValidation =(tag) =>{
      console.log("inside handleValidation");
      const {value,name} = tag
      console.log(value,name);
      console.log(typeof value);
      console.log( !! value.match(/^[0-9]*.?[0-9]+$/));
      if(value.match(/^\d*\.?\d+$/)){
        //valid
        if(name=='principle'){
          setPrinciple(value)
setPrincipleAmountVaild(true)
        }else if(name=='rate'){
          setRate(value)
 setRateAmountVaild(true)
        }else{
          setYear(value)
 setYearAmountVaild(true)
        }
      }else{
        //invalid
        if(name=='principle'){
          setPrinciple(value)
setPrincipleAmountVaild(false)
        }else if(name=='rate'){
          setRate(value)
setRateAmountVaild(false)
        }else{
          setYear(value)
setYearAmountVaild(false)
        }
      }
    }

              const handleCalulate=()=>{
                if(principle && rate && year){
                  setInterest(principle*year*rate/100)
                }else{
                  alert("please fill the form completely")
                }
              }

  return (
    <div style={{width:'100%',height:'100vh'}} className='d-flex justify-content-center align-items-center bg-dark' >    
        <div style={{width:'600px'}} className='bg-light p-2 rounded text-center'>
      <h1> <b>Simple interest ApP</b></h1>
      <p>calculate your simple interest</p>
      <div className='d-flex justify-content-center bg-warning p-2 rounded shadow flex-column text-light'>
      <h1>₹ {interest} </h1>
      <p className='fw bolder'>total simple interest</p>
      </div>

      <form className='mt-5'>
        {/* {principle} */}
        
          <div className='mb-3'>
          <TextField className='w-100' id="outlined-basic-principle" label="₹ priciple amount" variant="outlined" value={principle || ""} name='principle' onChange={e=>handleValidation(e.target)} />

          </div>
          { !pricipleAmountValid && <div className='text-danger mb-3'>*invaild priciple amount</div>}

        {/* {rate} */}
        <div className='mb-3'>
          <TextField className='w-100' id="outlined-basic-rate" label="Rate of interest (p.a)%" variant="outlined" value={rate || ""} name='rate' onChange={e=>handleValidation(e.target)} />

          </div>
          { !rateAmountVaild && <div className='text-danger mb-3'>*invaild Rate amount</div>}
        
        {/* {time} */}
        <div className='mb-3'>
          <TextField className='w-100' id="outlined-basic-time" label="Time period(yr)" variant="outlined" value={year || ""} name='year' onChange={e=>handleValidation(e.target)} />

          </div>
          { !yearAmountVaild && <div className='text-danger mb-3'>*invaild year input</div>}
        {/* {btn collection} */}
        <Stack direction="row" spacing={2}>
        <Button onClick={handleCalulate} disabled={!pricipleAmountValid || !rateAmountVaild|| !yearAmountVaild} style={{width:'50%',height:'70px'}} className='bg-dark' variant="contained">Calculate</Button>
          <Button onClick={handleReset} style={{width:'50%',height:'70px'}} className='bg-white rounded' variant="outlined">Reset</Button>
        </Stack>

      </form>


      </div>
    </div>
  )
}

export default App
