const BASELINE = {
  "al": { male: 78.12, female: 81.74 }, // Albania
  "dz": { male: 75.30, female: 78.13 }, // Algeria
  "ar": { male: 75.0, female: 80.0 }, // Argentina
  "au": { male: 82.10, female: 85.74 }, // Australia
  "at": { male: 79.8, female: 84.5 }, // Austria
  "az": { male: 73.5, female: 78.6 }, // Azerbaijan
  "bs": { male: 75.1, female: 78.4 }, // Bahamas
  "bh": { male: 78.1, female: 82.7 }, // Bahrain
  "bd": { male: 73.3, female: 76.7 }, // Bangladesh
  "bb": { male: 76.3, female: 81.8 }, // Barbados
  "by": { male: 69.8, female: 80.0 }, // Belarus
  "be": { male: 80.1, female: 84.5 }, // Belgium
  "bo": { male: 71.0, female: 74.0 }, // Bolivia
  "br": { male: 72.80, female: 79.00 }, // Brazil
  "bg": { male: 72.9, female: 79.4 }, // Bulgaria
  "cv": { male: 73.25, female: 79.53 }, // Cabo Verde
  "ca": { male: 80.34, female: 84.10 }, // Canada
  "cl": { male: 77.3, female: 83.3 }, // Chile
  "cn": { male: 75.51, female: 80.48 }, // China
  "co": { male: 71.3, female: 78.7 }, // Colombia
  "cr": { male: 78.60, female: 83.72 }, // Costa Rica
  "hr": { male: 74.6, female: 81.0 }, // Croatia
  "cu": { male: 77.8, female: 82.6 }, // Cuba
  "cz": { male: 75.6, female: 81.8 }, // Czech Republic
  "dk": { male: 80.2, female: 84.1 }, // Denmark
  "do": { male: 71.0, female: 74.3 }, // Dominican Republic
  "ec": { male: 69.7, female: 80.4 }, // Ecuador
  "eg": { male: 69.7, female: 74.0 }, // Egypt
  "sv": { male: 72.4, female: 79.5 }, // El Salvador
  "ee": { male: 73.8, female: 83.2 }, // Estonia
  "fi": { male: 79.3, female: 85.2 }, // Finland
  "fr": { male: 80.43, female: 86.09 }, // France
  "de": { male: 78.20, female: 83.00 }, // Germany
  "gh": { male: 68.4, female: 71.8 }, // Ghana
  "gr": { male: 79.5, female: 84.5 }, // Greece
  "gt": { male: 71.5, female: 75.6 }, // Guatemala
  "hn": { male: 69.6, female: 76.8 }, // Honduras
  "hu": { male: 72.9, female: 79.3 }, // Hungary
  "is": { male: 81.8, female: 86.3 }, // Iceland
  "in": { male: 68.00, female: 70.70 }, // India
  "id": { male: 69.2, female: 73.4 }, // Indonesia
  "ir": { male: 74.3, female: 77.1 }, // Iran
  "iq": { male: 71.9, female: 75.7 }, // Iraq
  "ie": { male: 80.6, female: 84.6 }, // Ireland
  "il": { male: 80.7, female: 84.7 }, // Israel
  "it": { male: 81.8, female: 85.9 }, // Italy
  "jm": { male: 74.5, female: 78.1 }, // Jamaica
  "jo": { male: 75.0, female: 78.1 }, // Jordan
  "kz": { male: 69.0, female: 77.9 }, // Kazakhstan
  "ke": { male: 68.6, female: 72.2 }, // Kenya
  "kw": { male: 79.5, female: 82.0 }, // Kuwait
  "lv": { male: 72.0, female: 81.0 }, // Latvia
  "lb": { male: 77.8, female: 80.7 }, // Lebanon
  "ly": { male: 71.23, female: 75.26 }, // Libya
  "lt": { male: 70.8, female: 81.7 }, // Lithuania
  "lu": { male: 80.9, female: 85.9 }, // Luxembourg
  "my": { male: 74.5, female: 79.5 }, // Malaysia
  "mv": { male: 80.20, female: 83.17 }, // Maldives
  "mx": { male: 72.20, female: 77.90 }, // Mexico
  "md": { male: 66.1, female: 74.4 }, // Moldova
  "mn": { male: 67.75, female: 76.88 }, // Mongolia
  "nl": { male: 80.7, female: 83.8 }, // Netherlands
  "nz": { male: 80.6, female: 83.9 }, // New Zealand
  "ng": { male: 54.3, female: 54.9 }, // Nigeria
  "mk": { male: 75.41, female: 79.83 }, // North Macedonia
  "no": { male: 81.9, female: 85.0 }, // Norway
  "om": { male: 75.5, female: 79.4 }, // Oman
  "pk": { male: 65.5, female: 70.3 }, // Pakistan
  "ps": { male: 69.72, female: 76.86 }, // Palestine
  "pa": { male: 76.4, female: 82.2 }, // Panama
  "py": { male: 76.2, female: 81.6 }, // Paraguay
  "pe": { male: 65.4, female: 72.7 }, // Peru
  "ph": { male: 67.0, female: 73.0 }, // Philippines
  "pl": { male: 72.8, female: 80.9 }, // Poland
  "pt": { male: 79.7, female: 85.3 }, // Portugal
  "qa": { male: 81.8, female: 83.5 }, // Qatar
  "ro": { male: 73.4, female: 80.5 }, // Romania
  "ru": { male: 67.5, female: 79.2 }, // Russia
  "lc": { male: 69.60, female: 76.60 }, // Saint Lucia
  "ws": { male: 70.06, female: 73.97 }, // Samoa
  "sa": { male: 77.10, female: 81.16 }, // Saudi Arabia
  "rs": { male: 72.7, female: 78.1 }, // Serbia
  "sg": { male: 84.0, female: 89.5 }, // Singapore
  "sk": { male: 73.7, female: 81.0 }, // Slovakia
  "si": { male: 79.4, female: 85.2 }, // Slovenia
  "za": { male: 62.8, female: 69.8 }, // South Africa
  "kr": { male: 81.3, female: 87.3 }, // South Korea
  "es": { male: 81.1, female: 86.4 }, // Spain
  "lk": { male: 74.65, female: 80.90 }, // Sri Lanka
  "se": { male: 81.7, female: 85.2 }, // Sweden
  "ch": { male: 82.2, female: 86.0 }, // Switzerland
  "sy": { male: 73.4, female: 76.4 }, // Syria
  "tw": { male: 78.6, female: 84.7 }, // Taiwan
  "tz": { male: 69.0, female: 72.6 }, // Tanzania
  "th": { male: 72.3, female: 81.0 }, // Thailand
  "tn": { male: 74.34, female: 79.50 }, // Tunisia
  "tr": { male: 74.6, female: 80.3 }, // Turkey
  "tm": { male: 69.4, female: 75.5 }, // Turkmenistan
  "ug": { male: 67.5, female: 72.0 }, // Uganda
  "ua": { male: 69.8, female: 79.4 }, // Ukraine
  "ae": { male: 82.2, female: 84.3 }, // United Arab Emirates
  "uk": { male: 79.36, female: 83.21 }, // United Kingdom
  "us": { male: 76.86, female: 81.85 }, // United States
  "uy": { male: 75.8, female: 82.1 }, // Uruguay
  "uz": { male: 73.6, female: 79.0 }, // Uzbekistan
  "ve": { male: 71.5, female: 77.7 }, // Venezuela
  "vn": { male: 70.0, female: 79.4 }, // Vietnam
  "other": { male: 75, female: 80 } // Fallback for other countries
};

