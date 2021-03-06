import express from "express";
const app = express();

import anniversarySearch from "./modules/anniversary.js"
import sectorSearch from "./modules/sector.js"
import branchSearch from "./modules/branch.js"

app.get('/', function(req,res){
    app.use(express.static('public'))
    res.redirect('/index.html')
    return false
});

const dataArray = [{
  "matricule": "89-6446407",
  "name": "Traver MacSherry",
  "branch": "429",
  "email": "tmacsherry0@lycos.com",
  "sector": "Legal",
  "anniversary": "01"
}, {
  "matricule": "50-1173355",
  "name": "Siffre Wilfling",
  "branch": "589",
  "email": "swilfling1@g.co",
  "sector": "Accounting",
  "anniversary": "12"
}, {
  "matricule": "25-8188018",
  "name": "Morganne Standfield",
  "branch": "609",
  "email": "mstandfield2@addtoany.com",
  "sector": "Product Management",
  "anniversary": "12"
}, {
  "matricule": "81-7569015",
  "name": "Tildi Halpin",
  "branch": "216",
  "email": "thalpin3@latimes.com",
  "sector": "Human Resources",
  "anniversary": "12"
}, {
  "matricule": "29-3469250",
  "name": "Adriana Holsall",
  "branch": "925",
  "email": "aholsall4@dailymail.co.uk",
  "sector": "Legal",
  "anniversary": "12"
}, {
  "matricule": "37-2391496",
  "name": "Kandy Ludee",
  "branch": "884",
  "email": "kludee5@jalbum.net",
  "sector": "Accounting",
  "anniversary": "02"
}, {
  "matricule": "01-9515153",
  "name": "Arielle Jewers",
  "branch": "265",
  "email": "ajewers6@people.com.cn",
  "sector": "Human Resources",
  "anniversary": "12"
}, {
  "matricule": "25-4109698",
  "name": "Diane-marie Gawke",
  "branch": "377",
  "email": "dgawke7@artisteer.com",
  "sector": "Support",
  "anniversary": "01"
}, {
  "matricule": "52-2612351",
  "name": "Eleanore McGilbon",
  "branch": "345",
  "email": "emcgilbon8@google.ca",
  "sector": "Services",
  "anniversary": "10"
}, {
  "matricule": "03-2856650",
  "name": "Karla Pourveer",
  "branch": "225",
  "email": "kpourveer9@deviantart.com",
  "sector": "Engineering",
  "anniversary": "09"
}, {
  "matricule": "46-4804366",
  "name": "Olenolin Farens",
  "branch": "808",
  "email": "ofarensa@blog.com",
  "sector": "Marketing",
  "anniversary": "10"
}, {
  "matricule": "08-1005189",
  "name": "Ellery Lamden",
  "branch": "257",
  "email": "elamdenb@barnesandnoble.com",
  "sector": "Sales",
  "anniversary": "03"
}, {
  "matricule": "38-7495847",
  "name": "Alejandrina Whiten",
  "branch": "327",
  "email": "awhitenc@narod.ru",
  "sector": "Sales",
  "anniversary": "12"
}, {
  "matricule": "66-2396111",
  "name": "Eugenia Houlden",
  "branch": "241",
  "email": "ehouldend@last.fm",
  "sector": "Accounting",
  "anniversary": "12"
}, {
  "matricule": "38-8668487",
  "name": "Coralie Tole",
  "branch": "900",
  "email": "ctolee@freewebs.com",
  "sector": "Product Management",
  "anniversary": "01"
}, {
  "matricule": "39-3502458",
  "name": "Byron Lincoln",
  "branch": "744",
  "email": "blincolnf@ebay.com",
  "sector": "Human Resources",
  "anniversary": "11"
}, {
  "matricule": "87-6255094",
  "name": "Lowe Mattheis",
  "branch": "893",
  "email": "lmattheisg@hud.gov",
  "sector": "Engineering",
  "anniversary": "12"
}, {
  "matricule": "23-9571434",
  "name": "Keely Thurbon",
  "branch": "515",
  "email": "kthurbonh@whitehouse.gov",
  "sector": "Legal",
  "anniversary": "04"
}, {
  "matricule": "73-0581606",
  "name": "Cass Pohl",
  "branch": "795",
  "email": "cpohli@ask.com",
  "sector": "Research and Development",
  "anniversary": "05"
}, {
  "matricule": "46-5623156",
  "name": "Ester Warbeys",
  "branch": "266",
  "email": "ewarbeysj@pinterest.com",
  "sector": "Product Management",
  "anniversary": "11"
}, {
  "matricule": "07-9263904",
  "name": "Mandy Ricarde",
  "branch": "702",
  "email": "mricardek@odnoklassniki.ru",
  "sector": "Marketing",
  "anniversary": "11"
}, {
  "matricule": "30-0366101",
  "name": "Sheila McFeat",
  "branch": "838",
  "email": "smcfeatl@soundcloud.com",
  "sector": "Support",
  "anniversary": "03"
}, {
  "matricule": "10-5848201",
  "name": "Ward Dudding",
  "branch": "404",
  "email": "wduddingm@pen.io",
  "sector": "Accounting",
  "anniversary": "02"
}, {
  "matricule": "24-1486094",
  "name": "Brade Drummond",
  "branch": "878",
  "email": "bdrummondn@youku.com",
  "sector": "Support",
  "anniversary": "05"
}, {
  "matricule": "18-4319853",
  "name": "Leeland Crennan",
  "branch": "862",
  "email": "lcrennano@infoseek.co.jp",
  "sector": "Marketing",
  "anniversary": "06"
}, {
  "matricule": "43-4111885",
  "name": "Veriee Hamblett",
  "branch": "675",
  "email": "vhamblettp@vistaprint.com",
  "sector": "Marketing",
  "anniversary": "12"
}, {
  "matricule": "13-2148559",
  "name": "Ruy Logsdale",
  "branch": "266",
  "email": "rlogsdaleq@pbs.org",
  "sector": "Research and Development",
  "anniversary": "02"
}, {
  "matricule": "54-7433875",
  "name": "Cindy Geeve",
  "branch": "721",
  "email": "cgeever@themeforest.net",
  "sector": "Services",
  "anniversary": "12"
}, {
  "matricule": "13-0687867",
  "name": "Loralie Huertas",
  "branch": "572",
  "email": "lhuertass@marketwatch.com",
  "sector": "Support",
  "anniversary": "04"
}, {
  "matricule": "53-3685044",
  "name": "Marie-jeanne Pitbladdo",
  "branch": "924",
  "email": "mpitbladdot@flickr.com",
  "sector": "Support",
  "anniversary": "10"
}, {
  "matricule": "08-9894540",
  "name": "Demeter Whetton",
  "branch": "519",
  "email": "dwhettonu@de.vu",
  "sector": "Services",
  "anniversary": "03"
}, {
  "matricule": "48-0384512",
  "name": "Corinne Hurdis",
  "branch": "060",
  "email": "churdisv@tumblr.com",
  "sector": "Human Resources",
  "anniversary": "10"
}, {
  "matricule": "28-4218785",
  "name": "Corney Dienes",
  "branch": "376",
  "email": "cdienesw@de.vu",
  "sector": "Support",
  "anniversary": "07"
}, {
  "matricule": "80-8109634",
  "name": "Merrick Crombleholme",
  "branch": "316",
  "email": "mcrombleholmex@rediff.com",
  "sector": "Research and Development",
  "anniversary": "11"
}, {
  "matricule": "92-2928206",
  "name": "Loutitia Abell",
  "branch": "991",
  "email": "labelly@google.de",
  "sector": "Product Management",
  "anniversary": "08"
}, {
  "matricule": "66-5278555",
  "name": "Cordy Steffens",
  "branch": "384",
  "email": "csteffensz@vimeo.com",
  "sector": "Human Resources",
  "anniversary": "11"
}, {
  "matricule": "99-0406511",
  "name": "Martin Van der Mark",
  "branch": "867",
  "email": "mvan10@jalbum.net",
  "sector": "Research and Development",
  "anniversary": "12"
}, {
  "matricule": "61-2460306",
  "name": "Hyacinthie Fallow",
  "branch": "834",
  "email": "hfallow11@ca.gov",
  "sector": "Services",
  "anniversary": "09"
}, {
  "matricule": "98-9840824",
  "name": "Arne Splaven",
  "branch": "857",
  "email": "asplaven12@jimdo.com",
  "sector": "Legal",
  "anniversary": "08"
}, {
  "matricule": "45-6449744",
  "name": "Thom Tungay",
  "branch": "518",
  "email": "ttungay13@chronoengine.com",
  "sector": "Engineering",
  "anniversary": "10"
}, {
  "matricule": "25-0946026",
  "name": "Jeannie Paddefield",
  "branch": "315",
  "email": "jpaddefield14@nih.gov",
  "sector": "Marketing",
  "anniversary": "12"
}, {
  "matricule": "46-0631052",
  "name": "Salome Keward",
  "branch": "372",
  "email": "skeward15@hexun.com",
  "sector": "Research and Development",
  "anniversary": "06"
}, {
  "matricule": "13-3807460",
  "name": "Silvio Scamadine",
  "branch": "353",
  "email": "sscamadine16@dedecms.com",
  "sector": "Human Resources",
  "anniversary": "01"
}, {
  "matricule": "64-4989852",
  "name": "Constancia Stewart",
  "branch": "588",
  "email": "cstewart17@photobucket.com",
  "sector": "Sales",
  "anniversary": "04"
}, {
  "matricule": "50-9267035",
  "name": "Berenice Tibald",
  "branch": "318",
  "email": "btibald18@issuu.com",
  "sector": "Engineering",
  "anniversary": "12"
}, {
  "matricule": "39-5520445",
  "name": "Nils Ladloe",
  "branch": "930",
  "email": "nladloe19@miitbeian.gov.cn",
  "sector": "Product Management",
  "anniversary": "09"
}, {
  "matricule": "55-4571372",
  "name": "Rab Wythill",
  "branch": "080",
  "email": "rwythill1a@nsw.gov.au",
  "sector": "Research and Development",
  "anniversary": "08"
}, {
  "matricule": "31-4719484",
  "name": "Swen Pittoli",
  "branch": "707",
  "email": "spittoli1b@squidoo.com",
  "sector": "Services",
  "anniversary": "11"
}, {
  "matricule": "22-4511384",
  "name": "Terrye Loutheane",
  "branch": "709",
  "email": "tloutheane1c@topsy.com",
  "sector": "Marketing",
  "anniversary": "10"
}, {
  "matricule": "66-5716575",
  "name": "Northrup Ilem",
  "branch": "552",
  "email": "nilem1d@ovh.net",
  "sector": "Services",
  "anniversary": "07"
}, {
  "matricule": "52-1578687",
  "name": "Leontine Costar",
  "branch": "308",
  "email": "lcostar1e@cloudflare.com",
  "sector": "Human Resources",
  "anniversary": "11"
}, {
  "matricule": "87-6273250",
  "name": "Mitzi Allkins",
  "branch": "349",
  "email": "mallkins1f@hugedomains.com",
  "sector": "Legal",
  "anniversary": "05"
}, {
  "matricule": "17-0853479",
  "name": "Cody Arthey",
  "branch": "582",
  "email": "carthey1g@photobucket.com",
  "sector": "Research and Development",
  "anniversary": "12"
}, {
  "matricule": "00-7429399",
  "name": "Bord Skoggings",
  "branch": "380",
  "email": "bskoggings1h@yandex.ru",
  "sector": "Business Development",
  "anniversary": "05"
}, {
  "matricule": "36-5379619",
  "name": "Cally Guidotti",
  "branch": "669",
  "email": "cguidotti1i@yandex.ru",
  "sector": "Product Management",
  "anniversary": "07"
}, {
  "matricule": "77-9864042",
  "name": "Clifford Debney",
  "branch": "603",
  "email": "cdebney1j@pagesperso-orange.fr",
  "sector": "Services",
  "anniversary": "12"
}, {
  "matricule": "93-8939131",
  "name": "Shelby Brocklehurst",
  "branch": "167",
  "email": "sbrocklehurst1k@bbb.org",
  "sector": "Engineering",
  "anniversary": "11"
}, {
  "matricule": "00-0555484",
  "name": "Paten Gamlyn",
  "branch": "141",
  "email": "pgamlyn1l@biblegateway.com",
  "sector": "Accounting",
  "anniversary": "05"
}, {
  "matricule": "84-1303239",
  "name": "Jules Middleton",
  "branch": "760",
  "email": "jmiddleton1m@mail.ru",
  "sector": "Marketing",
  "anniversary": "11"
}, {
  "matricule": "68-3087957",
  "name": "Harman MacCard",
  "branch": "448",
  "email": "hmaccard1n@clickbank.net",
  "sector": "Business Development",
  "anniversary": "12"
}, {
  "matricule": "61-5562709",
  "name": "Edlin Birtwistle",
  "branch": "657",
  "email": "ebirtwistle1o@about.me",
  "sector": "Research and Development",
  "anniversary": "04"
}, {
  "matricule": "01-4502203",
  "name": "Joanie Reams",
  "branch": "975",
  "email": "jreams1p@ezinearticles.com",
  "sector": "Services",
  "anniversary": "11"
}, {
  "matricule": "05-1218493",
  "name": "Celia Lugden",
  "branch": "352",
  "email": "clugden1q@ucoz.com",
  "sector": "Support",
  "anniversary": "06"
}, {
  "matricule": "31-7425453",
  "name": "Nels Simonnot",
  "branch": "396",
  "email": "nsimonnot1r@cbslocal.com",
  "sector": "Support",
  "anniversary": "11"
}, {
  "matricule": "76-3729268",
  "name": "Tymon Andriolli",
  "branch": "572",
  "email": "tandriolli1s@smh.com.au",
  "sector": "Research and Development",
  "anniversary": "07"
}, {
  "matricule": "01-1176244",
  "name": "Hilde Estick",
  "branch": "899",
  "email": "hestick1t@desdev.cn",
  "sector": "Sales",
  "anniversary": "07"
}, {
  "matricule": "74-0358204",
  "name": "Jo Wyatt",
  "branch": "397",
  "email": "jwyatt1u@ca.gov",
  "sector": "Sales",
  "anniversary": "08"
}, {
  "matricule": "61-3173493",
  "name": "Jori Paddy",
  "branch": "644",
  "email": "jpaddy1v@moonfruit.com",
  "sector": "Human Resources",
  "anniversary": "089"
}, {
  "matricule": "19-2556781",
  "name": "Thorpe Playdon",
  "branch": "973",
  "email": "tplaydon1w@github.io",
  "sector": "Human Resources",
  "anniversary": "08"
}, {
  "matricule": "85-2102505",
  "name": "Coralyn Ciccotti",
  "branch": "089",
  "email": "cciccotti1x@msn.com",
  "sector": "Support",
  "anniversary": "12"
}, {
  "matricule": "33-6198308",
  "name": "Merrie Camp",
  "branch": "912",
  "email": "mcamp1y@odnoklassniki.ru",
  "sector": "Engineering",
  "anniversary": "05"
}, {
  "matricule": "59-4694716",
  "name": "Rose Twentyman",
  "branch": "212",
  "email": "rtwentyman1z@earthlink.net",
  "sector": "Accounting",
  "anniversary": "08"
}, {
  "matricule": "82-6802592",
  "name": "Lezlie Dibdale",
  "branch": "393",
  "email": "ldibdale20@sogou.com",
  "sector": "Services",
  "anniversary": "12"
}, {
  "matricule": "80-8137594",
  "name": "Phillipp De Clairmont",
  "branch": "954",
  "email": "pde21@epa.gov",
  "sector": "Product Management",
  "anniversary": "07"
}, {
  "matricule": "62-1877210",
  "name": "Niles Cutsforth",
  "branch": "094",
  "email": "ncutsforth22@odnoklassniki.ru",
  "sector": "Business Development",
  "anniversary": "04"
}, {
  "matricule": "49-5084116",
  "name": "Sukey Bardell",
  "branch": "962",
  "email": "sbardell23@arizona.edu",
  "sector": "Legal",
  "anniversary": "12"
}, {
  "matricule": "33-6090709",
  "name": "Katherine Woodroofe",
  "branch": "341",
  "email": "kwoodroofe24@devhub.com",
  "sector": "Research and Development",
  "anniversary": "09"
}, {
  "matricule": "95-3384509",
  "name": "Thaine Sellar",
  "branch": "432",
  "email": "tsellar25@virginia.edu",
  "sector": "Human Resources",
  "anniversary": "01"
}, {
  "matricule": "04-4038760",
  "name": "Fleur Covelle",
  "branch": "297",
  "email": "fcovelle26@admin.ch",
  "sector": "Support",
  "anniversary": "12"
}, {
  "matricule": "46-7337709",
  "name": "Ursa Hovey",
  "branch": "277",
  "email": "uhovey27@google.com.hk",
  "sector": "Human Resources",
  "anniversary": "02"
}, {
  "matricule": "97-3240645",
  "name": "Dino Osgar",
  "branch": "611",
  "email": "dosgar28@sakura.ne.jp",
  "sector": "Human Resources",
  "anniversary": "08"
}, {
  "matricule": "04-6638869",
  "name": "Carmelita Tokell",
  "branch": "811",
  "email": "ctokell29@nasa.gov",
  "sector": "Research and Development",
  "anniversary": "03"
}, {
  "matricule": "55-3818314",
  "name": "Denys Menguy",
  "branch": "744",
  "email": "dmenguy2a@ebay.co.uk",
  "sector": "Research and Development",
  "anniversary": "12"
}, {
  "matricule": "40-7486465",
  "name": "Susie Riquet",
  "branch": "811",
  "email": "sriquet2b@wisc.edu",
  "sector": "Support",
  "anniversary": "03"
}, {
  "matricule": "64-0197150",
  "name": "Orv Tithecote",
  "branch": "975",
  "email": "otithecote2c@disqus.com",
  "sector": "Marketing",
  "anniversary": "12"
}, {
  "matricule": "59-5563942",
  "name": "Loretta Chapellow",
  "branch": "287",
  "email": "lchapellow2d@squidoo.com",
  "sector": "Business Development",
  "anniversary": "05"
}, {
  "matricule": "64-2088302",
  "name": "Jameson Kivelle",
  "branch": "046",
  "email": "jkivelle2e@census.gov",
  "sector": "Sales",
  "anniversary": "11"
}, {
  "matricule": "72-4706574",
  "name": "Vivian Noir",
  "branch": "493",
  "email": "vnoir2f@ustream.tv",
  "sector": "Engineering",
  "anniversary": "11"
}, {
  "matricule": "15-4448689",
  "name": "Livy Shrive",
  "branch": "822",
  "email": "lshrive2g@fema.gov",
  "sector": "Engineering",
  "anniversary": "05"
}, {
  "matricule": "99-3103963",
  "name": "Sandi Bignold",
  "branch": "706",
  "email": "sbignold2h@wunderground.com",
  "sector": "Sales",
  "anniversary": "04"
}, {
  "matricule": "24-9702405",
  "name": "Taylor Tippetts",
  "branch": "645",
  "email": "ttippetts2i@bbc.co.uk",
  "sector": "Business Development",
  "anniversary": "10"
}, {
  "matricule": "61-0759402",
  "name": "Timmy Venditti",
  "branch": "847",
  "email": "tvenditti2j@ucoz.com",
  "sector": "Services",
  "anniversary": "12"
}, {
  "matricule": "86-5824473",
  "name": "Marco Beggin",
  "branch": "232",
  "email": "mbeggin2k@nature.com",
  "sector": "Human Resources",
  "anniversary": "08"
}, {
  "matricule": "30-3419384",
  "name": "Haskell Senechault",
  "branch": "234",
  "email": "hsenechault2l@4shared.com",
  "sector": "Marketing",
  "anniversary": "09"
}, {
  "matricule": "42-9340510",
  "name": "Homer Thorneywork",
  "branch": "669",
  "email": "hthorneywork2m@moonfruit.com",
  "sector": "Accounting",
  "anniversary": "12"
}, {
  "matricule": "91-5158357",
  "name": "Alphonso Beauchop",
  "branch": "801",
  "email": "abeauchop2n@histats.com",
  "sector": "Product Management",
  "anniversary": "06"
}, {
  "matricule": "99-3283398",
  "name": "Janessa Ticic",
  "branch": "823",
  "email": "jticic2o@examiner.com",
  "sector": "Human Resources",
  "anniversary": "09"
}, {
  "matricule": "40-4941404",
  "name": "Ola Fassman",
  "branch": "058",
  "email": "ofassman2p@dedecms.com",
  "sector": "Accounting",
  "anniversary": "07"
}, {
  "matricule": "96-5251431",
  "name": "Ardenia Gammell",
  "branch": "221",
  "email": "agammell2q@about.me",
  "sector": "Services",
  "anniversary": "10"
}, {
  "matricule": "03-3935152",
  "name": "Leland Stithe",
  "branch": "453",
  "email": "lstithe2r@rambler.ru",
  "sector": "Research and Development",
  "anniversary": "02"
}]

app.get('/test', (req, res) => {
    const anniversary = req.query.anniversary;
    const sector = req.query.sector;
    const branch = req.query.branch;
    let tempArray = []
    anniversarySearch(dataArray, anniversary, tempArray);
    sectorSearch(dataArray, sector, tempArray);
    branchSearch(dataArray, branch, tempArray);
    if (tempArray.length > 0) {
      res.json(tempArray)
    }
    res.json(dataArray)
});

const hostname = "localhost";
const port = 8080;

app.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`)
});