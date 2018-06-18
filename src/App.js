import React, {Component} from 'react';
import {render} from "react-dom";
import logo from './logo.svg';
import './App.css';

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      records: []
    };
  }


  componentDidMount() {
    // fetch data from Rennes open data server 
    fetch("https://data.rennesmetropole.fr/api/records/1.0/search/?dataset=etat-des-stations-le-velo-star-en-temps-reel")
      .then(res => res.json())
      .then(resJson => {
          this.setState({
            isLoaded: true,
            records: resJson.records
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }


  render() {
    // get state data for rendering
    const {
      error,
      isLoaded,
      records
    } = this.state;

    if (error) {
      return <div > Error: {error.message} </div>;
    } else if (!isLoaded) {
      return <div > Loading... </div>;
    } else {
      // tranfer data to react-table component for rendering
      const columns = [{
        Header: 'Location',
        accessor: 'fields.nom' //cycle station location name
      }, {
        Header: 'Cycles available',
        accessor: 'fields.nombreemplacementsdisponibles', 
      }, {
        id: 'recordId', 
        Header: 'Record ID',
        accessor: 'recordid' 
      }]

      // configure table header and data
      var e = < ReactTable  
      data = {
        records
      }
      columns = {
        columns
      }
      />;
      return e;
    }
  }
}

export default App;