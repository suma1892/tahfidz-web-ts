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
            <p>Pondok Selera Sunda menyediakan berbagai masakan Sunda pilihan di Kota Bandung. Nikmati aneka makanan dan minuman terbaik hanya di Pondok Selera Sunda</p>
          </div>
          <div className="footer__col-2">
            <div className="footer__contact">
              <h3>Kontak Kami</h3>
            </div>
            <div className="footer__contact--items">
              <p>Telepon: 022-202 802 79</p>
              <a href='https://api.whatsapp.com/send?phone=62817365168&' target="_blank" rel="noreferrer">WhatsApp: 0817 365168</a>
              <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=pondokselerasundaofficial@gmail.com&tf=1" target="_blank" rel="noreferrer">Email: pondokselerasundaofficial@gmail.com</a>
              <p>Alamat: Jl. Sukajadi No.246 Bandung</p>
              <p>Buka setiap hari mulai pukul 10:00 - 21:00</p>
            </div>
          </div>
          <div className="footer__col-3">
            <div className="footer__social-media">
              <h3>Media Sosial</h3>
            </div>
            <div className="footer__social-media--items">
              <a href='https://www.instagram.com/pondokselerasunda/' target="_blank" rel="noreferrer">Instagram: @pondokselerasunda</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
