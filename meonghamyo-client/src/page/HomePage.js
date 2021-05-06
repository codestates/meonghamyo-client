import '../component/css/HomePage.css'
import { Link } from "react-router-dom";
function HomePage() {


    return (
        <div className='home'>
            <div className='gotopacelout'>
                <Link className='str' to='/parcelout'><div className='str'>분 양</div></Link>
            </div>
            <div className='gotocommunity'>
                <Link className='str' to='/community'><div className='str'>커뮤니티</div></Link>
            </div>
        </div>
        )
}

export default HomePage;