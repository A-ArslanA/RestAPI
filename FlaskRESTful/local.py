import requests

res = requests.get("http://127.0.0.1:3000/api/trash")
print(res.text)
print()
print(res.json())
print()



res2 = requests.get("http://127.0.0.1:3000/api/cources/0")
res3 = requests.get("http://127.0.0.1:3000/api/cources/2") # identificator
print(res2.json())
print()
print(res3.json())
print()


# delete

res4 = requests.delete("http://127.0.0.1:3000/api/cources/3")
print(res4.json())
print()

# post
headers = {'Content-Type': 'application/json'}

res5 = requests.post("http://127.0.0.1:3000/api/cources/4", json={"name": "Go", "size": 13}, headers=headers)
print(res5.json())
print()

# put

res6 = requests.put("http://127.0.0.1:3000/api/cources/4", json={"name": "Put", "size": 1}, headers=headers)
print(res6.json())
print(res6.status_code)