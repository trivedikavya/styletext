import React, { useState } from 'react';

interface StyleButtonProps {
  type: string;
  label: string;
  tooltip: string;
  isActive: boolean;
  onClick: () => void;
}

const StyleButton: React.FC<StyleButtonProps> = ({ 
  type, 
  label, 
  tooltip, 
  isActive, 
  onClick 
}) => {
  const [showTooltip, setShowTooltip] = useState(false);
  
  return (
    <div className="relative">
      <button
        type="button"
        onClick={onClick}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className={`min-w-10 h-10 flex items-center justify-center rounded-md transition-all duration-200 ${
          isActive 
            ? 'bg-indigo-600 text-white shadow-md' 
            : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
        }`}
        aria-label={tooltip}
      >
        <span className="text-lg">{label}</span>
      </button>
      
      {showTooltip && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-slate-800 text-white text-xs rounded whitespace-nowrap z-10">
          {tooltip}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-slate-800"></div>
        </div>
      )}
    </div>
  );
};

export default StyleButton;