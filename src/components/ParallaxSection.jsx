import React from 'react';
import { Parallax } from 'react-parallax';

const ParallaxSection = ({ image, strength, content }) => {
    return (
        <Parallax bgImage={image} strength={strength}>
            <div className="h-screen flex items-center justify-center">
                <div className="bg-white bg-opacity-10 p-5 rounded-lg text-center">
                    {content}
                </div>
            </div>
        </Parallax>
    );
};

export default ParallaxSection;
