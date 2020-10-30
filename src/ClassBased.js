import React from "react";
// import $ from "jquery";
import axios from "axios";
import Loader from './Loader'

import CountriesTable from "./CountriesTable";

class ClassBasedCounter extends React.PureComponent {
  state = {
    countriesData: [],
    isLoading:false
  };

  componentDidMount() {
    this.setState({isLoading:true})
    /* fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({ countriesData: data });
      })
      .catch(console.error); */
    /*  $.getJSON("https://restcountries.eu/rest/v2/all", (data) => {
      console.log(data);
      this.setState({ countriesData: data });
    }); */
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((response) => {
        console.log(response);
        this.setState({ countriesData: response.data,isLoading:false });
      })
      .catch(console.error);
  }

  render() {
    return !this.state.isLoading ? (
      <CountriesTable data={this.state.countriesData} />
    ) : <Loader/>;
  }
}

export default ClassBasedCounter;
