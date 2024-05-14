import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import CryptoJS from 'crypto-js';

export const Route = createLazyFileRoute('/registos')({
  component: Messages,
});

function Registos() {
  const navigate = useNavigate();
  const context = Route.useRouteContext();
  const [textoRegistro, setTextoRegistro] = useState('');
  const [tipoCifra, setTipoCifra] = useState('AES-128-CBC');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Obter a chave de cifra do localStorage
    const chaveCifra = localStorage.getItem('key');

    // Cifrar o texto do registro usando AES-128-CBC
    const textoCifrado = CryptoJS.AES.encrypt(
      textoRegistro,
      chaveCifra,
    ).toString();

    try {
      // Enviar o texto cifrado para o backend
      const response = await axios.post('http://localhost:3000/registos', {
        textoCifrado
      });

      console.log(response.data);
    } catch (error) {
      console.error('Erro ao enviar registro cifrado:', error);
    }
  };

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
  });

  return (
    <div className="h-screen bg-background text-white flex justify-center items-center ">
      {/* Container */}
      <div className="border-2 border-white rounded-xl w-10/12 h-5/6 flex truncate">
        {/* SideBar */}
        <div className="flex-1 border-rig bg-gray-700">
          {/* Barra de Navegação (Nome da APP e Nome do Utilizador) */}
          <div className="flex items-center bg-gray-800 h-18 p-3 justify-between">
            {/* Logo */}
            <span className="font-bold">CANTTOUCHME</span>

        {/* Formulário para inserir registro e selecionar opções de cifra */}
        <form
          action="#"
          method="post"
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          {/* Campo para inserir o texto do registro */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Texto do Registro:
            </label>
            <textarea
              onChange={(e) => setTextoRegistro(e.target.value)}
              className="w-full h-24 px-3 py-2 text-sm text-gray-700 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Insira o texto do registro aqui..."
            ></textarea>
          </div>

          {/* Barra de Pesquisa */}
          <div className="border-b-2 border-style: solid">
            {/* Pesquisar */}
            <div className="p-3">
              {/* searchform */}
              <input
                type="text"
                placeholder="Procure um Utilizador"
                className="border-black text-black font-bold outline-none"
              />
            </div>

            {/* Outras Contas de Utilizadores 1 */}
            <div className="p-3 flex items-center gap-2.5 cursor-pointer hover:bg-gray-800">
              <img src="" className="w-12 h-12 rounded-xl object-cover" />
              {/* userchat */}

              {/* Informação dos Chats 1 */}
              <div>
                <span className="text-lg font-bold">João Carneiro</span>
                <p className="text-sm text-gray-200">
                  Última Mensagem do Utilizador
                </p>
              </div>
            </div>

            {/* Outras Contas de Utilizadores 2 */}
            <div className="p-3 flex items-center gap-2.5 cursor-pointer hover:bg-gray-800">
              <img src="" className="w-12 h-12 rounded-xl object-cover" />
              {/* userchat */}

              {/* Informação dos Chats 2 */}
              <div>
                <span className="text-lg font-bold">João Pinto</span>
                <p className="text-sm text-gray-200">
                  Última Mensagem do Utilizador
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Chat */}
        <div className="flex-1 bg-gray-500">
          {/* Barra de Informação do Chat */}
          <div className="h-12 bg-gray-700 flex items-center justify-between p-3 text-gray-200">
            {/* chatInfo */}
            <span>João Carneiro</span>
            <div className="flex gap-3">
              {/* chatIcons */}
              <BsFillCameraVideoFill className="cursor-pointer h-6" />
              <IoMdPersonAdd className="cursor-pointer h-6" />
              <IoIosMore className="cursor-pointer h-6" />
            </div>
          </div>

          {/* Seleção do tipo de cifra */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Tipo de Cifra:
            </label>
            <select
              value={tipoCifra}
              onChange={(e) => setTipoCifra(e.target.value)}
              className="w-full px-3 py-2 text-sm text-gray-700 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            >
              <option value="AES-128-CBC">AES-128-CBC</option>
              {/* Adicione mais opções de cifra aqui, se necessário */}
            </select>
          </div>

          {/* Input de Texto e Anexo de Imagens */}
          <div className="h-12 bg-white p-3 text-black flex items-center justify-between">
            <input
              type="text"
              placeholder="Escreva uma mensagem de texto"
              className="w-full border-none outline-none text-lg"
            />

            <div className="flex items-center gap-3">
              <GoPaperclip className="h-6 cursor-pointer" />
              <input type="file" style={{ display: 'none' }} id="file" />
              <label htmlFor="file">
                <CiImageOn className="h-6 cursor-pointer" />
              </label>
              <button className="p-1 border-none text-white bg-gray-600 rounded">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
