// ============================================================
// INTRADOS DESIGN STUDIO – Candidate Assessment Portal
// questions.js – Production Ready (Bias-Removed Edition)
//
// All question text and answer text is UNCHANGED from source PDF.
// Only option presentation order is randomised at runtime.
// Scoring logic is 100% preserved via shuffleQuestionOptions().
// ============================================================

// ── RAW QUESTIONS (source order, as authored) ────────────────
// Section A: correctIndex is 0-based index of the correct option.
// Section B/C: weights[] maps 1:1 with options[]; higher = better.

const QUESTIONS = [

  // ==========================================================
  // SECTION A – Employability & Workplace Attitude (Q1–Q20)
  // Scoring: Correct = 2 pts | Wrong = 0 pts | Max = 40
  // ==========================================================

  {
    id: 1, section: "A",
    sectionLabel: "Employability & Workplace Attitude",
    text: "You are assigned a task that you have never done before. What would you do?",
    options: [
      "Refuse the task",
      "Try to learn and seek guidance if required",
      "Wait for someone else to do it",
      "Ignore the task"
    ],
    correctIndex: 1   // "Try to learn and seek guidance if required"
  },
  {
    id: 2, section: "A",
    sectionLabel: "Employability & Workplace Attitude",
    text: "What does punctuality mean?",
    options: [
      "Coming to work whenever convenient",
      "Completing work before or on time",
      "Working overtime every day",
      "Taking fewer breaks"
    ],
    correctIndex: 1   // "Completing work before or on time"
  },
  {
    id: 3, section: "A",
    sectionLabel: "Employability & Workplace Attitude",
    text: "If you make a mistake at work, what should you do?",
    options: [
      "Hide it",
      "Blame someone else",
      "Inform the concerned person and correct it",
      "Ignore it"
    ],
    correctIndex: 2   // "Inform the concerned person and correct it"
  },
  {
    id: 4, section: "A",
    sectionLabel: "Employability & Workplace Attitude",
    text: "A team member asks for your support. What would you do?",
    options: [
      "Help if possible",
      "Ignore them",
      "Tell them to ask someone else",
      "Complain to your manager"
    ],
    correctIndex: 0   // "Help if possible"
  },
  {
    id: 5, section: "A",
    sectionLabel: "Employability & Workplace Attitude",
    text: "Why is communication important in a workplace?",
    options: [
      "It is not important",
      "It helps avoid misunderstandings and improves teamwork",
      "Only managers need communication",
      "It wastes time"
    ],
    correctIndex: 1   // "It helps avoid misunderstandings and improves teamwork"
  },
  {
    id: 6, section: "A",
    sectionLabel: "Employability & Workplace Attitude",
    text: "If you have multiple tasks, how should you proceed?",
    options: [
      "Do whichever you like",
      "Prioritize based on importance and deadlines",
      "Wait for reminders",
      "Complete the easiest one only"
    ],
    correctIndex: 1   // "Prioritize based on importance and deadlines"
  },
  {
    id: 7, section: "A",
    sectionLabel: "Employability & Workplace Attitude",
    text: "What is the best way to learn a new skill?",
    options: [
      "Avoid it",
      "Practice, ask questions, and seek feedback",
      "Depend on others",
      "Wait for formal training only"
    ],
    correctIndex: 1   // "Practice, ask questions, and seek feedback"
  },
  {
    id: 8, section: "A",
    sectionLabel: "Employability & Workplace Attitude",
    text: "What would you do if you don't understand an instruction?",
    options: [
      "Guess and proceed",
      "Ask for clarification",
      "Ignore it",
      "Delay the work"
    ],
    correctIndex: 1   // "Ask for clarification"
  },
  {
    id: 9, section: "A",
    sectionLabel: "Employability & Workplace Attitude",
    text: "Which quality is most important for career growth?",
    options: [
      "Luck",
      "Continuous learning",
      "Knowing many people",
      "Working fewer hours"
    ],
    correctIndex: 1   // "Continuous learning"
  },
  {
    id: 10, section: "A",
    sectionLabel: "Employability & Workplace Attitude",
    text: "What is teamwork?",
    options: [
      "Working alone",
      "Cooperating with others to achieve a common goal",
      "Following orders only",
      "Competing with teammates"
    ],
    correctIndex: 1   // "Cooperating with others to achieve a common goal"
  },
  {
    id: 11, section: "A",
    sectionLabel: "Employability & Workplace Attitude",
    text: "If your workload is becoming difficult to manage, what should you do?",
    options: [
      "Stay silent",
      "Inform your supervisor and discuss solutions",
      "Stop working",
      "Blame others"
    ],
    correctIndex: 1   // "Inform your supervisor and discuss solutions"
  },
  {
    id: 12, section: "A",
    sectionLabel: "Employability & Workplace Attitude",
    text: "How should you react to constructive feedback?",
    options: [
      "Feel offended",
      "Ignore it",
      "Accept it and improve",
      "Argue immediately"
    ],
    correctIndex: 2   // "Accept it and improve"
  },
  {
    id: 13, section: "A",
    sectionLabel: "Employability & Workplace Attitude",
    text: "A customer/client is unhappy. What should you do?",
    options: [
      "Ignore them",
      "Listen politely and try to help or escalate appropriately",
      "Argue with them",
      "End the conversation"
    ],
    correctIndex: 1   // "Listen politely and try to help or escalate appropriately"
  },
  {
    id: 14, section: "A",
    sectionLabel: "Employability & Workplace Attitude",
    text: "Which of the following shows responsibility?",
    options: [
      "Completing assigned work on time",
      "Making excuses",
      "Avoiding tasks",
      "Waiting for constant reminders"
    ],
    correctIndex: 0   // "Completing assigned work on time"
  },
  {
    id: 15, section: "A",
    sectionLabel: "Employability & Workplace Attitude",
    text: "What should you do if you finish your work early?",
    options: [
      "Sit idle",
      "Ask for additional work or learning opportunities",
      "Leave early",
      "Use social media"
    ],
    correctIndex: 1   // "Ask for additional work or learning opportunities"
  },
  {
    id: 16, section: "A",
    sectionLabel: "Employability & Workplace Attitude",
    text: "Why is honesty important at work?",
    options: [
      "It builds trust and credibility",
      "It is not important",
      "It slows progress",
      "Only managers need to be honest"
    ],
    correctIndex: 0   // "It builds trust and credibility"
  },
  {
    id: 17, section: "A",
    sectionLabel: "Employability & Workplace Attitude",
    text: "What would you do if you notice a problem in a process?",
    options: [
      "Ignore it",
      "Report it and suggest improvements if possible",
      "Discuss it with friends only",
      "Wait for someone else"
    ],
    correctIndex: 1   // "Report it and suggest improvements if possible"
  },
  {
    id: 18, section: "A",
    sectionLabel: "Employability & Workplace Attitude",
    text: "Which attitude is most valuable in a new employee?",
    options: [
      "Willingness to learn",
      "Knowing everything",
      "Avoiding challenges",
      "Working independently all the time"
    ],
    correctIndex: 0   // "Willingness to learn"
  },
  {
    id: 19, section: "A",
    sectionLabel: "Employability & Workplace Attitude",
    text: "What should be your response to a difficult challenge?",
    options: [
      "Give up",
      "Learn, adapt, and try to solve it",
      "Complain",
      "Ignore it"
    ],
    correctIndex: 1   // "Learn, adapt, and try to solve it"
  },
  {
    id: 20, section: "A",
    sectionLabel: "Employability & Workplace Attitude",
    text: "Which employee is most likely to succeed?",
    options: [
      "One who learns continuously and takes ownership",
      "One who avoids responsibility",
      "One who blames others",
      "One who waits for instructions for everything"
    ],
    correctIndex: 0   // "One who learns continuously and takes ownership"
  },

  // ==========================================================
  // SECTION B – Emotional Regulation (Q21–Q35)
  // Scoring: weights[] are 1-based scores per option (4=Best, 1=Risk)
  // Max per question = 4 | Section max = 60
  // Source weights from PDF scoring key (ER1–ER15)
  // ==========================================================

  {
    id: 21, section: "B",
    sectionLabel: "Emotional Regulation",
    text: "A manager points out a mistake in your work during a team meeting.",
    options: [
      "Feel embarrassed and stay quiet for the rest of the meeting",
      "Explain why the mistake happened immediately",
      "Note the feedback and focus on correcting it later",
      "Feel the criticism should have been given privately"
    ],
    weights: [1, 2, 4, 3]   // ER1: A=1, B=2, C=4, D=3
  },
  {
    id: 22, section: "B",
    sectionLabel: "Emotional Regulation",
    text: "You have worked hard on a task, but it is rejected.",
    options: [
      "Feel demotivated for several days",
      "Ask for clarification and improve it",
      "Believe the reviewer is being unfair",
      "Start a new task and forget about it"
    ],
    weights: [1, 4, 2, 3]   // ER2: A=1, B=4, C=2, D=3
  },
  {
    id: 23, section: "B",
    sectionLabel: "Emotional Regulation",
    text: "A colleague speaks sharply to you.",
    options: [
      "Respond in the same tone",
      "Avoid them afterward",
      "Stay calm and address the issue later",
      "Report the incident immediately"
    ],
    weights: [1, 2, 4, 3]   // ER3: A=1, B=2, C=4, D=3
  },
  {
    id: 24, section: "B",
    sectionLabel: "Emotional Regulation",
    text: "When deadlines suddenly become tighter:",
    options: [
      "Feel stressed and struggle to focus",
      "Prioritize and reorganize work",
      "Complain about unrealistic expectations",
      "Work only on the easiest tasks"
    ],
    weights: [1, 4, 2, 3]   // ER4: A=1, B=4, C=2, D=3  — NOTE: PDF says D=3
  },
  {
    id: 25, section: "B",
    sectionLabel: "Emotional Regulation",
    text: "You receive conflicting instructions from two seniors.",
    options: [
      "Follow whichever instruction came first",
      "Clarify expectations before proceeding",
      "Choose what seems right",
      "Wait until they resolve it"
    ],
    weights: [1, 4, 3, 2]   // ER5: A=1, B=4, C=3, D=2
  },
  {
    id: 26, section: "B",
    sectionLabel: "Emotional Regulation",
    text: "During an argument:",
    options: [
      "I need to win my point",
      "I withdraw from the discussion",
      "I try to understand both perspectives",
      "I let others decide"
    ],
    weights: [1, 2, 4, 3]   // ER6: A=1, B=2, C=4, D=3
  },
  {
    id: 27, section: "B",
    sectionLabel: "Emotional Regulation",
    text: "After making a significant mistake:",
    options: [
      "Worry about it for a long time",
      "Focus on fixing it and preventing recurrence",
      "Hope nobody notices",
      "Feel others contributed to the mistake"
    ],
    weights: [2, 4, 1, 3]   // ER7: A=2, B=4, C=1, D=3
  },
  {
    id: 28, section: "B",
    sectionLabel: "Emotional Regulation",
    text: "When plans change unexpectedly:",
    options: [
      "Get frustrated",
      "Need time to adjust",
      "Adapt and move forward",
      "Question why changes happen so often"
    ],
    weights: [1, 3, 4, 2]   // ER8: A=1, B=3, C=4, D=2
  },
  {
    id: 29, section: "B",
    sectionLabel: "Emotional Regulation",
    text: "A client criticizes your work.",
    options: [
      "Feel personally offended",
      "Listen carefully and assess the feedback",
      "Defend your approach immediately",
      "Let your manager handle it"
    ],
    weights: [1, 4, 2, 3]   // ER9: A=1, B=4, C=2, D=3
  },
  {
    id: 30, section: "B",
    sectionLabel: "Emotional Regulation",
    text: "You are under pressure from multiple tasks.",
    options: [
      "Focus on one task and ignore the rest",
      "Prioritize according to urgency and impact",
      "Wait for guidance",
      "Feel overwhelmed"
    ],
    weights: [2, 4, 3, 1]   // ER10: A=2, B=4, C=3, D=1
  },
  {
    id: 31, section: "B",
    sectionLabel: "Emotional Regulation",
    text: "A teammate receives praise for a project you also worked on.",
    options: [
      "Feel disappointed",
      "Congratulate them and continue contributing",
      "Point out your contribution",
      "Lose motivation"
    ],
    weights: [3, 4, 2, 1]   // ER11: A=3, B=4, C=2, D=1
  },
  {
    id: 32, section: "B",
    sectionLabel: "Emotional Regulation",
    text: "When someone disagrees with your idea:",
    options: [
      "Take it personally",
      "Consider their reasoning",
      "Avoid sharing ideas next time",
      "Try harder to convince them"
    ],
    weights: [1, 4, 2, 3]   // ER12: A=1, B=4, C=2, D=3
  },
  {
    id: 33, section: "B",
    sectionLabel: "Emotional Regulation",
    text: "A project fails despite your effort.",
    options: [
      "Focus on lessons learned",
      "Feel like future efforts may not matter",
      "Look for who was responsible",
      "Move on without reflection"
    ],
    weights: [4, 1, 2, 3]   // ER13: A=4, B=1, C=2, D=3
  },
  {
    id: 34, section: "B",
    sectionLabel: "Emotional Regulation",
    text: "During stressful periods:",
    options: [
      "My behavior changes noticeably",
      "I remain mostly consistent",
      "I become less patient with others",
      "I avoid interaction"
    ],
    weights: [1, 4, 3, 2]   // ER14: A=1, B=4, C=3, D=2
  },
  {
    id: 35, section: "B",
    sectionLabel: "Emotional Regulation",
    text: "Which statement best describes you?",
    options: [
      "My emotions often guide my decisions",
      "I usually balance emotions and logic",
      "I prefer logic and ignore emotions",
      "I avoid emotionally difficult situations"
    ],
    weights: [1, 4, 3, 2]   // ER15: A=1, B=4, C=3, D=2
  },

  // ==========================================================
  // SECTION C – Attachment Style (Q36–Q50)
  // Scoring: weights[] are 1-based scores per option (4=Best, 1=Risk)
  // Max per question = 4 | Section max = 60
  // Source weights from PDF scoring key (AT1–AT15)
  // ==========================================================

  {
    id: 36, section: "C",
    sectionLabel: "Attachment Style",
    text: "When starting a new job:",
    options: [
      "I quickly connect with colleagues",
      "I take time to build trust",
      "I prefer keeping interactions limited",
      "I focus only on my work"
    ],
    weights: [3, 4, 1, 2]   // AT1: A=3, B=4, C=1, D=2
  },
  {
    id: 37, section: "C",
    sectionLabel: "Attachment Style",
    text: "Your manager takes two days to reply to an email.",
    options: [
      "I assume they're busy",
      "I wonder if I made a mistake",
      "I stop following up",
      "I become irritated"
    ],
    weights: [4, 2, 1, 3]   // AT2: A=4, B=2, C=1, D=3
  },
  {
    id: 38, section: "C",
    sectionLabel: "Attachment Style",
    text: "When facing a difficult task:",
    options: [
      "Ask for guidance if needed",
      "Try to solve everything alone",
      "Wait for instructions",
      "Ask multiple people for reassurance"
    ],
    weights: [4, 3, 2, 1]   // AT3: A=4, B=3, C=2, D=1
  },
  {
    id: 39, section: "C",
    sectionLabel: "Attachment Style",
    text: "Feedback from supervisors:",
    options: [
      "Helps me improve",
      "Makes me anxious",
      "Is often unnecessary",
      "Depends on how it is delivered"
    ],
    weights: [4, 2, 1, 3]   // AT4: A=4, B=2, C=1, D=3
  },
  {
    id: 40, section: "C",
    sectionLabel: "Attachment Style",
    text: "Teamwork is:",
    options: [
      "Essential for success",
      "Useful but sometimes overrated",
      "Often slows things down",
      "Something I prefer to avoid"
    ],
    weights: [4, 3, 2, 1]   // AT5: A=4, B=3, C=2, D=1
  },
  {
    id: 41, section: "C",
    sectionLabel: "Attachment Style",
    text: "If a coworker seems upset with you:",
    options: [
      "Discuss it directly",
      "Worry about it frequently",
      "Ignore it",
      "Wait for them to approach you"
    ],
    weights: [4, 2, 1, 3]   // AT6: A=4, B=2, C=1, D=3
  },
  {
    id: 42, section: "C",
    sectionLabel: "Attachment Style",
    text: "Recognition at work:",
    options: [
      "Is appreciated but not essential",
      "Strongly affects my motivation",
      "Doesn't matter much",
      "Is often overlooked"
    ],
    weights: [4, 2, 3, 1]   // AT7: A=4, B=2, C=3, D=1
  },
  {
    id: 43, section: "C",
    sectionLabel: "Attachment Style",
    text: "When joining a new team:",
    options: [
      "Participate actively",
      "Observe before engaging",
      "Keep to myself",
      "Let others initiate interaction"
    ],
    weights: [3, 4, 1, 2]   // AT8: A=3, B=4, C=1, D=2
  },
  {
    id: 44, section: "C",
    sectionLabel: "Attachment Style",
    text: "If you don't understand something:",
    options: [
      "Ask questions",
      "Try figuring it out alone",
      "Avoid asking to prevent looking inexperienced",
      "Wait until someone notices"
    ],
    weights: [4, 3, 2, 1]   // AT9: A=4, B=3, C=2, D=1
  },
  {
    id: 45, section: "C",
    sectionLabel: "Attachment Style",
    text: "My ideal manager:",
    options: [
      "Provides guidance and autonomy",
      "Is available whenever needed",
      "Gives minimal involvement",
      "Closely monitors my work"
    ],
    weights: [4, 2, 3, 1]   // AT10: A=4, B=2, C=3, D=1
  },
  {
    id: 46, section: "C",
    sectionLabel: "Attachment Style",
    text: "When collaborating:",
    options: [
      "Sharing responsibilities feels natural",
      "I prefer clear ownership",
      "I worry others may not deliver",
      "I prefer working independently"
    ],
    weights: [4, 3, 2, 1]   // AT11: A=4, B=3, C=2, D=1
  },
  {
    id: 47, section: "C",
    sectionLabel: "Attachment Style",
    text: "Professional relationships:",
    options: [
      "Matter and should be balanced",
      "Are very important to me",
      "Are secondary to work",
      "Often create complications"
    ],
    weights: [4, 2, 3, 1]   // AT12: A=4, B=2, C=3, D=1
  },
  {
    id: 48, section: "C",
    sectionLabel: "Attachment Style",
    text: "If a colleague declines your request for help:",
    options: [
      "Understand they may be busy",
      "Wonder if they dislike working with you",
      "Stop asking them in the future",
      "Feel disappointed"
    ],
    weights: [4, 2, 1, 3]   // AT13: A=4, B=2, C=1, D=3
  },
  {
    id: 49, section: "C",
    sectionLabel: "Attachment Style",
    text: "When receiving little feedback:",
    options: [
      "Continue working normally",
      "Seek clarification when necessary",
      "Assume something is wrong",
      "Feel uncertain about performance"
    ],
    weights: [4, 3, 1, 2]   // AT14: A=4, B=3, C=1, D=2
  },
  {
    id: 50, section: "C",
    sectionLabel: "Attachment Style",
    text: "Which statement best describes you?",
    options: [
      "I balance independence with collaboration",
      "I often seek reassurance from others",
      "I prefer relying on myself",
      "I avoid depending on people whenever possible"
    ],
    weights: [4, 2, 3, 1]   // AT15: A=4, B=2, C=3, D=1
  }

]; // end QUESTIONS


