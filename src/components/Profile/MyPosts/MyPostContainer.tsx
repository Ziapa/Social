import {addPost, updateNewPostText} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {RootStateType} from "../../../redux/store";
import {connect} from "react-redux";


// type MyPostsContainerPropsType = {
//     message: string
//     posts: Array<PostType>
//     dispatch: (action: ActionType) => void
// }
//
//
// export const MyPostsContainer = (props: MyPostsContainerPropsType) => {
//
//     let [error, setError] = useState<string | null>(null)
//     const addPost = () => {
//         if (props.message.trim()) {
//             props.dispatch(addPostAC())
//         } else {
//             setError("Необходимно ввести текст")
//         }
//
//     }
//     const textAddPost = (e: ChangeEvent<HTMLTextAreaElement>) => {
//         let text = e.currentTarget.value
//         props.dispatch(textAddPostAC(text))
//     }
//
//
//     return (<MyPosts
//             addPost={addPost}
//             posts={props.posts}
//             message={props.message}
//             updateNewPostText={textAddPost}
//         />
//     )
// }


let mapSateToProps = (state: RootStateType) => {
    return {
        posts: state.profilePage.posts,
        message: state.profilePage.changeTextNewPost
    }
}



export const MyPostsContainer = connect(mapSateToProps, {addPost, updateNewPostText })(MyPosts);