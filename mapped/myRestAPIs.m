cords(req);
 new res,club,lat,long
 S club=""
 S cnt=0
 F  S club=$O(^STADIUMS(club)) Q:club=""  D
 . S long=$O(^STADIUMS(club,""))
 . S lat=^STADIUMS(club,long)
 . set cnt=cnt+1
 . set res(cnt,"club")=club
 . set res(cnt,"long")=long
 . set res(cnt,"lat")=lat
 QUIT $$response^%zmgweb(.res)
