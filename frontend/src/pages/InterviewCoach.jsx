import { useState } from 'react';
import { Mic, Send, Bot, User, PlayCircle } from 'lucide-react';

export default function InterviewCoach() {
  const [hasStarted, setHasStarted] = useState(false);
  const [role, setRole] = useState('Frontend Developer');
  const [difficulty, setDifficulty] = useState('Intermediate');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answer, setAnswer] = useState('');
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [feedback, setFeedback] = useState(null);

  const mockQuestions = [
    "Can you explain the virtual DOM in React and how it improves performance?",
    "What are React Hooks? Can you give an example of when you would use useEffect?",
    "How do you manage state in a large React application?"
  ];

  const handleStart = () => setHasStarted(true);

  const handleSubmitAnswer = () => {
    if (!answer.trim()) return;
    setIsEvaluating(true);
    
    // Simulate AI evaluation
    setTimeout(() => {
      setFeedback({
        score: 80,
        comment: "Good explanation. You correctly identified that the virtual DOM minimizes direct DOM manipulation. To improve, mention the diffing algorithm (reconciliation) explicitly.",
      });
      setIsEvaluating(false);
    }, 1500);
  };

  const handleNextQuestion = () => {
    setAnswer('');
    setFeedback(null);
    if (currentQuestion < mockQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // End of interview
      alert('Interview completed! Check your dashboard for the full report.');
      setHasStarted(false);
      setCurrentQuestion(0);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {!hasStarted ? (
        <div className="bg-white rounded-3xl p-10 shadow-sm border border-slate-200 max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 mb-4">
              <Bot className="h-8 w-8 text-indigo-600" />
            </div>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Configure Your Interview</h1>
            <p className="text-slate-500">Set up your mock interview parameters.</p>
          </div>

          <div className="space-y-6 mb-8">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Target Role</label>
              <select 
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-xl focus:ring-indigo-500 focus:border-indigo-500 block p-3"
              >
                <option>Frontend Developer</option>
                <option>Backend Developer</option>
                <option>Full Stack Developer</option>
                <option>Data Scientist</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Difficulty</label>
              <select 
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-xl focus:ring-indigo-500 focus:border-indigo-500 block p-3"
              >
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
            </div>
          </div>

          <button 
            onClick={handleStart}
            className="w-full flex items-center justify-center py-3 px-4 border border-transparent rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 shadow-md hover:shadow-lg transition-all font-medium text-lg"
          >
            <PlayCircle className="mr-2 h-5 w-5" />
            Start Interview
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Interview Area */}
          <div className="lg:col-span-2 space-y-6">
            {/* Question */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
              <div className="flex items-center mb-4">
                <div className="bg-indigo-100 p-2 rounded-lg mr-3">
                  <Bot className="h-5 w-5 text-indigo-600" />
                </div>
                <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider">Interviewer</h3>
              </div>
              <p className="text-xl font-medium text-slate-900 leading-relaxed">
                {mockQuestions[currentQuestion]}
              </p>
            </div>

            {/* Answer Input */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden focus-within:ring-2 focus-within:ring-indigo-500 focus-within:border-indigo-500 transition-all">
              <textarea
                rows="6"
                className="w-full p-6 border-0 focus:ring-0 resize-none text-slate-700 bg-transparent placeholder-slate-400"
                placeholder="Type your answer here..."
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                disabled={feedback !== null}
              ></textarea>
              <div className="bg-slate-50 px-6 py-3 border-t border-slate-100 flex justify-between items-center">
                <button className="text-slate-400 hover:text-indigo-600 transition-colors p-2">
                  <Mic className="h-5 w-5" />
                </button>
                {!feedback ? (
                  <button 
                    onClick={handleSubmitAnswer}
                    disabled={isEvaluating || !answer.trim()}
                    className="inline-flex items-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg transition-colors disabled:bg-indigo-300"
                  >
                    {isEvaluating ? 'Evaluating...' : 'Submit Answer'}
                    <Send className="ml-2 h-4 w-4" />
                  </button>
                ) : (
                  <button 
                    onClick={handleNextQuestion}
                    className="inline-flex items-center px-4 py-2 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 text-sm font-medium rounded-lg transition-colors"
                  >
                    Next Question
                    <PlayCircle className="ml-2 h-4 w-4" />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar / Feedback Area */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 h-full">
              <h3 className="text-lg font-bold text-slate-900 mb-6 border-b border-slate-100 pb-4">Real-time Feedback</h3>
              
              {!feedback ? (
                <div className="text-center py-10 text-slate-400">
                  <Bot className="h-12 w-12 mx-auto mb-3 opacity-20" />
                  <p className="text-sm">Submit your answer to get AI evaluation and scoring.</p>
                </div>
              ) : (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-slate-500">Score</span>
                    <span className="inline-flex items-center justify-center px-3 py-1 rounded-full text-sm font-bold bg-green-100 text-green-700">
                      {feedback.score}/100
                    </span>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-sm text-slate-700 leading-relaxed">
                    {feedback.comment}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
