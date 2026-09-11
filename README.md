# Adenicio Martins — Advocacia e Consultoria (Landing Page)

Landing page de alta conversão para o escritório de advocacia e consultoria do **Dr. Adenicio Martins**, especializada em **Direito Trabalhista e Previdenciário**, com foco em atendimento 100% online para todo o Brasil.

---

## 🚀 Como Visualizar e Executar

1. **Abrir diretamente**:
   Basta dar um duplo clique no arquivo `index.html` em qualquer navegador web moderno.

2. **Servidor local (Live Server ou Python / Node)**:
   ```bash
   # Com Python:
   python -m http.server 3000
   # Ou com Node npx serve:
   npx serve .
   ```
   Acesse: `http://localhost:3000`

---

## 📁 Estrutura de Arquivos

```
Site Antigravity Adenicio/
│
├── index.html                  # Estrutura semântica completa e SEO (JSON-LD, OpenGraph)
├── README.md                   # Este guia de documentação
│
└── assets/
    ├── css/
    │   └── styles.css          # Design System (Navy & Ouro), Grid responsivo e animações
    ├── js/
    │   └── main.js             # Simulador de Direitos, WhatsApp redirect, Accordion e Menu
    └── img/
        ├── logo-adenicio-martins.png      # Logo oficial dourada
        ├── dr-adenicio-martins-cinza.jpg   # Foto institucional (Seção Sobre)
        └── dr-adenicio-martins-marinho.jpg # Foto principal (Hero Section)
```

---

## ⚙️ Onde Configurar Dados e Textos

- **WhatsApp e Mensagens Pré-definidas**:
  - Número configurado: `5531986437834` (DDD 31, Minas Gerais / Atendimento Nacional).
  - No `index.html`, todas as tags `<a>` de WhatsApp utilizam o formato:
    `https://wa.me/5531986437834?text=...`
  - No `assets/js/main.js`, o simulador interativo e o formulário de contato constroem mensagens pré-formatadas diretamente para este número.

- **Redes Sociais**:
  - Instagram oficial: `https://www.instagram.com/adv.adeniciomartins` (configurado na Navbar, Contato e Rodapé).

- **Normativas Éticas da OAB**:
  - O site inclui avisos de conformidade com o **Provimento nº 205/2021** e o **Código de Ética da OAB**, sem promessas mercantilistas de resultado ou captação indevida.

---

## 🎨 Design System & Identidade Visual
- **Paleta**:
  - Azul Institucional Profundo: `#070d19` & `#0c182c`
  - Dourado Prestígio: `#dfba6b` / `#c5a059` / `#9e7b36`
  - Fundo Neutro: `#f8fafc` & `#ffffff`
  - WhatsApp Accent: `#25d366`
- **Tipografia**:
  - Títulos: *Outfit* (Sans moderna e sóbria)
  - Corpo: *Plus Jakarta Sans*
