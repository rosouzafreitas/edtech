const express = require('express');
const app = express();
app.get('/', function(req,res){
    app.use(express.static('public'))
    return false
});

const dataArray = [{
  "id": 1,
  "name": "Sterling Board",
  "email": "sboard0@1688.com"
}, {
  "id": 2,
  "name": "Roselia Mehew",
  "email": "rmehew1@bbc.co.uk"
}, {
  "id": 3,
  "name": "Augustin Wayvill",
  "email": "awayvill2@businesswire.com"
}, {
  "id": 4,
  "name": "Federico Dowyer",
  "email": "fdowyer3@wisc.edu"
}, {
  "id": 5,
  "name": "Alexi Nash",
  "email": "anash4@barnesandnoble.com"
}, {
  "id": 6,
  "name": "Vick Saltrese",
  "email": "vsaltrese5@chronoengine.com"
}, {
  "id": 7,
  "name": "Melonie Zanettini",
  "email": "mzanettini6@cnbc.com"
}, {
  "id": 8,
  "name": "Adela Muff",
  "email": "amuff7@oakley.com"
}, {
  "id": 9,
  "name": "Marlow Cashford",
  "email": "mcashford8@guardian.co.uk"
}, {
  "id": 10,
  "name": "Tatiania Impy",
  "email": "timpy9@va.gov"
}, {
  "id": 11,
  "name": "Fifine Scorton",
  "email": "fscortona@sun.com"
}, {
  "id": 12,
  "name": "Sampson Lampke",
  "email": "slampkeb@facebook.com"
}, {
  "id": 13,
  "name": "Sharla Lashbrook",
  "email": "slashbrookc@adobe.com"
}, {
  "id": 14,
  "name": "Aldis Mitchinson",
  "email": "amitchinsond@si.edu"
}, {
  "id": 15,
  "name": "Madelina Ritelli",
  "email": "mritellie@dropbox.com"
}, {
  "id": 16,
  "name": "Horace Dealy",
  "email": "hdealyf@networkadvertising.org"
}, {
  "id": 17,
  "name": "Aylmer Tyrie",
  "email": "atyrieg@slideshare.net"
}, {
  "id": 18,
  "name": "Kayla Stickins",
  "email": "kstickinsh@netlog.com"
}, {
  "id": 19,
  "name": "Helaine Tomsa",
  "email": "htomsai@pinterest.com"
}, {
  "id": 20,
  "name": "Trip Grigoroni",
  "email": "tgrigoronij@dell.com"
}, {
  "id": 21,
  "name": "Mason Faires",
  "email": "mfairesk@parallels.com"
}, {
  "id": 22,
  "name": "Odella Weben",
  "email": "owebenl@behance.net"
}, {
  "id": 23,
  "name": "Hansiain Brew",
  "email": "hbrewm@1688.com"
}, {
  "id": 24,
  "name": "Zola Boyen",
  "email": "zboyenn@va.gov"
}, {
  "id": 25,
  "name": "Fraze Bartell",
  "email": "fbartello@shareasale.com"
}, {
  "id": 26,
  "name": "Jens Bennis",
  "email": "jbennisp@ow.ly"
}, {
  "id": 27,
  "name": "Johnnie Buckberry",
  "email": "jbuckberryq@eventbrite.com"
}, {
  "id": 28,
  "name": "Siegfried Joanaud",
  "email": "sjoanaudr@google.co.uk"
}, {
  "id": 29,
  "name": "Kimble Pelman",
  "email": "kpelmans@senate.gov"
}, {
  "id": 30,
  "name": "Malanie Brookes",
  "email": "mbrookest@histats.com"
}, {
  "id": 31,
  "name": "Ronica MacGown",
  "email": "rmacgownu@stumbleupon.com"
}, {
  "id": 32,
  "name": "Nana Howis",
  "email": "nhowisv@devhub.com"
}, {
  "id": 33,
  "name": "Henrik Cussen",
  "email": "hcussenw@bloglines.com"
}, {
  "id": 34,
  "name": "Grant Lelande",
  "email": "glelandex@ebay.com"
}, {
  "id": 35,
  "name": "Rozele Sket",
  "email": "rskety@icio.us"
}, {
  "id": 36,
  "name": "Tori Bus",
  "email": "tbusz@typepad.com"
}, {
  "id": 37,
  "name": "Anneliese Habbeshaw",
  "email": "ahabbeshaw10@zdnet.com"
}, {
  "id": 38,
  "name": "Vidovik Winspire",
  "email": "vwinspire11@bing.com"
}, {
  "id": 39,
  "name": "Pierette Frie",
  "email": "pfrie12@pinterest.com"
}, {
  "id": 40,
  "name": "Lefty Caurah",
  "email": "lcaurah13@google.de"
}, {
  "id": 41,
  "name": "Dione Merioth",
  "email": "dmerioth14@nifty.com"
}, {
  "id": 42,
  "name": "Den Lippi",
  "email": "dlippi15@issuu.com"
}, {
  "id": 43,
  "name": "Charissa Liddicoat",
  "email": "cliddicoat16@patch.com"
}, {
  "id": 44,
  "name": "Jorie Humblestone",
  "email": "jhumblestone17@bandcamp.com"
}, {
  "id": 45,
  "name": "Issi Borge",
  "email": "iborge18@a8.net"
}, {
  "id": 46,
  "name": "Tammy Tolchar",
  "email": "ttolchar19@lycos.com"
}, {
  "id": 47,
  "name": "Leslie Foskett",
  "email": "lfoskett1a@edublogs.org"
}, {
  "id": 48,
  "name": "Philipa Clericoates",
  "email": "pclericoates1b@google.ru"
}, {
  "id": 49,
  "name": "Drake Thorald",
  "email": "dthorald1c@sfgate.com"
}, {
  "id": 50,
  "name": "Debora Desesquelle",
  "email": "ddesesquelle1d@tmall.com"
}]


app.get('/test', (req, res) => {
    const id = req.query.id;
    const name = req.query.name;
    const mail = req.query.mail;
    let tempArray = []
    for (i=0;i<dataArray.length;i++) {
		if (id == dataArray[i].id) {
            tempArray.push(dataArray[i])
            console.log(tempArray)
		}
        if (dataArray[i].name.includes(name)) {
            tempArray.push(dataArray[i])
        }
        if (dataArray[i].email.includes(mail)) {
            tempArray.push(dataArray[i])
        }
	};
    if (tempArray.length > 0) {
        res.json(tempArray)
    }
    res.json(dataArray)
})

const hostname = "localhost";
const port = 8080;

app.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`)
});