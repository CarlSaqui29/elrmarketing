// render footer
let footerCont = document.querySelector(".fooWrap");
let footerBottom = document.querySelector(".footBot");
footerCont.innerHTML = 
`<div class="rowFooter">
  <div class="col-foo F1">
    <p class="black">ELR Marketing</p>
    <div class="pad"><img src="images/logo-1.png"></div>
    <p>Start Investing for your Future, <br>and Turn your Dreams to Address.</p>
  </div>
  <div class="col-foo F2">
    <ul>
      <li><p class="black">Pages</p></li>
      <li><a href="index.html">Home</a></li>
      <!--<li><a href="#">Gallery</a></li>
      <li><a href="#">Social</a></li>-->
      <li><a href="about.html">About</a></li>
      <li><a href="services.html">Services</a></li>
      <li><a href="properties.html">Properties</a></li>
    </ul>
  </div>
  <div class="col-foo F3">  
    <ul>
      <li><p class="black">Contacts</p></li>
      <li>inquiries@elrmarketing</li>
      <li>+63 919 218 7017</li>
      <li>Unit 21 Ferrer Bldg. Aguinaldo Highway Corner CBI Road, Anabu 1B Imus, Cavite</li>
    </ul>
  </div>
  <div class="col-foo F4">
    <p class="black">Social Links</p>
    <ul>
      <li class="transition"><a><i class="fab fa-twitter"></i></a></li>
      <li class="transition"><a class="fb"><i class="fab fa-facebook-f"></i></a></li>
      <li class="transition"><a uk-tooltip="+63 919 218 7017"><i class="fab fa-viber"></i></a></li>
      <li class="transition"><a><i class="fab fa-google"></i></a></li>
      <li class="transition"><a><i class="fab fa-facebook-messenger"></i></a></li>
    </ul>
  </div>
</div>`
footerBottom.innerHTML = 
`<div class="rowFooterBottom">
  <div class="colBottom"><p>Copyright ©2021 All rights reserved | Made with <i class="fas fa-heart"></i> by Carlos</p></div>
  <div class="colBottom TP">
    <ul>
      <li><a class="transition" href="#">Terms</a></li>
      <li><a class="transition" href="#">Privacy</a></li>
    </ul>
  </div>
</div>`

//navBar-Resize Onscroll
window.onscroll = function() {scrollFunction()};
let mq1200 = window.matchMedia("(max-width: 1200px)");

function resize() {
  if (mq1200.matches) { // If media query matches
    document.getElementById("navbar-shirnk").style.padding = "0 3vw .8vw";
  } else {
   document.getElementById("navbar-shirnk").style.padding = "0px 20vw";
  }
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar-shirnk").style.padding = "0px 20vw";
    document.getElementById("navbar-shirnk").style["boxShadow"] = "1px 12px 20px rgba(0, 0, 0, .05)";
    document.getElementById("logo").style.width = "150px";
    resize();
  } else {
    document.getElementById("navbar-shirnk").style.padding = "0 20vw .4vw";
    document.getElementById("navbar-shirnk").style["boxShadow"] = "none";
    document.getElementById("logo").style.width = "200px";
    resize();
  }
}

//render cards - conditional rendering
let imageList = [
  ['h0_0', 'h0_1', 'h0_5', 'h0_6', 'h0_2', 'h0_4',],
  ['h1_0', 'h1_1', 'h0_2'],
  ['h2_0', 'h2_1', 'h2_2'],
  ['h3_0', 'h3_1', 'h2_2'],
  ['h4_0', 'h3_1', 'h2_2'],
  ['c0_0', 'c0_1', 'c0_2', 'c0_3'],
  ['h5_0', 'h5_1', 'h5_2', 'h5_3'],
  ['c1_0', 'c1_1', 'c1_2', 'c1_3', 'c1_4'],
  ['c2_0', 'c2_1', 'c2_2', 'c2_3', 'c2_4', 'c2_5', 'c2_6', 'c2_7'],
  ['h7', 'h8', 'h9', 'h10', 'h11', 'h12', 'h13'],
  ['h6', 'h8', 'h9', 'h10', 'h11', 'h12', 'h13'],
  ['h6', 'h7', 'h9', 'h10', 'h11', 'h12', 'h13'],
  ['h6', 'h7', 'h8', 'h10', 'h11', 'h12', 'h13'],
  ['h6', 'h7', 'h8', 'h9', 'h11', 'h12', 'h13'],
  ['h6', 'h7', 'h8', 'h9', 'h10', 'h12', 'h13'],
  ['h6', 'h7', 'h8', 'h9', 'h10', 'h11', 'h13'],
  ['h6', 'h7', 'h8', 'h9', 'h10', 'h11', 'h12'],
  ['h14_0', 'h14_1', 'h14_2', 'h14_3', 'h14_4', 'h14_5', 'h14_6', 'h14_7', 'h14_8', 'h14_9', 'h14_10'],
  ['h15_0', 'h15_1', 'h15_2', 'h15_3', 'h15_4', 'h15_5', 'h15_6', 'h15_7', 'h15_8'],
  ['c3_0', 'c3_1', 'c3_2', 'c3_6', 'c3_7', 'c3_8', 'c3_9', 'c3_10', 'c3_11', 'c3_3', 'c3_4', 'c3_5'],
  ['c4_0', 'c4_1', 'c4_2', 'c4_3', 'c4_5', 'c4_6', 'c4_7', 'c4_8', 'c4_9', 'c4_10', 'c4_11', 'c4_12', 'c4_18', 'c4_19', 'c4_20', 'c4_21', 'c4_4', 'c4_13', 'c4_14', 'c4_15', 'c4_16', 'c4_17', 'c4_22', 'c4_23' ],
]

