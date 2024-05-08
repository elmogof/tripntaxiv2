import React, { Component } from 'react'
import Activities from '../components/Activities'
import TaxiServiceCards from '../components/TaxiServiceCards'
import Navigation from '../components/Navigation'
import ScrollToTop from '../components/ScrollToTop'

export default class TaxiService extends Component {
  state = {
    activitiesData: [],
    services: [],
    route: '/taxi-service',
  }
  render() {
    return (
      <div className='pt-5 mt-4'>
        <ScrollToTop />
        <Navigation url={this.state.route} />
        <Activities />
        <TaxiServiceCards />
      </div>
    )
  }
}
