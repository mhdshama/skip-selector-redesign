import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertTriangle, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Skip } from '../types/skip';

type Props = {
  skip: Skip;
  selected: boolean;
  onSelect: () => void;
};

export const SkipCard = ({ skip, selected, onSelect }: Props) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0.9, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onSelect}
      className={`cursor-pointer rounded-3xl overflow-hidden shadow-xl bg-white relative ${selected ? 'border-blue-600 ring-2 ring-blue-500 shadow-lg' : 'border-muted'}`}
    >
      <div className="relative w-full h-48 sm:h-56">
        <img
          src={`https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/${skip.size}-yarder-skip.jpg`}
          alt={`${skip.size} yard skip`}
          className="object-cover w-full h-full"
        />
      </div>

      <CardContent className="rounded-t-3xl bg-white p-4">
        <div className="flex justify-between items-center">
          <CardTitle className="text-base font-medium text-gray-800">
            {skip.size} Yard Skip
          </CardTitle>
          <span className="text-xl font-bold text-gray-900">
            £{skip.price_before_vat}
          </span>
        </div>

        <p className="text-sm text-gray-500 mt-1">
          {skip.hire_period_days} day hire period
        </p>

        {!skip.allowed_on_road && (
          <div className="flex items-center gap-2 text-yellow-500 text-sm font-medium mt-2">
            <AlertTriangle className="w-4 h-4" />
            Not Allowed On The Road
          </div>
        )}

        <div className="mt-4 flex justify-between items-center">

          <Button
            variant={selected ? 'default' : 'outline'}
            onClick={(e) => {
              e.stopPropagation(); // prevent card-level click
              onSelect();
            }}
            className="w-full"
          >
            {selected ? 'Selected' : 'Select This Skip'}
          </Button>
        </div>
      </CardContent>
    </motion.div>
  );
};