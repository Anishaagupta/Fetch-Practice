import React, { memo, useState, useEffect } from "react";
import CountriesTable from "./CountriesTable";
import Loader from './Loader';

// import $ from "jquery";
// import axios from "axios";

let FunctionBasedCounter = () => {
  const [countriesData, setCountriesData] = useState({loading:false,data:[],error:''});

  //USe effect as componentDidMount
  useEffect(() => {
    setCountriesData({loading:true,data:[],error:""});
    fetch("https://restcountries.eu/rest/v2/all")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setCountriesData({loading:false,data:data,error:""});
    })
    .catch(error=>setCountriesData({loading:false,data:[],error:error}));

    /* $.getJSON("https://restcountries.eu/rest/v2/all", (data) => {
      console.log(data);
      setCountriesData(data);
    }); */

    /* axios
      .get("https://restcountries.eu/rest/v2/all")
      .then(({ data }) => {
        console.log(data);
        setCountriesData(data);
      })
      .catch(console.error); */
  }, []);

  return !countriesData.loading ? <CountriesTable data={countriesData.data} /> : <Loader/>;
};

FunctionBasedCounter = memo(FunctionBasedCounter);

export default FunctionBasedCounter;
