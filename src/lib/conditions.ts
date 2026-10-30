export type Condition = {
  id: string;
  name: string;
  icon: string; // lucide icon name
  symptoms: string;
  approach: string;
  urgent: string;
};

export const conditions: Condition[] = [
  {
    id: "allergic-rhinitis",
    name: "Allergic Rhinitis & Sinusitis",
    icon: "Wind",
    symptoms:
      "Sneezing, nasal congestion, runny/blocked nose, sinus pressure or headache, itchy eyes/throat, especially with weather or dust changes.",
    approach:
      "Individualised homeopathic remedies aimed at reducing allergic sensitivity and frequency of flare-ups, alongside guidance on trigger avoidance and immunity support.",
    urgent:
      "High fever, severe facial swelling, difficulty breathing, or symptoms lasting beyond 10-14 days without improvement.",
  },
  {
    id: "migraine",
    name: "Migraine",
    icon: "Brain",
    symptoms:
      "Recurring throbbing headache (often one-sided), nausea, sensitivity to light/sound, sometimes preceded by visual aura.",
    approach:
      "Constitutional homeopathic treatment to reduce frequency and intensity of attacks, along with lifestyle and trigger-identification guidance.",
    urgent:
      "Sudden \"worst-ever\" headache, headache with fever/stiff neck, slurred speech, weakness, or vision loss.",
  },
  {
    id: "psoriasis",
    name: "Psoriasis & Skin Complaints",
    icon: "Sparkles",
    symptoms:
      "Red, scaly, itchy patches; dry or inflamed skin; eczema-like rashes; chronic skin sensitivity.",
    approach:
      "Deep-acting constitutional remedies to address underlying triggers of skin flare-ups, alongside skin-care and diet guidance.",
    urgent:
      "Widespread skin infection, oozing/pus, high fever, or rapid worsening over 24-48 hours.",
  },
  {
    id: "arthritis",
    name: "Arthritis & Joint Pain",
    icon: "Bone",
    symptoms:
      "Joint stiffness, swelling, pain on movement, reduced mobility, morning stiffness.",
    approach:
      "Personalised remedies to ease pain and stiffness and support long-term joint health, combined with movement and diet advice.",
    urgent:
      "Sudden severe joint swelling with redness and fever, or inability to bear weight/move the joint.",
  },
  {
    id: "gastric",
    name: "Gastric Complaints",
    icon: "Soup",
    symptoms:
      "Bloating, acidity, indigestion, gas, irregular bowel habits, stomach discomfort after meals.",
    approach:
      "Homeopathic care to restore digestive balance, alongside dietary and routine guidance suited to your constitution.",
    urgent: "Severe abdominal pain, vomiting blood, black stools, or persistent vomiting.",
  },
  {
    id: "piles",
    name: "Piles",
    icon: "Droplet",
    symptoms:
      "Pain or discomfort during bowel movements, bleeding, itching, or swelling around the anal area.",
    approach:
      "Gentle homeopathic remedies to reduce discomfort and bleeding, with dietary guidance to prevent recurrence.",
    urgent: "Heavy or persistent bleeding, severe pain, or signs of infection.",
  },
  {
    id: "kidney-stones",
    name: "Kidney Stones",
    icon: "Gem",
    symptoms: "Sharp back/side pain, painful urination, blood in urine, nausea.",
    approach:
      "Supportive homeopathic treatment aimed at easing discomfort and supporting the body's natural elimination process.",
    urgent:
      "Severe unrelenting pain, fever with chills, or inability to pass urine — seek emergency care immediately.",
  },
  {
    id: "hairfall",
    name: "Hair Fall & Hair Thinning",
    icon: "scissors",
    symptoms: "Excessive hair shedding, thinning hair, receding hairline, and reduced hair density.",
    approach: "Individualised supportive care based on the patient's symptoms and possible underlying factors.",
    urgent: "Consult a dermatologist if hair loss is sudden, patchy, severe, or accompanied by scalp pain, redness, or inflammation."
  },
  {
    id: "diabetes",
    name: "Diabetes Supportive Care",
    icon: "Droplets",
    symptoms:
      "Increased thirst/urination, fatigue, unexplained weight changes, slow wound healing.",
    approach:
      "Homeopathic care used alongside conventional management to support overall wellbeing; not a replacement for prescribed diabetes medication.",
    urgent:
      "Signs of very high or very low blood sugar (confusion, fainting, extreme thirst, rapid breathing) — seek emergency care immediately.",
  },
  {
    id: "mental-health",
    name: "Mental Health",
    icon: "brain",
    symptoms: "Stress, anxiety, low mood, sleep difficulties, and emotional distress.",
    approach: "Individualised supportive care focused on overall wellbeing.",
    urgent: "Seek immediate professional help if experiencing thoughts of self-harm, suicidal thoughts, or a mental health crisis."
  },
  {
    id: "womens-health",
    name: "Women's Health",
    icon: "Flower2",
    symptoms:
      "Irregular or painful periods, PMS, hormonal imbalance, menopause-related discomfort, PCOS-related concerns.",
    approach:
      "Personalised homeopathic care addressing hormonal and reproductive health with sensitivity and confidentiality.",
    urgent: "Very heavy bleeding, severe pelvic pain, or fainting.",
  },
  {
    id: "childrens-health",
    name: "Children's Health",
    icon: "Baby",
    symptoms:
      "Frequent colds, digestive upsets, skin issues, growth or immunity concerns in children.",
    approach:
      "Gentle, child-friendly homeopathic remedies to support healthy growth and stronger immunity.",
    urgent:
      "High fever, breathing difficulty, persistent vomiting, or lethargy in a child.",
  },
  {
    id: "cough-cold",
    name: "Recurrent Cough, Cold & Allergies",
    icon: "Thermometer",
    symptoms:
      "Frequent colds, persistent cough, throat irritation, recurring allergic episodes.",
    approach:
      "Constitutional treatment aimed at strengthening immunity and reducing recurrence, alongside seasonal-care guidance.",
    urgent:
      "Breathing difficulty, high fever, chest pain, or symptoms lasting beyond 2-3 weeks.",
  },
];

export const WA_NUMBER = "919921711708";
export const waLink = (message?: string) =>
  `https://wa.me/${WA_NUMBER}${message ? `?text=${encodeURIComponent(message)}` : ""}`;