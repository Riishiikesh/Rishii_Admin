import "./user.css"
import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish, } from "@material-ui/icons"
import { Link } from "react-router-dom"

export default function User() {
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="UserTitle">Edit User</h1>
                <Link to="/newUser">
                <button className="userAddButton">Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src="https://images.pexels.com/photos/1839963/pexels-photo-1839963.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""
                            className="userShowImg"
                        />
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">Anna Becker</span>
                            <span className="userShowUserTitle">Software Engineer</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Details</span>
                        <div className="userShowInfo">
                            <PermIdentity className="userShowIcon" />
                            <span className="userShowInfoTitle">annabeck99</span>
                        </div>

                        <div className="userShowInfo">
                            <CalendarToday className="userShowIcon" />
                            <span className="userShowInfoTitle">02/05/2003</span>
                        </div>
                        <span className="userShowTitle">Contact Details</span>

                        <div className="userShowInfo">
                            <PhoneAndroid className="userShowIcon" />
                            <span className="userShowInfoTitle">+91 123 456 6789</span>
                        </div>

                        <div className="userShowInfo">
                            <MailOutline className="userShowIcon" />
                            <span className="userShowInfoTitle">annaback99@gmail.com</span>
                        </div>

                        <div className="userShowInfo">
                            <LocationSearching className="userShowIcon" />
                            <span className="userShowInfoTitle">Danapur Patna | Bihar</span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input 
                                type="text"
                                placeholder="annabeck99" 
                                className="userUpdateInput" 
                                />
                            </div>

                            <div className="userUpdateItem">
                                <label>Full Name</label>
                                <input 
                                type="text"
                                placeholder="Anna Becker" 
                                className="userUpdateInput" 
                                />
                            </div>

                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input 
                                type="text"
                                placeholder="annaback99@gmail.com" 
                                className="userUpdateInput" 
                                />
                            </div>

                            <div className="userUpdateItem">
                                <label>Phone</label>
                                <input 
                                type="text"
                                placeholder="+91 123 456 6789" 
                                className="userUpdateInput" 
                                />
                            </div>

                            <div className="userUpdateItem">
                                <label>Address</label>
                                <input 
                                type="text"
                                placeholder="Danapur Patna | Bihar" 
                                className="userUpdateInput" 
                                />
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img className="userUpdateImg" src="https://images.pexels.com/photos/1839963/pexels-photo-1839963.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                                alt="" />
                                <label htmlFor="file">
                                    <Publish className="userUpdateIcon"/>
                                    </label>
                                <input type="file" id="file" style={{display:"none"}}/>
                            </div>
                            <button className="userUpdateButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
