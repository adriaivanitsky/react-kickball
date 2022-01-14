import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import TeamId from './TeamId';

test('should render one team and its players to the page', async () => {
  const container = render(
    <MemoryRouter>
      <TeamId match={{ params: { id: 3 } }} />
    </MemoryRouter>
  );
  await screen.findByText('Lakeville Thunderfeet', 'Deb E. Downer');
  expect(container).toMatchSnapshot();
});
