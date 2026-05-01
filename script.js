// 1. STATE & DATA
let state = {
    index: 0,
    score: 0,
    questions: [],
    course: "",
    userAnswers: [] // Stores choices to keep colors correct on 'Back'
};

const courseData = {
    "COS101": [
        { q: "What is the output of 5 + '5' in JS?", options: ["10", "55", "Error", "NaN"], a: "55" },
        { q: "Which unit is the 'brain' of the computer?", options: ["ALU", "CPU", "RAM", "HDD"], a: "CPU" },
        { q: "HTML is a programming language.", options: ["True", "False"], a: "False" },
        { q: "1 Byte is equal to how many bits?", options: ["4", "8", "16", "32"], a: "8" },
        { q: "Which tag is used for a link?", options: ["<link>", "<a>", "<url>", "<href>"], a: "<a>" },
        { q: "Which is a CSS framework?", options: ["React", "Bootstrap", "Django", "Node"], a: "Bootstrap" },
        { q: "Who created Python?", options: ["Guido van Rossum", "Brendan Eich", "Bill Gates", "Mark Zuckerberg"], a: "Guido van Rossum" },
        { q: "Which data type is 'True'?", options: ["String", "Integer", "Boolean", "Float"], a: "Boolean" },
        { q: "What is 10 % 3?", options: ["3", "1", "0", "3.3"], a: "1" },
        { q: "What does RAM stand for?", options: ["Read Access Memory", "Random Access Memory", "Real Action Mode", "None"], a: "Random Access Memory" }
    ],
    "BIO102": [
        { q: "Which of the following best describes protists?", options: ["Prokaryotic organisms", "Eukaryotic organisms with simple structures", "Organisms that are strictly photosynthetic", "Organisms with complex specialized tissues"], a: "Eukaryotic organisms with simple structures" },
        { q: "What is the primary method of movement for Phylum Rhizopoda?", options: ["Cilia", "Flagella", "Pseudopodia", "Gliding"], a: "Pseudopodia" },
        { q: "Which of the following is a characteristic of viruses?", options: ["They contain both DNA and RNA", "They have a well-defined nucleus", "They multiply by independent synthesis of constituents", "They are larger than the smallest cell"], a: "They multiply by independent synthesis of constituents" },
        { q: "In commensalism, what is the effect on the host?", options: ["The host is benefited", "The host is injured", "The host is neither injured nor benefited", "The host is destroyed"], a: "The host is neither injured nor benefited" },
        { q: "What is the function of the macronucleus in ciliates?", options: ["Sexual reproduction", "Metabolic activities and regeneration", "Exchanging nuclear material", "Synthesizing DNA only"], a: "Metabolic activities and regeneration" },
        { q: "Which of the following is an example of an acellular slime mould?", options: ["Dictyostelium", "Fuligo", "Saprolegnia", "Amoeba"], a: "Fuligo" },
        { q: "What is the role of the pellicle in protozoa?", options: ["It is involved in DNA replication", "It provides protection, support, and movement", "It is responsible for photosynthesis", "It is the site of food ingestion"], a: "It provides protection, support, and movement" },
        { q: "What is mutualism in the context of protozoa?", options: ["A parasitic relationship where the host dies", "A coexistence for mutual benefits", "An association where the protozoan is injured", "A form of binary fission"], a: "A coexistence for mutual benefits" },
        { q: "Which of the following is characteristic of Phylum Apicomplexa?", options: ["Presence of cilia", "Presence of an apical complex", "They are free-living", "They lack reproductive stages"], a: "Presence of an apical complex" },
        { q: "Which classification group contains plant-like flagellates?", options: ["Class zoomastigophorea", "Class phytomastigophorea", "Phylum Ciliophora", "Phylum Apicomplexa"], a: "Class phytomastigophorea" },
        // ADD THESE TO YOUR BIO102 ARRAY:
{ q: "Which of the following is NOT a basis for classifying Protists?", options: ["Presence of cilia", "Types of mitosis", "Color of the cell wall", "Mode of nutrition"], a: "Color of the cell wall" },
{ q: "Which group of protists are heterotrophs without permanent locomotor apparatus?", options: ["Sarcodina", "Ciliophora", "Mastigophora", "Apicomplexa"], a: "Sarcodina" },
{ q: "What is a defining characteristic of members of Phylum Rhizopoda?", options: ["They have cilia", "They use pseudopodia", "They are strictly multicellular", "They lack a nucleus"], a: "They use pseudopodia" },
{ q: "Protists are described as being distinctly...", options: ["Only plants", "Only animals", "Neither plant nor animal", "Both plant and animal"], a: "Neither plant nor animal" },
{ q: "Which of the following is a nutritional mode found in protists?", options: ["Heterotrophic", "Autotrophic", "Both heterotrophic and autotrophic", "Neither"], a: "Both heterotrophic and autotrophic" }

    ],
   "CHEM102":[
{ q: "What are the two resonance structures of benzene commonly called?", options: ["Hückel structures", "Kekulé structures", "Lewis structures", "Inductive structures"], a: "Kekulé structures" },
{ q: "Benzene preferably undergoes which type of reaction?", options: ["Addition", "Elimination", "Substitution", "Oxidation"], a: "Substitution" },
{ q: "According to Hückel's Rule, what is the formula for the number of pi electrons in an aromatic system?", options: ["4n", "4n + 2", "2n + 4", "n + 2"], a: "4n + 2" },
{ q: "How many pi electrons does Naphthalene have?", options: ["4", "6", "8", "10"], a: "10" },
{ q: "Which of the following is aromatic according to the 4n+2 rule?", options: ["Cycloheptatrienyl radical", "Cyclobutadiene", "Pyrrole", "Cyclooctatetraene"], a: "Pyrrole" },
{ q: "The cycloheptatrienyl radical is not aromatic because it has how many pi electrons?", options: ["5", "6", "7", "8"], a: "7" },
{ q: "What reagent is used alongside Benzene to produce Nitrobenzene?", options: ["HCl", "HNO3/H2SO4", "Cl2/FeCl3", "NaOH"], a: "HNO3/H2SO4" },
{ q: "In the chlorination of benzene, what acts as the catalyst?", options: ["UV light", "FeCl3", "H2SO4", "Platinum"], a: "FeCl3" },
{ q: "Which compound is more acidic?", options: ["Ethanol", "Phenol", "Methane", "Water"], a: "Phenol" },
{ q: "Phenol reacts with sodium hydroxide (NaOH) to form what?", options: ["Sodium phenoxide", "Benzene", "Sodium alcoholate", "Nitrobenzene"], a: "Sodium phenoxide" },
{ q: "Which effect is described as a permanent displacement of electrons along a sigma bond?", options: ["Resonance effect", "Inductive effect", "Electromeric effect", "Mesomeric effect"], a: "Inductive effect" },
{ q: "The resonance effect involves the displacement of which type of electrons?", options: ["Sigma electrons", "Core electrons", "Pi electrons", "Valence s-electrons"], a: "Pi electrons" },
{ q: "What happens to the inductive effect as the distance from the source increases?", options: ["It increases", "It stays the same", "It decreases", "It disappears instantly"], a: "It decreases" },
{ q: "Which of these is a general method for determining chemical structures?", options: ["Distillation", "Optical Rotation", "Filtration", "Titration"], a: "Optical Rotation" },
{ q: "Benzene has lower heats of hydrogenation than expected for which theoretical molecule?", options: ["Cyclohexane", "Cyclohexene", "Cyclohexatriene", "Hexane"], a: "Cyclohexatriene" },
{ q: "Thiophene is considered aromatic because it has how many pi electrons?", options: ["2", "4", "6", "10"], a: "6" },
{ q: "Both alcohols and phenols are considered to be very weak...", options: ["Acids", "Bases", "Catalysts", "Solvents"], a: "Bases" },
{ q: "Which method uses light to help determine the structure of a molecule?", options: ["Degradative Oxidation", "Molecular Formula", "X-ray analysis", "Optical Rotation"], a: "X-ray analysis" },
{ q: "Reaction of Nitrobenzene with Cl2 in the presence of FeCl3 produces which isomer?", options: ["Ortho-chloronitrobenzene", "Para-chloronitrobenzene", "Meta-chloronitrobenzene", "Benzene"], a: "Meta-chloronitrobenzene" },
{ q: "The resonance effect is also known as the...", options: ["Inductive effect", "Mesomeric effect", "Steric effect", "Static effect"], a: "Mesomeric effect" }
 ]
};

