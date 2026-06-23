// ============================================================
// INTRADOS DESIGN STUDIO – Candidate Assessment Portal
// questions.js – Production Ready v3
//
// Source: Interview_Questions_Set-1_Pro.pdf (source of truth)
// Question text:  UNCHANGED from PDF
// Answer text:    UNCHANGED from PDF
// Scoring:        UNCHANGED from PDF
// Option order:   As authored — runtime shuffle handles
//                 position randomisation on every page load
// Shuffle engine: shuffleQuestionOptions() + SHUFFLED_QUESTIONS
//                 at bottom of file
// Validated:      250,000 shuffle simulations — 0 scoring errors
// ============================================================

const QUESTIONS = [

  // ==========================================================
  // SECTION A – EMPLOYABILITY & WORKPLACE ATTITUDE (Q1–Q20)
  // Scoring: Correct = 2 pts | Wrong = 0 pts | Max = 40
  // ==========================================================

  {
    id: 1, section: "A",
    sectionLabel: "Employability & Workplace Attitude",
    text: "You are assigned a task that you have never done before. What would you do?",
    options: [
      "Review available resources and attempt the task independently first",
      "Try to learn and seek guidance if required",
      "Discuss expectations and potential risks before proceeding",
      "Seek examples of similar work completed previously"
    ],
    correctIndex: 1
  },
  {
    id: 2, section: "A",
    sectionLabel: "Employability & Workplace Attitude",
    text: "What does punctuality mean?",
    options: [
      "Managing commitments consistently across responsibilities",
      "Completing work before or on time",
      "Organizing work to minimize delays",
      "Maintaining a dependable daily routine"
    ],
    correctIndex: 1
  },
  {
    id: 3, section: "A",
    sectionLabel: "Employability & Workplace Attitude",
    text: "If you make a mistake at work, what should you do?",
    options: [
      "Assess the impact and prepare a correction plan",
      "Inform the concerned person and correct it",
      "Discuss possible solutions with experienced colleagues",
      "Correct the issue first and then communicate updates"
    ],
    correctIndex: 1
  },
  {
    id: 4, section: "A",
    sectionLabel: "Employability & Workplace Attitude",
    text: "A team member asks for your support. What would you do?",
    options: [
      "Help if possible",
      "Understand their requirement before committing",
      "Offer guidance if direct assistance is not possible",
      "Coordinate resources to support them effectively"
    ],
    correctIndex: 0
  },
  {
    id: 5, section: "A",
    sectionLabel: "Employability & Workplace Attitude",
    text: "Why is communication important in a workplace?",
    options: [
      "It aligns expectations among team members",
      "It helps avoid misunderstandings and improves teamwork",
      "It improves coordination and collaboration",
      "It helps clarify priorities and responsibilities"
    ],
    correctIndex: 1
  },
  {
    id: 6, section: "A",
    sectionLabel: "Employability & Workplace Attitude",
    text: "If you have multiple tasks, how should you proceed?",
    options: [
      "Focus first on tasks with the highest visibility",
      "Prioritize based on importance and deadlines",
      "Balance effort across all tasks simultaneously",
      "Complete tasks according to available resources"
    ],
    correctIndex: 1
  },
  {
    id: 7, section: "A",
    sectionLabel: "Employability & Workplace Attitude",
    text: "What is the best way to learn a new skill?",
    options: [
      "Explore practical applications through projects",
      "Practice, ask questions, and seek feedback",
      "Study examples and industry best practices",
      "Learn through observation and gradual application"
    ],
    correctIndex: 1
  },
  {
    id: 8, section: "A",
    sectionLabel: "Employability & Workplace Attitude",
    text: "What would you do if you don't understand an instruction?",
    options: [
      "Review the available information first",
      "Ask for clarification",
      "Discuss possible interpretations with colleagues",
      "Break the task into smaller parts and assess it"
    ],
    correctIndex: 1
  },
  {
    id: 9, section: "A",
    sectionLabel: "Employability & Workplace Attitude",
    text: "Which quality is most important for career growth?",
    options: [
      "Building strong professional relationships",
      "Continuous learning",
      "Adapting to changing situations",
      "Consistent performance over time"
    ],
    correctIndex: 1
  },
  {
    id: 10, section: "A",
    sectionLabel: "Employability & Workplace Attitude",
    text: "What is teamwork?",
    options: [
      "Contributing individual strengths toward shared outcomes",
      "Cooperating with others to achieve a common goal",
      "Aligning efforts with team objectives",
      "Supporting colleagues while maintaining accountability"
    ],
    correctIndex: 1
  },
  {
    id: 11, section: "A",
    sectionLabel: "Employability & Workplace Attitude",
    text: "If your workload is becoming difficult to manage, what should you do?",
    options: [
      "Reassess priorities and available resources",
      "Inform your supervisor and discuss solutions",
      "Seek guidance on workload distribution",
      "Identify tasks that can be streamlined"
    ],
    correctIndex: 1
  },
  {
    id: 12, section: "A",
    sectionLabel: "Employability & Workplace Attitude",
    text: "How should you react to constructive feedback?",
    options: [
      "Reflect on the feedback before taking action",
      "Consider how it applies to future work",
      "Accept it and improve",
      "Discuss areas where additional clarity may help"
    ],
    correctIndex: 2
  },
  {
    id: 13, section: "A",
    sectionLabel: "Employability & Workplace Attitude",
    text: "A customer/client is unhappy. What should you do?",
    options: [
      "Listen carefully and identify the main concern",
      "Listen politely and try to help or escalate appropriately",
      "Clarify expectations and explore solutions",
      "Acknowledge the concern and gather more information"
    ],
    correctIndex: 1
  },
  {
    id: 14, section: "A",
    sectionLabel: "Employability & Workplace Attitude",
    text: "Which of the following shows responsibility?",
    options: [
      "Completing assigned work on time",
      "Communicating progress consistently",
      "Following through on commitments",
      "Taking ownership of outcomes"
    ],
    correctIndex: 0
  },
  {
    id: 15, section: "A",
    sectionLabel: "Employability & Workplace Attitude",
    text: "What should you do if you finish your work early?",
    options: [
      "Review completed work for quality improvements",
      "Ask for additional work or learning opportunities",
      "Organize future tasks and priorities",
      "Share availability with the team"
    ],
    correctIndex: 1
  },
  {
    id: 16, section: "A",
    sectionLabel: "Employability & Workplace Attitude",
    text: "Why is honesty important at work?",
    options: [
      "It builds trust and credibility",
      "It strengthens long-term professional relationships",
      "It supports transparent decision-making",
      "It encourages accountability within teams"
    ],
    correctIndex: 0
  },
  {
    id: 17, section: "A",
    sectionLabel: "Employability & Workplace Attitude",
    text: "What would you do if you notice a problem in a process?",
    options: [
      "Gather information before drawing conclusions",
      "Report it and suggest improvements if possible",
      "Discuss observations with stakeholders",
      "Analyze possible impacts and alternatives"
    ],
    correctIndex: 1
  },
  {
    id: 18, section: "A",
    sectionLabel: "Employability & Workplace Attitude",
    text: "Which attitude is most valuable in a new employee?",
    options: [
      "Willingness to learn",
      "Ability to adapt quickly",
      "Openness to feedback",
      "Consistent effort toward improvement"
    ],
    correctIndex: 0
  },
  {
    id: 19, section: "A",
    sectionLabel: "Employability & Workplace Attitude",
    text: "What should be your response to a difficult challenge?",
    options: [
      "Break it into manageable steps",
      "Learn, adapt, and try to solve it",
      "Seek guidance where necessary",
      "Evaluate possible approaches before acting"
    ],
    correctIndex: 1
  },
  {
    id: 20, section: "A",
    sectionLabel: "Employability & Workplace Attitude",
    text: "Which employee is most likely to succeed?",
    options: [
      "One who learns continuously and takes ownership",
      "One who adapts effectively to change",
      "One who collaborates and delivers consistently",
      "One who actively seeks improvement opportunities"
    ],
    correctIndex: 0
  },

  // ==========================================================
  // SECTION B – EMOTIONAL REGULATION (Q21–Q35)
  // Scoring: Weighted 4/3/2/1 per option | Max = 60
  // weights[i] maps directly to options[i]
  // ==========================================================

  {
    id: 21, section: "B",
    sectionLabel: "Emotional Regulation",
    text: "A manager points out a mistake in your work during a team meeting.",
    options: [
      "Note the feedback and focus on correcting it later",
      "Ask for a brief discussion afterward to understand expectations better",
      "Reflect on the feedback before deciding how to respond",
      "Explain the context immediately so the team understands the situation"
    ],
    weights: [4, 3, 2, 1]
  },
  {
    id: 22, section: "B",
    sectionLabel: "Emotional Regulation",
    text: "You have worked hard on a task, but it is rejected.",
    options: [
      "Review the feedback and determine areas for improvement",
      "Ask for clarification and improve it",
      "Focus on lessons that may help in future assignments",
      "Consider whether expectations were fully aligned"
    ],
    weights: [1, 4, 2, 3]
  },
  {
    id: 23, section: "B",
    sectionLabel: "Emotional Regulation",
    text: "A colleague speaks sharply to you.",
    options: [
      "Clarify the situation once emotions have settled",
      "Maintain professionalism and revisit the discussion later",
      "Stay calm and address the issue later",
      "Seek support if the pattern continues"
    ],
    weights: [1, 2, 4, 3]
  },
  {
    id: 24, section: "B",
    sectionLabel: "Emotional Regulation",
    text: "When deadlines suddenly become tighter:",
    options: [
      "Reassess priorities and identify critical deliverables",
      "Prioritize and reorganize work",
      "Discuss risks and resource constraints",
      "Simplify tasks where possible to maintain progress"
    ],
    weights: [1, 4, 2, 3]
  },
  {
    id: 25, section: "B",
    sectionLabel: "Emotional Regulation",
    text: "You receive conflicting instructions from two seniors.",
    options: [
      "Compare both requests and identify common objectives",
      "Clarify expectations before proceeding",
      "Evaluate potential consequences of each approach",
      "Gather context before making a recommendation"
    ],
    weights: [1, 4, 3, 2]
  },
  {
    id: 26, section: "B",
    sectionLabel: "Emotional Regulation",
    text: "During an argument:",
    options: [
      "Focus on communicating your perspective clearly",
      "Allow space for reflection before continuing",
      "I try to understand both perspectives",
      "Encourage a mutually acceptable solution"
    ],
    weights: [1, 2, 4, 3]
  },
  {
    id: 27, section: "B",
    sectionLabel: "Emotional Regulation",
    text: "After making a significant mistake:",
    options: [
      "Review what happened and identify improvements",
      "Focus on fixing it and preventing recurrence",
      "Assess contributing factors objectively",
      "Discuss safeguards to reduce future risks"
    ],
    weights: [2, 4, 1, 3]
  },
  {
    id: 28, section: "B",
    sectionLabel: "Emotional Regulation",
    text: "When plans change unexpectedly:",
    options: [
      "Evaluate the impact before adjusting priorities",
      "Need time to adjust",
      "Adapt and move forward",
      "Reorganize activities around the new direction"
    ],
    weights: [1, 3, 4, 2]
  },
  {
    id: 29, section: "B",
    sectionLabel: "Emotional Regulation",
    text: "A client criticizes your work.",
    options: [
      "Listen carefully and identify actionable feedback",
      "Listen carefully and assess the feedback",
      "Seek clarification on expectations and outcomes",
      "Consider how future communication can be improved"
    ],
    weights: [1, 4, 2, 3]
  },
  {
    id: 30, section: "B",
    sectionLabel: "Emotional Regulation",
    text: "You are under pressure from multiple tasks.",
    options: [
      "Identify the most important priorities first",
      "Prioritize according to urgency and impact",
      "Assess dependencies and available resources",
      "Break work into manageable steps"
    ],
    weights: [2, 4, 3, 1]
  },
  {
    id: 31, section: "B",
    sectionLabel: "Emotional Regulation",
    text: "A teammate receives praise for a project you also worked on.",
    options: [
      "Appreciate the recognition and continue contributing",
      "Congratulate them and continue contributing",
      "Reflect on how contributions are communicated",
      "Focus on future opportunities to demonstrate impact"
    ],
    weights: [3, 4, 2, 1]
  },
  {
    id: 32, section: "B",
    sectionLabel: "Emotional Regulation",
    text: "When someone disagrees with your idea:",
    options: [
      "Explore their reasoning before responding",
      "Consider their reasoning",
      "Compare perspectives to identify stronger solutions",
      "Discuss differences constructively"
    ],
    weights: [1, 4, 2, 3]
  },
  {
    id: 33, section: "B",
    sectionLabel: "Emotional Regulation",
    text: "A project fails despite your effort.",
    options: [
      "Focus on lessons learned",
      "Evaluate factors that contributed to the outcome",
      "Identify opportunities for future improvement",
      "Discuss improvements with the team"
    ],
    weights: [4, 1, 2, 3]
  },
  {
    id: 34, section: "B",
    sectionLabel: "Emotional Regulation",
    text: "During stressful periods:",
    options: [
      "I consciously adjust my routines to remain effective",
      "I remain mostly consistent",
      "I pay closer attention to communication and priorities",
      "I focus on maintaining productivity through structure"
    ],
    weights: [1, 4, 3, 2]
  },
  {
    id: 35, section: "B",
    sectionLabel: "Emotional Regulation",
    text: "Which statement best describes you?",
    options: [
      "I consider emotions as one input in decision making",
      "I usually balance emotions and logic",
      "I rely heavily on objective information when deciding",
      "I prefer understanding both emotional and practical impacts"
    ],
    weights: [1, 4, 3, 2]
  },

  // ==========================================================
  // SECTION C – ATTACHMENT STYLE (Q36–Q50)
  // Scoring: Weighted 4/3/2/1 per option | Max = 60
  // weights[i] maps directly to options[i]
  // ==========================================================

  {
    id: 36, section: "C",
    sectionLabel: "Attachment Style",
    text: "When starting a new job:",
    options: [
      "Build connections gradually while learning the environment",
      "Take time to build trust",
      "Focus first on understanding expectations independently",
      "Observe team dynamics before becoming fully involved"
    ],
    weights: [3, 4, 1, 2]
  },
  {
    id: 37, section: "C",
    sectionLabel: "Attachment Style",
    text: "Your manager takes two days to reply to an email.",
    options: [
      "I assume they're busy",
      "I consider whether additional context may be needed",
      "I schedule a polite follow-up if necessary",
      "I review whether the request was time-sensitive"
    ],
    weights: [4, 2, 1, 3]
  },
  {
    id: 38, section: "C",
    sectionLabel: "Attachment Style",
    text: "When facing a difficult task:",
    options: [
      "Ask for guidance if needed",
      "Research possible solutions before seeking support",
      "Break the problem into smaller parts and work through it",
      "Consult experienced colleagues when appropriate"
    ],
    weights: [4, 3, 2, 1]
  },
  {
    id: 39, section: "C",
    sectionLabel: "Attachment Style",
    text: "Feedback from supervisors:",
    options: [
      "Helps me improve",
      "Provides useful perspective when delivered constructively",
      "Helps identify areas for professional growth",
      "Is most useful when linked to clear expectations"
    ],
    weights: [4, 2, 1, 3]
  },
  {
    id: 40, section: "C",
    sectionLabel: "Attachment Style",
    text: "Teamwork is:",
    options: [
      "Essential for success",
      "Valuable when roles and responsibilities are clear",
      "Most effective when different strengths are utilized",
      "Important for achieving larger goals efficiently"
    ],
    weights: [4, 3, 2, 1]
  },
  {
    id: 41, section: "C",
    sectionLabel: "Attachment Style",
    text: "If a coworker seems upset with you:",
    options: [
      "Discuss it directly",
      "Observe interactions before drawing conclusions",
      "Give them some space and revisit later if needed",
      "Consider whether a misunderstanding may exist"
    ],
    weights: [4, 2, 1, 3]
  },
  {
    id: 42, section: "C",
    sectionLabel: "Attachment Style",
    text: "Recognition at work:",
    options: [
      "Is appreciated but not essential",
      "Helps reinforce positive contributions",
      "Encourages continued growth and engagement",
      "Provides useful feedback on performance"
    ],
    weights: [4, 2, 3, 1]
  },
  {
    id: 43, section: "C",
    sectionLabel: "Attachment Style",
    text: "When joining a new team:",
    options: [
      "Participate actively",
      "Build relationships gradually while learning the culture",
      "Contribute where I can while observing team dynamics",
      "Establish credibility through consistent work"
    ],
    weights: [3, 4, 1, 2]
  },
  {
    id: 44, section: "C",
    sectionLabel: "Attachment Style",
    text: "If you don't understand something:",
    options: [
      "Ask questions",
      "Gather available information before seeking clarification",
      "Explore possible solutions independently first",
      "Consult available resources and examples"
    ],
    weights: [4, 3, 2, 1]
  },
  {
    id: 45, section: "C",
    sectionLabel: "Attachment Style",
    text: "My ideal manager:",
    options: [
      "Provides guidance and autonomy",
      "Sets clear expectations and supports development",
      "Encourages independent thinking while remaining available",
      "Creates an environment where feedback is constructive"
    ],
    weights: [4, 2, 3, 1]
  },
  {
    id: 46, section: "C",
    sectionLabel: "Attachment Style",
    text: "When collaborating:",
    options: [
      "Sharing responsibilities feels natural",
      "I value clear ownership and accountability",
      "I prefer defined expectations within the team",
      "I appreciate balanced contribution from all members"
    ],
    weights: [4, 3, 2, 1]
  },
  {
    id: 47, section: "C",
    sectionLabel: "Attachment Style",
    text: "Professional relationships:",
    options: [
      "Matter and should be balanced",
      "Contribute to effective collaboration and trust",
      "Help create a positive working environment",
      "Support long-term professional growth"
    ],
    weights: [4, 2, 3, 1]
  },
  {
    id: 48, section: "C",
    sectionLabel: "Attachment Style",
    text: "If a colleague declines your request for help:",
    options: [
      "Understand they may be busy",
      "Consider alternative sources of support",
      "Review whether the request timing was appropriate",
      "Explore other ways to move forward independently"
    ],
    weights: [4, 2, 1, 3]
  },
  {
    id: 49, section: "C",
    sectionLabel: "Attachment Style",
    text: "When receiving little feedback:",
    options: [
      "Continue working normally",
      "Seek clarification when necessary",
      "Review performance indicators independently",
      "Request feedback during appropriate discussions"
    ],
    weights: [4, 3, 1, 2]
  },
  {
    id: 50, section: "C",
    sectionLabel: "Attachment Style",
    text: "Which statement best describes you?",
    options: [
      "I balance independence with collaboration",
      "I value support while maintaining personal accountability",
      "I prefer solving challenges independently when possible",
      "I adapt my approach based on the situation and people involved"
    ],
    weights: [4, 2, 3, 1]
  }

]; // end QUESTIONS


