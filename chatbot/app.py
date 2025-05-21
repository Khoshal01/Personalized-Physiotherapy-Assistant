import gradio as gr
from exercise_monitor import start_exercise_monitor, start_bridging_exercise_monitor, start_leg_raise_monitor
from model.user import User
from qdrant import model_inference, chatbot
from pymongo import MongoClient
from chat_storage import retrieve_chat_history
import datetime

# Connect to MongoDB
client = MongoClient("mongodb+srv://khoshal:9mjqWNbySgjrQQBi@cluster0.vwiyw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
db = client["chatbot"]
chat_collection = db["chats"]
users_collection = db["user"]
chat_history = []
# current user
current_user = None
def chatbot_response(user_input):
    if current_user is None:
        return "Please log in first before continuing."
    return f"You said: {user_input}"
# Function to fetch and print query parameters
# Function to fetch and print query parameters
def query_params(request: gr.Request):
    global current_user
    if request:
        query_params = dict(request.query_params)
        print(query_params)
        current_user = User(
            query_params["_id"], query_params["name"], query_params["email"])

    return query_params  # Optional: return the params if needed

def initialize_chat_history(user_id):
    global chat_history
    chat_history = retrieve_chat_history(user_id)


# Function to store chat messages in MongoDB (accept sender argument)
def store_chat(user_id, message, sender):
    chat_data = {
        "user_id": user_id,
        "message": message,
        "sender": sender,  # 'user' or 'bot'
        "timestamp": datetime.datetime.now()
    }
    chat_collection.insert_one(chat_data)

# Custom model inference function to store chat messages
# Custom model inference function to store chat messages
def custom_model_inference(message, chatbot_instance=None):
    # Fetch the chat history before calling model_inference
    chat_history = retrieve_chat_history(str(current_user.get_id()))
    
    # Store the user's message in chat history with 'user' sender
    store_chat(str(current_user.get_id()), message, "user")
    
    # Pass both message and chat history to the model_inference function
    response = model_inference(message, chat_history)
    
    # Store the bot's response in chat history with 'bot' sender
    store_chat(str(current_user.get_id()), response, "bot")
    
    return response

# Example of defining retrieve_chat_history before usage
def retrieve_chat_history(user_id):
    chats = chat_collection.find({"user_id": user_id}).sort("timestamp")
    chat_history = [
        [chat["message"], chat["sender"]] for chat in chats
    ]
    return chat_history
initialize_chat_history("user123")
# Chat interface block
with gr.Blocks(
    css="""
    .gradio-container .avatar-container {height: 40px; width: 40px !important;}
    #duplicate-button {margin: auto; color: white; background: #f1a139; border-radius: 100vh; margin-top: 2px; margin-bottom: 2px;}
    """
) as chat:
    chatbot = gr.Chatbot()
    user_id = gr.Textbox(visible=False)  # Store the user ID here, hidden

    def on_message_submit(user_id, user_message):
    # Step 1: Retrieve chat history
        chat_history = retrieve_chat_history(user_id)

        # Step 2: Append the new user message to the history
        chat_history.append({"message": user_message, "sender": "user"})

        # Step 3: Get the bot's response
        bot_response = custom_model_inference(user_message, chat_history)

        # Step 4: Store both user and bot messages in MongoDB
        store_chat(user_id, user_message)  # Store user message
        store_chat(user_id, bot_response)  # Store bot response

        # Return the updated chat history to the chatbot interface
        chat_history.append({"message": bot_response, "sender": "bot"})
        
        return chat_history

    # Gradio Chat Interface
    gr.ChatInterface(
        fn=custom_model_inference,
        chatbot=chatbot,
        multimodal=True,
        autofocus=True,
        concurrency_limit=10,
    )

    # A manual submit button to update the chat history
    #submit_btn = gr.Button("Submit")
    #submit_btn.click(fn=on_message_submit, inputs=[user_id, chatbot], outputs=chatbot)
# Function to handle exercise clicks
def start_exercise(exercise_name, mode="liveCam", path=None):
    print(f"Starting exercise: {exercise_name} with mode: {mode}")
    if (exercise_name == "Bridging"):
        start_bridging_exercise_monitor(user_id=current_user.get_id()) if mode == "liveCam" else start_bridging_exercise_monitor(
            video_path=path, user_id=current_user.get_id())

    if (exercise_name == "leg raise"):
        start_leg_raise_monitor(user_id=current_user.get_id()) if mode == "liveCam" else start_leg_raise_monitor(
            video_path=path, user_id=current_user.get_id())
        
    if (exercise_name == "Ankle plantar"):
        start_leg_raise_monitor(user_id=current_user.get_id()) if mode == "liveCam" else start_leg_raise_monitor(
            video_path=path, user_id=current_user.get_id())
        
    if (exercise_name == "Seated calf stretch"):
        start_leg_raise_monitor(user_id=current_user.get_id()) if mode == "liveCam" else start_leg_raise_monitor(
            video_path=path, user_id=current_user.get_id())
    


    else:
        start_exercise_monitor()
    return f"Started monitoring: {exercise_name}"

# Show Upload Document Module
def show_uploader(file_uploader):
    return gr.update(visible=True, interactive=True)

# Return file name after upload
def handle_upload(file):
    if file is None:
        return "No file selected"
    return file.name

# Exercise interface block with embedded video previews and clickable buttons
with gr.Blocks() as exercise:
    gr.Markdown("### Exercise Gallery")
     
    with gr.Row():
        with gr.Column():
            gr.Video("data/video/exercise1.mp4",
                     label="Bridging", autoplay=True, loop=True)
            with gr.Row():
                ex1_liveCam_button = gr.Button("Live Camera")
                ex1_upload_button = gr.Button("Upload Video")
            ex1_file_input = gr.File(
                label="Select Video", visible=False, interactive=True)

        with gr.Column():
            gr.Video("data/video/Lying leg lift_2.mp4",
                     label="leg raise", autoplay=True, loop=True)
            with gr.Row():
                ex2_liveCam_button = gr.Button("Live Camera")
                ex2_upload_button = gr.Button("Upload Video")
            ex2_file_input = gr.File(
                label="Select Video", visible=False, interactive=True)

    with gr.Row():
        with gr.Column():
            gr.Video("data/video/Ankle plantar Flexion.mp4",
                     label="Ankle plantar", autoplay=True, loop=True)
            with gr.Row():
                ex3_liveCam_button = gr.Button("Live Camera")
                ex3_upload_button = gr.Button("Upload Video")
            ex3_file_input = gr.File(
                label="Select Video", visible=False, interactive=True)

        with gr.Column():
            gr.Video("data/video/Seated calf stretch.mp4",
                     label="Seated calf stretch", autoplay=True, loop=True)
            with gr.Row():
                ex4_liveCam_button = gr.Button("Live Camera")
                ex4_upload_button = gr.Button("Upload Video")
            ex4_file_input = gr.File(
                label="Select Video", visible=False, interactive=True)
            
    with gr.Row():
        with gr.Column():
                gr.Video("data/video/Hamstring lying straight leg stretch.mp4",
                        label="Hamstring lying straight leg stretch", autoplay=True, loop=True)
                with gr.Row():
                    ex4_liveCam_button = gr.Button("Live Camera")
                    ex4_upload_button = gr.Button("Upload Video")
                ex4_file_input = gr.File(
                    label="Select Video", visible=False, interactive=True)
        with gr.Column():
                gr.Video("data/video/file.mp4",
                        label="Hamstring lying straight legs stretch", autoplay=True, loop=True)
                with gr.Row():
                    ex4_liveCam_button = gr.Button("Live Camera")
                    ex4_upload_button = gr.Button("Upload Video")
                ex4_file_input = gr.File(
                    label="Select Video", visible=False, interactive=True)

    def upload_handler(file, exercise_name):
        start_exercise(exercise_name, mode="upload", path=file.name)
        # Hide the file uploader after file is selected
        return gr.update(visible=False)

   # Link buttons to their corresponding exercises
    ex1_liveCam_button.click(
        fn=lambda: start_exercise("Bridging", mode="liveCam"))
    ex1_upload_button.click(fn=lambda: show_uploader(
        ex1_file_input), outputs=ex1_file_input)
    ex1_file_input.change(fn=lambda file: upload_handler(
        file, "Bridging"), inputs=ex1_file_input)

    ex2_liveCam_button.click(
        fn=lambda: start_exercise("Exercise 2", mode="liveCam"))
    ex2_upload_button.click(fn=lambda: show_uploader(
        ex2_file_input), outputs=ex2_file_input)
    ex2_file_input.change(fn=lambda file: upload_handler(
        file, "Exercise 2"), inputs=ex2_file_input)

    ex3_liveCam_button.click(
        fn=lambda: start_exercise("Exercise 3", mode="liveCam"))
    ex3_upload_button.click(fn=lambda: show_uploader(
        ex3_file_input), outputs=ex3_file_input)
    ex3_file_input.change(fn=lambda file: upload_handler(
        file, "Exercise 3"), inputs=ex3_file_input)

    ex4_liveCam_button.click(
        fn=lambda: start_exercise("Exercise 4", mode="liveCam"))
    ex4_upload_button.click(fn=lambda: show_uploader(
        ex4_file_input), outputs=ex4_file_input)
    ex4_file_input.change(fn=lambda file: upload_handler(
        file, "Exercise 4"), inputs=ex4_file_input)

def debug_block_ids(blocks):
    for block in blocks:
        print(f"Block ID: {block._id}")

# Main application block
with gr.Blocks() as demo:
    demo.load(fn=query_params, inputs=[], outputs=[])
    gr.TabbedInterface([chat, exercise], ['💬 SuperChat', '🏋️‍♂️ Exercises'])

demo.queue(max_size=300)
demo.launch(share=True)