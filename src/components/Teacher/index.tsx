import type { NextPage } from 'next'
import Image from 'next/image';
const pencil = '/icons/pencil.png';

const Teacher: NextPage = () => {
    return (
        <div className='teacher'>
            <div className='container'>
                <h5>Practice Advice</h5>
                <h1>Our Experts Teacher</h1>
                <h4>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </h4>
            </div>

            <div className='teacher-sale container'>
                <div className='teacher-sale-content'>
                    <div className='teacher-sale-content-img'>
                        <Image
                            width={400}
                            height={300}
                            objectFit="cover"
                            src={pencil}
                            alt="pencil"
                        />
                        <div className='teacher-sale-content-img-text'>
                            <h5>Training Courses</h5>
                            <h6>Get Quality Education</h6>
                            <h4>{`We focus on ergonomics and meeting you where you work. It's only a keystroke away.`}</h4>
                        </div>
                        <div className='teacher-button'>
                            <h3>Learn More</h3>
                        </div>
                    </div>

                    <div className='teacher-sale-content-img'>
                        <Image
                            width={400}
                            height={300}
                            objectFit="cover"
                            src={pencil}
                            alt="pencil"
                        />
                        <div className='teacher-sale-content-img-text'>
                            <h5>Our Popular Courses</h5>
                            <h6>Get Quality Education</h6>
                            <h4>{`We focus on ergonomics and meeting you where you work. It's only a keystroke away.`}</h4>
                        </div>
                        <div className='teacher-button'>
                            <h3>Learn More</h3>
                        </div>
                    </div>

                    <div className='teacher-sale-content-img'>
                        <Image
                            width={400}
                            height={300}
                            objectFit="cover"
                            src={pencil}
                            alt="pencil"
                        />
                        <div className='teacher-sale-content-img-text'>
                            <h5>Most Popular Courses</h5>
                            <h6>Get Quality Education</h6>
                            <h4>{`We focus on ergonomics and meeting you where you work. It's only a keystroke away.`}</h4>
                        </div>
                        <div className='teacher-button'>
                            <h3>Learn More</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Teacher;