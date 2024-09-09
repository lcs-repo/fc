'use client';

import { useState } from 'react';
import Flashcard from '../components/Flashcard';

const flashcards = [
  { question: "Teratogen: Renal Damage", answer: "ACE inhibitors" },
  { question: "Teratogen: Hypocalvaria", answer: "ACE inhibitors" },
  { question: "Teratogen: Multiple major malformations", answer: "Aminopterin" },
  { question: "Teratogen: Suspected abnormal developmental patterns", answer: "Amphetamines" },
  { question: "Teratogen: Decreased School performance", answer: "Amphetamines" },
  { question: "Teratogen: Masculinization of female fetus", answer: "Androgens" },
  { question: "Teratogen: Neonatal withdrawal symptoms have been reported ina few cases with clomipramine, desipramine, and imipramine", answer: "Antidepressants, TCA" },
  { question: "Teratogen: Chronic use can lead to neonatal dependence", answer: "Barbiturates" },
  { question: "Teratogen: Various major malformations", answer: "Busulfan" },
  { question: "Teratogen: Neural Tube Defects", answer: "Carbamazepine" },
  { question: "Teratogen: Prolonged symptomatic neonatal hypoglycemia", answer: "Chlorpropamide" },
  { question: "Teratogen: Neonatal lethargy, hypotonia, cyanosis, hypothermia", answer: "Clomipramine" },
  { question: "Teratogen: Increased risk of spontaneous abortion, abruptio placentae, and premature labor", answer: "Cocaine" },
  { question: "Teratogen: Neonatal cerebral infarction", answer: "Cocaine" },
  { question: "Teratogen: Increased risk for attention deficit hyperactivity disorder", answer: "Cocaine" },
  { question: "Teratogen: Various major malformations (First trimester)", answer: "Cyclophosphamide" },
  { question: "Teratogen: Various major malformations (First, second trimesters)", answer: "Cytarabine" },
  { question: "Teratogen: Chronic use may lead to neonatal dependence", answer: "Diazepam" },
  { question: "Teratogen: Vaginal adenosis, clear cell vaginal adenocarcinoma", answer: "Diethylstilbestrol" },
  { question: "Teratogen: Risk of fetal alcohol spectrum disorder", answer: "Ethanol" },
  { question: "Teratogen: High risk of major congenital malformations", answer: "Etretinate" },
  { question: "Teratogen: Chronic use leads to neonatal abstinence syndrome", answer: "Heroin" },
  { question: "Teratogen: Congenital goiter, hypothyroidism", answer: "Iodide" },
  { question: "Teratogen: High risk of CNS, face, ear, and other malformations", answer: "Isotretinoin" },
  { question: "Teratogen: Ebstein anomaly and other cardiac malformations", answer: "Lithium" },
  { question: "Teratogen: Neonatal toxicity after third trimester exposure", answer: "Lithium" },
  { question: "Teratogen: Chronic use may lead to neonatal abstinence syndrome", answer: "Methadone" },
  { question: "Teratogen: Multiple congenital malformations (First trimester)", answer: "Methotrexate" },
  { question: "Teratogen: Hypothyroidism", answer: "Methylthiouracil" },
  { question: "Teratogen: Möbius sequence", answer: "Misoprostol" },
  { question: "Teratogen: Multiple major malformations of the face, limbs, and other organs (First trimester)", answer: "Mycophenolate mofetil" },
  { question: "Teratogen: Multiple malformations (First trimester)", answer: "Organic solvents" },
  { question: "Teratogen: Cutis laxa, other congenital malformations (First trimester)", answer: "Penicillamine" },
  { question: "Teratogen: Abnormal neurologic examination, poor suck reflex and feeding", answer: "Phencyclidine" },
  { question: "Teratogen: Fetal hydantoin syndrome", answer: "Phenytoin" },
  { question: "Teratogen: Congenital goiter", answer: "Propylthiouracil" },
  { question: "Teratogen: Neonatal abstinence syndrome, persistent pulmonary hypertension of the newborn (Third trimester)", answer: "SSRI" },
  { question: "Teratogen: IUGR, prematurity, sudden infant death syndrome, perinatal complications", answer: "Smoking" },
  { question: "Teratogen: Increased risk of spontaneous abortion, or fetal damage", answer: "Tamoxifen" },
  { question: "Teratogen: Discoloration and defects of teeth and altered bone growth", answer: "Tetracycline" },
  { question: "Teratogen: Phocomelia (shortened or absent long bones of the limbs) and many internal malformations (First trimester)", answer: "Thalidomide" },
  { question: "Teratogen: Multiple congenital malformations", answer: "Trimethadione" },
  { question: "Teratogen: Oral cleft (First trimester)", answer: "Topiramate" },
  { question: "Teratogen: Neural tube defects, cardiac and limb malformations; developmental delay, possible autism", answer: "Valproic acid" },
  { question: "Teratogen: Hypoplastic nasal bridge, chondrodysplasia punctata (First trimester)", answer: "Warfarin" },
  { question: "Teratogen: CNS malformation (First trimester)", answer: "Warfarin" },
  { question: "Teratogen: Risk of bleeding, discontinue use 1 month before delivery (Second and Third trimesters)", answer: "Warfarin" },
  { question: "human carcinogens", answer: "Carcinogenesis Group 1" },
  { question: "probably carcinogenic in humans (to memorize: A comes with 'probAbly')", answer: "Carcinogenesis Group 2A" },
  { question: "possibly carcinogenic in humans (to memorize: A daw muna bago B, then 'possiBly')", answer: "Carcinogenesis Group 2B" },
  { question: "data are lacking to suggest a role in carcinogenesis", answer: "Carcinogenesis Group 3" },
  { question: "data indicate that they are unlikely to be carcinogens", answer: "Carcinogenesis Group 4" },
  { question: "What is the associated chemical/drug: Bladder cancer, Leukemia", answer: "Alkylating agents (Cyclophosphamide, Melphalan)" },
  { question: "What is the associated chemical/drug: Lymphoma, reticulum cell sarcoma, skin CA, Kaposi's sarcoma (?)", answer: "Azathioprine" },
  { question: "What is the associated chemical/drug: Leukemia", answer: "Chloramphenicol" },
  { question: "What is the associated chemical/drug: Vagina (Clear cell carcinoma)", answer: "Diethylstilbestrol" },
  { question: "What is the associated chemical/drug: Liver cell adenoma, endometrial CA, skin CA", answer: "Estrogens" },
  { question: "What is the associated chemical/drug: Renal pelvis carcinoma", answer: "Phenacetin" },
  { question: "What is the associated chemical/drug: Lymphoma, neuroblastoma", answer: "Phenytoin" },
  { question: "What is the associated chemical/drug: Liver (Angiosarcoma)", answer: "Thorotrast" },
  { question: "What is the antidote used for Acetaminophen poisoning?", answer: "Acetylcysteine" },
  { question: "What is the antidote used for Organophosphorus and carbamate pesticides poisoning?", answer: "Atropine sulfate" },
  { question: "What is the antidote used for Drug-induced dystonia?", answer: "Benztropine" },
  { question: "What is the antidote used for Na+ channel blocking drugs poisoning?", answer: "Bicarbonate, sodium" },
  { question: "What is the antidote used for Neuroleptic malignant syndrome?", answer: "Bromocriptine" },
  { question: "What is the antidote used for Ca2+ channel blocking drugs, fluoride poisoning?", answer: "Calcium gluconate or chloride" },
  { question: "What is the antidote used for Valproate hyperammonemia?", answer: "Carnitine" },
  { question: "What is the antidote used for North American crotaline snake envenomation?", answer: "Crotalidae polyvalent immune Fab" },
  { question: "What is the antidote used for Malignant hyperthermia?", answer: "Dantrolene" },
  { question: "What is the antidote used for Iron poisoning?", answer: "Deferoxamine" },
  { question: "What is the antidote used for Cardiac glycosides poisoning?", answer: "Digoxin immune Fab" },
  { question: "What is the antidote used for Drug-induced dystonia?", answer: "Diphenhydramine" },
  { question: "What is the antidote used for Lead, mercury, arsenic poisoning?", answer: "Dimercaprol (BAL)" },
  { question: "What is the antidote used for Lead poisoning?", answer: "EDTA, CaNa2" },
  { question: "What is the antidote used for Methanol, ethylene glycol poisoning?", answer: "Ethanol" },
  { question: "What is the antidote used for Methanol, ethylene glycol poisoning?", answer: "Fomepizole" },
  { question: "What is the antidote used for Benzodiazepines poisoning?", answer: "Flumazenil" },
  { question: "What is the antidote used for β adrenergic antagonists poisoning?", answer: "Glucagon hydrochloride" },
  { question: "What is the antidote used for Cyanide poisoning?", answer: "Hydroxycobalamin hydrochloride" },
  { question: "What is the antidote used for Ca2+ channel blockers poisoning?", answer: "Insulin (high dose)" },
  { question: "What is the antidote used for Methotrexate poisoning?", answer: "Leucovorin calcium" },
  { question: "What is the antidote used for Methemoglobinemia?", answer: "Methylene blue" },
  { question: "What is the antidote used for Opioids poisoning?", answer: "Naloxone hydrochloride" },
  { question: "What is the antidote used for Sulfonylurea-induced hypoglycemia?", answer: "Octreotide acetate" },
  { question: "What is the antidote used for Carbon monoxide poisoning?", answer: "Oxygen, hyperbaric" },
  { question: "What is the antidote used for Lead, mercury, copper poisoning?", answer: "Penicillamine" },
  { question: "What is the antidote used for Anticholinergic syndrome?", answer: "Physostigmine salicylate" },
  { question: "What is the antidote used for Organophosphorus pesticides poisoning?", answer: "Pralidoxime chloride (2-PAM)" },
  { question: "What is the antidote used for Isoniazid seizures?", answer: "Pyridoxine hydrochloride" },
  { question: "What is the antidote used for Lead, mercury, arsenic poisoning?", answer: "Succimer (DMSA)" },
  { question: "What is the antidote used for Cyanide poisoning?", answer: "Thiosulfate, sodium" },
  { question: "What is the antidote used for Coumarin, indanedione poisoning?", answer: "Vitamin K1 (phytonadione)" },
];

export default function Home() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const nextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
  };

  return (
    <main className="main">
      <h1 className="title">Flashcards</h1>
      <div className="flashcard-container">
        <Flashcard
          question={flashcards[currentCardIndex].question}
          answer={flashcards[currentCardIndex].answer}
          onNext={nextCard}
        />
      </div>
    </main>
  );
}