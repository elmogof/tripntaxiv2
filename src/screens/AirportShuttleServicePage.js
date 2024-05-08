import React, { Component } from 'react'
import Navigation from '../components/Navigation'
import AirportShuttleServiceCards from '../components/AirportShuttleServiceCards'
import ScrollToTop from '../components/ScrollToTop'

export default class AirportShuttleServicePage extends Component {
  state = {
    services: [],
    route: '/airport-shuttle',
  }
  render() {
    return (
      <div className='pt-5 mt-4'>
        <ScrollToTop />
        <Navigation url={this.state.route} />
        <AirportShuttleServiceCards />
      </div>
    )
  }
}