let homePage = $('a.home');
let homePageMobile = $('li.home');
let propertyPage = $('a.prop');
let propertyMobile = $('li.prop');
let fcard_listing = [ //featured listing
  {"c0": {id: 0, image: 'h0', price: '8,703', lotSqm: '58.5', bed: '2', cr: '1', subd: 'Tanauan Park Place', loc: 'Batangas'}},
  {"c0": {id: 1, image: 'h1', price: '9,069.62', lotSqm: '100', bed: '3', cr: '2', subd: 'Tanauan Park Place', loc: 'Batangas'}},
  {"c0": {id: 2, image: 'h2', price: '5,914.29', lotSqm: '86.25', bed: '1', cr: '1', subd: 'Greenmeadows Residence', loc: 'Batangas'}}
];
let pcard_listing = [ //all listing
  {"c0": {id: 0, type: 'house and lot', nameOfSubd: 'Tanauan Park Place', image: 'h0', price: '8,703', lotSqm: '58.5', floorSqm: '44.25', bed: '2', cr: '1', garage: '1', balcony: 'None', dev: 'Axeia', zip: '4232', loc: 'Batangas', city: 'Tanauan',
  p1: 'Jasmine - Tanauan Park Place<br>Brgy. Bagumbayan, Tanauan Batangas<br><br>- Along Bagumbayan Road<br>- 600m away from Puregold Tanauan<br>- 800m away from Victory Mall and Public Market<br>-1.4km away from La Consolacion College Tanauan<br>- 1.5km away from Waltermart Tanauan<br>- 2.5km away from Tanauan Transport Terminal',
  p2: 'Amenities:<br><br>- Basketball Court<br>- Club House<br>- Park and Playground<br>- Gazebos<br>- Sunken Gardens<br>- Commercial Area<br><br>This lovely housing unit Jasmine is located at barangay Bagumbayan Tanauan, Batangas. The most affordable housing unit in the heart of the city of Tanauan as low as 8,703 monthly amortization. Has living area, dinning are, kitchen, 1T&B, service area and a carport. Available on single attached, townhouse and Duplex.<br><br>#TanauanParkPlace'}},
  {"c1": {id: 1, type: 'house and lot', nameOfSubd: 'Tanauan Park Place', image: 'h1', price: '9,069.62', lotSqm: '100', floorSqm: '77.25', bed: '3', cr: '2', garage: '2', balcony: 'None', dev: 'Axeia', zip: '4232', loc: 'Batangas', city: 'Tanauan',
  p1: 'Linnea - Tanauan Park Place<br>Brgy. Bagumbayan, Tanauan Batangas<br><br>- Along Bagumbayan Road<br>- 600m away from Puregold Tanauan<br>- 800m away from Victory Mall and Public Market<br>-1.4km away from La Consolacion College Tanauan<br>- 1.5km away from Waltermart Tanauan<br>- 2.5km away from Tanauan Transport Terminal',
  p2: 'Amenities:<br><br>- Basketball Court<br>- Club House<br>- Park and Playground<br>- Gazebos<br>- Sunken Gardens<br>- Commercial Area<br><br>This lovely housing unit Linnea is located at barangay Bagumbayan Tanauan, Batangas. The most affordable housing unit in the heart of the city of Tanauan as low as 8,703 monthly amortization. Has living area, dinning are, kitchen, 2T&B, service area and a carport. Available on single attached.<br><br>#TanauanParkPlace'}},
  {"c2": {id: 2, type: 'house and lot', nameOfSubd: 'Greenmeadows Residence', image: 'h2', price: '5,914.29', lotSqm: '86.25', floorSqm: '40', bed: '1', cr: '1', garage: '1', balcony: 'None', dev: 'Axeia', zip: '4227', loc: 'Batangas', city: 'Calansanay',
  p1: 'Adeline - Greenmeadows Residence<br>Brgy. Calansayan San Jose Batangas<br><br>- Accessible Public Transport  Direct to Metro Manila<br>- Located at the Heart of Lipa City & Batangas City<br>- Affordable Price',
  p2: 'Are you worrying that you cannot avail your dream house single attached units? here in Greenmeadows Residence in barangay Calansayan San Jose Batangas you can afford this Adeline for as low as 5,914.29 pesos monthly amortization, perfect for you!<br><br>#GreenmeadowsResidence'}},
  {"c3": {id: 3, type: 'house and lot', nameOfSubd: 'Greenmeadows Residence', image: 'h3', price: '2,445', lotSqm: '45', floorSqm: '32', bed: '1', cr: '1', garage: 'None', balcony: 'None', dev: 'Axeia', zip: '4227', loc: 'Batangas', city: 'Calansanay',
  p1: 'Tangerine - Greenmeadows Residence (Row House)<br>Brgy. Calansayan San Jose Batangas<br><br>- Accessible Public Transport  Direct to Metro Manila<br>- Located at the Heart of Lipa City & Batangas City<br>- Affordable Price',
  p2: 'This housing unit is perfect for you! For only 2,445 monthly you can have a Row House in Barangay Calansanay, San Jose Batangas and a reservation fee of 2,500 only, This housing unit will be established in phase 3 of Greenmeadows.'}},
  {"c4": {id: 4, type: 'house and lot', nameOfSubd: 'Greenmeadows Residence', image: 'h4', price: '2,445', lotSqm: '54', floorSqm: '24.5', bed: '1', cr: '1', garage: 'None', balcony: 'None', dev: 'Axeia', zip: '4227', loc: 'Batangas', city: 'Calansanay',
  p1: 'Verdes - Greenmeadows Residence<br>Brgy. Calansayan San Jose Batangas<br><br>- Accessible Public Transport  Direct to Metro Manila<br>- Located at the Heart of Lipa City & Batangas City<br>- Affordable Price',
  p2: 'This housing unit is perfect for you! For only 2,445 monthly you can have a Row House in Barangay Calansanay, San Jose Batangas and a reservation fee of 2,500 only, This housing unit will be established in Greenmeadows.'}},
  {"c5": {id: 5, type: 'condominium', nameOfSubd: 'Midori Condominium', image: 'c0', price: '18,606.13', lotSqm: 'N/A', floorSqm: '50', bed: '2', cr: '1', garage: '100', balcony: 'None', dev: 'Axeia', zip: '1870', loc: 'Rizal', city: 'Antipolo',
  p1: 'Midori - Condominium<br>Maguey Road, Brgy. San Luis, Antipolo Rizal<br><br>Amenities<br>- Entrance Gate<br>- Tree House<br>- Gazebos<br>- Nipa Huts<br>- Playground<br>- Community Pathway',
  p2: 'If you are looking for condominium here at Antipolo, Rizal this Midori Condominium is perfect for you with the floor area of 50 SQM, 2 bedrooms, living room, dinning area, kitchen, patio, and 1 restroom not to mention the amenities where you can relax and have fun.'}},
  {"c6": {id: 6, type: 'house and lot', nameOfSubd: 'The Palm Residence', image: 'h0_4', price: '10,462.30', lotSqm: '58.5', floorSqm: '44', bed: '2', cr: '1', garage: '1', balcony: 'None', dev: 'Axeia', zip: '4108', loc: 'Cavite', city: 'Tanza',
  p1: 'Jasmine - The Palm Residence<br>Brgy. Calibuyo, Tanza Cavite',
  p2: 'Lovely housing here at Tanza Cavite. This Jasmine housing unit is located at Brgy. Calibuyo, Tanza Cavite at The Palm Residence perfect for you and your family. Available in single attached and duplex.<br><br>#ThePalmResidence'}},
  {"c7": {id: 7, type: 'condominium', nameOfSubd: 'Urban Deca Tower', image: 'c1', price: '16,143', lotSqm: 'N/A', floorSqm: '13.06', bed: '1', cr: '1', garage: 'N/A', balcony: 'None', dev: 'N/A', zip: '1554', loc: 'Mandaluyong', city: 'Edsa',
  p1: 'Urban Deca Tower - Condominium<br>69 Sierra Madre, Edsa Mandaluyong<br><br>- Walking distance to MRT Shaw Blvd. Megamall & Boni Mandaluyong<br>- Walking Distance to MRT Shaw crossing<br>- Walking Distance to VRP, Meagamall & Starmall<br>- Walking Distance to market and banks',
  p2: 'Requirments<br>- Valid IDs<br>- Tin Number<br>- Payslip or CEOC or Job Contract<br>- Birth or Marriage Certificate<br>- Post Dated Checks<br><br>Looking for condominium units near to your job, Urban Deca Tower is for you a RENT to OWN condo here in Edsa Mandaluyong.<br><br>#UrbanDecaTower'}},
  {"c8": {id: 8, type: 'condominium', nameOfSubd: 'Urban Deca Tower', image: 'c2', price: '19,450', lotSqm: 'N/A', floorSqm: '30.60', bed: '2', cr: '1', garage: 'N/A', balcony: 'None', dev: 'N/A', zip: '1605', loc: 'Ortigas', city: 'Pasig',
  p1: 'Urban Deca Tower - Condominium<br>Ortigas Pasig City<br><br>- Very accessible location<br>- Walking Distance to SM East, Super* Mall, 7/11, Ministop, Banks, market and Ciudad Grande Village<br>- One ride to Edsa Ortigas, Megamall, Shaw, Cubao, San Juan, Sta. Mesa, Antipolo and Rizal<br>- Minutes away from Mission Hospital and Medical City<br>- Affordable Monthly<br>- Pet Friendly<br>- Lifetime/Perpetal Ownership',
  p2: 'Units Available<br>- 2 Bedroom, 30.60SQM<br>- 2 Bedroom, 35.57SQM<br>- 3 Bedroom, 42.07SQM<br><br>Your dream home is now within your reach. Affordable, Accessible, Convenient and a Pet friendly Community. Presenting Urban Deca Home Ortigas the most cheap condominium in Ortigas Pasig City.<br><br>#UrbanDecaTower'}},
  {"c9": {id: 9, type: 'house and lot', nameOfSubd: 'Camella Homes', image: 'h6', price: '22,203', lotSqm: '88', floorSqm: '40', bed: '2', cr: '1', garage: '1', balcony: 'None', dev: 'Camella', zip: '4108', loc: 'Cavite', city: 'Tanza',
  p1: 'Alli - Camella Homes<br>Brgy. Bagtas Tanza, Cavite',
  p2: 'The Future Looks bright in south! Fulfill your dreams this year by choosing the perfect investment. Avail 36 months downpayment in the most sought address in south today. Camella Tanza Cavite has 8 Housing units offered to you, check it out in images.<br><br>#CamellaHomesTanza<br>#BiggestTownshipInSouth'}},
  {"c10": {id: 10, type: 'house and lot', nameOfSubd: 'Camella Homes', image: 'h7', price: '44,222', lotSqm: '110', floorSqm: '100', bed: '5', cr: '3', garage: '1', balcony: '1 (Provision)', dev: 'Camella', zip: '4108', loc: 'Cavite', city: 'Tanza',
  p1: 'Ella - Camella Homes<br>Brgy. Bagtas Tanza, Cavite',
  p2: 'The Future Looks bright in south! Fulfill your dreams this year by choosing the perfect investment. Avail 36 months downpayment in the most sought address in south today. Camella Tanza Cavite has 8 Housing units offered to you, check it out in images.<br><br>#CamellaHomesTanza<br>#BiggestTownshipInSouth'}},
  {"c11": {id: 11, type: 'house and lot', nameOfSubd: 'Camella Homes', image: 'h8', price: '52,491', lotSqm: '110', floorSqm: '100', bed: '5', cr: '3', garage: '1', balcony: '1', dev: 'Camella', zip: '4108', loc: 'Cavite', city: 'Tanza',
  p1: 'Freya - Camella Homes<br>Brgy. Bagtas Tanza, Cavite',
  p2: 'The Future Looks bright in south! Fulfill your dreams this year by choosing the perfect investment. Avail 36 months downpayment in the most sought address in south today. Camella Tanza Cavite has 8 Housing units offered to you, check it out in images.<br><br>#CamellaHomesTanza<br>#BiggestTownshipInSouth'}},
  {"c12": {id: 12, type: 'house and lot', nameOfSubd: 'Camella Homes', image: 'h9', price: '34,957', lotSqm: '99', floorSqm: '66', bed: '3', cr: '2', garage: '1 (Provision)', balcony: '1 (Provision)', dev: 'Camella', zip: '4108', loc: 'Cavite', city: 'Tanza',
  p1: 'Cara - Camella Homes<br>Brgy. Bagtas Tanza, Cavite',
  p2: 'The Future Looks bright in south! Fulfill your dreams this year by choosing the perfect investment. Avail 36 months downpayment in the most sought address in south today. Camella Tanza Cavite has 8 Housing units offered to you, check it out in images.<br><br>#CamellaHomesTanza<br>#BiggestTownshipInSouth'}},
  {"c13": {id: 13, type: 'house and lot', nameOfSubd: 'Camella Homes', image: 'h10', price: '39,553', lotSqm: '110', floorSqm: '83', bed: '4', cr: '3', garage: '1 (Provision)', balcony: '1 (Provision)', dev: 'Camella', zip: '4108', loc: 'Cavite', city: 'Tanza',
  p1: 'Dani - Camella Homes<br>Brgy. Bagtas Tanza, Cavite',
  p2: 'The Future Looks bright in south! Fulfill your dreams this year by choosing the perfect investment. Avail 36 months downpayment in the most sought address in south today. Camella Tanza Cavite has 8 Housing units offered to you, check it out in images.<br><br>#CamellaHomesTanza<br>#BiggestTownshipInSouth'}},
  {"c14": {id: 14, type: 'house and lot', nameOfSubd: 'Camella Homes', image: 'h11', price: '29,742', lotSqm: '88', floorSqm: '53', bed: '2', cr: '2', garage: 'None', balcony: 'None', dev: 'Camella', zip: '4108', loc: 'Cavite', city: 'Tanza',
  p1: 'Bella - Camella Homes<br>Brgy. Bagtas Tanza, Cavite',
  p2: 'The Future Looks bright in south! Fulfill your dreams this year by choosing the perfect investment. Avail 36 months downpayment in the most sought address in south today. Camella Tanza Cavite has 8 Housing units offered to you, check it out in images.<br><br>#CamellaHomesTanza<br>#BiggestTownshipInSouth'}},
  {"c15": {id: 15, type: 'house and lot', nameOfSubd: 'Camella Homes', image: 'h12', price: '60,716', lotSqm: '143', floorSqm: '166', bed: '5', cr: '3', garage: '2', balcony: '2', dev: 'Camella', zip: '4108', loc: 'Cavite', city: 'Tanza',
  p1: 'Greta - Camella Homes<br>Brgy. Bagtas Tanza, Cavite',
  p2: 'The Future Looks bright in south! Fulfill your dreams this year by choosing the perfect investment. Avail 36 months downpayment in the most sought address in south today. Camella Tanza Cavite has 8 Housing units offered to you, check it out in images.<br><br>#CamellaHomesTanza<br>#BiggestTownshipInSouth'}},
  {"c16": {id: 16, type: 'house and lot', nameOfSubd: 'Camella Homes', image: 'h13', price: '24,726', lotSqm: '88', floorSqm: '46', bed: '2', cr: '1', garage: '1 (Provision)', balcony: 'None', dev: 'Camella', zip: '4108', loc: 'Cavite', city: 'Tanza',
  p1: 'Aliyah - Camella Homes<br>Brgy. Bagtas Tanza, Cavite',
  p2: 'The Future Looks bright in south! Fulfill your dreams this year by choosing the perfect investment. Avail 36 months downpayment in the most sought address in south today. Camella Tanza Cavite has 8 Housing units offered to you, check it out in images.<br><br>#CamellaHomesTanza<br>#BiggestTownshipInSouth'}},
  {"c17": {id: 17, type: 'house and lot', nameOfSubd: 'Deca Homes', image: 'h14', price: '11,523', lotSqm: '40', floorSqm: '40', bed: '1', cr: '1', garage: 'None', balcony: 'None', dev: 'Deca Homes', zip: '3020', loc: 'Bulacan', city: 'Mecuayan',
  p1: 'RFO Units - Deca Homes<br>Brgy. Saluysoy Mecuayan, Bulacan<br><br>- Block 91 (40 SQM) RFO Units',
  p2: 'Lovely Housing awaits you! Deca Homes Mecuayan has RFO units, start investing now and own your dreams<br><br>#DecaHomesMecuayan'}},
  {"c18": {id: 18, type: 'house and lot', nameOfSubd: 'Estanzia Enclave', image: 'h15', price: '19,054', lotSqm: '50', floorSqm: '55', bed: '3', cr: '2', garage: '1', balcony: 'None', dev: 'Eztanzia', zip: '4108', loc: 'Cavite', city: 'Tanza',
  p1: 'Estanzia Enclave<br>Brgy. Halayhay Tanza, Cavite<br><br>- Your Coastal Santuary in the South<br>- 600m away from Antero Soriano road via a 15m wide Estanzia-Rebisco Boulevard.',
  p2: 'Own your dream house today and fulfill your dreams! contact us now for free tripping.<br><br>#EstanziaEnclave'}},
  {"c19": {id: 19, type: 'condominium', nameOfSubd: 'Coast Residences', image: 'c3', price: '(Inquire)', lotSqm: 'N/A', floorSqm: '30.98', bed: '1', cr: '1', garage: 'N/A', balcony: '1', dev: 'SMDC', zip: '1709', loc: 'Pasay', city: 'Roxas Blvd.',
  p1: 'Coast Residences<br>Roxas Blvd. Pasay City<br><br>- Manila Yatch Club (1.05 km)<br>- Manila Zoo and Botonical Garden (1.21 km)<br>- Baywalk Sunset Market (1.26 km)<br>- Manila Ocean Park (3.31 km)<br>- Luneta (3.67 km)<br>- Intramuros (4.36km)<br>- NAIA (4 km)<br>- Manila Hospital (1.12 km)<br>- SMX Convention Center Bazaars (2.58 km)<br>- SM Mall of Asia (2.27 km)<br>- City of Dreams (2.58 km)<br>- Solaire Resort and Casino (2.58 km)<br>- Resorst World (2.58 km)<br>- Star City (399 m)<br>- World Trade Center (450 km)',
  p2: "Amenities<br>- Adult Pool<br>- Kiddie Pool<br>- Children's Playground<br>- Gazebo<br>- View Lounge<br>- Seating Areas<br>- Jogging Path<br>- Meditation Garden<br><br>The views awaits you at Coast Residences, the Newest SMDC premier development. Situated in Roxas Boulevard, Coast Residence gives grand views of Manila Bay sunset and the Metro Manila city scope. With the Stunning Exterior design and interior inspired by the Bali's top hotels, Coast Residences gives a new view on premier condo living. Inquire now for more info.<br><br>#CoastResidence<br>#SMDC"}},
  {"c20": {id: 20, type: 'condominium', nameOfSubd: 'Sands Residences', image: 'c4', price: '(Inquire)', lotSqm: 'N/A', floorSqm: '28.97', bed: '1', cr: '1', garage: 'N/A', balcony: '1', dev: 'SMDC', zip: '1709', loc: 'Manila', city: 'Roxas Blvd.',
  p1: 'Sands Residences<br>Roxas Blvd. Manila<br><br>- SM Manila (2.1 km)<br>- SM Mall of Asia (3.9 km)<br>- Robinson Manila (0.7 km)<br>- Ayala Malls Manila Bay (5.1 km)<br>- UP Manila (0.8 km)<br>- MAPUA University Manila (2.3 km)<br>- De Lasalle University Manila (1.2 km)<br>- Manila Doctors Hospital (1.2 km)<br>- UP Philippine General Hospital (0.8 km)<br>- Okada Manila (6 km)<br>- Solaire Resort and Casino (5.2 km)<br>- Double Dragon Plaza (3.8 km)<br>- Regus - Manila Times Plaza (1.3 km)<br>- Mall of Asia Complex (3.9 km)',
  p2: "Amenities<br>- Swimming Pools<br>- Function Rooms<br>- Fitness Gym<br>- Children Playing Area<br>- Grand Lounge Area<br>- Sunset Viewing Platform<br><br>The dream of owning  a property by the bay  is about to come true.A Luxurious, 51 floor master planned community by Manila Bay where the sun and sand amidst the sea of luxury awaits you. A waterfront home that draws inspiration from silhouette of the setting sun againts the majestic backdrop of the city skyline.<br><br>#SandsResidence<br>#SMDC"}},
];
if (homePage.hasClass('active') && homePageMobile.hasClass('uk-active')) {
  let fcard_cont = document.querySelector(".Flisting .rowFlisting ul");
  for (var i = 0; i < fcard_listing.length; i++) {
    Object.values(fcard_listing[i]).map(item => {
      fcard_cont.innerHTML += 
      `<li><h1>${item.loc} ${item.nameOfSubd} ${item.dev} ${item.zip} ${item.type} ${item.city}</h1>
        <div class="columnFlisting">
          <div class="cardOuter">
          <center uk-lightbox>
            <a href="images/housing/${item.image}.jpg"><img src="images/housing/${item.image}.jpg" alt="${item.nameOfSubd} ${item.loc} ${item.city}"></a>
          </center>
          <div class="cardInner transition">
            <p>₱ ${item.price}/mo.</p>
            <p><i class="fas fa-bed"></i> ${item.bed}&nbsp;&nbsp; <i class="fas fa-toilet"></i> ${item.cr}&nbsp;&nbsp; <i class="fas fa-chart-area"></i> ${item.lotSqm} SQM</p>
            <p>${item.subd}</p>
            <p class="loc"><i class="fas fa-map-marker-alt"></i> ${item.loc}</p>
            <div class="btnRight">
              <button class="transition" onclick="setID(${item.id})" uk-tooltip="More Info"><span uk-icon="icon: info; ratio: 1.2;"></span></button>
            </div>
          </div>
        </div>
      </div></li>`
    });
  };
} if (propertyPage.hasClass('active') && propertyMobile.hasClass('uk-active')) {
  let pcard_cont = document.querySelector(".Fproperties .rproperties ul");
  for (var i = 0; i < pcard_listing.length; i++) {
    Object.values(pcard_listing[i]).map(item => {
      pcard_cont.innerHTML += 
      `<li><h1>${item.loc} ${item.nameOfSubd} ${item.dev} ${item.zip} ${item.type} ${item.city} ${item.loc + item.city}</h1>
        <div class="columnFlisting">
          <div class="cardOuter">
          <center uk-lightbox>
            <a href="images/housing/${item.image}.jpg"><img src="images/housing/${item.image}.jpg" alt="${item.nameOfSubd} ${item.loc} ${item.city}"></a>
          </center>
          <div class="cardInner transition">
            <p>₱ ${item.price}/mo.</p>
            <p><i class="fas fa-bed"></i> ${item.bed}&nbsp;&nbsp; <i class="fas fa-toilet"></i> ${item.cr}&nbsp;&nbsp; <i class="fas fa-chart-area"></i> ${item.lotSqm} SQM</p>
            <p>${item.nameOfSubd}</p>
            <p class="loc"><i class="fas fa-map-marker-alt"></i> ${item.loc}</p>
            <div class="btnRight">
              <button class="transition" onclick="setID(${item.id})" uk-tooltip="More Info"><span uk-icon="icon: info; ratio: 1.2;"></span></button>
            </div>
          </div>
        </div>
      </div></li>`
    });
  };
}

