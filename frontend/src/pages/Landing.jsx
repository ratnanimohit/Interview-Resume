import { Link } from 'react-router-dom';
import { Bot, FileText, BrainCircuit, ArrowRight } from 'lucide-react';

export default function Landing() {
  return (
    <div className="bg-slate-50 min-h-full">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-8">
          Master Your Next <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Interview</span>
        </h1>
        <p className="mt-4 max-w-2xl text-xl text-slate-600 mx-auto mb-10">
          AI Interview Coach helps you optimize your resume and practice mock interviews with real-time feedback, so you can land your dream job with confidence.
        </p>
        <div className="flex justify-center space-x-4">
          <Link to="/register" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-200">
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <Link to="/login" className="inline-flex items-center justify-center px-8 py-3 border border-slate-300 text-base font-medium rounded-xl text-slate-700 bg-white hover:bg-slate-50 shadow-sm transition-all duration-200">
            Sign In
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="bg-blue-100 rounded-lg w-12 h-12 flex items-center justify-center mb-6">
              <FileText className="text-blue-600 h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Resume Analyzer</h3>
            <p className="text-slate-600">
              Upload your PDF resume and get instant, AI-driven feedback on your skills, ATS compatibility, and areas for improvement.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="bg-indigo-100 rounded-lg w-12 h-12 flex items-center justify-center mb-6">
              <Bot className="text-indigo-600 h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Mock Interviews</h3>
            <p className="text-slate-600">
              Practice tailored interview questions for your specific role and difficulty level.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="bg-purple-100 rounded-lg w-12 h-12 flex items-center justify-center mb-6">
              <BrainCircuit className="text-purple-600 h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Smart Evaluation</h3>
            <p className="text-slate-600">
              Receive detailed scoring on technical knowledge and communication skills to track your progress over time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
