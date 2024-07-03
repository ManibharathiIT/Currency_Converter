import { useEffect, useState } from "react"
import axios from "axios";
const Currency_Converter = () => {
  const [amount,setAmount]=useState(1);
  const [fromCurrency,setFromCurrency]=useState("USD");
  const [toCurrency,setToCurrency]=useState("INR");
  const [convertedAmount,setConvertedAmount]=useState(null);
  const [exchangeRate,setExchangeRate]=useState(null);

useEffect(()=>{
    const getExchangeRate = async () =>{
        try{
            let url=`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;
            const response=await axios.get(url);
            setExchangeRate(response.data.rates[toCurrency]);
        }catch(error){
            console.error("Error fetching exchange rate:",error);
        }
    };
    getExchangeRate();
},[fromCurrency,toCurrency]);

useEffect(()=>{
    if(exchangeRate!==null){
        setConvertedAmount(amount * exchangeRate);   
     }
     
},[amount,exchangeRate]);

const handleFromCurrency=(e)=>{
    setFromCurrency(e.target.value);
}

const handleToCurrency=(e)=>{
    setToCurrency(e.target.value);
}
  return (
    <div className="currency-converter">
        <div className="data">
        <h1>Currency Converter</h1>
        <div className="input-container">
            <label htmlFor="amt">Amount:</label>
            <input type="number" name="" id="amt" value={amount} onChange={(e)=>setAmount(e.target.value)}/>
        </div>
        <div className="input-container">
            <label htmlFor="from-currency">From Currency:</label>
            <select name="" id="from-currency" value={fromCurrency} onChange={handleFromCurrency}>
                <option value="USD">USD - United States Dollar</option>
                <option value="EUR">EUR - Euro</option>
                <option value="GBP">GBP - British Pound Sterlings</option>
                <option value="JPY">JPY - Japanese Yen</option>
                <option value="AUD">AUD - Australian Dollar</option>
                <option value="CAD">CAD - Canadian Dollar</option>
                <option value="CNY">CNY - Chinese Yuan</option>
                <option value="INR">INR - Indian Rupee</option>
                <option value="BRL">BRL - Brazilian Real</option>
                <option value="ZAR">ZAR - South African Rand</option>
            </select>
        </div>
        <div className="input-container">
            <label htmlFor="to-currency">To Currency:</label>
            <select name="" id="to-currency" value={toCurrency} onChange={handleToCurrency}>
                <option value="USD">USD - United States Dollar</option>
                <option value="EUR">EUR - Euro</option>
                <option value="GBP">GBP - British Pound Sterlings</option>
                <option value="JPY">JPY - Japanese Yen</option>
                <option value="AUD">AUD - Australian Dollar</option>
                <option value="CAD">CAD - Canadian Dollar</option>
                <option value="CNY">CNY - Chinese Yuan</option>
                <option value="INR">INR - Indian Rupee</option>
                <option value="BRL">BRL - Brazilian Real</option>
                <option value="ZAR">ZAR - South African Rand</option>
            </select>
        </div>
        <div className="result">
            <p>{amount} {fromCurrency} is equal to {convertedAmount} {toCurrency}</p>
        </div>
        </div>
    </div>
  )
}

export default Currency_Converter
