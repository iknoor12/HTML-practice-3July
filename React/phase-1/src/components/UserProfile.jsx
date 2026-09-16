export function UserProfile({ name, avatarUrl, bio }){
    return (
        <div>
            <h2>{name}</h2>
            <img src={avatarUrl} alt={name} width="40%" height="100%"/>
            <p>{bio}</p>
        </div>
    )
}