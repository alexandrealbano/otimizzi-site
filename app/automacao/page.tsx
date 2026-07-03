import Image from "next/image";

export default function AutomacaoComercial() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 scroll-smooth">
      
      {/* CABEÇALHO DA PÁGINA DE AUTOMAÇÃO */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
          <div className="flex-shrink-0">
            <a href="/">
              <Image
                src="/logo_nome.png"
                alt="Otimizzi Logo"
                width={150}
                height={55}
                className="object-contain"
              />
            </a>
          </div>
          <nav className="flex space-x-6 font-semibold text-sm text-[#1e3a5f]">
            <a href="/" className="hover:text-[#f5a623] transition-colors">Voltar ao Início</a>
            <a href="#segmentos" className="hover:text-[#f5a623] transition-colors">Segmentos</a>
            <a href="#recursos" className="hover:text-[#f5a623] transition-colors">Recursos</a>
          </nav>
          <div>
            <a 
              href="https://wa.me/5588999974367" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-purple-600 text-white px-5 py-2 rounded-full font-bold text-xs hover:bg-purple-700 transition-colors shadow-md uppercase tracking-wider"
            >
              Falar com Especialista
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* HERO SECTION - AUTOMAÇÃO */}
        <section className="bg-gradient-to-br from-[#1e3a5f] to-slate-900 text-white py-20 lg:py-28 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <span className="text-purple-400 font-bold text-xs uppercase tracking-widest bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
                Sistemas Comerciais Inteligentes
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mt-4 mb-6">
                Simplifique a Gestão da sua Empresa com a Otimizzi
              </h1>
              <p className="text-lg text-slate-300 mb-8 max-w-2xl">
                Soluções completas de automação comercial para otimizar suas vendas, controlar estoque e emitir documentos fiscais com rapidez, segurança e total estabilidade.
              </p>
              <a 
                href="https://wa.me/5588999974367" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#f5a623] text-[#1e3a5f] px-8 py-3 rounded-lg font-bold hover:bg-yellow-500 transition-colors inline-flex items-center gap-2 shadow-lg"
              >
                Solicitar uma Demonstração Gratuita
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </a>
            </div>
          </div>
          {/* Elemento visual abstrato de fundo */}
          <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
            <svg className="w-[500px] h-[500px]" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
          </div>
        </section>

        {/* RECURSOS PRINCIPAIS: FISCAL & PAGAMENTO */}
        <section id="recursos" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              
              {/* Card Fiscal */}
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm">
                <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                </div>
                <h3 className="text-2xl font-bold text-[#1e3a5f] mb-3">Emissão Fiscal Descomplicada</h3>
                <p className="text-slate-600 leading-relaxed">
                  Fique 100% em dia com o fisco de forma automatizada. Nossos sistemas estão totalmente preparados para a emissão instantânea de **Cupom Fiscal (NFC-e)** e **Nota Fiscal Eletrônica (NF-e)**, tornando o fechamento de vendas muito mais ágil e sem burocracias.
                </p>
              </div>

              {/* Card Pagamentos */}
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>
                </div>
                <h3 className="text-2xl font-bold text-[#1e3a5f] mb-3">Integração Completa com Meios de Pagamento</h3>
                <p className="text-slate-600 leading-relaxed">
                  Conecte seu ponto de venda (PDV) diretamente às principais maquininhas de cartão (TEF/POS) e carteiras digitais. Receba pagamentos via **Pix automatizado com confirmação em tela**, cartões de crédito e débito, reduzindo erros operacionais e fraudes no caixa.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* SEGMENTOS ATENDIDOS */}
        <section id="segmentos" className="py-20 bg-slate-100 border-t border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-extrabold text-[#1e3a5f] mb-4">Soluções Sob Medida para o seu Segmento</h2>
            <p className="text-slate-600 mb-16 max-w-2xl mx-auto">
              Desenvolvemos e implantamos sistemas moldados de acordo com a realidade e regras de operação do seu modelo de negócio.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
              
              {/* Varejo */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200/60">
                <div className="text-purple-600 font-bold mb-3 text-lg flex items-center gap-2">
                  <span>🛍️</span> Varejo
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Frente de caixa (PDV) ultra rápida, controle rígido de estoque, grade de produtos (tamanho/cor), histórico de clientes e relatórios estratégicos de faturamento.
                </p>
              </div>

              {/* Atacado */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200/60">
                <div className="text-purple-600 font-bold mb-3 text-lg flex items-center gap-2">
                  <span>📦</span> Atacado
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Tabela de preços diferenciada por volume, controle de múltiplos depósitos, gerenciamento de pedidos de vendas, emissão em lote de NF-e e controle financeiro robusto.
                </p>
              </div>

              {/* Indústrias */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200/60">
                <div className="text-purple-600 font-bold mb-3 text-lg flex items-center gap-2">
                  <span>🏭</span> Indústrias
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Controle da ordem de produção (OP), ficha técnica de produtos, rastreabilidade de lotes, cálculo de custo de matéria-prima e integração fiscal avançada.
                </p>
              </div>

              {/* Restaurantes */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200/60">
                <div className="text-purple-600 font-bold mb-3 text-lg flex items-center gap-2">
                  <span>🍽️</span> Restaurantes
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Gestão eficiente de mesas e comandas eletrônicas, impressão direcionada para a cozinha, controle de adicionais/combos, integração com delivery e fechamento rápido.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="bg-white py-20 text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-[#1e3a5f] mb-6">Pronto para dar o próximo passo rumo à eficiência?</h2>
            <p className="text-lg text-slate-600 mb-10">
              Pare de perder tempo com processos manuais e falhas de caixa. Deixe a tecnologia trabalhar a favor do crescimento da sua empresa.
            </p>
            <a 
              href="https://wa.me/5588999974367" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-purple-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-purple-700 transition-colors shadow-md inline-block"
            >
              Falar com o Nosso Suporte Comercial
            </a>
          </div>
        </section>
      </main>

      {/* FOOTER SIMPLIFICADO */}
      <footer className="bg-slate-950 text-slate-400 py-8 border-t border-slate-900 text-center text-xs">
        <p>&copy; {new Date().getFullYear()} Otimizzi Automação Comercial. Todos os direitos reservados.</p>
        <p className="mt-2 text-slate-600 font-mono">CNPJ: 32.381.563/0001-63 | Cruz - CE</p>
      </footer>

    </div>
  );
}