import { Link } from "react-router-dom"

const HeroNav = () => {
  return (
    <>
    <nav className="container">
        <div className="logo">
            <img src="/assets/brand_logo.png" alt="logo" />
        </div>
         <ul>
            <li><Link to = "/" >HOME</Link>  </li>
            <li><Link to = "/Hero" >MENU </Link>  </li>
            <li><Link to = "/Location" >LOCATION </Link>  </li>
            <li><Link to = "/Form" >CONTACT </Link>  </li>
        </ul>
        <button>Login</button>
    </nav> 
   
   
    
       </>
  )
}

export default HeroNav