# Docker
#nodejs  Example at nodejs folder 
<br />
#This is simple example of use node.js  and docker 
<br />
the node is listening in port 3000
<br />
while the node server get call to 
<br />
new api call to external api performed and will be return to the client (the browser)
<br />
prerequisite :
<br />
1) install docker (i used docker desktop for windows)
<br />
2)install git
<br />
3)clone this repo
<br />
4)run docker build -t nodejs_with_external_call_to_api .
<br />
5)run docker run -p 3000:3000 nodejs_with_external_call_to_api
<br />
6)browse to http://localhost:3000