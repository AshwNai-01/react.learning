import { useNavigate } from "react-router-dom"

const Hero = () =>{
    const navigate = useNavigate();

const goTOShope = () =>{
    navigate("/Shope")
}

    return(
     <>
        <main className="hero container">
            <div className="hero-content">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
           
            <div className="hero-button">
            <button onClick={goTOShope}>Shop Now</button>

                <button className="cat">Categry</button>
            </div>
            </div>
            <div className="hero-image">
                <img  src="/assets/shoe_image.png" alt="" />
            </div>
        </main >
    </>
    )
}
export default Hero