import grid_Image from '../images/Group.png'

export default function Hero() {
    return(
        <section className="hero">
            <div className='contain-hero-logo'>
                <img className="hero-logo" src={grid_Image} alt='main'/>
            </div>
            <h1 className="hero-header">What is Lorem Ipsum?</h1>
            <p className="hero-text">typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to</p>
        </section>
    )
}