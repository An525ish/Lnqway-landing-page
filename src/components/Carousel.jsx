import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Customertestimonial from './Customertestimonial'
import profile1 from '../assets/profile-1.jpg'
import profile2 from '../assets/profile-2.jpg'
import profile3 from '../assets/profile-3.jpg'

function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel variant="dark" activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item className='p-24 md:ml-[25%]'>
                <Customertestimonial
                    name="Andrew"
                    img={profile1}
                    desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti repellat, consequuntur doloribus voluptate esse iure?" />
            </Carousel.Item>
            <Carousel.Item className='p-24 md:ml-[25%]'>
                <Customertestimonial
                    name="Andrew"
                    img={profile2}
                    desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti repellat, consequuntur doloribus voluptate esse iure?" />
            </Carousel.Item>
            <Carousel.Item className='p-24 md:ml-[25%]'>
                <Customertestimonial
                    name="Andrew"
                    img={profile3}
                    desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti repellat, consequuntur doloribus voluptate esse iure?" />
            </Carousel.Item>
        </Carousel>
    );
}

// render(<ControlledCarousel />);

export default ControlledCarousel;
