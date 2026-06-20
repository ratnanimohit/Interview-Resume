from fastapi import FastAPI, Depends, HTTPException, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import os
import PyPDF2
import io

app = FastAPI(title="AI Interview Coach API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "Welcome to AI Interview Coach API"}

# Basic mock endpoints to start
@app.post("/upload-resume")
async def upload_resume(file: UploadFile = File(...)):
    try:
        content = await file.read()
        pdf_reader = PyPDF2.PdfReader(io.BytesIO(content))
        text = ""
        for page in pdf_reader.pages:
            text += page.extract_text() + "\n"
        
        # Mock AI evaluation based on text length and some keywords
        skills = ["Python", "JavaScript", "React", "FastAPI", "MongoDB"] if "python" in text.lower() else ["HTML", "CSS"]
        score = min(100, 50 + len(text) // 100)
        
        return {
            "resume_score": score,
            "skills": skills,
            "feedback": "Your resume has a good structure. Consider adding more measurable achievements.",
            "extracted_text_snippet": text[:200]
        }
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