// ============================================================
// SHUFFLE ENGINE
// Fisher-Yates shuffle that moves option text + scoring
// together as a unit — guarantees scoring is never broken.
// ============================================================

/**
 * shuffleQuestionOptions(question)
 *
 * Accepts a deep-cloned question object and returns a new object
 * with options presented in a randomised order, with correctIndex
 * and weights[] recalculated to match the new positions.
 *
 * The underlying scores and correct answer are NEVER changed —
 * only which visual position (A/B/C/D) they appear in changes.
 */
function shuffleQuestionOptions(question) {
  const q = question; // already deep-cloned by caller

  // Step 1 — Zip each option into a scored object
  const paired = q.options.map(function(text, i) {
    return {
      text:    text,
      // For Section A: mark which is correct
      correct: (q.section === 'A') ? (i === q.correctIndex) : false,
      // For Section B/C: carry the weight
      weight:  (q.section !== 'A') ? q.weights[i] : 0
    };
  });

  // Step 2 — Fisher-Yates in-place shuffle
  for (let i = paired.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = paired[i];
    paired[i] = paired[j];
    paired[j] = temp;
  }

  // Step 3 — Rebuild question arrays from shuffled pairs
  q.options = paired.map(p => p.text);

  if (q.section === 'A') {
    // Recalculate correctIndex to match new position
    q.correctIndex = paired.findIndex(p => p.correct);
  } else {
    // Recalculate weights array to match new positions
    q.weights = paired.map(p => p.weight);
  }

  return q;
}


// ============================================================
// SHUFFLED QUESTION SET
// This is what the assessment uses — bias-free at every load.
// QUESTIONS (raw) is preserved for reference and validation.
// ============================================================

const SHUFFLED_QUESTIONS = QUESTIONS.map(function(q) {
  return shuffleQuestionOptions(JSON.parse(JSON.stringify(q)));
});
