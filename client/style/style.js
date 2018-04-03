const STYLE = {
  root: {
    margin: 0,
    padding: 0
  },
  header: {
    width: '100%',
    borderBottom: '1px solid #e5e5e5'
  },
  a: {
   textDecoration: 'none',
    color: 'black'
  }
}

#main {
  max-width: 1000px;
  margin: 0 auto;
}

a {
  text-decoration: none;
  color: black;
}

a:link, a:visited {
  text-decoration: none;
  color: black;
}

#header ul {
  max-width: 1000px;
  list-style-type: none;
  margin: 0 auto;
  overflow: hidden;  
  padding: 0;
}

#header ul li {  
  float: left;
}

#header ul li p {
  margin: 0;
  padding: 15px 0;
  text-align: center;
}

#header ul li a:link {
    text-decoration: none;
    color: black;
}
#header ul li a:visited {
  text-decoration: none;
  color: black;
}

li a:hover {
    text-decoration: none;
}

#header ul li a:active {
    text-decoration: none;
}

#main > button > span {
  padding: 5px;
}

#signin-menu {
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: block;
  max-width: 100px;
  position: fixed;  
}

#signin-menu li {
  display: block;
  padding: 5px 0px;
  width: 125px;
  margin: 0;
  margin-top: -1px;
  text-align: center;
  border: 1px solid #e5e5e5;
}

#main > button {
  padding: 0;
}

.twitterLogIn {
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
}

.menu-item:hover {
  background: #e5e5e5;
}

.hidden {
  display: none;
}

.show {
  display: block;
}

.grey-hover:hover {
  background: #e5e5e5;
}

.createForm {
  width: 100%;
  max-width: 150px;
  margin: auto;
}

.home {
  margin: 50px auto;
  padding: 15px 25px;
  display: block;
  width: 50px;
}

.polls {
  width: 100%;
  max-width: 250px;
  margin: 25px auto;
}
.poll-title {
    /*background: tomato;*/
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

.button-toolbar {
  padding: 10px;
}
*/