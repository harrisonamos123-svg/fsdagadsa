const stages = [
  {
    range: [18, 22],
    title: "Starting out",
    text:
      "Your first years out of school shape your whole life. Focus on stability, learning, and building your network.",
    income: 2200,
    expenses: 1800,
    security: 35,
    joy: 55,
    stress: 40,
    options: [
      {
        title: "Take a low-paying dream job",
        description: "+Joy, +Skills, -Savings",
        effects: { savings: -600, health: 1, energy: 2, security: 3, joy: 8, stress: 3 },
        timeline: "Chased a passion role and learned fast.",
      },
      {
        title: "Choose a stable employer",
        description: "+Savings, +Security",
        effects: { savings: 400, health: -1, energy: -1, security: 6, joy: -2, stress: 2 },
        timeline: "Built a reliable foundation with steady pay.",
      },
      {
        title: "Move in with roommates",
        description: "+Savings, -Stress",
        effects: { savings: 500, health: 0, energy: 1, security: 2, joy: 3, stress: -2 },
        timeline: "Cut costs and made memories in a shared place.",
      },
      {
        title: "Go back to school",
        description: "+Joy, +Health, -Savings",
        effects: { savings: -900, health: 3, energy: -2, security: 2, joy: 6, stress: 4 },
        timeline: "Invested in education to widen future options.",
      },
    ],
  },
  {
    range: [23, 30],
    title: "Building momentum",
    text:
      "Bills grow, but so do opportunities. You can push for promotion or keep a calmer life.",
    income: 3200,
    expenses: 2400,
    security: 45,
    joy: 50,
    stress: 45,
    options: [
      {
        title: "Chase a promotion",
        description: "+Savings, +Stress",
        effects: { savings: 900, health: -2, energy: -4, security: 8, joy: -2, stress: 6 },
        timeline: "Worked longer hours to climb faster.",
      },
      {
        title: "Keep work-life balance",
        description: "+Health, +Joy",
        effects: { savings: 300, health: 4, energy: 3, security: 4, joy: 5, stress: -4 },
        timeline: "Protected your wellbeing while building slowly.",
      },
      {
        title: "Start a side hustle",
        description: "+Savings, -Energy",
        effects: { savings: 700, health: -1, energy: -5, security: 6, joy: 2, stress: 4 },
        timeline: "Added an extra income stream after hours.",
      },
      {
        title: "Move to a new city",
        description: "+Joy, -Savings",
        effects: { savings: -500, health: 1, energy: -2, security: 3, joy: 6, stress: 3 },
        timeline: "Relocated for a fresh start and new contacts.",
      },
    ],
  },
  {
    range: [31, 40],
    title: "Family and commitments",
    text:
      "Choices now affect more people. Housing, caregiving, and career peaks arrive together.",
    income: 4600,
    expenses: 3600,
    security: 55,
    joy: 52,
    stress: 55,
    options: [
      {
        title: "Buy a home",
        description: "+Security, -Savings",
        effects: { savings: -1200, health: -1, energy: -2, security: 8, joy: 3, stress: 5 },
        timeline: "Committed to a mortgage for long-term stability.",
      },
      {
        title: "Care for family",
        description: "+Joy, -Energy",
        effects: { savings: -600, health: -2, energy: -6, security: 4, joy: 7, stress: 4 },
        timeline: "Put loved ones first, even when it was hard.",
      },
      {
        title: "Relocate for growth",
        description: "+Savings, +Stress",
        effects: { savings: 900, health: -1, energy: -2, security: 6, joy: 4, stress: 5 },
        timeline: "Moved for a better role and bigger paycheck.",
      },
      {
        title: "Delay big purchases",
        description: "+Savings, -Joy",
        effects: { savings: 800, health: 0, energy: 1, security: 5, joy: -3, stress: 2 },
        timeline: "Stayed cautious with money to build reserves.",
      },
    ],
  },
  {
    range: [41, 50],
    title: "Midlife recalibration",
    text:
      "Your body and mind need care. You can coast, pivot, or keep climbing.",
    income: 5200,
    expenses: 4100,
    security: 65,
    joy: 50,
    stress: 52,
    options: [
      {
        title: "Take a sabbatical",
        description: "+Health, +Joy, -Savings",
        effects: { savings: -1000, health: 6, energy: 5, security: -2, joy: 8, stress: -5 },
        timeline: "Pressed pause to recover and reconnect.",
      },
      {
        title: "Stay the course",
        description: "+Savings, +Stress",
        effects: { savings: 1200, health: -2, energy: -3, security: 6, joy: -2, stress: 5 },
        timeline: "Held steady to keep finances strong.",
      },
      {
        title: "Switch careers",
        description: "+Joy, -Savings",
        effects: { savings: -700, health: 2, energy: -2, security: 2, joy: 7, stress: 4 },
        timeline: "Took a risk to find more meaningful work.",
      },
      {
        title: "Prioritize wellness",
        description: "+Health, -Savings",
        effects: { savings: -400, health: 5, energy: 4, security: 1, joy: 3, stress: -3 },
        timeline: "Invested in routines that keep you healthy.",
      },
    ],
  },
  {
    range: [51, 60],
    title: "Preparing for retirement",
    text:
      "Retirement is visible, but health can wobble. You can protect your future or live for today.",
    income: 5600,
    expenses: 4400,
    security: 72,
    joy: 48,
    stress: 48,
    options: [
      {
        title: "Max out retirement",
        description: "+Savings, -Joy",
        effects: { savings: 1400, health: -1, energy: -2, security: 7, joy: -3, stress: 3 },
        timeline: "Socked away money to make retirement safer.",
      },
      {
        title: "Downsize and travel",
        description: "+Joy, -Savings",
        effects: { savings: -800, health: 3, energy: 3, security: 3, joy: 8, stress: -2 },
        timeline: "Traded space for memories and freedom.",
      },
      {
        title: "Support adult kids",
        description: "+Joy, -Savings",
        effects: { savings: -900, health: -1, energy: -4, security: 2, joy: 6, stress: 4 },
        timeline: "Helped your kids launch, even when it stretched you.",
      },
      {
        title: "Reduce working hours",
        description: "+Health, -Savings",
        effects: { savings: -500, health: 4, energy: 3, security: -1, joy: 4, stress: -2 },
        timeline: "Shifted to fewer hours to protect your health.",
      },
    ],
  },
  {
    range: [61, 78],
    title: "Retirement years",
    text:
      "Now you live with the results. Focus on stability, community, or enjoying your time.",
    income: 2800,
    expenses: 2600,
    security: 80,
    joy: 45,
    stress: 40,
    options: [
      {
        title: "Community volunteering",
        description: "+Joy, +Health",
        effects: { savings: -200, health: 4, energy: 2, security: 2, joy: 6, stress: -2 },
        timeline: "Found purpose by giving back locally.",
      },
      {
        title: "Live frugally",
        description: "+Savings, -Joy",
        effects: { savings: 600, health: -1, energy: -1, security: 5, joy: -3, stress: 2 },
        timeline: "Kept expenses low to stretch your savings.",
      },
      {
        title: "Enjoy the bucket list",
        description: "+Joy, -Savings",
        effects: { savings: -900, health: -1, energy: -4, security: -1, joy: 7, stress: 3 },
        timeline: "Chased experiences while you still could.",
      },
      {
        title: "Move closer to family",
        description: "+Joy, +Security",
        effects: { savings: -400, health: 1, energy: 0, security: 4, joy: 5, stress: -1 },
        timeline: "Resettled to stay connected with loved ones.",
      },
    ],
  },
];

