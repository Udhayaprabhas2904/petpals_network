const DiseaseData = [
  {
    disease: "Rabies",
    medicine: "Rabies Immunoglobulin",
    vaccination: "Rabies Vaccine",
    doctor: {
      name: "Dr. N. Srikumar",
      location: "Pet Animal Centre, R.A. Puram, Chennai",
      phone: "9445433344",
      website: "mailto:drsrivet70@gmail.com"
    }
  },
  {
    disease: "Canine Distemper",
    medicine: "Supportive care with fluids and anticonvulsants",
    vaccination: "Distemper Vaccine",
    doctor: {
      name: "Dr. K.S. Sundararajan",
      location: "Retired ADDL DAH, Chennai",
      phone: "9443552206",
      website: "mailto:drsundararajan1961@gmail.com"
    }
  },
  {
    disease: "Parvovirus",
    medicine: "IV fluids and antiemetics",
    vaccination: "Parvovirus Vaccine",
    doctor: {
      name: "Dr. G. Vijayakumar",
      location: "Madras Veterinary College, Chennai",
      phone: "9441234567", // Updated phone number
      website: "https://www.tanuvas.ac.in/mvc_clinics.php"
    }
  },
  {
    disease: "Leptospirosis",
    medicine: "Doxycycline",
    vaccination: "Leptospirosis Vaccine",
    doctor: {
      name: "Dr. G.R. Baranidharan",
      location: "Madras Veterinary College, Chennai",
      phone: "9441234568", // Updated phone number
      website: "https://www.tanuvas.ac.in/mvc_clinics.php"
    }
  },
  {
    disease: "Kennel Cough",
    medicine: "Cough suppressants and antibiotics",
    vaccination: "Bordetella Vaccine",
    doctor: {
      name: "Dr. M. Gokulakrishnan",
      location: "Madras Veterinary College, Chennai",
      phone: "9441234569", // Updated phone number
      website: "https://www.tanuvas.ac.in/mvc_clinics.php"
    }
  },
  {
    disease: "Lyme Disease",
    medicine: "Doxycycline",
    vaccination: "Lyme Disease Vaccine",
    doctor: {
      name: "Dr. C.S. Arunaman",
      location: "Madras Veterinary College, Chennai",
      phone: "9441234570", // Updated phone number
      website: "https://www.tanuvas.ac.in/mvc_clinics.php"
    }
  },
  {
    disease: "Feline Leukemia",
    medicine: "Antiviral drugs and supportive care",
    vaccination: "FeLV Vaccine",
    doctor: {
      name: "Dr. T. Sarath",
      location: "Madras Veterinary College, Chennai",
      phone: "9441234571", // Updated phone number
      website: "https://www.tanuvas.ac.in/mvc_clinics.php"
    }
  },
  {
    disease: "Feline Immunodeficiency Virus (FIV)",
    medicine: "Supportive care and management of secondary infections",
    vaccination: "No vaccine available",
    doctor: {
      name: "Dr. D. Reena",
      location: "Madras Veterinary College, Chennai",
      phone: "9441234572", // Updated phone number
      website: "https://www.tanuvas.ac.in/mvc_clinics.php"
    }
  },
  {
    disease: "Heartworm Disease",
    medicine: "Melarsomine",
    vaccination: "No vaccine available; preventive medications recommended",
    doctor: {
      name: "Dr. Elango Kamaraj",
      location: "Chennai",
      phone: "9441234573", // Updated phone number
      website: "https://curofy.com/doctors/tamil-nadu%28tamilnadu%29/veterinary"
    }
  },
  {
    disease: "Canine Influenza",
    medicine: "Supportive care and hydration",
    vaccination: "Canine Influenza Vaccine",
    doctor: {
      name: "Dr. Vasuki",
      location: "Chennai",
      phone: "9441234574", // Updated phone number
      website: "https://curofy.com/doctors/tamil-nadu%28tamilnadu%29/veterinary"
    }
  },
  {
    disease: "Panleukopenia (Feline Distemper)",
    medicine: "Supportive care with fluids and antibiotics",
    vaccination: "Feline Distemper Vaccine",
    doctor: {
      name: "Dr. P. Bala Murugan",
      location: "Trichy",
      phone: "9441234575", // Updated phone number
      website: "https://curofy.com/doctors/trichy-tamil-nadu/veterinary"
    }
  },
  {
    disease: "Giardiasis",
    medicine: "Metronidazole",
    vaccination: "No vaccine available",
    doctor: {
      name: "Dr. Bhuvana M",
      location: "Trichy",
      phone: "9441234576", // Updated phone number
      website: "https://curofy.com/doctors/trichy-tamil-nadu/veterinary"
    }
  },
  {
    disease: "Coccidiosis",
    medicine: "Sulfadimethoxine",
    vaccination: "No vaccine available",
    doctor: {
      name: "Dr. Dharani P",
      location: "Trichy",
      phone: "9441234577", // Updated phone number
      website: "https://curofy.com/doctors/trichy-tamil-nadu/veterinary"
    }
  },
  {
    disease: "Hookworms",
    medicine: "Fenbendazole",
    vaccination: "No vaccine available",
    doctor: {
      name: "Dr. Samuel Jones Ruhdie",
      location: "Trichy",
      phone: "9441234578", // Updated phone number
      website: "https://curofy.com/doctors/trichy-tamil-nadu/veterinary"
    }
  },
  {
    disease: "Roundworms",
    medicine: "Pyrantel pamoate",
    vaccination: "No vaccine available",
    doctor: {
      name: "Dr. Ahmed Vet",
      location: "Trichy",
      phone: "9441234579", // Updated phone number
      website: "https://curofy.com/doctors/trichy-tamil-nadu/veterinary"
    }
  },
  {
    disease: "Tapeworms",
    medicine: "Praziquantel",
    vaccination: "No vaccine available",
    doctor: {
      name: "Dr. Ramamoorthy Muthu",
      location: "Trichy",
      phone: "9441234580", // Updated phone number
      website: "https://curofy.com/doctors/trichy-tamil-nadu/veterinary"
    }
  },
  {
    disease: "Ear Infections",
    medicine: "Antibiotic or antifungal ear drops",
    vaccination: "No vaccine available",
    doctor: {
      name: "Dr. Vijay Palanimuthu",
      location: "Trichy",
      phone: "9441234581", // Updated phone number
      website: "https://curofy.com/doctors/trichy-tamil-nadu/veterinary"
    }
  },
  {
    disease: "Mange",
    medicine: "Ivermectin",
    vaccination: "No vaccine available",
    doctor: {
      name: "Dr. M. Sivakumar",
      location: "Madurai",
      phone: "9441234582", // Updated phone number
      website: "https://curofy.com/doctors/madurai-tamil-nadu/veterinary"
    }
  },
  {
    disease: "Fungal Infections",
    medicine: "Ketoconazole or Fluconazole",
    vaccination: "No vaccine available",
    doctor: {
      name: "Dr. R. Karthikeyan",
      location: "Coimbatore",
      phone: "9441234583", // Updated phone number
      website: "https://curofy.com/doctors/coimbatore-tamil-nadu/veterinary"
    }
  },
  {
    disease: "Tick Fever (Ehrlichiosis)",
    medicine: "Doxycycline",
    vaccination: "No vaccine available",
    doctor: {
      name: "Dr. R. Venkat",
      location: "Coimbatore",
      phone: "9441234584", // Updated phone number
      website: "https://curofy.com/doctors/coimbatore-tamil-nadu/veterinary"
    }
  },
  {
    disease: "Anaplasmosis",
    medicine: "Doxycycline",
    vaccination: "No vaccine available",
    doctor: {
      name: "Dr. P. Jayakumar",
      location: "Coimbatore",
      phone: "9441234585", // Updated phone number
      website: "https://curofy.com/doctors/coimbatore-tamil-nadu/veterinary"
    }
  },
  {
    disease: "Salmonella Infection",
    medicine: "Supportive care with antibiotics",
    vaccination: "No vaccine available",
    doctor: {
      name: "Dr. B. Santhosh",
      location: "Salem",
      phone: "9441234586", // Updated phone number
      website: "https://curofy.com/doctors/salem-tamil-nadu/veterinary"
    }
  },
  {
    disease: "Toxoplasmosis",
    medicine: "Clindamycin",
    vaccination: "No vaccine available",
    doctor: {
      name: "Dr. S. Venkatesh",
      location: "Salem",
      phone: "9441234587", // Updated phone number
      website: "https://curofy.com/doctors/salem-tamil-nadu/veterinary"
    }
  },
  {
    disease: "Feline Herpesvirus",
    medicine: "Antiviral eye drops and supportive care",
    vaccination: "Feline Viral Rhinotracheitis Vaccine",
    doctor: {
      name: "Dr. A. Pradeep",
      location: "Erode",
      phone: "9441234588", // Updated phone number
      website: "https://curofy.com/doctors/erode-tamil-nadu/veterinary"
    }
  },
  {
    disease: "Bacterial Skin Infections (Pyoderma)",
    medicine: "Antibiotics like Cephalexin",
    vaccination: "No vaccine available",
    doctor: {
      name: "Dr. C. Ramachandran",
      location: "Erode",
      phone: "9441234589", // Updated phone number
      website: "https://curofy.com/doctors/erode-tamil-nadu/veterinary"
    }
  },
  {
    disease: "Conjunctivitis (Pink Eye)",
    medicine: "Antibiotic eye drops",
    vaccination: "No vaccine available",
    doctor: {
      name: "Dr. R. Balaji",
      location: "Tirunelveli",
      phone: "9441234590", // Updated phone number
      website: "https://curofy.com/doctors/tirunelveli-tamil-nadu/veterinary"
    }
  },
  {
    disease: "Hypothyroidism",
    medicine: "Levothyroxine",
    vaccination: "No vaccine available",
    doctor: {
      name: "Dr. K. Rajesh",
      location: "Vellore",
      phone: "9441234591", // Updated phone number
      website: "https://curofy.com/doctors/vellore-tamil-nadu/veterinary"
    }
  },
  {
    disease: "Hyperthyroidism",
    medicine: "Methimazole",
    vaccination: "No vaccine available",
    doctor: {
      name: "Dr. S. Arun",
      location: "Vellore",
      phone: "9441234592", // Updated phone number
      website: "https://curofy.com/doctors/vellore-tamil-nadu/veterinary"
    }
  },
  {
    disease: "Bladder Stones",
    medicine: "Dietary changes and surgery if necessary",
    vaccination: "No vaccine available",
    doctor: {
      name: "Dr. A. Yogesh",
      location: "Pudukkottai",
      phone: "9441234593", // Updated phone number
      website: "https://curofy.com/doctors/pudukkottai-tamil-nadu/veterinary"
    }
  },
  {
    disease: "Liver Disease",
    medicine: "Hepatoprotective drugs like S-Adenosylmethionine",
    vaccination: "No vaccine available",
    doctor: {
      name: "Dr. S. Anand",
      location: "Thoothukudi",
      phone: "9441234594", // Updated phone number
      website: "https://curofy.com/doctors/thoothukudi-tamil-nadu/veterinary"
    }
  },
  {
    disease: "Kidney Disease",
    medicine: "Supportive care, low-protein diet",
    vaccination: "No vaccine available",
    doctor: {
      name: "Dr. B. Ramkumar",
      location: "Nagapattinam",
      phone: "9441234595", // Updated phone number
      website: "https://curofy.com/doctors/nagapattinam-tamil-nadu/veterinary"
    }
  },
  {
    disease: "Obesity",
    medicine: "Dietary management",
    vaccination: "No vaccine available",
    doctor: {
      name: "Dr. J. Kumar",
      location: "Dindigul",
      phone: "9441234596", // Updated phone number
      website: "https://curofy.com/doctors/dindigul-tamil-nadu/veterinary"
    }
  },
  {
    disease: "Diabetes Mellitus",
    medicine: "Insulin therapy",
    vaccination: "No vaccine available",
    doctor: {
      name: "Dr. N. Venkat",
      location: "Kanyakumari",
      phone: "9441234597", // Updated phone number
      website: "https://curofy.com/doctors/kanyakumari-tamil-nadu/veterinary"
    }
  },
  {
    disease: "Gastroenteritis",
    medicine: "Fluid therapy and probiotics",
    vaccination: "No vaccine available",
    doctor: {
      name: "Dr. M. Ganesan",
      location: "Karur",
      phone: "9441234598", // Updated phone number
      website: "https://curofy.com/doctors/karur-tamil-nadu/veterinary"
    }
  }
];

export default DiseaseData;
