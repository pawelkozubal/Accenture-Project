import os
from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
import google.generativeai as genai

load_dotenv()
API_KEY = os.getenv("GOOGLE_API_KEY")
MODEL = os.getenv("GOOGLE_MODEL", "gemini-1.5-flash")

if not API_KEY:
    raise RuntimeError("Missing API KEY")

genai.configure(api_key=API_KEY)
app = Flask(__name__)
CORS(app)

@app.route('/generate-prompt', methods=['POST'])
def generate_prompt():
    data = request.get_json() or {}

    # Matching the exact keys from the HTML script's formData
    name = data.get('name', 'User')
    journey = data.get('journey', 'Not specified')
    education = data.get('education', 'Not specified')
    work_style = data.get('workStyle', 'Not specified') # HTML uses workStyle
    tech_exp = data.get('techExp', 'Not specified')     # HTML uses techExp
    interest = data.get('interest', 'Not specified')
    values = data.get('values', 'Not specified')

    prompt = (
        f"Provide career advice for {name}:\n"
        f"Stage: {journey}, Education: {education}, Style: {work_style}, "
        f"Exp: {tech_exp}, Interest: {interest}, Value: {values}.\n"
        "Give 3 clear next steps."
    )

    try:
        model = genai.GenerativeModel(MODEL)
        response = model.generate_content(prompt)
        return jsonify({'success': True, 'response': response.text}), 200
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)