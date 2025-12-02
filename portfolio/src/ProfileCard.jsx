import ProfilePicture from "./profilePicture"
import "./ProfileCard.css";
function ProfileCard() {
    return (
        <div className="profile-card-container">
            <ProfilePicture imagePath={"src/assets/react.svg"}/>
            <div className="profile-intro">
                <h2>Hey, i'm Mark</h2>
                <p>a full-stack developer. </p>
            </div>
        </div>
    )
}
export default ProfileCard