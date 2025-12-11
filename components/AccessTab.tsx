import React from 'react';
import { Card } from './Card';
import { 
  UserPlus, 
  Upload, 
  FileCheck, 
  AlertCircle, 
  CheckCircle2, 
  MousePointerClick,
  Monitor,
  CalendarClock
} from 'lucide-react';

export const AccessTab: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in max-w-5xl mx-auto">
      
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-slate-900 mb-3">
          ¿Cómo inscribirse en la BAPE?
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Sigue estos tres pasos fundamentales para formar parte de la Bolsa Abierta y Permanente de Empleo del SACYL.
        </p>
      </div>

      {/* STEP 1 */}
      <Card 
        title="Paso 1: Registro de Solicitante" 
        icon={<UserPlus className="text-red-600" size={28} />}
        subtitle="Alta inicial en la aplicación oficial"
        className="border-l-4 border-l-red-500"
      >
        <div className="space-y-4">
          <p className="text-slate-700 leading-relaxed">
            Si nunca has trabajado en SACYL o no tienes usuario, lo primero es darte de alta en la aplicación SELECTA.
          </p>
          <ul className="grid gap-3 sm:grid-cols-2 mt-4">
            <li className="flex items-start gap-3 bg-slate-50 p-3 rounded-lg">
              <MousePointerClick className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
              <span className="text-sm text-slate-700">Accede al portal de salud de Castilla y León.</span>
            </li>
            <li className="flex items-start gap-3 bg-slate-50 p-3 rounded-lg">
              <Monitor className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
              <span className="text-sm text-slate-700">Regístrate con tu DNI y un correo electrónico válido.</span>
            </li>
          </ul>
          <div className="bg-yellow-50 border border-yellow-100 p-4 rounded-lg flex gap-3 mt-4">
            <AlertCircle className="text-yellow-600 shrink-0" />
            <p className="text-sm text-yellow-800">
              <strong>Importante:</strong> Guarda bien tus claves. Las necesitarás para todo el proceso y futuros llamamientos.
            </p>
          </div>
        </div>
      </Card>

      {/* STEP 2 */}
      <Card 
        title="Paso 2: Registro de Méritos" 
        icon={<Upload className="text-red-600" size={28} />}
        subtitle="Sube tu experiencia y formación"
        className="border-l-4 border-l-red-500"
      >
        <div className="space-y-4">
          <p className="text-slate-700">
            Antes de apuntarte a una lista concreta, debes cargar todos tus méritos en el sistema.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4 mt-2">
            <div className="border border-slate-200 rounded-lg p-4 hover:border-red-200 transition-colors">
              <h4 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                <CheckCircle2 size={18} className="text-green-600" /> Experiencia Profesional
              </h4>
              <p className="text-sm text-slate-600">
                Certificados de servicios prestados. Si es en SACYL, suelen cargarse de oficio (revísalo).
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-4 hover:border-red-200 transition-colors">
              <h4 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                <CheckCircle2 size={18} className="text-green-600" /> Formación
              </h4>
              <p className="text-sm text-slate-600">
                Títulos académicos, cursos, formación continuada. Escanea los originales en PDF.
              </p>
            </div>
          </div>
        </div>
      </Card>

      {/* STEP 3 */}
      <Card 
        title="Paso 3: Inscripción y Autobaremo" 
        icon={<FileCheck className="text-red-600" size={28} />}
        subtitle="Formalización de la solicitud"
        className="border-l-4 border-l-red-500"
      >
        <div className="space-y-4">
          <p className="text-slate-700">
            Una vez cargados los méritos, debes inscribirte en la categoría y área de salud que desees.
          </p>
          <div className="flex flex-col gap-3">
             <div className="flex items-center gap-3 text-slate-700">
               <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold shrink-0">1</div>
               <p>Selecciona la categoría (ej: Enfermería, Celador, TCAE).</p>
             </div>
             <div className="flex items-center gap-3 text-slate-700">
               <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold shrink-0">2</div>
               <p>Elige las Áreas de Salud (Provincias) donde quieres trabajar.</p>
             </div>
             <div className="flex items-center gap-3 text-slate-700">
               <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold shrink-0">3</div>
               <p>Genera el <strong>Autobaremo</strong>: El sistema calculará tus puntos con los méritos subidos.</p>
             </div>
             <div className="flex items-center gap-3 text-slate-700">
               <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold shrink-0">4</div>
               <p><strong>Registra</strong> la solicitud electrónicamente.</p>
             </div>
          </div>
        </div>
      </Card>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 flex flex-col md:flex-row gap-6 items-center">
        <div className="bg-blue-100 p-3 rounded-full shrink-0">
          <CalendarClock className="text-blue-600 w-8 h-8" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-blue-900 mb-1">¿Cuándo puedo apuntarme?</h3>
          <p className="text-blue-800/80 text-sm leading-relaxed">
            La bolsa es <strong>Abierta y Permanente</strong>. Puedes inscribirte cualquier día del año. Sin embargo, existen <strong>fechas de corte</strong> (normalmente anuales) para la valoración de méritos. Los méritos obtenidos después de la fecha de corte contarán para el año siguiente.
          </p>
        </div>
      </div>

    </div>
  );
};