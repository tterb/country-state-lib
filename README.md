[![Version](https://img.shields.io/npm/v/country-state-lib?color=brightgreen)](https://www.npmjs.com/package/country-state-lib)
[![License](https://img.shields.io/npm/l/country-state-lib?color=blue)](https://www.gnu.org/licenses/gpl-3.0)

# country-state-lib  
Basic library for Countries and States

This is a fork of [harpreetkhalsagtbit/country-state-city](https://github.com/harpreetkhalsagtbit/country-state-city) that excludes the cities functionality, reducing the overall bundle-size by roughly 4.2MB.

Data sourced from [hiiamrohit/Countries-States-Cities-database](https://github.com/hiiamrohit/Countries-States-Cities-database)

# Install  

```
npm install country-state-lib
```
or
```
yarn add country-state-lib
```

# Usage  

  - ES6 Module usage
   
     ```js
     import csc from 'country-state-lib'

     // Import Interfaces`
     import { ICountry, IState } from 'country-state-lib'
     ```

  - AMD Module usage

    ```js
    let csc = require('country-state-lib').default
    ```

# Documentation  

### getCountryByCode(code)  
---------------

Accepts a valid `CountryCode` eg: `'AS'` and returns *Country Details*

type: **json | ICountry**

```js
{
	"id": "4",
	"sortname": "AS",
	"name": "American Samoa",
	"phonecode": "1684"
}
```

### getCountryById(id)  
---------------

Accepts a valid `CountryId` and returns *Country Details*

type: **json | ICountry**

```js
{
	"id": "4",
	"sortname": "AS",
	"name": "American Samoa",
	"phonecode": "1684"
}
```

### getStateById(id)  
---------------

Accepts a valid `StateId` and returns *State Details*

type: **json | IState**

```js
{
	"id": 4119,
	"name": "Midlands",
	"country_id": "246"
}
```

### getStatesOfCountry(countryId)  
---------------

Accepts a valid `CountryId` and returns *all States* as Array of JSON

type: **array of json | IState**

```js
[
  {
    "id": 4119,
    "name": "Midlands",
    "country_id": "246"
  }
]
```

### getAllCountries  

Returns **all Countries**

type: **array of json | ICountry**

```js
[
  {
    "id": "4",
    "sortname": "AS",
    "name": "American Samoa",
    "phonecode": "1684"
  }
]
```
