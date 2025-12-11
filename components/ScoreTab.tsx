import React, { useState, useEffect } from 'react';
import { Card } from './Card';
import { SimulatorState } from '../types';
import { Calculator, Trophy, RefreshCw } from 'lucide-react';

export const ScoreTab: React.FC = () => {
  // Estado inicial
  const initialState: SimulatorState = {
    experienciaSNS: 0,
    experienciaPrivada: 0,
    creditosOrdinarios: 0,
    creditosECTS: 0,
  };

  const [values, setValues] = useState<SimulatorState>(initialState);
  const [total, setTotal] = useState<number>(0);

  // Valores aproximados BAPE (ejemplo genérico)
  const POINTS_PER_MONTH_SNS = 0.2;
  const POINTS_PER_MONTH_PRIVATE = 0.1;
  const POINTS_PER_CREDIT_ORD = 0.3; // Ejemplo
  const POINTS_PER_ECTS = 0.5; // Ejemplo

  useEffect(() => {
    const expPoints = (values.experienciaSNS * POINTS_PER_MONTH_SNS) + 
                      (values.experienciaPrivada * POINTS_PER_MONTH_PRIVATE);
    
    // Suponemos un tope de formación para el ejemplo
    let formPoints = (values.creditosOrdinarios * POINTS_PER_CREDIT_ORD) + 
                     (values.creditosECTS * POINTS_PER_ECTS);
    
    const calculatedTotal = expPoints + formPoints;
    setTotal(parseFloat(calculatedTotal.toFixed(2)));
  }, [values]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues(prev => ({
      ...prev,
      [name]: parseFloat(value) || 0
    }));
  };

  return (
    <div className="max-w-4xl mx-auto animate-fade-in space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Simulador de Puntos</h2>
        <p className="text-slate-600">Calcula una estimación rápida de tu puntuación para la bolsa.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* COLUMNA ENTRADA DE DATOS */}
        <div className="space-y-6">
          <Card title="Experiencia Profesional" className="h-full">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Meses trabajados en SNS (Público)
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    name="experienciaSNS"
                    min="0"
                    value={values.experienciaSNS || ''}
                    onChange={handleChange}
                    className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all"
                    placeholder="0"
                  />
                  <span className="text-xs text-slate-500 font-mono bg-slate-100 px-2 py-1 rounded">x{POINTS_PER_MONTH_SNS}</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Meses trabajados en Sector Privado/Otras Admin
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    name="experienciaPrivada"
                    min="0"
                    value={values.experienciaPrivada || ''}
                    onChange={handleChange}
                    className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all"
                    placeholder="0"
                  />
                  <span className="text-xs text-slate-500 font-mono bg-slate-100 px-2 py-1 rounded">x{POINTS_PER_MONTH_PRIVATE}</span>
                </div>
              </div>
            </div>
          </Card>

          <Card title="Formación Continuada" className="h-full">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Créditos tradicionales
                </label>
                <input
                  type="number"
                  name="creditosOrdinarios"
                  min="0"
                  value={values.creditosOrdinarios || ''}
                  onChange={handleChange}
                  className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
                  placeholder="0"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Créditos ECTS
                </label>
                <input
                  type="number"
                  name="creditosECTS"
                  min="0"
                  value={values.creditosECTS || ''}
                  onChange={handleChange}
                  className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
                  placeholder="0"
                />
              </div>
            </div>
          </Card>
        </div>

        {/* COLUMNA RESULTADOS */}
        <div className="flex flex-col gap-6">
           <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-8 shadow-xl border-t-4 border-red-500 sticky top-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-red-600 rounded-lg">
                  <Calculator size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Puntuación Estimada</h3>
                  <p className="text-red-200 text-sm">Resultado no vinculante</p>
                </div>
              </div>

              <div className="flex justify-center py-8">
                <span className="text-7xl font-black tracking-tighter tabular-nums">
                  {total}
                </span>
                <span className="text-xl font-medium text-slate-400 mt-2 ml-2">ptos</span>
              </div>

              <div className="space-y-3 border-t border-slate-700 pt-6">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Por Experiencia:</span>
                  <span className="font-mono font-bold">
                    {((values.experienciaSNS * POINTS_PER_MONTH_SNS) + (values.experienciaPrivada * POINTS_PER_MONTH_PRIVATE)).toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Por Formación:</span>
                  <span className="font-mono font-bold">
                     {((values.creditosOrdinarios * POINTS_PER_CREDIT_ORD) + (values.creditosECTS * POINTS_PER_ECTS)).toFixed(2)}
                  </span>
                </div>
              </div>

              <button 
                onClick={() => setValues(initialState)}
                className="w-full mt-8 bg-white/10 hover:bg-white/20 text-white py-3 rounded-lg flex items-center justify-center gap-2 transition-colors text-sm font-medium"
              >
                <RefreshCw size={16} />
                Reiniciar Calculadora
              </button>
           </div>
           
           <div className="bg-orange-50 p-4 rounded-xl border border-orange-100 flex gap-3">
             <Trophy className="text-orange-500 shrink-0" />
             <p className="text-sm text-orange-800">
               <strong>Consejo UGT:</strong> Revisa siempre que tus cursos estén acreditados por la CFC (Comisión de Formación Continuada) para garantizar su validez.
             </p>
           </div>
        </div>
      </div>
    </div>
  );
};