// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col } from 'react-materialize';
// Importando css e scss
import './stylesheet/features-content.scss';
import img from './img/celular2.png';


//importando componentes

//Content
const FeaturesContent = () => (
    <div>
        <div className="features-content content" id="toFeatures">
            <div className="dc-titulo">
                <h2>Por quê ter presença Digital?</h2>
                <div className="title-underline"></div>
            </div>
            <Row>
                <Col m={8} s={12}>
                    <div className="fc-box">
                        <div id="feature1" className="fc-features">
                            <span><i className="fa fa-at"></i></span>
                            <h3>Feature 1</h3>
                            <p>texto que explica o objetivo ou o benefício da feature 1.</p>
                        </div>
                        <div id="feature2" className="fc-features">
                            <span><i className="fa fa-bar-chart"></i></span>
                            <h3>Feature 2</h3>
                            <p>texto que explica o objetivo ou o benefício da feature 2.</p>
                        </div>
                        <div id="feature3" className="fc-features">
                            <span><i className="fa fa-cloud"></i></span>
                            <h3>Feature 3</h3>
                            <p>texto que explica o objetivo ou o benefício da feature 3.</p>
                        </div>
                        <div id="feature4" className="fc-features">
                            <span><i className="fa fa-code"></i></span>
                            <h3>Feature 4</h3>
                            <p>texto que explica o objetivo ou o benefício da feature 4.</p>
                        </div>
                    </div>
                </Col>
                <Col m={4} s={12}>
                    <div className="fc-img">
                        <img src={img} title="" alt=""></img>
                    </div>
                </Col>
            </Row>
        </div>    
    </div>    
);

export default FeaturesContent;