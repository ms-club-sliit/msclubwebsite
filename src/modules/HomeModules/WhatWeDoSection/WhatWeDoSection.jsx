import React from 'react';
import FlatVector from '../../../assets/flat-illustrations/boardpeople.png';
import './WhatWeDoSection.css';

const WhatWeDoSection = () => (
  <section className="WhatWeDoSectionHome container container-fulid mt-5">
    <h2 className="text-center">
      <strong>What We Do</strong>
    </h2>
    <div className="container">
      <div className="row mt-5 mb-5">
        <div className="col-md-6 col-sm-12">
          <h2>
            <strong>Lorem ipsum</strong>
          </h2>
          <p className="lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elementum at egestas rutrum commodo ultrices
            vitae vel. Velit a scelerisque et pharetra, tincidunt pulvinar amet. Tristique morbi enim urna viverra massa
            vehicula quam.
          </p>
        </div>
        <div className="col-md-6 col-sm-12">
          <img alt="imageFlatVector" className="img-fluid d-none d-md-block" src={FlatVector} />
        </div>
      </div>

      <div className="row mt-5 mb-5">
        <div className="col-md-6 col-sm-12">
          <img alt="imageFlatVector" className="img-fluid d-none d-md-block" src={FlatVector} />
        </div>
        <div className="col-md-6 col-sm-12">
          <h2>
            <strong>Lorem ipsum</strong>
          </h2>
          <p className="lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elementum at egestas rutrum commodo ultrices
            vitae vel. Velit a scelerisque et pharetra, tincidunt pulvinar amet. Tristique morbi enim urna viverra massa
            vehicula quam.
          </p>
        </div>
      </div>

      <div className="row mt-5 mb-5">
        <div className="col-md-6 col-sm-12">
          <h2>
            <strong>Lorem ipsum</strong>
          </h2>
          <p className="lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elementum at egestas rutrum commodo ultrices
            vitae vel. Velit a scelerisque et pharetra, tincidunt pulvinar amet. Tristique morbi enim urna viverra massa
            vehicula quam.
          </p>
        </div>
        <div className="col-md-6 col-sm-12">
          <img alt="imageFlatVector" className="img-fluid d-none d-md-block" src={FlatVector} />
        </div>
      </div>
    </div>
  </section>
);

export default WhatWeDoSection;
