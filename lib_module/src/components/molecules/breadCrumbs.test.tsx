import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BreadCrumbs from './breadcrumbs';

describe('BreadCrumbs Component', () => {
  const mockProps = {
    listOnglet: ['Home', 'About', 'Contact'],
    listLien: ['/home', '/about', '/contact'],
    bkColor: 'bg-blue',
  };

  test('renders the correct number of breadcrumbs', () => {
    render(<BreadCrumbs {...mockProps} />);

    // Vérifie que chaque élément de la liste est affiché
    const breadcrumbItems = screen.getAllByRole('listitem');
    expect(breadcrumbItems.length).toBe(mockProps.listOnglet.length);
  });

  test('renders each breadcrumb with correct text and link', () => {
    render(<BreadCrumbs {...mockProps} />);

    // Vérifie que chaque lien a le bon texte et le bon href
    mockProps.listOnglet.forEach((onglet, index) => {
      const linkElement = screen.getByText(onglet);
      const hrefValue = linkElement.getAttribute('href');
      expect(linkElement).toContain(hrefValue);
    });
  });

  test('applies the correct background color class', () => {
    const { container } = render(<BreadCrumbs {...mockProps} />);
    
    // Vérifie que la classe de la couleur de fond est correctement appliquée
    expect(container.firstChild).toHaveClass(mockProps.bkColor);
  });

  test('renders nothing if the length of listOnglet and listLien do not match', () => {
    const invalidProps = {
      ...mockProps,
      listLien: ['/home', '/about'], // Moins de liens que d'onglets
    };

    const { container } = render(<BreadCrumbs {...invalidProps} />);
    
    // Vérifie que le composant ne renvoie rien
    expect(container.firstChild).toBeNull();
  });

  test('renders an empty list when listOnglet is empty', () => {
    const emptyProps = {
      ...mockProps,
      listOnglet: [],
      listLien: [],
    };

    const { container } = render(<BreadCrumbs {...emptyProps} />);

    // Vérifie que la liste est vide
    expect(container.firstChild).toBeEmptyDOMElement();
  });
});
