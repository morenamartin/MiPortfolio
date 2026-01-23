export default function ColorfulIcon({ 
  name, 
  className = "w-16 h-16",
  forceActive = false,
  displayName,
  years,
  yearText,
  yearsText,
  experienceText
}:{
    name: string;
    className?: string;
    forceActive?: boolean;
    displayName?: string;
    years?: number;
    yearText?: string;
    yearsText?: string;
    experienceText?: string;
}) {
  return (
    <div className="relative group">
      <img
        src={`/icons/${name}.svg`}
        alt={name}
        className={`
          ${className} 
          transition-all duration-300 ease-in-out
          cursor-pointer
          ${forceActive ? '!grayscale-0 !opacity-100 !scale-110' : 'grayscale opacity-70'}
          hover:!grayscale-0 
          hover:!opacity-100
          hover:!scale-110
        `}
      />
      
      {/* Tooltip */}
      {displayName && years && yearText && yearsText && experienceText && (
        <div className="absolute z-10 mb-2 transition-opacity duration-300 -translate-x-1/2 opacity-0 pointer-events-none bottom-full left-1/2 group-hover:opacity-100">
          <div className="px-4 py-2 text-black bg-white rounded-lg shadow-lg whitespace-nowrap">
            <p className="font-semibold">{displayName}</p>
            <p className="text-sm text-gray-600">{years} {years === 1 ? yearText : yearsText} {experienceText}</p>
          </div>
          {/* Piquito */}
          <div className="absolute -mt-1 -translate-x-1/2 top-full left-1/2">
            <div className="border-8 border-transparent border-t-white"></div>
          </div>
        </div>
      )}
    </div>
  )
}