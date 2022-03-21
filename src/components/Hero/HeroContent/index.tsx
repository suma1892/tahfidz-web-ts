
import type { NextPage } from 'next'
import Image from 'next/image';
// import {Meta, Hero} from '../components';
const graduation = '/icons/graduation.png';
const bag = '/icons/bag.png';
const book = '/icons/book.png';
const shape = '/icons/shape.png';

const HeroContent: NextPage = () => {
    return (
        <div className='hero-content container'>
            <h5>join us</h5>
            <h1>25K+ STUDENTS<br />TRUST US</h1>
            <h3>Every day brings with it a fresh set of learning<br />possibilities.</h3>

            <div className='hero-content-button-wrapper'>
                <div className='hero-content-button-wrapper-button1'>
                    <h4>Get Quote Now</h4>
                </div>

                <div className='hero-content-button-wrapper-button2'>
                    <h4>Learn More</h4>
                </div>
            </div>

            <div className='hero-content-shape'>
                <Image
                    width={500}
                    height={500}
                    objectFit="contain"
                    src={shape}
                    alt="graduation"
                />
            </div>

            <div className='hero-content-courses'>
                <div className='hero-content-courses-box'>
                    <Image
                        width={72}
                        height={72}
                        objectFit="cover"
                        src={graduation}
                        alt="graduation"
                    />
                    <h1>Expert instruction</h1>
                    <div className='red-line' />
                    <h3>The gradual accumulation of information about atomic and small-scale behaviour...</h3>
                </div>

                <div className='hero-content-courses-box'>
                    <Image
                        width={72}
                        height={72}
                        objectFit="cover"
                        src={bag}
                        alt="graduation"
                    />
                    <h1>Training Courses</h1>
                    <div className='red-line' />
                    <h3>The gradual accumulation of information about atomic and small-scale behaviour...</h3>
                </div>

                <div className='hero-content-courses-box'>
                    <Image
                        width={72}
                        height={72}
                        objectFit="cover"
                        src={book}
                        alt="graduation"
                    />
                    <h1>Expert instruction</h1>
                    <div className='red-line' />
                    <h3>The gradual accumulation of information about atomic and small-scale behaviour...</h3>
                </div>
            </div>
        </div>
    )
}

export default HeroContent;
