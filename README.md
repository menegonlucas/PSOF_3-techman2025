# Techman

Sistema para gestão de equipamentos e comentários de manutenção.

## 📌 Contexto

O **Techman** é uma aplicação desenvolvida como avaliação prática da disciplina *Manutenção de Equipamentos*. Seu objetivo é facilitar o controle de manutenções (preventivas e corretivas) e o registro de informações sobre equipamentos.

## ⚙️ Funcionalidades

- Login com validação no banco de dados
- Cadastro, listagem e exclusão de equipamentos (somente administradores)
- Inserção e visualização de comentários por equipamento
- Histórico de manutenções

## 📂 Estrutura do Repositório

```text
techman2025/
├── api/       # Back-end da aplicação
├── web/       # Front-end da aplicação
├── docs/      # Documentação (DER, diagramas, script.sql)
│   ├── DER.pdf
│   ├── Atividades.pdf
│   ├── script.sql
│   └── README.md
└── README.md  # Este documento
```

## 📝 Entregas

- **Diagrama Entidade-Relacionamento (DER)** em PDF
- **Banco de dados** implementado e script `script.sql` para recriar o banco de dados
- **Diagrama de atividades** em PDF
- **Aplicação completa** com tela de login, listagem/cadastro/exclusão de equipamentos e cadastro de comentários