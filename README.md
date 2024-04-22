# Projeto de Exemplo com React, Vite, TypeScript e TanStack Router

Este é um projeto de exemplo que utiliza React com Vite, TypeScript e o TanStack Router. Neste README, vou explicar como o projeto está estruturado e como as diferentes partes funcionam juntas.

## Estrutura do Projeto

- **`__root.tsx`**: Define o componente raiz da aplicação, que contém a barra de navegação e o ponto de saída (`Outlet`) para renderizar os componentes de acordo com a rota.
  
- **`index.lazy.tsx`**: Define o componente para a rota raiz ("/") que é carregado de forma assíncrona.

- **`login.lazy.tsx`**: Define o componente para a rota de login ("/login") que também é carregado de forma assíncrona.

- **`app.tsx`**: Arquivo principal da aplicação, onde é criada a instância do router, o provedor do router é envolvido em torno da aplicação e o ponto de entrada é renderizado no DOM.

## Funcionamento do Projeto

1. **Configuração do Router**: O arquivo `__root.tsx` define o componente raiz da aplicação, que inclui a barra de navegação e o ponto de saída (`Outlet`). Este componente é criado usando o `createRootRoute` fornecido pelo TanStack Router. A barra de navegação contém links para diferentes rotas da aplicação.

2. **Rotas Assíncronas**: As rotas são carregadas de forma assíncrona usando `createLazyFileRoute` do TanStack Router. Isso permite que os componentes associados às rotas sejam carregados sob demanda, melhorando o desempenho da aplicação.

3. **Inicialização do Router**: No arquivo `app.tsx`, uma instância do router é criada usando `createRouter` e é passada para o provedor do router (`RouterProvider`). Isso permite que todos os componentes da aplicação acessem o estado e as funcionalidades do router.

## Executando o Projeto

Para executar este projeto, siga estas etapas:

1. Certifique-se de ter o Node.js instalado em sua máquina.

2. Clone este repositório e navegue até o diretório do projeto.

3. Instale as dependências usando o npm

4. **Executando o Projeto**:

   Para executar este projeto, siga estas etapas:

   - Certifique-se de ter o Node.js instalado em sua máquina.

   - Clone este repositório e navegue até o diretório do projeto.

   - Instale as dependências usando o npm ou yarn:

     ```
     npm install
     ```

   - Execute o projeto em modo de desenvolvimento:

     ```
     npm run dev
     ```

     Isso iniciará o servidor de desenvolvimento e abrirá a aplicação no seu navegador padrão. Este comando também executa uma verificação de linting usando ESLint.

   - Durante o desenvolvimento, você pode usar o comando `npm run dev` para atualizar automaticamente a aplicação enquanto faz alterações no código.

   - Para criar uma versão de produção do projeto, execute o seguinte comando:

     ```
     npm run build
     ```

     Isso compilará o código TypeScript, executará o Vite para criar a build final da aplicação, pronta para ser implantada em um ambiente de produção.

   - Para visualizar a versão de produção localmente, você pode usar o seguinte comando:

     ```
     npm run preview
     ```

     Isso iniciará um servidor de pré-visualização local para a versão de produção da aplicação.
