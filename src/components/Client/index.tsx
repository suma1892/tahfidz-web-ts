import type { NextPage } from 'next'
import Image from 'next/image';
import { useEffect, useState } from 'react';
const logo = '/icons/whiteTahfidz.png';

type Props = {
    limit?: Number,
    text?: String,
}

const Client: NextPage<Props> = ({ limit = 100, text = `Yayasan Istiqomah Tarbiyah Sunnah adalah suatu lembaga yang bergerak 
di bidang dakwah dan pendidikan Islam berlandaskan Al-qur\'an dan As-sunnah di Kota Banjar. Secara resmi YITAS berdiri 
tahun 2019 dan sudah melahirkan lembaga pendidikan Islam yaitu Rumah Belajar Al-Istiqomah, TQUD Al-Istiqomah dan SD Islam Al-Istiqomah 
yang akan dibuka pertama kali pada tahun ajaran 2021/2022. Sejak tahun 2019 hingga saat ini lembaga pendidikan Al-Istiqomah 
sudah memiliki lebih dari 100 santri dan telah meluluskan satu angkatan yang InsaaAllah berkualitas dan berakhlaqul karimah.` }) => {

    const isExpandable = text.length > limit;
    const [viewText, setViewText] = useState(
        isExpandable ? text.slice(0, 101) : text
    );
    const [isMedium, setIsMedium] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const isExpanded = text.length === viewText.length;

    useEffect(() => {
        setIsMobile(window.innerWidth < 600);
        setIsMedium(window.innerWidth < 995);

        const handleResize = () => {
            setIsMobile(window.innerWidth < 600);
            setIsMedium(window.innerWidth < 995);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className='client container'>
            {/* <div className='client-visitor'>
                <div>
                    <h1>15K</h1>
                    <h5>Happy Customers</h5>
                </div>

                <div>
                    <h1>15K</h1>
                    <h5>Monthly Visitors</h5>
                </div>

                <div>
                    <h1>15K</h1>
                    <h5>Countries  Worldwide</h5>
                </div>

                <div>
                    <h1>15K</h1>
                    <h5>Top Partners</h5>
                </div>
            </div> */}

            <div className='client-description'>
                <div>
                    <div className='red-line2' />
                    <h1>Selayang Pandang YITAS</h1>
                    <h5>{isMobile ? viewText: text}</h5>
                    {(isExpandable && isMobile) ? <h6 onClick={() => setViewText(isExpanded ? text.slice(0, 101) : text)}>{isExpanded ? "show less" : "show more"}
                    </h6>: ''}

                </div>
                <Image
                    width={1000}
                    height={1000}
                    objectFit="contain"
                    src={logo}
                    alt=""
                />
            </div>
        </div>
    )
}

export default Client;
