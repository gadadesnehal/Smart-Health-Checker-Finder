/* =========================================================
   HEALTH CHECKER FINDER - COMPLETE SCRIPT.JS
   Existing design is controlled by HTML/CSS.
   This file controls language, symptoms, specialist guidance,
   location and ONE hospital recommendation.
========================================================= */


/* =========================================================
   TRANSLATIONS
========================================================= */

const translations = {

    en: {

        navHome: "Home",
        navSpecialist: "Find Specialist",
        navFacilities: "Nearby Facility",
        navAwareness: "Awareness",

        heroBadge: "Smart Healthcare Guidance",
        heroTitle: "Your Guide to Better Healthcare",

        heroText:
            "Select your symptoms and get guidance about the suitable specialist and a nearby healthcare facility.",

        findSpecialist: "Find Specialist",
        learnHealth: "Learn About Health",

        symptoms: "Symptoms",
        specialists: "Specialists",
        guidance: "Guidance",

        healthFirst: "Your Health Matters",
        healthFirstText:
            "Understand your symptoms. Find the right direction.",

        howTitle:
            "Healthcare guidance in 3 simple steps",

        howText:
            "A simple way to understand your symptoms and find suitable healthcare guidance.",

        step1Title: "Select Symptoms",
        step1Text:
            "Choose the symptoms you are experiencing.",

        step2Title:
            "Get Specialist Guidance",

        step2Text:
            "Get guidance about the suitable medical specialist.",

        step3Title:
            "Find Nearby Facility",

        step3Text:
            "Get one suitable nearby healthcare facility recommendation.",

        featureTitle:
            "Designed for simple healthcare guidance",

        feature1Title:
            "Symptom Guidance",

        feature1Text:
            "Select symptoms and receive general specialist guidance.",

        feature2Title:
            "Nearby Facility",

        feature2Text:
            "Use your location to find a suitable nearby facility.",

        feature3Title:
            "Smart Recommendation",

        feature3Text:
            "One recommendation helps reduce confusion between many options.",

        feature4Title:
            "Multiple Languages",

        feature4Text:
            "Use the website in English, Hindi or Marathi.",

        emergencyTitle:
            "Emergency Contacts",

        emergencyText:
            "For serious or emergency situations, contact the appropriate emergency service immediately.",

        emergency112: "Emergency",
        emergency108: "Ambulance",
        childHelpline: "Child Helpline",
        medicalHelpline: "Health Helpline",

        disclaimerTitle:
            "Important Disclaimer",

        disclaimerText:
            "This website provides general healthcare information and guidance only. It does not diagnose diseases or replace professional medical advice, diagnosis or treatment.",

        footerText:
            "General healthcare awareness and guidance platform.",

        specialistPageTitle:
            "Find the Right Specialist",

        specialistPageText:
            "Select the symptoms you are experiencing and get general guidance about a suitable medical specialist.",

        selectSymptoms:
            "Select Your Symptoms",

        selectSymptomsText:
            "You can select one or more symptoms.",

        selected: "Selected",

        guidanceNoteTitle:
            "Please remember",

        guidanceNoteText:
            "The suggested specialist is based only on the symptoms selected. It is general guidance and not a medical diagnosis.",

        facilityTitle:
            "Your Recommended Healthcare Facility",

        facilityText:
            "We use your location and the selected symptoms to suggest one suitable facility.",

        locationTitle:
            "Your Location",

        locationWaiting:
            "Location permission is required to find a nearby facility.",

        useLocation:
            "Use My Location",

        findingFacility:
            "Finding a suitable healthcare facility...",

        recommendationTitle:
            "How we recommend",

        recommendationText:
            "The system considers symptom-specialist match, hospital rating and distance to provide one recommendation instead of showing many confusing options.",

        awarenessTitle:
            "Learn. Prevent. Stay Healthy.",

        awarenessText:
            "Simple healthcare awareness information for everyday wellbeing.",

        awareness1Title:
            "Healthy Food",

        awareness1Text:
            "Include a variety of fruits, vegetables, grains and other nutritious foods in your regular diet.",

        awareness2Title:
            "Stay Hydrated",

        awareness2Text:
            "Drink enough water according to your daily needs and activity.",

        awareness3Title:
            "Physical Activity",

        awareness3Text:
            "Regular age-appropriate physical activity can support overall health and wellbeing.",

        awareness4Title:
            "Good Sleep",

        awareness4Text:
            "Maintain a regular sleep routine and give your body enough time to rest.",

        awareness5Title:
            "Regular Checkups",

        awareness5Text:
            "Follow appropriate health checkups and consult a qualified healthcare professional when needed.",

        awareness6Title:
            "Do Not Self-Diagnose",

        awareness6Text:
            "Online information can provide awareness, but diagnosis should be done by a qualified healthcare professional.",

        tipTitle:
            "Small healthy habits matter.",

        tipText:
            "Maintain balanced habits, pay attention to unusual symptoms and seek professional advice when required."
    },


    /* =====================================================
       HINDI
    ===================================================== */

    hi: {

        navHome: "होम",
        navSpecialist: "विशेषज्ञ खोजें",
        navFacilities: "नजदीकी सुविधा",
        navAwareness: "स्वास्थ्य जागरूकता",

        heroBadge:
            "स्मार्ट स्वास्थ्य मार्गदर्शन",

        heroTitle:
            "बेहतर स्वास्थ्य के लिए आपकी गाइड",

        heroText:
            "अपने लक्षण चुनें और उपयुक्त विशेषज्ञ तथा नजदीकी स्वास्थ्य सुविधा की जानकारी प्राप्त करें।",

        findSpecialist:
            "विशेषज्ञ खोजें",

        learnHealth:
            "स्वास्थ्य के बारे में जानें",

        symptoms: "लक्षण",
        specialists: "विशेषज्ञ",
        guidance: "मार्गदर्शन",

        healthFirst:
            "आपका स्वास्थ्य महत्वपूर्ण है",

        healthFirstText:
            "अपने लक्षण समझें और सही दिशा प्राप्त करें।",

        howTitle:
            "3 आसान चरणों में स्वास्थ्य मार्गदर्शन",

        howText:
            "अपने लक्षणों को समझने और उचित स्वास्थ्य मार्गदर्शन प्राप्त करने का आसान तरीका।",

        step1Title:
            "लक्षण चुनें",

        step1Text:
            "अपने अनुभव किए जा रहे लक्षण चुनें।",

        step2Title:
            "विशेषज्ञ मार्गदर्शन",

        step2Text:
            "उपयुक्त चिकित्सा विशेषज्ञ के बारे में सामान्य मार्गदर्शन प्राप्त करें।",

        step3Title:
            "नजदीकी सुविधा खोजें",

        step3Text:
            "एक उपयुक्त नजदीकी स्वास्थ्य सुविधा की सिफारिश प्राप्त करें।",

        featureTitle:
            "सरल स्वास्थ्य मार्गदर्शन के लिए बनाया गया",

        feature1Title:
            "लक्षण मार्गदर्शन",

        feature1Text:
            "लक्षण चुनें और विशेषज्ञ के बारे में सामान्य मार्गदर्शन प्राप्त करें।",

        feature2Title:
            "नजदीकी सुविधा",

        feature2Text:
            "उपयुक्त नजदीकी सुविधा खोजने के लिए अपने स्थान का उपयोग करें।",

        feature3Title:
            "स्मार्ट सिफारिश",

        feature3Text:
            "एक सिफारिश कई विकल्पों के बीच होने वाले भ्रम को कम करती है।",

        feature4Title:
            "कई भाषाएं",

        feature4Text:
            "वेबसाइट का उपयोग अंग्रेजी, हिंदी या मराठी में करें।",

        emergencyTitle:
            "आपातकालीन संपर्क",

        emergencyText:
            "गंभीर या आपातकालीन स्थिति में तुरंत उचित आपातकालीन सेवा से संपर्क करें।",

        emergency112:
            "आपातकाल",

        emergency108:
            "एम्बुलेंस",

        childHelpline:
            "बाल हेल्पलाइन",

        medicalHelpline:
            "स्वास्थ्य हेल्पलाइन",

        disclaimerTitle:
            "महत्वपूर्ण सूचना",

        disclaimerText:
            "यह वेबसाइट केवल सामान्य स्वास्थ्य जानकारी और मार्गदर्शन प्रदान करती है। यह बीमारी का निदान नहीं करती और डॉक्टर की सलाह, निदान या उपचार का विकल्प नहीं है।",

        footerText:
            "सामान्य स्वास्थ्य जागरूकता और मार्गदर्शन प्लेटफॉर्म।",

        specialistPageTitle:
            "सही विशेषज्ञ खोजें",

        specialistPageText:
            "अपने लक्षण चुनें और उपयुक्त चिकित्सा विशेषज्ञ के बारे में सामान्य मार्गदर्शन प्राप्त करें।",

        selectSymptoms:
            "अपने लक्षण चुनें",

        selectSymptomsText:
            "आप एक या अधिक लक्षण चुन सकते हैं।",

        selected:
            "चयनित",

        guidanceNoteTitle:
            "कृपया याद रखें",

        guidanceNoteText:
            "सुझाया गया विशेषज्ञ केवल आपके चुने हुए लक्षणों पर आधारित है। यह सामान्य मार्गदर्शन है, चिकित्सा निदान नहीं।",

        facilityTitle:
            "आपके लिए सुझाई गई स्वास्थ्य सुविधा",

        facilityText:
            "हम आपके स्थान और चुने गए लक्षणों के आधार पर एक उपयुक्त सुविधा की सिफारिश करते हैं।",

        locationTitle:
            "आपका स्थान",

        locationWaiting:
            "नजदीकी सुविधा खोजने के लिए स्थान की अनुमति आवश्यक है।",

        useLocation:
            "मेरा स्थान उपयोग करें",

        findingFacility:
            "उपयुक्त स्वास्थ्य सुविधा खोजी जा रही है...",

        recommendationTitle:
            "हम कैसे सिफारिश करते हैं",

        recommendationText:
            "सिस्टम लक्षण-विशेषज्ञ मिलान, अस्पताल की रेटिंग और दूरी को ध्यान में रखकर एक सिफारिश देता है।",

        awarenessTitle:
            "जानें। बचाव करें। स्वस्थ रहें।",

        awarenessText:
            "दैनिक स्वास्थ्य के लिए सरल स्वास्थ्य जागरूकता जानकारी।",

        awareness1Title:
            "स्वस्थ भोजन",

        awareness1Text:
            "अपने नियमित आहार में फल, सब्जियां, अनाज और अन्य पौष्टिक खाद्य पदार्थ शामिल करें।",

        awareness2Title:
            "पर्याप्त पानी",

        awareness2Text:
            "अपनी दैनिक जरूरत और गतिविधि के अनुसार पर्याप्त पानी पिएं।",

        awareness3Title:
            "शारीरिक गतिविधि",

        awareness3Text:
            "उम्र के अनुसार नियमित शारीरिक गतिविधि स्वास्थ्य और सामान्य wellbeing में सहायता कर सकती है।",

        awareness4Title:
            "अच्छी नींद",

        awareness4Text:
            "नियमित नींद का समय रखें और शरीर को पर्याप्त आराम दें।",

        awareness5Title:
            "नियमित जांच",

        awareness5Text:
            "उचित स्वास्थ्य जांच करवाएं और आवश्यकता होने पर योग्य स्वास्थ्य विशेषज्ञ से सलाह लें।",

        awareness6Title:
            "खुद से निदान न करें",

        awareness6Text:
            "ऑनलाइन जानकारी जागरूकता के लिए उपयोगी हो सकती है, लेकिन निदान योग्य स्वास्थ्य विशेषज्ञ द्वारा किया जाना चाहिए।",

        tipTitle:
            "छोटी स्वस्थ आदतें महत्वपूर्ण हैं।",

        tipText:
            "संतुलित आदतें बनाए रखें, असामान्य लक्षणों पर ध्यान दें और आवश्यकता होने पर विशेषज्ञ की सलाह लें।"
    },


    /* =====================================================
       MARATHI
    ===================================================== */

    mr: {

        navHome: "होम",
        navSpecialist: "तज्ज्ञ शोधा",
        navFacilities: "जवळची सुविधा",
        navAwareness: "आरोग्य जागरूकता",

        heroBadge:
            "स्मार्ट आरोग्य मार्गदर्शन",

        heroTitle:
            "चांगल्या आरोग्यासाठी तुमचा मार्गदर्शक",

        heroText:
            "तुमची लक्षणे निवडा आणि योग्य तज्ज्ञ तसेच जवळच्या आरोग्य सुविधेचे मार्गदर्शन मिळवा.",

        findSpecialist:
            "तज्ज्ञ शोधा",

        learnHealth:
            "आरोग्याबद्दल जाणून घ्या",

        symptoms: "लक्षणे",
        specialists: "तज्ज्ञ",
        guidance: "मार्गदर्शन",

        healthFirst:
            "तुमचे आरोग्य महत्त्वाचे आहे",

        healthFirstText:
            "तुमची लक्षणे समजून घ्या आणि योग्य मार्गदर्शन मिळवा.",

        howTitle:
            "3 सोप्या टप्प्यांमध्ये आरोग्य मार्गदर्शन",

        howText:
            "तुमची लक्षणे समजून घेण्यासाठी आणि योग्य आरोग्य मार्गदर्शन मिळवण्यासाठी सोपा मार्ग.",

        step1Title:
            "लक्षणे निवडा",

        step1Text:
            "तुम्हाला जाणवत असलेली लक्षणे निवडा.",

        step2Title:
            "तज्ज्ञ मार्गदर्शन",

        step2Text:
            "योग्य वैद्यकीय तज्ज्ञाबद्दल सामान्य मार्गदर्शन मिळवा.",

        step3Title:
            "जवळची सुविधा शोधा",

        step3Text:
            "एक योग्य जवळची आरोग्य सुविधा सुचवली जाईल.",

        featureTitle:
            "सोप्या आरोग्य मार्गदर्शनासाठी तयार केलेले",

        feature1Title:
            "लक्षण मार्गदर्शन",

        feature1Text:
            "लक्षणे निवडा आणि योग्य तज्ज्ञाबद्दल मार्गदर्शन मिळवा.",

        feature2Title:
            "जवळची सुविधा",

        feature2Text:
            "जवळची योग्य सुविधा शोधण्यासाठी तुमचे स्थान वापरा.",

        feature3Title:
            "स्मार्ट शिफारस",

        feature3Text:
            "अनेक पर्यायांमुळे होणारा गोंधळ कमी करण्यासाठी एक शिफारस दिली जाते.",

        feature4Title:
            "अनेक भाषा",

        feature4Text:
            "वेबसाइट इंग्रजी, हिंदी किंवा मराठीमध्ये वापरा.",

        emergencyTitle:
            "आपत्कालीन संपर्क",

        emergencyText:
            "गंभीर किंवा आपत्कालीन परिस्थितीत त्वरित योग्य आपत्कालीन सेवेशी संपर्क साधा.",

        emergency112:
            "आपत्कालीन सेवा",

        emergency108:
            "रुग्णवाहिका",

        childHelpline:
            "बाल हेल्पलाइन",

        medicalHelpline:
            "आरोग्य हेल्पलाइन",

        disclaimerTitle:
            "महत्त्वाची सूचना",

        disclaimerText:
            "ही वेबसाइट फक्त सामान्य आरोग्य माहिती आणि मार्गदर्शन देते. ती कोणत्याही आजाराचे निदान करत नाही आणि डॉक्टरांच्या सल्ल्याचा किंवा उपचाराचा पर्याय नाही.",

        footerText:
            "सामान्य आरोग्य जागरूकता आणि मार्गदर्शन प्लॅटफॉर्म.",

        specialistPageTitle:
            "योग्य तज्ज्ञ शोधा",

        specialistPageText:
            "तुमची लक्षणे निवडा आणि योग्य वैद्यकीय तज्ज्ञाबद्दल सामान्य मार्गदर्शन मिळवा.",

        selectSymptoms:
            "तुमची लक्षणे निवडा",

        selectSymptomsText:
            "तुम्ही एक किंवा अधिक लक्षणे निवडू शकता.",

        selected:
            "निवडले",

        guidanceNoteTitle:
            "कृपया लक्षात ठेवा",

        guidanceNoteText:
            "सुचवलेला तज्ज्ञ फक्त तुम्ही निवडलेल्या लक्षणांवर आधारित आहे. हे सामान्य मार्गदर्शन आहे, वैद्यकीय निदान नाही.",

        facilityTitle:
            "तुमच्यासाठी सुचवलेली आरोग्य सुविधा",

        facilityText:
            "तुमचे स्थान आणि निवडलेल्या लक्षणांच्या आधारावर एक योग्य सुविधा सुचवली जाते.",

        locationTitle:
            "तुमचे स्थान",

        locationWaiting:
            "जवळची सुविधा शोधण्यासाठी स्थानाची परवानगी आवश्यक आहे.",

        useLocation:
            "माझे स्थान वापरा",

        findingFacility:
            "योग्य आरोग्य सुविधा शोधत आहे...",

        recommendationTitle:
            "आम्ही कशी शिफारस करतो",

        recommendationText:
            "सिस्टम लक्षण-तज्ज्ञ जुळणी, रेटिंग आणि अंतर लक्षात घेऊन एक शिफारस देते.",

        awarenessTitle:
            "जाणून घ्या. प्रतिबंध करा. निरोगी राहा.",

        awarenessText:
            "दररोजच्या आरोग्यासाठी सोपी आरोग्य जागरूकता माहिती.",

        awareness1Title:
            "निरोगी आहार",

        awareness1Text:
            "तुमच्या नियमित आहारात फळे, भाज्या, धान्य आणि इतर पौष्टिक पदार्थांचा समावेश करा.",

        awareness2Title:
            "पुरेसे पाणी",

        awareness2Text:
            "तुमच्या दैनंदिन गरजेनुसार आणि हालचालीनुसार पुरेसे पाणी प्या.",

        awareness3Title:
            "शारीरिक हालचाल",

        awareness3Text:
            "वयानुसार नियमित शारीरिक हालचाल आरोग्य आणि सामान्य wellbeing साठी उपयुक्त ठरू शकते.",

        awareness4Title:
            "चांगली झोप",

        awareness4Text:
            "नियमित झोपेची वेळ ठेवा आणि शरीराला पुरेशी विश्रांती द्या.",

        awareness5Title:
            "नियमित तपासणी",

        awareness5Text:
            "योग्य आरोग्य तपासणी करा आणि गरज असल्यास पात्र आरोग्य तज्ज्ञांचा सल्ला घ्या.",

        awareness6Title:
            "स्वतः निदान करू नका",

        awareness6Text:
            "ऑनलाइन माहिती जागरूकतेसाठी उपयुक्त असू शकते, परंतु निदान पात्र आरोग्य तज्ज्ञाने करावे.",

        tipTitle:
            "लहान आरोग्यदायी सवयी महत्त्वाच्या आहेत.",

        tipText:
            "संतुलित सवयी ठेवा, असामान्य लक्षणांकडे लक्ष द्या आणि गरज असल्यास तज्ज्ञांचा सल्ला घ्या."
    }
};


