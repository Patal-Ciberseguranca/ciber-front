import { createFileRoute, redirect, useNavigate } from '@tanstack/react-router';
import { useAuth } from '@/components/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';

export const Route = createFileRoute('/registos')({
  beforeLoad: ({ context }) => {
    
  },
  component: Registos,
});

function Registos() {
  const navigate = useNavigate(); 
  const context = Route.useRouteContext();

  useEffect(() => {
    if (!context.auth.isAuthenticated) {
      toast.error('Tens de Iniciar Sessão Primeiro!', {
        position: 'bottom-center',
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: 'dark',
      });
      setTimeout(() => {
        navigate({
          to: '/login',
        });
      }, 1500);
    }
  })

  return (
    <div className="flex bg-background text-white">
      <ToastContainer /> 
      {/* Barra Esquerda Lateral */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-semibold mb-4">Registro Cifrado</h1>

        {/* Formulário para inserir registro e selecionar opções de cifra */}
        <form
          action="#"
          method="post"
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          {/* Campo para inserir o texto do registro */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Texto do Registro:
            </label>
            <textarea
              className="w-full h-24 px-3 py-2 text-sm text-gray-700 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Insira o texto do registro aqui..."
            ></textarea>
          </div>

          {/* Selecionar Chave de Cifra */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Chave de Cifra:
            </label>
          </div>

          {/* Seleção do tipo de cifra */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Tipo de Cifra:
            </label>
            <select
              id="tipo-cifra"
              name="tipo-cifra"
              className="w-full px-3 py-2 text-sm text-gray-700 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            >
              <option value="AES-128-CBC">AES-128-CBC</option>
              {/* Adicione mais opções de cifra aqui, se necessário */}
            </select>
          </div>

          {/* Botão para cifrar */}
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Cifrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
