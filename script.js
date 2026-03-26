const questionnaireData = [
  {
    key: "NSD",
    title: "Novelty & Stimulation Drive (NSD)",
    description: "Measures sensitivity to novelty, boredom intolerance, and reward-seeking tendencies.",
    items: [
      { id: "q1", text: "I get bored quickly when activities become repetitive.", weight: 1.5, reverse: false },
      { id: "q2", text: "I often seek new or intense experiences to stay interested.", weight: 1.5, reverse: false },
      { id: "q3", text: "Once something stops feeling exciting, I lose interest in it.", weight: 1.5, reverse: false },
      { id: "q4", text: "I find it easy to stay engaged with simple, slow-paced activities.", weight: 1.0, reverse: true },
      { id: "q5", text: "I am drawn to fast-moving digital content.", weight: 1.5, reverse: false },
      { id: "q6", text: "I feel restless when there is not enough stimulation.", weight: 1.5, reverse: false },
      { id: "q7", text: "I prefer stability and routine over novelty.", weight: 1.0, reverse: true },
      { id: "q8", text: "I tend to chase the next interesting thing rather than stay with one thing.", weight: 1.5, reverse: false },
      { id: "q9", text: "I can tolerate boredom without needing to change activities.", weight: 1.0, reverse: true }
    ]
  },
  {
    key: "ERR",
    title: "Emotional Regulation Reliance (ERR)",
    description: "Measures the degree to which certain behaviors are used to manage stress, loneliness, overwhelm, or difficult emotions.",
    items: [
      { id: "q10", text: "I turn to certain behaviors when I feel stressed or anxious.", weight: 2.0, reverse: false },
      { id: "q11", text: "When I feel lonely, I look for something that quickly changes how I feel.", weight: 2.0, reverse: false },
      { id: "q12", text: "I use digital media to distract myself from difficult feelings.", weight: 1.5, reverse: false },
      { id: "q13", text: "I notice my urges increase when I feel overwhelmed.", weight: 2.0, reverse: false },
      { id: "q14", text: "My use of certain behaviors increases during stressful periods.", weight: 2.0, reverse: false },
      { id: "q15", text: "I can sit with uncomfortable feelings without needing to escape them.", weight: 2.0, reverse: true },
      { id: "q16", text: "I usually know what I am feeling when I feel it.", weight: 1.5, reverse: true },
      { id: "q17", text: "I have ways to calm myself that work reliably.", weight: 1.5, reverse: true },
      { id: "q18", text: "I can handle loneliness without needing immediate distraction.", weight: 1.5, reverse: true }
    ]
  },
  {
    key: "HCC",
    title: "Habit & Cue Conditioning (HCC)",
    description: "Assesses automaticity, environmental triggers, and routine-based behavior patterns.",
    items: [
      { id: "q19", text: "Certain times of day automatically trigger urges for specific behaviors.", weight: 2.0, reverse: false },
      { id: "q20", text: "I often find myself engaging in behaviors without consciously deciding to.", weight: 2.0, reverse: false },
      { id: "q21", text: "Specific environments are strongly linked to certain habits for me.", weight: 2.0, reverse: false },
      { id: "q22", text: "I can easily change routines without much discomfort.", weight: 1.5, reverse: true },
      { id: "q23", text: "I notice clear patterns in when and where urges appear.", weight: 1.5, reverse: false },
      { id: "q24", text: "My behavior feels automatic once I start.", weight: 2.0, reverse: false },
      { id: "q25", text: "Changing my physical environment does not affect my habits much.", weight: 1.5, reverse: true },
      { id: "q26", text: "When I interrupt my routine, the urge usually weakens.", weight: 1.0, reverse: true },
      { id: "q27", text: "I repeat certain behaviors in the same context over and over.", weight: 2.0, reverse: false }
    ]
  },
  {
    key: "SIC",
    title: "Shame & Identity Conflict (SIC)",
    description: "Captures self-criticism, secrecy, values conflict, and distress connected to the behavior.",
    items: [
      { id: "q28", text: "I feel let down by myself after certain behaviors.", weight: 2.0, reverse: false },
      { id: "q29", text: "I sometimes worry about what my behavior might mean about me.", weight: 2.0, reverse: false },
      { id: "q30", text: "I keep some behaviors private because I do not want to be judged.", weight: 1.5, reverse: false },
      { id: "q31", text: "I tend to be hard on myself when I make mistakes.", weight: 1.5, reverse: false },
      { id: "q32", text: "When I slip, it can feel like a major setback.", weight: 2.0, reverse: false },
      { id: "q33", text: "My behavior and my values sometimes feel out of sync.", weight: 1.5, reverse: false },
      { id: "q34", text: "Feelings like guilt or shame sometimes lead me back into the same behavior.", weight: 2.0, reverse: false },
      { id: "q35", text: "I can see my behavior as separate from who I am.", weight: 2.0, reverse: true },
      { id: "q36", text: "I believe one mistake does not define me.", weight: 1.5, reverse: true }
    ]
  },
  {
    key: "SRC",
    title: "Self-Regulation Capacity (SRC)",
    description: "Assesses impulse control, follow-through, urge redirection, and recovery after setbacks.",
    items: [
      { id: "q37", text: "I act quickly on urges without thinking them through.", weight: 1.5, reverse: false },
      { id: "q38", text: "I find it hard to stay consistent with changes I want to make.", weight: 1.5, reverse: false },
      { id: "q39", text: "Stress makes it harder for me to think clearly before I act.", weight: 1.5, reverse: false },
      { id: "q40", text: "Once I start a behavior, I find it difficult to stop.", weight: 1.5, reverse: false },
      { id: "q41", text: "I feel pulled toward certain behaviors even when I do not want to engage in them.", weight: 1.5, reverse: false },
      { id: "q42", text: "I can pause before acting on strong urges.", weight: 2.0, reverse: true },
      { id: "q43", text: "I feel in control of my decisions most of the time.", weight: 1.5, reverse: true },
      { id: "q44", text: "I can delay gratification when something matters to me.", weight: 2.0, reverse: true },
      { id: "q45", text: "I have ways to redirect urges when they come up.", weight: 1.5, reverse: true },
      { id: "q46", text: "I recover from setbacks and get back on track.", weight: 1.5, reverse: true }
    ]
  }
];

