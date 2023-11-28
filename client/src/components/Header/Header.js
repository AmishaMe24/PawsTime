// Header.js
import { Link } from 'react-router-dom';
import '../../assets/css/Header.css';
import { useLogout } from '../../hooks/useLogout.js';
import { useAuthContext } from '../../hooks/useAuthContext.js';
import "./Header.css";
import Navbar from "../SharedFolders/Header/NavBar/NavBar";


const Header = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  }
  const username = user ? user.username : '';

  return (
    <div>
      <header>
        <section className="bookstore-logo">
          <Link to="/" style={{ margin: '0', padding: '0' }}>
            <img
              src={require('../../assets/images/image-removebg-preview.png')}
              alt="Pet Peaves Logo"
              width="130px"
              height="130px"
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
            <section className = "hello-username" style={{display:"flex",flexDirection:"row",justifyContent:"flex-end",gap:"0.5em"}}>
            <section className="text-logout" >Welcome!</section>
            <section className="text-logout-1">{username}</section>
            </section>
          
            <section className="hello-logout">
                <section style={{display:'flex', flexDirection:'column',marginRight:"5px"}}>
                  <Navbar></Navbar>
                  </section>
                <section style={{display:'flex', flexDirection:'column'}}>
                <button onClick={handleClick}>Logout</button>
              </section>
  
        </section>
        </section>
        )}
      </header>
    </div>
  );
}

export default Header;