*** This was created for internal project ***

### How to import
```javascript
var logger =  require('edisga-customlogger');
```

### How to use it

This will send the output to console.log following the next syntax:
```javascript
    { 
      category: category, 
      code: code,
      date: moment().format(), 
      custom: custom,
      method:method 
    }
```

```javascript
logger.stdout("app", 1, "Listening on " + config.port ,"app.listen")
```

And the following for error:

```javascript
    { 
      category: category, 
      code: code,
      date: moment().format(), 
      error: { 
            name: err.name, 
            message: err.message 
        }, 
      custom: custom,
      method:method 
    }
```

```javascript
logger.stderr("db", 500 , err, "Db client was not able to connect.", "dbconnect")
```