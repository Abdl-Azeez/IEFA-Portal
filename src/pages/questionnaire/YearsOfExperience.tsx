import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface YearsOfExperienceProps {
  onNext: (years: string) => void;
  onBack: () => void;
  initialValue?: string;
}

const experiences = [
  { id: 'no-experience', label: 'No\nExperience', size: 100 },
  { id: 'less-than-1', label: 'Less than\n1 year', size: 130 },
  { id: '1-5', label: '1 - 5 years', size: 160 },
  { id: '6-10', label: '6 - 10 years', size: 190 },
  { id: 'more-than-10', label: 'More than\n10 years', size: 220 },
];

export default function YearsOfExperience({ onNext, onBack, initialValue }: YearsOfExperienceProps) {
  const [selected, setSelected] = useState<string | undefined>(initialValue);

  const handleContinue = () => {
    if (selected) {
      onNext(selected);
    }
  };

  return (
    <div className="min-h-screen  flex flex-col">
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 py-8 sm:py-12">
        <div className="w-full max-w-5xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 md:mb-16 px-4">
            How many years of experience do you<br className="hidden sm:block" />
            <span className="sm:inline"> have working in finance?</span>
          </h1>
          
          <div className="flex items-end justify-center gap-4 sm:gap-8 md:gap-12 mb-6 sm:mb-8 overflow-x-auto px-4">
            {experiences.map((exp) => (
              <div key={exp.id} className="flex flex-col items-center gap-4 sm:gap-6 min-w-[70px] sm:min-w-[100px]">
                <div
                  onClick={() => setSelected(exp.id)}
                  className="rounded-full cursor-pointer transition-all border-4"
                  style={{
                    width: `${exp.size * 0.7}px`,
                    height: `${exp.size * 0.7}px`,
                    borderColor: selected === exp.id ? '#C84A47' : '#C84A47',
                    opacity: selected && selected !== exp.id ? 0.3 : 1,
                  }}
                />
                <p className="text-xs sm:text-sm md:text-base text-center whitespace-pre-line font-medium">
                  {exp.label}
                </p>
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