//render single property view 
let propCont = document.querySelector(".propCont");
let localID = window.localStorage.getItem('id');

if (localID != null && $('div').hasClass('propCont')) { //check if the id in local storage and the div w/ className propCont exist.
  renderProp();
};
function setID(id){
  window.localStorage.setItem('id', id);
  window.location.href = "viewProperty.html";
};

function renderProp() {
  Object.values(pcard_listing[localID]).map(item => {
    propCont.innerHTML =
    `<div class="uk-flex uk-flex-center">
      <div class="propView">
        <div uk-lightbox>
          <a href="images/housing/${item.image}.jpg"><img src="images/housing/${item.image}.jpg" alt="${item.loc} ${item.nameOfSubd} ${item.city}"></a>
        </div>
        <p>${item.loc}</p>
        <h2>${item.nameOfSubd}</h2>
      </div>
    </div>
    
    <center>
      <ul class="propNav uk-subnav" uk-switcher="animation: uk-animation-fade">
        <li><a href="#">Features</a></li>
        <li><a href="#">Description</a></li>
        <li><a href="#">Images</a></li>
      </ul>
      <div class="dividerProp">
        <hr class="uk-divider-icon">
      </div>
      <ul class="uk-switcher uk-margin">
        <li>
          <div class="rowPropView">
            <div class="colPropView">
              <p><i class="fas fa-mountain"></i><span>Lot Area: ${item.lotSqm} SQM</span></p>
              <p><i class="fas fa-chart-area"></i><span>Floor Area: ${item.floorSqm} SQM</span></p>
              <p><i class="fas fa-user-tie"></i><span>Developer: ${item.dev}</span></p>
            </div>
            <div class="colPropView">
              <p><i class="fas fa-bed"></i><span>Bed Rooms: ${item.bed}</span></p>
              <p><i class="fas fa-bath"></i><span>Bath Rooms: ${item.cr}</span></p>
              <p><i class="fas fa-warehouse"></i><span>Garage: ${item.garage}</span></p>
            </div>
            <div class="colPropView">
              <p><i class="fas fa-check"></i><span>Balcony: ${item.balcony}</span></p>
              <p><i class="fas fa-location-arrow"></i><span>Zip Code: ${item.zip}</span></p>
            </div>
          </div>
        </li>
        <li>${item.p1}<br><br>${item.p2}</li>
        <li class="moreImg">
          <div class="moreImgRow" uk-lightbox>

          </div>
        </li>
      </ul>
    </center>`
  });

  ID = parseInt(localID);
  let imgCont = document.querySelector(".moreImg .moreImgRow");
  let newLists = imageList[ID];

  for (let index = 0; index < newLists.length; index++) {
    imgCont.innerHTML +=
    `<div class="imgCol"><a href="images/housing/${newLists[index]}.jpg"><img src="images/housing/${newLists[index]}.jpg"></a></div>`
  }
};