const form = document.getElementById("pllpi-form");
const questionnaire = document.getElementById("questionnaire");
const preview = document.getElementById("preview");
const errorMessage = document.getElementById("error-message");
const submitBtn = document.getElementById("submit-btn");
const previewBtn = document.getElementById("preview-btn");

function renderQuestionnaire() {
  const scaleLabels = {
    1: "Strongly Disagree",
    2: "Disagree",
    3: "Neutral / Unsure",
    4: "Agree",
    5: "Strongly Agree"
  };

  questionnaire.innerHTML = questionnaireData.map(section => {
    const itemsHtml = section.items.map(item => {
      const radios = [1, 2, 3, 4, 5].map(value => `
        <label class="option">
          <input type="radio" name="${item.id}" value="${value}">
          <span>${value} - ${scaleLabels[value]}</span>
        </label>
      `).join("");

      return `
        <div class="question">
          <p class="question-text"><strong>${item.id.replace("q", "")}.</strong> ${item.text}</p>
          <div class="options">${radios}</div>
        </div>
      `;
    }).join("");

    return `
      <section class="section">
        <h2>${section.title}</h2>
        <p class="section-desc">${section.description}</p>
        ${itemsHtml}
      </section>
    `;
  }).join("");
}

function reverseScore(value) {
  return 6 - value;
}

function getAllItemDefinitions() {
  return questionnaireData.flatMap(section => section.items);
}

function getMissingItems(formData) {
  return getAllItemDefinitions()
    .filter(item => !formData.get(item.id))
    .map(item => item.id);
}

function calculateSubscale(formData, items) {
  let total = 0;
  let max = 0;

  for (const item of items) {
    let value = parseInt(formData.get(item.id), 10);
    if (Number.isNaN(value)) {
      return null;
    }

    if (item.reverse) {
      value = reverseScore(value);
    }

    total += value * item.weight;
    max += 5 * item.weight;
  }

  return Math.round((total / max) * 100);
}

function bandLabel(score, isSrc = false) {
  if (!isSrc) {
    if (score >= 67) return "High";
    if (score >= 34) return "Moderate";
    return "Low";
  }

  if (score >= 67) return "High dysregulation";
  if (score >= 34) return "Moderate dysregulation";
  return "Lower dysregulation";
}

