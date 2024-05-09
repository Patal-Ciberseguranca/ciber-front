import { useNavigate, createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/profile')({
  component: Profile,
});

function Profile() {
  const navigate = useNavigate({ from: '/profile' });

  // Função para realizar logout
  const logout = () => {
    // Limpa o token do localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    // Redireciona o usuário para a página de login
    navigate({ to: '/login' }); // Altera para a rota correta da página de login
  };

  return (
    <div>
      <h1> Perfil de </h1>
      <button
        onClick={logout}
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
      >
        Logout
      </button>
    </div>
  );
}
