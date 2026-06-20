import { Link } from 'react-router-dom';
import { FileText, Bot, TrendingUp, Clock } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Welcome back, User</h1>
          <p className="mt-1 text-slate-500">Track your progress and continue your preparation.</p>
        </div>
      </div>

      {/* Action Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <Link to="/resume" className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:border-blue-300 hover:shadow-md transition-all group flex items-start">
          <div className="bg-blue-50 rounded-xl p-4 mr-5 group-hover:bg-blue-100 transition-colors">
            <FileText className="text-blue-600 h-8 w-8" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">Analyze Resume</h3>
            <p className="text-sm text-slate-500">Upload a new resume to get updated feedback and ATS scores.</p>
          </div>
        </Link>

        <Link to="/interview" className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:border-indigo-300 hover:shadow-md transition-all group flex items-start">
          <div className="bg-indigo-50 rounded-xl p-4 mr-5 group-hover:bg-indigo-100 transition-colors">
            <Bot className="text-indigo-600 h-8 w-8" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-1 group-hover:text-indigo-600 transition-colors">Start Mock Interview</h3>
            <p className="text-sm text-slate-500">Practice with our AI coach tailored to your target role.</p>
          </div>
        </Link>
      </div>

      {/* Stats */}
      <h2 className="text-xl font-bold text-slate-900 mb-4">Your Statistics</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-100">
          <div className="flex items-center text-slate-500 mb-2">
            <TrendingUp className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">Avg. Interview Score</span>
          </div>
          <div className="text-3xl font-bold text-slate-900">78<span className="text-lg text-slate-400">/100</span></div>
        </div>
        <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-100">
          <div className="flex items-center text-slate-500 mb-2">
            <FileText className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">Latest Resume Score</span>
          </div>
          <div className="text-3xl font-bold text-slate-900">85<span className="text-lg text-slate-400">/100</span></div>
        </div>
      </div>

      {/* Recent Activity */}
      <h2 className="text-xl font-bold text-slate-900 mb-4">Recent Activity</h2>
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <ul className="divide-y divide-slate-100">
          <li className="p-5 flex items-center justify-between hover:bg-slate-50">
            <div className="flex items-center">
              <Bot className="h-5 w-5 text-indigo-500 mr-4" />
              <div>
                <p className="text-sm font-medium text-slate-900">Frontend Developer Mock Interview</p>
                <p className="text-xs text-slate-500 flex items-center mt-1">
                  <Clock className="h-3 w-3 mr-1" /> 2 days ago
                </p>
              </div>
            </div>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
              Score: 82
            </span>
          </li>
          <li className="p-5 flex items-center justify-between hover:bg-slate-50">
            <div className="flex items-center">
              <FileText className="h-5 w-5 text-blue-500 mr-4" />
              <div>
                <p className="text-sm font-medium text-slate-900">Resume Upload: JohnDoe_Resume.pdf</p>
                <p className="text-xs text-slate-500 flex items-center mt-1">
                  <Clock className="h-3 w-3 mr-1" /> 5 days ago
                </p>
              </div>
            </div>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              Score: 85
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
