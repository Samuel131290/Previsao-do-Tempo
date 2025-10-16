# Previsão do Tempo

O Previsão do Tempo é uma aplicação web simples e intuitiva que permite consultar a previsão do tempo para qualquer cidade. 
Desenvolvida com HTML, CSS, JavaScript, a aplicação utiliza a API OpenWeatherMap para obter dados meteorológicos em tempo real e a API Unsplash para exibir imagens de fundo dinâmicas.

---

## Funcionalidades do Sistema
### Consulta de Clima
- Pesquisar Cidade: Permite ao usuário digitar o nome de uma cidade e obter a previsão do tempo.
- Exibição de Dados: Mostra a temperatura mínima, máxima, descrição do clima, umidade do ar e ícone representativo.

### Personalização Visual
- Fundo Dinâmico: Exibe uma imagem de fundo aleatória relacionada a paisagens via API do Unsplash.
- Ícones de Clima: Atualizam automaticamente de acordo com as condições climáticas da cidade pesquisada.

### Interface Simples
- Layout Responsivo: Adaptado para diferentes tamanhos de tela.
- Atualização em Tempo Real: As informações são atualizadas ao clicar no botão de pesquisa.

---

## Tecnologias Utilizadas
### Frontend
- HTML5/CSS3: Estrutura e estilo da interface
- Google Fonts (Open Sans): Tipografia
- JavaScript Puro (Vanilla JS): Manipulação de DOM, eventos, requisições API e atualização dinâmica da interface

###APIs
- OpenWeatherMap API: Consulta de dados meteorológicos
- Unsplash API: Imagens de fundo aleatórias

---

## COMO EXECUTAR O PROGRAMA?
### Pré-requisitos
- Navegador moderno (Chrome, Edge, Firefox)
- Conexão com internet (para chamadas das APIs)

### Configuração
- Clone ou faça download do projeto;
- Abra o projeto no Visual Studio Code;
- Importante: a instalação da extensão Live Server para simular um servidor local;
- Abra o arquivo index.html com o botãao direito em "Open with Live Server".

### Uso
- Digite o nome de uma cidade no campo de pesquisa;
- Clique no botão de busca;
- Observe a atualização da previsão do tempo e do fundo dinâmico.















- PHP 7 ou superior
- Servidor local (XAMPP, WAMP, Laragon ou similar)
- MySQL

### Configurar ambiente MySQL
- Importar o Banco de Dados
- Execute o script turim_db.sql no Workbench ou outro gerenciador de banco MySQL.

### Configurar o Servidor
- Copie os arquivos do projeto para a pasta htdocs (XAMPP) ou equivalente.
- Verifique se as credenciais de banco em grava.php e ler.php estão corretas:
  
  $pdo = new PDO('mysql:host=localhost;dbname=turim_db;charset=utf8mb4','root','',[
  PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
]);

### Executar a Aplicação
- Acesse http://localhost/turim_app/index.html no seu navegador.
