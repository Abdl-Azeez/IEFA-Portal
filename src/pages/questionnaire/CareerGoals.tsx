import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface CareerGoalsProps {
  onNext: (goals: string[]) => void;
  onBack: () => void;
  initialValue?: string[];
}

const goals = [
  { id: 'build-network', label: 'Build my network' },
  { id: 'develop-skills', label: 'Develop new skills' },
  { id: 'refresh-skills', label: 'Refresh existing skills' },
  { id: 'professional-recognition', label: 'Gain professional recognition' },
  { id: 'specialization', label: 'Career specialization' },
];

export default function CareerGoals({ onNext, onBack, initialValue = [] }: CareerGoalsProps) {
  const [selected, setSelected] = useState<string[]>(initialValue);

  const handleToggle = (goalId: string) => {
    setSelected((prev) => {
      if (prev.includes(goalId)) {
        return prev.filter((id) => id !== goalId);
      } else {
        return [...prev, goalId];
      }
    });
  };

  const handleContinue = () => {
    onNext(selected);
  };

  return (
    <div className="min-h-screen  flex flex-col">
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 py-8 sm:py-12">
        <div className="w-full max-w-4xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4 px-4">
            Which of the following best describes<br className="hidden sm:block" />
            <span className="sm:inline"> your career goals?</span>
          </h1>
          <p className="text-center text-sm sm:text-base text-gray-600 mb-8 sm:mb-12 px-4">
            You can select more than one
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-3xl mx-auto px-4">
            {goals.map((goal) => (
              <div
                key={goal.id}
                onClick={() => handleToggle(goal.id)}
                className={`border-2 rounded-lg p-4 sm:p-6 cursor-pointer transition-all flex items-center gap-3 sm:gap-4 ${
                  selected.includes(goal.id)
                    ? 'border-[#C84A47] bg-[#FFF5F5]'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
              >
                <div
                  className={`w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 rounded ${
                    selected.includes(goal.id)
                      ? 'bg-[#C84A47]'
                      : 'bg-white border-2 border-gray-300'
                  }`}
                />
                <span className="text-sm sm:text-base text-[#C84A47] font-medium">{goal.label}</span>
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
          className="bg-[#C84A47] hover:bg-[#A83D3A] text-white px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 rounded-full flex items-center gap-2 text-sm sm:text-base"
        >
          Continue
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </Button>
      </div>
    </div>
  );
}
