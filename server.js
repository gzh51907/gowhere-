//express
const express = require ('express');

let app = express();
app.use(express.static('./'));
app.use((req,res)=>{
   let content = fs.readFileSync('./index.html');
   res.set('Content-Type','text/html;charset-utf-8');
   res.send(content);
})

app.listen(10086,()=>{
   console.log('serve is running on http://localhost:%s',10086);
});