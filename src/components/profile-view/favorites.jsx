

export const Favorites = ({ loggedInUser, storedToken }) => {

    console.log(loggedInUser)


fetch(`https://sophia-films.herokuapp.com/user/id/${loggedInUser._id}`, {
    body: JSON.stringify(),
    headers: {
        Authorization: `Bearer ${storedToken}`,
        'Content-Type': 'application/json'
    }
}).then((res) => res.json())

return (
    <h1>Hello</h1>
)

}
