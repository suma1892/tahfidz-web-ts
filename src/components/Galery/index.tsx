import type { NextPage } from 'next'
import Image from 'next/image';
import { useRouter } from 'next/router';
const pencil = '/icons/pencil.png';

const Teacher: NextPage = () => {
    const navigation = useRouter();
    
    const handleClick=()=>{
        navigation.push('/gallery')
    }
    return (
        <div className='galery' id='galery'>
            <div className='container'>
                <h5>Dokumentasi</h5>
                <h1>Galeri Al-Istiqomah</h1>
                <h4>Berbagi momen dan pengalaman bersama Yayasan Istiqomah Tarbiyah Sunnah</h4>
            </div>

            <div className='galery-sale container'>
                <div className='galery-sale-content'>
                    <div className='galery-sale-content-img'>
                        <Image
                            width={400}
                            height={300}
                            objectFit="cover"
                            src={pencil}
                            alt="pencil"
                        />
                        <div className='galery-sale-content-img-text'>
                            <h5>Training Courses</h5>
                            <h6>Get Quality Education</h6>
                            <h4>{`We focus on ergonomics and meeting you where you work. It's only a keystroke away.`}</h4>
                        </div>
                        <div className='galery-button'>
                            <h3>Learn More</h3>
                        </div>
                    </div>

                    <div className='galery-sale-content-img'>
                        <Image
                            width={400}
                            height={300}
                            objectFit="cover"
                            src={pencil}
                            alt="pencil"
                        />
                        <div className='galery-sale-content-img-text'>
                            <h5>Our Popular Courses</h5>
                            <h6>Get Quality Education</h6>
                            <h4>{`We focus on ergonomics and meeting you where you work. It's only a keystroke away.`}</h4>
                        </div>
                        <div className='galery-button'>
                            <h3>Learn More</h3>
                        </div>
                    </div>

                    <div className='galery-sale-content-img'>
                        <Image
                            width={400}
                            height={300}
                            objectFit="cover"
                            src={pencil}
                            alt="pencil"
                        />
                        <div className='galery-sale-content-img-text'>
                            <h5>Most Popular Courses</h5>
                            <h6>Get Quality Education</h6>
                            <h4>{`We focus on ergonomics and meeting you where you work. It's only a keystroke away.`}</h4>
                        </div>
                        <div className='galery-button'>
                            <h3>Learn More</h3>
                        </div>
                    </div>
                </div>

                <div className='galery-sale-more' onClick={handleClick}>
                    <p>Lihat Lainnya</p>
                </div>
            </div>
        </div>
    )
}

export default Teacher;