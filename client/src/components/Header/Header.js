import { Link } from 'react-router-dom'
import '../../assets/css/Header.css';
import { useLogout } from '../../hooks/useLogout.js';
import { useAuthContext } from '../../hooks/useAuthContext.js';

const Header = () => {

  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  }

  return (
    <div>
      <header>
        <section className="bookstore-logo">
          <Link to="/" style={{ margin: '0', padding: '0' }}>
            <img
              src={require('../../assets/images/image-removebg-preview.png')}
              alt="Another Bookstore Logo"
              width="140px"
              height="140px"
            />
          </Link>
          <Link to='/' style={{ textDecoration: 'none', color: 'white', display: 'inline-block', margin: '0', padding: '0' }}>
            <h1 className="text-logo">
              <p> <span className="blue">Paws</span><span className="yellow">Time</span></p>
            </h1>
          </Link>
        </section>
        {user && (
          <section className="nav-container">
            <span>{user.email}</span>
            <section className="hello-logout">
              <button className="logout-button" onClick={handleClick}>Logout</button>
            </section>
            <section className="header-navigation-to-services">

            </section>
          </section>
        )}

      </header>


    </div>
  );
}

export default Header;