function classifyBlend(scores) {
  if (scores.NSD >= 67 && scores.HCC >= 67) return "Novelty-seeking habit automation";
  if (scores.ERR >= 67 && scores.SIC >= 67) return "Shame-regulation cycle";
  if (scores.ERR >= 67 && scores.SRC >= 67) return "Emotional overwhelm + impulse vulnerability";
  if (scores.NSD >= 67 && scores.ERR >= 67) return "Stimulation-seeking + stress-regulation dual-loop";
  return "Mixed profile";
}

function buildSummary(scores) {
  const profile = classifyBlend(scores);

  const primary = Object.entries(scores)
    .sort((a, b) => b[1] - a[1])
    .map(([key]) => key);

  const top = primary[0];
  const second = primary[1];

  const plainLabels = {
    NSD: "Novelty & Stimulation Drive",
    ERR: "Emotional Regulation Reliance",
    HCC: "Habit & Cue Conditioning",
    SIC: "Shame & Identity Conflict",
    SRC: "Self-Regulation Capacity"
  };

  let surfaceSummary = "";
  if (profile === "Novelty-seeking habit automation") {
    surfaceSummary = "Your strongest pattern appears to involve novelty-seeking combined with automatic habit loops. Boredom sensitivity and repeated context-based behavior may both be playing a role.";
  } else if (profile === "Shame-regulation cycle") {
    surfaceSummary = "Your strongest pattern appears to involve distress regulation combined with shame or self-critical loops. Emotional discomfort and identity conflict may be reinforcing each other.";
  } else if (profile === "Emotional overwhelm + impulse vulnerability") {
    surfaceSummary = "Your strongest pattern appears to involve emotional overload combined with lower moment-to-moment self-regulation. Stress may make redirection harder in the moment.";
  } else if (profile === "Stimulation-seeking + stress-regulation dual-loop") {
    surfaceSummary = "Your strongest pattern appears to involve both stimulation-seeking and emotion regulation. The behavior may serve both activation and relief functions.";
  } else {
    surfaceSummary = "Your results suggest a more blended pattern rather than a single dominant loop. More than one mechanism may be contributing.";
  }

  return {
    profile,
    surfaceSummary,
    fullText:
`PLLPI Summary

NSD: ${scores.NSD}% (${bandLabel(scores.NSD)})
ERR: ${scores.ERR}% (${bandLabel(scores.ERR)})
HCC: ${scores.HCC}% (${bandLabel(scores.HCC)})
SIC: ${scores.SIC}% (${bandLabel(scores.SIC)})
SRC: ${scores.SRC}% (${bandLabel(scores.SRC, true)})

Primary Elevations:
1. ${plainLabels[top]}
2. ${plainLabels[second]}

Blend: ${profile}

Superficial Summary:
${surfaceSummary}`
  };
}

function setHiddenFields(scores, profile, fullText) {
  document.getElementById("results").value = fullText;
  document.getElementById("profile").value = profile;
  document.getElementById("nsdScore").value = scores.NSD;
  document.getElementById("errScore").value = scores.ERR;
  document.getElementById("hccScore").value = scores.HCC;
  document.getElementById("sicScore").value = scores.SIC;
  document.getElementById("srcScore").value = scores.SRC;
}

function calculateResults() {
  const formData = new FormData(form);
  const email = document.getElementById("email").value.trim();

  if (!email) {
    return { error: "Please enter your email address." };
  }

  const missing = getMissingItems(formData);
  if (missing.length > 0) {
    return {
      error: `Please answer all questions before continuing. Missing: ${missing.join(", ")}`
    };
  }

  const scores = {};
  for (const section of questionnaireData) {
    scores[section.key] = calculateSubscale(formData, section.items);
  }

  const summary = buildSummary(scores);
  setHiddenFields(scores, summary.profile, summary.fullText);

  return {
    error: null,
    scores,
    summary
  };
}

function showPreview(summary) {
  preview.textContent = summary.fullText;
}

function handleAction(shouldSubmit) {
  errorMessage.classList.add("hidden");
  errorMessage.textContent = "";

  const result = calculateResults();

  if (result.error) {
    errorMessage.textContent = result.error;
    errorMessage.classList.remove("hidden");
    return;
  }

  showPreview(result.summary);

  if (shouldSubmit) {
    form.submit();
  }
}

previewBtn.addEventListener("click", () => handleAction(false));
submitBtn.addEventListener("click", () => handleAction(true));

renderQuestionnaire();
