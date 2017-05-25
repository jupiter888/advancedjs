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


//You can run ESLint against JS files like so:

// $ eslint somefile.js
// $ eslint lib/**