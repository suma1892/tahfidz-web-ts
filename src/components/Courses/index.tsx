import type { NextPage } from 'next'
import Image from 'next/image';
const teacher = '/icons/teacher.png';
const ig = '/icons/instagram.png';
const fb = '/icons/facebook.png';
const tw = '/icons/twitter.png';

const Courses: NextPage = () => {
    return (
        <div className='courses container'>
            <h5>Our Teams</h5>
            <h1>Divisi YITAS</h1>
            <h4>Mengenal divisi guru dan tenaga pendidik di yayasan istiqomah tarbiyah sunnah</h4>

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

                        <h2>Ajeng</h2>
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