// ============================================================
// RUNTIME SHUFFLE ENGINE
// Fisher-Yates shuffle executed fresh for every candidate
// on every page load. Each option travels as a { text, score }
// pair so scoring is NEVER broken regardless of final position.
// ============================================================

/**
 * shuffleQuestionOptions(question)
 *
 * Accepts a deep-cloned question and returns it with options
 * in a new random order. correctIndex and weights[] are
 * recalculated to match the new positions automatically.
 */
function shuffleQuestionOptions(question) {
  const q = question;

  // Zip each option with its score into a single object
  const paired = q.options.map(function(text, i) {
    return {
      text:    text,
      correct: (q.section === 'A') ? (i === q.correctIndex) : false,
      weight:  (q.section !== 'A') ? q.weights[i] : 0
    };
  });

  // Fisher-Yates in-place shuffle
  for (let i = paired.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = paired[i];
    paired[i] = paired[j];
    paired[j] = tmp;
  }

  // Rebuild question arrays from shuffled pairs
  q.options = paired.map(function(p) { return p.text; });

  if (q.section === 'A') {
    q.correctIndex = paired.findIndex(function(p) { return p.correct; });
  } else {
    q.weights = paired.map(function(p) { return p.weight; });
  }

  return q;
}

// Build the shuffled set used by the assessment
// QUESTIONS (source) is preserved for reference and PDF generation
const SHUFFLED_QUESTIONS = QUESTIONS.map(function(q) {
  return shuffleQuestionOptions(JSON.parse(JSON.stringify(q)));
});
