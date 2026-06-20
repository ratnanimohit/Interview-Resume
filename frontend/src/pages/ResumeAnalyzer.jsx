import { useState } from 'react';
import { UploadCloud, FileText, CheckCircle, AlertCircle } from 'lucide-react';

export default function ResumeAnalyzer() {
  const [file, setFile] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState(null);

  const handleFileUpload = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleAnalyze = async () => {
    if (!file) return;
    setIsAnalyzing(true);
    
    // Simulating API call to backend
    setTimeout(() => {
      setResult({
        score: 85,
        skills: ['React', 'JavaScript', 'Node.js', 'Tailwind CSS', 'Git'],
        feedback: 'Your resume has a strong focus on frontend technologies. Consider adding more metrics to your experience section to demonstrate impact.',
        strengths: ['Clear structure', 'Relevant skills for frontend roles', 'Good educational background'],
        improvements: ['Add quantifiable achievements (e.g., "Improved load time by 20%")', 'Include links to live projects or GitHub repositories'],
      });
      setIsAnalyzing(false);
    }, 2000);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-bold text-slate-900 mb-2">Resume Analyzer</h1>
      <p className="text-slate-500 mb-8">Upload your PDF resume to get instant, AI-driven feedback.</p>

      {!result ? (
        <div className="bg-white rounded-2xl p-10 shadow-sm border border-slate-200 text-center">
          <div className="max-w-md mx-auto">
            <div className="flex justify-center mb-6">
              <div className="bg-blue-50 p-4 rounded-full">
                <UploadCloud className="h-12 w-12 text-blue-500" />
              </div>
            </div>
            <h3 className="text-xl font-medium text-slate-900 mb-2">Upload your resume</h3>
            <p className="text-slate-500 mb-6">PDF files up to 5MB are supported.</p>
            
            <div className="flex flex-col items-center">
              <label className="cursor-pointer bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 font-medium py-3 px-6 rounded-xl transition-colors mb-4 w-full text-center shadow-sm">
                <span>Select PDF File</span>
                <input type="file" className="hidden" accept=".pdf" onChange={handleFileUpload} />
              </label>
              
              {file && (
                <div className="flex items-center text-sm text-slate-700 bg-slate-50 py-2 px-4 rounded-lg w-full mb-6 border border-slate-200">
                  <FileText className="h-4 w-4 mr-2 text-blue-500" />
                  <span className="truncate">{file.name}</span>
                </div>
              )}
              
              <button
                onClick={handleAnalyze}
                disabled={!file || isAnalyzing}
                className={`w-full py-3 px-6 rounded-xl font-medium text-white shadow-sm transition-all ${
                  !file || isAnalyzing 
                    ? 'bg-blue-300 cursor-not-allowed' 
                    : 'bg-blue-600 hover:bg-blue-700 hover:shadow-md'
                }`}
              >
                {isAnalyzing ? 'Analyzing...' : 'Analyze Resume'}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Score Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 text-center h-full">
              <h3 className="text-lg font-medium text-slate-700 mb-6">Overall Score</h3>
              <div className="relative inline-flex items-center justify-center w-40 h-40 rounded-full border-8 border-blue-100 mb-6">
                <div className="absolute inset-0 rounded-full border-8 border-blue-500" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 85%)' }}></div>
                <span className="text-5xl font-bold text-slate-900">{result.score}</span>
              </div>
              <p className="text-slate-600 font-medium">ATS Compatibility: <span className="text-green-600">Excellent</span></p>
              
              <div className="mt-8">
                <button onClick={() => setResult(null)} className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                  Upload another resume
                </button>
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                Detected Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {result.skills.map((skill, index) => (
                  <span key={index} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium border border-blue-100">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
                <AlertCircle className="h-5 w-5 text-amber-500 mr-2" />
                Areas for Improvement
              </h3>
              <p className="text-slate-700 mb-4">{result.feedback}</p>
              <ul className="space-y-2">
                {result.improvements.map((imp, index) => (
                  <li key={index} className="flex items-start text-slate-600 text-sm">
                    <span className="text-amber-500 mr-2">•</span>
                    {imp}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