/* =========================================================
   SYMPTOMS
========================================================= */

const symptoms = [

    {
        id: "fever",
        name: {
            en: "Fever",
            hi: "बुखार",
            mr: "ताप"
        }
    },

    {
        id: "headache",
        name: {
            en: "Headache",
            hi: "सिरदर्द",
            mr: "डोकेदुखी"
        }
    },

    {
        id: "fatigue",
        name: {
            en: "Fatigue",
            hi: "थकान",
            mr: "थकवा"
        }
    },

    {
        id: "weakness",
        name: {
            en: "Weakness",
            hi: "कमजोरी",
            mr: "अशक्तपणा"
        }
    },

    {
        id: "body-pain",
        name: {
            en: "Body Pain",
            hi: "शरीर में दर्द",
            mr: "अंगदुखी"
        }
    },

    {
        id: "dizziness",
        name: {
            en: "Dizziness",
            hi: "चक्कर",
            mr: "चक्कर येणे"
        }
    },

    {
        id: "cough",
        name: {
            en: "Cough",
            hi: "खांसी",
            mr: "खोकला"
        }
    },

    {
        id: "cold",
        name: {
            en: "Cold",
            hi: "सर्दी",
            mr: "सर्दी"
        }
    },

    {
        id: "sore-throat",
        name: {
            en: "Sore Throat",
            hi: "गले में खराश",
            mr: "घसा दुखणे"
        }
    },

    {
        id: "runny-nose",
        name: {
            en: "Runny Nose",
            hi: "नाक बहना",
            mr: "नाक वाहणे"
        }
    },

    {
        id: "blocked-nose",
        name: {
            en: "Blocked Nose",
            hi: "नाक बंद होना",
            mr: "नाक बंद होणे"
        }
    },

    {
        id: "breathing-difficulty",
        name: {
            en: "Breathing Difficulty",
            hi: "सांस लेने में कठिनाई",
            mr: "श्वास घेण्यास त्रास"
        }
    },

    {
        id: "wheezing",
        name: {
            en: "Wheezing",
            hi: "सांस में सीटी",
            mr: "श्वास घेताना आवाज"
        }
    },

    {
        id: "stomach-pain",
        name: {
            en: "Stomach Pain",
            hi: "पेट दर्द",
            mr: "पोटदुखी"
        }
    },

    {
        id: "nausea",
        name: {
            en: "Nausea",
            hi: "जी मिचलाना",
            mr: "मळमळ"
        }
    },

    {
        id: "vomiting",
        name: {
            en: "Vomiting",
            hi: "उल्टी",
            mr: "उलटी"
        }
    },

    {
        id: "constipation",
        name: {
            en: "Constipation",
            hi: "कब्ज",
            mr: "बद्धकोष्ठता"
        }
    },

    {
        id: "diarrhea",
        name: {
            en: "Diarrhea",
            hi: "दस्त",
            mr: "जुलाब"
        }
    },

    {
        id: "skin-rash",
        name: {
            en: "Skin Rash",
            hi: "त्वचा पर चकत्ते",
            mr: "त्वचेवर पुरळ"
        }
    },

    {
        id: "itching",
        name: {
            en: "Itching",
            hi: "खुजली",
            mr: "खाज"
        }
    },

    {
        id: "acne",
        name: {
            en: "Acne",
            hi: "मुंहासे",
            mr: "मुरुम"
        }
    },

    {
        id: "joint-pain",
        name: {
            en: "Joint Pain",
            hi: "जोड़ों का दर्द",
            mr: "सांधेदुखी"
        }
    },

    {
        id: "back-pain",
        name: {
            en: "Back Pain",
            hi: "कमर दर्द",
            mr: "पाठदुखी"
        }
    },

    {
        id: "knee-pain",
        name: {
            en: "Knee Pain",
            hi: "घुटने का दर्द",
            mr: "गुडघेदुखी"
        }
    },

    {
        id: "toothache",
        name: {
            en: "Toothache",
            hi: "दांत दर्द",
            mr: "दातदुखी"
        }
    },

    {
        id: "gum-pain",
        name: {
            en: "Gum Pain",
            hi: "मसूड़ों में दर्द",
            mr: "हिरड्यांमध्ये दुखणे"
        }
    },

    {
        id: "tooth-sensitivity",
        name: {
            en: "Tooth Sensitivity",
            hi: "दांतों में संवेदनशीलता",
            mr: "दातांची संवेदनशीलता"
        }
    }
];


