import React from 'react';
import site from '../assets/gallery/portfolio.png';

const Hero = (props) => {
    return (
        <div className="container">

            <div className="col-xxl-8 px-4 py-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src={site} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                    </div>
                    <div className="col-lg-6">
                        <h1 className="display-5 fw-bold lh-1 mb-3">The Go Crazy Experience in action</h1>
                        <p className="hero-lead">GC Experience is about connecting the stories of brands creatively and engaginly.</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Hero;

