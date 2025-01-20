import React from 'react';
import './styles/Section.css';
import amrit2 from './Assets/ui.JPG';

const Section = () => {
    return (
        <div className='sections'>
            <div className='sections_container'>
                <div className='section_img'>
                    <img src={amrit2} alt='' />
                </div>

                <div className='section_content'>
                    <div className='content_box'>
                        <h1>Rahul Kumar</h1>
                        <div className='option'>Rahul Kumar, a BCA student at Medhavi Skills University</div>
                        <div className='option'>JavaScript Development</div>
                        <div className='option'>Python</div>
                        <div className='option'>Cyber Security</div>
                        <div className='option'>Cloud</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section;