const retirementAge = 78;

const state = {
  age: 18,
  savings: 2000,
  health: 80,
  energy: 85,
  security: 35,
  joy: 55,
  stress: 40,
  timeline: [],
  ended: false,
};

const ui = {
  age: document.getElementById("age"),
  savings: document.getElementById("savings"),
  health: document.getElementById("health"),
  energy: document.getElementById("energy"),
  income: document.getElementById("income"),
  expenses: document.getElementById("expenses"),
  chapterTitle: document.getElementById("chapter-title"),
  chapterText: document.getElementById("chapter-text"),
  securityBar: document.getElementById("security-bar"),
  joyBar: document.getElementById("joy-bar"),
  stressBar: document.getElementById("stress-bar"),
  choices: document.getElementById("choices"),
  timelineList: document.getElementById("timeline-list"),
  restart: document.getElementById("restart"),
  overlay: document.getElementById("overlay"),
  endingTitle: document.getElementById("ending-title"),
  endingText: document.getElementById("ending-text"),
  playAgain: document.getElementById("play-again"),
  status: document.getElementById("status"),
};

const clamp = (value, min = 0, max = 100) => Math.max(min, Math.min(max, value));

const formatMoney = (amount) =>
  amount.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

const getStageForAge = (age) =>
  stages.find((stage) => age >= stage.range[0] && age <= stage.range[1]);

