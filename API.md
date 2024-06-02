# API

## catalogue：
	1). login
	2). insert user
	3). update user
	4). get all users
	5). delete user

## 1. login

### reqURL：
	http://localhost:5000/login

### method：
	POST

### params
	|param		 |required|type     |memo
	|username    |Y       |string   |username
	|password    |Y       |string   |password(md5)

### response：
	success:
      {
        "status": 0,
        "data": {
          "_id": "5c3b297dea95883f340178b0",
          "password": "21232f297a57a5a743894a0e4a801fc3",
          "username": "admin",
          "create_time": 1547381117891,
          "__v": 0,
          "role": {
            "menus": []
          }
        }
      }
	error
	  {
        "status": 1,
        "msg": "username or password err!"
      }
