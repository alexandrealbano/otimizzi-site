import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Cabeçalho */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex-shrink-0">
            <Image
              src="/Otimizzi_LOGO_oficial.jpg"
              alt="Otimizzi Logo"
              width={220}
              height={80}
              className="object-contain"
              priority
            />
          </div>
          <nav className="hidden md:flex space-x-8 font-medium text-slate-600">
            <a href="#solucoes" className="hover:text-[#1e3a5f] transition-colors">Soluções</a>
            <a href="#projetos" className="hover:text-[#1e3a5f] transition-colors">Projetos</a>
            <a href="#contato" className="hover:text-[#1e3a5f] transition-colors">Contato</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1e3a5f] tracking-tight mb-6">
            Inteligência e Energia para o <span className="text-[#f5a623]">Seu Negócio</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl">
            Integração completa em energia solar, infraestrutura elétrica e sistemas de automação para maximizar sua eficiência.
          </p>
          <div className="flex space-x-4">
            <a 
              href="#contato" 
              className="bg-[#1e3a5f] text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors shadow-md"
            >
              Fale Conosco
            </a>
            <a 
              href="#solucoes" 
              className="bg-white text-[#1e3a5f] border border-slate-300 px-8 py-3 rounded-lg font-semibold hover:bg-slate-50 transition-colors shadow-sm"
            >
              Nossos Serviços
            </a>
          </div>
        </section>

        {/* Grid de Serviços (Esboço) */}
        <section id="solucoes" className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 border border-slate-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">Energia Solar</h3>
                <p className="text-slate-600">Projetos, homologação e monitoramento de usinas para máxima geração.</p>
              </div>
              <div className="p-6 border border-slate-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">Automação & TI</h3>
                <p className="text-slate-600">Sistemas inteligentes, infraestrutura de redes e equipamentos de alta performance.</p>
              </div>
              <div className="p-6 border border-slate-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">Materiais Elétricos</h3>
                <p className="text-slate-600">Componentes especializados e de alta confiabilidade para instalações industriais e residenciais.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}