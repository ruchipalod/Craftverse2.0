export interface TermItem {
  id: string;
  term: string;
  category: 'Salary & Tax' | 'Mutual Funds' | 'Banking & Credit' | 'Retirement & Safety';
  shortDef: {
    English: string;
    Hindi: string;
    Marathi: string;
  };
  analogy: string;
  indianExample: string;
  rememberThis: {
    English: string;
    Hindi: string;
    Marathi: string;
  };
  commonMistake: {
    English: string;
    Hindi: string;
    Marathi: string;
  };
  mythStatement: {
    English: string;
    Hindi: string;
    Marathi: string;
  };
}

export interface MythFactItem {
  id: string;
  category: string;
  myth: string;
  fact: string;
  proof: string;
}

export const TERM_O_PEDIA_ITEMS: TermItem[] = [
  {
    id: 'ctc-vs-inhand',
    term: 'CTC vs In-Hand Salary',
    category: 'Salary & Tax',
    shortDef: {
      English:
        'Cost to Company (CTC) is the total annual package including EPF, gratuity, and bonuses, while In-Hand is the actual monthly cash credited to your bank after deductions and TDS.',
      Hindi:
        'CTC कंपनी द्वारा आप पर किया जाने वाला कुल वार्षिक खर्च है (जिसमें PF, ग्रेच्युटी और बोनस शामिल हैं), जबकि In-Hand वह वास्तविक मासिक राशि है जो टैक्स और PF कटने के बाद बैंक में आती है।',
      Marathi:
        'CTC म्हणजे कंपनीचा तुमच्यावरील एकूण वार्षिक खर्च (PF, ग्रॅच्युइटी आणि बोनससह), तर In-Hand म्हणजे कर आणि PF कपातीनंतर बँक खात्यात जमा होणारा प्रत्यक्ष मासिक पगार.',
    },
    analogy: 'Like ordering a ₹500 thali where ₹80 goes toward GST, packaging, and future loyalty points.',
    indianExample: 'A ₹12,00,000 LPA CTC typically results in ~₹84,000–₹88,000 monthly in-hand after EPF, Professional Tax, and Income Tax.',
    rememberThis: {
      English: 'Always plan your monthly budget and EMIs using your Net In-Hand salary, never your Annual CTC divided by 12.',
      Hindi: 'अपना मासिक बजट और EMI हमेशा अपनी नेट इन-हैंड सैलरी के आधार पर बनाएं, न कि CTC को 12 से भाग देकर।',
      Marathi: 'तुमचे मासिक बजेट आणि EMI नेहमी प्रत्यक्ष हातात येणाऱ्या (In-Hand) पगारावर ठरवा, CTC ला १२ ने भागून नव्हे.',
    },
    commonMistake: {
      English: 'Dividing Annual CTC by 12 and committing to rent or loan EMIs based on that gross figure.',
      Hindi: 'वार्षिक CTC को 12 से भाग देकर उसी राशि के आधार पर किराया या लोन EMI तय कर लेना।',
      Marathi: 'वार्षिक CTC ला १२ ने भागून त्या रकमेवर घरभाडे किंवा कर्जाचा EMI निश्चित करणे.',
    },
    mythStatement: {
      English: 'A ₹12 Lakh Annual CTC means ₹1,00,000 is credited to your bank account every month.',
      Hindi: '₹12 लाख के वार्षिक CTC का मतलब है कि हर महीने बैंक खाते में पूरे ₹1,00,000 जमा होंगे।',
      Marathi: '₹१२ लाख वार्षिक CTC म्हणजे दरमहा बँक खात्यात पूर्ण ₹१,००,००० जमा होतात.',
    },
  },
  {
    id: 'sip',
    term: 'SIP (Systematic Investment Plan)',
    category: 'Mutual Funds',
    shortDef: {
      English:
        'An automated method of investing a fixed rupee amount every month into a mutual fund, benefiting from Rupee Cost Averaging and long-term compounding.',
      Hindi:
        'म्यूचुअल फंड में हर महीने एक निश्चित राशि निवेश करने का स्वचालित तरीका, जिससे बाजार के उतार-चढ़ाव में औसत खरीद लागत (Rupee Cost Averaging) और चक्रवृद्धि का लाभ मिलता है।',
      Marathi:
        'म्युच्युअल फंडमध्ये दरमहा ठराविक रक्कम गुंतवण्याची शिस्तबद्ध पद्धत, ज्यामुळे बाजारातील चढ-उतारात Rupee Cost Averaging आणि चक्रवाढ व्याजाचा फायदा मिळतो.',
    },
    analogy: 'Like an EMI you pay to your future self instead of a bank.',
    indianExample: 'A ₹10,000/month SIP in a Nifty 50 Index Fund at 12% CAGR grows to ~₹23.2 Lakhs in 10 years and ~₹99.9 Lakhs in 20 years.',
    rememberThis: {
      English: 'SIP is a method of investing in mutual funds, not a separate product, and works best when continued through market dips.',
      Hindi: 'SIP म्यूचुअल फंड में निवेश करने का एक तरीका है, कोई अलग प्रोडक्ट नहीं; बाजार गिरने पर इसे चालू रखना सबसे फायदेमंद होता है।',
      Marathi: 'SIP ही म्युच्युअल फंडात गुंतवणूक करण्याची एक पद्धत आहे; बाजार खाली असताना SIP सुरू ठेवल्याने अधिक युनिट्स मिळतात.',
    },
    commonMistake: {
      English: 'Stopping or pausing your monthly SIP when the stock market falls, which defeats Rupee Cost Averaging.',
      Hindi: 'शेयर बाजार गिरने पर डरकर अपनी मासिक SIP बंद कर देना, जिससे कम कीमत पर ज्यादा यूनिट्स खरीदने का मौका चला जाता है।',
      Marathi: 'शेअर बाजार घसरल्यावर घाबरून मासिक SIP थांबवणे, ज्यामुळे स्वस्तात जास्त युनिट्स मिळण्याची संधी हुकते.',
    },
    mythStatement: {
      English: 'SIP is a government-guaranteed scheme that always gives a fixed 12% return every single year.',
      Hindi: 'SIP एक सरकारी गारंटी वाली योजना है जो हर साल फिक्स 12% रिटर्न देती है।',
      Marathi: 'SIP ही दरवर्षी निश्चित १२% परतावा देणारी सरकारी हमी योजना आहे.',
    },
  },
  {
    id: 'xirr',
    term: 'XIRR (Extended Internal Rate of Return)',
    category: 'Mutual Funds',
    shortDef: {
      English:
        'The true annualized return metric for investments with multiple cash flows on different dates, such as monthly SIPs and partial withdrawals.',
      Hindi:
        'अलग-अलग तारीखों पर किए गए निवेश (जैसे मासिक SIP) का वास्तविक वार्षिक रिटर्न प्रतिशत निकालने का सबसे सटीक पैमाना।',
      Marathi:
        'वेगवेगळ्या तारखांना केलेल्या गुंतवणुकीचा (उदा. मासिक SIP) अचूक वार्षिक परतावा (Annualized Return) मोजण्याचे सूत्र.',
    },
    analogy: 'CAGR measures a single train journey; XIRR measures the average speed of 60 monthly train trips.',
    indianExample: 'Used by Zerodha Coin, Groww, and CAMS statements to show your real annualized SIP performance.',
    rememberThis: {
      English: 'Always check XIRR (not simple absolute % return) when evaluating any recurring SIP or staggered investment.',
      Hindi: 'मासिक SIP या अलग-अलग तारीखों के निवेश का प्रदर्शन देखते समय हमेशा XIRR देखें, न कि केवल कुल प्रतिशत लाभ।',
      Marathi: 'मासिक SIP किंवा टप्प्याटप्प्याने केलेल्या गुंतवणुकीचा परतावा तपासताना नेहमी XIRR पहा.',
    },
    commonMistake: {
      English: 'Using simple point-to-point CAGR or absolute gain % to judge a monthly SIP where each installment stayed invested for a different duration.',
      Hindi: 'मासिक SIP के रिटर्न को आंकने के लिए साधारण प्रतिशत या CAGR का उपयोग करना, जबकि हर किस्त अलग समय तक निवेशित रही है।',
      Marathi: 'प्रत्येक हप्त्याचा कालावधी वेगळा असताना SIP मोजण्यासाठी साध्या CAGR चा वापर करणे.',
    },
    mythStatement: {
      English: 'Simple CAGR and XIRR always give the exact same number for a monthly SIP portfolio.',
      Hindi: 'मासिक SIP पोर्टफोलियो के लिए साधारण CAGR और XIRR हमेशा एक ही संख्या दिखाते हैं।',
      Marathi: 'मासिक SIP पोर्टफोलिओसाठी साधा CAGR आणि XIRR नेहमी सारखाच आकडा दाखवतात.',
    },
  },
  {
    id: 'elss-80c',
    term: 'ELSS & Section 80C',
    category: 'Salary & Tax',
    shortDef: {
      English:
        'Equity Linked Savings Scheme (ELSS) is a tax-saving mutual fund with the shortest lock-in period of 3 years, eligible for up to ₹1.5 Lakh deduction under the Old Tax Regime.',
      Hindi:
        'ELSS एक टैक्स-बचत म्यूचुअल फंड है जिसमें केवल 3 साल का लॉक-इन होता है और पुरानी टैक्स व्यवस्था के तहत धारा 80C में ₹1.5 लाख तक की छूट मिलती है।',
      Marathi:
        'ELSS हा ३ वर्षांचा सर्वात कमी लॉक-इन कालावधी असलेला कर-बचत म्युच्युअल फंड आहे, ज्यावर जुन्या कर प्रणालीत कलम 80C अंतर्गत ₹१.५ लाखांपर्यंत सूट मिळते.',
    },
    analogy: 'Planting a mango tree that lowers your tax bill today and bears equity fruit after 3 years.',
    indianExample: 'Compared to 5-year Tax-Saver FDs or 15-year PPF, ELSS has only a 3-year lock-in.',
    rememberThis: {
      English: 'Section 80C deductions (up to ₹1.5 Lakh) apply under the Old Tax Regime; in ELSS SIPs, each monthly installment has its own 36-month lock-in.',
      Hindi: 'धारा 80C की छूट (₹1.5 लाख तक) पुरानी टैक्स व्यवस्था में मिलती है, और ELSS SIP की हर मासिक किस्त का अपना 3 साल का लॉक-इन होता है।',
      Marathi: 'कलम 80C वजावट जुन्या कर प्रणालीत लागू होते आणि ELSS SIP मधील प्रत्येक मासिक हप्त्याला स्वतंत्र ३ वर्षांचा लॉक-इन असतो.',
    },
    commonMistake: {
      English: 'Investing in ELSS in March just to save tax when you have opted for the New Tax Regime (where 80C gives zero extra tax benefit).',
      Hindi: 'नई टैक्स व्यवस्था (New Tax Regime) चुनने के बावजूद केवल टैक्स बचाने के लिए मार्च में जल्दबाजी में ELSS खरीदना।',
      Marathi: 'नवीन कर प्रणाली (New Tax Regime) निवडलेली असताना केवळ कर वाचवण्यासाठी मार्चमध्ये घाईने ELSS मध्ये गुंतवणूक करणे.',
    },
    mythStatement: {
      English: 'If you start an ELSS SIP in January 2025, all subsequent monthly installments unlock together in January 2028.',
      Hindi: 'यदि आप जनवरी 2025 में ELSS SIP शुरू करते हैं, तो बाद की सभी मासिक किस्तें जनवरी 2028 में एक साथ अनलॉक हो जाती हैं।',
      Marathi: 'जानेवारी २०२५ मध्ये ELSS SIP सुरू केल्यास पुढील सर्व मासिक हप्ते जानेवारी २०२८ मध्ये एकत्र अनलॉक होतात.',
    },
  },
  {
    id: 'emergency-fund',
    term: 'Emergency Fund (आपत्कालीन निधी)',
    category: 'Retirement & Safety',
    shortDef: {
      English:
        'A dedicated safety buffer equal to 6–12 months of essential household expenses parked in liquid mutual funds or sweep-in FDs for medical or job emergencies.',
      Hindi:
        'नौकरी छूटने या मेडिकल इमरजेंसी के लिए 6 से 12 महीने के जरूरी खर्चों के बराबर सुरक्षित रखी गई राशि, जिसे लिक्विड फंड या FD में रखा जाता है।',
      Marathi:
        'नोकरी जाणे किंवा वैद्यकीय आणीबाणीसाठी ६ ते १२ महिन्यांच्या घरखर्चाइतकी लिक्विड फंड किंवा बँक FD मध्ये सुरक्षित ठेवलेली रक्कम.',
    },
    analogy: 'A financial airbag that keeps you from breaking your long-term SIPs during a crisis.',
    indianExample: 'If your monthly expenses are ₹35,000, your 6-month target Emergency Fund is ₹2,10,000.',
    rememberThis: {
      English: 'Build your 6-month Emergency Fund in a safe, instant-access account before taking aggressive equity risks.',
      Hindi: 'शेयर बाजार में बड़ा जोखिम लेने से पहले अपने 6 महीने के खर्च के बराबर आपातकालीन निधि सुरक्षित और तुरंत उपलब्ध जगह पर रखें।',
      Marathi: 'शेअर बाजारात मोठी जोखीम घेण्यापूर्वी ६ महिन्यांच्या खर्चाइतका आपत्कालीन निधी सुरक्षित आणि तात्काळ उपलब्ध होणाऱ्या खात्यात ठेवा.',
    },
    commonMistake: {
      English: 'Parking your Emergency Fund in volatile small-cap stocks where it could be down 30% right when an emergency strikes.',
      Hindi: 'आपातकालीन निधि को उतार-चढ़ाव वाले स्मॉल-कैप शेयरों में रखना, जहाँ जरूरत के समय मूल्य 30% गिरा हो सकता है।',
      Marathi: 'आपत्कालीन निधी चढ-उतार होणाऱ्या स्मॉल-कॅप शेअर्समध्ये ठेवणे, जिथे अडचणीच्या वेळी रक्कम कमी होऊ शकते.',
    },
    mythStatement: {
      English: 'You do not need an Emergency Fund if you hold a high-limit credit card.',
      Hindi: 'यदि आपके पास अधिक लिमिट वाला क्रेडिट कार्ड है, तो आपको इमरजेंसी फंड की कोई आवश्यकता नहीं है।',
      Marathi: 'जास्त मर्यादेचे क्रेडिट कार्ड असल्यास आपत्कालीन निधीची अजिबात गरज नसते.',
    },
  },
  {
    id: 'cibil-score',
    term: 'CIBIL / Credit Score',
    category: 'Banking & Credit',
    shortDef: {
      English:
        'A 3-digit number between 300 and 900 summarizing your creditworthiness and repayment history across loans and credit cards in India.',
      Hindi:
        '300 से 900 के बीच का 3-अंकीय स्कोर जो आपके लोन और क्रेडिट कार्ड के समय पर भुगतान के इतिहास को दर्शाता है। 750+ स्कोर श्रेष्ठ माना जाता है।',
      Marathi:
        '३०० ते ९०० दरम्यानचा ३ अंकी क्रमांक जो तुमची कर्ज परतफेडीची विश्वासार्हता दर्शवतो. ७५० पेक्षा जास्त स्कोअर गृहकर्जासाठी उत्तम मानला जातो.',
    },
    analogy: 'Your financial reputation mark sheet when applying for a Home Loan.',
    indianExample: 'A CIBIL score above 760 can save you 0.50%–0.75% interest rate on a ₹50 Lakh SBI/HDFC Home Loan.',
    rememberThis: {
      English: 'Always pay the 100% Total Amount Due on time and keep credit card utilization below 30% of your total limit.',
      Hindi: 'हमेशा क्रेडिट कार्ड का 100% कुल बिल समय पर भरें और अपनी कुल क्रेडिट लिमिट का 30% से कम ही उपयोग करें।',
      Marathi: 'क्रेडिट कार्डचे १००% एकूण बिल नेहमी वेळेत भरा आणि एकूण मर्यादेच्या ३०% पेक्षा कमी वापर ठेवा.',
    },
    commonMistake: {
      English: 'Paying only the "Minimum Amount Due" on a credit card, thinking it protects you from 36%–42% annualized interest charges.',
      Hindi: 'क्रेडिट कार्ड पर केवल "Minimum Amount Due" भरना और यह सोचना कि बाकी राशि पर 36%–42% सालाना ब्याज नहीं लगेगा।',
      Marathi: 'क्रेडिट कार्डवर फक्त "Minimum Amount Due" भरून ३६%–४२% वार्षिक व्याज लागणार नाही असा गैरसमज ठेवणे.',
    },
    mythStatement: {
      English: 'Checking your own CIBIL score on an official portal lowers your credit score.',
      Hindi: 'आधिकारिक पोर्टल पर खुद अपना CIBIL स्कोर चेक करने से आपका क्रेडिट स्कोर कम हो जाता है।',
      Marathi: 'अधिकृत पोर्टलवर स्वतःचा CIBIL स्कोअर तपासल्याने तुमचा क्रेडिट स्कोअर कमी होतो.',
    },
  },
  {
    id: 'ppf-epf-nps',
    term: 'EPF, PPF & NPS Triad',
    category: 'Retirement & Safety',
    shortDef: {
      English:
        'India’s core retirement pillars: Employees’ Provident Fund (salaried deduction), Public Provident Fund (EEE tax-free Sovereign debt), and National Pension System (market-linked pension).',
      Hindi:
        'भारत के तीन प्रमुख रिटायरमेंट स्तंभ: EPF (वेतनभोगी कर्मचारियों के लिए), PPF (15-वर्षीय सरकारी टैक्स-फ्री योजना), और NPS (बाजार से जुड़ी पेंशन योजना)।',
      Marathi:
        'भारतातील निवृत्ती नियोजनाचे तीन मुख्य आधारस्तंभ: EPF (नोकरदारांसाठी), PPF (१५ वर्षांची करमुक्त सरकारी योजना), आणि NPS (राष्ट्रीय पेन्शन योजना).',
    },
    analogy: 'The solid foundation concrete of your retirement house before adding equity floors.',
    indianExample: 'EPF currently offers ~8.25% government-backed interest, while PPF offers 7.1% tax-free (EEE status).',
    rememberThis: {
      English: 'Always transfer your existing EPF account via UAN when switching jobs instead of withdrawing it early.',
      Hindi: 'नौकरी बदलते समय अपना EPF पैसा निकालने के बजाय UAN के माध्यम से नई कंपनी में ट्रांसफर करें ताकि चक्रवृद्धि जारी रहे।',
      Marathi: 'नोकरी बदलताना EPF ची रक्कम काढून न घेता UAN द्वारे नवीन कंपनीत ट्रान्सफर करा जेणेकरून चक्रवाढ सुरू राहील.',
    },
    commonMistake: {
      English: 'Cashing out your EPF balance every time you change jobs, losing decades of tax-free compounding and triggers tax if <5 years of service.',
      Hindi: 'हर बार नौकरी बदलने पर EPF का पैसा निकाल लेना, जिससे लंबी अवधि की टैक्स-फ्री कंपाउंडिंग टूट जाती है।',
      Marathi: 'प्रत्येक वेळी नोकरी बदलताना EPF ची रक्कम काढून घेणे, ज्यामुळे दीर्घकालीन चक्रवाढ थांबते.',
    },
    mythStatement: {
      English: 'Withdrawing EPF before completing 5 years of continuous service is always 100% tax-free regardless of amount.',
      Hindi: '5 साल की निरंतर सेवा पूरी करने से पहले EPF निकालना हमेशा पूरी तरह टैक्स-फ्री होता है।',
      Marathi: '५ वर्षांची सलग सेवा पूर्ण होण्यापूर्वी EPF काढणे नेहमी १००% करमुक्त असते.',
    },
  },
  {
    id: 'repo-rate-inflation',
    term: 'RBI Repo Rate & Real Return',
    category: 'Banking & Credit',
    shortDef: {
      English:
        'Repo Rate is the rate at which the Reserve Bank of India lends to commercial banks, directly impacting your floating Home Loan EMI and FD rates. Real Return is nominal return adjusted for inflation.',
      Hindi:
        'रेपो रेट वह दर है जिस पर RBI बैंकों को कर्ज देता है, जिससे आपके होम लोन की EMI और FD ब्याज दरें तय होती हैं। महंगाई घटाने के बाद बचे रिटर्न को Real Return कहते हैं।',
      Marathi:
        'रेपो रेट म्हणजे ज्या दराने RBI बँकांना कर्ज देते; यावरूनच तुमच्या गृहकर्जाचा EMI आणि FD चे व्याजदर ठरतात. महागाई वजा केल्यावर उरणाऱ्या परताव्याला Real Return म्हणतात.',
    },
    analogy: 'Inflation is a silent leak in your bucket; Real Return is how fast the water level actually rises.',
    indianExample: 'If your FD gives 7% post-tax 5% and inflation is 6%, your Real Return is negative (-1%).',
    rememberThis: {
      English: 'Always evaluate long-term investments by their post-tax, post-inflation Real Return, not just the headline interest rate.',
      Hindi: 'दीर्घकालिक निवेश का आकलन हमेशा टैक्स और महंगाई घटाने के बाद मिलने वाले वास्तविक रिटर्न (Real Return) से करें।',
      Marathi: 'दीर्घकालीन गुंतवणुकीचे मूल्यमापन नेहमी कर आणि महागाई वजा केल्यानंतर मिळणाऱ्या प्रत्यक्ष परताव्यावरून (Real Return) करा.',
    },
    commonMistake: {
      English: 'Keeping 20-year retirement savings exclusively in savings accounts or low-yield FDs that earn less than inflation after tax.',
      Hindi: '20 साल की रिटायरमेंट बचत को केवल सेविंग्स अकाउंट या कम ब्याज वाली FD में रखना, जहाँ टैक्स के बाद रिटर्न महंगाई से कम होता है।',
      Marathi: '२० वर्षांची निवृत्ती बचत केवळ बचत खात्यात किंवा कमी परतावा देणाऱ्या FD मध्ये ठेवणे, जिथे करानंतर परतावा महागाईपेक्षा कमी असतो.',
    },
    mythStatement: {
      English: 'When RBI hikes the Repo Rate, floating-rate Home Loan interest rates automatically go down.',
      Hindi: 'जब RBI रेपो रेट बढ़ाता है, तो फ्लोटिंग होम लोन की ब्याज दरें अपने आप कम हो जाती हैं।',
      Marathi: 'जेव्हा RBI रेपो रेट वाढवते, तेव्हा फ्लोटिंग गृहकर्जाचे व्याजदर आपोआप कमी होतात.',
    },
  },
];

