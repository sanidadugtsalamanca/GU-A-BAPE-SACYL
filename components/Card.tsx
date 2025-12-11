import React, { ReactNode } from 'react';

interface CardProps {
  title: string;
  icon?: ReactNode;
  children: ReactNode;
  subtitle?: string;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ title, icon, children, subtitle, className = '' }) => {
  return (
    <div className={`bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow duration-300 ${className}`}>
      <div className="bg-slate-50/50 p-6 border-b border-slate-100">
        <h3 className="text-xl font-bold text-slate-800 flex items-center gap-3">
          {icon && <span className="text-sacyl-600">{icon}</span>}
          {title}
        </h3>
        {subtitle && <p className="text-slate-500 text-sm mt-1">{subtitle}</p>}
      </div>
      <div className="p-6">
        {children}
      </div>
    </div>
  );
};