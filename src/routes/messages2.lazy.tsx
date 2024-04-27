import { createLazyFileRoute } from '@tanstack/react-router';
import { BsFillCameraVideoFill } from "react-icons/bs";
import { IoMdPersonAdd } from "react-icons/io";
import { IoIosMore } from "react-icons/io";
import { GoPaperclip } from "react-icons/go";
import { CiImageOn } from "react-icons/ci";




export const Route = createLazyFileRoute('/messages2')({
  component: Messages,
});

function Messages() {

  return (
    <div className='h-screen bg-background text-white flex justify-center items-center '> 

      {/* Container */}
      <div className="border-2 border-white rounded-xl w-10/12 h-5/6 flex truncate">

        {/* SideBar */}
        <div className="flex-1 border-rig bg-gray-700">

          {/* Barra de Navegação (Nome da APP e Nome do Utilizador) */}
          <div className="flex items-center bg-gray-800 h-18 p-3 justify-between">

            {/* Logo */}
            <span className='font-bold'>CANTTOUCHME</span>

            {/* User */}
            <div>

              {/* Imagem do Utilizador */}
              <img src="" className='bg-white h-6 w-6 rounded-xl object-cover'/>

              {/* Nome do Utilizador */}
              <span>Utilizador Logado</span>

            </div>

          </div>

          {/* Barra de Pesquisa */}
          <div className="border-b-2 border-style: solid">

            {/* Pesquisar */}
            <div className="p-3">
              {/* searchform */}
              <input type="text" placeholder="Procure um Utilizador" className="border-black text-black font-bold outline-none"/>
            </div>

            {/* Outras Contas de Utilizadores 1 */}
            <div className="p-3 flex items-center gap-2.5 cursor-pointer hover:bg-gray-800">
              <img src="" className="w-12 h-12 rounded-xl object-cover"/>
              {/* userchat */}

              {/* Informação dos Chats 1 */}
              <div>
                <span className="text-lg font-bold">João Carneiro</span>
                <p className="text-sm text-gray-200">Última Mensagem do Utilizador</p>
              </div>
            </div>


            {/* Outras Contas de Utilizadores 2 */}
            <div className="p-3 flex items-center gap-2.5 cursor-pointer hover:bg-gray-800">
              <img src="" className="w-12 h-12 rounded-xl object-cover"/>
              {/* userchat */}


              {/* Informação dos Chats 2 */}
              <div>
                <span className="text-lg font-bold">João Pinto</span>
                <p className="text-sm text-gray-200">Última Mensagem do Utilizador</p>
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
              <BsFillCameraVideoFill className="cursor-pointer h-6"/>
              <IoMdPersonAdd className="cursor-pointer h-6"/>
              <IoIosMore className="cursor-pointer h-6"/>
            </div>
          </div>


          {/* Mensagens */}
          <div className="bg-gray-250 p-3 text-black h-full mb-[-95px] overflow-scroll">

            {/* Mensagem Nº1 */}
            <div className="flex gap-5 mb-5">

              {/* Informação da Mensagem (Tempo da Mensagem e Imagem do Utilizador) */}
              <div className="flex flex-col text-gray-200 font-light">
                <img src="" className="w-10 h-10 rounded-xl object-cover"/>
                <span>Agora Mesmo</span>
              </div>

              {/* Contéudo da Mensagem Enviada */}
              <div className="max-w-[4/5] flex flex-col gap-3">
                <p className="bg-white p-3 rounded">teste mensagem</p>
                <img src="" className=""/>
              </div>
            </div>

            {/* Mensagem Nº2 */}
            <div className="flex gap-5 mb-5">

              {/* Informação da Mensagem (Tempo da Mensagem e Imagem do Utilizador) */}
              <div className="flex flex-col text-gray-200 font-light">
                <img src="" className="w-10 h-10 rounded-xl object-cover"/>
                <span>Agora Mesmo</span>
              </div>

              {/* Contéudo da Mensagem Enviada */}
              <div className="max-w-[4/5] flex flex-col gap-3">
                <p className="bg-white p-3 rounded">teste mensagem 2</p>
                <img src="" className=""/>
              </div>
            </div>


          </div>

          {/* Input de Texto e Anexo de Imagens */}
          <div className="h-12 bg-white p-3 text-black flex items-center justify-between">

            <input type="text" placeholder="Escreva uma mensagem de texto" className="w-full border-none outline-none text-lg"/>

            <div className="flex items-center gap-3">
              <GoPaperclip className="h-6 cursor-pointer"/>
              <input type="file" style={{display:"none"}} id="file"/>
              <label htmlFor="file">
                <CiImageOn className="h-6 cursor-pointer"/>
              </label>
              <button className="p-1 border-none text-white bg-gray-600 rounded">Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>    
  );
}
