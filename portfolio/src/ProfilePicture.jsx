import 'C:\Users\Mark Frangainho\Documents\Portfolio\portfolio\src\ProfilePicture.css'; 
function ProfilePicture({imagePath}) {
    return (
        <div className="profile-wrapper">
            <img className="profile-img" src={imagePath} alt="Profile Picture"/>
        </div>
    )
}
export default ProfilePicture;