export const MYTH_FACT_ITEMS: MythFactItem[] = [
  {
    id: 'myth-1',
    category: 'Investing Basics',
    myth: 'You need at least ₹25,000–₹50,000 to start investing in Mutual Funds or Index Funds.',
    fact: 'You can start a regulated Mutual Fund SIP in India with as little as ₹100 to ₹500 per month.',
    proof:
      'SEBI and AMFI enable micro-SIPs across Nifty 50 Index funds and Flexi-Cap funds with zero entry load via UPI AutoPay.',
  },
  {
    id: 'myth-2',
    category: 'Tax & Savings',
    myth: 'Bank Fixed Deposits (FDs) are 100% risk-free for long-term 20-year wealth creation.',
    fact: 'While FDs protect nominal capital, post-tax FD returns (4.9%–5.5% in the 30% slab) often trail Indian lifestyle & medical inflation (7%–10%), eroding purchasing power.',
    proof:
      'FDs are ideal for short-term goals and emergency buffers, whereas long-term 10+ year goals require equity exposure to beat inflation.',
  },
  {
    id: 'myth-3',
    category: 'Insurance',
    myth: 'Endowment / Money-Back policies are the best way to combine Life Insurance and Investment.',
    fact: 'Mixing insurance and investment typically yields low 4.5%–5.5% XIRR with inadequate life cover. Pure Term Insurance + Mutual Fund SIP provides 10× higher protection and superior wealth creation.',
    proof:
      'A 26-year-old can get a ₹1 Crore Pure Term Cover for ~₹900/month and invest the remaining ₹9,100/month in an Index Fund SIP.',
  },
  {
    id: 'myth-4',
    category: 'Credit Score',
    myth: 'Owning a Credit Card automatically damages your CIBIL score and traps you in debt.',
    fact: 'Using less than 30% of your credit limit and paying the 100% Total Amount Due before the due date builds a 780+ CIBIL score at zero interest cost.',
    proof:
      'Credit bureaus reward disciplined credit utilization (<30%) and on-time repayment history when you later apply for a Home Loan.',
  },
  {
    id: 'myth-5',
    category: 'Market Timing',
    myth: 'You must wait for a market crash to start your SIP; investing at all-time highs loses money.',
    fact: 'Over 10–15 year horizons, time IN the market beats timing the market. SIPs automatically buy more units when markets dip and fewer when markets peak.',
    proof:
      'Historical Nifty 50 rolling 10-year SIP data shows consistent double-digit compounding regardless of the starting month.',
  },
];

