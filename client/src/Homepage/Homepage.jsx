const Homepage=() => {
    let user=JSON.parse(localStorage.getItem('User'));
    return (
        <div>
        <h1>Welcome to our site!</h1>
        <p>Click on the links above to learn more about us.</p>
        <p>{user.isVerified?'Email Verified':'Email is not verified'}</p>
        </div>
    )
    }
export default Homepage;