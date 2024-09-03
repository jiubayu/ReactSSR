const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
       <html>
          <body>
            <div id="root"></div>
            <script>root.innerHTML = 'hello'</script>
          </body>
        </html>
    `)
});

app.listen(4000, () => console.log('listen on 4000'))