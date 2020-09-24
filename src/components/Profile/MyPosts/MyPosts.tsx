import React from "react";
import s from "./MyPosts.module.scss";
import {Posts} from "./Post/Posts";

export const MyPosts = () => {
    return (<div className={s.myPosts}>
            my posts
            <div>
                <textarea placeholder={"text area"}></textarea>
                <button>add post</button>
            </div>
            <Posts name={"Shana"}
                   time={"10:43"}
                   avatar={"https://www.blexar.com/avatar.png"}
                   message={"privet"} like={123}
                   from={"s.from_them"}/>

            <Posts name={"Dart"}
                   time={"13:54"}
                   avatar={"https://html5css.ru/w3css/img_avatar3.png"}
                   message={"bye"} like={12}
                   from={"s.from_me"}/>
        </div>
    )
}