//search method 
const qSearch = document.getElementById('quickSearchHome');
const qSearchProp = document.getElementById('userSearch');

if (homePage.hasClass('active') && homePageMobile.hasClass('uk-active')) {

  let ogProj = document.querySelector(".ogProj ul");
  let gbProj = document.querySelector(".gbProj ul");
  const og_proj = ['o', 'o_1', 'o_2', 'o_3', 'o_4', 'o_5', 'o_6'];
  const gb_proj = ['gb', 'gb_1', 'gb_2', 'gb_4', 'gb_3', 'gb_5', 'gb_6'];
  for (let i = 0; i < og_proj.length; i++) {
    ogProj.innerHTML +=
    `<li uk-lightbox><a href="images/projects/${og_proj[i]}.jpg"><img src="images/projects/${og_proj[i]}.jpg" alt="elr marketing projects"></a></li>`
  }
  for (let i = 0; i < gb_proj.length; i++) {
    gbProj.innerHTML +=
    `<li uk-lightbox><a href="images/projects/${gb_proj[i]}.jpg"><img src="images/projects/${gb_proj[i]}.jpg" alt="elr marketing projects"></a></li>`
  }
  qSearch.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
      document.getElementById("btnSec2").style.display = "none";
      document.getElementById("Flist").style.display = "none";
      document.getElementById("search").style.display = "block";
      setTimeout(goTo, 3000);
      let keyword = qSearch.value;
      window.localStorage.setItem('key', keyword); //setting to local storage to get access
    }
  });
} if (propertyPage.hasClass('active') && propertyMobile.hasClass('uk-active')) {
    let key = window.localStorage.getItem('key');
    window.localStorage.clear();
    qSearchProp.value = key;
    searchListing();

    qSearchProp.addEventListener("keyup", function(event) {
      if (event.keyCode === 13) {
        document.getElementById("ulFlist").style.display = "none";
        document.getElementById("search").style.display = "block";
        document.getElementById("noSearch").style.display = "none";
        setTimeout(searchListing, 3000);
      }
    });
}
 
function goTo() {
  window.location.href = "properties.html";
}

function searchListing() {
  document.getElementById("ulFlist").style.display = "block";
  document.getElementById("search").style.display = "none";
  let input, filter, ul, li, a, i, textVal;
  let counter = 0;
  input = document.getElementById("userSearch");
  filter = input.value.toUpperCase();
  ul = document.getElementById("ulFlist");
  li = ul.getElementsByTagName("li");

  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("h1")[0];
    textVal = a.textContent || a.innerText;
    if (textVal.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = '';
      counter++;
    } else {
      li[i].style.display = "none";
    }
  };

  if (counter == 0) {
    document.getElementById("noSearch").style.display = "block";
  } else {
    document.getElementById("noSearch").style.display = "none";
    counter = 0;
  }
};
function checkIfEmpty() {
  if (qSearchProp.value == '') {
    searchListing();
  }
};