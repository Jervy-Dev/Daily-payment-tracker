const date = new Date();
const phdate = new Intl.DateTimeFormat("en-PH",{
    timeZone:"Asia/manila",
    year:"numeric",
    month:"numeric",
    day:"numeric"
}).formatToParts(date);

const day = Number(phdate.find(item => item.type === "day").value);
const month = Number(phdate.find(item => item.type === "month").value);
const year = Number(phdate.find(item => item.type === "year").value);

const totalp = document.getElementById("participants");
const dailyp = document.getElementById("Dpay");
const sdate = document.getElementById("startdate");
const now = document.getElementById("today");

const startdate = new Date(2026,6,20) //------
const currentdate = new Date(year, month -1, day);
const jcurpsd = new Date(2026,9,21);
const bcurpsd = new Date(2026,9,14);

const jformattedDate = jcurpsd.toLocaleDateString("en-PH");
const bformattedDate = bcurpsd.toLocaleDateString("en-PH");
  
const total_participants = 2;
const dailypay = 50;
const stdate = "7/20/2026";
now.innerHTML = `<p class="lar">${month}/${day}/${year}</p>`;

totalp.innerHTML = total_participants;
dailyp.innerHTML = dailypay;
sdate.innerHTML = `<p class="lar">${stdate}</p>`;


jcurpsd.setHours(0, 0, 0, 0);
bcurpsd.setHours(0, 0, 0, 0); 
currentdate.setHours(0, 0, 0, 0);
startdate.setHours(0, 0, 0, 0);//------

const bcurpsdiffrence = currentdate - bcurpsd;
const jcurpdifference = currentdate - jcurpsd;

const tsaves = Math.floor(
    (jcurpsd - startdate) / (1000 * 60 * 60 * 24)
);

const bsaves = Math.floor(
    (bcurpsd - startdate) / (1000 * 60 * 60 * 24)
);

const jtsaves = tsaves * 50;
const btsaves = bsaves * 50;
const totalsavings = jtsaves + btsaves;


jtsav.textContent = jtsaves;
btsav.textContent = btsaves;
totalsaves.textContent = totalsavings;

const jcurpsdays = Math.floor(
    jcurpdifference / (1000 * 60 * 60 * 24)
);

const bcurpsdays = Math.floor(
    bcurpsdiffrence / (1000 * 60 * 60 * 24)
);

const j1unpaid = document.getElementById("j1unpaid");
const b2unpaid = document.getElementById("b2unpaid");
const j1balance = document.getElementById("j1balance");
const b2balance = document.getElementById("b2balance");
const jlpdate = document.getElementById("jlpdate");
const blpdate = document.getElementById("blpdate");

const jtad = jcurpsdays*50;
const btad = bcurpsdays*50;

j1unpaid.textContent = jcurpsdays;
b2unpaid.textContent = bcurpsdays;
j1balance.textContent = jtad;
b2balance.textContent = btad;
jlpdate.textContent= jformattedDate;
blpdate.textContent= bformattedDate;
     













