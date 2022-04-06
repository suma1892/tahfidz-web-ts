import type { NextPage } from 'next'
import Image from 'next/image';
import { Header } from '../../components';
const img1 = '/icons/g1.jpeg';

const Galery: NextPage = () => {
  return (
    <div>
      <Header />

      <div className='main-gallery container'>
        <h1>GALLERY KITA</h1>
        <h5>Berikut adalah keseruan yang kita lakukan ketika dalam kegiatan</h5>

        <div className='main-gallery-grid-wrapper'>
          <div className='main-gallery-grid-wrapper-item-1'>
            <Image
              width={200}
              height={200}
              objectFit="cover"
              layout='responsive'
              src={img1}
              alt="img 1"
            />
            <div className='main-gallery-grid-wrapper-item-1-desc'>
              <h1>Acara Hore</h1>
              <h5>acara foto foto anak anak akhwat dengan backgrond awan, wah seru banget</h5>
            </div>
            
          </div>
          <div className='main-gallery-grid-wrapper-item-2'>
            <Image
              width={200}
              height={200}
              objectFit="cover"
              layout='responsive'
              src={img1}
              alt="img 1"
            />
          </div>
          <div className='main-gallery-grid-wrapper-item-3'>
            <Image
              width={200}
              height={200}
              objectFit="cover"
              layout='responsive'
              src={img1}
              alt="img 1"
            />
          </div>
          <div className='main-gallery-grid-wrapper-item-4'>
            <Image
              width={200}
              height={200}
              objectFit="cover"
              layout='responsive'
              src={img1}
              alt="img 1"
            />
          </div>
          <div className='main-gallery-grid-wrapper-item-5'>
            <Image
              width={200}
              height={200}
              objectFit="cover"
              layout='responsive'
              src={img1}
              alt="img 1"
            />
          </div>
          <div className='main-gallery-grid-wrapper-item-6'>
            <Image
              width={200}
              height={200}
              objectFit="cover"
              layout='responsive'
              src={img1}
              alt="img 1"
            />
          </div>
          <div className='main-gallery-grid-wrapper-item-7'>
            <Image
              width={200}
              height={200}
              objectFit="cover"
              layout='responsive'
              src={img1}
              alt="img 1"
            />
          </div>
          <div className='main-gallery-grid-wrapper-item-8'>
            <Image
              width={200}
              height={200}
              objectFit="cover"
              layout='responsive'
              src={img1}
              alt="img 1"
            />
             <div className='main-gallery-grid-wrapper-item-8-desc'>
              <h1>Acara bagi bagi</h1>
              <h5>acara foto foto anak anak akhwat dengan backgrond awan, wah seru banget</h5>
            </div>
          </div>
          <div className='main-gallery-grid-wrapper-item-9'>
            <Image
              width={200}
              height={200}
              objectFit="cover"
              layout='responsive'
              src={img1}
              alt="img 1"
            />
          </div>
          <div className='main-gallery-grid-wrapper-item-10'>
            <Image
              width={200}
              height={200}
              objectFit="cover"
              layout='responsive'
              src={img1}
              alt="img 1"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Galery;
