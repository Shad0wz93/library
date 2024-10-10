import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BreadCrumbs from './breadcrumbs';
import React from 'react';
describe('BreadCrumbs component', () => {
  const listOnglet = ['Home', 'About', 'Contact'];
  const listLien = ['/', '/about', '/contact'];
  const bkColor = 'red';

  test('renders breadcrumbs with the correct links and texts', () => {
    const { getByText } = render(<BreadCrumbs listOnglet={listOnglet} listLien={listLien} bkColor={bkColor} />);

    // Vérifie que chaque élément du breadcrumb est rendu avec le bon texte et lien
    listOnglet.forEach((onglet, index) => {
      const linkElement = screen.getByText(onglet);
      expect(linkElement).toBeInTheDocument();
      expect(linkElement).toHaveAttribute('href', listLien[index]);
    });
  });

  test('applies the correct background color class', () => {
    const { container } = render(<BreadCrumbs listOnglet={listOnglet} listLien={listLien} bkColor={bkColor} />);

    // Vérifie que la classe pour le background color est correctement appliquée
    const breadcrumb = container.querySelector('ul.breadcrumb');
    expect(breadcrumb).toHaveClass('red'); // Vérifie si la classe "red" est bien appliquée
  });
});
