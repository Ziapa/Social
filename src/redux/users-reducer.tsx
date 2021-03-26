export type ActionType =
    | ReturnType<typeof follow>
    | ReturnType<typeof unFollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setUserCount>
    | ReturnType<typeof setPageActive>
    | ReturnType<typeof setFetching>
    | ReturnType<typeof setFetchingFalse>

export type UsersType = {
    id: string
    name: string
    status: string
    photos: PhotoType
    followed: boolean
}


export type PhotoType = {
    small: string
    large: string
}

let initialState = {
    users: [] as Array<UsersType>,
    userCount: 0,
    userPageCount: 100,
    pageActive: 1,
    isFetching: false
}

export type InitialStateUsersType = typeof initialState


export const usersReducer = (state: InitialStateUsersType = initialState, action: ActionType): InitialStateUsersType => {
    switch (action.type) {
        case "SET_FETCHING_TRUE":
            return {
                ...state,
                isFetching: true
            }
        case "SET_FETCHING_FALSE":
            return {
                ...state,
                isFetching: false
            }
        case "SET_USERS":
            return {
                ...state,
                users: action.users
            }
        case "SET_USER_COUNT" :
            return {
                ...state,
                userCount: action.usersCount
            }
        case "SET_PAGE" :
            return {
                ...state,
                pageActive: action.page
            }

        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.usersID) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }

        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.usersID) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        default:
            return state
    }
}


export const follow = (usersID: string) => ({type: "FOLLOW", usersID: usersID}) as const

export const unFollow = (usersID: string) => ({type: "UNFOLLOW", usersID: usersID}) as const

export const setUsers = (users: Array<UsersType>) => ({type: "SET_USERS", users: users}) as const

export const setFetching = () => ({type: "SET_FETCHING_TRUE"}) as const
export const setFetchingFalse = () => ({type: "SET_FETCHING_FALSE"}) as const

export const setPageActive = (page: number) => ({type: "SET_PAGE", page}) as const

export const setUserCount = (usersCount: number) => ({type: "SET_USER_COUNT", usersCount}) as const
