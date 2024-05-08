import { createLazyFileRoute } from '@tanstack/react-router';
import { useLocation } from 'react-router-dom';

export const Route = createLazyFileRoute('/profile')({
  component: Profile,
});

function Profile() {
  const location = useLocation();
  const history = useHistory();

  // Função para realizar logout
  const logout = () => {
    // Limpa o token do localStorage
    localStorage.removeItem('token');
    // Redireciona o usuário para a página de login
    history.push('/login'); // Altere para a rota correta da página de login
  };

  return (
    <div>
      <h1> Perfil de {location.state.id}</h1>
      <button
        onClick={logout}
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
      >
        Logout
      </button>
    </div>
  );
}
