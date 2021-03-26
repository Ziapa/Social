import {combineReducers, createStore} from "redux";
import {dialogsReducer} from "./dialogs-reducer";
import {profileReducer} from "./profile-reducer";
import {usersReducer} from "./users-reducer";



let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer
})


type ReducersType = typeof  reducers
export type AppStateType = ReturnType<ReducersType>

export let store = createStore(reducers)

//@ts-ignore

window.store = store