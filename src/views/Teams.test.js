import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Teams from './Teams.js';

test('should render Teams to page', async () => {
  const container = render(
    <MemoryRouter>
      <Teams />
    </MemoryRouter>
  );
  await screen.findByText('Bridge City Sneakers', 'Lakeville Thunderfeet');

  expect(container).toMatchSnapshot();
});
