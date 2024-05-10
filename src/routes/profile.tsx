import { createFileRoute, redirect, useNavigate } from '@tanstack/react-router';
import { useAuth } from '@/components/AuthProvider';

export const Route = createFileRoute('/profile')({
  beforeLoad: ({ context }) => {
    if (!context.auth.isAuthenticated) {
      console.log(context.auth);
      throw redirect({
        to: '/login',
      });
    }
  },
  component: Profile,
  //loader: ({ context }) => fetchTodosByUserId(1),
});

// const fetchTodosByUserId = async (userId: Number) => {
//   // const response = await fetch(`/api/todos?userId=${userId}`)
//   // const data = await response.json()
//   // return data
//   console.log(`Fetch data for user id  ${userId}`);
// };

function Profile() {
  const navigate = useNavigate();
  // const navigate = useNavigate({ from: '/profile' });
  const user = useAuth();

  // Função para realizar logout
  // const logout = () => {
  //   // Limpa o token do localStorage
  //   localStorage.removeItem('token');
  //   localStorage.removeItem('userId');
  //   // Redireciona o usuário para a página de login
  //   navigate({ to: '/login' }); // Altera para a rota correta da página de login
  // };

  return (
    <div>
      <h1> Perfil de </h1>
      <button
        onClick={() => {
          user.logOut();
          navigate({ to: '/account' });
        }}
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
      >
        Logout
      </button>
    </div>
  );
}
