# Routes documentation

## QRCode Routes

### POST - /qrcode/generate 
#### Resume: Generate QRCode
- body =
    {name,company,cpf,pin} 
#### Return 
 - {imageQRLink}

## Mark Routes

### POST - /mark/create
#### Resume: create Mark
- body = { cpf }
#### Return 
- { "msg": "marcação feita", "marks": "14:26;14:35"}

### GET - /mark/list
#### Resume: list Mark
- Query = cpf,date
#### Return 
- {"marks": "14:26;14:27;14:27;14:48;14:48",
  "cpf": "123",
  "date": "2020-12-08T00:00:00.000Z",}


## Adm Public

### POST - /adm/registe
#### Resume: register
- body =
    {user,password,company}
#### Return 
 - {msg: adm criado}


### POST - /adm/login
#### Resume: login
- body =
    {user,password}
#### Return 
 - {jwt}


### POST - /adm/user/create'
#### Resume: create user
- body =
    {user,password}
- Header = JWT
#### Return 
-User created

