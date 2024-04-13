from flask import Flask, request, render_template, jsonify
import subprocess
import os

app = Flask(__name__)

# Ensure the 'uploads' directory exists within the current working directory
uploads_dir = os.path.join(os.getcwd(), 'uploads')
os.makedirs(uploads_dir, exist_ok=True)

@app.route('/')
def index():
    # Render an HTML form for file uploads
    return render_template('index.html')  # Make sure you have an index.html file in a folder named templates

@app.route('/check-syntax', methods=['POST'])
def check_syntax():
    uploaded_file = request.files['file']
    if uploaded_file.filename != '':
        # Save the uploaded file temporarily in the uploads directory
        filepath = os.path.join(uploads_dir, uploaded_file.filename)
        uploaded_file.save(filepath)
        
        # Full path to the CSyntaxChecker.exe
        syntax_checker_path = r'CSyntaxChecker.exe'
        
        # Execute the syntax checker and capture its output
        result = subprocess.run([syntax_checker_path, filepath], capture_output=True, text=True, shell=True)
        
        # Clean up: remove the uploaded file after processing
        os.remove(filepath)
        
        # Return the syntax check results as JSON
        return jsonify({'output': result.stdout})
    return jsonify({'error': 'No file provided'}), 400

if __name__ == '__main__':
    app.run(debug=True)