// 2. CORE FUNCTIONS
function selectCourse(key) {
    state.course = key;
    state.index = 0;
    state.score = 0;
    state.userAnswers = [];
    // SHUFFLE QUESTIONS
    state.questions = [...courseData[key]].sort(() => Math.random() - 0.5);
    
    document.getElementById('start-container').classList.add('hidden');
    document.getElementById('quiz-container').classList.remove('hidden');
    renderQuestion();
}

function renderQuestion() {
    const q = state.questions[state.index];
    document.getElementById('question-number').innerText = `Question ${state.index + 1}/${state.questions.length}`;
    document.getElementById('question-text').innerText = q.q;
    
    const grid = document.getElementById('answer-grid');
    grid.innerHTML = "";

    // SHUFFLE OPTIONS
    let options = [...q.options].sort(() => Math.random() - 0.5);

    options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'main-btn';
        btn.innerText = opt;
        
        // If already answered (via Back button), show the result
        if (state.userAnswers[state.index]) {
            applyColor(btn, opt, q.a, state.userAnswers[state.index]);
            btn.disabled = true;
        }

        btn.onclick = () => handleChoice(opt, btn);
        grid.appendChild(btn);
    });
}

function handleChoice(selected, btn) {
    const correct = state.questions[state.index].a;
    state.userAnswers[state.index] = selected;
    
    const btns = document.querySelectorAll('.main-btn');
    btns.forEach(b => {
        b.disabled = true;
        applyColor(b, b.innerText, correct, selected);
    });

    if (selected === correct) state.score++;
    document.getElementById('score-display').innerText = state.score;
}

