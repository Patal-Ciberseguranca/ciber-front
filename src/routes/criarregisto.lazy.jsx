import { createLazyFileRoute, useNavigate } from '@tanstack/react-router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import CryptoJS from 'crypto-js';
import { fromByteArray, toByteArray } from 'base64-js';

export const Route = createLazyFileRoute('/criarregisto')({
  component: CriarRegistos,
});

function CriarRegistos() {
  const navigate = useNavigate();
  const context = Route.useRouteContext();
  const [isHovered, setIsHovered] = useState(false);
  const [textoRegistro, setTextoRegistro] = useState('');
  const [tipoCifra, setTipoCifra] = useState('AES-128-CBC');
  // Obter a chave de cifra e o username do localStorage
  const chaveCifra = localStorage.getItem('key');
  const username = localStorage.getItem('username');

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const HMAC = async (message, key) => {
    function signString(message, key) {
      return CryptoJS.HmacSHA512(message, key).toString(CryptoJS.enc.Base64);
    }

    const json_payLoad = JSON.stringify(message);
    const signature = signString(json_payLoad, key);

    const textoCifrado = fromByteArray(new TextEncoder().encode(json_payLoad));
    const HMACmsg = fromByteArray(toByteArray(signature));

    return { textoCifrado, HMACmsg };
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (textoRegistro.length == 0) {
      toast.error('O Registo Deve Conter Algo!', {
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
        return;
      }, 1500);
    } else {
      // Cifrar o texto do registro usando AES-128-CBC
      const { textoCifrado, HMACmsg } = await HMAC(
        CryptoJS.AES.encrypt(textoRegistro, chaveCifra).toString(),
        chaveCifra,
      );
      console.log(textoCifrado, HMACmsg);

      try {
        // Enviar o texto cifrado para o backend
        const response = await axios.post('http://localhost:3000/registos', {
          username,
          textoCifrado,
          HMACmsg,
        });
        toast.success('Registo Guardado com Sucesso!', {
          position: 'bottom-center',
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: 'dark',
        });
        console.log(response.data);
      } catch (error) {
        console.error('Erro ao enviar registro cifrado:', error);
      }
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
    <div className="flex bg-background text-white">
      <ToastContainer />
      {/* Barra Esquerda Lateral */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-semibold mb-4">Criar Registos</h1>

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

          {/* Selecionar Chave de Cifra */}
          <div className="mb-4">
            <span className="text-gray-700 text-sm font-bold">
              Chave de Cifra:&nbsp;
              <label
                className="text-gray-700 text-sm font-bold"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{
                  filter: isHovered ? 'none' : 'blur(5px)',
                  transition: 'filter 0.5s',
                  display: 'inline-block',
                }}
              >
                {chaveCifra}
              </label>
            </span>
          </div>

          {/* Seleção do tipo de cifra */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Tipo de Cifra:
            </label>
            <select
              id="tipo-cifra"
              name="tipo-cifra"
              value={tipoCifra}
              onChange={(e) => setTipoCifra(e.target.value)}
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
