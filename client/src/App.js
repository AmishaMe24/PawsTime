import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';


function App() {
  return (
      <div className="App">  
    <header>
    <section className="bookstore-logo">
      
        <img
          src={require('../src/assets/images/image-removebg-preview.png')}
          alt="Another Bookstore Logo"
          width="140px"
          height="140px"
        />
    
            <h1 className = "text-logo">
            <p> <span className="blue">Paws</span><span className="yellow">Time</span></p>
        </h1>
       
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
     {/* -------------BODY----------------------------------------------------- */}
  <main>
            <section className = "home-container" >
            <section className="container-dogimage">
                <div>
                    
                        <img
                            src={require('../src/assets/images/image-removebg-preview (1).png')}
                            alt="suggested"
                            width="800px"
                            height="600px"
                        />
                    
                </div>
            </section>
                <section className = "home-text-right">
                    <h1>
                        "Your Pet's Health and Happiness - All Under One Roof"
                    </h1>
                </section>
            </section>


        </main>
        {/* --------------FOOTER------------------ */}
         <footer className="container">
            <section className="contact-us-directions">
                <p>Contact Us</p>
                <p>Directions</p>
            </section>
            <section className="social-media-icons-copyright">
                {/* <section className = "social-media-icons">
                <FontAwesomeIcon icon={faTwitter} style={{color:'white',fontSize: '25px',padding:'0.2em'}}/>
                <FontAwesomeIcon icon={faInstagram} style={{color:'white',fontSize: '25px',padding:'0.2em'}}/>
                </section> */}

            <section className="copyright" style={{color:'white',padding:'0.2em',position:'relative',bottom:'1px'}}>
                <p>
                    © 2023, PawsTime.com. or its affiliates
                </p>
            </section>

            </section>
        </footer>
  </div>
  

 
    
    
  );
}

export default App;