function applyColor(btn, text, correct, selected) {
    if (text === correct) btn.style.background = "var(--success)";
    else if (text === selected) btn.style.background = "var(--error)";
}

function goNext() {
    if (state.index < state.questions.length - 1) {
        state.index++;
        renderQuestion();
    } else {
        showResults();
    }
}

function goBack() {
    if (state.index > 0) {
        state.index--;
        renderQuestion();
    }
}
function showResults() {
    let percentage = (state.score / state.questions.length) * 100;
    
    document.getElementById('quiz-container').classList.add('hidden');
    document.getElementById('result-container').classList.remove('hidden');
    
    // Display score and percentage
    document.getElementById('final-score').innerText = 
        `Score: ${state.score}/${state.questions.length} (${percentage.toFixed(1)}%)`;
}


// 3. UI UTILITIES
function toggleNav() { document.getElementById("side-nav").classList.toggle("open"); }
function setTheme(t) { 
    document.body.className = t === 'dark' ? 'dark-theme' : ''; 
    localStorage.setItem('theme', t);
    toggleNav(); 
}

// Load Theme on Start
if(localStorage.getItem('theme') === 'dark') document.body.className = 'dark-theme';
function toggleNav() {
    const nav = document.getElementById("side-nav");
    const backdrop = document.getElementById("menu-backdrop");
    
    // Toggle the 'open' class on the menu
    nav.classList.toggle("open");
    
    // Toggle the display of the backdrop
    if (nav.classList.contains("open")) {
        backdrop.style.display = "block";
    } else {
        backdrop.style.display = "none";
    }
}
