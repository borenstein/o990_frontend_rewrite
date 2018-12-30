export const styles = theme => ({
  root: {
    ...theme.open990.pageContainer,
    padding: '0 1.75rem 0 0'
  },
  cardHeader: {
    ...theme.open990.pageHeader
  },
  contactList: {
    justifyContent: 'space-evenly'
  },
  table: {
    paddingTop: '1.5rem',
  },
  paper: {
    wordBreak: 'break-word',
    backgroundColor: theme.color.white,
    boxShadow: `0 2px 4px 0 ${theme.color.background.desaturated}`,
    borderRadius: 0,
    height: '100%',
    maxWidth: 'none',
    margin: 0,
    minWidth: '13rem'
  },
  text: {
    padding: '1rem 1.8rem',
    lineHeight: 1.5,
    '& p': {
      textAlign: 'left',
      display: 'flex',
      margin: 0,
      textTransform: 'inherit'
    }
  },
  sideOpen: {
    width: '25%',
    backgroundColor: theme.color.white,
    transition: 'width 0.5s ease',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      marginRight: 0
    },
    '& .slider': {
      width: '24%'
    }
  },
  sideClose: {
    transition: 'width 0.5s ease',
    width: '3%',
    '& .slider':  {
      width: '2%'
    }
  },
  main: {
    padding: '0 0 1.75rem 0',
    transition: 'width 0.5s ease'
  },
  mainOpen: {
    width: '97%'
  },
  mainClose: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'column-reverse',
    width: '75%',
    '&>div': {
      width: '98%',
      marginLeft: '2%'
    },
    [theme.breakpoints.down('lg')]: {
      '& table, & #periods': {
        fontSize: '0.82rem',
        '&>div': {
          padding: '0.8rem 2.38rem'
        }
      }
    }
  },
  loaderWrapper: {
    left: 0,
    top: 0,
    height: '75vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  tableLoader: {
    paddingTop: '1rem'
  }
});