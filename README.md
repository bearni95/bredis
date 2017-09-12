# Bredis - Client side Javascript database engine

Bredis (browser redis) is a *light* implementation of Redis for browsers. This library makes use of the localStorage API to store data.

## Installation
Include the `bredis.js` file in your project. It will bind a `bredis` object to the `window` instance.

## Usage
Bredis operates with 4 basic commands: `use`, `set`, `get` and `remove`

### bredis.use()
To avoid compatibility problems bredis prefixes it's localStorage items. The default prefix is 'bredis-' but you can change it using `bredis.use`

```javascript
//The set method accepts key-value pairs
bredis.use('new-prefix')
```

### bredis.set()
The set method accepts key-value pairs
```javascript
bredis.set('key1', 'value1')
```

It also accepts an array of key-value pairs:
```javascript
bredis.set(['key1', 'value1', 'key2', 'value2', 'key3', 'value3'])
//Is equivalent to:
bredis.set('key1', 'value1')
bredis.set('key2', 'value2')
bredis.set('key3', 'value3')
```

All keys are parsed to string for simplicity. Any type of data can be stored as a value.
```javascript
bredis.set(2, { an_object : true })
bredis.set(Date.now(), { can_epochs_be_keys : true })
```

### bredis.get()
The `get` command allows to get one single element by it's key or an array of them. If the element has not been set, `null` will be returned
```javascript
bredis.get('key1')
bredis.get(['key1', 'key2', 'key3'])
```

### bredis.remove()
Removes an element from the database
```javascript
bredis.remove('key1')
```


>Copyright (c) 2017 Bernat Canal Garceran
>
>Permission is hereby granted, free of charge, to any person obtaining a copy
>of this software and associated documentation files (the "Software"), to deal
>in the Software without restriction, including without limitation the rights
>to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
>copies of the Software, and to permit persons to whom the Software is
>furnished to do so, subject to the following conditions:
>
>The above copyright notice and this permission notice shall be included in all
>copies or substantial portions of the Software.
>
>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
>IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
>FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
>AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
>LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
>OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
>SOFTWARE.
