import { Link } from 'react-router-dom';
import './Header.css';
import { BiCaretLeft, BiShareAlt } from 'react-icons/bi';

const Header = ({title, prePage}) => {
    return (
        <div className='header'>
            <Link to={prePage}>
                <BiCaretLeft />
            </Link>
            {title}
            <div className='share-icon'>
                <BiShareAlt />
            </div>
        </div>

    );
}

export default Header;
