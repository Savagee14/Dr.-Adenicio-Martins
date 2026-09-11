/**
 * Adenicio Martins - Advocacia e Consultoria
 * Main JavaScript Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initFaqAccordion();
  initSimulator();
  initConsultationForm();
  initScrollAnimations();
  initSmoothScroll();
});

/* --------------------------------------------------------------------------
   1. Navbar & Mobile Drawer
   -------------------------------------------------------------------------- */
function initNavbar() {
  const header = document.querySelector('.site-header');
  const toggleBtn = document.querySelector('.mobile-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  const backdrop = document.querySelector('.mobile-nav-backdrop');
  const navLinks = document.querySelectorAll('.mobile-nav .nav-link, .nav-menu .nav-link');

  // Header scroll shadow
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  }, { passive: true });

  if (!toggleBtn || !mobileNav) return;

  function openMenu() {
    toggleBtn.setAttribute('aria-expanded', 'true');
    mobileNav.classList.add('open');
    backdrop?.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    toggleBtn.setAttribute('aria-expanded', 'false');
    mobileNav.classList.remove('open');
    backdrop?.classList.remove('open');
    document.body.style.overflow = '';
  }

  toggleBtn.addEventListener('click', () => {
    const isOpen = toggleBtn.getAttribute('aria-expanded') === 'true';
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  backdrop?.addEventListener('click', closeMenu);

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (mobileNav.classList.contains('open')) {
        closeMenu();
      }
    });
  });

  // Close on ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileNav.classList.contains('open')) {
      closeMenu();
    }
  });
}

/* --------------------------------------------------------------------------
   2. FAQ Accordion
   -------------------------------------------------------------------------- */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (!questionBtn) return;

    questionBtn.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');

      // Close all other items in same container
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          const btn = otherItem.querySelector('.faq-question');
          if (btn) btn.setAttribute('aria-expanded', 'false');
        }
      });

      // Toggle current
      if (isOpen) {
        item.classList.remove('active');
        questionBtn.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('active');
        questionBtn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/* --------------------------------------------------------------------------
   3. Interactive Labor Right Simulator
   -------------------------------------------------------------------------- */
function initSimulator() {
  const simButtons = document.querySelectorAll('.sim-option-btn');
  const resultTitle = document.getElementById('sim-result-title');
  const resultText = document.getElementById('sim-result-text');
  const resultBtn = document.getElementById('sim-whatsapp-btn');
  const resultList = document.getElementById('sim-checklist');

  if (!simButtons.length || !resultBtn) return;

  const scenarios = {
    horas_extras: {
      title: 'Análise de Horas Extras & Intervalos',
      text: 'Trabalhar além da jornada sem o devido adicional de no mínimo 50% ou sem intervalo intrajornada gera passivo trabalhista significativo. Temos ampla experiência no cálculo de reflexos sobre 13º, férias, FGTS e DSR.',
      checklist: [
        'Cálculo do valor real da hora extra com adicionais',
        'Reflexos em férias, 13º salário e FGTS + 40%',
        'Verificação de banco de horas irregular',
        'Atendimento 100% online em todo o Brasil'
      ],
      whatsappMsg: 'Olá, Dr. Adenicio. Gostaria de uma avaliação sobre horas extras e adicionais não pagos pela empresa.'
    },
    rescisao_indireta: {
      title: 'Rescisão Indireta do Contrato',
      text: 'Se a empresa atrasa salários, não deposita FGTS, expõe a perigo manifesto ou comete assédio moral, você pode solicitar a rescisão indireta: sair da empresa recebendo TODOS os direitos de uma demissão sem justa causa.',
      checklist: [
        'Recebimento integral de saldo, aviso prévio e multa de 40%',
        'Liberação imediata das guias de Seguro-Desemprego e FGTS',
        'Proteção contra assédio e rigor excessivo',
        'Sigilo total e orientação preventiva'
      ],
      whatsappMsg: 'Olá, Dr. Adenicio. Gostaria de analisar se meu caso se enquadra em Rescisão Indireta (falta grave do empregador).'
    },
    fgts_atrasado: {
      title: 'Regularização de FGTS e Verbas',
      text: 'O não recolhimento tempestivo do FGTS é falta grave do empregador. Além da cobrança com juros e correção monetária, pode fundamentar a rescisão indireta com saque imediato de todos os valores.',
      checklist: [
        'Conferência do extrato analítico da Caixa',
        'Cálculo de valores devidos com atualização legal',
        'Possibilidade de rescisão indireta com liberação do saldo',
        'Atendimento rápido via WhatsApp'
      ],
      whatsappMsg: 'Olá, Dr. Adenicio. Verifiquei que meu FGTS está atrasado/não foi depositado e gostaria de uma orientação jurídica.'
    },
    demissao_verbas: {
      title: 'Conferência de Rescisão & Homologação',
      text: 'Erros no Termo de Rescisão (TRCT) são frequentes, como descontos indevidos, base de cálculo errada de médias e não pagamento do aviso prévio indenizado proporcional ao tempo de serviço.',
      checklist: [
        'Revisão linha por linha do TRCT e holerites',
        'Cálculo de aviso proporcional (Lei 12.506/11)',
        'Apuração de comissões por fora e equiparação',
        'Prazo prescricional de 2 anos para cobrança'
      ],
      whatsappMsg: 'Olá, Dr. Adenicio. Fui demitido e gostaria que o senhor conferisse se minhas verbas rescisórias estão corretas.'
    },
    previdenciario: {
      title: 'Consultoria Previdenciária & Aposentadoria',
      text: 'Planejamento de tempo de contribuição, aposentadoria especial (tempo insalubre/perigoso) e conversão de benefícios do INSS com foco no melhor benefício financeiro.',
      checklist: [
        'Análise de tempo especial (PPP e LTCAT)',
        'Cálculo de regras de transição da Reforma',
        'Revisão e concessão de benefícios no INSS',
        'Atendimento especializado para todo o país'
      ],
      whatsappMsg: 'Olá, Dr. Adenicio. Gostaria de uma consultoria previdenciária sobre meu tempo de contribuição e aposentadoria.'
    }
  };

  simButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      simButtons.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');

      const scenarioKey = btn.getAttribute('data-scenario');
      const data = scenarios[scenarioKey];

      if (data) {
        if (resultTitle) resultTitle.textContent = data.title;
        if (resultText) resultText.textContent = data.text;

        if (resultList) {
          resultList.innerHTML = data.checklist.map(item => `
            <div class="sim-result-item">
              <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
              <span>${item}</span>
            </div>
          `).join('');
        }

        const encodedMsg = encodeURIComponent(data.whatsappMsg);
        resultBtn.href = `https://wa.me/5531986437834?text=${encodedMsg}`;
      }
    });
  });
}

