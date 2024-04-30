import React, { Component } from "react";
import ServicesTypesCards from "../components/ServicesTypesCards";
import WhyChooseUsCards from "../components/WhyChooseUsCards";
import Favourite from "../components/Favourite";
import Hero from "../components/Hero";
import CommentsCarousel from "../components/CommentsCarousel";
import Navigation from "../components/Navigation";

export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = { route: "" };
  }

  render() {
    return (
      <>
        <Navigation url={this.state.route} />
        <Hero />
        <ServicesTypesCards />
        <WhyChooseUsCards />
        <Favourite />
        <CommentsCarousel />
      </>
    );
  }
}
