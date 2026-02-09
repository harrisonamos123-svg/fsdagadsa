const chapters = [
  {
    range: "Age 18–22",
    title: "Starting out",
    text:
      "Your first years out of school shape your whole life. A roommate offers a cheap place to live. A dream job pays little but builds skills.",
    security: 35,
    joy: 55,
    stress: 40,
    options: [
      {
        title: "Take the dream job",
        description: "+Skills, -Savings now, +Joy",
        effects: { savings: -1500, health: 2, energy: 4, security: 5, joy: 12, stress: 5 },
        timeline:
          "Chose passion over pay, gaining experience but tightening the budget.",
      },
      {
        title: "Take the stable job",
        description: "+Savings, +Security, -Joy",
        effects: { savings: 2200, health: -1, energy: -2, security: 12, joy: -4, stress: 4 },
        timeline: "Built financial stability with a steady paycheck.",
      },
      {
        title: "Go back to school",
        description: "-Savings, +Health, +Joy",
        effects: { savings: -2400, health: 5, energy: -3, security: 3, joy: 10, stress: 6 },
        timeline: "Invested in education, trading money for future options.",
      },
    ],
  },
  {
    range: "Age 23–30",
    title: "Building momentum",
    text:
      "Bills grow, but so do opportunities. You can push for a promotion or keep a calmer life.",
    security: 45,
    joy: 50,
    stress: 45,
    options: [
      {
        title: "Chase promotion",
        description: "+Savings, +Security, +Stress",
        effects: { savings: 8500, health: -4, energy: -6, security: 14, joy: -2, stress: 10 },
        timeline: "Worked longer hours to secure a promotion and higher pay.",
      },
      {
        title: "Balanced lifestyle",
        description: "+Health, +Joy, steady savings",
        effects: { savings: 4000, health: 6, energy: 3, security: 6, joy: 8, stress: -4 },
        timeline: "Protected your wellbeing while building a steady career.",
      },
      {
        title: "Start a side hustle",
        description: "+Savings, -Energy, +Joy",
        effects: { savings: 6000, health: -2, energy: -8, security: 8, joy: 5, stress: 6 },
        timeline: "Took on extra work to widen your income streams.",
      },
    ],
  },
  {
    range: "Age 31–40",
    title: "Family and commitments",
    text:
      "Choices now affect more people. Housing, caregiving, and career peaks arrive together.",
    security: 55,
    joy: 52,
    stress: 55,
    options: [
      {
        title: "Buy a home",
        description: "-Savings now, +Security, +Stress",
        effects: { savings: -12000, health: -2, energy: -4, security: 16, joy: 4, stress: 8 },
        timeline: "Committed to a mortgage for long-term stability.",
      },
      {
        title: "Care for family",
        description: "+Joy, -Savings, -Energy",
        effects: { savings: -5000, health: -3, energy: -8, security: 4, joy: 10, stress: 6 },
        timeline: "Put loved ones first, even when it cost time and money.",
      },
      {
        title: "Relocate for growth",
        description: "+Savings, +Joy, +Stress",
        effects: { savings: 10000, health: -1, energy: -3, security: 12, joy: 6, stress: 7 },
        timeline: "Moved to a new city to grow your opportunities.",
      },
    ],
  },
  {
    range: "Age 41–50",
    title: "Midlife recalibration",
    text:
      "Your body and mind need care. You can coast, pivot, or keep climbing.",
    security: 65,
    joy: 50,
    stress: 52,
    options: [
      {
        title: "Take a sabbatical",
        description: "-Savings, +Health, +Joy",
        effects: { savings: -8000, health: 10, energy: 8, security: -4, joy: 12, stress: -8 },
        timeline: "Pressed pause to recover and reconnect with yourself.",
      },
      {
        title: "Stay the course",
        description: "+Savings, +Security, +Stress",
        effects: { savings: 12000, health: -3, energy: -6, security: 10, joy: -3, stress: 8 },
        timeline: "Held steady in your career to keep finances strong.",
      },
      {
        title: "Switch careers",
        description: "-Savings, +Joy, +Stress",
        effects: { savings: -6000, health: 2, energy: -4, security: 4, joy: 10, stress: 6 },
        timeline: "Took a risk to find work that felt more meaningful.",
      },
    ],
  },
  {
    range: "Age 51–60",
    title: "Preparing for retirement",
    text:
      "Retirement is visible, but health can wobble. You can protect your future or live for today.",
    security: 72,
    joy: 48,
    stress: 48,
    options: [
      {
        title: "Max out retirement",
        description: "+Savings, +Security, -Joy",
        effects: { savings: 18000, health: -2, energy: -4, security: 12, joy: -4, stress: 4 },
        timeline: "Socked away money to make retirement safer.",
      },
      {
        title: "Downsize and travel",
        description: "+Joy, -Savings, +Health",
        effects: { savings: -9000, health: 4, energy: 5, security: 4, joy: 12, stress: -3 },
        timeline: "Traded a bigger home for memories and freedom.",
      },
      {
        title: "Support adult kids",
        description: "-Savings, +Joy, -Energy",
        effects: { savings: -7000, health: -2, energy: -6, security: 2, joy: 8, stress: 5 },
        timeline: "Helped your kids launch, even when it stretched you.",
      },
    ],
  },
  {
    range: "Age 61–78",
    title: "Retirement years",
    text:
      "Now you live with the results. Focus on stability, community, or enjoying your time.",
    security: 80,
    joy: 45,
    stress: 40,
    options: [
      {
        title: "Community volunteering",
        description: "+Joy, +Health",
        effects: { savings: -2000, health: 6, energy: 3, security: 2, joy: 10, stress: -2 },
        timeline: "Found purpose by giving back to your community.",
      },
      {
        title: "Live frugally",
        description: "+Savings, +Security, -Joy",
        effects: { savings: 5000, health: -1, energy: -2, security: 8, joy: -3, stress: 2 },
        timeline: "Kept expenses low to stretch your savings.",
      },
      {
        title: "Enjoy the bucket list",
        description: "+Joy, -Savings, -Energy",
        effects: { savings: -8000, health: -2, energy: -6, security: -2, joy: 12, stress: 4 },
        timeline: "Chased experiences while you still could.",
      },
    ],
  },
];

