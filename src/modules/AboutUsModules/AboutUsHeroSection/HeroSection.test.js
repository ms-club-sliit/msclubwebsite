/* global describe, test, document, expect */
import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import HeroSection from './HeroSection';

describe('HeroSection', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<HeroSection />, div);
  });

  test('render with correct title', () => {
    const titleText = 'About US';
    render(<HeroSection />);
    expect(screen.queryByText(titleText)).toBeInTheDocument();
  });
});
