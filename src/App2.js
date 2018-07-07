import React, {Component} from 'react';
import './App.css';
import PropTypes from "prop-types";

// Import Material Table

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import TablePagination from '@material-ui/core/TablePagination';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';

var useStaticData = true;
var staticJsonData = {"nhits":83,"parameters":{"dataset":["etat-des-stations-le-velo-star-en-temps-reel"],"timezone":"UTC","rows":10,"format":"json"},"records":[{"datasetid":"etat-des-stations-le-velo-star-en-temps-reel","recordid":"c81ea20d2ee3aa53d46f7bc45d731fd0de8d5d72","fields":{"etat":"En fonctionnement","lastupdate":"2018-06-24T08:18:03+00:00","nombrevelosdisponibles":7,"nombreemplacementsactuels":30,"nom":"République","nombreemplacementsdisponibles":23,"idstation":1,"coordonnees":[48.110026,-1.678037]},"geometry":{"type":"Point","coordinates":[-1.678037,48.110026]},"record_timestamp":"2018-06-24T08:18:00+00:00"},{"datasetid":"etat-des-stations-le-velo-star-en-temps-reel","recordid":"deb7d40bb70ad7ba12728ffbe5e46f37a12db723","fields":{"etat":"En fonctionnement","lastupdate":"2018-06-24T08:18:03+00:00","nombrevelosdisponibles":14,"nombreemplacementsactuels":16,"nom":"Musée Beaux-Arts","nombreemplacementsdisponibles":2,"idstation":10,"coordonnees":[48.109601,-1.67408]},"geometry":{"type":"Point","coordinates":[-1.67408,48.109601]},"record_timestamp":"2018-06-24T08:18:00+00:00"},{"datasetid":"etat-des-stations-le-velo-star-en-temps-reel","recordid":"301edb33dc7276e7346e6cab110788590396bda1","fields":{"etat":"En fonctionnement","lastupdate":"2018-06-24T08:18:03+00:00","nombrevelosdisponibles":17,"nombreemplacementsactuels":28,"nom":"TNB","nombreemplacementsdisponibles":11,"idstation":12,"coordonnees":[48.107748,-1.673711]},"geometry":{"type":"Point","coordinates":[-1.673711,48.107748]},"record_timestamp":"2018-06-24T08:18:00+00:00"},{"datasetid":"etat-des-stations-le-velo-star-en-temps-reel","recordid":"675ff6a8888591acc4fd5098af8c96601dd1562c","fields":{"etat":"En fonctionnement","lastupdate":"2018-06-24T08:18:03+00:00","nombrevelosdisponibles":2,"nombreemplacementsactuels":16,"nom":"Laënnec","nombreemplacementsdisponibles":14,"idstation":14,"coordonnees":[48.106847,-1.665817]},"geometry":{"type":"Point","coordinates":[-1.665817,48.106847]},"record_timestamp":"2018-06-24T08:18:00+00:00"},{"datasetid":"etat-des-stations-le-velo-star-en-temps-reel","recordid":"504deb028297b81a3965a8fa4df959acc99530a9","fields":{"etat":"En fonctionnement","lastupdate":"2018-06-24T08:18:03+00:00","nombrevelosdisponibles":5,"nombreemplacementsactuels":24,"nom":"Charles de Gaulle","nombreemplacementsdisponibles":19,"idstation":17,"coordonnees":[48.105111,-1.677119]},"geometry":{"type":"Point","coordinates":[-1.677119,48.105111]},"record_timestamp":"2018-06-24T08:18:00+00:00"},{"datasetid":"etat-des-stations-le-velo-star-en-temps-reel","recordid":"96288bed7761fcf4f78409acd2968b89a1b24640","fields":{"etat":"En fonctionnement","lastupdate":"2018-06-24T08:18:03+00:00","nombrevelosdisponibles":15,"nombreemplacementsactuels":24,"nom":"Mairie","nombreemplacementsdisponibles":9,"idstation":2,"coordonnees":[48.111624,-1.678757]},"geometry":{"type":"Point","coordinates":[-1.678757,48.111624]},"record_timestamp":"2018-06-24T08:18:00+00:00"},{"datasetid":"etat-des-stations-le-velo-star-en-temps-reel","recordid":"985b9680072408444b6e05524e66ad6c833206fe","fields":{"etat":"En fonctionnement","lastupdate":"2018-06-24T08:18:03+00:00","nombrevelosdisponibles":15,"nombreemplacementsactuels":20,"nom":"Pont de Nantes","nombreemplacementsdisponibles":5,"idstation":20,"coordonnees":[48.102015,-1.684015]},"geometry":{"type":"Point","coordinates":[-1.684015,48.102015]},"record_timestamp":"2018-06-24T08:18:00+00:00"},{"datasetid":"etat-des-stations-le-velo-star-en-temps-reel","recordid":"abd202002491bb30a4da32da56fba3df81c6627a","fields":{"etat":"En fonctionnement","lastupdate":"2018-06-24T08:18:03+00:00","nombrevelosdisponibles":12,"nombreemplacementsactuels":20,"nom":"Oberthur","nombreemplacementsdisponibles":8,"idstation":22,"coordonnees":[48.11355,-1.661858]},"geometry":{"type":"Point","coordinates":[-1.661858,48.11355]},"record_timestamp":"2018-06-24T08:18:00+00:00"},{"datasetid":"etat-des-stations-le-velo-star-en-temps-reel","recordid":"6ffe00ce76302c0ca3447f0b0d4dde4110e80afc","fields":{"etat":"En fonctionnement","lastupdate":"2018-06-24T08:18:03+00:00","nombrevelosdisponibles":1,"nombreemplacementsactuels":10,"nom":"Office de Tourisme","nombreemplacementsdisponibles":9,"idstation":25,"coordonnees":[48.110294,-1.683106]},"geometry":{"type":"Point","coordinates":[-1.683106,48.110294]},"record_timestamp":"2018-06-24T08:18:00+00:00"},{"datasetid":"etat-des-stations-le-velo-star-en-temps-reel","recordid":"a744d812cf8aec47de5486e312ee2a7c5651ea6a","fields":{"etat":"En fonctionnement","lastupdate":"2018-06-24T08:18:03+00:00","nombrevelosdisponibles":14,"nombreemplacementsactuels":19,"nom":"Les Lices","nombreemplacementsdisponibles":5,"idstation":26,"coordonnees":[48.112766,-1.685037]},"geometry":{"type":"Point","coordinates":[-1.685037,48.112766]},"record_timestamp":"2018-06-24T08:18:00+00:00"}]};
var jsonData = null;

