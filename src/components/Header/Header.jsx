import { Link } from 'react-router-dom';
import './Header.css';
import { BiCaretLeft, BiShareAlt, BiSmile } from 'react-icons/bi';
import { FaArrowRightArrowLeft } from 'react-icons/fa6';
import { BsFillArrowLeftSquareFill } from 'react-icons/bs';

const Header = ({title, prePage}) => {
    return (
        <div className='header'>
            <Link to={prePage}>
                <BsFillArrowLeftSquareFill style={{fontSize:"20px"}}/>
            </Link>
            {title}
            <div className='share-icon'>
                <BiSmile />
            </div>
        </div>

    );
}

export default Header;
