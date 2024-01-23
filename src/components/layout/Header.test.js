import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Header from './Header';
import { CartProvider } from '../../contexts/cart-context';

test('Header renders ReactMeals', () => {
  render(
    <CartProvider items={[]}>
      <Header />
    </CartProvider>
  );
  const element = screen.getByText('ReactMeals');
  expect(element).toBeInTheDocument();
});
