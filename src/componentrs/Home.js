import react from 'react';
import './all.css';
const Home = () => {
    return(
        <section className="home">
            <h1 className="head2">Hello I'm Hadi</h1>
            <p className="par1">Web Developer</p>
            <p className="par2">Making all dreams true</p>  
            <button className="btn1">View my work</button>
            <div className="content">
                <h1 className="head3">Experince in This Job</h1>
                <div className="experince">
                    <ul>
                        <p className="par3">5 years in front end</p>
                        <p className="par4">5 years in back end</p>
                        <p className="par5">5 years in full stack</p>
                        <p className="par6">5 years in mobile ios & andriod</p>
                    </ul>
                </div>
            </div>
        </section>
    );
}
export default Home;