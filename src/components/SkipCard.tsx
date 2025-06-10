import type { Skip } from "../types/skip";

interface SkipCardProps {
  skip: Skip;
  isSelected: boolean;
  onSelect: () => void;
}

const SkipCard = ({ skip, isSelected, onSelect }: SkipCardProps) => {
  const priceWithVAT = skip.price_before_vat * (1 + skip.vat / 100);

  return (
    <div
      onClick={onSelect}
      className={`cursor-pointer rounded-2xl border backdrop-blur-sm bg-white/80 p-4 shadow-lg transition-transform hover:scale-105 ${
        isSelected ? 'border-blue-700 ring-2 ring-blue-300' : 'border-gray-200'
      }`}      
    >
      <div className="text-xl font-bold mb-2">{skip.size} Yard Skip</div>
      <p className="text-gray-500 mb-1">Hire: {skip.hire_period_days} days</p>
      <p className="text-gray-500 mb-1">
        On-road allowed: {skip.allowed_on_road ? 'Yes' : 'No'}
      </p>
      <p className="text-gray-500 mb-1">
        Heavy waste: {skip.allows_heavy_waste ? 'Yes' : 'No'}
      </p>
      <div className="text-blue-700 font-semibold text-lg mt-2">£{priceWithVAT.toFixed(2)}</div>
    </div>
  );
};

export default SkipCard;