/* =========================================================
   SPECIALIST INFORMATION
========================================================= */

const specialistInfo = {

    "General Physician": {
        en: "General Physician",
        hi: "सामान्य चिकित्सक",
        mr: "सामान्य वैद्य"
    },

    "ENT Specialist": {
        en: "ENT Specialist",
        hi: "ईएनटी विशेषज्ञ",
        mr: "कान-नाक-घसा तज्ज्ञ"
    },

    "Pulmonologist": {
        en: "Pulmonologist",
        hi: "फेफड़ों के विशेषज्ञ",
        mr: "फुफ्फुस तज्ज्ञ"
    },

    "Cardiologist": {
        en: "Cardiologist",
        hi: "हृदय रोग विशेषज्ञ",
        mr: "हृदयरोग तज्ज्ञ"
    },

    "Gastroenterologist": {
        en: "Gastroenterologist",
        hi: "पाचन तंत्र विशेषज्ञ",
        mr: "पचनसंस्था तज्ज्ञ"
    },

    "Dermatologist": {
        en: "Dermatologist",
        hi: "त्वचा विशेषज्ञ",
        mr: "त्वचारोग तज्ज्ञ"
    },

    "Orthopedic Specialist": {
        en: "Orthopedic Specialist",
        hi: "हड्डी एवं जोड़ विशेषज्ञ",
        mr: "अस्थिरोग तज्ज्ञ"
    },

    "Dentist": {
        en: "Dentist",
        hi: "दंत चिकित्सक",
        mr: "दंतचिकित्सक"
    },

    "Neurologist": {
        en: "Neurologist",
        hi: "न्यूरोलॉजिस्ट",
        mr: "न्यूरोलॉजिस्ट"
    },

    "Ophthalmologist": {
        en: "Ophthalmologist",
        hi: "नेत्र विशेषज्ञ",
        mr: "नेत्रतज्ज्ञ"
    },

    "Pediatrician": {
        en: "Pediatrician",
        hi: "बाल रोग विशेषज्ञ",
        mr: "बालरोग तज्ज्ञ"
    },

    "Gynecologist": {
        en: "Gynecologist",
        hi: "स्त्री रोग विशेषज्ञ",
        mr: "स्त्रीरोग तज्ज्ञ"
    }
};


