# Nuxt 3 Minimal Starter

Dev: John Levy Bonifacio


## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# yarn
yarn install

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# yarn
yarn dev

```

FRONT-END (send the data via post method (form-data))

"Hello my issue is @ submitting the form -> i'm not sure why i'm not sending data - it gives me 422 (Unprocessable Content) if CORS issue from the main is allowed? not sure i hope that may fix my problem. 

header('Access-Control-Allow-Origin: *'); 
header('Access-Control-Allow-Methods: GET, POST'); only
header("Access-Control-Allow-Headers: origin, content-type, accept, x-requested-with");

i also tested in react but it has the same issue. i believe my form-data is correct as well as my fetching(vue 3 uses $fetch), because i double check it in POSTMAN (i have a screenshot in the folder) it send me a mssge success " - i spend 4 hours in the internet tried to fix the issue in nuxt js 3. and my exam time last. i hope i have some time to fix that points . i'm still looking forward 

