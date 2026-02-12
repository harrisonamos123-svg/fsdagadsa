const stages = [
  {
    range: [13, 17],
    title: "Teen years",
    text:
      "You are starting earlier in life. School, early responsibilities, and part-time work begin shaping your future.",
    expenses: 900,
    security: 28,
    joy: 60,
    stress: 32,
    options: [
      {
        title: "Take a part-time job",
        description: "+Savings, -Energy",
        effects: { savings: 350, health: -1, energy: -2, security: 4, joy: -1, stress: 2 },
        timeline: "Started earning early with an after-school job.",
      },
      {
        title: "Focus on academics",
        description: "+Security, +Stress",
        effects: { savings: -100, health: 1, energy: -1, security: 5, joy: 1, stress: 3 },
        timeline: "Put extra effort into school and future opportunities.",
      },
      {
        title: "Join clubs and activities",
        description: "+Joy, -Savings",
        effects: { savings: -150, health: 1, energy: -1, security: 2, joy: 4, stress: -1 },
        timeline: "Built friendships and confidence through activities.",
      },
      {
        title: "Help family financially",
        description: "-Savings, +Security",
        effects: { savings: -250, health: -1, energy: -2, security: 4, joy: 1, stress: 2 },
        timeline: "Contributed at home, taking on adult responsibilities early.",
      },
    ],
  },
  {
    range: [18, 22],
    title: "Starting out",
    text:
      "Your first years out of school shape your whole life. Focus on stability, learning, and building your network.",
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
    expenses: 3600,
    security: 55,
    joy: 52,
    stress: 55,
    options: [
      {
        title: "Negotiate a bigger role",
        description: "+Savings, +Stress",
        effects: { savings: 1100, health: -1, energy: -2, security: 7, joy: 1, stress: 5 },
        timeline: "Took on broader responsibilities for better pay.",
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

const startAge = 13;
const retirementAge = 78;
const daysPerYear = 365;
const totalDays = (retirementAge - startAge) * daysPerYear;
const maxTimelineEntries = 40;
const choicesPerDay = 5;
const annualReturns = { savingsAccount: 0.02, cdAccount: 0.045, indexFund: 0.07 };
const simStartDate = new Date(2000, 8, 1);
const repeatWindowDays = 120;

const housingMarkets = [
  { name: "Midwest City", salaryMultiplier: 0.95, annualLocationCost: 1800, homePrice: 180000, rentalYield: 0.055 },
  { name: "Sunbelt Suburb", salaryMultiplier: 1.0, annualLocationCost: 2600, homePrice: 240000, rentalYield: 0.06 },
  { name: "Coastal Metro", salaryMultiplier: 1.2, annualLocationCost: 7000, homePrice: 520000, rentalYield: 0.05 },
  { name: "Mountain Town", salaryMultiplier: 1.05, annualLocationCost: 3800, homePrice: 310000, rentalYield: 0.058 },
  { name: "College Town", salaryMultiplier: 0.98, annualLocationCost: 2300, homePrice: 220000, rentalYield: 0.062 },
];

const collegeTiers = [
  { name: "Community College", tuitionPerYear: 4500, salaryMultiplier: 0.95 },
  { name: "State University", tuitionPerYear: 11000, salaryMultiplier: 1 },
  { name: "Private University", tuitionPerYear: 26000, salaryMultiplier: 1.15 },
  { name: "Elite University", tuitionPerYear: 52000, salaryMultiplier: 1.3 },
];

const majors = [
  "Computer Science",
  "Business",
  "Nursing",
  "Education",
  "Design",
  "Economics",
  "Psychology",
  "Mechanical Engineering",
  "Communications",
  "Biology",
  "English",
  "Political Science",
];

const careerCatalog = [
  {
    job: "Technology",
    requiresDegree: true,
    majors: ["Computer Science", "Mechanical Engineering", "Economics"],
    positions: [
      { title: "Support Specialist", salary: 52000 },
      { title: "Software Developer", salary: 98000 },
      { title: "Engineering Lead", salary: 145000 },
    ],
  },
  {
    job: "Healthcare",
    requiresDegree: true,
    majors: ["Nursing", "Biology", "Psychology"],
    positions: [
      { title: "Care Assistant", salary: 38000 },
      { title: "Registered Nurse", salary: 82000 },
      { title: "Nurse Manager", salary: 116000 },
    ],
  },
  {
    job: "Education",
    requiresDegree: true,
    majors: ["Education", "English", "Biology"],
    positions: [
      { title: "Teaching Assistant", salary: 36000 },
      { title: "Teacher", salary: 59000 },
      { title: "Department Head", salary: 86000 },
    ],
  },
  {
    job: "Finance",
    requiresDegree: true,
    majors: ["Business", "Economics", "Computer Science"],
    positions: [
      { title: "Analyst", salary: 70000 },
      { title: "Senior Analyst", salary: 98000 },
      { title: "Finance Director", salary: 144000 },
    ],
  },
  {
    job: "Public Policy",
    requiresDegree: true,
    majors: ["Political Science", "Economics", "Communications"],
    positions: [
      { title: "Policy Assistant", salary: 48000 },
      { title: "Policy Analyst", salary: 76000 },
      { title: "Program Director", salary: 112000 },
    ],
  },
  {
    job: "Marketing",
    requiresDegree: true,
    majors: ["Communications", "Business", "Design"],
    positions: [
      { title: "Coordinator", salary: 46000 },
      { title: "Marketing Manager", salary: 83000 },
      { title: "Brand Director", salary: 120000 },
    ],
  },
  {
    job: "Engineering",
    requiresDegree: true,
    majors: ["Mechanical Engineering", "Computer Science", "Biology"],
    positions: [
      { title: "Junior Engineer", salary: 68000 },
      { title: "Engineer", salary: 97000 },
      { title: "Principal Engineer", salary: 138000 },
    ],
  },
  {
    job: "Design & Media",
    requiresDegree: true,
    majors: ["Design", "Communications", "English"],
    positions: [
      { title: "Junior Designer", salary: 45000 },
      { title: "Product Designer", salary: 84000 },
      { title: "Creative Director", salary: 126000 },
    ],
  },
  {
    job: "Human Services",
    requiresDegree: true,
    majors: ["Psychology", "Political Science", "Education"],
    positions: [
      { title: "Case Worker", salary: 47000 },
      { title: "Senior Counselor", salary: 74000 },
      { title: "Program Manager", salary: 108000 },
    ],
  },
  {
    job: "Sales",
    requiresDegree: false,
    majors: majors,
    positions: [
      { title: "Sales Associate", salary: 36000 },
      { title: "Account Executive", salary: 70000 },
      { title: "Sales Director", salary: 120000 },
    ],
  },
  {
    job: "Logistics",
    requiresDegree: false,
    majors: majors,
    positions: [
      { title: "Dispatcher", salary: 40000 },
      { title: "Operations Lead", salary: 62000 },
      { title: "Operations Director", salary: 100000 },
    ],
  },
  {
    job: "Retail",
    requiresDegree: false,
    majors: majors,
    positions: [
      { title: "Store Associate", salary: 32000 },
      { title: "Shift Supervisor", salary: 43000 },
      { title: "Store Manager", salary: 62000 },
    ],
  },
  {
    job: "Food Service",
    requiresDegree: false,
    majors: majors,
    positions: [
      { title: "Crew Member", salary: 31000 },
      { title: "Kitchen Supervisor", salary: 42000 },
      { title: "Restaurant Manager", salary: 60000 },
    ],
  },
  {
    job: "Research",
    requiresDegree: true,
    majors: ["Biology", "Computer Science", "Economics"],
    positions: [
      { title: "Research Assistant", salary: 52000 },
      { title: "Research Scientist", salary: 92000 },
      { title: "Research Lead", salary: 134000 },
    ],
  },
];

const dailyOptionPool = [
  {
    title: "Cook at home",
    description: "+Savings, +Health",
    effects: { savings: 180, health: 2, energy: -1, security: 1, joy: -1, stress: -1 },
    timeline: "Skipped takeout and made a healthier meal.",
  },
  {
    title: "Take overtime",
    description: "+Savings, -Energy",
    effects: { savings: 260, health: -1, energy: -3, security: 2, joy: -1, stress: 2 },
    timeline: "Stayed late to bring in extra money.",
  },
  {
    title: "Call a friend",
    description: "+Joy, -Stress",
    effects: { savings: -20, health: 1, energy: 1, security: 0, joy: 3, stress: -2 },
    timeline: "Made time to reconnect with someone close.",
  },
  {
    title: "Small home repair",
    description: "-Savings, +Security",
    effects: { savings: -120, health: 0, energy: -1, security: 3, joy: 0, stress: -1 },
    timeline: "Handled a nagging problem before it got worse.",
  },
  {
    title: "Exercise session",
    description: "+Health, +Energy",
    effects: { savings: -15, health: 3, energy: 2, security: 0, joy: 2, stress: -2 },
    timeline: "Put in a workout and felt better afterward.",
  },
  {
    title: "Impulse shopping",
    description: "-Savings, +Joy",
    effects: { savings: -220, health: 0, energy: 0, security: -1, joy: 4, stress: 1 },
    timeline: "Bought something unplanned for a quick mood boost.",
  },
  {
    title: "Negotiate a bill",
    description: "+Savings, +Security",
    effects: { savings: 160, health: 0, energy: -1, security: 2, joy: 0, stress: 1 },
    timeline: "Called providers and lowered a recurring cost.",
  },
  {
    title: "Study a new skill",
    description: "+Security, -Energy",
    effects: { savings: -40, health: 0, energy: -2, security: 3, joy: 1, stress: 1 },
    timeline: "Spent focused time learning something useful.",
  },
  {
    title: "Unplug early",
    description: "+Energy, -Stress",
    effects: { savings: 0, health: 1, energy: 3, security: 0, joy: 1, stress: -3 },
    timeline: "Went to bed early and gave yourself real rest.",
  },
  {
    title: "Community event",
    description: "+Joy, +Security",
    effects: { savings: -35, health: 1, energy: 0, security: 1, joy: 3, stress: -1 },
    timeline: "Showed up for your neighborhood and felt more connected.",
  },
  {
    title: "Weekend gig",
    description: "+Savings, -Energy",
    effects: { savings: 210, health: -1, energy: -2, security: 1, joy: 1, stress: 1 },
    timeline: "Picked up a weekend shift for extra cash.",
  },
  {
    title: "Meal prep for the week",
    description: "+Savings, +Health",
    effects: { savings: 140, health: 2, energy: -1, security: 1, joy: 0, stress: -1 },
    timeline: "Prepared meals and lowered food costs.",
  },
  {
    title: "Read and recharge",
    description: "+Health, +Energy",
    effects: { savings: 0, health: 2, energy: 2, security: 0, joy: 2, stress: -2 },
    timeline: "Took quiet time to recover and reset.",
  },
  {
    title: "Network with mentors",
    description: "+Security, +Joy",
    effects: { savings: -40, health: 0, energy: -1, security: 3, joy: 2, stress: 0 },
    timeline: "Made professional connections that may help later.",
  },
  {
    title: "Take a short course",
    description: "-Savings, +Security",
    effects: { savings: -180, health: 0, energy: -2, security: 4, joy: 1, stress: 1 },
    timeline: "Completed a short course to boost your skills.",
  },
  {
    title: "Side project sprint",
    description: "+Security, -Energy",
    effects: { savings: 80, health: -1, energy: -3, security: 3, joy: 2, stress: 2 },
    timeline: "Pushed hard on a side project.",
  },
  {
    title: "Volunteer shift",
    description: "+Joy, +Security",
    effects: { savings: -20, health: 1, energy: -1, security: 2, joy: 3, stress: -1 },
    timeline: "Helped out in the community and felt connected.",
  },
  {
    title: "Repair instead of replace",
    description: "+Savings, +Security",
    effects: { savings: 130, health: 0, energy: -1, security: 2, joy: 0, stress: -1 },
    timeline: "Fixed something broken and avoided a bigger purchase.",
  },
];


const highSchoolOptionPool = [
  {
    title: "Study for exams",
    description: "+Security, +Stress",
    effects: { savings: 0, health: 0, energy: -1, security: 3, joy: -1, stress: 2 },
    timeline: "Spent extra time studying for school exams.",
  },
  {
    title: "Join a school club",
    description: "+Joy, +Security",
    effects: { savings: -30, health: 1, energy: -1, security: 2, joy: 3, stress: -1 },
    timeline: "Built skills and friendships through a school club.",
  },
  {
    title: "Tutoring session",
    description: "+Security, -Energy",
    effects: { savings: -20, health: 0, energy: -1, security: 2, joy: 1, stress: 1 },
    timeline: "Got extra help to keep grades on track.",
  },
];

const summerJobPool = [
  {
    title: "Lifeguard summer job",
    description: "+Savings, -Energy",
    effects: { savings: 420, health: 1, energy: -3, security: 3, joy: 1, stress: 1 },
    timeline: "Worked as a lifeguard over summer break.",
  },
  {
    title: "Camp counselor",
    description: "+Joy, +Savings",
    effects: { savings: 320, health: 1, energy: -2, security: 2, joy: 3, stress: 0 },
    timeline: "Spent the summer as a camp counselor.",
  },
  {
    title: "Grocery clerk summer shift",
    description: "+Savings, -Energy",
    effects: { savings: 380, health: 0, energy: -2, security: 2, joy: 0, stress: 1 },
    timeline: "Worked steady summer shifts at a local store.",
  },
  {
    title: "Lawn care side work",
    description: "+Savings, +Stress",
    effects: { savings: 280, health: 0, energy: -2, security: 1, joy: 1, stress: 1 },
    timeline: "Picked up neighborhood yard jobs for extra money.",
  },
];

const lifeStageOptionPools = {
  "Teen years": [
    { title: "Practice SAT/ACT", description: "+Security, +Stress", effects: { savings: -20, health: 0, energy: -1, security: 3, joy: -1, stress: 2 }, timeline: "Prepared for college entrance exams." },
    { title: "After-school tutoring", description: "+Security, -Energy", effects: { savings: 90, health: 0, energy: -1, security: 3, joy: 1, stress: 1 }, timeline: "Helped classmates after school for pay and experience." },
    { title: "School sports practice", description: "+Health, +Joy", effects: { savings: -30, health: 2, energy: -1, security: 1, joy: 3, stress: -1 }, timeline: "Committed to team practice and competition." },
    { title: "Part-time retail shift", description: "+Savings, -Energy", effects: { savings: 240, health: -1, energy: -2, security: 2, joy: 0, stress: 1 }, timeline: "Worked an evening retail shift." },
    { title: "Science fair project", description: "+Security, +Joy", effects: { savings: -70, health: 0, energy: -2, security: 4, joy: 2, stress: 1 }, timeline: "Built a project that improved your portfolio." },
    { title: "Neighborhood babysitting", description: "+Savings, +Joy", effects: { savings: 170, health: 0, energy: -1, security: 1, joy: 2, stress: 0 }, timeline: "Took babysitting jobs in your neighborhood." },
  ],
  "Starting out": [
    { title: "Networking meetup", description: "+Security, +Joy", effects: { savings: -40, health: 0, energy: -1, security: 3, joy: 2, stress: 0 }, timeline: "Met professionals and built your network." },
    { title: "Freelance project", description: "+Savings, -Energy", effects: { savings: 300, health: -1, energy: -2, security: 2, joy: 1, stress: 1 }, timeline: "Completed a short freelance contract." },
    { title: "Budget overhaul", description: "+Savings, +Security", effects: { savings: 210, health: 0, energy: -1, security: 2, joy: 0, stress: 1 }, timeline: "Optimized your spending plan." },
    { title: "Skill certification", description: "-Savings, +Security", effects: { savings: -220, health: 0, energy: -2, security: 4, joy: 1, stress: 1 }, timeline: "Earned a useful certification." },
  ],
  "Building momentum": [
    { title: "Mentor junior coworker", description: "+Security, +Joy", effects: { savings: 60, health: 0, energy: -1, security: 3, joy: 2, stress: 0 }, timeline: "Started mentoring a teammate." },
    { title: "Negotiate compensation", description: "+Savings, +Stress", effects: { savings: 260, health: 0, energy: -1, security: 3, joy: 1, stress: 2 }, timeline: "Negotiated a stronger pay package." },
    { title: "Burnout recovery day", description: "+Health, +Energy", effects: { savings: -40, health: 2, energy: 3, security: 0, joy: 2, stress: -2 }, timeline: "Took time to recover from overwork." },
    { title: "Professional conference", description: "-Savings, +Security", effects: { savings: -180, health: 0, energy: -1, security: 4, joy: 2, stress: 1 }, timeline: "Attended a conference and learned new trends." },
  ],
  "Family and commitments": [
    { title: "Family medical support", description: "-Savings, +Stress", effects: { savings: -320, health: -1, energy: -2, security: 1, joy: 1, stress: 3 }, timeline: "Helped family through a medical issue." },
    { title: "Refinance debt", description: "+Savings, +Security", effects: { savings: 220, health: 0, energy: -1, security: 3, joy: 0, stress: 1 }, timeline: "Refinanced debt to lower monthly costs." },
    { title: "Plan family vacation", description: "-Savings, +Joy", effects: { savings: -260, health: 1, energy: 1, security: 0, joy: 4, stress: -1 }, timeline: "Made time for family memories." },
    { title: "Career sabbatical planning", description: "-Savings, +Health", effects: { savings: -180, health: 2, energy: 2, security: 1, joy: 2, stress: -1 }, timeline: "Prepared a short career pause to reset." },
  ],
  "Midlife recalibration": [
    { title: "Executive coaching", description: "-Savings, +Security", effects: { savings: -240, health: 0, energy: -1, security: 4, joy: 1, stress: 1 }, timeline: "Worked with a coach on long-term strategy." },
    { title: "Health screening", description: "-Savings, +Health", effects: { savings: -120, health: 3, energy: 1, security: 1, joy: 1, stress: -1 }, timeline: "Did preventive health checkups." },
    { title: "Take board role", description: "+Savings, -Energy", effects: { savings: 280, health: -1, energy: -2, security: 3, joy: 1, stress: 2 }, timeline: "Accepted a side leadership role." },
    { title: "Workload redesign", description: "+Health, +Joy", effects: { savings: -60, health: 2, energy: 2, security: 1, joy: 2, stress: -2 }, timeline: "Restructured your responsibilities for balance." },
  ],
  "Preparing for retirement": [
    { title: "Catch-up retirement contribution", description: "+Security, -Savings", effects: { savings: -280, health: 0, energy: -1, security: 4, joy: 0, stress: 1 }, timeline: "Increased retirement contributions." },
    { title: "Estate planning", description: "-Savings, +Security", effects: { savings: -150, health: 0, energy: -1, security: 3, joy: 0, stress: 1 }, timeline: "Created or updated your estate plan." },
    { title: "Semi-retirement pilot", description: "-Savings, +Health", effects: { savings: -180, health: 2, energy: 2, security: 1, joy: 2, stress: -1 }, timeline: "Tested a lighter work schedule." },
    { title: "Consulting contract", description: "+Savings, +Stress", effects: { savings: 320, health: -1, energy: -2, security: 2, joy: 1, stress: 2 }, timeline: "Took a short consulting contract." },
  ],
  "Retirement years": [
    { title: "Host family gathering", description: "-Savings, +Joy", effects: { savings: -220, health: 1, energy: -1, security: 0, joy: 4, stress: -1 }, timeline: "Hosted a large family gathering." },
    { title: "Part-time advisory work", description: "+Savings, -Energy", effects: { savings: 240, health: 0, energy: -1, security: 2, joy: 1, stress: 1 }, timeline: "Took occasional advisory work." },
    { title: "Senior fitness class", description: "-Savings, +Health", effects: { savings: -70, health: 3, energy: 2, security: 0, joy: 2, stress: -2 }, timeline: "Joined a regular fitness class." },
    { title: "Downsize belongings", description: "+Savings, +Security", effects: { savings: 180, health: 0, energy: -1, security: 2, joy: 1, stress: -1 }, timeline: "Simplified life and reduced recurring costs." },
  ],
};

const state = {
  day: 0,
  savings: 2000,
  health: 80,
  energy: 85,
  security: 35,
  joy: 55,
  stress: 40,
  timeline: [],
  ended: false,
  collegeIndex: 0,
  major: majors[0],
  jobIndex: 0,
  positionIndex: 0,
  degreeEarned: false,
  degreeMajor: null,
  collegeDaysCompleted: 0,
  savingsAccount: 0,
  cdAccount: 0,
  indexFund: 0,
  livingMarketIndex: 0,
  selectedMarketIndex: 0,
  hasPrimaryHome: false,
  rentalProperties: Array(housingMarkets.length).fill(0),
  recentChoiceKeys: [],
};

const ui = {
  age: document.getElementById("age"),
  currentDate: document.getElementById("current-date"),
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
  jobTitle: document.getElementById("job-title"),
  positionTitle: document.getElementById("position-title"),
  salary: document.getElementById("salary"),
  collegeName: document.getElementById("college-name"),
  majorName: document.getElementById("major-name"),
  degreeName: document.getElementById("degree-name"),
  collegeSelect: document.getElementById("college-select"),
  majorSelect: document.getElementById("major-select"),
  applyEducation: document.getElementById("apply-education"),
  jobSelect: document.getElementById("job-select"),
  positionSelect: document.getElementById("position-select"),
  applyCareer: document.getElementById("apply-career"),
  investedTotal: document.getElementById("invested-total"),
  investmentMix: document.getElementById("investment-mix"),
  investmentType: document.getElementById("investment-type"),
  investmentAmount: document.getElementById("investment-amount"),
  investBtn: document.getElementById("invest-btn"),
  withdrawBtn: document.getElementById("withdraw-btn"),
  locationName: document.getElementById("location-name"),
  propertiesOwned: document.getElementById("properties-owned"),
  housingMarketSelect: document.getElementById("housing-market-select"),
  moveLocationBtn: document.getElementById("move-location-btn"),
  buyPrimaryBtn: document.getElementById("buy-primary-btn"),
  buyRentalBtn: document.getElementById("buy-rental-btn"),
};

const clamp = (value, min = 0, max = 100) => Math.max(min, Math.min(max, value));

const formatMoney = (amount) =>
  amount.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

const getAgeYears = () => startAge + state.day / daysPerYear;

const formatAge = () => {
  const years = Math.floor(getAgeYears());
  const days = state.day % daysPerYear;
  return `${years}y ${days}d`;
};

const formatCurrentDate = () =>
  getCurrentDate().toLocaleDateString("en-US", { month: "short", day: "numeric" });

const getStageForAge = (age) =>
  stages.find((stage) => age >= stage.range[0] && age < stage.range[1] + 1);

const shuffle = (items) => {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

const scaleOption = (option) => {
  const multiplier = 0.75 + Math.random() * 0.5;
  const scaledEffects = Object.fromEntries(
    Object.entries(option.effects).map(([key, value]) => [key, Math.round(value * multiplier)]),
  );

  return {
    ...option,
    effects: scaledEffects,
  };
};

const optionKey = (option) => `${option.title}|${option.timeline}`;

const isHighSchoolAge = () => {
  const age = getAgeYears();
  return age >= 13 && age < 18;
};

const getCurrentDate = () => {
  const date = new Date(simStartDate);
  date.setDate(date.getDate() + state.day);
  return date;
};

const isSummerBreak = () => {
  const month = getCurrentDate().getMonth();
  return month >= 5 && month <= 7;
};

const pickWithoutRecentRepeats = (options, count) => {
  const recent = new Set(state.recentChoiceKeys);
  const shuffled = shuffle(options);
  const fresh = shuffled.filter((option) => !recent.has(optionKey(option)));
  const fallback = shuffled.filter((option) => recent.has(optionKey(option)));
  return [...fresh, ...fallback].slice(0, count);
};

const getDailyOptions = (stage) => {
  const stageCore = pickWithoutRecentRepeats(stage.options, 3);
  const stageSpecific = pickWithoutRecentRepeats(lifeStageOptionPools[stage.title] || [], 4);
  const generalOptions = pickWithoutRecentRepeats(dailyOptionPool, 8);
  const highSchoolOptions = isHighSchoolAge() ? pickWithoutRecentRepeats(highSchoolOptionPool, 3) : [];
  const summerOptions = isHighSchoolAge() && isSummerBreak() ? pickWithoutRecentRepeats(summerJobPool, 3) : [];
  const mixed = [...stageCore, ...stageSpecific, ...generalOptions, ...highSchoolOptions, ...summerOptions].map(scaleOption);
  return shuffle(mixed).slice(0, choicesPerDay);
};

const toDaily = (value) => value / daysPerYear;

const getCollege = () => collegeTiers[state.collegeIndex];

const getLivingMarket = () => housingMarkets[state.livingMarketIndex];
const getSelectedMarket = () => housingMarkets[state.selectedMarketIndex];

const getTotalRentalProperties = () => state.rentalProperties.reduce((sum, count) => sum + count, 0);

const getAnnualRentalIncome = () =>
  state.rentalProperties.reduce((sum, count, index) => {
    if (!count) {
      return sum;
    }
    const market = housingMarkets[index];
    return sum + count * market.homePrice * market.rentalYield;
  }, 0);

const getPrimaryHomeAnnualCost = () => {
  if (!state.hasPrimaryHome) {
    return 0;
  }
  return getLivingMarket().homePrice * 0.012;
};

const getAnnualTax = (earnedIncome, rentalIncome) => {
  const taxable = Math.max(0, earnedIncome + rentalIncome);
  let tax = 0;
  if (taxable <= 20000) {
    tax += taxable * 0.1;
  } else if (taxable <= 60000) {
    tax += 20000 * 0.1 + (taxable - 20000) * 0.18;
  } else if (taxable <= 120000) {
    tax += 20000 * 0.1 + 40000 * 0.18 + (taxable - 60000) * 0.26;
  } else {
    tax += 20000 * 0.1 + 40000 * 0.18 + 60000 * 0.26 + (taxable - 120000) * 0.33;
  }
  return tax;
};

const isInCollegeWindow = () => {
  const age = getAgeYears();
  return age >= 18 && age < 22;
};

const getCareerMajor = () => state.degreeMajor || state.major;

const getEligibleCareers = () =>
  careerCatalog.filter((career) => {
    const majorOk = career.majors.includes(getCareerMajor());
    if (!majorOk) {
      return false;
    }
    if (!career.requiresDegree) {
      return true;
    }
    return state.degreeEarned;
  });

const getCareer = () => {
  const eligible = getEligibleCareers();
  return eligible[state.jobIndex] || eligible[0];
};

const getPosition = () => getCareer().positions[state.positionIndex] || getCareer().positions[0];

const getAnnualIncome = () => Math.round(getPosition().salary * getCollege().salaryMultiplier * getLivingMarket().salaryMultiplier);

const getEducationExpense = () => {
  if (isInCollegeWindow() && !state.degreeEarned) {
    return getCollege().tuitionPerYear;
  }
  return 0;
};

const updateCollegeProgress = () => {
  if (!isInCollegeWindow() || state.degreeEarned) {
    return;
  }

  state.collegeDaysCompleted += 1;
  if (state.collegeDaysCompleted >= 4 * daysPerYear) {
    state.degreeEarned = true;
    state.degreeMajor = state.major;
    state.timeline.unshift(`Day ${state.day + 1}: Graduated with a ${state.degreeMajor} degree from ${getCollege().name}.`);
    state.timeline = state.timeline.slice(0, maxTimelineEntries);
    state.jobIndex = 0;
    state.positionIndex = 0;
    populateCareerSelectors();
  }
};


const getTotalInvested = () => state.savingsAccount + state.cdAccount + state.indexFund;

const getInvestmentMixLabel = () => {
  const total = getTotalInvested();
  if (total <= 0) {
    return "None";
  }
  const parts = [];
  if (state.savingsAccount > 0) {
    parts.push(`HYSA ${Math.round((state.savingsAccount / total) * 100)}%`);
  }
  if (state.cdAccount > 0) {
    parts.push(`CD ${Math.round((state.cdAccount / total) * 100)}%`);
  }
  if (state.indexFund > 0) {
    parts.push(`Index ${Math.round((state.indexFund / total) * 100)}%`);
  }
  return parts.join(" • ");
};

const getInvestmentName = (key) => ({ savingsAccount: "High-yield Savings", cdAccount: "CD", indexFund: "Index Fund" }[key] || key);

const applyInvestmentReturns = () => {
  const savingsDaily = annualReturns.savingsAccount / daysPerYear;
  const cdDaily = annualReturns.cdAccount / daysPerYear;
  const marketDrift = annualReturns.indexFund / daysPerYear;
  const marketShock = (Math.random() - 0.5) * 0.01;
  const marketDaily = marketDrift + marketShock;

  state.savingsAccount += state.savingsAccount * savingsDaily;
  state.cdAccount += state.cdAccount * cdDaily;
  state.indexFund += state.indexFund * marketDaily;
};

const transferInvestment = (direction = "invest") => {
  const type = ui.investmentType.value;
  const amount = Number(ui.investmentAmount.value);
  if (!Number.isFinite(amount) || amount <= 0) {
    return;
  }

  if (direction === "invest") {
    if (state.savings < amount) {
      return;
    }
    state.savings -= amount;
    state[type] += amount;
    state.timeline.unshift(`Day ${state.day + 1}: Invested ${formatMoney(amount)} into ${getInvestmentName(type)}.`);
  } else {
    if (state[type] < amount) {
      return;
    }
    state[type] -= amount;
    state.savings += amount;
    state.timeline.unshift(`Day ${state.day + 1}: Withdrew ${formatMoney(amount)} from ${getInvestmentName(type)}.`);
  }

  state.timeline = state.timeline.slice(0, maxTimelineEntries);
  updateTimeline();
  updateStats();
};

const updateBars = () => {
  ui.securityBar.style.width = `${clamp(state.security)}%`;
  ui.joyBar.style.width = `${clamp(state.joy)}%`;
  ui.stressBar.style.width = `${clamp(100 - state.stress)}%`;
};

const updateStats = () => {
  ui.age.textContent = formatAge();
  ui.currentDate.textContent = formatCurrentDate();
  ui.savings.textContent = formatMoney(state.savings);
  ui.health.textContent = Math.round(clamp(state.health));
  ui.energy.textContent = Math.round(clamp(state.energy));
  ui.jobTitle.textContent = getCareer().job;
  ui.positionTitle.textContent = getPosition().title;
  ui.salary.textContent = formatMoney(getAnnualIncome());
  ui.collegeName.textContent = getCollege().name;
  ui.majorName.textContent = state.major;
  ui.degreeName.textContent = state.degreeEarned ? `${state.degreeMajor} Degree` : "None";
  ui.locationName.textContent = getLivingMarket().name;
  ui.propertiesOwned.textContent = `${state.hasPrimaryHome ? "Primary home" : "No primary home"} • Rentals: ${getTotalRentalProperties()}`;
  ui.investedTotal.textContent = formatMoney(getTotalInvested());
  ui.investmentMix.textContent = getInvestmentMixLabel();
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

const renderDay = () => {
  if (state.ended) {
    return;
  }

  const ageYears = getAgeYears();
  const stage = getStageForAge(ageYears);
  if (!stage) {
    endGame();
    return;
  }

  const annualRentalIncome = getAnnualRentalIncome();
  const annualTax = getAnnualTax(getAnnualIncome(), annualRentalIncome);
  const yearlyExpenses = stage.expenses + getEducationExpense() + getLivingMarket().annualLocationCost + getPrimaryHomeAnnualCost() + annualTax - annualRentalIncome;

  ui.chapterTitle.textContent = `Day ${state.day + 1} • Age ${formatAge()} • ${stage.title}`;
  ui.chapterText.textContent = stage.text;
  ui.income.textContent = `${formatMoney(getAnnualIncome())}/yr`;
  ui.expenses.textContent = `${formatMoney(yearlyExpenses)}/yr`;

  state.security = stage.security;
  state.joy = stage.joy;
  state.stress = stage.stress;

  ui.choices.innerHTML = "";
  const options = getDailyOptions(stage);
  options.forEach((option) => {
    const button = document.createElement("button");
    button.className = "choice";
    button.type = "button";
    button.innerHTML = `<h4>${option.title}</h4><p>${option.description}</p>`;
    button.addEventListener("click", () => applyChoice(option, stage, yearlyExpenses));
    ui.choices.appendChild(button);
  });

  updateStats();
};

const applyChoice = (option, stage, yearlyExpenses) => {
  if (state.ended) {
    return;
  }

  applyInvestmentReturns();
  updateCollegeProgress();

  const dailyNet = toDaily(getAnnualIncome() - yearlyExpenses);
  const effects = {
    savings: toDaily(option.effects.savings),
    health: toDaily(option.effects.health),
    energy: toDaily(option.effects.energy),
    security: toDaily(option.effects.security),
    joy: toDaily(option.effects.joy),
    stress: toDaily(option.effects.stress),
  };

  state.savings += dailyNet + effects.savings;
  state.health = clamp(state.health + effects.health);
  state.energy = clamp(state.energy + effects.energy);
  state.security = clamp(state.security + effects.security);
  state.joy = clamp(state.joy + effects.joy);
  state.stress = clamp(state.stress + effects.stress);

  state.timeline.unshift(`Day ${state.day + 1}: ${option.timeline} (Net ${formatMoney(dailyNet + effects.savings)})`);
  state.timeline = state.timeline.slice(0, maxTimelineEntries);
  state.recentChoiceKeys.unshift(optionKey(option));
  state.recentChoiceKeys = state.recentChoiceKeys.slice(0, repeatWindowDays);
  state.day += 1;

  updateTimeline();
  updateStats();
  checkEndConditions();
  if (!state.ended) {
    renderDay();
  }
};

const checkEndConditions = () => {
  if (state.savings < 0 || state.health <= 0 || state.energy <= 0) {
    endGame(true);
    return;
  }

  if (state.day >= totalDays) {
    endGame(false);
  }
};

const calculateScore = () => {
  const wealth = Math.max(0, state.savings + getTotalInvested());
  const wellbeing = Math.max(0, state.health) + Math.max(0, state.energy);
  const assets = getTotalRentalProperties() * 150;
  const educationBonus = state.degreeEarned ? 250 : 0;
  const varietyBonus = Math.min(250, new Set(state.recentChoiceKeys).size * 6);
  return Math.round(wealth / 100 + wellbeing * 4 + assets + educationBonus + varietyBonus);
};

const endGame = (failed = false) => {
  state.ended = true;
  ui.overlay.classList.remove("hidden");
  const score = calculateScore();
  if (failed) {
    ui.endingTitle.textContent = "Life got too hard";
    ui.endingText.textContent =
      `Your resources ran out before retirement. Final Score: ${score}. Try again with different daily choices.`;
  } else {
    ui.endingTitle.textContent = "You reached retirement";
    ui.endingText.textContent =
      `You made it through each day of a whole lifetime. Final Score: ${score}. Try to beat it next run.`;
  }
};

const populateEducationSelectors = () => {
  ui.collegeSelect.innerHTML = "";
  collegeTiers.forEach((college, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = `${college.name} (${formatMoney(college.tuitionPerYear)}/yr tuition)`;
    ui.collegeSelect.appendChild(option);
  });
  ui.collegeSelect.value = String(state.collegeIndex);

  ui.majorSelect.innerHTML = "";
  majors.forEach((major) => {
    const option = document.createElement("option");
    option.value = major;
    option.textContent = major;
    ui.majorSelect.appendChild(option);
  });
  ui.majorSelect.value = state.major;
};

const populateCareerSelectors = () => {
  const eligible = getEligibleCareers();
  state.jobIndex = clamp(state.jobIndex, 0, Math.max(eligible.length - 1, 0));

  ui.jobSelect.innerHTML = "";
  eligible.forEach((career, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = career.job;
    ui.jobSelect.appendChild(option);
  });
  ui.jobSelect.value = String(state.jobIndex);

  ui.positionSelect.innerHTML = "";
  getCareer().positions.forEach((position, index) => {
    const adjusted = Math.round(position.salary * getCollege().salaryMultiplier);
    const option = document.createElement("option");
    option.value = index;
    option.textContent = `${position.title} (${formatMoney(adjusted)})`;
    ui.positionSelect.appendChild(option);
  });
  state.positionIndex = clamp(state.positionIndex, 0, getCareer().positions.length - 1);
  ui.positionSelect.value = String(state.positionIndex);
};

const setEducationFromUI = () => {
  state.collegeIndex = Number(ui.collegeSelect.value);
  state.major = ui.majorSelect.value;
  state.jobIndex = 0;
  state.positionIndex = 0;
  state.degreeEarned = false;
  state.degreeMajor = null;
  state.collegeDaysCompleted = 0;
  populateCareerSelectors();
  state.timeline.unshift(`Day ${state.day + 1}: Enrolled at ${getCollege().name} and chose ${state.major}. Degree-track jobs unlock after graduation.`);
  state.timeline = state.timeline.slice(0, maxTimelineEntries);
  updateTimeline();
  updateStats();
  renderDay();
};

const setCareerFromUI = () => {
  state.jobIndex = Number(ui.jobSelect.value);
  state.positionIndex = Number(ui.positionSelect.value);
  state.timeline.unshift(`Day ${state.day + 1}: Switched career to ${getPosition().title} in ${getCareer().job}.`);
  state.timeline = state.timeline.slice(0, maxTimelineEntries);
  updateTimeline();
  updateStats();
  renderDay();
};

const populateHousingSelectors = () => {
  ui.housingMarketSelect.innerHTML = "";
  housingMarkets.forEach((market, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = `${market.name} • Home ${formatMoney(market.homePrice)}`;
    ui.housingMarketSelect.appendChild(option);
  });
  ui.housingMarketSelect.value = String(state.selectedMarketIndex);
};

const moveToSelectedLocation = () => {
  state.livingMarketIndex = Number(ui.housingMarketSelect.value);
  state.selectedMarketIndex = state.livingMarketIndex;
  state.timeline.unshift(`Day ${state.day + 1}: Moved to ${getLivingMarket().name}.`);
  state.timeline = state.timeline.slice(0, maxTimelineEntries);
  updateTimeline();
  updateStats();
  renderDay();
};

const buyPrimaryHome = () => {
  const targetIndex = Number(ui.housingMarketSelect.value);
  const target = housingMarkets[targetIndex];
  if (state.hasPrimaryHome || state.savings < target.homePrice) {
    return;
  }
  state.savings -= target.homePrice;
  state.hasPrimaryHome = true;
  state.livingMarketIndex = targetIndex;
  state.selectedMarketIndex = targetIndex;
  state.timeline.unshift(`Day ${state.day + 1}: Bought a primary home in ${target.name} for ${formatMoney(target.homePrice)}.`);
  state.timeline = state.timeline.slice(0, maxTimelineEntries);
  updateTimeline();
  updateStats();
  renderDay();
};

const buyRentalHome = () => {
  const targetIndex = Number(ui.housingMarketSelect.value);
  const target = housingMarkets[targetIndex];
  if (state.savings < target.homePrice) {
    return;
  }
  state.savings -= target.homePrice;
  state.rentalProperties[targetIndex] += 1;
  state.timeline.unshift(`Day ${state.day + 1}: Bought a rental in ${target.name} for ${formatMoney(target.homePrice)}.`);
  state.timeline = state.timeline.slice(0, maxTimelineEntries);
  updateTimeline();
  updateStats();
  renderDay();
};

const resetGame = () => {
  Object.assign(state, {
    day: 0,
    savings: 2000,
    health: 80,
    energy: 85,
    security: 35,
    joy: 55,
    stress: 40,
    timeline: [],
    ended: false,
    collegeIndex: 1,
    major: majors[0],
    jobIndex: 0,
    positionIndex: 0,
    degreeEarned: false,
    degreeMajor: null,
    collegeDaysCompleted: 0,
    savingsAccount: 0,
    cdAccount: 0,
    indexFund: 0,
    livingMarketIndex: 0,
    selectedMarketIndex: 0,
    hasPrimaryHome: false,
    rentalProperties: Array(housingMarkets.length).fill(0),
    recentChoiceKeys: [],
  });
  ui.overlay.classList.add("hidden");
  ui.status.textContent = `Survive day-by-day until age ${retirementAge} with savings above $0.`;
  populateEducationSelectors();
  populateCareerSelectors();
  populateHousingSelectors();
  updateTimeline();
  renderDay();
};

ui.collegeSelect.addEventListener("change", () => {
  state.collegeIndex = Number(ui.collegeSelect.value);
  populateCareerSelectors();
  updateStats();
});

ui.majorSelect.addEventListener("change", () => {
  state.major = ui.majorSelect.value;
  state.jobIndex = 0;
  state.positionIndex = 0;
  populateCareerSelectors();
  updateStats();
});

ui.jobSelect.addEventListener("change", () => {
  state.jobIndex = Number(ui.jobSelect.value);
  state.positionIndex = 0;
  populateCareerSelectors();
  updateStats();
});

ui.positionSelect.addEventListener("change", () => {
  state.positionIndex = Number(ui.positionSelect.value);
  updateStats();
});

ui.housingMarketSelect.addEventListener("change", () => {
  state.selectedMarketIndex = Number(ui.housingMarketSelect.value);
});

ui.moveLocationBtn.addEventListener("click", moveToSelectedLocation);
ui.buyPrimaryBtn.addEventListener("click", buyPrimaryHome);
ui.buyRentalBtn.addEventListener("click", buyRentalHome);

ui.applyEducation.addEventListener("click", setEducationFromUI);
ui.applyCareer.addEventListener("click", setCareerFromUI);
ui.investBtn.addEventListener("click", () => transferInvestment("invest"));
ui.withdrawBtn.addEventListener("click", () => transferInvestment("withdraw"));
ui.restart.addEventListener("click", resetGame);
ui.playAgain.addEventListener("click", resetGame);

resetGame();
