import React from "react";
import Navigation from "../Navigation";

const ProfilePage = () => {
    return(
        <>
            <Navigation/>
            <h1>ProfilePage</h1>
            <div className={"row"}>
                <div className={"col-3"}>
                    <img src={"https://www.georgiaaquarium.org/wp-content/uploads/2018/09/beluga-whale-webcam-9.jpg"} className={"img-thumbnail rounded-circle"} width={200} height={200}/>

                </div>
                <div className={"col-9"}>
                    <h2>Username</h2>
                    <h2>Email</h2>
                    <h2>Phone</h2>

                </div>
            </div>
            <button className={"btn btn-primary"}>Edit</button>

            <hr/>

            <h2>Followers</h2>
            <div className={"border border-primary rounded"}>
                <img src={"https://yt3.googleusercontent.com/rPTMAygaSNkMnSRNRscSk8LYA_d_lUSUbVnswtDjYpzz_Xf7WXXvCL4G7eDmgclQqcIJRwwBAw4=s176-c-k-c0x00ffffff-no-rj"} className={"img-thumbnail rounded-circle m-2"} width={75} height={75}/>
                <img src={"https://yt3.googleusercontent.com/rPTMAygaSNkMnSRNRscSk8LYA_d_lUSUbVnswtDjYpzz_Xf7WXXvCL4G7eDmgclQqcIJRwwBAw4=s176-c-k-c0x00ffffff-no-rj"} className={"img-thumbnail rounded-circle m-2"} width={75} height={75}/>
                <img src={"https://yt3.googleusercontent.com/rPTMAygaSNkMnSRNRscSk8LYA_d_lUSUbVnswtDjYpzz_Xf7WXXvCL4G7eDmgclQqcIJRwwBAw4=s176-c-k-c0x00ffffff-no-rj"} className={"img-thumbnail rounded-circle m-2"} width={75} height={75}/>
            </div>

            <h2>Following</h2>
            <div className={"border border-primary rounded"}>
                <img src={"https://yt3.googleusercontent.com/rPTMAygaSNkMnSRNRscSk8LYA_d_lUSUbVnswtDjYpzz_Xf7WXXvCL4G7eDmgclQqcIJRwwBAw4=s176-c-k-c0x00ffffff-no-rj"} className={"img-thumbnail rounded-circle m-2"} width={75} height={75}/>
                <img src={"https://yt3.googleusercontent.com/rPTMAygaSNkMnSRNRscSk8LYA_d_lUSUbVnswtDjYpzz_Xf7WXXvCL4G7eDmgclQqcIJRwwBAw4=s176-c-k-c0x00ffffff-no-rj"} className={"img-thumbnail rounded-circle m-2"} width={75} height={75}/>
                <img src={"https://yt3.googleusercontent.com/rPTMAygaSNkMnSRNRscSk8LYA_d_lUSUbVnswtDjYpzz_Xf7WXXvCL4G7eDmgclQqcIJRwwBAw4=s176-c-k-c0x00ffffff-no-rj"} className={"img-thumbnail rounded-circle m-2"} width={75} height={75}/>

            </div>

            <h2>Favorites</h2>
            <ul className={"list-group"}>
                <li className={"list-group-item"}>Test</li>
                <li className={"list-group-item"}>Test</li>
                <li className={"list-group-item"}>Test</li>
                <li className={"list-group-item"}>Test</li>
                <li className={"list-group-item"}>Test</li>
            </ul>








        </>
    )
}
export default ProfilePage