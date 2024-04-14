import React from 'react';

interface FiltersProps {
  filters: {
    maxPrice: number;
    country: string;
    minTimescale: number;
  };
  handleFilterChange: (filterName: string, value: string | number) => void;
  clearFilters: () => void;
  projects: any[]; // Reemplaza 'any' por el tipo correcto de tus objetos de proyecto
}

const Filters: React.FC<FiltersProps> = ({
  filters,
  handleFilterChange,
  clearFilters,
  projects,
}) => {
  const countries = [...new Set(projects.map(project => project.ubication.split(',')[1].trim()))];

  return (
    <div id="filtros" className="mt-10 flex flex-col md:flex-row justify-center gap-7 text-black bg-white p-4 rounded-xl">
      <label className='flex gap-3 items-center'>
        <p className='font-bold '>Precio máximo:</p>
        <p>{Math.min(...projects.map(project => project.price))}</p>
        <input
          type="range"
          min={Math.min(...projects.map(project => project.price))}
          max={Math.max(...projects.map(project => project.price))}
          step={1}
          value={filters.maxPrice}
          onChange={e => handleFilterChange('maxPrice', e.target.value)}
        />
        <p>{filters.maxPrice}</p>
      </label>
      <label className='flex gap-3 items-center'>
        <p className='font-bold'>País:</p>
        <select
          id='selectCountries'
          value={filters.country}
          onChange={e => handleFilterChange('country', e.target.value)}
          className='rounded-lg bg-gray-100 p-1'
        >
          <option value="">Todos los países</option>
          {countries.map((country, index) => (
            <option key={index} value={country}>
              {country}
            </option>
          ))}
        </select>
      </label>
      <label className='flex gap-3 items-center'>
        <p className='font-bold'>Duración mínima:</p>
        <p>{filters.minTimescale}</p>
        <input
          type="range"
          min={Math.min(...projects.map(project => project.timescale))}
          max={Math.max(...projects.map(project => project.timescale))}
          value={filters.minTimescale}
          onChange={e => handleFilterChange('minTimescale', e.target.value)}
        />
        <p>{Math.max(...projects.map(project => project.timescale))}</p>
      </label>
      <button onClick={clearFilters} className='text-white bg-green_greenplus p-2 rounded-xl hover:bg-black transition-colors'>Limpiar filtros</button>
    </div>
  );
};

export default Filters;