const humanQuestions = [
  {
    id: 'birthdate',
    text: 'When were you born?',
    input: '<input type="date" id="birthdate" class="input-field" required>'
  },
  {
    id: 'gender',
    text: 'What is your gender?',
    input: `<div class="options">
      <button class="option-btn" data-value="male">Male</button>
      <button class="option-btn" data-value="female">Female</button>
    </div>`
  },
  {
    id: 'country',
    text: 'What country do you live in?',
    input: `<select id="country" class="input-field">
      <option value="">Select your country</option>
      <option value="al">Albania</option>
      <option value="dz">Algeria</option>
      <option value="ar">Argentina</option>
      <option value="au">Australia</option>
      <option value="at">Austria</option>
      <option value="az">Azerbaijan</option>
      <option value="bs">Bahamas</option>
      <option value="bh">Bahrain</option>
      <option value="bd">Bangladesh</option>
      <option value="bb">Barbados</option>
      <option value="by">Belarus</option>
      <option value="be">Belgium</option>
      <option value="bo">Bolivia</option>
      <option value="br">Brazil</option>
      <option value="bg">Bulgaria</option>
      <option value="cv">Cabo Verde</option>
      <option value="ca">Canada</option>
      <option value="cl">Chile</option>
      <option value="cn">China</option>
      <option value="co">Colombia</option>
      <option value="cr">Costa Rica</option>
      <option value="hr">Croatia</option>
      <option value="cu">Cuba</option>
      <option value="cz">Czech Republic</option>
      <option value="dk">Denmark</option>
      <option value="do">Dominican Republic</option>
      <option value="ec">Ecuador</option>
      <option value="eg">Egypt</option>
      <option value="sv">El Salvador</option>
      <option value="ee">Estonia</option>
      <option value="fi">Finland</option>
      <option value="fr">France</option>
      <option value="de">Germany</option>
      <option value="gh">Ghana</option>
      <option value="gr">Greece</option>
      <option value="gt">Guatemala</option>
      <option value="hn">Honduras</option>
      <option value="hu">Hungary</option>
      <option value="is">Iceland</option>
      <option value="in">India</option>
      <option value="id">Indonesia</option>
      <option value="ir">Iran</option>
      <option value="iq">Iraq</option>
      <option value="ie">Ireland</option>
      <option value="il">Israel</option>
      <option value="it">Italy</option>
      <option value="jm">Jamaica</option>
      <option value="jo">Jordan</option>
      <option value="kz">Kazakhstan</option>
      <option value="ke">Kenya</option>
      <option value="kw">Kuwait</option>
      <option value="lv">Latvia</option>
      <option value="lb">Lebanon</option>
      <option value="ly">Libya</option>
      <option value="lt">Lithuania</option>
      <option value="lu">Luxembourg</option>
      <option value="my">Malaysia</option>
      <option value="mv">Maldives</option>
      <option value="mx">Mexico</option>
      <option value="md">Moldova</option>
      <option value="mn">Mongolia</option>
      <option value="nl">Netherlands</option>
      <option value="nz">New Zealand</option>
      <option value="ng">Nigeria</option>
      <option value="mk">North Macedonia</option>
      <option value="no">Norway</option>
      <option value="om">Oman</option>
      <option value="pk">Pakistan</option>
      <option value="ps">Palestine</option>
      <option value="pa">Panama</option>
      <option value="py">Paraguay</option>
      <option value="pe">Peru</option>
      <option value="ph">Philippines</option>
      <option value="pl">Poland</option>
      <option value="pt">Portugal</option>
      <option value="qa">Qatar</option>
      <option value="ro">Romania</option>
      <option value="ru">Russia</option>
      <option value="lc">Saint Lucia</option>
      <option value="ws">Samoa</option>
      <option value="sa">Saudi Arabia</option>
      <option value="rs">Serbia</option>
      <option value="sg">Singapore</option>
      <option value="sk">Slovakia</option>
      <option value="si">Slovenia</option>
      <option value="za">South Africa</option>
      <option value="kr">South Korea</option>
      <option value="es">Spain</option>
      <option value="lk">Sri Lanka</option>
      <option value="se">Sweden</option>
      <option value="ch">Switzerland</option>
      <option value="sy">Syria</option>
      <option value="tw">Taiwan</option>
      <option value="tz">Tanzania</option>
      <option value="th">Thailand</option>
      <option value="tn">Tunisia</option>
      <option value="tr">Turkey</option>
      <option value="tm">Turkmenistan</option>
      <option value="ug">Uganda</option>
      <option value="ua">Ukraine</option>
      <option value="ae">United Arab Emirates</option>
      <option value="uk">United Kingdom</option>
      <option value="us">United States</option>
      <option value="uy">Uruguay</option>
      <option value="uz">Uzbekistan</option>
      <option value="ve">Venezuela</option>
      <option value="vn">Vietnam</option>
      <option value="other">Other</option>
    </select>`
  },
  {
    id: 'height',
    text: 'What is your height?',
    input: `<div class="height-input" id="height-input-group">
      <div id="height-imperial">
        <input type="number" id="height-feet" class="input-field small" placeholder="Feet" min="3" max="8">
        <input type="number" id="height-inches" class="input-field small" placeholder="Inches" min="0" max="11">
      </div>
      <div id="height-metric" style="display:none;">
        <input type="number" id="height-cm" class="input-field" placeholder="Centimeters" min="90" max="250">
      </div>
      <div class="options" style="margin-top:0.5em;">
        <button class="option-btn" id="height-unit-imperial" data-unit="imperial" style="border:2px solid #fff;">ft/in</button>
        <button class="option-btn" id="height-unit-metric" data-unit="metric">cm</button>
      </div>
    </div>`
  },
  {
    id: 'weight',
    text: 'What is your weight?',
    input: `<div class="weight-input" id="weight-input-group">
      <div id="weight-imperial">
        <input type="number" id="weight-lb" class="input-field" placeholder="Pounds" min="50" max="500">
      </div>
      <div id="weight-metric" style="display:none;">
        <input type="number" id="weight-kg" class="input-field" placeholder="Kilograms" min="25" max="250">
      </div>
      <div class="options" style="margin-top:0.5em;">
        <button class="option-btn" id="weight-unit-imperial" data-unit="imperial" style="border:2px solid #fff;">lb</button>
        <button class="option-btn" id="weight-unit-metric" data-unit="metric">kg</button>
      </div>
    </div>`
  },
  {
    id: 'smoke',
    text: 'Do you smoke?',
    input: `<div class="options">
      <button class="option-btn" data-value="never">Never</button>
      <button class="option-btn" data-value="former">Former smoker</button>
      <button class="option-btn" data-value="light">Light smoker</button>
      <button class="option-btn" data-value="moderate">Moderate smoker</button>
      <button class="option-btn" data-value="heavy">Heavy smoker</button>
    </div>`
  },
  {
    id: 'alcohol',
    text: 'Do you drink alcohol?',
    input: `<div class="options">
      <button class="option-btn" data-value="never">Never</button>
      <button class="option-btn" data-value="modest">Modest</button>
      <button class="option-btn" data-value="moderate">Moderate</button>
      <button class="option-btn" data-value="heavy">Heavy</button>
    </div>`
  },
  {
    id: 'exercise',
    text: 'How many times do you exercise per week?',
    input: `<div class="options">
      <button class="option-btn" data-value="0">0 times</button>
      <button class="option-btn" data-value="1-2">1-2</button>
      <button class="option-btn" data-value="3-4">3-4</button>
      <button class="option-btn" data-value="5+">5+</button>
    </div>`
  },
  {
    id: 'fruits_vegetables',
    text: 'Daily fruit & vegetable servings',
    input: `<div class="options">
      <button class="option-btn" data-value="0-1">0–1</button>
      <button class="option-btn" data-value="2-3">2–3</button>
      <button class="option-btn" data-value="4+">4+</button>
    </div>`
  },
  {
    id: 'sleep',
    text: 'Average sleep per night',
    input: `<div class="options">
      <button class="option-btn" data-value="less_than_5">Less than 5 hours</button>
      <button class="option-btn" data-value="5-6">5–6 hours</button>
      <button class="option-btn" data-value="7-8">7–8 hours</button>
      <button class="option-btn" data-value="more_than_8">More than 8 hours</button>
    </div>`
  },
  {
    id: 'stress',
    text: 'Typical stress level',
    input: `<div class="options">
      <button class="option-btn" data-value="low">Low</button>
      <button class="option-btn" data-value="moderate">Moderate</button>
      <button class="option-btn" data-value="high">High</button>
    </div>`
  },
  {
    id: 'sitting',
    text: 'Hours spent sitting each day',
    input: `<div class="options">
      <button class="option-btn" data-value="0-4">0–4 hours</button>
      <button class="option-btn" data-value="5-8">5–8 hours</button>
      <button class="option-btn" data-value="9-12">9–12 hours</button>
      <button class="option-btn" data-value="more_than_12">More than 12 hours</button>
    </div>`
  },
  {
    id: 'family_early_death',
    text: 'Has a parent or sibling died before age 60 from heart disease, stroke, or cancer?',
    input: `<div class="options">
      <button class="option-btn" data-value="no">No</button>
      <button class="option-btn" data-value="yes">Yes</button>
    </div>`
  },
  {
    id: 'family_longevity',
    text: 'Does your family members often live to 90 years or more?',
    input: `<div class="options">
      <button class="option-btn" data-value="majority">Majority of them</button>
      <button class="option-btn" data-value="some">Some of them</button>
      <button class="option-btn" data-value="rarely">Rarely</button>
    </div>`
  },
  {
    id: 'cancer_history',
    text: 'Have you ever been diagnosed with cancer?',
    input: `<div class="options">
      <button class="option-btn" data-value="no">No</button>
      <button class="option-btn" data-value="yes">Yes</button>
      
    </div>`
  },
  // Medical history questions
  {
    id: 'hypertension',
    text: 'Have you ever been diagnosed with high blood pressure (hypertension)?',
    input: `<div class="options">
      <button class="option-btn" data-value="no">No</button>
      <button class="option-btn" data-value="yes">Yes</button>
    </div>`
  },
  {
    id: 'diabetes',
    text: 'Have you ever been diagnosed with diabetes (type 1 or 2)?',
    input: `<div class="options">
      <button class="option-btn" data-value="no">No</button>
      <button class="option-btn" data-value="yes">Yes</button>
    </div>`
  },
  {
    id: 'cholesterol',
    text: 'Have you ever been diagnosed with high cholesterol?',
    input: `<div class="options">
      <button class="option-btn" data-value="no">No</button>
      <button class="option-btn" data-value="yes">Yes</button>
    </div>`
  },
];

