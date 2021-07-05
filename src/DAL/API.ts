import  axios from "axios";
import {UsersType} from "../redux/users-reducer";

type AxiosGetUsersType = {
    error: string
    items: Array<UsersType>
    totalCount: number
}

export type axiosFollowType = {
    resultCode: number
    messages: []
}

export type axiosGetStatus = {
    Media: string
}

export const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "1bdd3861-bd56-449e-97ed-eaae9759b5f0"
    }
})

export const usersAPI = {

    getUsers(pageActive: number, userPageCount: number) {
        return instance.get<AxiosGetUsersType>(`users?page=${pageActive}&count=${userPageCount}`)
    },
    onPageChanged(pageNumber: number, userPageCount:number) {
        return instance.get(`users?page=${pageNumber}&count=${userPageCount}`)
    },
    follow(userID: number) {
        debugger
        return instance.post<axiosFollowType>(`follow/${userID}`)
    },
    unFollow(userID: number) {
        return instance.delete(`follow/${userID}`)
    }
}

export const authAPI = {
    authMe() {
        return instance.get(`auth/me`)
    }
}

export const profileAPI = {
    getUserData(userId: string) {
        return instance.get(`profile/${userId}`)
    },
    getStatusProfile<axiosGetStatus>(userId: number) {
        return instance.get(`/profile/status/${userId}`)
            }
}



