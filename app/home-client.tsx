'use client';

import { FormEvent, useEffect, useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Asterisk,
  Braces,
  Check,
  ChevronDown,
  CircleGauge,
  Code2,
  Cpu,
  Gem,
  Layers3,
  LayoutTemplate,
  Menu,
  MousePointer2,
  PenTool,
  Rocket,
  Smartphone,
  Sparkles,
  Target,
  WandSparkles,
  X,
  Zap,
} from 'lucide-react';

const services = [
  {
    icon: LayoutTemplate,
    index: '01',
    title: 'Sites institucionais',
    text: 'Presenças digitais completas para comunicar valor, gerar confiança e transformar visitas em oportunidades.',
    tags: ['Estratégia', 'UI/UX', 'Desenvolvimento'],
  },
  {
    icon: WandSparkles,
    index: '02',
    title: 'Redesign de sites',
    text: 'Transformamos sites antigos em experiências contemporâneas, sem perder a essência e a credibilidade da sua marca.',
    tags: ['Auditoria', 'Nova identidade', 'Migração'],
  },
  {
    icon: MousePointer2,
    index: '03',
    title: 'Landing pages',
    text: 'Páginas focadas em uma mensagem clara e uma ação objetiva, desenhadas para campanhas, produtos e lançamentos.',
    tags: ['Copy', 'Conversão', 'Métricas'],
  },
  {
    icon: Zap,
    index: '04',
    title: 'Performance & UX',
    text: 'Otimizamos velocidade, arquitetura e usabilidade para entregar uma navegação fluida em qualquer dispositivo.',
    tags: ['Core Web Vitals', 'SEO', 'Acessibilidade'],
  },
];

