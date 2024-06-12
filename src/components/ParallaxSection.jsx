import React from 'react';
import { Parallax } from 'react-parallax';

const ParallaxSection = ({ image, strength, content }) => {
    return (
        <Parallax bgImage={image} strength={strength} bgImageStyle={{ transition: 'transform 0s ease-out' }}>
            <div className="h-[500px] flex items-center bg-center object-cover justify-center">
                <div className="bg-white bg-opacity-10 p-5 rounded-lg text-center">
                    {content}
                </div>
            </div>
        </Parallax >
    );
};

export default ParallaxSection;
