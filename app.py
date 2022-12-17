from bs4 import BeautifulSoup
from pymongo import MongoClient
from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
client = MongoClient()
db = client.test_database_scrapper
contacts = db.contacts


@app.route('/', methods=['POST'])
def index():
    # body = request.json['body']
    content = request.form
    myHtml = content.get('html')
    soup = BeautifulSoup(myHtml, "html.parser")
    soupLinks = soup.findAll('a', {'class': "yYlJEf Q7PwXb L48Cpd"})
    soupLinksTwo = soup.findAll('div', {'class': "rllt__details"})
    bNames = soup.findAll('span', {'class' : 'OSrXXb'})
    # soupLinksTwo = soup.findAll('div', {'class' : "dbg0pd"})
    for i in bNames:
        print(i.text)
    emptyArr = []
    print('hello')
    emptyArrTwo = []
    for i in soupLinks:
        # print(i['href'])
        emptyArr.append(str(i['href']))
    for i in soupLinksTwo:
        allDivs = i.findAll("div")
        # if allDivs:
        number = (str(allDivs[-1].text[-17:]).replace(" ", '').replace("·", ""))
        # print(number)
    return "hello"


app.run(host='0.0.0.0', port=81)
