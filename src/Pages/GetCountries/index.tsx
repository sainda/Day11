import { useEffect, useState } from "react"
import axiosInstance from "../../Util/axios"
import './index.css'
import SearchForm from "../../Components/SearchForm/Search";
import SelectElement from "../../Components/SelectElement";

interface CountryData {
    name: {
      common: string;
    };
    capital: string;
    flags:{
        png:string;
    }
    population:number;
    region:string;
}
export default function GetAll(){
    const [countries, setCountries] = useState<CountryData[]>([]);
    useEffect(()=>{
        const fetchData=async()=>{
          try{
            const response=await axiosInstance.get('/all')
            console.log('response',response.data)
            setCountries(response.data.slice(0, 20));
          }
          catch(error){
            console.log('err',error)
          }
        }
        fetchData()
    
      },[])
   

      return (
        <>
          {countries.length > 0  ? (
            <div className="countries">
              {countries.map((country, index) => (
                <div key={index} className="countryContainer">
                    <img src={country.flags.png} alt="" className="flagImg" />
                    <p className="name">{country.name.common}</p>
                    <div className="informationContainer">
                        <p className="title">Population: </p>
                        <p className="information">{country.population}</p>
                    </div>
                    <div className="informationContainer">
                        <p className="title">Region: </p>
                        <p className="information">{country.region}</p>
                    </div>
                    <div className="informationContainer">
                        <p className="title">Capital: </p>
                        <p className="information">{country.capital}</p>
                    </div>
                </div>
              ))}
            </div>
          ) : (
            <p>Loading...</p>
          )}

        </>
      );
    
}