/* =========================================================
   SYMPTOM -> SPECIALIST MAPPING
========================================================= */

const symptomSpecialists = {

    fever: [
        "General Physician"
    ],

    headache: [
        "General Physician",
        "Neurologist"
    ],

    fatigue: [
        "General Physician"
    ],

    weakness: [
        "General Physician"
    ],

    "body-pain": [
        "General Physician"
    ],

    dizziness: [
        "General Physician",
        "Neurologist"
    ],

    cough: [
        "General Physician"
    ],

    cold: [
        "General Physician",
        "ENT Specialist"
    ],

    "sore-throat": [
        "ENT Specialist",
        "General Physician"
    ],

    "runny-nose": [
        "ENT Specialist",
        "General Physician"
    ],

    "blocked-nose": [
        "ENT Specialist"
    ],

    "breathing-difficulty": [
        "Pulmonologist"
    ],

    wheezing: [
        "Pulmonologist"
    ],

    "stomach-pain": [
        "Gastroenterologist"
    ],

    nausea: [
        "Gastroenterologist"
    ],

    vomiting: [
        "Gastroenterologist"
    ],

    constipation: [
        "Gastroenterologist"
    ],

    diarrhea: [
        "Gastroenterologist"
    ],

    "skin-rash": [
        "Dermatologist"
    ],

    itching: [
        "Dermatologist"
    ],

    acne: [
        "Dermatologist"
    ],

    "joint-pain": [
        "Orthopedic Specialist"
    ],

    "back-pain": [
        "Orthopedic Specialist"
    ],

    "knee-pain": [
        "Orthopedic Specialist"
    ],

    toothache: [
        "Dentist"
    ],

    "gum-pain": [
        "Dentist"
    ],

    "tooth-sensitivity": [
        "Dentist"
    ]
};


/* =========================================================
   CATEGORY MAPPING
========================================================= */

const symptomCategories = {

    all: symptoms.map(
        symptom => symptom.id
    ),

    general: [
        "fever",
        "headache",
        "fatigue",
        "weakness",
        "body-pain",
        "dizziness"
    ],

    respiratory: [
        "cough",
        "cold",
        "sore-throat",
        "runny-nose",
        "blocked-nose",
        "breathing-difficulty",
        "wheezing"
    ],

    digestive: [
        "stomach-pain",
        "nausea",
        "vomiting",
        "constipation",
        "diarrhea"
    ],

    skin: [
        "skin-rash",
        "itching",
        "acne"
    ],

    bones: [
        "joint-pain",
        "back-pain",
        "knee-pain"
    ],

    dental: [
        "toothache",
        "gum-pain",
        "tooth-sensitivity"
    ]
};


/* =========================================================
   HOSPITAL DATA
========================================================= */

