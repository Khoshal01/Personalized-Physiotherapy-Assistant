from flask import Flask, request, jsonify,session 
from flask_cors import CORS
from pymongo import MongoClient
from werkzeug.security import generate_password_hash, check_password_hash
from bson import ObjectId
import os
import re
import google
from google.oauth2 import id_token
from google.auth.transport import requests

#email 

#email 


#from pymongo.errors import ConnectionError

app = Flask(__name__)
CORS(app)  # This will allow all domains to access your Flask API


client = MongoClient("mongodb+srv://khoshal:9mjqWNbySgjrQQBi@cluster0.vwiyw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
db = client["chatbot"]
chat_collection = db["chats"]
users_collection = db["user"]
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY', 'default_secret_key')



# '/' route


@app.route('/')
def home():
    return "Hello, World!"


@app.route('/verify-token', methods=['POST'])
def verify_token():
    token = request.json.get('token')

    try:
        # Specify the CLIENT_ID of the app that accesses the backend:
        id_info = id_token.verify_oauth2_token(token, requests.Request(), 'YOUR_GOOGLE_CLIENT_ID')

        # ID token is valid. Get the user's Google Account ID from the decoded token.
        user_id = id_info['sub']
        # Handle login/signup based on user ID

        return jsonify({"message": "Token verified", "user_id": user_id}), 200
    except ValueError:
        # Invalid token
        return jsonify({"message": "Invalid token"}), 400






@app.route('/signup', methods=['POST'])
def signup():
    data = request.json
    name = data.get("name")
    email = data.get("email")
    password = data.get("password")
    confirm_password = data.get("confirm_password")

    # Name validation
    if not name or len(name) < 3:
        return jsonify({"message": "Name must be at least 3 characters long!"}), 400

    # Email validation: checks for a proper format
    email_regex = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
    if not email or not re.match(email_regex, email):
        return jsonify({"message": "Invalid email format!"}), 400

    # Password validation
    if not password or len(password) < 8:
        return jsonify({"message": "Password must be at least 8 characters long!"}), 400

    # Check for at least one digit
    if not re.search(r'\d', password):
        return jsonify({"message": "Password must contain at least one digit!"}), 400

    # Check for at least one uppercase letter
    if not re.search(r'[A-Z]', password):
        return jsonify({"message": "Password must contain at least one uppercase letter!"}), 400

    # Check for at least one lowercase letter
    if not re.search(r'[a-z]', password):
        return jsonify({"message": "Password must contain at least one lowercase letter!"}), 400

    # Check for at least one special character
    if not re.search(r'[!@#$%^&*(),.?":{}|<>]', password):
        return jsonify({"message": "Password must contain at least one special character!"}), 400

    # Password confirmation check
    if password != confirm_password:
        return jsonify({"message": "Passwords do not match!"}), 400

    # Check if user already exists
    if users_collection.find_one({"email": email}):
        return jsonify({"message": "User already exists!"}), 400

    # Insert new user
    hashed_password = generate_password_hash(password)
    users_collection.insert_one(
        {"name": name, "email": email, "password": hashed_password})

    return jsonify({"message": "User created successfully!"}), 201
@app.route('/login', methods=['POST'])
def login():
    data = request.json
    email = data.get("email")
    password = data.get("password")

    # Find user by email
    user = users_collection.find_one({"email": email})
    if not user:
        return jsonify({"message": "User not found!"}), 404

    # Verify password
    if check_password_hash(user["password"], password):
        # Remove sensitive information (password)
        user.pop("password", None)

        # Use user["_id"] directly for session
        session['user_id'] = str(user["_id"])  # Convert ObjectId to string

        # Convert ObjectId to string in the response
        user["_id"] = str(user["_id"])  # Convert ObjectId to string


        return jsonify({"message": "Login successful!", "user": user}), 200
    else:
        return jsonify({"message": "Incorrect password!"}), 401

@app.route('/store_chat', methods=['POST'])
def store_chat():
    data = request.json
    app.logger.info(f"Data received: {data}")
    user_id = data.get("user_id")
    message = data.get("message")
    
    if not user_id or not message:
        return jsonify({"status": "error", "message": "User ID and message are required"}), 400

    try:
        chat_collection.insert_one({
            "user_id": user_id,
            "message": message,
            "timestamp": datetime.datetime.now()
        })
        return jsonify({"status": "success"})
    except Exception as e:
        app.logger.error(f"Error storing chat: {str(e)}")
        return jsonify({"status": "error", "message": str(e)}), 500

# Function to retrieve chat data for a specific user
# Function to retrieve chat data for a specific user
@app.route('/get_chat_data', methods=['POST'])
def get_chat_data():
    data = request.json
    user_id = data.get("user_id")

    try:
        # Fetch all chat messages for the user and sort them by timestamp
        chats = chat_collection.find({"user_id": user_id}).sort("timestamp")
        
        # Format the chat history as pairs of [user_message, bot_response]
        chat_history = []
        for chat in chats:
            if chat["sender"] == "user":
                user_message = chat["message"]
            elif chat["sender"] == "bot":
                bot_response = chat["message"]
                # Append the pair of user message and bot response
                chat_history.append([user_message, bot_response])
        
        # Return chat history in the correct format
        return jsonify(chat_history if chat_history else [])

    except Exception as e:
        return jsonify({"status": "error", "message": str(e)})


if __name__ == '__main__':
    app.run(debug=True)
 