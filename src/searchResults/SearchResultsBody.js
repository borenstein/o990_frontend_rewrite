/*
 * Copyright (c) 2018 990 Consulting, LLC. All rights reserved.
 */

import React from 'react';
import ReactTable from 'react-table';
import { withRouter } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import { styles } from 'searchResults/searchStyles';

class SearchResultsBody extends React.Component {
  state = {
    page: 0,
    caption: '',
    matches: [],
    params: undefined
  };
  
  getDataBasedOnSearchSlug() {
    const { history:{location:{search}}, fetchResults } = this.props; // an interesting piece of syntax
    
    fetchResults(search).then(response => {
      const data = response.data;
      this.setState({
        caption: data.caption,
        matches: data.matches,
        params: data.params
      })
    })
  }
  
  // TODO Do we need both of these?
  componentWillMount() {
    this.getDataBasedOnSearchSlug();
  }
 
  // TODO Do we need both of these?
  componentWillReceiveProps() {
    this.getDataBasedOnSearchSlug();
  }

  renameAllRows(matches) {
    const { renameRow } = this.props;
    return matches.map(renameRow);
  }
  
  getData() {
    const { matches } = this.state;
    if (matches) {
      return this.renameAllRows(matches);
    } else {
      return [];
    }
  }
 
  getOnClickFunction(index) {
    const { history, handleClick } = this.props;
    const { matches } = this.state;
    return () => {
      handleClick(matches, index, history);
    };
  }
  
  render() {
    const {
      classes,
      columns
    } = this.props;
    const { caption } = this.state;
    const data = this.getData();
    
    return (
      <div className="SearchPage">
        <Grid container className={classes.root}>
          <Grid item xs={12}>
            <h3 className={classes.mainTitle}>Nonprofit organization search</h3>
            <p className={classes.subtitle}>
              {caption}
            </p>
          </Grid>
          <Grid item xs={12}>
            <ReactTable
              defaultPageSize={20}
              minRows={2}
              data={data}
              columns={columns}
              className={`${classes.table} -striped`}
              onPageChange={page => this.setState({page})}
              getTrProps={() => {
                return {
                  className: classes.modifyTr
                };
              }}
              getTheadProps={() => {
                return {
                  className: classes.modifyThead
                };
              }}
              getTheadThProps={() => {
                return {
                  className: classes.modifyTh
                };
              }}
              getTableProps={() => {
                return {
                  className: classes.modifyTable
                };
              }}
              getTbodyProps={() => {
                return {
                  className: classes.modifyTbody
                };
              }}
              getTdProps={() => {
                return {
                  className: classes.modifyTd
                };
              }}
              getTrGroupProps={(state, rowInfo) => {
                if (rowInfo && rowInfo.row) {
                  return {
                    className: classes.modifyGroupTr,
                    onClick: this.getOnClickFunction(rowInfo.index)
                  }
                }else{
                  return {}
                }
              }}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(withRouter(SearchResultsBody));