const hospitals = [
   
     {
        name: "Samarth Clinic Hinjewadi ",
        city: "Pune",
        lat: 17.5919,
        lng: 73.7390,
        rating: 4.9,
        doctor: "Dr. Sachin Shivnitwar",
        phone: "9272122292",
        specialist: "General Physician"
    },
    {
        name: "CityCare General Hospital - Pune",
        city: "Pune",
        lat: 18.5204,
        lng: 73.8567,
        rating: 4.8,
        doctor: "Dr. Aarav Patil",
        phone: "9890588303",
        specialist: "General Physician"
    },

    {
        name: "HealthPlus Dental Care - Pune",
        city: "Pune",
        lat: 18.5314,
        lng: 73.8446,
        rating: 4.9,
        doctor: "Dr. Riya Joshi",
        phone: "8460401655",
        specialist: "Dentist"
    },

    {
        name: "CarePoint ENT Centre - Pune",
        city: "Pune",
        lat: 18.5074,
        lng: 73.8077,
        rating: 4.7,
        doctor: "Dr. Neha Kulkarni",
        phone: "8484989782",
        specialist: "ENT Specialist"
    },

    {
        name: "Respiratory Care Hospital - Pune",
        city: "Pune",
        lat: 18.5000,
        lng: 73.9200,
        rating: 4.6,
        doctor: "Dr. Meera Deshmukh",
        phone: "9175333566",
        specialist: "Pulmonologist"
    },

    {
        name: "HeartCare Centre - Pune",
        city: "Pune",
        lat: 18.4900,
        lng: 73.8300,
        rating: 4.9,
        doctor: "Dr. Karan Mehta",
        phone: "9822399108",
        specialist: "Cardiologist"
    },

    {
        name: "Digestive Care Hospital - Pune",
        city: "Pune",
        lat: 18.5800,
        lng: 73.8100,
        rating: 4.7,
        doctor: "Dr. Priya Nair",
        phone: "9881123006",
        specialist: "Gastroenterologist"
    },

    {
        name: "SkinCare Clinic - Pune",
        city: "Pune",
        lat: 18.5150,
        lng: 73.8500,
        rating: 4.8,
        doctor: "Dr. Isha More",
        phone: "8552906319",
        specialist: "Dermatologist"
    },

    {
        name: "BoneCare Hospital - Pune",
        city: "Pune",
        lat: 18.5300,
        lng: 73.8700,
        rating: 4.7,
        doctor: "Dr. Rahul Jadhav",
        phone: "8888788880",
        specialist: "Orthopedic Specialist"
    },

    {
        name: "VisionCare Eye Hospital - Pune",
        city: "Pune",
        lat: 18.5350,
        lng: 73.8500,
        rating: 4.8,
        doctor: "Dr. Sneha Rao",
        phone: "9156170951",
        specialist: "Ophthalmologist"
    },

    {
        name: "ChildCare Hospital - Pune",
        city: "Pune",
        lat: 18.5100,
        lng: 73.8600,
        rating: 4.9,
        doctor: "Dr. Ananya Joshi",
        phone: "9053108108",
        specialist: "Pediatrician"
    },

    {
        name: "Women's Care Centre - Pune",
        city: "Pune",
        lat: 18.5400,
        lng: 73.8200,
        rating: 4.8,
        doctor: "Dr. Kavita Patil",
        phone: "7507890909",
        specialist: "Gynecologist"
    },

    {
        name: "Ruby Hall Clinic - Hinjawadi",
        city: "Pune",
        lat: 18.591,
        lng: 73.737,
        rating: 3.8,
        doctor: "Dr. Swaraj Sathe",
        phone: "020-6699-9999",
        specialist: "Orthopedic Surgeon"
    },

    {
        name: "LifeTree Hospital Pune",
        city: "Pune",
        lat: 18.598,
        lng: 73.738,
        rating: 4.5,
        doctor: "Dr. Amol L. Dange",
        phone: "08530220401",
        specialist: "Internal Medicine / Diabetology"
    },

    {
        name: "Sanjeevani Multispeciality Hospital Pune",
        city: "Pune",
        lat: 18.591370,
        lng: 73.739603,
        rating: 4.1,
        doctor: "Dr. Swapnil Birajdar",
        phone: "09970716568",
        specialist: "General Physician / Intensive Care"
    },

    {
        name: "Hinjawadi Superspeciality Hospital - Advanced ICU & Multispeciality Care, Pune",
        city: "Pune",
        lat: 18.598,
        lng: 73.735,
        rating: 4.7,
        doctor: "Dr. Ankit Khanna",
        phone: "07263041111",
        specialist: "Dental"
    },

    {
        name: "Akshaya Hospital MOTHER & CHILD CARE HOSPITAL Pune",
        city: "Pune",
        lat: 18.591,
        lng: 73.739,
        rating: 4.5,
        doctor: "",
        phone: "08149396005",
        specialist: "Mother & Child Care"
    },

    {
        name: "MEDURAA MULTISPECIALITY HOSPITAL Pune",
        city: "Pune",
        lat: 18.596,
        lng: 73.737,
        rating: 4.2,
        doctor: "",
        phone: "09112012012",
        specialist: "Multispeciality"
    },

    {
        name: "Pentagon Hospital - Multispeciality Hospital in Wakad Pune",
        city: "Pune",
        lat: 18.5990,
        lng: 73.7650,
        rating: 4.7,
        doctor: "",
        phone: "9607260202",
        specialist: "General Physician"
    },

    {
        name: "Asian Pacific Superspeciality Hospital & Research Center - Hinjewadi Pune",
        city: "Pune",
        lat: 18.5920,
        lng: 73.7340,
        rating: 4.7,
        doctor: "",
        phone: "9090022033",
        specialist: "General Physician"
    },

    {
        name: "Ashirwad Accident And General Hospital Pune",
        city: "Pune",
        lat: 18.5940,
        lng: 73.7500,
        rating: 4.8,
        doctor: "",
        phone: "9226395098",
        specialist: "General Physician"
    },

    

    {
        name: "Dr. Ranjeet Hospital Pune",
        city: "Pune",
        lat: 18.5950,
        lng: 73.7340,
        rating: 4.3,
        doctor: "",
        phone: "9762818734",
        specialist: "General Physician"
    },

    {
        name: "Kaushalya Hospital Pune",
        city: "Pune",
        lat: 18.5920,
        lng: 73.7350,
        rating: 4.7,
        doctor: "",
        phone: "8329667895",
        specialist: "General Physician"
    },

    {
        name: "Dr Chaudhari's Shree Hospital Pune",
        city: "Pune",
        lat: 18.5950,
        lng: 73.7350,
        rating: 4.8,
        doctor: "",
        phone: "7709361706",
        specialist: "General Physician"
    },

    {
        name: "CityCare General Hospital - Ahilyanagar",
        city: "Ahilyanagar",
        lat: 19.0948,
        lng: 74.7480,
        rating: 4.8,
        doctor: "Dr. Amit Deshmukh",
        phone: "0241 232 9105",
        specialist: "General Physician"
    },

    {
        name: "SmileCare Dental Centre - Ahilyanagar",
        city: "Ahilyanagar",
        lat: 19.1000,
        lng: 74.7400,
        rating: 4.7,
        doctor: "Dr. Pooja More",
        phone: "9881030603",
        specialist: "Dentist"
    },

    {
        name: "ENT Care Centre - Ahilyanagar",
        city: "Ahilyanagar",
        lat: 19.0800,
        lng: 74.7600,
        rating: 4.6,
        doctor: "Dr. Nikhil Pawar",
        phone: "9837464546",
        specialist: "ENT Specialist"
    },

    {
        name: "BoneCare Hospital - Ahilyanagar",
        city: "Ahilyanagar",
        lat: 19.1100,
        lng: 74.7300,
        rating: 4.7,
        doctor: "Dr. Sameer Kale",
        phone: "9073647483",
        specialist: "Orthopedic Specialist"
    }
];


/* =========================================================
   GLOBAL VARIABLES
========================================================= */

let currentLanguage =
    localStorage.getItem("language") || "en";

let selectedSymptoms = [];

let lastUserLocation = null;


/* =========================================================
   LANGUAGE SETUP
========================================================= */

function setupLanguage() {

    const select =
        document.querySelector(
            "#languageSelect"
        );

    if (!select) return;


    select.value =
        currentLanguage;


    select.addEventListener(
        "change",
        function () {

            currentLanguage =
                this.value;


            localStorage.setItem(
                "language",
                currentLanguage
            );


            applyTranslations();


            /*
               Re-render symptoms after
               language change.
            */

            if (
                document.querySelector(
                    "#symptomsGrid"
                )
            ) {

                const activeCategory =
                    document.querySelector(
                        ".category-btn.active"
                    );


                renderSymptoms(
                    activeCategory
                        ? activeCategory.getAttribute(
                            "data-category"
                        )
                        : "all"
                );

            }


            /*
               Re-render recommendation
               after language change.
            */

            if (
                document.querySelector(
                    "#facilitiesContainer"
                )
            ) {

                if (lastUserLocation) {

                    showRecommendedHospital(
                        lastUserLocation.lat,
                        lastUserLocation.lng
                    );

                } else if (
                    localStorage.getItem(
                        "selectedSpecialists"
                    )
                ) {

                    showWithoutLocation();

                }

            }

        }
    );

}


/* =========================================================
   APPLY TRANSLATIONS
========================================================= */

function applyTranslations() {

    const elements =
        document.querySelectorAll(
            "[data-i18n]"
        );


    elements.forEach(
        element => {

            const key =
                element.getAttribute(
                    "data-i18n"
                );


            if (
                translations[currentLanguage] &&
                translations[currentLanguage][key] !==
                    undefined
            ) {

                element.textContent =
                    translations[
                        currentLanguage
                    ][key];

            }

        }
    );

}


/* =========================================================
   INITIALIZE SPECIALIST PAGE
========================================================= */

function initializeSpecialistPage() {

    const grid =
        document.querySelector(
            "#symptomsGrid"
        );


    if (!grid) return;


    /*
       Clear previous selection when
       opening specialist page.
    */

    selectedSymptoms = [];


    localStorage.removeItem(
        "selectedSymptoms"
    );

    localStorage.removeItem(
        "selectedSpecialists"
    );


    renderSymptoms(
        "all"
    );


    setupSymptomCategories();


    updateSelectedCount();


    const findButton =
        document.querySelector(
            "#findSpecialistBtn"
        );


    if (findButton) {

        findButton.addEventListener(
            "click",
            handleFindSpecialist
        );

    }

}


/* =========================================================
   RENDER SYMPTOMS
========================================================= */

