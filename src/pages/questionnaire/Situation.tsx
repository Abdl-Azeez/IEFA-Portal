import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface SituationProps {
  onNext: (situation: string) => void;
  onBack: () => void;
  initialValue?: string;
}

const situations = [
  { id: 'student', label: 'Islamic Finance Student' },
  { id: 'changing-career', label: 'Changing Career' },
  { id: 'if-profession', label: 'IF Profession' },
  { id: 'other', label: 'Other' },
];

export default function Situation({ onNext, onBack, initialValue }: SituationProps) {
  const [selected, setSelected] = useState<string | undefined>(initialValue);

  const handleContinue = () => {
    if (selected) {
      onNext(selected);
    }
  };

  return (
    <div className="min-h-screen  flex flex-col">
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 py-8 sm:py-12">
        <div className="w-full max-w-4xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 md:mb-16 px-4">
            Which of these best describes your<br className="hidden sm:block" />
            <span className="sm:inline"> situation?</span>
          </h1>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-2xl mx-auto px-4">
            {situations.map((situation) => (
              <div
                key={situation.id}
                onClick={() => setSelected(situation.id)}
                className={`border-2 rounded-lg p-6 sm:p-8 cursor-pointer transition-all flex items-center gap-3 sm:gap-4 ${
                  selected === situation.id
                    ? 'border-[#C84A47] bg-[#FFF5F5]'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
              >
                <div
                  className={`w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0 rounded-full border-2 flex items-center justify-center ${
                    selected === situation.id
                      ? 'border-[#C84A47]'
                      : 'border-gray-400'
                  }`}
                >
                  {selected === situation.id && (
                    <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#C84A47]" />
                  )}
                </div>
                <span className="text-base sm:text-lg font-medium">{situation.label}</span>
              </div>
            ))}
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
          disabled={!selected}
          className="bg-[#C84A47] hover:bg-[#A83D3A] text-white px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 rounded-full flex items-center gap-2 text-sm sm:text-base"
        >
          Continue
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </Button>
      </div>
    </div>
  );
}
