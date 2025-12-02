function ProfilePicture({imagePath}) {
    return (
        <div className="profile-wrapper">
            <img className="profile-img" src={imagePath} alt="Profile Picture"/>
        </div>
    )
}
export default ProfilePicture;