const ratQuestions = [
  {
    id: 'birthdate',
    text: 'When were you born?',
    input: '<input type="date" id="birthdate" class="input-field" required>'
  },
  {
    id: 'gender',
    text: 'What is your gender?',
    input: `<div class="options">
      <button class="option-btn" data-value="male">Male</button>
      <button class="option-btn" data-value="female">Female</button>
    </div>`
  },
  {
    id: 'breed',
    text: 'What type of rat are you?',
    input: `<div class="options">
      <button class="option-btn" data-value="fancy">Fancy Rat</button>
      <button class="option-btn" data-value="dumbo">Dumbo Rat</button>
      <button class="option-btn" data-value="rex">Rex Rat</button>
      <button class="option-btn" data-value="hairless">Hairless Rat</button>
      <button class="option-btn" data-value="wild">Wild Rat</button>
    </div>`
  },
  {
    id: 'weight',
    text: 'What is your weight?',
    input: `<div class="weight-input" id="weight-input-group">
      <div id="weight-imperial">
        <input type="number" id="weight-lb" class="input-field" placeholder="Pounds" min="0.1" max="2" step="0.1">
      </div>
      <div id="weight-metric" style="display:none;">
        <input type="number" id="weight-kg" class="input-field" placeholder="Kilograms" min="0.05" max="1" step="0.01">
      </div>
      <div class="options" style="margin-top:0.5em;">
        <button class="option-btn" id="weight-unit-imperial" data-unit="imperial" style="border:2px solid #fff;">lb</button>
        <button class="option-btn" id="weight-unit-metric" data-unit="metric">kg</button>
      </div>
    </div>`
  },
  {
    id: 'diet',
    text: 'What is your diet?',
    input: `<div class="options">
      <button class="option-btn" data-value="lab">Lab food</button>
      <button class="option-btn" data-value="natural">Natural diet</button>
      <button class="option-btn" data-value="mixed">Mixed diet</button>
      <button class="option-btn" data-value="junk">Junk food</button>
    </div>`
  },
  {
    id: 'exercise',
    text: 'How much do you exercise?',
    input: `<div class="options">
      <button class="option-btn" data-value="none">No exercise</button>
      <button class="option-btn" data-value="light">Light exercise</button>
      <button class="option-btn" data-value="moderate">Moderate exercise</button>
      <button class="option-btn" data-value="heavy">Heavy exercise</button>
    </div>`
  },
  {
    id: 'environment',
    text: 'What is your living environment?',
    input: `<div class="options">
      <button class="option-btn" data-value="lab">Laboratory</button>
      <button class="option-btn" data-value="pet">Pet home</button>
      <button class="option-btn" data-value="wild">Wild</button>
      <button class="option-btn" data-value="sewer">Sewer</button>
    </div>`
  },
  {
    id: 'health',
    text: 'Do you have any health conditions?',
    input: `<div class="options">
      <button class="option-btn" data-value="none">None</button>
      <button class="option-btn" data-value="respiratory">Respiratory issues</button>
      <button class="option-btn" data-value="tumors">Tumors</button>
      <button class="option-btn" data-value="multiple">Multiple conditions</button>
    </div>`
  },
  {
    id: 'social',
    text: 'How social are you?',
    input: `<div class="options">
      <button class="option-btn" data-value="loner">Loner</button>
      <button class="option-btn" data-value="small_group">Small group</button>
      <button class="option-btn" data-value="large_group">Large group</button>
      <button class="option-btn" data-value="very_social">Very social</button>
    </div>`
  }
];

