import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface LearningHoursProps {
  onNext: (hours: number) => void;
  onBack: () => void;
  initialValue?: number;
}

export default function LearningHours({ onNext, onBack, initialValue = 0 }: LearningHoursProps) {
  const [hours, setHours] = useState<number>(initialValue);

  const handleContinue = () => {
    onNext(hours);
  };

  return (
    <div className="min-h-screen  flex flex-col">
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 py-8 sm:py-12">
        <div className="w-full max-w-4xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4 px-4">
            On average, how many hours per week<br className="hidden sm:block" />
            <span className="sm:inline"> can you devote to learning?</span>
          </h1>
          <p className="text-center text-xs sm:text-sm md:text-base text-gray-600 mb-8 sm:mb-12 md:mb-16 px-4">
            Keep in mind, many employers offer dedicated time for relevant learning during<br className="hidden sm:block" />
            <span className="sm:inline"> work hours.</span>
          </p>
          
          <div className="flex flex-col items-center gap-8 sm:gap-10 md:gap-12 max-w-2xl mx-auto px-4">
            <div className="w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 rounded-full bg-gradient-to-b from-[#C84A47] to-[#8B1E1E] flex items-center justify-center relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-32 border-l-4 border-black origin-bottom"
                style={{
                  transform: `translate(-50%, -50%) rotate(${(hours / 10) * 180 - 90}deg)`,
                  transformOrigin: 'bottom center',
                }}
              />
            </div>

            <div className="w-full">
              <input
                type="range"
                min="0"
                max="10"
                step="0.1"
                value={hours}
                onChange={(e) => setHours(parseFloat(e.target.value))}
                className="w-full h-3 rounded-full appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #E89D9B 0%, #E89D9B ${(hours / 10) * 100}%, #E89D9B ${(hours / 10) * 100}%, #E89D9B 100%)`,
                }}
              />
              <div className="relative w-full h-6">
                <div
                  className="absolute w-6 h-6 rounded-full bg-[#C84A47] -top-3"
                  style={{ left: `calc(${(hours / 10) * 100}% - 12px)` }}
                />
              </div>
              <div className="flex justify-between text-xs sm:text-sm mt-4">
                <span>I'm not sure</span>
                <span className="text-center">Up to 5 hours per<br/>week</span>
                <span className="text-center">Up to 10 hours<br/>per week</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between px-4 sm:px-8 md:px-12 py-4 sm:py-6 md:py-8 bg-white border-t">
        <button
          onClick={onBack}
          className="flex items-center gap-1 sm:gap-2 text-sm sm:text-base text-gray-700 hover:text-gray-900"
        >
          <span>←</span>
          <span>Back</span>
        </button>
        <Button
          onClick={handleContinue}
          className="bg-[#C84A47] hover:bg-[#A83D3A] text-white px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 rounded-full flex items-center gap-2 text-sm sm:text-base"
        >
          Continue
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </Button>
      </div>
    </div>
  );
}