export function formatINR(amount: number | null | undefined): string {
  const num = Number(amount || 0);
  if (!Number.isFinite(num)) return '₹0';
  return '₹' + Math.round(num).toLocaleString('en-IN');
}

export function formatCompactINR(amount: number): string {
  const abs = Math.abs(amount);
  if (abs >= 10000000) {
    return `₹${(amount / 10000000).toFixed(2)} Cr`;
  }
  if (abs >= 100000) {
    return `₹${(amount / 100000).toFixed(2)} L`;
  }
  return formatINR(amount);
}

export function estimateMonthlyInHand(annualCtc: number): number {
  if (!annualCtc || annualCtc <= 0) return 0;
  const taxInfo = calculateTaxComparison(annualCtc, 150000, 50000);
  const annualTax = Math.min(taxInfo.newRegimeTax, taxInfo.oldRegimeTax);
  const epfAndGratuity = annualCtc * 0.08;
  const netAnnual = Math.max(0, annualCtc - annualTax - epfAndGratuity);
  return Math.round(netAnnual / 12);
}

export function calculateTaxComparison(
  annualCtc: number,
  deduction80C = 150000,
  deduction80DAndHra = 75000
) {
  // FY 2025-26 New Tax Regime (Standard Deduction ₹75,000, Rebate up to ₹12L taxable)
  const newTaxable = Math.max(0, annualCtc - 75000);
  let newTax = 0;
  if (newTaxable > 1200000) {
    const slabs = [
      { limit: 400000, rate: 0 },
      { limit: 800000, rate: 0.05 },
      { limit: 1200000, rate: 0.1 },
      { limit: 1600000, rate: 0.15 },
      { limit: 2000000, rate: 0.2 },
      { limit: 2400000, rate: 0.25 },
      { limit: Infinity, rate: 0.3 },
    ];
    let prev = 0;
    for (const s of slabs) {
      if (newTaxable > prev) {
        const taxableSlice = Math.min(newTaxable, s.limit) - prev;
        newTax += taxableSlice * s.rate;
        prev = s.limit;
      }
    }
  }
  const newRegimeTax = Math.round(newTax * 1.04); // 4% cess

  // Old Tax Regime (Standard Deduction ₹50,000 + 80C + 80D/HRA)
  const oldTaxable = Math.max(0, annualCtc - 50000 - Math.min(150000, deduction80C) - deduction80DAndHra);
  let oldTax = 0;
  if (oldTaxable > 500000) {
    if (oldTaxable > 250000) {
      oldTax += (Math.min(oldTaxable, 500000) - 250000) * 0.05;
    }
    if (oldTaxable > 500000) {
      oldTax += (Math.min(oldTaxable, 1000000) - 500000) * 0.2;
    }
    if (oldTaxable > 1000000) {
      oldTax += (oldTaxable - 1000000) * 0.3;
    }
  }
  const oldRegimeTax = Math.round(oldTax * 1.04);

  return {
    newRegimeTax,
    oldRegimeTax,
    recommended: newRegimeTax <= oldRegimeTax ? 'New Regime' : 'Old Regime',
    annualSavings: Math.abs(newRegimeTax - oldRegimeTax),
  };
}

