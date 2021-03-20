// import React, { useState} from "react";
// import "./App.css";
// import { BrowserRouter, Switch, Route } from "react-router-dom";
// import Teacher from "./Teacher";
// import Student from "./Student";
// import Login from "../components/Login/Login";
// import Weather from "./Weather";

// function App() {
//   const [token, setToken] = useState();

//   if(!token){
//     return<Login setToken ={setToken}/>
//   }
//   return (
//     <div className="wrapper">
//       <Weather />
//       <h1>Teacher Student Data</h1>
//       <BrowserRouter>
//         <Switch>
//           <Route path="/student">
//             <Student />
//           </Route>
//           <Route path="/teacher">
//             <Teacher />
//           </Route>
//         </Switch>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;

import React from "react";
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/weather";
import Login from "./components/Login/Login";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AuthProvider } from "./Authentication";
class App extends React.Component {

  state = {
    temp: "",
    city: "",
    country: "",
    windspeed: "",
    description: "",
    humidity: "",
    error: "",
  };

  gettingWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    if (city) {
      try {
        const api = await fetch(
          `HTTPS://api.openweathermap.org/data/2.5/weather?q=${city}&appid=279cf0bf5e65a9125bb459b9e958925f&units=metric`
        );
        const data = await api.json();
        const { main, sys, weather, wind, name } = data;
        this.setState({
          temp: Math.round(main.temp),
          city: name,
          country: sys.country,
          windspeed: Math.round(wind.speed),
          description:
            weather[0].description[0].toUpperCase() +
            weather[0].description.slice(1),
          humidity: main.humidity,
          error: "",
        });
      } catch (e) {
        this.setState({
          temp: "",
          city: "",
          country: "",
          windspeed: "",
          description: "",
          humidity: "",
          error: "Enter correct city name",
        });
      }
    } else {
      this.setState({
        temp: "",
        city: "",
        country: "",
        windspeed: "",
        description: "",
        humidity: "",
        error: "Enter city name",
      });
    }
  };
  render() {
    return (
      <div className="wrapper">
        <div className="main">
          <div className="container">
            <Login />
            {/* <AuthProvider>
            <Router>
              <div>
            <Route exact path="/login" component={Login} />
            </div>
            </Router>
            </AuthProvider> */}
            <div className="row">
              <div className="col-sm-5 info">
                <Info />
              </div>
              <div className="col-sm-7 form">
                <Form weatherMethod={this.gettingWeather} />
                <Weather
                  temp={this.state.temp}
                  city={this.state.city}
                  country={this.state.country}
                  windspeed={this.state.windspeed}
                  description={this.state.description}
                  humidity={this.state.humidity}
                  error={this.state.error}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
