import { createLazyFileRoute } from '@tanstack/react-router';
import { IoIosSave } from 'react-icons/io';

export const Route = createLazyFileRoute('/registos')({
  component: Registos,
});

function Registos() {
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
