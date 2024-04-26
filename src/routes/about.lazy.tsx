import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/about')({
  component: About,
});

function About() {
  return (
    <div className="bg-background text-white">
      <header className="bg-gray-800 text-white py-4">
        <h1 className="text-3xl text-center font-bold">About Us</h1>
      </header>

      {/* Contéudo Principal */}
      <main className="container mx-auto px-4 py-8">
        {/* Membros do Grupo */}
        <section
          id="equipa"
          className="mb-8 rounded-lg bg-white bg-opacity-10 p-6"
        >
          <h2 className="text-4xl font-bold mb-4">Grupo:</h2>
          <ul className="list-none text-xl">
            <li>
              <strong>João Carneiro</strong> - Nº50938
            </li>
            <li>
              <strong>João Pinto</strong> - Nº49889
            </li>
            <li>
              <strong>Leonor Moreira</strong> - Nº50877
            </li>
            <li>
              <strong>Eduardo Abrantes</strong> - Nº50391
            </li>
            <li>
              <strong>Rodrigo Paiva</strong> - Nº49442
            </li>
            <li>
              <strong>Matilde Almeida</strong> - Nº
            </li>
          </ul>
        </section>

        {/* Descrição do Projeto */}
        <section className="rounded-lg bg-white bg-opacity-10 p-6">
          <h2 className="text-4xl font-bold mb-4">
            CANTTOUCHME: Um Livro de Registos Pessoal e Seguro
          </h2>
          <p className="text-xl">
            A ideia deste trabalho é desenvolver um programa que permita guardar
            registos de texto imutáveis para vários utilizadores. Embora as
            aplicações ou sistemas que suportam mais do que um utilizador serem
            especialmente beneficiadas em arquiteturas cliente/servidor, esta
            pode ser pensada como uma aplicação para computador pessoal (quem
            quiser, pode fazer uma aplicação web), que eventualmente é usado por
            mais do que um utilizador. A aplicação deve permitir registar os
            utilizadores e que estes registem atividades do seu dia através da
            introdução de uma descrição em texto. Sempre que um utilizador entra
            na aplicação, este deve apenas ver um campo onde pode escrever essa
            descrição, que fica guardada juntamente com a data, e ter a opção de
            ver registos anteriores. A aplicação deve guardar todos os registos
            cifrados no sistema (para que ninguém os consiga ver, mesmo que abra
            os ficheiros com outro programa externo). A chave de cifra deve ser
            única por utilizador, e ser derivada da palavra-passe do utilizador.
            Embora se apresente como um aspeto mais avançado, recomenda-se que a
            aplicação guarde cada um dos registos com um código de autenticação
            de mensagens que o cole ao bloco anterior, ao estilo de uma
            blockchain (i.e., cada novo registo é adicionado como sendo um novo
            bloco da blockchain). Assim, cada novo bloco contém [valor hash do
            bloco anterior, data do registo, texto do registo, código de
            auteticação de mensagem]. A chave de integridade deve ser também
            única por utilizador, e portanto ser derivada da sua palavra-passe.
          </p>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-4 fixed bottom-0 w-full">
        <p className="text-center text-xl font-bold">
          &copy; 2024 Projeto CANTTOUCHME CiberSegurança
        </p>
      </footer>
    </div>
  );
}
