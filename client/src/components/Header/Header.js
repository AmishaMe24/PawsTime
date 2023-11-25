import { Link } from 'react-router-dom'
import '../../assets/css/Header.css';
 
const Header = () => {

  return (
    <div>
    <header>
    <section className="bookstore-logo">
      <Link to="/" style = {{margin:'0',padding:'0'}}>
        <img
          src={require('../../assets/images/image-removebg-preview.png')}
          alt="Another Bookstore Logo"
          width="140px"
          height="140px"
        />
      </Link>
        <Link to = '/' style = {{textDecoration:'none',color :'white',display:'inline-block',margin:'0',padding:'0'}}>
            <h1 className = "text-logo">
            <p> <span className="blue">Paws</span><span className="yellow">Time</span></p>
        </h1>
        </Link>
    </section>
      <section className = "nav-container">
          <section className = "hello-logout">
              <button className="logout-button">Logout</button>
          </section>
          <section className = "header-navigation-to-services">

          </section>
      {/*<section className = "categories-searchbar">*/}
      {/*    /!*<div className="dropdown">*!/*/}
      {/*    /!*    <button className="categories-button">Categories</button>*!/*/}
      {/*    /!*    <FontAwesomeIcon icon={ faCaretDown } style={{color:'#B4D47E',position:'relative',right:'109px',top:'1px'}}/>*!/*/}
      {/*    /!*    /!*<div className="dropdown-content">*!/*!/*/}
      {/*    /!*    /!*    <Link to="/categories">Biography and Autobiography</Link>*!/*!/*/}
      {/*    /!*    /!*    <Link to = "/categories">Children's Books</Link>*!/*!/*/}
      {/*    /!*    /!*    <Link to ="/categories">Spirituality</Link>*!/*!/*/}
      {/*    /!*    /!*    <Link to ="/categories"> Crime</Link>*!/*!/*/}
      {/*    /!*    /!*    <Link to ="/categories">Adventure</Link>*!/*!/*/}
      {/*    /!*    /!*    <Link to ="/categories"> Sci-fi</Link>*!/*!/*/}
      {/*    /!*    /!*</div>*!/*!/*/}
      {/*    /!*</div>*!/*/}
      {/*    <form action="category.html">*/}
      {/*        <input type="text" className="search-bar" placeholder="  Start your search here!"style={{fontFamily:'Battambang'}}/>*/}
      {/*        <FontAwesomeIcon icon={faSearch} style={{position:'relative',right:'26px',top: '1px', color:'green'}}/>*/}
      {/*    </form>*/}
      {/*    <FontAwesomeIcon icon={faShoppingCart} style={{position:'relative',right:'2px',top: '15px', color: 'white', fontSize: '25px'}}/>*/}
      {/*    <div className="cart-item-count" style={{position:'relative',right:'35px',top: '1px'}}>1</div>*/}

      {/*</section>*/}
      </section>
  </header>


    </div>
  );
}

export default Header;