import logo from './assests/airbnb_logo.png';
import "./Main.css";

const Main = () => {
    return(
        <>
<div className="main">
    <h1>The Evolution of </h1>
    <h1>Airbnb's Frontend </h1>
</div>
<div className='sub'>
    <h3>@spikebrehm</h3></div>
<div className="imgLogo">
 <img src={logo} alt="logo"></img>
</div>
        </>
    );
}

export default Main;