# Techman Web

Este é o front-end da aplicação **Techman**, um sistema para gestão de equipamentos e comentários de manutenção.

## 📌 Contexto

O **Techman Web** é a interface do usuário que se conecta ao back-end da aplicação, permitindo que os usuários interajam com o sistema para gerenciar equipamentos e registrar manutenções.

## ⚙️ Estrutura do Projeto

```text
techman-web/
├── src/
│   ├── index.html              # Página principal da aplicação
│   ├── login.html              # Formulário de login
│   ├── equipments.html         # Listagem de equipamentos
│   ├── equipment-detail.html    # Detalhes de um equipamento específico
│   ├── comments.html           # Página de comentários
│   ├── components/              # Componentes reutilizáveis
│   │   ├── header.html         # Cabeçalho da aplicação
│   │   └── footer.html         # Rodapé da aplicação
│   ├── assets/                  # Recursos estáticos
│   │   ├── css/                # Folhas de estilo
│   │   │   └── main.css        # Estilo principal
│   │   └── js/                 # Scripts JavaScript
│   │       ├── app.js          # Inicialização da aplicação
│   │       ├── api.js          # Funções de chamada de API
│   │       ├── auth.js         # Gerenciamento de autenticação
│   │       ├── equipment.js     # Funções relacionadas a equipamentos
│   │       └── comments.js      # Funções relacionadas a comentários
│   └── utils/                  # Funções utilitárias
│       └── helpers.js          # Funções auxiliares
├── package.json                 # Configuração do npm
├── .gitignore                   # Arquivos a serem ignorados pelo controle de versão
└── README.md                    # Documentação do projeto
```

## 📝 Instruções de Configuração

1. Clone o repositório:
   ```
   git clone <URL_DO_REPOSITORIO>
   cd techman-web
   ```

2. Instale as dependências:
   ```
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```
   npm start
   ```

4. Acesse a aplicação em `http://localhost:3000`.

## 🚀 Funcionalidades

- Autenticação de usuários através de um formulário de login.
- Listagem de equipamentos com a possibilidade de visualizar detalhes.
- Adição e visualização de comentários relacionados a equipamentos.
- Interface responsiva e amigável.

## 📄 Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).