const state = {
  age: 18,
  savings: 2000,
  health: 80,
  energy: 85,
  security: 35,
  joy: 55,
  stress: 40,
  chapterIndex: 0,
  timeline: [],
  ended: false,
};

const ui = {
  age: document.getElementById("age"),
  savings: document.getElementById("savings"),
  health: document.getElementById("health"),
  energy: document.getElementById("energy"),
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

const renderChapter = () => {
  const chapter = chapters[state.chapterIndex];
  if (!chapter) {
    endGame();
    return;
  }

  ui.chapterTitle.textContent = `${chapter.range}: ${chapter.title}`;
  ui.chapterText.textContent = chapter.text;
  ui.choices.innerHTML = "";
  chapter.options.forEach((option) => {
    const button = document.createElement("button");
    button.className = "choice";
    button.type = "button";
    button.innerHTML = `<h4>${option.title}</h4><p>${option.description}</p>`;
    button.addEventListener("click", () => applyChoice(option));
    ui.choices.appendChild(button);
  });

  state.security = chapter.security;
  state.joy = chapter.joy;
  state.stress = chapter.stress;
  updateStats();
};

const applyChoice = (option) => {
  if (state.ended) {
    return;
  }
  const effects = option.effects;
  state.savings += effects.savings;
  state.health = clamp(state.health + effects.health);
  state.energy = clamp(state.energy + effects.energy);
  state.security = clamp(state.security + effects.security);
  state.joy = clamp(state.joy + effects.joy);
  state.stress = clamp(state.stress + effects.stress);

  const chapter = chapters[state.chapterIndex];
  state.timeline.push(`${chapter.range}: ${option.timeline}`);
  state.age = chapter.range.includes("–")
    ? parseInt(chapter.range.split("–")[1].trim(), 10)
    : state.age + 5;

  state.chapterIndex += 1;
  updateTimeline();
  updateStats();
  checkEndConditions();
  renderChapter();
};

const checkEndConditions = () => {
  if (state.savings < 0 || state.health <= 0 || state.energy <= 0) {
    endGame(true);
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
      "You made it through a whole lifetime. Reflect on the path you took and see if you can retire with even more stability next time.";
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
    chapterIndex: 0,
    timeline: [],
    ended: false,
  });
  ui.overlay.classList.add("hidden");
  ui.status.textContent = "Reach age 78 with savings above $0 to retire.";
  updateTimeline();
  renderChapter();
};

ui.restart.addEventListener("click", resetGame);
ui.playAgain.addEventListener("click", resetGame);

renderChapter();