const steps = [
  ['01', 'Imersão', 'Entendemos o negócio, o público e a imagem que sua empresa precisa transmitir.'],
  ['02', 'Estratégia', 'Organizamos conteúdo, jornada e prioridades para o site trabalhar pelo seu objetivo.'],
  ['03', 'Direção visual', 'Criamos o conceito, os componentes e o protótipo que darão forma à nova presença.'],
  ['04', 'Desenvolvimento', 'Transformamos o design em uma experiência rápida, responsiva e cuidadosamente animada.'],
  ['05', 'Refinamento', 'Revisamos conteúdo, detalhes, dispositivos e interações junto com você.'],
  ['06', 'Publicação', 'Colocamos o projeto no ar, configuramos o essencial e acompanhamos a entrega.'],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [comparison, setComparison] = useState<'before' | 'after'>('after');
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [formError, setFormError] = useState('');

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('[data-reveal]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  async function submitLead(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSending(true);
    setFormError('');

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formsubmit.co/ajax/newangle.dev@gmail.com', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      });

      const result = await response.json().catch(() => null);

      if (!response.ok || result?.success === false) {
        throw new Error('Não foi possível enviar a mensagem.');
      }

      form.reset();
      setSent(true);
    } catch {
      setFormError('Não foi possível enviar agora. Tente novamente em instantes.');
    } finally {
      setSending(false);
    }
  }

  return (
    <main className="site-shell">
      <header className="nav-wrap">
        <a className="brand" href="#top" aria-label="NewAngle — início">
          <span className="brand-mark">NewAngle</span>
          <span className="brand-slash">/</span>
          <span className="brand-label">Studio digital</span>
        </a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          <a href="#servicos">Serviços</a>
          <a href="#projetos">Projetos</a>
          <a href="#processo">Processo</a>
          <a href="#sobre">Sobre</a>
        </nav>
        <a className="nav-cta" href="#contato">
          Começar projeto <ArrowUpRight size={16} />
        </a>
        <button
          className="menu-button"
          onClick={() => setMenuOpen((value) => !value)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {menuOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
      </header>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`} id="mobile-menu">
        <nav aria-label="Navegação para celular">
          {['Serviços', 'Projetos', 'Processo', 'Sobre'].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace('ç', 'c')}`} onClick={() => setMenuOpen(false)}>
              {item} <ArrowUpRight size={17} />
            </a>
          ))}
          <a className="mobile-menu-cta" href="#contato" onClick={() => setMenuOpen(false)}>Solicitar proposta</a>
        </nav>
      </div>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-glow" aria-hidden="true" />
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            Um novo ângulo para sua presença digital
          </div>
          <h1>
            Seu negócio evoluiu. Seu site <span>também deveria.</span>
          </h1>
          <p className="hero-lead">
            Criamos e redesenhamos experiências digitais que transformam a forma
            como sua empresa é percebida.
          </p>
          <div className="hero-actions">
            <a className="primary-cta" href="#contato">
              Ver meu site por um novo ângulo <ArrowUpRight size={18} />
            </a>
            <a className="text-link" href="#projetos">
              Ver projetos <span>↘</span>
            </a>
          </div>
          <div className="hero-proof">
            <div className="proof-avatars" aria-hidden="true">
              <span>01</span><span>02</span><span>03</span>
            </div>
            <p><strong>Estratégia, design e código</strong><br />em uma entrega completa.</p>
          </div>
        </div>

        <div className="hero-visual" aria-label="Visualização de um projeto digital premium">
          <div className="orbit orbit-one" aria-hidden="true" />
          <div className="orbit orbit-two" aria-hidden="true" />
          <div className="visual-card">
            <div className="visual-topbar">
              <div className="visual-logo">NewAngle<span>.</span></div>
              <div className="visual-pills"><i /><i /><i /></div>
            </div>
            <div className="visual-body">
              <div className="visual-kicker">REDESIGN / 2026</div>
              <div className="visual-title">Nova presença.<br />Nova percepção.</div>
              <div className="visual-line"><span /></div>
            </div>
            <div className="visual-footer">
              <span>DESIGN SYSTEM</span>
              <span>PERFORMANCE 98</span>
            </div>
          </div>
          <div className="floating-chip chip-top"><Sparkles size={14} /> Design premium</div>
          <div className="floating-chip chip-bottom"><span className="live-dot" /> Projeto online</div>
          <div className="side-code" aria-hidden="true">01<br />&nbsp;&nbsp;02<br />03</div>
        </div>
      </section>

      <div className="signal-strip" aria-hidden="true">
        <span>SITES INSTITUCIONAIS</span><i />
        <span>REDESIGN ESTRATÉGICO</span><i />
        <span>EXPERIÊNCIAS DIGITAIS</span><i />
        <span>LANDING PAGES</span><i />
        <span>PERFORMANCE</span>
      </div>

      <section className="manifesto section-pad" id="sobre">
        <div className="manifesto-index" data-reveal>
          <span>01 / SOBRE</span>
          <div className="vertical-line" />
        </div>
        <div className="manifesto-main" data-reveal>
          <div className="section-kicker"><Asterisk size={14} /> Mais que um site bonito</div>
          <h2>Criamos a percepção de valor que sua empresa <em>merece.</em></h2>
          <p className="manifesto-lead">
            Seu site costuma ser o primeiro contato entre sua marca e uma nova oportunidade.
            Nós cuidamos para que esse encontro transmita clareza, confiança e profissionalismo.
          </p>
          <div className="manifesto-columns">
            <p>Unimos direção criativa, estratégia de conteúdo e tecnologia para construir experiências que representam o nível real do seu negócio.</p>
            <p>Cada detalhe tem um motivo: da hierarquia da informação ao movimento de um botão, tudo trabalha para valorizar sua marca.</p>
          </div>
          <div className="manifesto-signature">
            <span className="signature-mark">NA<span>.</span></span>
            <span>ESTRATÉGIA &nbsp;/&nbsp; DESIGN &nbsp;/&nbsp; TECNOLOGIA</span>
          </div>
        </div>
        <aside className="manifesto-stats" data-reveal>
          <div><strong>360°</strong><span>Visão completa do projeto</span></div>
          <div><strong>01:01</strong><span>Atendimento próximo e direto</span></div>
          <div><strong>100%</strong><span>Responsivo por definição</span></div>
        </aside>
      </section>

      <section className="services section-pad" id="servicos">
        <header className="section-head" data-reveal>
          <div>
            <span className="section-number">02 / EXPERTISE</span>
            <h2>O que fazemos<br /><em>muito bem.</em></h2>
          </div>
          <p>Do primeiro conceito à publicação, desenhamos cada etapa para que sua empresa tenha um site à altura do que entrega.</p>
        </header>
        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <article className="service-card" data-reveal key={service.title} style={{ '--delay': `${index * 80}ms` } as React.CSSProperties}>
                <div className="service-top"><Icon size={24} /><span>{service.index}</span></div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <div className="service-tags">{service.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <ArrowUpRight className="service-arrow" size={20} />
              </article>
            );
          })}
        </div>
      </section>

      <section className="projects section-pad" id="projetos">
        <header className="section-head projects-head" data-reveal>
          <div>
            <span className="section-number">03 / PROJETOS</span>
            <h2>Design que muda<br /><em>a percepção.</em></h2>
          </div>
          <p>Conceitos demonstrativos criados para mostrar como estratégia visual e tecnologia podem reposicionar um negócio.</p>
        </header>

        <article className="project-feature" data-reveal>
          <div className={`comparison-stage ${comparison}`}>
            <div className="stage-nav"><span>ALVOR</span><div /><div /><b>Contato</b></div>
            {comparison === 'after' ? (
              <div className="after-stage">
                <span className="mini-kicker">ARQUITETURA QUE ATRAVESSA O TEMPO</span>
                <strong>Espaços que inspiram<br /><em>novos futuros.</em></strong>
                <div className="stage-button">Conheça o estúdio <ArrowUpRight size={12} /></div>
                <div className="stage-sculpture"><i /><i /><i /></div>
              </div>
            ) : (
              <div className="before-stage">
                <strong>Escritório Alvor Arquitetura</strong>
                <p>Projetos residenciais e comerciais desde 2008.</p>
                <button type="button">Saiba mais</button>
                <div className="before-boxes"><i /><i /><i /></div>
              </div>
            )}
            <div className="comparison-controls" role="group" aria-label="Comparar versões do projeto">
              <button className={comparison === 'before' ? 'active' : ''} onClick={() => setComparison('before')}>Antes</button>
              <button className={comparison === 'after' ? 'active' : ''} onClick={() => setComparison('after')}>Depois</button>
            </div>
          </div>
          <div className="project-meta">
            <div><span>CASE CONCEITUAL / 01</span><h3>Alvor Arquitetura</h3></div>
            <p>Do site genérico a uma experiência editorial que transmite precisão, repertório e exclusividade.</p>
            <div className="project-tags"><span>Redesign</span><span>Institucional</span><span>Motion</span></div>
          </div>
        </article>

        <div className="project-grid">
          <article className="project-small project-orbe" data-reveal>
            <div className="project-screen">
              <div className="screen-toolbar"><span>ORBÈ</span><i /><i /><i /></div>
              <div className="orbe-copy"><small>BEAUTY / SCIENCE</small><strong>A pele em<br />seu melhor<br /><em>estado.</em></strong></div>
              <div className="orbe-orb" />
            </div>
            <div className="small-meta"><span>CLÍNICA ORBÈ</span><p>Identidade digital para uma experiência de cuidado premium.</p></div>
          </article>
          <article className="project-small project-noma" data-reveal>
            <div className="project-screen">
              <div className="screen-toolbar"><span>NOMA°</span><i /><i /><i /></div>
              <div className="noma-copy"><small>DESDE 2014 / SÃO PAULO</small><strong>Café com<br />origem.</strong><span>Ver nossos cafés ↗</span></div>
              <div className="coffee-ring" />
            </div>
            <div className="small-meta"><span>NOMA CAFÉ</span><p>Uma narrativa digital quente, tátil e cheia de personalidade.</p></div>
          </article>
        </div>
      </section>

      <section className="difference section-pad">
        <header className="center-head" data-reveal>
          <span className="section-number">04 / NOSSO PADRÃO</span>
          <h2>Bonito é o começo.<br /><em>Estratégico é o diferencial.</em></h2>
        </header>
        <div className="bento-grid">
          <article className="bento bento-large" data-reveal>
            <div className="bento-icon"><Target size={22} /></div>
            <span className="bento-code">A / 01</span>
            <h3>Design com intenção</h3>
            <p>Nada entra só para decorar. Cada escolha guia o olhar, organiza a mensagem e reforça o posicionamento.</p>
            <div className="target-graphic" aria-hidden="true"><i /><i /><i /><span /></div>
          </article>
          <article className="bento" data-reveal>
            <div className="bento-icon"><Smartphone size={22} /></div>
            <span className="bento-code">A / 02</span>
            <h3>Responsivo de verdade</h3>
            <p>A mesma excelência no computador, tablet ou celular.</p>
            <div className="devices-graphic" aria-hidden="true"><i /><i /><i /></div>
          </article>
          <article className="bento" data-reveal>
            <div className="bento-icon"><CircleGauge size={22} /></div>
            <span className="bento-code">A / 03</span>
            <h3>Rápido por natureza</h3>
            <p>Tecnologia moderna para uma experiência leve, fluida e sem espera.</p>
            <div className="gauge-graphic" aria-hidden="true"><span>98</span><i /></div>
          </article>
          <article className="bento bento-wide" data-reveal>
            <div className="bento-icon"><Layers3 size={22} /></div>
            <span className="bento-code">A / 04</span>
            <h3>Construído para evoluir</h3>
            <p>Uma base sólida, organizada e pronta para acompanhar a próxima fase da sua empresa.</p>
            <div className="layers-graphic" aria-hidden="true"><i /><i /><i /></div>
          </article>
          <article className="bento bento-quote" data-reveal>
            <Gem size={26} />
            <blockquote>“O detalhe não é um detalhe.<br />Ele é o projeto.”</blockquote>
            <span>— CHARLES EAMES</span>
          </article>
        </div>
      </section>

      <section className="process section-pad" id="processo">
        <header className="section-head" data-reveal>
          <div><span className="section-number">05 / PROCESSO</span><h2>Clareza em cada<br /><em>etapa.</em></h2></div>
          <p>Um processo transparente, colaborativo e sem mistério. Você acompanha a evolução do projeto do início ao lançamento.</p>
        </header>
        <div className="process-list">
          {steps.map(([number, title, text], index) => (
            <article data-reveal key={number} style={{ '--delay': `${index * 55}ms` } as React.CSSProperties}>
              <span className="process-number">{number}</span>
              <div className="process-icon">{index === 0 ? <PenTool /> : index === 1 ? <Braces /> : index === 2 ? <Sparkles /> : index === 3 ? <Code2 /> : index === 4 ? <Check /> : <Rocket />}</div>
              <h3>{title}</h3>
              <p>{text}</p>
              <ChevronDown size={17} className="process-chevron" />
            </article>
          ))}
        </div>
      </section>

      <section className="value-section section-pad">
        <div className="value-copy" data-reveal>
          <span className="section-number">06 / PERCEPÇÃO</span>
          <h2>Seu site fala antes mesmo de você.</h2>
          <p>Quando a experiência digital parece antiga, confusa ou improvisada, a percepção sobre a empresa acompanha. Um site atual muda essa conversa.</p>
          <a className="text-link" href="#contato">Quero mudar essa percepção <span>↘</span></a>
        </div>
        <div className="value-list" data-reveal>
          <article><span>01</span><div><h3>Mais valor percebido</h3><p>Uma apresentação sofisticada posiciona sua empresa em outro nível.</p></div><Gem /></article>
          <article><span>02</span><div><h3>Mais confiança</h3><p>Clareza, consistência e acabamento profissional reduzem a incerteza.</p></div><Cpu /></article>
          <article><span>03</span><div><h3>Mais oportunidades</h3><p>Uma jornada simples conduz o visitante para a próxima ação.</p></div><ArrowUpRight /></article>
        </div>
      </section>

      <section className="contact section-pad" id="contato">
        <div className="contact-glow" aria-hidden="true" />
        <div className="contact-copy" data-reveal>
          <span className="section-number">07 / VAMOS CONVERSAR</span>
          <h2>Sua empresa está pronta para um site <em>à altura?</em></h2>
          <p>Conte um pouco sobre o momento da sua marca. Nós analisamos e retornamos com os próximos passos para transformar sua presença digital.</p>
          <div className="contact-points">
            <span><Check size={14} /> Conversa inicial sem compromisso</span>
            <span><Check size={14} /> Direção personalizada para sua empresa</span>
            <span><Check size={14} /> Proposta clara e transparente</span>
          </div>
        </div>
        <div className="form-wrap" data-reveal>
          {sent ? (
            <div className="success-state" role="status">
              <div><Check size={26} /></div>
              <span>Mensagem enviada</span>
              <h3>Obrigado por confiar seu projeto à NewAngle.</h3>
              <p>Recebemos seus dados e entraremos em contato pelo canal informado.</p>
              <button type="button" onClick={() => { setSent(false); setFormError(''); }}>Enviar outra mensagem</button>
            </div>
          ) : (
            <form onSubmit={submitLead}>
              <div className="form-intro"><span>INICIAR UM PROJETO</span><small>Leva menos de 2 minutos</small></div>
              <input type="hidden" name="_subject" value="Nova solicitação de proposta — NewAngle" />
              <input type="hidden" name="_template" value="table" />
              <input className="form-honeypot" type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" />
              <label>Seu nome<input name="Nome" required autoComplete="name" placeholder="Como podemos chamar você?" /></label>
              <label>Empresa<input name="Empresa" required autoComplete="organization" placeholder="Nome da sua empresa" /></label>
              <label>Site atual <span>(opcional)</span><input name="Site atual" type="url" inputMode="url" placeholder="https://suaempresa.com.br" /></label>
              <label>WhatsApp ou e-mail<input name="Contato" required autoComplete="email" placeholder="Onde falamos com você?" /></label>
              <label>O que você precisa?<textarea name="Projeto" rows={3} required placeholder="Conte brevemente sobre o projeto" /></label>
              <button className="form-submit" type="submit" disabled={sending} aria-busy={sending}>
                {sending ? 'Enviando proposta…' : 'Solicitar uma proposta'} <ArrowRight size={18} />
              </button>
              {formError && <p className="form-error" role="alert">{formError}</p>}
              <small className="privacy-note">Ao enviar, você concorda em receber nosso contato sobre este projeto.</small>
            </form>
          )}
        </div>
      </section>

      <footer>
        <div className="footer-top">
          <div className="footer-brand"><span>NewAngle<span>.</span></span><p>Um novo ângulo para<br />sua presença digital.</p></div>
          <div className="footer-links"><strong>Navegue</strong><a href="#sobre">Sobre</a><a href="#servicos">Serviços</a><a href="#projetos">Projetos</a><a href="#processo">Processo</a></div>
          <div className="footer-links"><strong>Especialidades</strong><a href="#servicos">Sites institucionais</a><a href="#servicos">Redesign</a><a href="#servicos">Landing pages</a><a href="#servicos">Performance</a></div>
          <div className="footer-contact"><strong>Pronto para começar?</strong><a href="#contato">Fale com a NewAngle <ArrowUpRight size={17} /></a><div><span>Instagram</span><span>LinkedIn</span></div></div>
        </div>
        <div className="footer-bottom"><span>© 2026 NewAngle Studio Digital</span><span>Feito com estratégia, cuidado e <span className="orange">código.</span></span><a href="#top">Voltar ao topo ↑</a></div>
      </footer>
    </main>
  );
}
