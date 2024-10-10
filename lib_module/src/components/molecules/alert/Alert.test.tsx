import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Alert from './Alert';
import {type, message, autoClose, autoCloseTime} from './Alert_data';

test('Alert contains specific item', () => {
  render(<Alert type={type} message={message} autoClose={autoClose} autoCloseTime={autoCloseTime} />);

  const alert = screen.getByTestId('message');
  const item = screen.getByText('Message d\'alerte !');

  expect(alert).toContainElement(item);
});
