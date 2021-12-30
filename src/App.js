import React from "react"
import { useState } from "react"
import { getFirestore } from "firebase/firestore"
import { collection, getDocs } from "firebase/firestore";
import app from "./filter";
import { extractQuerystring } from "@firebase/util";

const db = getFirestore();


const App = ()=> {
  const handleSubmit = async(e) =>{
      e.preventDefault()
      var laptops = []
      console.log(ram,hardDisk,ssd,processorBrand,processorCapacityIntel,processorCapacityRyzen,graphicCardCapacity,priceFrom,priceTo,brand,purpose)
      const querySnapshot = await getDocs(collection(db, "laptops"));
      querySnapshot.forEach(doc => laptops.push(doc.data()))
    if(priceTo<priceFrom){
      setError("select valid price range")
    }
    else{
      const result = new Set()

      laptops = laptops.filter(laptop => (parseInt(laptop.price) >= priceFrom && parseInt(laptop.price) <= priceTo))
      brand.length>0 ? laptops= laptops.filter(laptop => brand.includes(laptop.brand)) : <p></p>

      laptops = laptops.filter(laptop => ram.includes(laptop.ram))
      const f2 = laptops.filter(laptop => hardDisk.includes(laptop.hardDisk))
      const f3 = laptops.filter(laptop => ssd.includes(laptop.ssd))
      const f4 = laptops.filter(laptop => processorBrand.includes(laptop.processorBrand))
      // const f6 = laptops.filter(laptop => brand.includes(laptop.brand))
      const f7 = laptops.filter(laptop => purpose.includes(laptop.purpose))
      const f8 = laptops.filter(laptop => graphicCardCapacity.includes(laptop.graphicCardCapacity))
      const f9 = laptops.filter(laptop => processorCapacityIntel.includes(laptop.processorCapacityIntel))
      const f10 = laptops.filter(laptop => processorCapacityRyzen.includes(laptop.processorCapacityRyzen))
      // laptops = laptops.filter(laptop => (parseInt(laptop.price) >= priceFrom && parseInt(laptop.price) <= priceTo))


      laptops.map(value => result.add(value))
      // f1.map(value => result.add(value))
      f2.map(value => result.add(value))
      f3.map(value => result.add(value))
      f4.map(value => result.add(value))
      // f6.map(value => result.add(value))
      f7.map(value => result.add(value))
      f8.map(value => result.add(value))
      f9.map(value => result.add(value))
      f10.map(value => result.add(value))
      // f11.map(value => result.add(value))
      console.log(f2,f3,f4,f7,f8,f9,f10)
     
      setRes(Array.from(result))
      console.log(res)
      
      


    }



    }

  const [ram,setRam] = useState([])
  const [hardDisk, setHarddisk] = useState([])
  const [ssd,setSsd] = useState([])
  const [processorBrand,setProcessorBrand] = useState([])
  const [processorCapacityIntel,setProcessorCapacityIntel] = useState([])
  const [processorCapacityRyzen,setProcessorCapacityRyzen] = useState([])
  const [graphicCardCapacity,setGraphicCardCapacity] = useState([])
  const [priceFrom,setPriceFrom] = useState(0)
  const [priceTo,setPriceTo] = useState(0)
  const [brand,setBrand] = useState([])
  const [purpose,setPurpose] = useState([])
  const [intelFlag, setIntelFlag] = useState(false)
  const [ryzenFlag, setRyzenFlag] = useState(false)
  const [error,setError] = useState("")
  const [res,setRes] = useState([])
const handleRamChange = (e)=>{
  const tempRam = e.target.value
  if(!ram.includes(tempRam))
  ram.push(tempRam)
  else {
    
if (ram.indexOf(tempRam) > -1) {
  ram.splice(ram.indexOf(tempRam), 1)
}
  }
}
const handleProcessorCapacityIntelChange = (e)=>{
  const tempProcessorCapacityIntel = e.target.value
  if(!processorCapacityIntel.includes(tempProcessorCapacityIntel))
  processorCapacityIntel.push(tempProcessorCapacityIntel)
  else {
    
if (processorCapacityIntel.indexOf(tempProcessorCapacityIntel) > -1) {
  processorCapacityIntel.splice(processorCapacityIntel.indexOf(tempProcessorCapacityIntel), 1)
}
  }
}
const handleSSDChange = (e) => {
  const tempssd = e.target.value
  if(!ssd.includes(tempssd))
  ssd.push(tempssd)
  else {
    
if (ssd.indexOf(tempssd) > -1) {
  ssd.splice(ssd.indexOf(tempssd), 1)
}
  }
}
const handleProcessorChange = (e) => {
  const tempProcessor = e.target.value
  
  if(!processorBrand.includes(tempProcessor))
  processorBrand.push(tempProcessor)
  else {
    
if (processorBrand.indexOf(tempProcessor) > -1) {
  processorBrand.splice(processorBrand.indexOf(tempProcessor), 1)
}
  }
  if(processorBrand.includes("intel")) setIntelFlag(true) 
  if(processorBrand.includes("ryzen")) setRyzenFlag(true)
  if(!processorBrand.includes("intel")){ setIntelFlag(false)
    setProcessorCapacityIntel([])
  } 
  if(!processorBrand.includes("ryzen")){ setRyzenFlag(false)
    setProcessorCapacityRyzen([])
  }
}
const handleProcessorCapacityRyzenChange = (e) =>{
  const tempProcessorCapacityRyzen = e.target.value
  if(!processorCapacityRyzen.includes(tempProcessorCapacityRyzen))
  processorCapacityRyzen.push(tempProcessorCapacityRyzen)
  else {
    
if (processorCapacityRyzen.indexOf(tempProcessorCapacityRyzen) > -1) {
  processorCapacityRyzen.splice(processorCapacityRyzen.indexOf(tempProcessorCapacityRyzen), 1)
}
  }
}
const handleHarddiskChange = (e)=>{
  const temphardDisk = e.target.value
  if(!hardDisk.includes(temphardDisk))
  hardDisk.push(temphardDisk)
  else {
    
if (hardDisk.indexOf(temphardDisk) > -1) {
  hardDisk.splice(hardDisk.indexOf(temphardDisk), 1)
}
  }
}
const handleGraphicChange = (e) =>{
  const tempGraphic = e.target.value
  if(!graphicCardCapacity.includes(tempGraphic))
  graphicCardCapacity.push(tempGraphic)
  else {
    
if (graphicCardCapacity.indexOf(tempGraphic) > -1) {
  graphicCardCapacity.splice(graphicCardCapacity.indexOf(tempGraphic), 1)
}
  }
}
const handlePriceFrom = (e) =>{
  setPriceFrom(parseInt(e.target.value))
}
const handlePriceTo = (e) => {
  setPriceTo(parseInt(e.target.value))
}
const handleBrandChange =  (e) =>{
  const tempBrand = e.target.value
  if(!brand.includes(tempBrand))
  brand.push(tempBrand)
  else {
    
if (brand.indexOf(tempBrand) > -1) {
  brand.splice(brand.indexOf(tempBrand), 1)
}
  }
}

const handlePurposeChange = (e) => {
  const tempPurpose = e.target.value
  if(!purpose.includes(tempPurpose))
  purpose.push(tempPurpose)
  else {
    
if (purpose.indexOf(tempPurpose) > -1) {
  purpose.splice(purpose.indexOf(tempPurpose), 1)
}
  }
}

  return (
    <div>
    
      <form onSubmit={handleSubmit}>

      <label > Select ram</label>
    <input type="checkbox" id="2GB" name="ram" value="2GB" onChange={handleRamChange}/>
<label htmlFor="ram"> 2GB</label>
<input type="checkbox" id="4GB" name="ram" value="4GB" onChange={handleRamChange}/>
<label htmlFor="ram"> 4GB</label>
<input type="checkbox" id="8GB" name="ram" value="8GB" onChange={handleRamChange}/>
<label htmlFor="ram"> 8GB</label>
<input type="checkbox" id="16GB" name="ram" value="16GB" onChange={handleRamChange}/>
<label htmlFor="ram"> 16GB</label><br/>

{/* ---------------------------------- */}
<label>Select hard disk</label>
<input type="checkbox" id="128GB" name="hdd" value="128GB" onChange={handleHarddiskChange}/>
<label htmlFor="hdd"> 128GB</label>
<input type="checkbox" id="256GB" name="hdd" value="256GB" onChange={handleHarddiskChange}/>
<label htmlFor="hdd"> 256GB</label>
<input type="checkbox" id="512GB" name="hdd" value="512GB" onChange={handleHarddiskChange}/>
<label htmlFor="hdd"> 512GB</label>
<input type="checkbox" id="1GB" name="hdd" value="1TB" onChange={handleHarddiskChange}/>
<label htmlFor="hdd"> 1TB</label><br/>


<label>Select SSD</label>
<input type="checkbox" id="128GB" name="SSD" value="128GB"  onChange={handleSSDChange}/>
<label htmlFor="hdd"> 128GB</label>
<input type="checkbox" id="256GB" name="SSD" value="256GB" onChange={handleSSDChange}/>
<label htmlFor="hdd"> 256GB</label>
<input type="checkbox" id="512GB" name="SSD" value="512GB" onChange={handleSSDChange}/>
<label htmlFor="hdd"> 512GB</label>
<input type="checkbox" id="1GB" name="SSD" value="1GB" onChange={handleSSDChange}/>
<label htmlFor="hdd"> 1GB</label><br/>


{/* <! -- ------------------------------------------------------------------ 
--> */}

<label>Processor Brand</label>
<input type="checkbox" id="intel" name="processor-brand" value="intel" onChange={handleProcessorChange}/>
<label htmlFor="processor-brand"> intel</label>
<input type="checkbox" id="ryzen" name="processor-brand" value="ryzen" onChange={handleProcessorChange}/>
<label htmlFor="processor-brand"> ryzen</label><br/>

{/* <!-- ---------------------------------------------------------------------------- --> */}
{
  intelFlag ? <div>
  <label>Processor capacity</label>
  <input type="checkbox" id="i3" name="processor-capacity" value="i3" onChange={handleProcessorCapacityIntelChange}/>
  <label htmlFor="processor-capacity"> i3</label>
  <input type="checkbox" id="i5" name="processor-capacity" value="i5" onChange={handleProcessorCapacityIntelChange}/>
  <label htmlFor="processor-capacity"> i5</label>
  <input type="checkbox" id="i7" name="processor-capacity" value="i7" onChange={handleProcessorCapacityIntelChange}/>
  <label htmlFor="processor-capacity"> i7</label>
  <input type="checkbox" id="i9" name="processor-capacity" value="i9" onChange={handleProcessorCapacityIntelChange}/>
  <label htmlFor="processor-capacity"> i9</label>
  <input type="checkbox" id="i11" name="processor-capacity" value="i11" onChange={handleProcessorCapacityIntelChange}/>
  <label htmlFor="processor-capacity"> i11</label><br/>
  </div>  : <div></div>
}

{/* <!-- ---------------------------------------------------------------- --> */}

{
  ryzenFlag ? <div>
  <label>Processor capacity</label>
<input type="checkbox" id="ryzen3" name="processor-capacity" value="ryzen3"  onChange={handleProcessorCapacityRyzenChange}/>
<label htmlFor="processor-capacity">ryzen3</label>
<input type="checkbox" id="ryzen5" name="processor-capacity" value="ryzen5"  onChange={handleProcessorCapacityRyzenChange}/>
<label htmlFor="processor-capacity"> ryzen5</label>
<input type="checkbox" id="ryzen7" name="processor-capacity" value="ryzen7"  onChange={handleProcessorCapacityRyzenChange}/>
<label htmlFor="processor-capacity"> ryzen7</label><br/>
  </div> : <div></div>
}




{/* <!-- ----------------------------------------------------------------------------- --> */}

<label>Graphic card capacity</label>
<input type="checkbox" id="2GB" name="graphic-card-capacity" value="2GB" onChange={handleGraphicChange}/>
<label htmlFor="graphic-card-capacity">2GB</label>
<input type="checkbox" id="4GB" name="graphic-card-capacity" value="4GB" onChange={handleGraphicChange}/>
<label htmlFor="graphic-card-capacity"> 4GB</label>
<input type="checkbox" id="6GB" name="graphic-card-capacity" value="6GB" onChange={handleGraphicChange}/>
<label htmlFor="graphic-card-capacity"> 6GB</label><br/>


{/* <!-- ----------------------------------------------------------------------------------- --> */}

<label htmlFor="price">Select price range:</label>

<select name="price-from" id="from" onChange={handlePriceFrom}>
  <option value="15000" >15000</option>
  <option value="20000" >20000</option>
  <option value="25000" >25000</option>
  <option value="30000" >30000</option>
  <option value="35000" >35000</option>
  <option value="40000" >40000</option>
  <option value="45000" >45000</option> 
</select><label> to</label>
<select name="price-to" id="to"  onChange={handlePriceTo}>
    <option value="20000" >20000</option>
    <option value="25000" >25000</option>
    <option value="30000" >30000</option>
    <option value="35000" >35000</option>
    <option value="40000" >40000</option>
    <option value="45000" >45000</option> 
    <option value="50000" >50000</option> 
    <option value="55000" >55000</option>
    <option value="60000" >600000</option>
    <option value="65000" >650000</option>
    <option value="70000" >700000</option>
    <option value="75000" >750000</option>
    <option value="80000" >800000</option> 
    <option value="85000" >850000</option> 
    <option value="90000" >90000</option> 
  </select>
  {/* <!-- ----------------------------------------------------------------------------------- --> */}


  <label htmlFor="brand">Select brand:</label>
  
  <input type="checkbox" id="asus" name="asus" value="asus" onChange={handleBrandChange}/>
  <label htmlFor="brand"> Asus</label>
  <input type="checkbox" id="dell" name="dell" value="dell" onChange={handleBrandChange}/>
  <label htmlFor="brand"> dell</label>
  <input type="checkbox" id="acer" name="acer" value="acer" onChange={handleBrandChange}/>
  <label htmlFor="brand"> acer</label>
  <input type="checkbox" id="lenovo" name="lenpovo" value="lenovo" onChange={handleBrandChange}/>
  <label htmlFor="brand"> lenovo</label>
  <input type="checkbox" id="msi" name="msi" value="msi" onChange={handleBrandChange}/>
  <label htmlFor="brand"> msi</label>
  <input type="checkbox" id="hp" name="hp" value="hp" onChange={handleBrandChange}/>
  <label htmlFor="brand"> hp</label>
  <input type="checkbox" id="apple" name="apple" value="apple" onChange={handleBrandChange}/>
  <label htmlFor="brand"> apple</label><br/>
  
  <label htmlFor="purpose">Select purpose:</label>
  
  <input type="checkbox" id="student" name="student" value="student"  onChange={handlePurposeChange}/>
  <label htmlFor="student"> student</label>
  <input type="checkbox" id="home" name="home" value="home"  onChange={handlePurposeChange}/>
  <label htmlFor="home"> home</label>
  <input type="checkbox" id="professional" name="professional" value="professional"  onChange={handlePurposeChange}/>
  <label htmlFor="professional"> professional</label>
  <h3 color="red">{error ? error : <p></p>}</h3>
  <button type="submit" >submit</button>

  

      
    </form>

     {
       res ? res.map(item => {
        return <div key={item.id}> 
          <h5>{item.name}</h5>
          <p>price: {item.price}</p>
          <h5>{item.brand}</h5>
          <p>Ram: {item.ram}</p>
          <hr/>
          
        
        
        </div> 
       }) : <p></p>
     }

    </div>
  );
}

export default App;
