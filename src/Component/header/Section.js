import React from 'react';
import "./style.css"

const Section = () => {
    return ( 
        <div className='section' >
            <div className='sectionOne'>
                <div className='col-md-6 offset-md-3'>
                    <div className='col-md-6 sectionTxt'>
                        <h1>Lorem ipsum dolor sit.</h1>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum excepturi voluptatem mollitia? </p>
                        <button className='sectionBtn'>Learn More</button>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Section;