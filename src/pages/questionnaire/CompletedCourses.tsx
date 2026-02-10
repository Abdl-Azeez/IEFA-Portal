import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface CompletedCoursesProps {
  onNext: (courses: string[]) => void;
  onBack: () => void;
  initialValue?: string[];
}

const courses = [
  { id: 'ethical-governance', label: 'Ethical Governance' },
  { id: 'islamic-banking', label: 'Islamic Banking and NIF' },
  { id: 'ethical-investment', label: 'Ethial Investment' },
  { id: 'fintech', label: 'Fintech & Digital Innovation' },
  { id: 'data-technology', label: 'Data, Technology and Cybersecurity' },
  { id: 'business-support', label: 'Business Support Skill' },
  { id: 'none', label: 'None of these' },
];

export default function CompletedCourses({ onNext, onBack, initialValue = [] }: CompletedCoursesProps) {
  const [selected, setSelected] = useState<string[]>(initialValue);

  const handleToggle = (courseId: string) => {
    if (courseId === 'none') {
      setSelected(selected.includes('none') ? [] : ['none']);
    } else {
      setSelected((prev) => {
        const filtered = prev.filter((id) => id !== 'none');
        if (prev.includes(courseId)) {
          return filtered.filter((id) => id !== courseId);
        } else {
          return [...filtered, courseId];
        }
      });
    }
  };

  const handleContinue = () => {
    onNext(selected);
  };

  return (
    <div className="min-h-screen  flex flex-col">
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 py-8 sm:py-12">
        <div className="w-full max-w-4xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4 px-4">
            Which of these from IEFA Institute have<br className="hidden sm:block" />
            <span className="sm:inline"> you already completed?</span>
          </h1>
          <p className="text-center text-sm sm:text-base text-gray-600 mb-8 sm:mb-12 px-4">
            Please select all that apply or select 'None of these'
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto px-4">
            {courses.map((course) => (
              <div
                key={course.id}
                onClick={() => handleToggle(course.id)}
                className={`border-2 rounded-lg p-4 sm:p-6 cursor-pointer transition-all flex items-center gap-3 sm:gap-4 ${
                  selected.includes(course.id)
                    ? 'border-[#C84A47] bg-[#FFF5F5]'
                    : 'border-gray-300 hover:border-gray-400'
                } ${course.id === 'none' ? 'col-span-1' : ''}`}
              >
                <div
                  className={`w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 rounded ${
                    selected.includes(course.id)
                      ? 'bg-[#C84A47]'
                      : 'bg-white border-2 border-gray-300'
                  }`}
                />
                <span className="text-sm sm:text-base text-[#C84A47] font-medium">{course.label}</span>
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
