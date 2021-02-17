
import { Route, Switch, Link } from 'react-router-dom';
import './App.css';

// Styles
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import green from "@material-ui/core/colors/green";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import HomeIcon from '@material-ui/icons/Home';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TypoGraphy from '@material-ui/core/Typography'
// Components
import React, { Component } from 'react';
import FormLogin from './component/login/Formlogin';
import Home from './page/Home';
import Panier from './component/panier/Panier';
import { Typography } from '@material-ui/core';
import SignIn from './page/SignIn';
import NavBar from './navbar';
import Footer from './component/footer/Footer';


// const useStyles = makeStyles((theme) => ({
//   menuButton: {
//     marginRight: theme.spacing(2)
//   },

//   title: {
//     flexGrow: 1
//   },
//   customColor: {
//     backgroundColor: green[400]
//   },
//   customHeight: {
//     minHeight: 300
//   },
//   offset: theme.mixins.toolbar
// }));


// function App() {

//   return (

//     <div className="App">
//       <header className="App-header">
//         <ul className="nav">
//           {/* Navbar */}
//           <AppBar>
//             <Toolbar>

//               <IconButton
//                 edge="start"
//                 color="inherit"
//                 aria-label="menu"
//               >

//                 <MenuIcon />
//               </IconButton>


//               <Link to={"/signin"}> <AccountCircleIcon /></Link>
//               <IconButton>
//                 <Link to={"/inscription"}> <AccountCircleIcon /></Link>

//               </IconButton>
//               <IconButton>
//                 <Link to={"/panier"}> <AddShoppingCartIcon /></Link>
//               </IconButton>

              // <List component="nav">
              //   <ListItem component="div">

              //     {/* <IconButton>

              // </IconButton> */}

              //     <ListItemText inset>
              //       <TypoGraphy color="inherit" variant="title">
              //         <Link to={"/home"}> <HomeIcon /></Link>
              //       </TypoGraphy>
              //     </ListItemText>

              //     <ListItemText inset>
              //       <TypoGraphy color="inherit" variant="title">
              //         Nos articles
              //  </TypoGraphy>
              //     </ListItemText>


              //     <ListItemText inset>
              //       <TypoGraphy color="inherit" variant="title">
              //         Catégorie
              //  </TypoGraphy>
              //     </ListItemText>

              //   </ListItem >
              // </List>


//             </Toolbar>
//           </AppBar>

//           {/* Les routes */}
// <section className={"App-body"}>

//   <Switch>
//     <Route exact path="/">
//       <Home />
//     </Route>
//     <Route exact path="/inscription">
//       <FormLogin />
//     </Route>
//     <Route exact path="/panier">
//       <Panier />
//     </Route>
//     <Route exact path="/signin">
//       <SignIn />
//     </Route>
//   </Switch>
// </section>
//         </ul>
//       </header>
//     </div>

//   );
// }

// export default App;


class App extends Component {
  render() {
    return (
      <div className="App">
         <NavBar />
{/*         
        <AppBar color="primary" position="static">
          <Toolbar>
            <TypoGraphy variant="title"
              color="inherit"
            >
              DiscountOmatic
           </TypoGraphy>
            <NavBar />
          </Toolbar>
        </AppBar> */}
        <section className={"App-body"}>

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/inscription">
              <FormLogin />
            </Route>
            <Route path="/panier">
              <Panier />
            </Route>
            <Route path="/signin">
              <SignIn />
            </Route>
          </Switch>
        </section>

        <section className={"footer"}>
          <div>
            <Footer/>
          </div>
        </section>
      </div>
    );
  }
}
export default App;
