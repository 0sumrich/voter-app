const STYLE = {
  root: {
    margin: 0,
    padding: 0
  },
  header: {
    width: '100%',
    borderBottom: '1px solid #e5e5e5',
  },
  main: {
    maxWidth: 1000,
    margin: '0 auto'
  },
  headerUL: {
    maxWidth: 1000,
    listStyleType: 'none',
    margin: '0 auto',
    overflow: 'hidden',
    padding: 0
  },
  headerULLIP: {
    margin: 0,
    padding: '15px 0',
    textAlign: 'center'
  },
  a: {
   textDecoration: 'none',
   color: 'black'
  },
  mainButtonSpan: {
    padding: 5
  },
  signInMenu: {
    margin: 0,
    padding: 0,
    listStyleType: 'none',
    display: 'block',
    maxWidth: 100,
    position: 'fixed'
  },
  signInMenuLI: {
    display: 'block',
    padding: '5px 0px',
    width: 125,
    margin: 0,
    marginTop: -1,
    textAlign: 'center',
    border: '1px solid #e5e5e5'
  },
  mainButton: {
    padding: 0
  },
  twitterLogin: {
    background: 'none',
    color: 'inherit',
    border: 'none',
    padding: 0,
    font: 'inherit',
    cursor: 'pointer',
    outline: 'inherit'
  },
  hover: {
    background: '#e5e5e5'
  },
  hidden: {
    display: 'none'
  },
  show: {
    display: 'block'
  },
  createForm: {
    width: '100%',
    margin: 'auto'
  }
}


/*
.polls {
  width: 100%;
  max-width: 250px;
  margin: 25px auto;
}
.poll-title {
    /*background: tomato;*/
/*
    width: 100%;
    padding: 15px 25px;
    margin: 0;
    text-align: center;
    cursor: pointer
}
.poll-body{
  margin: 0;
  border-left: 1px solid #e5e5e5;
  border-right: 1px solid #e5e5e5;
  cursor: pointer;
}

.choices{
  margin: 0;
  padding: 10px;
}

/*style={{height: 45, width: "100%", margin: 0, background: "white", borderLeft: "1px solid #e5e5e5", borderRight: "1px solid #e5e5e5"}*/
/*
.button-toolbar {
  padding: 10px;
}
*/

module.exports=STYLE;