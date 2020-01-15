# teillor

git clone https://github.com/kimteaeung/teillor.git

package.json, package-lock.json edit name property



ERROR

1. add src/.babelrc 
 
 .babelrc 
 {
    "presets": [
     "@babel/preset-env",
     "@babel/preset-react"
    ],
    "plugins": [
        [
            "@babel/plugin-proposal-class-properties"
        ]
    ]
}
