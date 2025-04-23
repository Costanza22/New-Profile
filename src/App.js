import React from 'react';
import './App.css';
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaPython, FaDatabase, FaGitAlt, FaDocker, FaAws } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';

function App() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-12">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-blue-600 mb-2">Costanza Pasquotto Assef</h1>
              <p className="text-xl text-gray-600">Engenheira de Software</p>
            </div>
          </div>
          <div className="about-section animate-fade-in">
            <div className="flex items-center justify-center mb-6">
              <div className="icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
            <h2 className="text-2xl font-bold mb-6 text-center text-gradient">Sobre Mim</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto text-center leading-relaxed">
              Engenheira de Software especializada em desenvolvimento de soluções tecnológicas inovadoras,
              com foco em Python e JavaScript. Possuo sólida experiência na criação de aplicações
              eficientes e escaláveis, combinando habilidades técnicas com uma abordagem analítica
              para entregar resultados de alta qualidade.
            </p>
          </div>
        </div>
      </section>

      {/* Educação */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-8">
            <div className="icon-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
            </div>
          </div>
          <h2 className="text-2xl font-bold mb-8 text-center text-gradient">Educação</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-200/20">
              <div className="space-y-6">
                <div className="education-card animate-fade-in">
                  <h3 className="text-xl font-bold text-blue-600">Especialização em Inteligência Artificial</h3>
                  <p className="text-gray-600 mb-3">Universidade Federal do Paraná (UFPR) • fev de 2025 - dez de 2026</p>
                  <p className="text-gray-600 mb-3">Curitiba, Paraná, Brasil</p>
                </div>

                <div className="education-card animate-fade-in">
                  <h3 className="text-xl font-bold text-blue-600">Engenharia de Software</h3>
                  <p className="text-gray-600 mb-3">Católica de Santa Catarina • mar de 2021 - dez de 2024</p>
                  <p className="text-gray-600 mb-3">Joinville, Santa Catarina, Brasil</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experiência */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-8">
            <div className="icon-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
          <h2 className="text-2xl font-bold mb-8 text-center text-gradient">Experiência Profissional</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="experience-card animate-fade-in bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border border-gray-200/20">
              <h3 className="text-xl font-bold text-blue-600">Analyst Support Junior</h3>
              <p className="text-gray-600 mb-3">Schulze Advogados Associados • nov de 2024 - abr de 2025 (6 meses)</p>
              <p className="text-gray-600 mb-3">Joinville, Santa Catarina, Brazil • Presencial</p>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full hover:bg-blue-200 transition-colors">Wireshark</span>
                <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full hover:bg-blue-200 transition-colors">Redes</span>
                <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full hover:bg-blue-200 transition-colors">+2 competências</span>
              </div>
            </div>

            <div className="experience-card animate-fade-in bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border border-gray-200/20">
              <h3 className="text-xl font-bold text-blue-600">Business Intelligence Developer</h3>
              <p className="text-gray-600 mb-3">WEG • mar de 2024 - ago de 2024 (6 meses)</p>
              <p className="text-gray-600 mb-3">Jaraguá do Sul, Santa Catarina, Brasil • Presencial</p>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full hover:bg-blue-200 transition-colors">Tableau</span>
                <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full hover:bg-blue-200 transition-colors">Python</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Habilidades */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-8">
            <div className="icon-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
          </div>
          <h2 className="text-2xl font-bold mb-8 text-center text-gradient">Habilidades</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            <div className="skill-card animate-fade-in bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border border-gray-200/20">
              <h3 className="font-bold text-lg mb-2 text-blue-600">Frontend</h3>
              <div className="flex flex-wrap gap-2 mb-3">
                <div className="icon-wrapper">
                  <FaReact />
                </div>
                <div className="icon-wrapper">
                  <SiJavascript />
                </div>
                <div className="icon-wrapper">
                  <FaHtml5 />
                </div>
                <div className="icon-wrapper">
                  <FaCss3Alt />
                </div>
              </div>
              <div>
                <p className="text-gray-700 mb-2">• Desenvolvimento de interfaces responsivas com React</p>
                <p className="text-gray-700 mb-2">• JavaScript ES6+ e TypeScript</p>
                <p className="text-gray-700 mb-2">• HTML5 semântico e acessível</p>
                <p className="text-gray-700">• CSS3, Tailwind CSS e Styled Components</p>
              </div>
            </div>
            <div className="skill-card animate-fade-in bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border border-gray-200/20">
              <h3 className="font-bold text-lg mb-2 text-blue-600">Backend</h3>
              <div className="flex flex-wrap gap-2 mb-3">
                <div className="icon-wrapper">
                  <FaNodeJs />
                </div>
                <div className="icon-wrapper">
                  <FaPython />
                </div>
              </div>
              <div>
                <p className="text-gray-700 mb-2">• Desenvolvimento em Python com Django e FastAPI</p>
                <p className="text-gray-700 mb-2">• Node.js com Express e NestJS</p>
                <p className="text-gray-700 mb-2">• APIs RESTful e GraphQL</p>
                <p className="text-gray-700">• Integração de serviços e microsserviços</p>
              </div>
            </div>
            <div className="skill-card animate-fade-in bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border border-gray-200/20">
              <h3 className="font-bold text-lg mb-2 text-blue-600">Banco de Dados</h3>
              <div className="flex flex-wrap gap-2 mb-3">
                <div className="icon-wrapper">
                  <FaDatabase />
                </div>
              </div>
              <div>
                <p className="text-gray-700 mb-2">• SQL: PostgreSQL e MySQL</p>
                <p className="text-gray-700 mb-2">• NoSQL: MongoDB</p>
                <p className="text-gray-700 mb-2">• Modelagem de dados</p>
                <p className="text-gray-700">• Otimização de queries</p>
              </div>
            </div>
            <div className="skill-card animate-fade-in bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border border-gray-200/20">
              <h3 className="font-bold text-lg mb-2 text-blue-600">DevOps & Ferramentas</h3>
              <div className="flex flex-wrap gap-2 mb-3">
                <div className="icon-wrapper">
                  <FaGitAlt />
                </div>
                <div className="icon-wrapper">
                  <FaDocker />
                </div>
                <div className="icon-wrapper">
                  <FaAws />
                </div>
              </div>
              <div>
                <p className="text-gray-700 mb-2">• Controle de versão com Git</p>
                <p className="text-gray-700 mb-2">• Containerização com Docker</p>
                <p className="text-gray-700 mb-2">• Cloud AWS</p>
                <p className="text-gray-700">• CI/CD e automação</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projetos */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center text-gradient">Projetos em Destaque</h2>
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-200/20">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all">
                  <h3 className="text-xl font-bold text-blue-600 mb-4">
                    <a href="https://air-france-eight.vercel.app/" target="_blank" rel="noopener noreferrer">
                      ✈️ Air France - Previsão de demanda aérea
                    </a>
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Projeto de IA voltado para previsão de fluxo de passageiros em rotas da Air France, utilizando técnicas de machine learning com Python, Pandas, Scikit-learn e visualizações com Matplotlib.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-50 text-blue-600 text-sm px-3 py-1 rounded-full">Python</span>
                    <span className="bg-blue-50 text-blue-600 text-sm px-3 py-1 rounded-full">Machine Learning</span>
                    <span className="bg-blue-50 text-blue-600 text-sm px-3 py-1 rounded-full">Data Science</span>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all">
                  <h3 className="text-xl font-bold text-blue-600 mb-4">
                    <a href="https://chat-paws.vercel.app/" target="_blank" rel="noopener noreferrer">
                      🐶 ChatIA Vet
                    </a>
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Um chatbot inteligente para veterinárias, feito com modelos de NLP em Python. Ele responde dúvidas sobre cuidados, raças, vacinas e muito mais — projetado para clínicas e tutores.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-50 text-blue-600 text-sm px-3 py-1 rounded-full">Python</span>
                    <span className="bg-blue-50 text-blue-600 text-sm px-3 py-1 rounded-full">NLP</span>
                    <span className="bg-blue-50 text-blue-600 text-sm px-3 py-1 rounded-full">Chatbot</span>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all">
                  <h3 className="text-xl font-bold text-blue-600 mb-4">
                    <a href="https://joi-patrio.vercel.app/" target="_blank" rel="noopener noreferrer">
                      🏛️ Joi Patrio
                    </a>
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Plataforma desenvolvida para valorização e preservação do patrimônio histórico. Front-end em React, com foco em acessibilidade, mapeamento interativo e banco de dados georreferenciado.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-50 text-blue-600 text-sm px-3 py-1 rounded-full">React</span>
                    <span className="bg-blue-50 text-blue-600 text-sm px-3 py-1 rounded-full">GIS</span>
                    <span className="bg-blue-50 text-blue-600 text-sm px-3 py-1 rounded-full">Acessibilidade</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Idiomas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-12 text-center text-gradient">Idiomas</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-200/20">
              <div className="flex flex-wrap justify-center gap-8">
                <div className="relative group">
                  <div className="w-40 h-40 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col items-center justify-center p-6 animate-fade-in">
                    <span className="text-4xl mb-3">🇬🇧</span>
                    <h3 className="text-xl font-semibold text-gray-800">Inglês</h3>
                    <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-100 text-blue-800 text-sm px-4 py-1 rounded-full whitespace-nowrap">
                        Avançado (C1)
                      </span>
                    </div>
                  </div>
                </div>

                <div className="relative group">
                  <div className="w-40 h-40 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col items-center justify-center p-6 animate-fade-in">
                    <span className="text-4xl mb-3">🇩🇪</span>
                    <h3 className="text-xl font-semibold text-gray-800">Alemão</h3>
                    <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-100 text-blue-800 text-sm px-4 py-1 rounded-full whitespace-nowrap">
                        Avançado (C1)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section className="contact-section py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center text-white">Contato</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://github.com/Costanza22" 
              className="contact-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
            <a 
              href="https://linkedin.com/in/fridamaria" 
              className="contact-link"
          target="_blank"
          rel="noopener noreferrer"
        >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              LinkedIn
            </a>
            <a 
              href="mailto:pinassef22@gmail.com" 
              className="contact-link"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email
            </a>
            <a 
              href="tel:+5547988012377" 
              className="contact-link"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Telefone
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;

