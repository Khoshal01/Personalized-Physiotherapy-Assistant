from pymongo import MongoClient
import datetime

# MongoDB connection
client = MongoClient("mongodb+srv://khoshal:9mjqWNbySgjrQQBi@cluster0.vwiyw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
db = client["chatbot"]
chat_collection = db["chats"]

# Function to store chat message in the database
def store_chat_message(user_id, message, sender):
    chat_data = {
        "user_id": user_id,
        "message": message,
        "sender": sender,  # 'user' or 'bot'
        "timestamp": datetime.datetime.now()
    }
    result = chat_collection.insert_one(chat_data)
    return {"status": "success", "inserted_id": str(result.inserted_id)}

# Function to retrieve chat history for a specific user
def retrieve_chat_history(user_id):
    chats = chat_collection.find({"user_id": user_id}).sort("timestamp")
    chat_history = [
        {"message": chat["message"], "sender": chat["sender"], "timestamp": chat["timestamp"]}
        for chat in chats
    ]
    return chat_history

# Example usage
if __name__ == "__main__":
    # Storing a chat message
    store_result = store_chat_message("user123", "Hello, how can I help you?", "bot")
    print(store_result)

    # Retrieving chat history
    chat_history = retrieve_chat_history("user123")
    for chat in chat_history:
        print(f"{chat['timestamp']} - {chat['sender']}: {chat['message']}")
