import React from 'react'
import tverde from '../media/verde.png'
import henry from '../media/about-us.png'
import Navigation from '../components/Navigation'
import ScrollToTop from '../components/ScrollToTop'
import { useTranslation } from "react-i18next";

export default function AboutUs() {
  const { t } = useTranslation();
  const about = t("about");

  return (
    <>
      <ScrollToTop />
      <Navigation url={'/about-us'} />
      <div className='container-fluid d-flex flex-column mt-5 px-0 py-5 pt-lg-0'>
        <div className='d-none d-lg-inline' style={{ marginBottom: '-7rem' }}>
          <img
            className='float-start decoration'
            src={tverde}
            alt=''
            height='200'
            width='200'
          />
        </div>
        <div className='container-fluid d-flex align-items-center'>
          <div className='col-xl-6 d-none d-xl-flex to-back'>
            <img
              className='img-fluid mx-auto pt-5'
              src={henry}
              alt='foto de don Henry'
            />
          </div>
          <div className='col-xl-6 px-3'>
            <h1
              className='text-center fw-bold mb-3 pt-4 pt-lg-0'
              style={{ color: '#415165' }}
            >
              {about.title}
            </h1>
            <p className='text-justify fs-4' style={{ color: '#415165' }}>
              {about.info[0]}
            </p>
            <p className='text-justify fs-4' style={{ color: '#415165' }}>
              {about.info[1]}
            </p>
            <p className='text-justify fs-4' style={{ color: '#415165' }}>
              {about.info[2]}
            </p>
            <p className='text-justify fs-4' style={{ color: '#415165' }}>
              {about.info[3]}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