export interface ProjectionPoint {
  year: number;
  label: string;
  baselineWealth: number;
  whatIfWealth: number;
  investedCapital: number;
}

export function calculateWealthTrajectory(params: {
  currentSavings: number;
  monthlySip: number;
  annualReturnRate: number;
  stepUpPercent: number;
  years: number;
  whatIfMonthlySip?: number;
  whatIfReturnRate?: number;
  whatIfStepUpPercent?: number;
  whatIfInitialDelta?: number;
}): ProjectionPoint[] {
  const points: ProjectionPoint[] = [];
  let baseCorpus = Math.max(0, params.currentSavings);
  let altCorpus = Math.max(0, params.currentSavings + (params.whatIfInitialDelta || 0));
  let totalInvested = Math.max(0, params.currentSavings);

  let currentBaseSip = Math.max(0, params.monthlySip);
  let currentAltSip = Math.max(0, params.whatIfMonthlySip ?? params.monthlySip);

  const baseMonthlyRate = params.annualReturnRate / 100 / 12;
  const altMonthlyRate = (params.whatIfReturnRate ?? params.annualReturnRate) / 100 / 12;

  points.push({
    year: 0,
    label: 'Now',
    baselineWealth: Math.round(baseCorpus),
    whatIfWealth: Math.round(altCorpus),
    investedCapital: Math.round(totalInvested),
  });

  for (let y = 1; y <= params.years; y++) {
    for (let m = 1; m <= 12; m++) {
      baseCorpus = (baseCorpus + currentBaseSip) * (1 + baseMonthlyRate);
      altCorpus = (altCorpus + currentAltSip) * (1 + altMonthlyRate);
      totalInvested += currentBaseSip;
    }
    currentBaseSip *= 1 + params.stepUpPercent / 100;
    currentAltSip *= 1 + (params.whatIfStepUpPercent ?? params.stepUpPercent) / 100;

    points.push({
      year: y,
      label: `Yr ${y}`,
      baselineWealth: Math.round(baseCorpus),
      whatIfWealth: Math.round(altCorpus),
      investedCapital: Math.round(totalInvested),
    });
  }

  return points;
}
