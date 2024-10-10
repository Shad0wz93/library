import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Toggle from './toggle';

describe('Toggle Component', () => {
  const mockProps = {
    form: 'rond',
    color: 'blue',
  };

  test('renders the toggle switch with correct classes for form and color', () => {
    render(<Toggle form='rond' color='blue' />);

    // Vérifie que l'élément de type input (checkbox) est présent
    const checkboxElement = screen.getByRole('checkbox');
    expect(checkboxElement).toBeInTheDocument();

    // Vérifie que la classe de couleur est bien appliquée à l'input
    expect(checkboxElement).toHaveClass(mockProps.color);

    // Vérifie que le slider a les bonnes classes pour la forme et la couleur
    const sliderElement = screen.getByRole('slider');
    expect(sliderElement).toHaveClass(mockProps.form);
    expect(sliderElement).toHaveClass(mockProps.color);
  });

  test('renders a toggle with the form carre', () => {
    const propsWithCarre = { ...mockProps, form: 'carre' }; // Testons avec la forme "carre"
    render(<Toggle form='rond' color='blue' />);

    // Vérifie que le slider a la classe "carre"
    const sliderElement = screen.getByRole('slider');
    expect(sliderElement).toHaveClass('carre');
  });

  test('renders a toggle with the color red', () => {
    const propsWithRedColor = { ...mockProps, color: 'red' }; // Testons avec la couleur "red"
    render(<Toggle form='rond' color='blue'/>);

    // Vérifie que l'input a la classe "red"
    const checkboxElement = screen.getByRole('checkbox');
    expect(checkboxElement).toHaveClass('red');
  });
});