const columnData = [
  { id: 'location', numeric: false, disablePadding: true, label: 'Location' },
  { id: 'cycles', numeric: true, disablePadding: false, label: 'Cycles' }
];

function sortAsc(a, b) {
  const fieldMap = { "location": "nom", cycles: "nombreemplacementsdisponibles"};
  const fieldName = fieldMap[this.sortCol];
  var ret = (a.fields[fieldName] < b.fields[fieldName]) ? -1 : 1;
  //console.log(util.inspect(a));
  //console.log(a[this.sortCol]+" < "+b[this.sortCol]+" = "+ret);
  console.log('sort fn col '+this.sortCol+' field '+fieldName);
  return ret;
}

function sortDesc(a, b) {
  return sortAsc.call(this, a, b) * -1;
}

function getSortFn(sortOrder, sortCol) {
  console.log('get sort fn col '+sortCol);
  var sortFn =  sortOrder === 'desc' ? sortDesc : sortAsc;
  return sortFn.bind({sortCol: sortCol});
}

class VelostarTableHead extends React.Component {
  createSortHandler = property => event => {
    console.log('tableHead SortHandlerProp '+property);
    console.log('tableHead SortHandlerEv '+event);
    this.props.onRequestSort(event, property);
  };


  render() {
    const { sortOrder, sortCol } = this.props;

    return (
 
      <TableHead>
 
        <TableRow>
          {/* <TableCell padding="checkbox">
            <Checkbox
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={numSelected === rowCount}
              onChange={onSelectAllClick}
            />
          </TableCell> */}
          {columnData.map(column => {
            return (
              <TableCell
                key={column.id}
                numeric={column.numeric}
                padding={column.disablePadding ? 'none' : 'default'}
                sortDirection={sortCol === column.id ? sortOrder : false}
              >
                <Tooltip
                  title="Sort"
                  placement={column.numeric ? 'bottom-end' : 'bottom-start'}
                  enterDelay={300}
                >
                  <TableSortLabel
                    active={sortCol === column.id}
                    direction={sortOrder}
                    onClick={this.createSortHandler(column.id)}
                  >
                    {column.label}
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
            );
          }, this)}
        </TableRow>
      </TableHead>

    );
  }
}

VelostarTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  sortOrder: PropTypes.string.isRequired,
  sortCol: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};



class VelostarTable extends Component {

  createSortHandler = property => event => {
    console.log('table SortHandlerProp'+property);
    console.log('table SortHandlerEv'+event);
    this.props.onRequestSort(event, property);
  };

  constructor(props) {
    super(props);
    this.state = {
      sortOrder: 'asc',
      sortCol: 'cycles',
      selected: [],
      page: 0,
      rowsPerPage: 10, 

      error: null,
      isLoaded: false,
      records: [],
    };
  }

  componentDidMount() {
    if (useStaticData) {
      jsonData = staticJsonData;
    }
    else {
      // fetch data from Rennes open data server
      fetch("https://data.rennesmetropole.fr/api/records/1.0/search/?dataset=etat-des-stations-le-velo-star-en-temps-reel")
        .then(res => res.json())
        .then(resJson => {
            jsonData = resJson;
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
        );
    }
    this.setState({
      isLoaded: true,
      records: jsonData.records,     
    });
    console.log(jsonData);
    console.log(this.state.records);
  }

  handleRequestSort = (event, property) => {
    const sortCol = property;
    let sortOrder = 'desc';
    console.log('table HandleRequestSortProp '+property);
    console.log('table HandleRequestSortEv '+event);
    if (this.state.sortCol === property && this.state.sortOrder === 'desc') {
      sortOrder = 'asc';
    }

    this.setState({ sortOrder, sortCol }, () => {
      console.log('sort col '+this.state.sortCol);
    });
  };

  handleSelectAllClick = (event, checked) => {
    if (checked) {
      this.setState({ selected: this.state.records.map(record => record.recordid) });
      return;
    }
    this.setState({ selected: [] });
  };

  handleClick = (event, id) => {
    const { selected } = this.state;
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    this.setState({ selected: newSelected });
  };

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  isSelected = id => this.state.selected.indexOf(id) !== -1;

  render() {
    // get state data for rendering
    const {
      error,
      isLoaded,
    } = this.state;

    const { records, sortOrder, sortCol, selected, rowsPerPage, page } = this.state;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, records.length - page * rowsPerPage);
    
    if (error) {
      return <div > Error: {error.message} </div>;
    } else if (!isLoaded) {
      return <div > Loading... </div>;
    } else {


        // configure table header and data
        var e = <Paper>
                  <Typography variant="title" id="tableTitle" gutterBottom>
           Cycle Availability
        </Typography>

                    <Table>

                        <VelostarTableHead
                          numSelected={selected.length}
                          sortOrder={sortOrder}
                          sortCol={sortCol}
                          onSelectAllClick={this.handleSelectAllClick}
                          onRequestSort={this.handleRequestSort}
                          rowCount={records.length}
                        />

            <TableBody striped="true">
              {
                records
                .sort(getSortFn(sortOrder, sortCol))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(record => {
                  const isSelected = this.isSelected(record.recordid);
                  return (
                    <TableRow
                      hover
                      onClick={event => this.handleClick(event, record.recordid)}
                      role="checkbox"
                      aria-checked={isSelected}
                      tabIndex={-1}
                      key={record.recordid}
                      selected={isSelected}
                    >
                      {/* <TableCell padding="checkbox">
                        <Checkbox checked={isSelected} />
                      </TableCell>
                      <TableCell component="th" scope="row" padding="none">
                        {record.name}
                      </TableCell> */}
                      <TableCell>{record.fields.nom}</TableCell>
                      <TableCell numeric>{record.fields.nombreemplacementsdisponibles}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 49 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
            </Table>
                    <TablePagination
                      component="div"
                      count={records.length}
                      rowsPerPage={rowsPerPage}
                      page={page}
                      backIconButtonProps={{
                        'aria-label': 'Previous Page',
                      }}
                      nextIconButtonProps={{
                        'aria-label': 'Next Page',
                      }}
                      onChangePage={this.handleChangePage}
                      onChangeRowsPerPage={this.handleChangeRowsPerPage}
                    />
        </Paper>
        return e;
    }
  }
}



export default VelostarTable;