const speciesQuestion = {
  id: 'species',
  text: 'What are you?',
  input: `<div class="options">
    <button class="option-btn" data-value="human">Human</button>
    <button class="option-btn" data-value="rat">Rat</button>
  </div>`
};

let questions = [speciesQuestion];
let answers = {};
let current = 0;
let isHuman = null;

function showQuestion(idx) {
  const q = questions[idx];
  const questionsDiv = document.getElementById('questions');
  
  console.log('Showing question:', q.id, 'at index:', idx);
  console.log('Should show continue button:', q.id === 'birthdate' || q.id === 'country' || q.id === 'height' || q.id === 'weight');
  
  questionsDiv.innerHTML = `
    <div class="question-step">
      <h2>${q.text}</h2>
      ${q.input}
      <div class="button-container">
        ${idx > 0 ? '<button class="next-btn" id="back-btn">Back</button>' : '<div></div>'}
        ${q.id === 'birthdate' || q.id === 'country' || q.id === 'height' || q.id === 'weight' ? '<button class="next-btn" id="next-btn">Continue</button>' : ''}
      </div>
    </div>
  `;
  // Add listeners
  if (q.id === 'birthdate') {
    document.getElementById('next-btn').onclick = () => handleNext(q.id);
  }
  if (q.id === 'country') {
    document.getElementById('next-btn').onclick = () => handleNext(q.id);
  }
  if (q.id === 'height') {
    document.getElementById('next-btn').onclick = () => handleNext(q.id);
  }
  if (q.id === 'weight') {
    document.getElementById('next-btn').onclick = () => handleNext(q.id);
  }
  if (idx > 0) {
    document.getElementById('back-btn').onclick = () => {
      current--;
      showQuestion(current);
    };
  }
  // Option buttons
  document.querySelectorAll('.option-btn').forEach(btn => {
    btn.onclick = () => {
      // Height/weight unit switching
      if (btn.id === 'height-unit-imperial' || btn.id === 'height-unit-metric') {
        document.getElementById('height-imperial').style.display = btn.dataset.unit === 'imperial' ? '' : 'none';
        document.getElementById('height-metric').style.display = btn.dataset.unit === 'metric' ? '' : 'none';
        document.getElementById('height-unit-imperial').style.border = btn.dataset.unit === 'imperial' ? '2px solid #fff' : '2px solid transparent';
        document.getElementById('height-unit-metric').style.border = btn.dataset.unit === 'metric' ? '2px solid #fff' : '2px solid transparent';
        return;
      }
      if (btn.id === 'weight-unit-imperial' || btn.id === 'weight-unit-metric') {
        document.getElementById('weight-imperial').style.display = btn.dataset.unit === 'imperial' ? '' : 'none';
        document.getElementById('weight-metric').style.display = btn.dataset.unit === 'metric' ? '' : 'none';
        document.getElementById('weight-unit-imperial').style.border = btn.dataset.unit === 'imperial' ? '2px solid #fff' : '2px solid transparent';
        document.getElementById('weight-unit-metric').style.border = btn.dataset.unit === 'metric' ? '2px solid #fff' : '2px solid transparent';
        return;
      }
      
      answers[q.id] = btn.getAttribute('data-value');
      
      // Handle species selection
      if (q.id === 'species') {
        isHuman = btn.getAttribute('data-value') === 'human';
        if (isHuman) {
          questions = [speciesQuestion, ...humanQuestions];
        } else {
          questions = [speciesQuestion, ...ratQuestions];
        }
        current = 1; // Move to first question of selected species
        showQuestion(current);
        return;
      }
      
      current++;
      if (current < questions.length) {
        showQuestion(current);
      } else {
        showResults();
      }
    };
  });
}

