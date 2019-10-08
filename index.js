var moment = require('moment');

exports.stdout = function(category, code, custom, method) {
    console.log(JSON.stringify({ 
        category: category, 
        code: code,
        date: moment().format(), 
        custom: custom, 
        method:method 
    }));
};

exports.stderr = function(category, code, err, custom, method) { 
    console.error(JSON.stringify({ 
        category: category, 
        code: code, 
        date: moment().format(), 
        error: { 
            name: err.name, 
            message: err.message 
        }, 
        custom: custom, 
        method:method 
    }));
};

exports.jsonResponse = function(category, code, custom, method, status){
    return { 
        category: category, 
        code: code, 
        date: moment().format(), 
        custom: custom,
        method:method,
        status: status
      };
}