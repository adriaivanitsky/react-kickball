import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Players from './Players.js';

test('should render list of players to the page', async () => {
  const container = render(
    <MemoryRouter>
      <Players />
    </MemoryRouter>
  );
  await screen.findByText('Bennie Jetts', 'Betty Grey');
  expect(container).toMatchSnapshot();
});
