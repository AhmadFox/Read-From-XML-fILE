var xml= new XMLHttpRequest();
    xml.open('GET','level.xml',false);
    xml.send();
                
var xmlData=xml.responseXML;
    xmlData=(new DOMParser()).parseFromString(xml.responseText,'text/xml');
	
var xmlDoc = xml.responseXML;
var x = xmlDoc.getElementsByTagName("name");

    function Level(){   
        for(var i=1;i<=x.length;i++){
        var lev=xmlData.getElementsByTagName("level"+i);
        var name=lev[0].getElementsByTagName("name")[0].firstChild.data;
        var score=lev[0].getElementsByTagName("score")[0].firstChild.data;
        var status=lev[0].getElementsByTagName("status")[0].firstChild.data;
        if (status=="open") {
            var image = document.getElementById("mylevel"+i);
            if (image.src.match("level" + i + "clos")){
                image.src = "image/level"+ i +"copm.jpg";
                document.getElementById("myAnchor"+i).href="edit.html";
            }
            else {
                image.src = "image/level" + i + "clos.jpg";
            }
        }
    }
}
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        myFunction(xhttp);
    }
};
xhttp.open("GET", "level.xml", true);
xhttp.send();

    function create(){
        xmlDoc.loadXMLDoc('level.xml');
        x=xmlDoc.getElementsByTagName('status')[0].childNodes[0];
        
        x.nodeValue="What The Fuck!";

    }
