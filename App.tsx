import React, { useState } from 'react';
import { AccessTab } from './components/AccessTab';
import { ScoreTab } from './components/ScoreTab';
import { TabId } from './types';
import { BookOpen, Calculator, BellRing, AlertOctagon, MapPin, Phone, Mail, Building2, Menu, X } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>(TabId.ACCESO);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case TabId.ACCESO:
        return <AccessTab />;
      case TabId.PUNTUACION:
        return <ScoreTab />;
      default:
        return (
          <div className="flex flex-col items-center justify-center py-20 text-slate-400">
            <div className="bg-slate-100 p-6 rounded-full mb-4">
              <BookOpen size={48} />
            </div>
            <p className="text-xl">Sección en construcción</p>
          </div>
        );
    }
  };

  const NavButton = ({ id, icon: Icon, label }: { id: TabId; icon: any; label: string }) => (
    <button
      onClick={() => {
        setActiveTab(id);
        setMobileMenuOpen(false);
      }}
      className={`flex items-center gap-2 px-4 py-3 rounded-lg transition-all duration-200 font-medium ${
        activeTab === id
          ? 'bg-red-600 text-white shadow-md shadow-red-200'
          : 'bg-white text-slate-600 hover:bg-red-50 hover:text-red-600'
      }`}
    >
      <Icon size={18} />
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* HEADER UGT SPECIFIC */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo area */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="bg-red-600 text-white font-black px-2 py-0.5 rounded text-sm tracking-wider">UGT</span>
                <h1 className="text-xl md:text-2xl font-bold text-slate-800 tracking-tight">
                  Sanidad <span className="text-red-600">Salamanca</span>
                </h1>
              </div>
              <p className="text-xs text-slate-500 font-medium mt-0.5 tracking-wide">
                GUÍA INFORMATIVA BAPE SACYL
              </p>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex gap-2">
              <NavButton id={TabId.ACCESO} icon={BookOpen} label="Guía de Acceso" />
              <NavButton id={TabId.PUNTUACION} icon={Calculator} label="Simulador Puntos" />
              <NavButton id={TabId.LLAMAMIENTOS} icon={BellRing} label="Llamamientos" />
              <NavButton id={TabId.PENALIZACIONES} icon={AlertOctagon} label="Penalizaciones" />
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-slate-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-100 bg-white px-4 py-4 flex flex-col gap-2 shadow-lg">
            <NavButton id={TabId.ACCESO} icon={BookOpen} label="Guía de Acceso" />
            <NavButton id={TabId.PUNTUACION} icon={Calculator} label="Simulador Puntos" />
            <NavButton id={TabId.LLAMAMIENTOS} icon={BellRing} label="Llamamientos" />
            <NavButton id={TabId.PENALIZACIONES} icon={AlertOctagon} label="Penalizaciones" />
          </div>
        )}
      </header>

      {/* MAIN CONTENT */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 min-h-[calc(100vh-400px)]">
        {renderContent()}
      </main>

      {/* UGT CONTACT FOOTER - REDESIGNED */}
      <footer className="bg-slate-900 text-white mt-auto border-t-4 border-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
            
            {/* Branding Column */}
            <div className="lg:col-span-4 space-y-4">
              <div className="flex items-center gap-3 mb-2">
                 <div className="bg-white text-red-600 font-black px-3 py-1 rounded text-xl">UGT</div>
                 <div className="font-bold text-2xl">Servicios Públicos</div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Tu sindicato en el SACYL. Defendemos tus derechos, te informamos de los procesos y te ayudamos con tus trámites en la Bolsa de Empleo.
              </p>
              <div className="pt-4">
                 <span className="inline-block bg-red-600/20 text-red-400 text-xs font-semibold px-3 py-1 rounded-full border border-red-600/30">
                   Sección Sindical Salamanca
                 </span>
              </div>
            </div>

            {/* Contact Info Column */}
            <div className="lg:col-span-8 bg-slate-800/50 rounded-2xl p-6 md:p-8 border border-slate-700">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2 text-red-400">
                <Building2 size={20} />
                Información de Contacto y Sede
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-10">
                
                <div className="flex gap-4">
                  <div className="bg-slate-700 p-3 rounded-lg h-fit text-red-400 shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-200">Visítanos</h4>
                    <p className="text-slate-400 text-sm mt-1">
                      Edificio 1 del Hospital Virgen Vega<br/>
                      Semisótano (Sección Sindical UGT)
                    </p>
                    <p className="text-slate-500 text-xs mt-1">
                      P.º de San Vicente, 58, 182<br/>37007 Salamanca
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="bg-slate-700 p-3 rounded-lg h-fit text-red-400 shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-200">Llámanos</h4>
                      <div className="text-slate-400 text-sm mt-1 flex flex-col gap-1">
                        <a href="tel:923291100" className="hover:text-white transition-colors">
                          Fijo: 923 29 11 00 <span className="text-slate-500">(Ext. 55598 HVV)</span>
                        </a>
                        <a href="tel:637585924" className="hover:text-white transition-colors font-medium">
                          Móvil: 637 585 924
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="bg-slate-700 p-3 rounded-lg h-fit text-red-400 shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-200">Escríbenos</h4>
                      <a href="mailto:sanidad.salamanca@ugt-sp.ugt.org" className="text-slate-400 text-sm mt-1 hover:text-white break-all transition-colors block">
                        sanidad.salamanca@ugt-sp.ugt.org
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
          
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-500 text-xs">
            © {new Date().getFullYear()} UGT Servicios Públicos Salamanca. Guía no oficial para ayuda al afiliado.
          </div>
        </div>
      </footer>
    </div>
  );
}