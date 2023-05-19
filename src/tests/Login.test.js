import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';

import { renderWithRouter } from './helpers/renderWithRouter';
import Login from '../pages/Login';

describe('Teste da tela de Login', () => {
  test('Se há um título na pagina de login', () => {
    renderWithRouter(<Login />);

    const title = screen.getByRole('heading', { name: /React/i, level: 1 });
    expect(title).toBeInTheDocument();
  });
});
