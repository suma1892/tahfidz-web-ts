import { NextPage } from 'next';
import Image from 'next/image';
import React from 'react';

const Footer: NextPage = () => {
  return (
    <footer className="footer" id='footer'>
      <div className="container">
        <div className="footer__row">
          <div className="footer__col-1">
            <div className="footer__contain--img">
              <Image
                src="/icons/whiteTahfidz.png"
                alt="logo image"
                layout='fill'
                objectFit='cover'
              />
            </div>
            <p>Yayasan Istiqomah Tarbiyah Sunnah adalah suatu lembaga yang bergerak di bidang dakwah dan pendidikan Islam berlandaskan Al-qur'an dan As-sunnah di Kota Banjar</p>
          </div>
          <div className="footer__col-2">
            <div className="footer__contact">
              <h3>Kontak Kami</h3>
            </div>
            <div className="footer__contact--items">
              {/* <p>Telepon: 022-202 802 79</p> */}
              <a href='https://api.whatsapp.com/send?phone=6287870378484&' target="_blank" rel="noreferrer">WhatsApp: 087870378484</a>
              <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=istiqomahtarbiyahsunnah@gmail.com&tf=1" target="_blank" rel="noreferrer">Email: istiqomahtarbiyahsunnah@gmail.com</a>
              <p>Alamat: Jl. Dewisartika, No. 81, Parung Lesang, Kelurahan Banjar, Kecamatan Banjar, Kota Banjar, 46322, Jawa Barat</p>
              <p>Buka setiap hari senin - jumat mulai pukul 7:00 - 17:00</p>
            </div>
          </div>
          {/* <div className="footer__col-3">
            <div className="footer__social-media">
              <h3>Media Sosial</h3>
            </div>
            <div className="footer__social-media--items">
              <a href='https://www.facebook.com/yitas/' target="_blank" rel="noreferrer">Instagram: @pondokselerasunda</a>
            </div>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
