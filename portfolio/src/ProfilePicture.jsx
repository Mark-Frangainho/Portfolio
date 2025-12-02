import "./ProfilePicture.css";
function ProfilePicture({imagePath}) {
    
    console.log("CSS exists?", import.meta.glob("./*.css"));
    
    return (
        <div className="profile-wrapper">
            <img className="profile-img" src={imagePath} alt="Profile Picture"/>
        </div>
        
    )
}
export default ProfilePicture;