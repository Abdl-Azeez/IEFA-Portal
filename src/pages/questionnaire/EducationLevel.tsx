import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface EducationLevelProps {
  onNext: (level: string) => void;
  initialValue?: string;
}

const educationLevels = [
  { id: 'no-formal', label: 'No formal Islamic\nFinance education', height: 120 },
  { id: 'completing-bachelor', label: 'Completing a\nbachelor\'s degree', height: 160 },
  { id: 'bachelor', label: 'Bachelor\'s degree', height: 200 },
  { id: 'master', label: 'MAster\'s degree', height: 240 },
  { id: 'doctoral', label: 'Dorctoral degree', height: 280 },
];

export default function EducationLevel({ onNext, initialValue }: EducationLevelProps) {
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
            What is your highest level of education<br className="hidden sm:block" />
            <span className="sm:inline"> in Islamic finance?</span>
          </h1>
          
          <div className="flex items-end justify-center gap-2 sm:gap-4 md:gap-8 mb-12 sm:mb-16 md:mb-20 overflow-x-auto px-4">
            {educationLevels.map((level) => (
              <div key={level.id} className="flex flex-col items-center gap-2 sm:gap-3 md:gap-4 min-w-[60px] sm:min-w-[80px]">
                <div
                  onClick={() => setSelected(level.id)}
                  className="w-12 sm:w-16 md:w-24 rounded-sm cursor-pointer transition-all"
                  style={{
                    height: `${level.height * 0.6}px`,
                    background: selected === level.id
                      ? 'linear-gradient(180deg, #C84A47 0%, #8B1E1E 100%)'
                      : 'linear-gradient(180deg, #C84A47 0%, #8B1E1E 100%)',
                    opacity: selected && selected !== level.id ? 0.4 : 1,
                  }}
                />
                <div className="flex flex-col items-center gap-1 sm:gap-2">
                  <div
                    onClick={() => setSelected(level.id)}
                    className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full border-2 cursor-pointer flex items-center justify-center transition-all ${
                      selected === level.id
                        ? 'border-[#C84A47] bg-white'
                        : 'border-gray-400 bg-white'
                    }`}
                  >
                    {selected === level.id && (
                      <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full bg-[#C84A47]" />
                    )}
                  </div>
                  <p className="text-[10px] sm:text-xs md:text-sm text-center whitespace-pre-line">
                    {level.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between px-4 sm:px-8 md:px-12 py-4 sm:py-6 md:py-8 bg-white border-t">
        <button className="flex items-center gap-1 sm:gap-2 text-sm sm:text-base text-gray-700 hover:text-gray-900">
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
