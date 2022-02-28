# YottaDB-Maps

A demo of M based globals (YottaDB/Intersystems/GTM) as a co-ordinate store that can then be used to map points of interest.

The demo uses the co-ordinates of the football grounds in England as a data set and then exposes this data via a REST API to be consumed and then utilised to display the locations of the grounds on a map:

     ^STADIUMS("A.F.C. Bournemouth",50.735277)=-1.83833
     ^STADIUMS("Arsenal ",51.555)="-0.108611"
     ^STADIUMS("Aston Villa ",52.509167)=-1.884722
     ^STADIUMS("Barnsley ",53.552222)=-1.4675
     ^STADIUMS("Birmingham City ",52.475703)=-1.868189
     ^STADIUMS("Blackburn Rovers ",53.728611)=-2.489167
     ^STADIUMS("Blackpool ",53.804722)=-3.048056
     ^STADIUMS("Bolton Wanderers ",53.580556)=-2.535556
     ^STADIUMS("Bradford City",53.804222)=-1.759022
     ^STADIUMS("Brentford",51.488183)="-0.302639"

**React-leaflet** is used in the "front-end" and **mg-web/YottaDB** as the "back-end"

# Gitpod deployment

1) Create a free/paid Gitpod account - https://www.gitpod.io/
2) Log into the account
3) Open a new browser tab and add **gitpod.io/#https://github.com/RamSailopal/YottaDB-Maps** to the address - This will create a new Gitpod cloud instance.
4) Let the containers fully load
5) Click on the ports at the bottom right of the window
6) Click the globe icon next to **9966** to view the front-end and the globe icon next to **8080** for the backend and then add **/api/cords** to the end.

# Local Deployment

With Git, Docker and docker compose installed:

     git clone https://github.com/RamSailopal/YottaDB-Maps.git
     cd YottaDB-Maps
     export apiadd="https://ipaddress-of-docker-server:8080/"
     docker-compose up
    
Front-end - http://ipaddress-of-docker-server:9966
Back-end - http://ipaddress-of-docker-server:8080/api/cords

# References

**React-leaflet** - https://react-leaflet.js.org/
**YottaDB** - https://yotaadb.com
**mg-web** - https://github.com/robtweed/mgweb-server