/* --------------------------------------------------------------------------
   4. Consultation Form Handler
   -------------------------------------------------------------------------- */
function initConsultationForm() {
  const form = document.getElementById('consultationForm');
  const feedback = document.getElementById('formFeedback');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Honeypot check
    const honeypot = form.querySelector('input[name="website_url"]');
    if (honeypot && honeypot.value.trim() !== '') {
      return; // Silent reject for spam bots
    }

    const name = form.querySelector('#formName')?.value.trim() || '';
    const phone = form.querySelector('#formPhone')?.value.trim() || '';
    const city = form.querySelector('#formCity')?.value.trim() || '';
    const subject = form.querySelector('#formSubject')?.value || 'Consulta Trabalhista';
    const message = form.querySelector('#formMessage')?.value.trim() || '';

    if (!name || !phone) {
      if (feedback) {
        feedback.className = 'form-feedback error';
        feedback.textContent = 'Por favor, preencha seu nome e telefone/WhatsApp para contato.';
      }
      return;
    }

    // Build structured WhatsApp message
    const formattedMsg = `*Solicitação de Consulta via Site - Adenicio Martins Advocacia*\n\n` +
      `👤 *Nome:* ${name}\n` +
      `📱 *Telefone/WhatsApp:* ${phone}\n` +
      `📍 *Cidade/Estado:* ${city || 'Não informado'}\n` +
      `⚖️ *Área de Interesse:* ${subject}\n` +
      `📝 *Resumo do caso:* ${message || 'Gostaria de agendar uma consulta inicial.'}`;

    if (feedback) {
      feedback.className = 'form-feedback success';
      feedback.textContent = 'Dados validados com sucesso! Redirecionando para o WhatsApp do Dr. Adenicio Martins...';
    }

    const encodedMsg = encodeURIComponent(formattedMsg);
    const waUrl = `https://wa.me/5531986437834?text=${encodedMsg}`;

    setTimeout(() => {
      window.open(waUrl, '_blank');
      form.reset();
    }, 900);
  });
}

/* --------------------------------------------------------------------------
   5. Scroll Animations (Reveal)
   -------------------------------------------------------------------------- */
function initScrollAnimations() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('revealed'));
    return;
  }

  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  reveals.forEach(el => observer.observe(el));
}

/* --------------------------------------------------------------------------
   6. Smooth Anchor Navigation
   -------------------------------------------------------------------------- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
}
