const { default: Link } = require("next/link")


const NotFound = () => {

    return (
        <div>
            <h2>NOT FOUND</h2>
            <p>The page you are looking for does not exist ! Please GO BACK TO THE HOMEPAGE ! THANK YOU </p>
            <Link href="/">Return Home</Link>
        </div>
    )
}
export default NotFound;