function renderSymptoms(
    category = "all"
) {

    const grid =
        document.querySelector(
            "#symptomsGrid"
        );


    if (!grid) return;


    const ids =
        symptomCategories[
            category
        ] ||
        symptomCategories.all;


    const filteredSymptoms =
        symptoms.filter(
            symptom =>
                ids.includes(
                    symptom.id
                )
        );


    grid.innerHTML = "";


    filteredSymptoms.forEach(
        symptom => {

            const label =
                document.createElement(
                    "label"
                );


            label.className =
                "symptom-item";


            const checkbox =
                document.createElement(
                    "input"
                );


            checkbox.type =
                "checkbox";


            checkbox.value =
                symptom.id;


            checkbox.checked =
                selectedSymptoms.includes(
                    symptom.id
                );


            checkbox.addEventListener(
                "change",
                function () {

                    if (
                        this.checked
                    ) {

                        if (
                            !selectedSymptoms.includes(
                                symptom.id
                            )
                        ) {

                            selectedSymptoms.push(
                                symptom.id
                            );

                        }

                    } else {

                        selectedSymptoms =
                            selectedSymptoms.filter(
                                id =>
                                    id !==
                                    symptom.id
                            );

                    }


                    localStorage.setItem(
                        "selectedSymptoms",
                        JSON.stringify(
                            selectedSymptoms
                        )
                    );


                    updateSelectedCount();

                }
            );


            const text =
                document.createElement(
                    "span"
                );


            text.textContent =
                symptom.name[
                    currentLanguage
                ];


            label.appendChild(
                checkbox
            );


            label.appendChild(
                text
            );


            grid.appendChild(
                label
            );

        }
    );


    updateSelectedCount();

}


/* =========================================================
   CATEGORY BUTTONS
========================================================= */

function setupSymptomCategories() {

    const buttons =
        document.querySelectorAll(
            ".category-btn"
        );


    if (!buttons.length) return;


    buttons.forEach(
        button => {

            button.addEventListener(
                "click",
                function () {

                    buttons.forEach(
                        btn =>
                            btn.classList.remove(
                                "active"
                            )
                    );


                    this.classList.add(
                        "active"
                    );


                    const category =
                        this.getAttribute(
                            "data-category"
                        );


                    renderSymptoms(
                        category ||
                        "all"
                    );

                }
            );

        }
    );

}


/* =========================================================
   SELECTED COUNT
========================================================= */

function updateSelectedCount() {

    const counter =
        document.querySelector(
            "#selectedCount"
        );


    if (counter) {

        counter.textContent =
            selectedSymptoms.length;

    }

}


/* =========================================================
   FIND SPECIALIST
========================================================= */

function handleFindSpecialist() {

    if (
        !selectedSymptoms.length
    ) {

        alert(

            currentLanguage === "hi"

                ? "कृपया कम से कम एक लक्षण चुनें।"

                : currentLanguage === "mr"

                    ? "कृपया किमान एक लक्षण निवडा."

                    : "Please select at least one symptom."

        );

        return;

    }


    const specialistScores = {};


    selectedSymptoms.forEach(
        symptomId => {

            const specialists =
                symptomSpecialists[
                    symptomId
                ] || [];


            specialists.forEach(
                specialist => {

                    if (
                        !specialistScores[
                            specialist
                        ]
                    ) {

                        specialistScores[
                            specialist
                        ] = 0;

                    }


                    specialistScores[
                        specialist
                    ] += 1;

                }
            );

        }
    );


    const sorted =
        Object.entries(
            specialistScores
        ).sort(
            (a, b) =>
                b[1] - a[1]
        );


    const recommendedSpecialists =
        sorted.map(
            item =>
                item[0]
        );


    localStorage.setItem(
        "selectedSymptoms",
        JSON.stringify(
            selectedSymptoms
        )
    );


    localStorage.setItem(
        "selectedSpecialists",
        JSON.stringify(
            recommendedSpecialists
        )
    );


    window.location.href =
        "facilities.html";

}


/* =========================================================
   DISTANCE CALCULATION
========================================================= */

function calculateDistance(
    lat1,
    lon1,
    lat2,
    lon2
) {

    const R =
        6371;


    const dLat =
        (lat2 - lat1) *
        Math.PI /
        180;


    const dLon =
        (lon2 - lon1) *
        Math.PI /
        180;


    const a =
        Math.sin(
            dLat / 2
        ) *
        Math.sin(
            dLat / 2
        ) +

        Math.cos(
            lat1 *
            Math.PI /
            180
        ) *

        Math.cos(
            lat2 *
            Math.PI /
            180
        ) *

        Math.sin(
            dLon / 2
        ) *
        Math.sin(
            dLon / 2
        );


    const c =
        2 *
        Math.atan2(
            Math.sqrt(a),
            Math.sqrt(1 - a)
        );


    return R * c;

}


/* =========================================================
   RATING CONVERSION
========================================================= */

function getNumericRating(
    value
) {

    if (
        typeof value ===
        "number"
    ) {

        return value;

    }


    const match =
        String(
            value || ""
        )
            .replace(
                /,/g,
                ""
            )
            .match(
                /\d+(?:\.\d+)?/
            );


    return match
        ? Number(
            match[0]
        )
        : 0;

}


/* =========================================================
   HOSPITAL SPECIALIST MATCHING
========================================================= */

function hospitalMatchesSpecialist(
    hospital,
    specialist
) {

    const hospitalText =
        String(
            hospital.specialist ||
            ""
        )
            .toLowerCase()
            .trim();


    const required =
        String(
            specialist ||
            ""
        )
            .toLowerCase()
            .trim();


    if (
        !hospitalText ||
        !required
    ) {

        return false;

    }


    /*
       Direct match
    */

    if (
        hospitalText.includes(
            required
        )
    ) {

        return true;

    }


    /*
       Alias matching
    */

    const aliases = {

        "general physician": [
            "general physician",
            "internal medicine",
            "general medicine",
            "physician",
            "diabetology",
            "intensive care"
        ],

        "dentist": [
            "dentist",
            "dental"
        ],

        "orthopedic specialist": [
            "orthopedic",
            "orthopaedic",
            "orthopedic surgeon",
            "orthopaedic surgeon"
        ],

        "ent specialist": [
            "ent",
            "ear nose throat",
            "otolaryng"
        ],

        "pulmonologist": [
            "pulmonologist",
            "pulmonary",
            "respiratory"
        ],

        "cardiologist": [
            "cardiologist",
            "cardiac",
            "heart"
        ],

        "gastroenterologist": [
            "gastroenterologist",
            "gastro",
            "digestive"
        ],

        "dermatologist": [
            "dermatologist",
            "dermatology",
            "skin"
        ],

        "neurologist": [
            "neurologist",
            "neurology",
            "neuro"
        ],

        "ophthalmologist": [
            "ophthalmologist",
            "ophthalmology",
            "eye"
        ],

        "pediatrician": [
            "pediatrician",
            "paediatrician",
            "child",
            "mother & child"
        ],

        "gynecologist": [
            "gynecologist",
            "gynaecologist",
            "women"
        ]

    };


    const possibleMatches =
        aliases[
            required
        ] ||
        [required];


    return possibleMatches.some(
        keyword =>
            hospitalText.includes(
                keyword
            )
    );

}


/* =========================================================
   FIND ONE BEST HOSPITAL
========================================================= */

function findBestHospital(
    userLat,
    userLng,
    specialists
) {

    const matchedHospitals =

        hospitals

            .filter(
                hospital =>

                    specialists.some(
                        specialist =>

                            hospitalMatchesSpecialist(
                                hospital,
                                specialist
                            )

                    )

            )

            .map(
                hospital => {

                    const distance =
                        calculateDistance(
                            userLat,
                            userLng,
                            hospital.lat,
                            hospital.lng
                        );


                    return {

                        ...hospital,

                        numericRating:
                            getNumericRating(
                                hospital.rating
                            ),

                        distance:
                            distance

                    };

                }
            );


    if (
        !matchedHospitals.length
    ) {

        return null;

    }


    /*
       Rating = 55%
       Distance = 45%

       Higher rating and shorter distance
       get better score.
    */

    const maxDistance =
        Math.max(
            ...matchedHospitals.map(
                hospital =>
                    hospital.distance
            )
        );


    matchedHospitals.forEach(
        hospital => {

            const ratingScore =
                Math.min(
                    hospital.numericRating,
                    5
                ) / 5;


            const distanceScore =
                maxDistance === 0

                    ? 1

                    :

                    1 -
                    (
                        hospital.distance /
                        maxDistance
                    );


            hospital.score =
                (
                    ratingScore *
                    0.55
                ) +

                (
                    distanceScore *
                    0.45
                );

        }
    );


    matchedHospitals.sort(
        (a, b) =>
            b.score -
            a.score
    );


    /*
       IMPORTANT:
       Only ONE hospital is returned.
    */

    return matchedHospitals[0];

}