function handleNext(id) {
  if (id === 'birthdate') {
    const val = document.getElementById('birthdate').value;
    if (!val) return;
    answers.birthdate = val;
  } else if (id === 'country') {
    const val = document.getElementById('country').value;
    if (!val) return;
    answers.country = val;
  } else if (id === 'height') {
    let heightCm = null;
    if (document.getElementById('height-metric').style.display !== 'none') {
      heightCm = parseFloat(document.getElementById('height-cm').value);
      if (isNaN(heightCm)) return;
    } else {
      const feet = parseInt(document.getElementById('height-feet').value, 10);
      const inches = parseInt(document.getElementById('height-inches').value, 10);
      if (isNaN(feet) || isNaN(inches)) return;
      heightCm = feet * 30.48 + inches * 2.54;
    }
    answers.height = heightCm;
  } else if (id === 'weight') {
    let weightKg = null;
    if (document.getElementById('weight-metric').style.display !== 'none') {
      weightKg = parseFloat(document.getElementById('weight-kg').value);
      if (isNaN(weightKg)) return;
    } else {
      const weightLb = parseFloat(document.getElementById('weight-lb').value);
      if (isNaN(weightLb)) return;
      weightKg = weightLb * 0.453592;
    }
    answers.weight = weightKg;
  }
  current++;
  if (current < questions.length) {
    showQuestion(current);
  } else {
    showResults();
  }
}

