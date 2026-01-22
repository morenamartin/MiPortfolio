export default function ColorfulIcon({ 
  name, 
  className = "w-16 h-16",
  forceActive = false,
  displayName,
  years
}:{
    name: string;
    className?: string;
    forceActive?: boolean;
    displayName?: string;
    years?: number;
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
      {displayName && years && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
          <div className="bg-white text-black px-4 py-2 rounded-lg shadow-lg whitespace-nowrap">
            <p className="font-semibold">{displayName}</p>
            <p className="text-sm text-gray-600">{years} {years === 1 ? 'año' : 'años'} de experiencia</p>
          </div>
          {/* Piquito */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1">
            <div className="border-8 border-transparent border-t-white"></div>
          </div>
        </div>
      )}
    </div>
  )
}