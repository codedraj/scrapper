from bs4 import BeautifulSoup
import csv
# from htmlData import myHtml

soup = BeautifulSoup(myHtml, "html.parser")
soups = soup.findAll("div", {'class': 'VkpGBb'})
emptyArray = []
for i in soups:
    emptyDict = {}
    # soupLinks = i.find('a', {'class': "yYlJEf Q7PwXb L48Cpd"})
    bLink = i.find("a", {"class": 'yYlJEf Q7PwXb L48Cpd'})
    if bLink:
        emptyDict['link'] = bLink['href']
    else:
        emptyDict['link'] = "n/a" 
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
    emptyArray.append(emptyDict)
print(emptyArray)

fields = [ "link",
  "number",
  "comments",
  "bName",
  "salesRep",
  "dealStatus"]

with open('malasia-one.csv', 'w') as csvfile:
    writer = csv.DictWriter(csvfile, fieldnames=fields)
    writer.writeheader()
    writer.writerows(emptyArray)