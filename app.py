from flask import Flask, request, jsonify, render_template

app = Flask(__name__)

# Пример хранения данных в памяти
data_storage = []

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/add_data', methods=['POST'])
def add_data():
    data = request.get_json()
    data_storage.append(data)
    return jsonify({'message': 'Данные успешно добавлены'}), 200

@app.route('/get_data/<field>', methods=['GET'])
def get_data(field):
    filtered_data = [item for item in data_storage if item.get('field1') == field]
    return jsonify(filtered_data), 200

if __name__ == '__main__':
    app.run(debug=True)
