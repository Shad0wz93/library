import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Carousel from './Carousel';
import {images} from './Carousel_data';

// test('Carousel contains specific item', () => {
//   const items = ['Item 1', 'Item 2', 'Item 3'];
//   render(<Carousel images={items} />);

//   const carousel = screen.getByTestId('carousel');
//   const item = screen.getByText('10.png');

//   expect(carousel).toContainElement(item);
// });
test('Carousel contient des images spécifiques', () => {
  render(<Carousel images={images} />);
  
  const carousel = screen.getByTestId('carousel');
  const item = screen.getByAltText('Carousel image 1');
  
  expect(carousel).toContainElement(item);
  });
  