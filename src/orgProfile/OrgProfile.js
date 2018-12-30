import React, { Fragment } from 'react';
import classNames from 'classnames';

import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';

import Sidebar from 'Common/Sidebar';
import { styles } from 'orgProfile/orgProfileStyles'
import withViewCheck from 'hoc/withViewCheck';

class OrganizationProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarCollapsed: false
    };
  }
  
  toggleCollapse() {
    const { sidebarCollapsed } = this.state;
    this.setState({
      sidebarCollapsed: !sidebarCollapsed
    });
  }
  render() {
    const { classes } = this.props;
    const { sidebarCollapsed } = this.state;
    const toggleCollapse = this.toggleCollapse.bind(this);
    
    return (
      <Fragment>
        <div className={classNames(
          'OrganizationProfilePage',
          classes.root
        )}>
          
          <Grid container>
            {/* Sidebar */}
            <Grid item className={sidebarCollapsed ? classes.sideClose : classes.sideOpen} >
              <Sidebar titleText={"Contents"} collapsed={sidebarCollapsed} toggleCollapse={toggleCollapse} />
            </Grid>
            {/* Body -- adjusts size when sidebar is opened and closed */}
            <Grid
              item
              className={classNames(classes.main,
                sidebarCollapsed ? classes.mainOpen : classes.mainClose
              )}
            >
              {/* Body content */}
              <Grid container>
                <h1>Content goes here</h1>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Fragment>
    )
  }
}

export default withStyles(styles)(withViewCheck()(OrganizationProfile));