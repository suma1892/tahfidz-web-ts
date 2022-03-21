import type { NextPage } from 'next'
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
const arrowRight = '/icons/right-arrow.png';
const logo = "/icons/whiteTahfidz.png";
const burgerIcon = "/icons/burger-icon.png";
const closeIcon = "/icons/close-icon.png";

const Header: NextPage = () => {
  const [navbar, setNavbar] = useState(false);
  const [isMedium, setIsMedium] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

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

  const changeBackground = () => {
    if (window.scrollY >= 1) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };


  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", changeBackground);
    }

    return () => window.removeEventListener("scroll", changeBackground)
  }, [])


  if (!isMedium) {
    return (
      <div className={`header-${navbar ? 'active' : ''}`}>
        <div className='header-navbar container'>
          <div className='header-navbar-logo'>
            <Image
              width={40}
              height={40}
              objectFit="cover"
              src={logo}
              alt=""
            />
            <h1 className='header-navbar-title'>YITAS</h1>
          </div>
          <div className='header-navbar-menu'>
            <h1>Beranda</h1>
            <h1>Profil</h1>
            <h1>Program</h1>
            <h1>Kontak</h1>
            <h1>Galeri</h1>
            <h1>Artikel</h1>
          </div>

          <div className='header-navbar-button'>
            <h1>JOIN US</h1>
            <Image
              width={15}
              height={15}
              objectFit="contain"
              src={arrowRight}
              alt="arrow right"
            />
          </div>
        </div>

      </div>
    )
  } else {
    return (
      <div className="header-mobile">
        <nav
          className={
            isNavOpen
              ? `header-mobile__navbar-open container`
              : `header-mobile__navbar container`
          }
        >
          <div className="close-btn" onClick={() => setIsNavOpen(!isNavOpen)}>
            <Image
              src={closeIcon}
              alt="icons"
              width={30}
              height={30}
            />
          </div>
          <hr />
          <div className="navbar-list">
            <Link href="/" replace>
              <a>
                <p onClick={() => setIsNavOpen(!isNavOpen)}>Beranda</p>
              </a>
            </Link>
            <Link href="/#our-restaurant" replace>
              <a>
                <p onClick={() => setIsNavOpen(!isNavOpen)}>Profil</p>
              </a>
            </Link>
            <Link href="/#our-menu" replace>
              <a>
                <p onClick={() => setIsNavOpen(!isNavOpen)}>Program</p>
              </a>
            </Link>
            <Link href="/#gallery" replace>
              <a>
                <p onClick={() => setIsNavOpen(!isNavOpen)}>Kontak</p>
              </a>
            </Link>
            <Link href="/#gallery" replace>
              <a>
                <p onClick={() => setIsNavOpen(!isNavOpen)}>Galeri</p>
              </a>
            </Link>
            <Link href="/#gallery" replace>
              <a>
                <p onClick={() => setIsNavOpen(!isNavOpen)}>Artikel</p>
              </a>
            </Link>
            <Link href="/#footer" replace>
              <a>
                <p onClick={() => setIsNavOpen(!isNavOpen)}>Join Us</p>
              </a>
            </Link>
          </div>
        </nav>
        <div className="container">
          <div className="header-mobile__content">
            <div className="header-mobile__content-branding">
              <Link href={'/'} replace>
                <a>
                  <Image src={logo} alt="logo" width={70} height={70} onClick={() => setIsNavOpen(false)} />
                </a>
              </Link>
            </div>
            <div
              className="header-mobile__content-icon"
              onClick={() => setIsNavOpen(!isNavOpen)}
            >
              <Image
                src={burgerIcon}
                alt="icons"
                width={30}
                height={30}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header;