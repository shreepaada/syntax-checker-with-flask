from flask import Flask, request, jsonify
from flask_cors import CORS
import subprocess
import os

app = Flask(__name__)
CORS(app)  # Enable CORS for all domains on all routes

# Ensure the 'uploads' directory exists within the current working directory
uploads_dir = os.path.join(os.getcwd(), 'uploads')
os.makedirs(uploads_dir, exist_ok=True)

@app.route('/check-syntax', methods=['POST'])
def check_syntax():
    uploaded_file = request.files['file']
    if uploaded_file and uploaded_file.filename != '':
        # Save the uploaded file temporarily in the uploads directory
        filepath = os.path.join(uploads_dir, uploaded_file.filename)
        uploaded_file.save(filepath)

        # Full path to the CSyntaxChecker.exe (adjust the path as necessary)
        syntax_checker_path = r'CSyntaxChecker.exe'

        # Execute the syntax checker and capture its output
        result = subprocess.run([syntax_checker_path, filepath], capture_output=True, text=True, shell=True)

        # Clean up: remove the uploaded file after processing
        os.remove(filepath)

        # Return the syntax check results as JSON
        return jsonify({'output': result.stdout})
    return jsonify({'error': 'No file provided'}), 400

if __name__ == '__main__':
    app.run(debug=True, port=5000)
 