const shuffle = (items) => {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

const updateBars = () => {
  ui.securityBar.style.width = `${clamp(state.security)}%`;
  ui.joyBar.style.width = `${clamp(state.joy)}%`;
  ui.stressBar.style.width = `${clamp(100 - state.stress)}%`;
};

const updateStats = () => {
  ui.age.textContent = state.age;
  ui.savings.textContent = formatMoney(state.savings);
  ui.health.textContent = clamp(state.health);
  ui.energy.textContent = clamp(state.energy);
  updateBars();
};

const updateTimeline = () => {
  ui.timelineList.innerHTML = "";
  state.timeline.forEach((entry) => {
    const li = document.createElement("li");
    li.textContent = entry;
    ui.timelineList.appendChild(li);
  });
};

const renderYear = () => {
  if (state.ended) {
    return;
  }
  const stage = getStageForAge(state.age);
  if (!stage) {
    endGame();
    return;
  }

  ui.chapterTitle.textContent = `Age ${state.age}: ${stage.title}`;
  ui.chapterText.textContent = stage.text;
  ui.income.textContent = formatMoney(stage.income);
  ui.expenses.textContent = formatMoney(stage.expenses);

  state.security = stage.security;
  state.joy = stage.joy;
  state.stress = stage.stress;

  ui.choices.innerHTML = "";
  const options = shuffle(stage.options).slice(0, 3);
  options.forEach((option) => {
    const button = document.createElement("button");
    button.className = "choice";
    button.type = "button";
    button.innerHTML = `<h4>${option.title}</h4><p>${option.description}</p>`;
    button.addEventListener("click", () => applyChoice(option, stage));
    ui.choices.appendChild(button);
  });

  updateStats();
};

const applyChoice = (option, stage) => {
  if (state.ended) {
    return;
  }
  const effects = option.effects;
  const yearlyNet = stage.income - stage.expenses;

  state.savings += yearlyNet + effects.savings;
  state.health = clamp(state.health + effects.health);
  state.energy = clamp(state.energy + effects.energy);
  state.security = clamp(state.security + effects.security);
  state.joy = clamp(state.joy + effects.joy);
  state.stress = clamp(state.stress + effects.stress);

  state.timeline.unshift(`Age ${state.age}: ${option.timeline} (Net ${formatMoney(yearlyNet + effects.savings)})`);
  state.age += 1;

  updateTimeline();
  updateStats();
  checkEndConditions();
  if (!state.ended) {
    renderYear();
  }
};

const checkEndConditions = () => {
  if (state.savings < 0 || state.health <= 0 || state.energy <= 0) {
    endGame(true);
    return;
  }

  if (state.age > retirementAge) {
    endGame(false);
  }
};

const endGame = (failed = false) => {
  state.ended = true;
  ui.overlay.classList.remove("hidden");
  if (failed) {
    ui.endingTitle.textContent = "Life got too hard";
    ui.endingText.textContent =
      "Your resources ran out before retirement. Try again with different choices and protect your health and savings.";
  } else {
    ui.endingTitle.textContent = "You reached retirement";
    ui.endingText.textContent =
      "You made it through a whole lifetime. See how different choices could improve your retirement security.";
  }
};

const resetGame = () => {
  Object.assign(state, {
    age: 18,
    savings: 2000,
    health: 80,
    energy: 85,
    security: 35,
    joy: 55,
    stress: 40,
    timeline: [],
    ended: false,
  });
  ui.overlay.classList.add("hidden");
  ui.status.textContent = `Reach age ${retirementAge} with savings above $0 to retire.`;
  updateTimeline();
  renderYear();
};

ui.restart.addEventListener("click", resetGame);
ui.playAgain.addEventListener("click", resetGame);

resetGame();
