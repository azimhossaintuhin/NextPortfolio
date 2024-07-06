import React from 'react';
// importing component here
import {DirectionAwareHoverDemo}  from '@/components/Project';

// Portfolio Component
const Portfolio: React.FC = (): JSX.Element => {
    return (
        <section id="skills" className="w-full h-dvh mt-32 md:mt-5 px-2">
            <div className="container px-24 ">
                {/* Portfolio */}
                <div className="heading text-center mb-10">
                    <h4 className="text-4xl font-extrabold text-white">My Portfolio</h4>
                    <p className="text-gray-600">Here you can see all my portfolio projects that I have worked on.</p>
                </div >
                {/* content */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                <DirectionAwareHoverDemo />
                <DirectionAwareHoverDemo />
                <DirectionAwareHoverDemo />
                <DirectionAwareHoverDemo />
                <DirectionAwareHoverDemo />
                <DirectionAwareHoverDemo />
          
              </div>
            </div>
        </section>
    );
}

export default Portfolio;
