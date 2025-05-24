# 🧠 Personalized Physiotherapy Assistant

Your AI-powered virtual physiotherapist — guiding patients through personalized exercises and intelligent conversations to assist in faster recovery and wellness. 💪🤖❤️

---

## 🚀 Features

- 💬 AI Chatbot using Gradio + RAG
- 📸 Real-time exercise tracking with OpenCV + MediaPipe
- 📂 MongoDB for user data (chat history, progress, etc.)
- 🧠 Qdrant vector database for RAG-based responses
- 📧 Invite doctors for appointments via email
- 🔐 Secure login system 

---

## 🛠️ Tech Stack

| Frontend  | Backend   | AI / Vision | Databases        |
|-----------|-----------|-------------|------------------|
| HTML, CSS | Flask     | OpenCV      | MongoDB          |
| Gradio    | Python    | MediaPipe   | Qdrant (Vectors) |

---

## 🧪 How It Works

1. **User signs up** and logs in to the platform
2. **Chatbot interface** (Gradio) answers questions & guides the user
3. **Exercise tracking** detects pose angles via webcam
4. **All interactions** (chat, exercises) are stored in MongoDB
5. **User can invite doctors** via email to review their case

---

## 📸 Screenshots
![WhatsApp Image 2025-04-27 at 13 20 23_acb1f929](https://github.com/user-attachments/assets/fe2ccbf6-25a7-48db-9848-2a683cab219f)

![WhatsApp Image 2025-04-27 at 14 06 16_34142cfb](https://github.com/user-attachments/assets/8bab79d1-8cf6-4588-9648-2e75d4c7afac)

![WhatsApp Image 2025-04-27 at 14 09 10_f8a133f2](https://github.com/user-attachments/assets/c3e4363c-1fc3-4b69-87b5-4a30daef021e)

![WhatsApp Image 2025-04-27 at 14 38 32_066dabba](https://github.com/user-attachments/assets/9517f1ca-b977-46f9-ae8f-079ea43c11c4)


## 📦 Setup Locally

To run this project on your machine:

```bash
# Clone the repository
git clone https://github.com/Khoshal01/Personalized-Physiotherapy-Assistant.git
cd Personalized-Physiotherapy-Assistant

# Set up Python virtual environment
python -m venv venv
venv\Scripts\activate   # On Windows
# source venv/bin/activate  # On macOS/Linux

# Install all dependencies
pip install -r requirements.txt

# Run the Flask backend
python app.py

# In a new terminal (with virtual environment activated), run the Gradio chatbot
python chatbot.py
```` 

---

## 📃 License

This project is licensed under the MIT License © 2025 Personalized Physiotherapy Assistant Group.