function showResults() {
  document.getElementById('questionnaire').classList.add('hidden');
  document.getElementById('results').classList.remove('hidden');
  document.getElementById('results').classList.add('active');

  console.log('All answers:', answers);
  console.log('Species:', isHuman ? 'Human' : 'Rat');

  let expectancy;
  let bmi = null;

  if (isHuman) {
    // Human calculations
    const heightM = answers.height / 100;
    bmi = answers.weight / (heightM * heightM);
    document.getElementById('bmi-label').textContent = 'Your BMI';
    document.getElementById('bmi-result').textContent = bmi.toFixed(1);

    // Life expectancy baseline
    expectancy = 80;
    if (answers.country && answers.gender && BASELINE[answers.country] && BASELINE[answers.country][answers.gender]) {
      expectancy = BASELINE[answers.country][answers.gender];
    }

    console.log('Baseline expectancy:', expectancy);

    // Medical conditions - ONLY penalties for having them
    if (answers.hypertension === 'yes') {
      expectancy -= 3;
      console.log('Hypertension penalty applied (-3)');
    }
    if (answers.diabetes === 'yes') {
      expectancy -= 15;
      console.log('Diabetes penalty applied (-15)');
    }
    if (answers.cholesterol === 'yes') {
      expectancy -= 7;
      console.log('Cholesterol penalty applied (-7)');
    }

    // Smoking - MASSIVE bonuses for not smoking, penalties for smoking
    if (answers.smoke === 'heavy') {
      expectancy -= 20;
      console.log('Heavy smoking penalty applied (-20)');
    } else if (answers.smoke === 'moderate') {
      expectancy -= 12;
      console.log('Moderate smoking penalty applied (-12)');
    } else if (answers.smoke === 'light') {
      expectancy -= 7;
      console.log('Light smoking penalty applied (-7)');
    } else if (answers.smoke === 'former') {
      expectancy -= 5;
      console.log('Former smoker penalty applied (-5)');
    } else {
      expectancy += 10; // MASSIVE bonus for never smoking
      console.log('Never smoked - MASSIVE bonus (+10)');
    }

    // Alcohol - MASSIVE bonuses for healthy drinking, penalties for heavy
    if (answers.alcohol === 'heavy') {
      expectancy -= 15;
      console.log('Heavy alcohol penalty applied (-15)');
    } else if (answers.alcohol === 'moderate') {
      expectancy -= 5;
      console.log('Moderate alcohol penalty applied (-5)');
    } else if (answers.alcohol === 'modest') {
      expectancy -= 3;
      console.log('Modest alcohol penalty applied (-3)');
    } else {
      expectancy += 5; // Bonus for never drinking
      console.log('Never drinks - bonus (+5)');
    }

    // Physical activity - MASSIVE bonuses for exercise
    if (answers.exercise === '0') {
      expectancy -= 5;
      console.log('No exercise penalty applied (-5)');
    } else if (answers.exercise === '1-2') {
      expectancy += 7; // Bonus for some exercise
      console.log('1-2 exercise bonus applied (+7)');
    } else if (answers.exercise === '3-4') {
      expectancy += 11; // MASSIVE bonus
      console.log('3-4 exercise bonus applied (+11)');
    } else if (answers.exercise === '5+') {
      expectancy += 16; // HUGE bonus
      console.log('5+ exercise bonus applied (+16)');
    }

    // BMI - MASSIVE penalties for obesity, bonuses for healthy BMI
    if (bmi < 18.5) {
      expectancy -= 2; // Underweight
      console.log('BMI underweight penalty applied (-2)');
    } else if (bmi >= 25 && bmi < 30) {
      expectancy += 2; // Bonus for slightly overweight
      console.log('BMI overweight bonus applied (+2)');
    } else if (bmi >= 30 && bmi < 35) {
      expectancy -= 15; // MASSIVE penalty for Class I obesity
      console.log('BMI Class I obesity MASSIVE penalty applied (-15)');
    } else if (bmi >= 35 && bmi < 40) {
      expectancy -= 20; // HUGE penalty for Class II obesity
      console.log('BMI Class II obesity HUGE penalty applied (-20)');
    } else if (bmi >= 40) {
      expectancy -= 35; // DEVASTATING penalty for Class III obesity
      console.log('BMI Class III obesity DEVASTATING penalty applied (-35)');
    } else {
      expectancy += 10; // MASSIVE bonus for healthy BMI
      console.log('BMI in healthy range - MASSIVE bonus (+10)');
    }

    // New health factors
    // Fruits & vegetables
    if (answers.fruits_vegetables === '0-1') {
      expectancy -= 5;
      console.log('Low fruit/vegetable penalty applied (-5)');
    } else if (answers.fruits_vegetables === '2-3') {
      expectancy += 3;
      console.log('Moderate fruit/vegetable bonus applied (+3)');
    } else if (answers.fruits_vegetables === '4+') {
      expectancy += 8;
      console.log('High fruit/vegetable bonus applied (+8)');
    }

    // Sleep
    if (answers.sleep === 'less_than_5') {
      expectancy -= 8;
      console.log('Very low sleep penalty applied (-8)');
    } else if (answers.sleep === '5-6') {
      expectancy -= 3;
      console.log('Low sleep penalty applied (-3)');
    } else if (answers.sleep === '7-8') {
      expectancy += 7;
      console.log('Optimal sleep bonus applied (+7)');
    } else if (answers.sleep === 'more_than_8') {
      expectancy += 10;
      console.log('Excessive sleep bonus applied (+10)');
    }

    // Stress
    if (answers.stress === 'low') {
      expectancy += 6;
      console.log('Low stress bonus applied (+6)');
    } else if (answers.stress === 'moderate') {
      expectancy += 1;
      console.log('Moderate stress bonus applied (+1)');
    } else if (answers.stress === 'high') {
      expectancy -= 5;
      console.log('High stress penalty applied (-5)');
    }

    // Sitting time
    if (answers.sitting === '0-4') {
      expectancy += 4;
      console.log('Low sitting time bonus applied (+4)');
    } else if (answers.sitting === '5-8') {
      expectancy += 1;
      console.log('Moderate sitting time bonus applied (+1)');
    } else if (answers.sitting === '9-12') {
      expectancy -= 2;
      console.log('High sitting time penalty applied (-2)');
    } else if (answers.sitting === 'more_than_12') {
      expectancy -= 4;
      console.log('Very high sitting time penalty applied (-4)');
    }

    // Family early death history
    if (answers.family_early_death === 'yes') {
      expectancy -= 5;
      console.log('Family early death penalty applied (-5)');
    } else {
      expectancy += 3;
      console.log('No family early death bonus applied (+3)');
    }

    // Family longevity
    if (answers.family_longevity === 'majority') {
      expectancy += 6;
      console.log('Family longevity bonus applied (+6)');
    } else if (answers.family_longevity === 'some') {
      expectancy += 3;
      console.log('Some family longevity bonus applied (+3)');
    } else if (answers.family_longevity === 'rarely') {
      expectancy -= 1;
      console.log('Rare family longevity penalty applied (-1)');
    }

    // Cancer history
    if (answers.cancer_history === 'yes') {
      expectancy -= 12;
      console.log('Cancer history penalty applied (-12)');
    } else {
      expectancy += 2;
      console.log('No cancer history bonus applied (+2)');
    }

    // Clamp - Much higher bounds
    if (expectancy < 60) expectancy = 60;
    if (expectancy > 120) expectancy = 120;

  } else {
    // Rat calculations
    expectancy = 2.5; // Base rat life expectancy in years
    
    // Breed factors
    if (answers.breed === 'fancy') {
      expectancy += 0.5;
      console.log('Fancy rat bonus (+0.5)');
    } else if (answers.breed === 'dumbo') {
      expectancy += 0.3;
      console.log('Dumbo rat bonus (+0.3)');
    } else if (answers.breed === 'rex') {
      expectancy += 0.2;
      console.log('Rex rat bonus (+0.2)');
    } else if (answers.breed === 'hairless') {
      expectancy -= 0.5;
      console.log('Hairless rat penalty (-0.5)');
    } else if (answers.breed === 'wild') {
      expectancy -= 1.0;
      console.log('Wild rat penalty (-1.0)');
    }

    // Gender factors
    if (answers.gender === 'female') {
      expectancy += 0.3;
      console.log('Female rat bonus (+0.3)');
    }

    // Weight factors (assuming weight is in kg)
    const weightKg = answers.weight;
    if (weightKg < 0.2) {
      expectancy -= 0.5;
      console.log('Underweight penalty (-0.5)');
    } else if (weightKg > 0.6) {
      expectancy -= 0.8;
      console.log('Overweight penalty (-0.8)');
    } else {
      expectancy += 0.3;
      console.log('Healthy weight bonus (+0.3)');
    }

    // Diet factors
    if (answers.diet === 'lab') {
      expectancy += 0.5;
      console.log('Lab food bonus (+0.5)');
    } else if (answers.diet === 'natural') {
      expectancy += 0.3;
      console.log('Natural diet bonus (+0.3)');
    } else if (answers.diet === 'mixed') {
      expectancy += 0.1;
      console.log('Mixed diet bonus (+0.1)');
    } else if (answers.diet === 'junk') {
      expectancy -= 0.8;
      console.log('Junk food penalty (-0.8)');
    }

    // Exercise factors
    if (answers.exercise === 'none') {
      expectancy -= 0.5;
      console.log('No exercise penalty (-0.5)');
    } else if (answers.exercise === 'light') {
      expectancy += 0.2;
      console.log('Light exercise bonus (+0.2)');
    } else if (answers.exercise === 'moderate') {
      expectancy += 0.4;
      console.log('Moderate exercise bonus (+0.4)');
    } else if (answers.exercise === 'heavy') {
      expectancy += 0.6;
      console.log('Heavy exercise bonus (+0.6)');
    }

    // Environment factors
    if (answers.environment === 'lab') {
      expectancy += 0.8;
      console.log('Lab environment bonus (+0.8)');
    } else if (answers.environment === 'pet') {
      expectancy += 0.5;
      console.log('Pet home bonus (+0.5)');
    } else if (answers.environment === 'wild') {
      expectancy -= 0.5;
      console.log('Wild environment penalty (-0.5)');
    } else if (answers.environment === 'sewer') {
      expectancy -= 1.0;
      console.log('Sewer environment penalty (-1.0)');
    }

    // Health factors
    if (answers.health === 'none') {
      expectancy += 0.3;
      console.log('No health issues bonus (+0.3)');
    } else if (answers.health === 'respiratory') {
      expectancy -= 0.5;
      console.log('Respiratory issues penalty (-0.5)');
    } else if (answers.health === 'tumors') {
      expectancy -= 0.8;
      console.log('Tumors penalty (-0.8)');
    } else if (answers.health === 'multiple') {
      expectancy -= 1.2;
      console.log('Multiple conditions penalty (-1.2)');
    }

    // Social factors
    if (answers.social === 'loner') {
      expectancy -= 0.3;
      console.log('Loner penalty (-0.3)');
    } else if (answers.social === 'small_group') {
      expectancy += 0.2;
      console.log('Small group bonus (+0.2)');
    } else if (answers.social === 'large_group') {
      expectancy += 0.4;
      console.log('Large group bonus (+0.4)');
    } else if (answers.social === 'very_social') {
      expectancy += 0.6;
      console.log('Very social bonus (+0.6)');
    }

    // Clamp rat life expectancy
    if (expectancy < 0.5) expectancy = 0.5;
    if (expectancy > 5) expectancy = 5;

    // For rats, show weight instead of BMI
    document.getElementById('bmi-label').textContent = 'Your Weight';
    document.getElementById('bmi-result').textContent = (answers.weight * 2.20462).toFixed(2) + ' lbs';
  }

  console.log('Final expectancy:', expectancy);

  document.getElementById('life-expectancy').textContent = expectancy.toFixed(1) + ' years';

  // Calculate years left
  const birth = new Date(answers.birthdate);
  const now = new Date();
  const age = (now - birth) / (365.25 * 24 * 60 * 60 * 1000);
  let yearsLeft = expectancy - age;
  if (yearsLeft < 0) yearsLeft = 0;
  const monthsLeft = Math.floor(yearsLeft * 12) % 12;
  const daysLeft = Math.floor((yearsLeft * 365.25) % 30.44);
  document.getElementById('years-left').textContent = Math.floor(yearsLeft);
  document.getElementById('months-left').textContent = monthsLeft;
  document.getElementById('days-left').textContent = daysLeft;

  // Predicted death date
  const deathDate = new Date(birth.getFullYear() + expectancy, birth.getMonth(), birth.getDate());
  document.getElementById('death-date').textContent = deathDate.toDateString();
}

function restartQuiz() {
  answers = {};
  current = 0;
  isHuman = null;
  questions = [speciesQuestion];
  document.getElementById('results').classList.add('hidden');
  document.getElementById('results').classList.remove('active');
  document.getElementById('questionnaire').classList.remove('hidden');
  showQuestion(0);
}

window.onload = () => {
  showQuestion(0);
}; 