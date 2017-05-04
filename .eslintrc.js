module.exports = {
    "extends": "eslint:recommended",
    "plugins": [
        "standard",
        "promise"
    ],
    "rules": {
    
        "prefer-arrow-callback": "warn",
        "no-var": "warn",
    
        // // enable additional rules
        // "indent": ["error", 4],
        // "linebreak-style": ["error", "unix"],
        // "quotes": ["error", "double"],
        "semi": ["warn", "always"]

        // // override default options for rules from base configurations
        // "comma-dangle": ["error", "always"],
        // "no-cond-assign": ["error", "always"],

        // // disable rules from base configurations
        // "no-console": "off",
        
        
        
    }
};


//You can run ESLint against JS files like so:

// $ eslint somefile.js
// $ eslint lib/**