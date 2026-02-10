export interface QuestionnaireData {
  educationLevel?: string;
  completedCourses: string[];
  situation?: string;
  yearsOfExperience?: string;
  careerGoals: string[];
  investmentTopics: string[];
  learningHours?: number;
  commitment?: string;
}

export const initialQuestionnaireData: QuestionnaireData = {
  educationLevel: undefined,
  completedCourses: [],
  situation: undefined,
  yearsOfExperience: undefined,
  careerGoals: [],
  investmentTopics: [],
  learningHours: undefined,
  commitment: undefined,
};