/* =========================================================
   INITIALIZE FACILITIES PAGE
========================================================= */

function initializeFacilitiesPage() {

    const container =
        document.querySelector(
            "#facilitiesContainer"
        );


    if (!container) return;


    const specialists =
        JSON.parse(
            localStorage.getItem(
                "selectedSpecialists"
            ) || "[]"
        );


    if (
        !specialists.length
    ) {

        showNoSymptomsMessage();

        return;

    }


    const locationButton =
        document.querySelector(
            "#locationBtn"
        );


    if (locationButton) {

        locationButton.addEventListener(
            "click",
            requestLocation
        );

    }


    /*
       Automatically request
       user's location.
    */

    requestLocation();

}


/* =========================================================
   REQUEST LOCATION
========================================================= */

function requestLocation() {

    if (
        !navigator.geolocation
    ) {

        updateLocationStatus(

            currentLanguage === "hi"

                ? "इस ब्राउज़र में स्थान सुविधा उपलब्ध नहीं है।"

                : currentLanguage === "mr"

                    ? "या ब्राउझरमध्ये स्थान सुविधा उपलब्ध नाही."

                    : "Geolocation is not supported by this browser."

        );


        showWithoutLocation();

        return;

    }


    updateLocationStatus(

        currentLanguage === "hi"

            ? "आपका स्थान खोजा जा रहा है..."

            : currentLanguage === "mr"

                ? "तुमचे स्थान शोधत आहे..."

                : "Finding your location..."

    );


    navigator.geolocation.getCurrentPosition(

        function(position) {

            const lat =
                position.coords.latitude;


            const lng =
                position.coords.longitude;


            lastUserLocation = {

                lat: lat,

                lng: lng

            };


            updateLocationStatus(

                currentLanguage === "hi"

                    ? "स्थान सफलतापूर्वक मिल गया।"

                    : currentLanguage === "mr"

                        ? "स्थान यशस्वीपणे सापडले."

                        : "Location found successfully."

            );


            showRecommendedHospital(
                lat,
                lng
            );

        },


        function(error) {

            console.log(
                "Location error:",
                error
            );


            lastUserLocation =
                null;


            updateLocationStatus(

                currentLanguage === "hi"

                    ? "स्थान की अनुमति नहीं मिली।"

                    : currentLanguage === "mr"

                        ? "स्थानाची परवानगी मिळाली नाही."

                        : "Location permission was not granted."

            );


            showWithoutLocation();

        },


        {

            enableHighAccuracy:
                true,

            timeout:
                10000,

            maximumAge:
                60000

        }

    );

}


/* =========================================================
   LOCATION STATUS
========================================================= */

function updateLocationStatus(
    message
) {

    const status =
        document.querySelector(
            "#locationStatus"
        );


    if (status) {

        status.textContent =
            message;

    }

}


/* =========================================================
   SPECIALIST RECOMMENDATION CARD
========================================================= */

function createSpecialistRecommendation(
    specialists
) {

    if (
        !specialists.length
    ) {

        return "";

    }


    /*
       First specialist has the
       highest score based on
       selected symptoms.
    */

    const primarySpecialist =
        specialists[0];


    const primaryName =
        specialistInfo[
            primarySpecialist
        ]

            ? specialistInfo[
                primarySpecialist
            ][
                currentLanguage
            ]

            : primarySpecialist;


    const title =

        currentLanguage === "hi"

            ? "आपके लिए सुझाया गया विशेषज्ञ"

            : currentLanguage === "mr"

                ? "तुमच्यासाठी सुचवलेला तज्ज्ञ"

                : "Recommended Specialist";


    const note =

        currentLanguage === "hi"

            ? "आपके चुने हुए लक्षणों के आधार पर सामान्य मार्गदर्शन के लिए यह विशेषज्ञ सुझाया गया है।"

            : currentLanguage === "mr"

                ? "तुम्ही निवडलेल्या लक्षणांच्या आधारावर सामान्य मार्गदर्शनासाठी हा तज्ज्ञ सुचवला आहे."

                : "Based on your selected symptoms, this specialist is suggested for general healthcare guidance.";


    const otherSpecialists =
        specialists
            .slice(1)
            .map(
                specialist =>

                    specialistInfo[
                        specialist
                    ]

                        ? specialistInfo[
                            specialist
                        ][
                            currentLanguage
                        ]

                        : specialist
            )
            .join(", ");


    const otherLabel =

        currentLanguage === "hi"

            ? "अन्य संभावित विशेषज्ञ"

            : currentLanguage === "mr"

                ? "इतर संभाव्य तज्ज्ञ"

                : "Other possible specialists";


    return `

        <div
            class="specialist-recommendation"
            style="
                width:100%;
                max-width:700px;
                margin:25px auto;
                padding:26px;
                box-sizing:border-box;
                background:#ffffff;
                border:1px solid #dce8ef;
                border-radius:20px;
                box-shadow:0 8px 25px rgba(20,80,120,0.10);
                display:flex;
                gap:18px;
                align-items:flex-start;
            "
        >

            <div
                style="
                    width:55px;
                    height:55px;
                    border-radius:16px;
                    background:#e8f6ff;
                    color:#168acb;
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    font-size:28px;
                    flex-shrink:0;
                "
            >
                ✚
            </div>


            <div
                style="
                    flex:1;
                "
            >

                <div
                    style="
                        color:#168acb;
                        font-size:14px;
                        font-weight:600;
                        margin-bottom:5px;
                    "
                >
                    ${title}
                </div>


                <h2
                    style="
                        margin:0 0 10px;
                        color:#172b3a;
                        font-size:24px;
                    "
                >
                    ${primaryName}
                </h2>


                <p
                    style="
                        margin:0;
                        color:#52606d;
                        line-height:1.6;
                        font-size:15px;
                    "
                >
                    ${note}
                </p>


                ${
                    otherSpecialists

                        ? `

                            <div
                                style="
                                    margin-top:12px;
                                    color:#687784;
                                    font-size:14px;
                                "
                            >
                                ${otherLabel}:
                                ${otherSpecialists}
                            </div>

                        `

                        : ""
                }

            </div>

        </div>

    `;

}


/* =========================================================
   HOSPITAL CARD
========================================================= */

