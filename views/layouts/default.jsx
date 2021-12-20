const React = require('react')
function Default(html) {
    return(
        <html>
            <head>
                <tittle>Default</tittle>
            </head>
            <body>
                <h1>HTML Rendered!</h1>
                <div className = "container">
                    {html.children}
                </div>
            </body>
        </html>


    )
}
module.exports = Default