import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface CommitmentProps {
  onNext: (commitment: string) => void;
  onBack: () => void;
  initialValue?: string;
}

const commitments = [
  { id: 'no-idea', label: 'No Idea', size: 120 },
  { id: 'less-than-1', label: 'Less than\n1 year', size: 150 },
  { id: '1-2', label: '1 - 2 years', size: 180 },
  { id: '2-plus', label: '2 years or\nmore', size: 210 },
];

export default function Commitment({ onNext, onBack, initialValue }: CommitmentProps) {
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
            What length of commitment are you<br className="hidden sm:block" />
            <span className="sm:inline"> open to?</span>
          </h1>
          
          <div className="flex items-end justify-center gap-6 sm:gap-10 md:gap-16 mb-6 sm:mb-8 overflow-x-auto px-4">
            {commitments.map((commitment) => (
              <div key={commitment.id} className="flex flex-col items-center gap-4 sm:gap-6 min-w-[80px] sm:min-w-[100px]">
                <div
                  onClick={() => setSelected(commitment.id)}
                  className="rounded-full cursor-pointer transition-all border-4"
                  style={{
                    width: `${commitment.size * 0.7}px`,
                    height: `${commitment.size * 0.7}px`,
                    borderColor: selected === commitment.id ? '#C84A47' : '#C84A47',
                    opacity: selected && selected !== commitment.id ? 0.3 : 1,
                  }}
                />
                <p className="text-xs sm:text-sm md:text-base text-center whitespace-pre-line font-medium">
                  {commitment.label}
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