function hospitalCardHTML(
    hospital,
    distanceText,
    showDistance = true
) {

    const specialistName =
        specialistInfo[
            hospital.specialist
        ]

            ? specialistInfo[
                hospital.specialist
            ][
                currentLanguage
            ]

            : hospital.specialist ||
              "Healthcare Specialist";


    const recommendedText =

        currentLanguage === "hi"

            ? "आपके लिए अनुशंसित अस्पताल"

            : currentLanguage === "mr"

                ? "तुमच्यासाठी सुचवलेले रुग्णालय"

                : "Recommended Hospital";


    const ratingText =

        currentLanguage === "hi"

            ? "रेटिंग"

            : currentLanguage === "mr"

                ? "रेटिंग"

                : "Rating";


    const doctorText =

        currentLanguage === "hi"

            ? "डॉक्टर"

            : currentLanguage === "mr"

                ? "डॉक्टर"

                : "Doctor";


    const distanceLabel =

        currentLanguage === "hi"

            ? "दूरी"

            : currentLanguage === "mr"

                ? "अंतर"

                : "Distance";


    const phoneText =

        currentLanguage === "hi"

            ? "संपर्क"

            : currentLanguage === "mr"

                ? "संपर्क"

                : "Contact";


    const directionsText =

        currentLanguage === "hi"

            ? "दिशा देखें"

            : currentLanguage === "mr"

                ? "दिशा पहा"

                : "Get Directions";


    const doctorValue =
        hospital.doctor ||

        (
            currentLanguage === "hi"

                ? "जानकारी उपलब्ध नहीं"

                : currentLanguage === "mr"

                    ? "माहिती उपलब्ध नाही"

                    : "Information not available"
        );


    const mapsUrl =
        "https://www.google.com/maps/search/?api=1&query=" +

        encodeURIComponent(
            hospital.name
        );


    return `

        <div class="hospital-card">

            <div class="hospital-icon">
                ✚
            </div>


            <div class="hospital-content">

                <span class="recommended-label">
                    ★ ${recommendedText}
                </span>


                <h3>
                    ${hospital.name}
                </h3>


                <p class="specialist-name">
                    ✚ ${specialistName}
                </p>


                <div class="rating">

                    ★
                    ${hospital.numericRating.toFixed(1)}
                    / 5

                    <span>
                        ${ratingText}
                    </span>

                </div>


                <div class="hospital-details">

                    ${
                        showDistance

                            ? `

                                <span
                                    class="detail-pill"
                                >
                                    ⊙
                                    ${distanceLabel}:
                                    ${distanceText}
                                </span>

                            `

                            : ""
                    }


                    <span
                        class="detail-pill"
                    >

                        ✚
                        ${doctorText}:
                        ${doctorValue}

                    </span>


                    <span
                        class="detail-pill"
                    >

                        ☎
                        ${phoneText}:
                        ${
                            hospital.phone ||
                            "Not available"
                        }

                    </span>

                </div>


                <a
                    href="${mapsUrl}"
                    target="_blank"
                    rel="noopener"
                    class="directions-btn"
                >

                    ⊙
                    ${directionsText}
                    →

                </a>

            </div>

        </div>

    `;

}


/* =========================================================
   SHOW RECOMMENDED HOSPITAL
========================================================= */

function showRecommendedHospital(
    userLat,
    userLng
) {

    const container =
        document.querySelector(
            "#facilitiesContainer"
        );


    if (!container) return;


    const specialists =
        JSON.parse(
            localStorage.getItem(
                "selectedSpecialists"
            ) || "[]"
        );


    if (
        !specialists.length
    ) {

        showNoSymptomsMessage();

        return;

    }


    const hospital =
        findBestHospital(
            userLat,
            userLng,
            specialists
        );


    if (!hospital) {

        container.innerHTML = `

            ${createSpecialistRecommendation(
                specialists
            )}


            <div
                class="facility-loading"
            >

                <h3>

                    ${
                        currentLanguage === "hi"

                            ? "उपयुक्त अस्पताल नहीं मिला"

                            : currentLanguage === "mr"

                                ? "योग्य रुग्णालय सापडले नाही"

                                : "No suitable hospital found"
                    }

                </h3>

            </div>

        `;

        return;

    }


    const distanceText =

        hospital.distance < 1

            ? Math.round(
                hospital.distance *
                1000
            ) + " m"

            : hospital.distance.toFixed(
                1
            ) + " km";


    const reasonText =

        currentLanguage === "hi"

            ? "यह अस्पताल उपयुक्त विशेषज्ञ, अच्छी रेटिंग और आपके स्थान से दूरी को ध्यान में रखकर चुना गया है।"

            : currentLanguage === "mr"

                ? "योग्य तज्ज्ञ, चांगले रेटिंग आणि तुमच्या स्थानापासूनचे अंतर लक्षात घेऊन हे रुग्णालय निवडले आहे."

                : "This one hospital is selected using the suitable specialist, rating and distance from your location.";


    container.innerHTML = `

        ${createSpecialistRecommendation(
            specialists
        )}


        <div
            class="recommendation-note"
        >
            ${reasonText}
        </div>


        ${hospitalCardHTML(
            hospital,
            distanceText,
            true
        )}

    `;

}


/* =========================================================
   SHOW HOSPITAL WITHOUT LOCATION
========================================================= */

function showWithoutLocation() {

    const container =
        document.querySelector(
            "#facilitiesContainer"
        );


    if (!container) return;


    const specialists =
        JSON.parse(
            localStorage.getItem(
                "selectedSpecialists"
            ) || "[]"
        );


    if (
        !specialists.length
    ) {

        showNoSymptomsMessage();

        return;

    }


    const matchedHospitals =

        hospitals

            .filter(
                hospital =>

                    specialists.some(
                        specialist =>

                            hospitalMatchesSpecialist(
                                hospital,
                                specialist
                            )

                    )

            )

            .map(
                hospital => ({

                    ...hospital,

                    numericRating:
                        getNumericRating(
                            hospital.rating
                        )

                })
            );


    if (
        !matchedHospitals.length
    ) {

        container.innerHTML = `

            ${createSpecialistRecommendation(
                specialists
            )}


            <div
                class="facility-loading"
            >

                <h3>

                    ${
                        currentLanguage === "hi"

                            ? "उपयुक्त अस्पताल नहीं मिला"

                            : currentLanguage === "mr"

                                ? "योग्य रुग्णालय सापडले नाही"

                                : "No suitable hospital found"
                    }

                </h3>

            </div>

        `;

        return;

    }


    /*
       Location unavailable:
       choose highest-rated suitable hospital.
    */

    matchedHospitals.sort(
        (a, b) =>
            b.numericRating -
            a.numericRating
    );


    const hospital =
        matchedHospitals[0];


    const reasonText =

        currentLanguage === "hi"

            ? "स्थान की अनुमति उपलब्ध नहीं है, इसलिए यह अस्पताल दूरी के आधार पर नहीं चुना गया है।"

            : currentLanguage === "mr"

                ? "स्थानाची परवानगी उपलब्ध नसल्यामुळे हे रुग्णालय अंतराच्या आधारावर निवडलेले नाही."

                : "Location permission is unavailable, so this recommendation is not based on distance.";


    container.innerHTML = `

        ${createSpecialistRecommendation(
            specialists
        )}


        <div
            class="recommendation-note"
        >
            ${reasonText}
        </div>


        ${hospitalCardHTML(
            hospital,
            "",
            false
        )}

    `;

}


/* =========================================================
   NO SYMPTOMS MESSAGE
========================================================= */

function showNoSymptomsMessage() {

    const container =
        document.querySelector(
            "#facilitiesContainer"
        );


    if (!container) return;


    const title =

        currentLanguage === "hi"

            ? "पहले लक्षण चुनें"

            : currentLanguage === "mr"

                ? "प्रथम लक्षणे निवडा"

                : "Select symptoms first";


    const text =

        currentLanguage === "hi"

            ? "विशेषज्ञ की सिफारिश पाने के लिए पहले अपने लक्षण चुनें।"

            : currentLanguage === "mr"

                ? "तज्ज्ञाची शिफारस मिळवण्यासाठी प्रथम तुमची लक्षणे निवडा."

                : "Go back and select your symptoms first.";


    const buttonText =

        currentLanguage === "hi"

            ? "लक्षण चुनें"

            : currentLanguage === "mr"

                ? "लक्षणे निवडा"

                : "Select Symptoms";


    container.innerHTML = `

        <div
            class="facility-loading"
        >

            <div
                class="loading-symbol"
            >
                ✚
            </div>


            <h3>
                ${title}
            </h3>


            <p>
                ${text}
            </p>


            <br>


            <a
                href="specialist.html"
                class="primary-btn"
            >
                ${buttonText}
            </a>

        </div>

    `;

}


/* =========================================================
   PAGE INITIALIZATION
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        setupLanguage();

        applyTranslations();

        initializeSpecialistPage();

        initializeFacilitiesPage();

    }
);
