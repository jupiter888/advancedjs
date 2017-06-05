module.exports = {
    "extends": "eslint:recommended",
    "plugins": [
        "standard",
        "promise"
    ],
    "rules": {
    
        "prefer-arrow-callback": "warn",
        "no-var": "warn",
    
        //enable additional rules
    
        "quotes": ["error", "double"],
        "semi": ["warn", "always"]
    }
};


//This is how to run ESLint against JS files:

// $ eslint somefile.js
// $ eslint lib/**