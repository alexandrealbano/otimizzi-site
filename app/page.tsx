import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      
      {/* 1. CABEÇALHO (Header) */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
          <div className="flex-shrink-0">
            {/* Logo da Otimizzi */}
            <Image
              src="/logo_nome.png"
              alt="Otimizzi Logo"
              width={180}
              height={65}
              className="object-contain"
              priority
            />
          </div>
          
          {/* Menu Desktop */}
          <nav className="hidden lg:flex space-x-6 font-semibold text-sm text-[#1e3a5f]">
            <a href="#" className="hover:text-[#f5a623] transition-colors border-b-2 border-transparent hover:border-[#f5a623] pb-1">Início</a>
            <a href="#solucoes" className="hover:text-[#f5a623] transition-colors pb-1">Nossas Soluções</a>
            <a href="#solar" className="hover:text-[#f5a623] transition-colors pb-1">Energia Solar</a>
            <a href="#automacao" className="hover:text-[#f5a623] transition-colors pb-1">Automação & TI</a>
            <a href="#certificados" className="hover:text-[#f5a623] transition-colors pb-1">Certificados Digitais</a>
          </nav>

          {/* Botão de Orçamento */}
          <div className="hidden md:block">
            <a 
              href="#contato" 
              className="bg-[#f5a623] text-[#1e3a5f] px-6 py-2 rounded-full font-bold text-sm hover:bg-yellow-500 transition-colors shadow-md"
            >
              SOLICITAR ORÇAMENTO
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* 2. HERO SECTION (Imagem de Fundo) */}
        <section 
          className="relative w-full h-[600px] flex items-center bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1508514177221-188b1c77eca2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')" }}
        >
          {/* Overlay escuro para dar contraste no texto */}
          <div className="absolute inset-0 bg-black/60"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 drop-shadow-lg">
                A Otimizzi Transformando Sua Vida com Energia Inteligente.
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 drop-shadow-md">
                Combinamos energia solar fotovoltaica com conectividade avançada, automação e segurança digital para o máximo conforto e economia.
              </p>
            </div>
          </div>
        </section>

        {/* 3. CARDS FLUTUANTES (Sobrepostos) */}
        <section className="relative z-20 -mt-24 max-w-4xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            
            {/* Card 1 */}
            <div className="bg-white rounded-full p-8 shadow-xl flex flex-col items-center text-center w-64 h-64 justify-center border-4 border-slate-50 hover:scale-105 transition-transform cursor-pointer">
              <svg className="w-16 h-16 text-[#f5a623] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
              <h3 className="text-xl font-bold text-[#1e3a5f]">Soluções<br/>Fotovoltaicas</h3>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-full p-8 shadow-xl flex flex-col items-center text-center w-64 h-64 justify-center border-4 border-slate-50 hover:scale-105 transition-transform cursor-pointer">
              <svg className="w-16 h-16 text-[#1e3a5f] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
              <h3 className="text-xl font-bold text-[#1e3a5f]">Sistemas de<br/>Automação & TI</h3>
            </div>

          </div>
        </section>

        {/* 4. PILARES DE OTIMIZAÇÃO */}
        <section id="solucoes" className="bg-white pt-24 pb-20 mt-[-100px] pt-[150px]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-extrabold text-[#1e3a5f] mb-16">Nossos Pilares de Otimização</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 text-left">
              
              {/* Pilar 1 */}
              <div className="flex flex-col items-start">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-blue-50 rounded-lg text-[#1e3a5f]">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                  </div>
                  <h3 className="text-lg font-bold text-[#1e3a5f]">ENERGIA RENOVÁVEL</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Reduza custos e gere sua própria energia limpa. Projetos personalizados com homologação e instalação técnica especializada, garantindo o melhor retorno do seu investimento.
                </p>
              </div>

              {/* Pilar 2 */}
              <div className="flex flex-col items-start">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-yellow-50 rounded-lg text-[#f5a623]">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.906 14.142 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"></path></svg>
                  </div>
                  <h3 className="text-lg font-bold text-[#1e3a5f]">CONECTIVIDADE & AUTOMAÇÃO</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Infraestrutura de rede robusta e sistemas de automação inteligente para sua casa ou empresa. Controle total na palma da sua mão com máxima estabilidade.
                </p>
              </div>

              {/* Pilar 3 */}
              <div className="flex flex-col items-start">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-green-50 rounded-lg text-green-600">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>
                  </div>
                  <h3 className="text-lg font-bold text-[#1e3a5f]">SUSTENTABILIDADE</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Compromisso com o meio ambiente através do uso de tecnologias limpas e materiais elétricos de alta durabilidade, promovendo um futuro mais sustentável.
                </p>
              </div>

              {/* Pilar 4 - Certificados Digitais */}
              <div id="certificados" className="flex flex-col items-start">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-purple-50 rounded-lg text-purple-600">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                  </div>
                  <h3 className="text-lg font-bold text-[#1e3a5f]">CERTIFICADOS DIGITAIS</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Emissão ágil e segura de Certificados Digitais para Pessoa Física (e-CPF) e Jurídica (e-CNPJ). Autenticidade, integridade e validade jurídica para seus documentos e transações fiscais.
                </p>
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* 5. RODAPÉ (Footer) */}
      <footer className="bg-slate-100 py-12 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Image src="/Otimizzi_LOGO_oficial.jpg" alt="Otimizzi Logo" width={150} height={50} className="mb-4" />
            <p className="text-sm text-gray-500 mt-4 max-w-xs">
              Soluções completas em energia fotovoltaica, automação, infraestrutura de redes, materiais elétricos e certificação digital.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-[#1e3a5f] mb-4">Contato</h4>
            <p className="text-sm text-gray-600 mb-2">contato@otimizzi.com</p>
            <p className="text-sm text-gray-600">Cruz, Ceará, Brasil</p>
          </div>
          <div>
            <h4 className="font-bold text-[#1e3a5f] mb-4">Links Úteis</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-[#f5a623]">Sobre Nós</a></li>
              <li><a href="#solucoes" className="hover:text-[#f5a623]">Nossas Soluções</a></li>
              {/* Link para o DPN adicionado aqui */}
              <li>
                <a 
                  href="/dpn.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-[#f5a623]"
                >
                  Declaração de Práticas de Negócios (DPN)
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>

    </div>
  );
}