import { createLazyFileRoute } from '@tanstack/react-router';
import { IoIosSave } from 'react-icons/io';
import axios from 'axios';
import CryptoJS from 'crypto-js';
import { fromByteArray, toByteArray } from 'base64-js';

export const Route = createLazyFileRoute('/registos')({
  component: Registos,
});

interface Registo {
  date: string;
  username: string;
  registo: string;
  hmac: string;
}

function Registos() {
  //Obter a key da pessoa através do LocalStorage
  const chaveCifra = localStorage.getItem('key');

  //HELP WITH THIS PLS
  //comparar o HMAC calculado com o HMAC na BD, por agora razão isto dá sempre mal confirmar depois
  //HELP WITH THIS PLS
  const compareHMAC = (registo: Registo) => {
    if (!chaveCifra) {
      console.error('Chave de cifra not found in localStorage');
      return 'Chave de cifra not found';
    }
    console.log("Registo: "+registo.registo);
    const ciphertext = CryptoJS.lib.WordArray.create(toByteArray(registo.registo));
    const textoDecifrado = CryptoJS.AES.decrypt(
        {
          ciphertext: ciphertext
        },
        chaveCifra,
        {
            iv: 0,
            mode: CryptoJS.mode.CBC
        }
    );

    const finalText = textoDecifrado.toString(CryptoJS.enc.Utf8);
    console.log("Registo Decifrado: " + finalText);
    const computedHMAC = CryptoJS.HmacSHA512(textoDecifrado, chaveCifra).toString(
      CryptoJS.enc.Base64,
    );

    console.log('ComputedMAC: ' + computedHMAC);
    console.log('Registo HMAC: ' + registo.hmac);
    console.log(computedHMAC === registo.hmac);

    const hmacRegisto = fromByteArray(toByteArray(registo.hmac));
    console.log('Registo HMAC: ' + hmacRegisto);

    if (computedHMAC === registo.hmac) {
      console.log('Verified');
      return 'Integrity verified';
    } else {
      console.log('Not Verified');
      return {
        message: 'Integrity compromised',
        computedHMAC: computedHMAC,
        registoHMAC: registo.hmac,
      };
    }
  };

  const handleClick = async () => {
    try {
      //Ir buscar o username ao LocalStorage
      const username = localStorage.getItem('username');
      //ir a Index.js no ciber-back
      const response = await axios.get(
        `http://localhost:3000/registos/${username}`,
      );

      //Log dos resgistos, meio obvio
      console.log('Registos:', response.data.registos);

      //Isto faz com que a "responseDataArray" fique uma array de Registos
      const responseDataArray = response.data.registos as Registo[];

      //Para cada registo no array ele dá log desse registo específico e do resultado do HMAC
      responseDataArray.forEach((registo) => {
        console.log('Registo:', registo);
        const result = compareHMAC(registo);
        console.log(result);
      });
    } catch (error) {
      console.error('Error fetching registos:', error);
    }
  };
  return (
    <div className="h-[92%] bg-background text-white flex justify-center items-center ">
      {/* Container */}
      <div className="relative w-10/12 h-5/6">
        <div className="border-2 border-blend rounded-xl h-full flex truncate relative z-20">
          {/* SideBar */}
          <div className="flex-1 border-rig bg-gray-700">
            {/* Barra de Navegação (Nome da APP e Nome do Utilizador) */}
            <div className="flex items-center bg-gray-800 h-20 p-3 justify-between">
              {/* Logo */}
              <span className="font-bold">CANTTOUCHME</span>
              <input
                type="date"
                name=""
                id=""
                className="text-black justify-center bg-secondary"
              />
              {/* User */}
              {/*ESTE BOTAO É O BOTAO DE TESTES PARA EXPERIMENTAR O HMAC E ETC
              VER LINHA 47*/}
              <button
                onClick={handleClick}
                className=" border-3 border-secondary p-3  rounded-md bg-white"
              >
                olaaa
              </button>
              {/*ESTE BOTAO É O BOTAO DE TESTES PARA EXPERIMENTAR O HMAC E ETC
              VER LINHA 47*/}
              <div>
                {/* Imagem do Utilizador */}
                {/* Nome do Utilizador */}
                <span>O Utilizador "meter nome user" está logado</span>
              </div>
            </div>

            {/* Barra de Pesquisa */}
            <div className=" ">
              {/* Pesquisar */}

              {/* Outras Contas de Utilizadores 1 */}
              <div className="flex-1 overflow-y-auto">
                {['10-05-2024', '13-05-2024'].map((date, index) => (
                  <div
                    key={index}
                    className="p-3 w-[90%] mt-[5px] mx-auto flex items-center gap-2.5 cursor-pointer hover:bg-secondary hover:text-black rounded-md border border-solid border-blend"
                  >
                    <div>
                      <span className="text-lg font-bold">{date}</span>
                      <p className="text-sm ">
                        Começo na anotação do Utilizador
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Chat */}
          <div className="flex-1 bg-gray-500">
            {/* Barra de Informação do Chat */}
            <div className="h-20 bg-gray-700 flex items-center justify-between p-3 text-gray-200">
              {/* chatInfo */}
              <span className="ml-[48%]">Data</span>
              <div className="flex gap-3">
                <IoIosSave className="cursor-pointer h-10 w-10" />
              </div>
            </div>

            <textarea
              name=""
              id=""
              className="w-[80%] h-[75%] p-3 text-black rounded-md ml-[10.5%] mt-[6%]"
            ></textarea>
          </div>
        </div>
        <div className="absolute -inset-1 rounded-xl blur-md bg-gradient-to-br from-primary via-blend to-primary z-10"></div>
      </div>
    </div>
  );
}
