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
    const HMACmsg = fromByteArray(toByteArray(signature));
    return HMACmsg;
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
      const textoCifrado = await CryptoJS.AES.encrypt(
        textoRegistro,
        chaveCifra,
        {
          mode:
            context.auth.cihperMode == 'AES-128-CBC'
              ? CryptoJS.mode.CBC
              : CryptoJS.mode.CTR,
        },
      ).toString();
      console.log(textoCifrado);
      const HMACmsg = await HMAC(textoCifrado, chaveCifra);
      console.log(textoCifrado, HMACmsg);
      const cipherMode = tipoCifra;
      try {
        // Enviar o texto cifrado para o backend
        const response = await axios.post('http://localhost:3000/registos', {
          username,
          textoCifrado,
          HMACmsg,
          cipherMode,
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
    <div className="flex bg-background text-black items-center justify-center h-[calc(100vh-120px)]">
      <ToastContainer /> {/* centrar corretamente devido a navbar */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-semibold mb-4 text-white">Criar Registos</h1>
  
        {/* Container for the form with the gradient background effect */}
        <div className="relative">
          <div className="absolute -inset-1 rounded-md blur-md bg-gradient-to-br from-primary via-blend to-primary z-10"></div>
          <div className="relative z-20">
            <form
              action="#"
              method="post"
              className="bg-primary shadow-md rounded-md px-8 pt-6 pb-8 mb-4 h-[400px] content-center"
              onSubmit={handleSubmit}
            >
              {/* Campo para inserir o texto do registro */}
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2">
                  Texto do Registro:
                </label>
                <textarea
                  onChange={(e) => setTextoRegistro(e.target.value)}
                  className="w-full h-24 px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring focus:border-blue-300 bg-cinzento"
                  placeholder="Insira o texto do registro aqui..."
                ></textarea>
              </div>
  
              {/* Selecionar Chave de Cifra */}
              <div className="mb-4">
                <span className="text-sm font-bold">
                  Chave de Cifra:&nbsp;
                  <label
                    className="text-sm font-bold"
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
                <label className="block text-sm font-bold mb-2">
                  Tipo de Cifra:
                </label>
                <select
                  id="tipo-cifra"
                  name="tipo-cifra"
                  value={tipoCifra}
                  onChange={(e) => setTipoCifra(e.target.value)}
                  className="w-full px-3 py-2 text-sm border focus:outline-none focus:ring focus:ring-secondary focus:border-secondary rounded-md font-bold bg-cinzento"
                >
                  <option value="AES-128-CBC" className="font-bold bg-secondary">AES-128-CBC</option>
                  <option value="AES-128-CTR" className="font-bold bg-secondary">AES-128-CTR</option>
                  {/* Adicione mais opções de cifra aqui, se necessário */}
                </select>
              </div>
  
              {/* Botão para cifrar */}
              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  className="bg-secondary hover:bg-blue-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Cifrar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
