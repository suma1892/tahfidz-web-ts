import type { NextPage } from 'next'
import Image from 'next/image';
const teacher = '/icons/teacher.jpg';
const ig = '/icons/instagram.png';
const fb = '/icons/facebook.png';
const tw = '/icons/twitter.png';

const Courses: NextPage = () => {
    return (
        <div className='courses container'>
            <h5>Team</h5>
            <h1>Our Popular Courses</h1>
            <h4>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </h4>

            <div className='courses-content'>
                {[...Array(4)].map((_, i) => (
                    <div key={i} className='courses-content-box'>
                        <Image
                            width={220}
                            height={220}
                            objectFit="cover"
                            src={teacher}
                            alt=""
                            className='courses-content-box-img'
                        />

                        <h2>Ajeng Cantik</h2>
                        <h5>Guru</h5>

                        <div className='courses-content-box-sosmed'>
                            <Image
                                width={20}
                                height={20}
                                objectFit="contain"
                                src={fb}
                                alt=""
                                // className='courses-content-box-img'
                            />
                            <Image
                                width={20}
                                height={20}
                                objectFit="contain"
                                src={ig}
                                alt=""
                                // className='courses-content-box-img'
                            />
                            <Image
                                width={20}
                                height={20}
                                objectFit="contain"
                                src={tw}
                                alt=""
                                // className='courses-content-box-img'
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Courses