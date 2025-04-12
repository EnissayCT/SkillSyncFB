import os
import fitz  
import openai
import json
from flask import Flask, request, jsonify

app = Flask(__name__)

openai.api_key = "sk-proj-zTxbZ__c3vTWW__nzfz5RT76rmGXMyaDr5YvsVJc2_QSIYBukbiR41Eglq2sKzxPve4Q28Zw8rKABIZjvCoroqHYA"  # Replace with your OpenAI API key

def extract_text_from_pdf(pdf_path):
    doc = fitz.open(pdf_path)
    text = ""
    for page in doc:
        text += page.get_text()
    return text

def ask_gpt_to_extract(text):
    prompt = f"""
You are a resume parser. Extract the following from the resume text below:
- Full Name
- Skills (list)
- Education (school/college/institute names only)
- Age (if found or can be inferred)
- Years of experience
- 5 Key keywords from the bio or summary
- Any other important hiring-related info (like experience, certifications)

Respond in JSON format only.

Resume Text:
\"\"\"{text}\"\"\"
"""

    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo", 
        messages=[{"role": "user", "content": prompt}],
        temperature=0
    )

    return response['choices'][0]['message']['content']

def calculate_score(extracted_info, criteria):
    score = 0

    skills_match = sum(1 for skill in extracted_info["skills"] if skill.lower() in [s.lower() for s in criteria["preferred_skills"]])
    score += (skills_match / len(criteria["preferred_skills"])) * 20  # Max 20 points for skills

    education_match = sum(1 for edu in extracted_info["education"] if edu.lower() in [e.lower() for e in criteria["preferred_education"]])
    score += (education_match / len(criteria["preferred_education"])) * 15  # Max 15 points for education

    if criteria["preferred_age"][0] <= extracted_info["age"] <= criteria["preferred_age"][1]:
        score += 10  # Max 10 points for age

    bio_match = sum(1 for keyword in criteria["preferred_bio_keywords"] if keyword.lower() in extracted_info["bio_keywords"])
    score += (bio_match / len(criteria["preferred_bio_keywords"])) * 20  # Max 20 points for bio keywords

    if extracted_info["years_of_experience"] >= criteria["preferred_years_of_experience"]:
        score += 25  # Max 25 points for years of experience

    return score

@app.route('/process_resumes', methods=['POST'])
def process_resumes():
    if 'files' not in request.files:
        return jsonify({"error": "No files part"}), 400
    
    files = request.files.getlist('files')
    
    if not files:
        return jsonify({"error": "No files selected"}), 400

    try:
        criteria = request.json  
    except Exception as e:
        return jsonify({"error": "Invalid JSON for criteria: " + str(e)}), 400
    
    resumes_data = []
    try:
        for file in files:
            file_path = os.path.join('uploads', file.filename)
            file.save(file_path)

            text = extract_text_from_pdf(file_path)
            
            extracted_info = ask_gpt_to_extract(text)
            extracted_info = json.loads(extracted_info)  
            
            score = calculate_score(extracted_info, criteria)
            extracted_info['score'] = score

            resumes_data.append(extracted_info)

        resumes_data.sort(key=lambda x: x['score'], reverse=True)
        return jsonify({"ranked_resumes": resumes_data}), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    if not os.path.exists('uploads'):
        os.makedirs('uploads')
        
    app.run(debug=True, host='0.0.0.0', port=5000)
