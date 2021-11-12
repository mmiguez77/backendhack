
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'
import Footer from './Components/Footer/Footer';
import Emprendedor from './Emprendedor/Emprendedor';
import Registrate from './Components/Login/Registrate/Registrate';
import Foro from './Foro/Foro';
import Ciudadano from './Ciudadano/Ciudadano';
import {Bienvenida} from './Components/Bienvenida/Bienvenida'
import RegistroEmprendedor from './Emprendedor/Registro/RegistroEmprendedor';
import Registro2 from './Emprendedor/Registro/Registro2';
import { Registro3 } from './Emprendedor/Registro/Registro3';
import SignInBtn from './Components/Login/LogInRoute/LoginBtn';
import { InnerForo} from './Foro/InnerForo'
import { RegistroIdeas } from './Ciudadano/RegistroIdeas'
import { RegistroIdeas2 } from './Ciudadano/RegistroIdeas2'
import { RegistroIdeas3 } from './Ciudadano/RegistroIdeas3'
import RegistroFinal from './Emprendedor/Registro/RegistroFinal';
import Direccion2 from './Components/Login/Direccion';
import { VistaPreviaReto } from './Emprendedor/Registro/VistaPreviaReto';
import CiudadanoLogin from './Ciudadano/CiudadanoLogin';



function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/Home">
            <Home />
        </Route>
        <Route exact path="/Emprendedor">
            <Emprendedor />
        </Route>
        <Route exact path="/Ciudadano">
            <Ciudadano />
        </Route>
        <Route exact path="/Foro">
            <Foro />
        </Route>
        <Route exact path="/CiudadanoLogin">
          <CiudadanoLogin />
        </Route>
        <Route exact path="/Select">
          <Direccion2 />
        </Route>
        <Route exact path="/Login">
            <Login />
        </Route>
        <Route exact path="/Login2">
            <SignInBtn />
        </Route>
        <Route exact path="/RegistroIdeas2">
          <RegistroIdeas2 />
        </Route>
        <Route exact path="/RegistrarIdeas">
            <RegistroIdeas />
        </Route>
        <Route exact path="/RegistroIdeas3">
            <RegistroIdeas3 />
        </Route>
        <Route exact path="/InnerForo">
            <InnerForo />
        </Route>
        <Route exact path="/Registrate">
            <Registrate />
        </Route>
        <Route exact path="/Bienvenida">
            <Bienvenida />
        </Route>
        <Route exact path="/RegistroReto1">
          <RegistroEmprendedor />
        </Route>
        <Route exact path="/Registro2">
          <Registro2 />
        </Route>
        <Route exact path="/Registro3">
          <Registro3 />
        </Route>
        <Route exact path="/RegistroFinal">
          <RegistroFinal />
        </Route>
        <Route exact path="/VistaPreviaReto">
          <VistaPreviaReto />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App;