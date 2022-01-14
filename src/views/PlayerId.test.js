import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import PlayerId from './PlayerId.js';

test('should render a player to the page', async () => {
  const container = render(
    <MemoryRouter>
      <PlayerId match={{ params: { id: 1 } }} />
    </MemoryRouter>
  );
  await screen.findByText('Bennie Jetts', 'position: Pitcher');
  expect(container).toMatchSnapshot();
});
