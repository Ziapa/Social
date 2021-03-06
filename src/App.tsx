import React from 'react';
import './App.scss';
import {NavBar} from "./components/NavBar/NavBar";
import {Route} from 'react-router-dom';
import {Setting} from "./components/Setting/Setting";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {Login} from "./components/LoginFormik/login";
import HeaderContainer from "./components/Header/HeaderContainer";
import {NewsContainer} from "./components/News/NewsContainer";
import {MusicContainer} from "./components/Music/MusicContainer";


const App = () => {

    return (
        <div className="app-wrapper">
            <HeaderContainer />
            <div className={"body"}>
                <NavBar/>
                <div className={"app-wrapper-content"}>
                    <Route path={"/profile/:userId?"}
                           render={() => <ProfileContainer/>}/>
                    <Route path={"/dialogs"}
                           render={() => <DialogsContainer/>}/>
                    <Route path={"/news"}
                           render={() => <NewsContainer/>}/>
                    <Route path={"/music"}
                           render={() => <MusicContainer/>}/>
                    <Route path={"/settings"}
                           render={() => <Setting/>}/>
                    <Route path={"/users"}
                           render={() => <UsersContainer/>}/>
                    <Route path={"/login"}
                           render={() => <Login/>}/>

                </div>

            </div>
        </div>


    );
}

export default App;
