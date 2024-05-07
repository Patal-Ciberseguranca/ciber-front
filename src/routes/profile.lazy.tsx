import { createLazyFileRoute } from '@tanstack/react-router';
import { useLocation } from 'react-router-dom';

export const Route = createLazyFileRoute('/profile')({
  component: Profile,
});

function Profile() {
  const location = useLocation();
  return (
    <div>
      <h1> Perfil de {location.state.id}</h1>
    </div>
  );
}
