from bs4 import BeautifulSoup
from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
from bson.objectid import ObjectId

app = Flask(__name__)
CORS(app)
client = MongoClient()
db = client.importExportTwo
contacts = db.contacts

@app.route('/scrapper', methods=['POST'])
def index():
    print("hello")
    content = request.get_json()
    # print(content)
    myHtml = content.get('html')
    userId = content.get('userId')
    print(myHtml)
    soup = BeautifulSoup(myHtml, "html.parser")
    soups = soup.findAll("div", {'class': 'VkpGBb'})
    emptyArray = []
    for i in soups:
        emptyDict = {}
        # soupLinks = i.find('a', {'class': "yYlJEf Q7PwXb L48Cpd"})
        bLink = i.find("a", {"class": 'yYlJEf Q7PwXb L48Cpd'})
        if bLink:
            emptyDict['link'] = bLink['href']

        soupLinksTwo = i.find('div', {'class': "rllt__details"})
        allDivs = soupLinksTwo.findAll("div")
        number = (str(allDivs[-1].text[-17:]).replace(" ", '').replace("·", ""))
        print(number)
        emptyDict['number'] = number
        emptyDict['comments'] = "No Comments"
        # print(number)

        bNames = i.find('span', {'class': 'OSrXXb'})
        emptyDict['bName'] = bNames.text
        emptyDict['salesRep'] = 'N/A'
        emptyDict['dealStatus'] = 0
        print("+++++")
        print("+++++")
        # dbQuery = contacts.ins
        emptyArray.append(emptyDict)
        print("+++++")
        print("+++++")
    # contacts.insert_many(emptyArray)
    return ['hello']

app.run(host='0.0.0.0', port=82, debug=True)
