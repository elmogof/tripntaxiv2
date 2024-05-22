import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
import logo from '../media/logo-nav.png'
import { HashLink } from 'react-router-hash-link'
import ChangeLanguage from './ChangeLanguage'
import { useTranslation } from "react-i18next";

export default function Navigation({ url }) {
  const { t } = useTranslation();
  const header = t("header");

  return (
    <>
      <Navbar
        collapseOnSelect
        expand='lg'
        variant='dark'
        className='py-1 fixed-top shadow-sm'
        style={{ background: '#415164' }}
      >
        <Navbar.Brand href='/' className='ms-4 ms-lg-5 ps-lg-5'>
          <img
            className='img-fluid'
            src={logo}
            alt='tripntaxi logo'
            width='60'
            height='60'
          />
        </Navbar.Brand>
        <Navbar.Toggle className='me-3' aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse
          id='responsive-navbar-nav'
          className='ms-2 justify-content-end'
        >
          <Nav className='mr-auto pe-5'>
            <Link
              to='/tours'
              className='text-white fs-5 py-2 px-4 text-decoration-none'
            >
              {header[0]}
            </Link>
            <HashLink
              to='/#services'
              className='text-white fs-5 py-2 px-4 text-decoration-none'
            >
              {header[1]}
            </HashLink>
            <Link
              to='/about-us'
              className='text-white fs-5 py-2 px-4 text-decoration-none'
            >
              {header[2]}
            </Link>
            <HashLink
              to={`${url}/#contact`}
              className='text-white fs-5 py-2 px-4 text-decoration-none'
            >
              {header[3]}
            </HashLink>
            <div className='d-flex flex-grow-0 justify-content-end flex-row'>
              <ChangeLanguage />
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}
