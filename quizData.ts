import type { MCQQuestion, TFQuestion, EssayQuestion } from '../types';

export const quizData: {
  choose: MCQQuestion[];
  truefalse: TFQuestion[];
  account: EssayQuestion[];
} = {
  choose: [
    { type: 'mcq', q: "Lactose is a disaccharide of which of the following sugar units?", options: ["Glucose and fructose", "Glucose and galactose", "Glucose and sucrose", "Glucose and ribose"], a: "Glucose and galactose" },
    { type: 'mcq', q: "Which of the following is an example of Monosaccharide?", options: ["Sucrose", "Galactose", "Lactose", "Maltose"], a: "Galactose" },
    { type: 'mcq', q: "Which of the following forms, glucose is stored in plants?", options: ["Glycogen", "Starch", "Dextrin", "Cellulose"], a: "Starch" },
    { type: 'mcq', q: "Which of the following is an essential amino acid?", options: ["Cysteine", "Alanine", "Phenylalanine"], a: "Phenylalanine" },
    { type: 'mcq', q: "Which of the following an example of disaccharide?", options: ["Glucose", "Fructose", "Maltose"], a: "Maltose" },
    { type: 'mcq', q: "In Which of the following forms, glucose is stored in liver?", options: ["Glycogen", "Starch", "Cellulose", "Cellobiose"], a: "Glycogen" },
    { type: 'mcq', q: "Which of the following carbohydrates is a triose?", options: ["Glucose", "Ribose", "Glyceraldehyde", "Deoxyribose"], a: "Glyceraldehyde" },
    { type: 'mcq', q: "Which of the following is the most essential nutrient for a woman during her initial stages of pregnancy to prevent birth defects?", options: ["Thiamin", "Folic acid", "Vitamin C", "Vitamin E"], a: "Folic acid" },
    { type: 'mcq', q: "Which of the following vitamin helps in blood clotting?", options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"], a: "Vitamin K" },
    { type: 'mcq', q: "Which is the leading cause of blindness in children worldwide?", options: ["Glaucoma", "Cataracts", "Colour blindness", "Vitamin A deficiency"], a: "Vitamin A deficiency" },
    { type: 'mcq', q: "Which of the following vitamin deficiency causes Beriberi?", options: ["Vitamin B1", "Vitamin B2", "Vitamin B6", "Vitamin B12"], a: "Vitamin B1" },
    { type: 'mcq', q: "Who is most likely to develop scurvy – A vitamin C deficiency?", options: ["A pregnant woman", "A malnourished child", "A long-time alcoholic", "A person with the eating disorder anorexia nervosa"], a: "A long-time alcoholic" },
    { type: 'mcq', q: "Which of the following vitamin functions as both, hormone and visual pigment?", options: ["Thiamine", "Retinal", "Riboflavin", "Folic acid"], a: "Retinal" },
    { type: 'mcq', q: "All the following are reducing sugars except:", options: ["Maltose", "Lactose", "Sucrose"], a: "Sucrose" },
    { type: 'mcq', q: "A disaccharide formed of two glucose units is:", options: ["Lactose", "Maltose", "Sucrose", "Amylose", "Amylopectin"], a: "Maltose" },
    { type: 'mcq', q: "Milk sugar is:", options: ["Sucrose", "Maltose", "Cellobiose", "Lactose"], a: "Lactose" },
    { type: 'mcq', q: "Cane sugar is:", options: ["Maltose", "Cellobiose", "Lactose", "Sucrose"], a: "Sucrose" },
    { type: 'mcq', q: "Starch is an example of:", options: ["Galactosans", "Fructosans", "Mannosans", "Glucosaminans", "Glucosans"], a: "Glucosans" },
    { type: 'mcq', q: "Cellulose is an example of:", options: ["Structural polysaccharides present in animals", "Structural polysaccharides present in plants", "Nutrient polysaccharides present in animals", "Nutrient polysaccharides present in plants"], a: "Structural polysaccharides present in plants" },
    { type: 'mcq', q: "Which of the following is essential fatty acid?", options: ["Stearic acid", "Palmitic acid", "Folic acid", "Linoleic acid"], a: "Linoleic acid" }
  ],

  truefalse: [
    { type: 'tf', q: "Glutamic acid is essential amino acid.", a: "False" },
    { type: 'tf', q: "Glucose is one of the tetroses.", a: "False" },
    { type: 'tf', q: "Glyceraldehyde is one of the trioses.", a: "True" },
    { type: 'tf', q: "Ribose is trioses mononosaccharide.", a: "False" },
    { type: 'tf', q: "Vitamin A is essential for normal growth and bone & teeth formation.", a: "True" },
    { type: 'tf', q: "Sucrose is reducing sugar.", a: "False" },
    { type: 'tf', q: "Deficiency of Vitamin A cause xerophthalmia.", a: "True" },
    { type: 'tf', q: "Glycogen is structural polysaccharide in plants.", a: "False" },
    { type: 'tf', q: "Vitamin K essential in blood clotting.", a: "True" },
    { type: 'tf', q: "Deficiency of Thiamin cause Beriberi.", a: "True" },
    { type: 'tf', q: "Calcium isn't needed for the functioning of neurotransmitters.", a: "False" },
    { type: 'tf', q: "Iron is a constituent of haemoglobin and myoglobin.", a: "True" }
  ],

  account: [
    { type: 'essay', q: "Definition of Rancidity:", a: "It is a physic-chemical change in the natural properties of the fat leading to the development of unpleasant odor or taste or abnormal color particularly on aging after exposure to atmospheric oxygen, light, moisture, bacterial or fungal contamination. Saturated fats resist rancidity more than unsaturated fats that have unsaturated double bonds." },
    { type: 'essay', q: "Essential amino acids:", a: "1. Not synthesized by the body and must be taken in diet. 2. Valine, leucine, isoleucine, phenylalanine, threonine, tryptophan, methionine and lysine. 3. Remembered by formula: MATT VIL PHL" },
    { type: 'essay', q: "Chemical classification of amino acids:", a: "(1) Neutral amino acids: contain one amino group and one carboxyl group with 5 types - Aliphatic, Hydroxy, Aromatic, Sulfur-containing, Heterocyclic. (2) Acidic amino acids: contain 2 carboxyl groups and one amino group (glutamic, aspartic acid). (3) Basic amino acids: contain 2 amino groups and one carboxyl group (ornithine, arginine, lysine, hydroxylysine, citrulline)." },
    { type: 'essay', q: "Biological importance of protein:", a: "1. Nutrition role. 2. Catalytic role. 3. Hormonal. 4. Defensive role. 5. Plasma proteins. 6. Transport role. 7. Structure role. 8. Blood clotting. 9. Control of gene expression." },
    { type: 'essay', q: "Function of vitamin A:", a: "1. Visual process: necessary for vision in dim light. 2. Necessary for maintaining the integrity of healthy epithelium especially the membrane line of eyes, mouth, and gastrointestinal, respiratory and genitourinary tract. 3. Required for normal skeletal growth, tooth development and normal reproductive function." },
    { type: 'essay', q: "Functions of vitamin K:", a: "1. The main function is in the formation of a number of coagulant factors like prothrombin factor II, VII, IX and X. 2. Helps blood clotting. 3. Helps form and keep our bones' structure." },
    { type: 'essay', q: "Functions of iron:", a: "1. As a component of hemoglobin and myoglobin, it is required for O2 and CO2 transport. 2. As a component of cytochromes and non-heme iron proteins, it is required for oxidative phosphorylation. 3. As a component of essential enzyme myeloperoxidase, it is required for phagocytosis and killing of bacteria by neutrophils. 4. Lactoferrin binds iron in milk, facilitates transfer of iron to intestinal receptor in infant." },
    { type: 'essay', q: "Importance of carbohydrates:", a: "1. The chief source of energy. 2. Important structural components in animal and plant cells. 3. Important part of nucleic acids and free nucleotides and coenzymes. 4. Major antigens are carbohydrates in nature, blood group substance. 5. Biological role as a part of hormones and their receptors and enzymes." },
    { type: 'essay', q: "Why lactose is most suitable sugar for baby?", a: "1. It is the least sweet sugar so baby can nurse a large amount of mother's milk. 2. It has a β-glycosidic linkage, non-fermentable sugar, doesn't cause colic to infant. 3. Has laxative effect and prevents constipation, non-irritant to stomach. 4. Unabsorbed sugar is used as food for large intestinal bacteria that form vitamins. 5. Easily digested and helps absorption of minerals. 6. Converted into lactic acid during milk souring." },
    { type: 'essay', q: "Functions of essential fatty acids:", a: "1. Treatment of atherosclerosis. 2. Participate in structure of all cellular and subcellular membranes and transporting plasma phospholipids. 3. Essential for skin integrity, normal growth and reproduction. 4. Important role in blood clotting. 5. Important in preventing and treating fatty liver. 6. Role in health of the retina and vision. 7. Can be oxidized for energy production." },
    { type: 'essay', q: "Cellulose is indigestible but very essential, explain:", a: "1. Prevents constipation by increasing bulk of stool. 2. Intestinal bacteria nourished on it producing vitamins and short chain fatty acids that act as anticancer. 3. Adsorbs toxins present in foods." },
    { type: 'essay', q: "Uses of Glycerol:", a: "A) Enters in pharmaceutical and cosmetic preparations (hygroscopic). B) Nitroglycerin (glyceryl trinitrate) is used as vasodilator especially for coronary arteries, used in treatment of angina pectoris." },
    { type: 'essay', q: "Polyunsaturated fatty acids (Essential fatty acids):", a: "Definition: They are fatty acids contain more than one double bond. Some are essential fatty acids that cannot be synthesized in human body (due to lack of enzymes that can form more than one double bond) and must be taken in adequate amounts in diet." },
    { type: 'essay', q: "Methods of prevention of Rancidity:", a: "1. Avoidance of causes (exposure to light, oxygen, moisture, high temperature and bacteria or fungal contamination). 2. Removal of catalysts such as lead and copper that catalyze rancidity. 3. Addition of anti-oxidants. Most common natural antioxidant is vitamin E." },
    { type: 'essay', q: "Hazards of Rancid Fats:", a: "1. Products of rancidity are toxic, causes food poisoning and cancer. 2. Rancidity destroys fat-soluble vitamins (A, D, K and E). 3. Rancidity destroys polyunsaturated essential fatty acids. 4. Rancidity causes economical loss because rancid fat is inedible." }
  ]
};

export const getCategoryTitle = (id: string): string => {
  const map: Record<string, string> = {
    choose: 'Part I: Choose the Correct Answer',
    truefalse: 'Part II: True or False',
    account: 'Part III: Give an Account',
    full: 'Full Comprehensive Exam'
  };
  return map[id] || id;
};
