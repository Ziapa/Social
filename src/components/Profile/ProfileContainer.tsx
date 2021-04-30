import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {reducerPropsType, setProfile} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {profileAPI} from "../../DAL/API";

type PropsType = reducerPropsType & RouteComponentProps<{ userId: string }>

export class ProfileContainer extends React.Component<PropsType> {


    componentDidMount() {

        let userId = this.props.match.params.userId

        profileAPI.getUserData(userId)
            .then((res) => {
                this.props.setProfile(res.data)
            })
    }

    componentDidUpdate() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = "12411"
        }

        profileAPI.getUserData(userId)
            .then((res) => {
                this.props.setProfile(res.data)
            })
    }

    render() {
        return <Profile profile={this.props.profile}/>
    }
}

const mapSateToProps = (state: AppStateType)  => ({
    profile: state.profilePage.profile
})


export default withRouter(connect(mapSateToProps, {setProfile})(ProfileContainer))

