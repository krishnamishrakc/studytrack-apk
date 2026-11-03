// ==========================================
// 🚀 KK's MONITORING V51 CLEAN START
// ==========================================

const EXAM_PATTERNS = {
    "SBI PO": { hasEng: true, eng: 40, qua: 30, rea: 30, max: 100, quaName: "Quantitative Aptitude" },
    "SBI Clerk": { hasEng: true, eng: 30, qua: 35, rea: 35, max: 100, quaName: "Numerical Ability" },
    "IBPS PO": { hasEng: true, eng: 30, qua: 35, rea: 35, max: 100, quaName: "Quantitative Aptitude" },
    "IBPS Clerk": { hasEng: true, eng: 30, qua: 35, rea: 35, max: 100, quaName: "Numerical Ability" },
    "IBPS RRB PO": { hasEng: false, eng: 0, qua: 40, rea: 40, max: 80, quaName: "Quantitative Aptitude" },
    "IBPS RRB Clerk": { hasEng: false, eng: 0, qua: 40, rea: 40, max: 80, quaName: "Numerical Ability" }
};

/* 120 Rules of Grammar — extracted from the supplied PDF. */
const grammarData = [
  {
    "title": "Rule 1: Difference between “Each” and “Every”",
    "desc": "1.They are always followed by a singular\nverb.",
    "example": "Examples:-\n(I)Each student is very talented.\n[Singular verb is used]\n(II)Each of my students is very talented.\n[Singular verb is used]\nIn sentence (I), “each” performs the function\nof Adjective (words used to describe or modify\nnouns or pronouns). The word it describes is\nthe noun “student”.\nIn sentence (II), “each” performs the\nfunction of Pronoun (word that is used instead\nof a noun or noun phrase).\nIn both the cases, we use the singular\nverb “is”.\n*NOTE: Each refers to a plural number of\npeople or items, but it considers each person or\nitem as an individual or dissimilar unit, it does\nnot consider the group collectively.\n[Individualistic Approach]\nEvery also refers to a multiple number of\npeople or items; but it considers these people or\nitems as part of a similar collective group.\n[General Approach]\n*NOTE: “Each” can play the role of both\n“Pronoun” and “Adjective”. However,\n“Every” is used as an “Adjective” only.\nExamples:-\n(I)Every student is very talented. [Correct]\n(II)Every of my students is very\ntalented. [Incorrect (X)]\nIn sentence (I), “Every” is used as an\nAdjective. The word it describes is the noun\n“student”.\nIn sentence (II), “Every” is used as a Pronoun\nwhich is incorrect.\n*NOTE: “Each” is used for two or more than\ntwo items or people but “Every” is used only\nfor more than two items or people. We cannot\nuse “every” for exactly two things (In such\ncase, “every” can be replaced by “both”).\nExamples:-\nEach person on this earth has to die one\nday. [more than two persons]\nEvery person I know has watched the\nmovie. [more than two persons]\nHe has a book in each hand. [Correct]\nHe has a book in every hand\n[Incorrect](Every cannot be used with two\nthings]\n*NOTE: \"Every\", but not \"each\", can be\nused with abstract nouns.\nExamples:-\nThey have every reason to be happy\nwith their new home. [Correct]\nThey have each reason to be happy with\ntheir new home. [Incorrect]"
  },
  {
    "title": "Rule 2: “Both” and “not” cannot be used together. In such case, we can use “Neither…nor” which is used when we want to say that two or more things are not true.",
    "desc": "",
    "example": "Examples:-\nBoth Ram and Shyam are not going to visit\nthis place. [Incorrect]\nNeither Ram nor Shyam is going to visit\nthis place. [Correct]\nThis is a war which both sides cannot\nwin. [Incorrect]\nThis is a war which neither side can win.\n[Correct]\n*NOTE: “Neither” allows us to make a\nnegative statement about two people or\nthings at the same time. “Neither” goes before\nsingular countable nouns. We use it to say\n“not either” in relation to two things."
  },
  {
    "title": "Rule 3: Usage of Relative Pronouns – who, whom, which and that.",
    "desc": "(1) “Who” and “whom” are mainly used for\npeople. However, these pronouns can also be\nused to refer to animals that are mentioned\nby name and domesticated by people (i.e.\nDomestic Animals).",
    "example": "Examples:-\nThe witnesses whom I interviewed gave\nconflicting evidence. [Used for people]\nThe people who just boarded the plane are in\na rock band. [Used for people]\nThe vacuum scared our dog Rocky, who\nwas sleeping on the rug. [Used for a pet]\n(2) “Which” is used for animals in general or\nthings (i.e. Non- domestic Animals and Non-\nliving things).\nExamples:-\nVinita visited the park with a dog, which\nlikes to chase squirrels. [Used for an animal]\nThe bomb, which killed 15 people, was the\nworst of a series of terrorist outrages. [Used\nfor a non-living thing]\n(3) “That” can be used for people, animals or\nthings (i.e. No restrictions)\nExamples:-\nThe car that Jasprit bought runs on\nelectricity and gas. [Used for a thing]\nThe musician that won the award is\nIndian. [Used for a person]\nThe dog that is chasing the squirrels\nbelongs to Brijesh. [Used for an animal]\n*NOTE: All, any, the only , the same, none,\nmuch, none , much, no, the little, the few,\nsomething, anything, nothing and superlative\ndegrees are all followed by “that” only. They\ncannot be followed by “who” or “which”\nExamples:-\nThis is the same book which you were\nreading. [Incorrect]\nThis is the same book that you were\nreading. [Correct]\nThis is the same person that I want to marry.\nHe spent up the little amount which he\nhad.[Incorrect]\nHe spent up the little amount that he had.\n[Correct]\nThis is the best that I can do for you .\n*NOTE: “Whoever” vs. “Whomever”:\n(1)Whoever is a subjective pronoun. It serves\nas a subject of a verb.\nExamples:-\nWhoever is hungry can have the leftover\npizza. (Whoever is the subject of the verb\nis, like \"He is hungry.\")\nGive the package to whoever comes for it.\n(Whoever is the subject of the verb\ncomes, like \"He comes for it.\")\nI am happy with whoever wins. (Whoever is\nthe subject of the verb wins, like \"He wins.\")\nWhoever is also correct as a subject\ncomplement, with linking verbs such as is,\nare, and will be.\nExamples:-\nWhoever it was did not leave her name.\nWhoever they are, I like their confidence.\n(2) Whomever is an objective pronoun. It\nserves as an object of a verb or a preposition.\nExamples:-\nPlease invite whomever you choose.\n(Whomever is the object of the verb choose,\nlike \"You choose him.\")\nWhomever Kate marries is none of our\nbusiness. (Whomever is the object of the\nverb marries, like \"Kate marries him.\")\nI am eager to work with whomever Dale\nselects as my partner. (Whomever is the\nobject of the verb selects, like \"Dales\nselects her.\")"
  },
  {
    "title": "Rule 4: There are three types of conditional sentences:",
    "desc": "TYPE CONDITION\nI condition possible to fulfill\nII condition in theory possible to\nfulfill\nIII condition not possible to fulfill\n(too late)\nLet’s understand their form:\nTYPE IF -\nCLAUSE\nMAIN CLAUSE\nI Simple\nPresent\nwill-future or\n(Modal + infinitive)\nshall/can/may/must\n+ V1\nII Simple Past would + V1 or,\ncould/might/should\n+ V1\nIII Past Perfect would + have + past\nparticiple (V3) or,\ncould/might/should\n+ have + past\nparticiple (V3)",
    "example": "Examples:-\nIf I study, I will pass the exam. [Type I]\nIf I studied, I would pass the exam. [Type II]\nIf I had studied, I would have passed the\nexam. [Type III]\nIf your files are in order you may/can leave\nat once.\nIf you want to lose weight you must eat less\nfat diet .\nIf I lived near my metro station I would be\nin time for work.\nIf I were you I would plant some\nsaplings round the house.\nIf we had found him earlier we could have\narrested him saved the crime.\nHad you obeyed orders this fire accident\nwould have been averted.\n*NOTE: The given rule is not applicable\nin the case of universal truth.\nExamples:-\nIf water reaches 100 degree celcius, it boils.\n[Universal truth]\nIf you heat water, it turns into vapour.\n[Universal truth]"
  },
  {
    "title": "Rule 5: The general rule for usage of the phrase \"one of the\" is:",
    "desc": "“One of the + PLURAL NOUN + that/who\netc. + SINGULAR/PLURAL VERB”\nSo, the noun following the phrase \"one of\nthe\" is always a plural noun\nThe RELATIVE PRONOUN\n(WHO/THAT/WHICH) is absolutely\ncrucial here:\n(1)When the relative pronoun “who/that” is\nnot used – i.e. if \"one of the NOUNs\" is\nactually the SUBJECT of the verb - then\nwe use a singular verb.",
    "example": "Examples:-\nThere are many birds on the tree. One of the\nbirds is red. [“One of the birds” is used as\nthe Subject]\n(2) When the relative pronoun “who/that”\nis used – i.e. if \"one of the NOUNs\" is not\nactually the SUBJECT of the verb - then we\nuse a plural verb.\nExamples:-\n(I)That is one of the birds that fly over my\nhouse at night.\n(II)She is one of the mothers who are really\nworking hard to make both ends meet.\nIn sentence (I), “that” acts as the subject for\nthe verb \"fly\", and “that” in this sentence\nrefers to birds (plural noun) and thus,\n“fly” (plural verb) is used.\nIn sentence (II), “who” acts as the subject for\nthe verb \"are\", and “who” in this sentence\nrefers to mothers (plural noun) and thus,\n“are” (plural verb) is used.\n(3)If the sentence follows the form, “The only\none of the + PLURAL NOUN + WHO/THAT\netc.”, a SINGULAR verb is required.\nExamples:-\nRina is the only one of the girls who has\never been to India. [Singular verb]\nThis is the only one of the novels which\nis interesting. [Singular verb]"
  },
  {
    "title": "Rule 6: If there is a combination of “Number + Unit + Noun” or, “Number + Unit + Adjective” in a sentence, we always use the singular form of the Unit.",
    "desc": "",
    "example": "Examples:-\nHe saw a ten inch snake. [Unit – Singular]\nShe gave me two five hundred rupee notes.\n[Unit – Singular]\n*NOTE: If there is a combination of “Number\n+ Unit” in a sentence, a singular Unit will\nbe used if the sentence is not self\nexplanatory , otherwise a plural Unit will be\nused if the sentence is self explanatory.\nExamples:-\nHe had five dozen. [Singular Unit]{ Not self\nexplanatory, hence we have used a\nsingular noun}\nI have five rupees. [Plural Unit]{Explanatory\n; hence we have used a plural noun}\n*NOTE: In a sentence, if there is more\nthan one Unit, Units are always arranged in\nascending order.\nExamples:-\nThousands of lakhs of students took the\ntest. [Units arranged in ascending order]\nNote:\nStudents take a test and teachers give a test.\n*NOTE: Use of words like “handful,\nglassful and fistful” as measuring units:\nSuch units are called arbitrary units\nSingular Plural\nHandful Handfuls\nGlassful Glassfuls\nFistful Fistfuls\nSpoonful Spoonfuls\nMouthful Mouthfuls\nCupful Cupfuls\nExamples:-\nHe pulled out a handful of coins from\nhis pocket. [Unit – Singular]\nI use two handfuls of pasta per person.\n[Unit – Plural]\nDrink a glassful of water with this medicine.\n[Unit – Singular]\nShe drank two whole glassfuls of orange\njuice. [Unit – Plural]\nHe has a fistful of acting awards. [Unit\n– Singular]\nAll of a sudden we just started having\nfistfuls of money. [Unit – Plural]"
  },
  {
    "title": "Rule 7: Expressions of time, money, speed, weight, height and distance, when used or covered in one way, usually take a Singular verb. However, when these expressions are used or covered in various ways, a Plural verb is used.",
    "desc": "",
    "example": "Examples:-\n(I)Ten miles needs to be covered\ncompletely on foot. [Singular verb]\n(II)Ten mile need to be covered partly by car\nand rest on foot. [Plural verb]\nIn sentence (I), the complete distance (i.e. ten\nmiles) has to be covered by just one means\n(i.e. on foot), thus a singular verb “needs” is\nused.\nIn sentence (II), the complete distance (i.e. ten\nmiles) has to be covered by two means (i.e. by\ncar and on foot), thus a plural verb “need” is\nused.\n(III)Five thousand rupees is his\nsalary. [Singular verb]\n(IV)Five thousand rupees were spent on\nfood and entertainment. [Plural verb]\n(V)Six weeks is not long enough. [Singular\nverb]\n(VI) Five kilograms is his weight."
  },
  {
    "title": "Rule 8: Certain cases of comparisons:",
    "desc": "",
    "example": "Examples:-\n(I)Gold is more precious than all\nmetals. [Incorrect]\n(II)Gold is more precious than any\nother metals. [Correct]\nLook at the above two examples carefully; in\nthe first sentence, “Gold” is itself a metal and\nis being compared with all metals which\ninclude even gold as a metal. Thus, at a point\nof time, the meaning of the sentence becomes\n– “Gold is more precious than gold”,\nwhich makes the sentence wrong.\nHowever, in the second case, gold is\ncompared with any other metals, which\nmeans gold is precious than any metal other\nthan gold. This makes the statement\nmeaningful and logical.\n(III)Diamond is more precious than\nall metals. [Correct]\nThe above sentence is correct as Diamond\nbeing a non-metal is compared to all metals.\n(IV)Kalidasa was more famous than\nall English poets. [Correct]\n(V)Kalidasa was more famous than all\npoets. [Incorrect]\nIn sentence (IV), Kalidasa is compared with\nall English poets, which is correct as Kalidasa\nwas not an English poet.\nHowever, in sentence (V), Kalidasa is\ncompared with all poets, which include\neven Kalidasa. This makes the sentence\nwrong or meaningless."
  },
  {
    "title": "Rule 9: Prepositions of Time: “Since” and “For”.",
    "desc": "The words “for” and “since” are used in\nsentences where the speaker wants to talk\nabout something that started in the past and\ncontinues into the present.\nThe preposition “for” is used to talk about\nan amount of time or space. The amount of\ntime could be seconds, minutes, hours, days,\nmonths or even years. The amount of time\ndoes not need to be exact.\nFor is used for “duration”\nSince is used to denote “Point of start”\nThe preposition “since” is used to refer to a\npoint of time. “Since” can refer to a point\nafter a specific time or event in the past or, it\ncan refer to a particular point beginning\nsometime in the past and continuing until\nthe present time. The particular point in\ntime could be anything – last Tuesday, 2008\nor midnight.",
    "example": "Examples:-\nHe has been here for 6 months and still\ncannot speak a word of German. [for + a\nperiod of time]\nI've only known her since the beginning of\nlast week. [since + a particular point in time]\nHe has been learning English\nsince childhood.\n*NOTE: “for” is used to specify a period of\ntime while “since” is used to specify a\nparticular point in time.\n*NOTE: Only the Perfect Tense or Perfect\nContinuous Tense is used before “since” and\n“for” when they denote time..\nExamples:-\nIt has been raining since 8 a.m. [Present\nPerfect Continuous Tense]\nI have had this watch since 1965. [Present\nPerfect Tense]\n*NOTE: “since” is always followed by “Simple\nPast” tense.\nExamples:-\nI had been waiting for him since the time I\nhad completed my graduation. [Incorrect]\nI had been waiting for him since the time I\ncompleted my graduation. [Correct]"
  },
  {
    "title": "Rule 10: When two actions occurred in past, the action which happened earlier is denoted by using Past Perfect Tense and the action which happened later is denoted by using Simple Past Tense.",
    "desc": "",
    "example": "Examples:-\nHe had finished the work after we had met\nhim. [Incorrect]\nHe finished the work after we had met\nhim. [Correct]\nThe patient died before the doctor\narrived. [Incorrect]\nThe patient had died before the doctor\narrived. [Correct]\nI finished the book after I had returned\nfrom college."
  },
  {
    "title": "Rule 11: We use a Possessive Adjective (my, our, his, her, their, your) before a Gerund.",
    "desc": "",
    "example": "Examples:-\nI hope you don’t mind me borrowing\nyour car. [Incorrect]\nI hope you don’t mind my borrowing\nyour car. [Correct]\nIn the above examples, notice that the only\ndifference is ‘me’ versus ‘my’. “My” is the\npossessive form of the pronoun ‘I’ or ‘me’.\nFor example, “my book” and “my idea” are\npossessives. The book and the idea belong\nto me.\n“Me” is the objective case of the pronoun.\nThus, the second example is correct—the\nsentence that uses the possessive “my”\nbecause we use a possessive before a Gerund\nand “borrowing” is a gerund. Here\n“borrowing” plays the role of a noun.\n“Gerund”\nas a noun\n------------> When V1+ING is used\nI know his reading every night has helped\nhim pass the test. [Possessive and Gerund –\nfocus is on reading]\nI hope you don’t mind my staying with you\nnext week. [Possessive and Gerund – focus\nis on staying]\nMy father doesn't like my going outside with\nRam."
  },
  {
    "title": "Rule 12: Law of Inversion:",
    "desc": "Inversion means putting the verb before the\nsubject. It is a literary technique in which the\nnormal order of words is reversed, generally\nfor emphasis or special effect.\nTwo types of Inversion:\n(1)Partial Inversion\n(2)Complete Inversion\nStructure of Sentence (Normal Sentence):\n“Subject + helping verb + Main verb + …”",
    "example": "Examples:-\nMy students are working very hard. [Normal\nsentence]\nI have never seen such a beautiful place.\n[Normal sentence]\nIn case of inversion, we start a sentence with\nthe helping verb instead of the Subject.\nStructure of Sentence (Inversion): “Helping\nverb + Subject + Main Verb + …”\nExamples:-\nNever have I seen such a beautiful place.\n[Inversion]\nIn the given example, inversion is used to\nemphasize the fact that in my whole lifetime\nI have not seen such a beautiful place.\nWe generally use Inversion when we begin\nthe sentence with an Adverb.\nExamples:-\nRarely did he go there. [Adverb +\nhelping verb + subject + main verb + …]\nSeldom have I seen such a beautiful view.\n[Adverb + helping verb + subject + main\nverb + …]\nConsider the above two examples, whenever\nwe begin a sentence with an Adverb, Law of\nInversion is followed, according to which\nAdverb will always be followed by a helping\nverb.\nAnd whenever the Adverb is followed by a\nhelping verb, we call that a Partial Inversion.\nIn the case of Complete Inversion, a\nmain verb is used after the Adverb.\nExamples:-\nHere comes the King! [Adverb + main verb +\n…]\nThere goes all our money! [Adverb + main\nverb + …]\n*NOTE: The case of “No sooner…than…”\nNo sooner had I entered the class when\nit began to rain. [Incorrect]\nNo sooner had I entered the class than\nit began to rain. [Correct]\nIn the above two examples, “No sooner” is\nused as an Adverb which is followed by a\nhelping verb “had”. But it is to be noted that\n“No sooner” always comes with “than” and\nnot with “when”.\n*NOTE: Some more examples:-\nHe never goes to temple. Neither she does.\n[Incorrect]\nHe never goes to temple. Neither does she.\n[Correct]\nIn the above examples, the first part of the\nsentence is complete. In the second part, the\nsentence is starting with an adverb “Neither”\nwhich will follow the law of inversion. Thus,\nthe helping verb “does” will come before the\nsubject “she”."
  },
  {
    "title": "Rule 13: Whenever we use normal places like school, college, church, bed, table, hospital, market, prison, jail, court, temple, mosque, university etc. for primary purpose (for which they are being made), the article “The” is not used before them. But when these places are used for secondary purpose, the article “The” is used before them.",
    "desc": "",
    "example": "Examples:-\nChildren go to school every day. [Primary\npurpose]\nHe goes to temple. [Primary purpose]\nHis home is just beside the temple.\n[Secondary purpose]\nWe go to church on fridays. [Correct]\nWe go to the church on fridays. [Incorrect]\nThe politician was sent to jail . [Correct]\nThe politician was sent to the jail.[Incorrect]\n*NOTE: It is important to understand the\ndifference between primary purpose and\nsecondary purpose. The primary purpose refers\nto work for which they are being made while\nsecondary purpose refers to any work other\nthan for which are they are being made.\nExamples:-\nHe goes to temple. [It means he goes there to\nworship]\nHe goes to the temple. [It means he goes\nthere to do any work other than worship]"
  },
  {
    "title": "Rule 14: Whenever adverbs like “No sooner”, “Hardly”, “Scarcely”, etc. are used in the beginning of a sentence, they are always followed by a helping verb.",
    "desc": "",
    "example": "Examples:-\nHardly had I begun to speak when I was\ninterrupted.\nScarcely had we started our meal when the\nphone rang.\nNo sooner had I arrived than they all\nstarted to argue.\n*NOTE: Note that adverbs “hardly, scarcely\nand barely” are always followed by “when”,\nwhile “No sooner” is followed by “than”."
  },
  {
    "title": "Rule 15: Use of Reflexive Pronoun as the Object of a sentence.",
    "desc": "The object of a sentence is the person or thing\nthat receives the action of the verb. It\nanswers the question “whom” or “what”?.\nThere are certain words which are always\nfollowed by an object: enjoy, avail, absent,\npride, adjust, reconcile, acquit, amuse,\nresign, avenge, exert, apply, adapt, etc.\nWhen these words are not followed by an\nobject in the sentence, we use the reflexive\npronouns as their object.",
    "example": "Examples:-\n(I)He enjoyed himself at the party. [Object]\n(II)She availed herself of the opportunity\nand thus got a promotion. [Object]\n(III)They enjoyed picture last evening.\n[Object]\n(IV)The former IPS officer acquitted himself\neffectively.\n(V)He absented himself from the class\nIn the first sentence, the reflexive pronoun\n“himself” does the function of an object. It\ncan be understood by finding the answer\nof, “He enjoyed whom?” – “himself”.\nSimilarly, in the second sentence, the word\n“availed” is followed by the object “herself”.\nHowever, in the third example, the word\n“enjoyed” is followed by the object “picture”.\nThus we do not need to put a reflexive\npronoun as its object.\n*NOTE: There are certain words which are\nnot followed by reflexive pronouns as their\nobject: “keep, stop, turn, qualify, bathe, move,\nrest, hide, etc.”\nExamples:-\nHe hid himself in the room. [Incorrect]\nHe hid in the room. [Correct]\nShe has qualified herself for the post.\n[Incorrect]\nShe has qualified for the post. [Correct]"
  },
  {
    "title": "Rule 16: There are certain words which are never followed by Reflexive pronoun: hide, keep, stop, turn, shave, bathe, etc.",
    "desc": "",
    "example": "Examples:-\nHe hid himself in the cave and thus saved\nhis life. [Incorrect]\nHe hid in the cave and thus saved his\nlife. [Correct]\nIn the given examples, we cannot use the\nword “himself” as the word “hid” is not\nfollowed by a reflexive pronoun."
  },
  {
    "title": "Rule 17: Whenever the two subjects are connected by “as well as, together with, along with, and not, in addition to, like, unlike, with, rather than, except, no less than, nothing but, more than one”, the verb agrees with the first Subject.",
    "desc": "",
    "example": "Examples:-\nJohn, as well as Mary, wants to drop the\ncourse. [Singular verb]\nRam, as well as his friends, keeps asking\nme many questions. [Singular verb]\nThe publisher, as well as the writers,\nhas come. [Singular verb]\nThe club members, along with his owner,\nwere arrested. [Incorrect]\nThe club members, along with his owner,\nwas arrested. [Correct]\nHe, and not his friends, are found\nguilty. [Incorrect]\nHe, and not his friends, is found guilty\n[correct]\nIn the given examples, the Subject prior to\n“as well as” is Singular, so a singular verb\n“wants” is used. Similarly, in the second case,\n“Ram” is a singular Subject which requires a\nsingular verb “keeps”.\n*NOTE: We follow the same rule (i.e. the verb\nagrees with the first Subject) when two\nsubjects are connected by “governed by”,\n“accompanied by”, “but”, “besides”, “led by”,\n“run by”, etc.\nExamples:-\nCalifornia, along with Florida, is among\nthe most popular US tourist destinations.\nThe teachers, along with the Principal, are\nentering the class. [Subject is plural in this\ncase]"
  },
  {
    "title": "Rule 18: Difference between Noun and Verb for similar sounding words, like (a)Advice – Noun (b)Advise – Verb (a)Practice – Noun (b)Practise – Verb (a) Belief-- Noun (b) Believe-- Verb",
    "desc": "",
    "example": "Examples:-\nI advise you to practise a lot since\npractice makes a man perfect.\nI'm quite good at tennis but I need to\npractise my serve.\nPractice makes a man perfect\nHe gave me a piece of advice\nIt is my belief that my students are very\ntalented.\nI believe my students.\n*NOTE: To locate noun in the sentence,\nwe generally try to find the answer of\n‘what’, ‘who’, or ‘whom’."
  },
  {
    "title": "Rule 19: There are three cases of pronouns The Subject Objecti Possessi Possessi cases of ive ve ve ve Persona Pronou Pronou Adjecti pronou l ns ns ves ns Pronou n First I Me My Mine person we us our ours Second You you your yours person Third She Her Her Hers person He Him His His It It Its --- They them their theirs Comparisons are usually done between the same things. So whenever we compare, we compare Subjective case to Subjective case and Objective case to objective case.",
    "desc": "",
    "example": "Examples:-\n1.My parents scold me more than he.\n[Correct]\n2.My parents scold me more than\nhim. [Correct]\n3.She is taller than me [INCORRECT]\n4.She is taller than I[Correct]\nConsider the above examples; in the first\ncase, the subjective case “my parents” is\ncompared with the subjective case “he”. If we\nelaborate the meaning of the sentence, it\nwould be – “My parents scold me more than\nhe does.”\nIn the second case, the objective case “me” is\ncompared with the objective case “him”. If\nwe elaborate the meaning of the sentence, it\nwould be – “My parents scold me more than\nthey scold him.”\nBoth sentences 1 and 2 are correct but\nthey have different meanings.\nShe likes chocolates more than me.\n[Incorrect]\nShe likes chocolates more than I. [Correct]\nIn the first sentence, we cannot compare\n“chocolates” with the objective case “me”.\nChocolates cannot be compared with\na person.\nSo “me” is wrong\nHowever, the second sentence compares a\nsubjective case with another subjective case.\nShe is compared to I\nHence it is correct.\nHe is as tall as I. [Correct]\nHe speaks more frequently than she[Correct]\nIn the above examples, there is no object, so\nwe cannot use an objective case."
  },
  {
    "title": "Rule 20: Who vs. Whom?",
    "desc": "“Who” is used as a subjective pronoun, and\n“Whom” is used as an objective pronoun.\nThat simply means that “who” is always as a\nsubject to a verb, and that “whom” is always\nworking as an object in a sentence. As simple\nand important as that distinction is, many\npeople have difficulty deciding on the proper\nusage of “who” and “whom” in sentences.\nTo clear this doubt, simply substitute the\npersonal pronoun “he/him” or “she/her”\nfor “who/whom.” If he or she would be the\ncorrect form, the proper choice is “who”. If\n“him” or “her” would be correct, use\n“whom.”",
    "example": "Examples:-\nMrs. Dixit consulted an astrologer whom\nshe met in Sonpur. [She met him in Sonpur.]\nJack is the man whom I went fishing with last\nspring. [I went fishing with him.]\nJyoti is the girl who got the job. [She got the\njob.]\nWhom can we turn to in a time of crisis? [Can\nwe turn to her?]\nThe delegates differed as to who they\nthought might win. [Not “whom”. Here the\nentire clause is the object of the preposition.\nSubstitution is particularly helpful in cases\nsuch as this. They thought he might win.]\nSome more examples:-\nShe is one of the professors who I think is\na mathematician.\nHe is the man whom everyone admires.\nShe met the people who they say are helping\nall aspirants.\nThey hired the man whom we interviewed\nlast week."
  },
  {
    "title": "Rule 21: Certain words like “separation, excuse, mention, favour, pardon, leave, report, sight, etc.” do not take Possessive case before them.",
    "desc": "",
    "example": "Examples:-\nYour separation pains me a lot and I become\nsad. [Incorrect]\nSeparation from you pains me a lot and\nI become sad. [Correct]\nConsider the above two examples; in the first\ncase, we cannot use “your” with “separation”\nas “your” is a Possessive Adjective.\nHowever, the first sentence can be\nrewritten to make it grammatically feasible\nwithout altering its meaning, as can be seen\nin the second sentence.\nI want your favour, will you please help me?\n[Incorrect]\nI want favour from you, will you please help\nme? [Correct]\nThe first sentence is grammatically incorrect\nas we cannot use “your favour”. However it\ncan be written as “favour from you”, as in the\nsecond sentence.\nHis mention in the story received great\napplause from audience. [Incorrect]\nMention of him in the story received\ngreat applause from audience. [Correct]\nThe first sentence is grammatically incorrect\nas we cannot use “His mention” as “his” is\nalso a Possessive Adjective.\nHowever, the first sentence can be rewritten\nto make it grammatically correct without\naltering its meaning, as can be seen in\nthe second sentence.\nAt his sight the robbers fled. [Incorrect]\nAt the sight of him, the robbers fled. [Correct]\n*NOTE: Possessive Case: your, his, her, my,\ntheir, our, its, etc."
  },
  {
    "title": "Rule 22: We use “each other” and “one another” to show that each person in a group of two or more people does something to the others. There is very little difference between each other and one another. “Each other” is generally used for two people while “one another” is used for more than two people.",
    "desc": "",
    "example": "Examples:-\nAll citizens should love each other.\n[Incorrect]\nAll citizens should love one other. [Correct]\nIn the first sentence, “all citizens” refer to\nmore than two people. So, “each other”\nshould be replaced by “one another”, as\nin the case of second sentence.\nPeter and Mary helped each other. [Peter\nhelped Mary and Mary helped Peter]\nWe sent one other Christmas cards. [We sent\nthem a Christmas card and they sent us a\nChristmas card]\n*NOTE: Difference between “other” and\n“another”:\nOther is an adjective meaning 'different' or\n'the second of two items'. Other can be used\nwith singular or plural nouns. Other can also\nbe a pronoun to refer to things or people. The\nplural form is others.\nHowever, When we use ‘an’ before ‘other’,\nwe write it as one word: another. It means\n'additional' or 'one more'. Another can be\nused before a plural noun when that noun is\npreceded by a number, or words/phrases\nsuch as a couple of, few etc.\nExamples:-\nSome children learn quickly but\nother children need more time.\nHave you got any other questions?\nOnly half of the guests have arrived. Where\nare the others? [Plural]\nThis cake is delicious. Could I have another\nslice please?\nThe investigation will take another two\nweeks/couple of weeks. [Plural]\nThis place isn’t great. Is there another place\nwe could go to? [Another can also mean ‘an\nalternative’ or ‘different’]"
  },
  {
    "title": "Rule 23: The use of “Seldom or never”:",
    "desc": "The word “Seldom” is an Adverb and when a\nsentence begins with “seldom”, the law of\ninversion will be followed.",
    "example": "Examples:-\n(I)Seldom or never he comes to my house.\n[Incorrect]\n(II)Seldom or ever he comes to my house.\n[Incorrect]\n(III)Seldom, if ever does he come to my house.\n[Correct]\n(IV)Seldom or never does he come to my\nhouse. [Correct]\n*NOTE: We can either use “Seldom or never”\nor “Seldom, if ever”, but we cannot use\n“Seldom or ever”.\n*NOTE: The use of phrase “Little\nor nothing”:\nThe phrase “Little or nothing” means “Hardly\nanything”. In this case also, we can either use\n“Little or nothing” or “Little, if everything”,\nbut we cannot use “Little or everything”.\nExamples:-\nI can find little or nothing on this table.\n[Correct]\nI can find little, if anything on this table\n[Correct]\nI can find little if nothing on this table.\n[Incorrect]\nI can find little or anything on this table.\n[Incorrect]"
  },
  {
    "title": "Rule 24: Whenever we use “very” with Superlative degree, article “the” is always used before “very” i.e. “the very superlative”.",
    "desc": "“Very” modifies present participle used as\nadjective, adverb and adjective in positive\ndegree.\nEg. It is a very interesting novel.\nHowever, when we use “much” with\nSuperlative degree, article “the” is used\nbefore the superlative i.e. “much the\nsuperlative”.\n“Much” is used with comparative degree\nand past participle.\nEg. He is much interested.\nHe is much smarter.",
    "example": "Examples:-\nHe is the much best student of my class.\n[Incorrect]\nHe is very the best student of my class.\n[Incorrect]\nHe is the very best student of my class.\n[Correct]{ It means really}\nHe is much the best student of my class.\n[Correct]{It means decidedly}\nHe is much smarter than all other students.\n[Correct]\nI was very exhausted after the\nmatch. [Correct]"
  },
  {
    "title": "Rule 25: The use of “Enough”:",
    "desc": "“Enough” plays the role of both Adverb and\nAdjective. When it is used as an Adverb, it\nqualifies an adjective, verb, or other adverb\nor a word group. When it is used as an\nAdjective, it qualifies a noun or a pronoun.\nWhen “enough” plays the role of an\nAdjective, “enough” is placed before the\nnoun or pronoun i.e. “enough noun”.\nWhen “enough” plays the role of an\nAdverb, “enough” is placed after the\nadjective i.e. “adjective enough”.",
    "example": "Examples:-\nHe has enough sugar. [Used as an Adjective]\nShe is smart enough. [Used as an Adverb]\nOn neither of those trips was there enough\nsun to get any decent photographs. [Used\nas an Adjective]\nTest reports indicate that it develops enough\npower for the job and is flexible. [Used as an\nAdjective]\nYou are not big enough for basketball.\n[Used as an Adverb]\nA landing between the ground and first\nfloors is ample enough to be used as a study.\n[Used as an Adverb]"
  },
  {
    "title": "Rule 26: The use of Adverb “as”:",
    "desc": "“as” can be used as an adverb with these\ngiven words – “treat, define, regard, describe,\nrespect,depict, portray,view, know, etc.”\nHowever, “as” cannot be used as an adverb\nwith these two words – “elect, name, think,\nconsider, call, make, choose, appoint, etc.”",
    "example": "Examples:-\nBiology is defined as the science of\nliving beings.\nHe is regarded as God in India.\nShe described Gary as shy.\nHis latest film is described as a\n'romantic comedy'.\nShe is treated as a child.\nShe was elected Chair of the Board of\nGovernors.\nHe has just been appointed director of the\npublishing division.\nHe thinks her a fool.\nThe teacher called him stupid."
  },
  {
    "title": "Rule 27: The use of Conjunction “although”:",
    "desc": "“Although”, meaning “in spite of something”,\nis a subordinating conjunction. This means\nthat the clause which it introduces is a\nsubordinate clause, which needs a main\nclause to make it complete. Sometimes\n“although” as a subordinate clause may take\n“yet” in the main clause. However,\n“although” as a subordinate clause never\ntakes “but” in the main clause.\nYet is optional. It can or cannot be used.",
    "example": "Examples:-\nAlthough she is rich, she thinks twice\nbefore spending a penny. [Correct]\nAlthough she is rich, yet she thinks twice\nbefore spending a penny. [Correct]\nAlthough she is rich, but she thinks twice\nbefore spending a penny. [Incorrect]"
  },
  {
    "title": "Rule 28: There are certain verbs which do not exist in “-ing” form.",
    "desc": "These are:\nPOSSESSI PERCEPTI FEELING\nON ON\nOwn See Love\nBelong Smell Know\nHave Taste Think\nInclude Hear Hate\nPossess Feel Want\nOwe Appear Need\nContain Seem Desire\nCompromis Resemble Wish\ne\nNotice Like\nConsist",
    "example": "Examples:-\nI am owning a car. [Incorrect]\nI own a car. [Correct]\nI am loving it. [Incorrect]\nI love it. [Correct]\nThis sauce is tasting strange. [Incorrect]\nThis sauce tastes strange. [Correct]\nThis perfume is smelling like roses.\n[Incorrect]\nThis perfume smells like roses. [Correct]\nShe has always been hating jazz. [Incorrect]\nShe has always hated jazz. [Correct]\nAll the luggage is belonging to me. [Incorrect]\nAll the luggage belongs to me. [Correct]\n*NOTE: Sometimes the word “loving” is\nused as an adjective, which should not be\nconfused with a verb.\nExamples:-\nHe is a very loving person. [Used as an\nAdjective]\nHe described his work in loving detail.\n[Used as an Adjective]\n*NOTE: When “have” is used in the sense of\npossession or belongingness or ownership, we\ncannot use “having”. However, apart from\nthis, we can use “having” as perfect participle\nor in other cases.\nExamples:-\n(I)I am having a book. [Incorrect]\n(II)I have a book. [Correct]\n(III)I am having lunch now. [Correct]\n(IV)Having done the work, he went to play.\n[Correct]\nIn sentence (I), “have” denotes possession,\nso we cannot use “having” and it should be\nreplaced by “have” as rightly done in\nsentence (II).\nIn sentences (III) and (IV), “have” is not used\nin the sense of possession or belongingness or\nownership, thus “having” is correctly used\nin these two sentences."
  },
  {
    "title": "Rule 29: There are certain words which are always used in Perfect Tense: “ever, never, yet, already, now, just now, until, now, always, occasionally, often, lately, recently, so far, upto now, upto the present”",
    "desc": "",
    "example": "Examples:-\nThe concert had already begun by the time we\narrived. [Correct]\nI went to Paris last summer. Have you ever\nbeen there? [Correct]\nI have not spoken to her yet. [Correct]\nHe has gone just now. [Correct]\nHe went there already. [Incorrect]\nHe had gone there already. [Correct]\nAman completed his work upto now\n. [Incorrect]\nAman has not completed his work upto now .\n[Correct]\nThe train already left. [Incorrect]\nThe train has already left. [Correct]"
  },
  {
    "title": "Rule 30: Subject-Verb Agreement with Collective Nouns:",
    "desc": "When a collective noun denotes that the\nwhole group is working together on the\nsame task, we use a singular verb.",
    "example": "Examples:-\nThe audience is watching the movie. [every\naudience is watching together]\nThe army is marching towards the\nHimalayas. [whole army (personnel) is\nmoving together]\nThe jury is taking a decision. [all the members\nof the jury is taking decision together]\nWhen a collective noun denotes that the\nwhole group is working on different tasks,\nwe use a plural verb.\nExamples:-\nThe audience are taking the seats.\nThe army are changing their dresses.\nThe jury are divided in their opinion.\n*NOTE: Words like “police, vermin,\ncattle,clergy,gentry,poultry,folk,peasantry,\npeople, infantry, cavalry, etc.” are “plural\nnouns” and not “collective nouns”. Plural\nnoun always takes a plural verb.\nSo these words always take plural verbs.\nExamples:-\nThe police are investigating the case.\nCattle are wandering in the farm.\nPeople want to attain all worldly pleasures..\n*NOTE: Sometimes the word “people” is\nused in the meaning of “a country” instead\nof “persons”, in that case we use a singular\nverb.Peoples means countries or people\nbelonging to different nationalities.\n“Peoples” in that case is correct."
  },
  {
    "title": "Rule 31: There are certain words which are always followed by the preposition “to”.",
    "desc": "These are:\nPrefer Superior Inferior\nInjurious Junior Ancillary\nAddicted Senior Exterior\nKnown Ulterior Posterior\n*NOTE: Any word suffixed with “-ior” will\nalways be followed by the preposition “to”.",
    "example": "Examples:-\nFor babies, breastfeeding is superior to\nbottle-feeding.\nToo much alcohol is injurious to your health.\nWould you prefer to pay by cash, cheque,\nor credit card?\nThey promoted a man who was junior to\nme and made him my boss.\nParagraph 19 was merely ancillary to\nparagraph 16.\nI prefer tea to coffee.\n*NOTE: The words “marry” and “known”\nare always followed by the preposition “to”\nin the Passive voice.\nExamples:-\nRama is married to Sita.\nI am known to him.\nI am known by him.--------> Incorrect"
  },
  {
    "title": "Rule 32: The use of phrase “as… as” and “so… as”:",
    "desc": "These blanks are filled up with the adjectives\nof positive degree.",
    "example": "Examples:-\nIf we pass on the information, he's as good\nas dead.\nI'm not so desperate as to agree to that.\n*NOTE: “as… as” can be used to denote both\npositive and negative sentences while “so…\nas” can only be used only to denote negative\nsentences.\nExamples:-\nHe is as good as Ram. [Correct]\nHe is not as good as Ram. [Correct]\nHe is not so good as Ram. [Correct]\nHe is so good as Ram. [Incorrect]"
  },
  {
    "title": "Rule 33: In a sentence depicting comparison, whenever the word “times” comes up, it is never followed by a comparative degree.",
    "desc": "",
    "example": "Examples:-\n(I)This book is three times larger than that\nbook. [Incorrect]\n(II)This book is three times heavier than\nthat book. [Incorrect]\n(III)It is twice cheaper than that.\n[Correct]{Times is not written , hence it\nis correct}\n(IV)This book is three times as large as that\nbook. [Correct]\n(V)It is twice costlier than that. [Correct]\n(VI)It is two times as costly as that. [Correct]\nIn sentence (I), the word “times” and the\ncomparative degree “larger” cannot be used\ntogether. The sentence should be rewritten\neither as sentence (IV) to make it\ngrammatically correct.\nIn sentences (III) and (V), there is no use of\nthe word “times” and thus we can use the\ncomparative degree to bring up the\ncomparisons."
  },
  {
    "title": "Rule 34: Some common errors of NARRATION:",
    "desc": "Indirect Speech is always a statement.\nStructure of a statement\nSubject + Helping Verb + Main Verb\n+.............\nStructure of a question\nWh word + Helping verb + Subject + Main\nVerb +...............\nHence a helping verb comes after a subject in\nthe case of a statement and before a subject\nin the case of a question.",
    "example": "Examples:-\nHe asked me where are you going. [Incorrect]\nHe asked me where I was going. [Correct]\nHe asked me what was my name. [Incorrect]\nHe asked me what my name was. [Correct]\nShe says that she is a little bit nervous. [Direct\nspeech was an Assertive sentence]\nThe teacher ordered me to shut the door.\n[Direct speech was an Imperative sentence]\nHe exclaimed with great joy that he had won\nthe match. [Direct speech was an\nExclamatory sentence]\nWe asked him if he was ill. [Direct speech was\nan Interrogative sentence]\nHe prayed that I might live long. [Direct\nspeech was an Optative sentence]\nShe wished she had been rich. [Direct\nspeech was an Optative sentence]\nBut, all the indirect speeches are\nalways statements."
  },
  {
    "title": "Rule 35: If two subjects are connected by the words \"or,\" \"nor,\" \"neither/nor,\" \"either/or,\" or \"not only/but also\", we use the verb according to the nearest subject.",
    "desc": "",
    "example": "Examples:-\nEither the bears or the lion has escaped from\nthe zoo. [Nearest subject “lion” is singular]\nNeither the lion nor the bears have escaped\nfrom the zoo. [Nearest subject “bears” is\nplural]\nNot only the teachers but also the Principal is\nhappy. [Nearest subject “Principal” is\nsingular]\nNot only dogs but also cats are available at\nthe animal shelter. [Nearest subject “cats” is\nplural]"
  },
  {
    "title": "Rule 36: Comparison between two qualities of an object:",
    "desc": "Whenever two qualities of an object are\ncompared, we always use the word\n“more”. We don’t use comparative degree\nin that case.",
    "example": "Examples:-\nThis pen is redder than white. [Incorrect]\nThis book is heavier than larger. [Incorrect]\nThis shirt is more white than red. [Correct]\nThis umbrella is more beautiful than\nstrong. [Correct]"
  },
  {
    "title": "Rule 37: Whenever “more than one” or “many a” is used to quantify a noun, it is always followed by a singular noun and a singular verb.",
    "desc": "And whenever “Many, A good many, A great\nmany” are used to quantify a noun, they are\nalways followed by a plural noun and a\nplural verb.",
    "example": "Example:-\nA great many devotees are protesting to\nbuild ram mandir .\nMany tigers are missing from the national\npark.\nStructure:\nMore than one + singular noun +\nsingular verb\nMany a + singular noun + singular verb\nA great many + plural noun + plural verb\nA good many + plural noun + plural verb\nExamples:-\nMore than one student is absent today.\n[Singular verb]\nMany a student is absent today.\n[Singular verb]\n*NOTE: Also consider the\nfollowing examples:\nOne student is absent today. [Singular verb]\nA great many students are absent today.\n[Plural verb]\nMany students are absent today. [Plural\nverb]"
  },
  {
    "title": "Rule 38: Whenever we get the word “doubt” or “doubtful” in a sentence, we use the connector either “if” or “whether”. However, in case we get the words “no doubt” and “not doubtful”, we use the connector “that”.",
    "desc": "",
    "example": "Examples:-\nI have no doubt whether it will rain or\nnot. [Incorrect]\nI have no doubt that it will rain or\nnot. [Correct]\nThere is a doubt that he goes there or\nnot. [Incorrect]\nThere is a doubt whether he goes there or not.\n[Correct]\nHe has no doubt if Shyam is his best\nfriend. [Incorrect]\nHe has no doubt that Shyam is his best\nfriend. [Correct]"
  },
  {
    "title": "Rule 39: NARRATION, Sequence of Tenses:",
    "desc": "The tense of the verb does not change even if\nthe Reporting verb is in past tense for the\nfollowing cases:\n(1)Universal truth:",
    "example": "Examples:-\n(I)He told me that honey was sweet.\n[Incorrect]\n(II)He told me that honey is sweet. [Correct]\n(III)He told me that the honey is\nsweet. [Incorrect]\n(IV)He told me that the honey was\nsweet. [Correct]\nIn sentence (I), the sentence is incorrect\nbecause “honey is sweet” is a universal\ntruth and should be written in Simple\nPresent Tense in indirect speech as well.\nThis makes the statement (II) correct.\nIn sentence (III), the sentence is incorrect\nbecause “the honey is sweet” is not a\nuniversal truth as “the honey” denotes a\nparticular type of honey. Thus, the indirect\nstatement should follow the tense form of\nmain clause as correctly done in\nstatement (IV).\n*NOTE: Sequence of Tenses suggests that if\nthe principal clause of the sentence is in Past\nTense, subordinate clause will also be in the\nPast Tense.\n(2)Historical Facts:\nExamples:-\nThe teacher said, “Kalidas is the\nShakespeare of India.” [Direct Speech]\nThe teacher said that Kalidas is the\nShakespeare of India. [Indirect Speech]\n(3)Proverbs:\nExamples:-\nRohit said, “Where there is a will there is a\nway.” [Direct Speech]\nRohit said that where there is a will there is\na way. [Indirect Speech]\n(4)Habitual Facts:\nExamples:-\nHe said, “I snooze my alarm every day.”\n[Direct Speech]\nHe said that he snoozes his alarm every day.\n[Indirect Speech]"
  },
  {
    "title": "Rule 40: Use of little, the little and a little:",
    "desc": "We use these quantifiers with uncountable\nnouns according to their following meanings:\n(1)Little: Hardly any\n(2)A little: Some but not much\n(3)The little: All that is available",
    "example": "Examples:-\nI cannot make tea since there is little milk.\n[Hardly any milk]\nA little knowledge is dangerous. [ Some but\nnot much]\nHe utilized the little water that was available.\n[ All that is available]\n*NOTE: Use of few, a few and the few:\nWe use these quantifiers with countable\nnouns according to their following meanings:\n(1)Few: Hardly any\n(2)A few: Some but not many (It has\na positive meaning)\n(3)The few: All that are available\nExamples:-\nFew members attended the meeting.\n[Hardly any member attended the meeting.]\nThere were a few members present. [Some\nmembers were present.]\nHe lost the few friends he had. [All those\nhe had]\n*NOTE: Use of some and any:\nThe general rule is that “any” is used for\nquestions and negative sentences while\n“some” is used for positive sentences.\nBoth may be used with countable\nand uncountable nouns.\nExamples:-\nDo we need any rice?\nNo, we don’t need any rice.\nWe have some rice in the cupboard.\nWould you like some water?\nMay I have some more chocolate?\nBut in some cases “Some” is used\nwith interrogative sentences\nWhen we know that the answer will be\nyes, we can use “some” .\nEg. Do you have some water???\nIt is correct because we know already\nthat the answer will be yes."
  },
  {
    "title": "Rule 41: Objective Case of the pronoun comes after the Preposition.",
    "desc": "SUBJECTIVE OBJECTIVE\nCASE CASE\nI me\nWe us\nYou you\nThey them\nHe him\nShe her\nIt it",
    "example": "Examples:-\nNone but he is going to the party. [Incorrect]\nNone but him is going to the party. [Correct]\nAll except he liked the performance.\n[Incorrect]\nAll except him liked the\nperformance. [Correct]\nIn the first sentence, “but” plays the role of\npreposition, so it must be followed by a\npronoun of objective case. Similarly, “except”\nin the third sentence is a preposition which\nshould be followed by the pronoun of\nobjective case.\n*NOTE: “But” plays the role of both\n“Conjunction” and “Preposition”.\nVerb is also followed by the pronoun\nof Objective case.\nExamples:-\nLet him do that work. [“Let” acts as a\nverb here]\nThey agreed to let us live there rent-\nfree. [“Let” acts as a verb here]\nSome more examples:-\nRam as well as he is going to the party.\n[Correct]\nThere is good friendship between you and\nhim. [Correct]\nIt is to be noted that in the first sentence, “as\nwell as” is not used as a preposition, so the\nsubjective case “he” is correctly used.\nIn the second sentence, “between” is a\npreposition so objective case is used after it."
  },
  {
    "title": "Rule 42: (1) In case of pronouns as the Subject, when all the three persons are used as the Subject of the sentence and are connected by ‘and’, the sequence of 231 of the Pronouns is followed if they give a Positive Sense to the sentence and a plural verb is used.",
    "desc": "We use 2nd person, then 3rd person is\nused and finally 1st person is used.\n1 Speaker I\nFirst Person\n2 Listener You\nSecond\nPerson\n3 Non Active He\nThird\nPerson",
    "example": "Examples:-\nYou, he and I are good friends. [the sequence\nof 231 of the pronouns]\n(2) In case of pronouns as the Subject, when\nonly two persons are used as the Subject of\nthe sentence and are connected by ‘and’, the\nsequence of (2,3); (2,1); (3,1) of the Pronouns\nis followed if they give a Positive Sense to the\nsentence and a plural verb is used.\nExamples:-\nYou and she are good friends. [the sequence\nof (2,3) of the pronouns]\nYou and I are playing chess. [the sequence\nof (2,1) of the pronouns]\nHe and I were watching T.V. [the sequence\nof (3,1) of the pronouns]\n(3) In case of pronouns as the Subject,\nwhen all the three persons are used as the\nSubject of the sentence and are connected\nby ‘and’, the sequence of 123 of the\nPronouns is followed if they give a Negative\nSense to the sentence and a plural verb is\nused.They generally talk about some\nmistake,blame or guilt.\nExamples:-\nI, you and he are guilty. [the sequence of 123\nof the pronouns]\nI, you and he are robbers. [the sequence\nof 123 of the pronouns]\n(4) In case of pronouns as the Subject, when\nonly two persons are used as the Subject of\nthe sentence and are connected by ‘and’, the\nsequence of (1,2); (2,3); (1,3) of the Pronouns\nis followed if they give a Negative Sense to\nthe sentence and a plural verb is used.\nExamples:-\nI and you have committed a crime. [the\nsequence of (1,2) of the pronouns]\nYou and he are sinners. [the sequence of\n(2,3) of the pronouns]\nI and he were guilty. [the sequence of (1,3) of\nthe pronouns]\nIf all the pronouns are plural , we use\nthe order 123 in all cases.\nWe, you and they are going to watch a movie."
  },
  {
    "title": "Rule 43: Some Superfluousness Errors:",
    "desc": "Superfluousness means that more than\nrequired is given in the sentence. It\nmeans extra.\nConsider these examples:-\n(I)India broke all previous records in\ntoday’s match. [Incorrect]\nThe above sentence is Superfluous as\n“records” always specifies “previous”. Using\nthem together makes the statement\nsuperfluous. It should be rewritten as –\nIndia broke all records in today’s\nmatch. [Correct]\n(II)I want wet water. [Incorrect]\nWater is already wet and we all know it.\nHence this sentence contains extra words and\nsuperfluousness error is there.\nI want water. [Correct]\nIn the above example, “water” is always\n“wet”, so we cannot use these two words\ntogether as it will give us the superfluous\nmeaning.\n(III) Suppose if you won the Oscar, what\nwould you do? [Incorrect]\nSuppose you won the Oscar, what would you\ndo? [Correct]\nIn the above example, the usage of 'if' with\n'suppose' is superfluous. Hence, either\n'suppose' or 'if' should be used.\n*NOTE: Use of “supposing if”: “If” is not\nneeded with “supposing”. It's a wrong\nusage. Use only “supposing”.\n(IV) The army retreated back from the\nconflict zone in Kashmir. [Incorrect]\nThe army retreated from the conflict zone in\nKashmir. [Correct]\nAgain in the above example, 'back' won't be\nused here. 'Retreat' itself means – to\nwithdraw, retire etc. We use only “retreat”.\n(V) The sage was reborn again in\nVijayanagara. [Incorrect]\nThe sage was reborn in\nVijayanagara. [Correct]\n*NOTE: Never use 'again' after verbs like –\nRebirth/Reborn/rebuild/regain/reiterate/recast\netc.\n(VI) Manu is equally as good as Sharma.\n[Incorrect]\nManu and Sharma are equally good.\n[Correct]\nManu is as good as Sharma. [Correct]\nIn the above example, the usage of 'as'\nshould strictly be discarded. Use only\n'equally' or 'as good as' separately.\n(VII) The manager and the chairman decided\non a mutual agreement on profit. [Incorrect]\nThe manager and the chairman decided\non an agreement on profit. [Correct]\nIn this case the usage of 'mutual' is wrong.\nHence, use only 'agreement'.\n“Agreement” is always mutual.\n*NOTE: 'Mutual friend' is wrong to say.\nInstead we can say 'common friend'.\nLikewise, we should say – 'common\ninterest' instead 'mutual interest'.\n(VIII) She forbade me not to leave her alone.\n[Incorrect]\nShe forbade me to leave her alone. [Correct]\nIn the above example, ‘Not' is never used\nafter\nuntil/unless/forbid/prohibit/prevent/dissuade/d\neny/refuse/lest.\n(IX) He's a coward man/person. [Incorrect]\nHe is a coward. [Correct]\nThe usage of 'coward man' is wrong because\n‘coward’ itself means a person who lacks\ncourage. Hence, the use of 'man' is illogical.\n(X) She left the house with bag and baggage.\n[Incorrect]\nShe left the house, bag and baggage. [Correct]\n'Bag and baggage' is an idiom which means\n'with all belongings'. Hence, using ‘with’\nwith the idiom is wrong.\n(XI) Passing marks are thirty three.\n[Incorrect]\nPass marks are thirty three. [Correct]\nThe usage of 'passing marks'/'linking\nlanguage'/'linking network'/'dressing sense’ is\nwrong. Instead, we should use 'pass\nmarks'/'link language'/'link network'/'dress\nsense'.\n(XII) I suddenly came across him on the\ntrain. [Incorrect]\nI came across him on the train. [Correct]\nIn the above example, Omit 'suddenly' as\n'come across' means to meet suddenly.\nSome more superfluous errors:\n(1)final destination. [Destination is\nalways final]\n(2)rough estimate. [Estimate is always rough]\n(3)rough approximation. [Approximation\nis always rough; not exact]\n(4)past history. [History is always past]\n(5)return back. [Return itself means\ncome back]\n(6)coming future. [Future is always coming]\n(7)reason because. [Reason itself means cause\nso]\n(8)consensus opinion. [Consensus itself\nmeans collective opinion or agreement]\n(9)final conclusion. [Conclusion is\nalways final]\n(10)Funeral service. [Funeral itself a\nceremony and service]\n*NOTE: “enter into” is also an example of\nsuperfluous error. However, when “enter into”\nis used as a phrasal verb, it means\n“investigation”.",
    "example": ""
  },
  {
    "title": "Rule 44: Use of Apostrophe (‘s):",
    "desc": "Apostrophe (‘s) is not used with non-living\nthings.",
    "example": "Examples:-\nTable’s legs. [Incorrect]\nDoor’s bolt. [Incorrect]\nPen’s ink. [Incorrect]\nBook’s page. [Incorrect]\nChair’s legs. [Incorrect]\nThese can be rewritten as:\nLegs of the table. [Correct]\nBolt of the door. [Correct]\nInk of the pen. [Correct]\nPage of the book. [Correct]\nLegs of the chair. [Correct]\n*NOTE: There are some exceptions to this\nrule. When we talk about time,\nweight,distance,place, idiom, unit,\npersonification, or heavenly body, we can\nuse Apostrophe (‘s) with them.\nExamples:-\nOne week’s vacation. [Correct]\nFour dollars’ worth. [Correct]\nToday's date. [Correct]\nThe ship's bells. [Correct]\nThe city's parks. [Correct]\nMalaysia's land. [Correct]\nNature’s call [Correct]\nAt stone’s throw[ Correct]\n*NOTE: The following pronouns are already\npossessive and do not require apostrophes:\nyours, ours, its, theirs, his, hers, and whose."
  },
  {
    "title": "Rule 45: Whenever a point of time in the past is mentioned in the sentence (i.e.",
    "desc": "yesterday, 10 days ago, etc.), we always use\n“Simple Past” tense.",
    "example": "Examples:-\nI have gone to the market yesterday to\npurchase a car. [Incorrect]\nI went to the market yesterday to purchase a\ncar. [Correct]\nThe company's shares have dived by 90p\nto 165p on the stock market last week.\n[Incorrect]\nThe company's shares dived by 90p to 165p\non the stock market last week. [Correct]"
  },
  {
    "title": "Rule 46: There are certain words like “unique, excellent, perfect, ideal, entire, complete, etc.” which are never used with “most”.",
    "desc": "The table is as follows\nchief round uniqu total whole singul\ne ar\nRecta squar excelle Spher extre annua\nngula e nt ical me l\nr\ngolde deaf blind right Empt circul\nn y ar\nWron impos perfec Entire extern ideal\ng sible t al\nsolar Perfec Comp\nt lete",
    "example": "Examples:-\nHe is the most excellent student. [Incorrect]\nHe is an excellent student. [Correct]\nThis is the most unique product of\nour company. [Incorrect]\nThis is a unique product of our\ncompany. [Correct]\nHe is completely perfect. [Incorrect]\nHe is perfect. [Correct]\nI think you’re the most perfect person I’ve\never met. [Correct]"
  },
  {
    "title": "Rule 47: Words like “Quite” and “all” are never used together in a sentence.",
    "desc": "",
    "example": "Examples:-\nHe is quite all well. [Incorrect]\nHe is quite well. [Correct]\nHe has done quite all the work. [Incorrect]\nHe has done all the work. [Correct]\n*NOTE: Do not get confused with the similar\nsounding words like “Quiet” and “Quite”.\nQuiet is a Noun which means the state\nof being silent.\nQuite is an Adverb which means completely."
  },
  {
    "title": "Rule 48: Determination of tense based on words like “ago” and “before”:",
    "desc": "We generally use Simple Past Tense when the\nword “ago” is mentioned in the sentence.\nIn the case of “before”, we use Past\nPerfect Tense.",
    "example": "Examples:-\nHe had gone two seconds ago. [Incorrect]\nHe went two seconds ago. [Correct]\nShe had submitted the work five hours\nago. [Incorrect]\nShe submitted the work five hours ago.\n[Correct]\nThe patient died before the doctor came.\n[Incorrect]\nThe patient had died before the doctor\ncame. [Correct]\nIn the last sentence, two actions have\nhappened in the past, so for the earlier\naction we use “had + V3” and for the latter\naction we use “V2”."
  },
  {
    "title": "Rule 49: Use of Possessive sign:",
    "desc": "(1)Common Possession: When two nouns are\nclosely connected or implying the common\npossession, the possessive sign is put to\nthe latter(last one).",
    "example": "Examples:-\n1.Ram and Shyam’s car is being decorated\nfor Balram’s marriage. [Correct]\n2.Ram and Shyam’s cars are being\ndecorated for Balram’s\nmarriage. [Correct]\nBoth the sentences are correct\nIn the first sentence, there is one car which\nbelongs to both Ram and Shyam\n[Common Possession]\nIn the second sentence, there is more than\none car which belongs to both Ram and\nShyam [Common Possession]\n(2)Split Possession: Each of two or more\nconnected nouns implying separate\npossession must take the possessive sign.\nExamples:-\nRam’s and Shyam’s car is being decorated for\nBalram’s marriage. [Incorrect]\nRam’s and Shyam’s cars are being\ndecorated for Balram’s marriage. [Correct]\nIn the above examples, the possessive sign\nwith each subject denotes that at least two\ncars are being decorated one of Ram and\nother of Shyam (i.e. Ram’s car and Shyam’s\ncar), so a plural noun “cars” is used and it\nwill take a plural verb."
  },
  {
    "title": "Rule 50: Some common errors of Possession:",
    "desc": "We often make mistake by using “it’s” in\nplace of “its”. Both these terms have separate\nmeanings.\n“It’s” denotes “It is”, while “its”\ndenotes possession.",
    "example": "Examples:-\nThe child is carrying it’s book. [Incorrect]\nThe child is carrying its book. [Correct]\nIts called a miracle. [Incorrect]\nIt’s called a miracle. [Correct]"
  },
  {
    "title": "Rule 51: Rule for using “A number of” and “The number of”:",
    "desc": "We use the following structures with these\ntwo:\n“A number of + Plural Noun + Plural Verb”\n“The number of + Plural Noun + Singular\nVerb”\nSimilar rule is there for “A variety of”\nand “The variety of”",
    "example": "Examples:-\nA number of students are waiting here.\nThe number of students is fifty.\nA number of tickets were sold almost\nimmediately.\nThe number of employees taking legal action\nover work-related disease is increasing."
  },
  {
    "title": "Rule 52: Use of the phrase “It is time” , “It is high time” or “It is about time”:",
    "desc": "With the phrases like “It is time” and “It is\nhigh time”, we follow either of the two\nconditions:\n(1)The phrase should be followed by “to +\nV1” if there is no Subject attached to it.",
    "example": "Examples:-\nIt is time to work hard.\nIt is time to ask for a raise.\n(2)If the phrase is directly followed by a\nSubject, we use the verb form “V2” (past\ntense) after the subject.\nExamples:-\nIt is time he worked hard. [followed by the\nsubject “he”]\nGosh! It’s almost midnight. It is time we\nwent home. [followed by the subject “we”]\n*NOTE: We use the expression “it’s time +\nsubject + past verb form” to refer to the present\nmoment."
  },
  {
    "title": "Rule 53: Use of preposition with the word “Angry”:",
    "desc": "(1)We use the preposition “with” with\n“angry” whenever we refer a person or living\nthing for the purpose.",
    "example": "Examples:-\nI got really angry with her.\nI am angry with Shyam because he did not go\nto the class.\n(2)We use the preposition “at” with\n“angry” whenever we refer something other\nthan person or living thing.\nExamples:-\nThe local residents were angry at the lack of\nparking spaces.\nThey are angry at the way they have been\ntreated.\n*NOTE: We follow the same rule with word\n“Annoy”."
  },
  {
    "title": "Rule 54: Whenever the word “know” is used in a sentence, it is not directly followed by the infinitive “to”. We use the words like “how, when, why, where, etc.” to make the sentence grammatically feasible.",
    "desc": "",
    "example": "Examples:-\nI do not know what all the fuss is about.\nI do not know how to make tea; hence\nyou should help me out.\nI don't know to make tea [Incorrect]\nDo you know where the Post Office is?"
  },
  {
    "title": "Rule 55: The adverb “else” is always followed by “but” while the adverbs “other, and rather” are always followed by “than”.",
    "desc": "",
    "example": "Examples:-\nIt is nothing else but mere foolishness.\nEverybody else has agreed but you.\nHe met no other person than Ram.\nI think I would rather stay at home\nthis evening than go out."
  },
  {
    "title": "Rule 56: The words like “sort, type, kind, etc.” are always followed by a Singular verb.",
    "desc": "",
    "example": "Examples:-\nThis type of articles is sold in the market.\nThis sort of camera is very expensive.\nAny kind of racism is abhorrent to me."
  },
  {
    "title": "Rule 57: Use of the prepositions “in”, “Inside” and “into”:",
    "desc": "(1)The preposition “inside” implies\n“movement”. Whenever we move from\noutside to inside, we use “inside”.",
    "example": "Examples:-\nI came inside the class.\nHe tried to get inside her mind.\n*NOTE: “Inside out” is completely different\nfrom “In” and “Inside”. It means if something\nis inside out, it has the usual inside part on the\noutside and the usual outside part on the\ninside.\nThere is one more meaning of “Inside out”\nwhich is “completely”\nExamples:-\nI know my husband inside out. [completely]\nShe had her sweater on inside out.\n(2)The preposition “in” implies “static”.\nWhenever something referred is\nalready inside, we use “in”.\nExamples:-\nI am in the class.\nThe chlorine in the pool makes my eyes sore.\n(3)The preposition “into” implies “coming\ntoward something”. Whenever we move to a\nposition in or inside something, we use “into”.\nIt is also used to show a change in state.\nExamples:-\nCome into the house.\nHe threw the letter into the fire.\nCan you translate this passage into German?\nThe fruit can be made into jam.\nHe jumped into the well.\nShe wove her ideas into a story."
  },
  {
    "title": "Rule 58: Use of the prepositions “with” and “by”.",
    "desc": "(1)We use “with” when we refer non-living\nthings.",
    "example": "Examples:-\nWe write with a pen. [Pen being a non-\nliving thing]\nShe wiped her lipstick off with a tissue.\n[Tissue being a non-living thing]\nHe hit the dog with a stick. [Stick being a non-\nliving thing]\n(2) We use “by” when we refer living things.\nExamples:-\nThe motorcycle was driven by a tiny\nbald man.\nThe book was translated by a well-known\nauthor.\nAny painting by Van Gogh is worth a fortune.\n*NOTE: Whenever we talk about “watch”,\nwe use “by”.\nWhat is the time by your watch? [ In your\nwatch in incorrect]\nExamples:-\nShe had promised to be back by five o'clock.\n[referring time]\nI have got to be home by seven. [referring\ntime]"
  },
  {
    "title": "Rule 59: We do not use the preposition “from” with the word “start”.",
    "desc": "",
    "example": "Examples:-\nMy exams start from Monday. [Incorrect]\nMy exams start on Monday. [Correct]\nIn the first sentence, the preposition “from”\ngives the meaning that my exams will start on\nMonday, it will again start on Tuesday and it\nwill continue doing so. Thus, an event started\nonce cannot start again and again. To avoid\nthis error, we use the correct preposition\n“on” which implies that event has started on\nMonday only.\nSome more examples:-\nHe will start his preparation from Monday.\n[Incorrect]\nHe will start his preparation on\nMonday. [Correct]\nHowever, we can rewrite this sentence\nusing “from” this way:-\nHe will prepare for the exams from Monday.\n[Correct]\n*NOTE: “from” implies continuation."
  },
  {
    "title": "Rule 60: In a general case of infinitive we always use the form “To + V1”. But in certain special cases, we use the form “To + V1+ing”.",
    "desc": "There are certain words which always follow\n“To + V1+ing” form:-\n(1)be + used + to + V1+ing\n(2)accustomed to + V1+ing\n(3)addicted to + V1+ing\n(4)with a view to + V1+ing\n(5)look forward to + V1+ing\n(6)given to + V1+ing\n(7)prone to + V1+ing\n(8)devoted to + V1+ing\n(9)in addition to + V1+ing\n(10)confess to\n(11)disposed to\n(12)come to",
    "example": "Examples:-\nShe was given to staying in bed till lunchtime.\nThese measures have been taken with a view\nto increasing the company's profits.\nI look forward to hearing from you.\nHe is rather prone to making tactless\nremarks.\nShe has devoted herself to getting justice for\nher son.\nI am not accustomed to being treated like this.\n*NOTE: When we use the form “V1+ing” as\na noun, it is called Gerund."
  },
  {
    "title": "Rule 61: The choice between the two indefinite articles – ‘a’ & ‘an’ – is determined by sound. Words beginning with consonant sounds are preceded by ‘a’ and words beginning with vowel sounds are preceded by ‘an’.",
    "desc": "Vowels – a, e, i, o, and u\nConsonants – b, c, d, f, … z",
    "example": "Examples:-\nAn NCC cadet. [Vowel sounding word]\nA UNICEF participating nation.\n[Consonant sounding word]\nAn umbrella. [Vowel sounding word]\nAn M. Tech. graduate. [Vowel\nsounding word]\nA utensil. [Consonant sounding word]\nA university. [Consonant sounding word]\nA unicorn. [Consonant sounding word]\nA year. [exception][With every word that\nstarts with “y” and “w” we use article “a”]\nA European university\nA Universit\ny A Uniform\nA one-rupee note\nA Union\nA one-eyed girl\nA unanimous decision."
  },
  {
    "title": "Rule 62: Usage of definite ARTICLE “The”:",
    "desc": "(1)Series of Mountains, Bays/Gulfs,Group of\nislands, Canals, Aeroplanes, Ships, Planes,\nReligious books, Government branches,\nArmed forces, Names of Deserts,Political\nparties, Musical instrument, Rivers, Oceans,\nSeas, and things which are “unique” in\nthemselves: These nouns are always preceded\nby a definite article “The”.",
    "example": "Examples:-\nThe Sahara. [Name of Desert]\nThe Pacific. [Name of Ocean]\nThe Nile. [Name of river]\nThe Coral sea. [Name of sea]\nThe Himalayas. [Name of mountain range]\nThe Guitar [Musical Instrument]\nOne important point to note is that\nNames of mountain ranges are preceded by\narticle “THE” but mountains peaks are never\npreceded by article “the”\nThe Himalayas is correct but the Mount\nEverest is wrong. We only use “Everest”\n(2)Names of Newspaper: These nouns are\nalways preceded by a definite article “The”.\nExamples:-\nThe Times of India.\nThe Hindu.\nThe Indian Express.\n(3)Names of Countries (Only the ones which\nare written in Abbreviated forms): These\nnouns are always preceded by a definite\narticle “The”.\nExamples:-\nThe USA.\nThe UK.\nThe UAE.\nThe USSR.\n(4)Superlative Degree: The nouns of\nsuperlative degree are always preceded by a\ndefinite article “The”.\nExamples:-\nThe best book.\nThe darkest cloud.\n(5)Comparative Case: “The” is used in two\ncases:\nCASE 1: The higher you go, the cooler it is.\nThe faster you walk, the sooner you reach.\nThe more sugar you put in the\ndish, the sweeter it is.\nCASE2: He is the better of the two.\nShe is the poorer of the two women\nHe is the better candidate of the two for the job\n(6)Metaphor: Sometimes “the” is used before\na metaphor.\nIn case of a metaphor one thing is treated\nas another thing.\nExamples:-\nHe is the Mahatma Gandhi of our class.\nDelhi is the Paris of India.\n(7) For a phrase which is combination of\na common and proper noun, the’ is used.\nExamples:-\nThe river Nile,\nThe Muslim League Party,\nThe New York City,\n(8) ‘The’ is mandatory before a thing which is\nonly one of a kind in the universe.\nExamples:-\nThe moon is shining tonight.\nThe earth is moving around the sun.\n(9) For the names of the government\norganizations, ‘the’ is used.\nExamples:-\nThe Society for the protection of Child’s\nRights\nThe judiciary is composed of a supreme court\nof seven members, a court of chancery, a\ncounty court in each county, a probate court\nin each probate district, and justices of the\npeace."
  },
  {
    "title": "Rule 63: Omission of Article “The”: We do not use any article before following nouns:",
    "desc": "(1)Names of Cities: Los Angeles, Alaska,\nSydney, etc.\n(2)Names of Countries: (except names of\ncountries with abbreviated form) Australia,\nBolivia, England, France, Spain, etc.\n(3)Names of continents: Asia, Europe,\nAustralia, Africa, South America, North\nAmerica, Antarctica.\n(4)Names of streets: George Street,\nAlbion Street, New town Street, etc.\n(5)Names of singular lakes and bays: Lake\nCarey, Lake Eyre, Lake Hillier, Shark\nBay, etc.\n(6)Names of Mountain Peaks: Mount\nEverest, Mount Solitary, Mount Bindo,\nMount Fuji, etc.\n(7) Names of single islands: Easter Island,\nBare Island, Bird Island, Fatima Island, etc.\n(8)Names of languages: Spanish, Russian,\nEnglish (When ‘the’ precedes these nouns,\nthey refer to the population of\nthose languages.)\n(9)Names of sports: cricket,\nfootball, basketball, etc.\n(10)In normal cases, we do not use any\narticle before these words – season, language,\ndrinks, meals, God, life, money, etc.\nHowever, when we use these words to\nparticularize the information, we use the\narticle “the”.",
    "example": "Examples:-\nBreakfast should be light but the breakfast\nI had this morning was heavy. [The second\ntime “breakfast” is used , The article is used\nbefore it as it refers to a particular breakfast]"
  },
  {
    "title": "Rule 64: Use of “the + Adjective”:",
    "desc": "Whenever the article “the” is used before an\nadjective, it determines the whole group.",
    "example": "Examples:-\nThe poor – poor people\nThe needy – needy people\nThe brave-- brave people\nThe rich--- Rich people\nThe honest are respected. [‘The’+ ‘adjectives’\n= Plural noun]It means Honest people\nThe poor are not always dishonest. [‘The’+\n‘adjectives’ = Plural noun] It means poor\npeople"
  },
  {
    "title": "Rule 65: Whenever same nouns are connected by preposition, in that case we use both the nouns in singular form.",
    "desc": "",
    "example": "Examples:-\nVillages after villages were destroyed by\nthe terrorists. [Incorrect]\nVillage after village were destroyed by\nthe terrorists. [Correct]\nBooks after books had been read by him.\n[Incorrect]\nBook after book had been read by\nhim. [Correct]\nCity after city was set on fire.\nPage after page was reviewed multiple times."
  },
  {
    "title": "Rule 66: Certain nouns whose plurals should be known:",
    "desc": "Singular Plural Singular Plural\nDormouse Dormice Man Men\nFoot Feet Mouse Mice\nGoose Geese Tooth Teeth\nLouse Lice Woman Women\nSingular Plural\nDaughter-in-law Daughters-in-law\nHanger-on Hangers-on\nCommander-in-chief Commanders-in-chief\nSister-in-law Sisters-in-law\nPasser-by Passers-by\nLooker-on Lookers-on\nBrother-in-law Brothers-in-law\nExamples where the second word forms\nthe plural :\nSingular Plural\nBook-case Books-case\nClass-fellow Class-fellows\nRace-horse Race-horses\nStep-son Steps-son\nCastaway Castaways\nGrand-father Grand-fathers\nHorse-race Horse races\nMaidservant Maidservants\nExamples where both words make the plural\n:\nSingular Plural\nMan-servant Men-servants\nWoman-servant Women-servants\nLord-justice Lords-justices\nThe plural of some compound nouns\nare below:\nSingular Plural\nSon-in-law Sons-in-law\nBrother-in-law Brothers-in-law\nPasser-by Passers-by\nMajor General Major Generals\nLord-Justice Lord-Justices\nMan-servant Men-servants\n*NOTE: To show possession in case of\nCompound Nouns, we always use apostrophe\n(‘s) at the end.",
    "example": "Examples:-\nSister-in-law’s car. [Possession of\nCompound Noun]"
  },
  {
    "title": "Rule 67: Whenever “male” or “female” is used before a noun, it means that we are describing its characteristics.",
    "desc": "",
    "example": "Examples:-\nFemale watch [means the watches\nspecified for females]\nFemale doctor [means the doctors specified\nfor females]\nMale shoes [means the shoes specified\nfor males]\nBut whenever we use “man” or “woman”\nis used before a noun, it means that we are\ndescribing the profession or post of that\nnoun.\nExamples:-\nMan soldier [means the soldier is a man]\nWoman student [means the student is woman]\nWoman doctor [means the doctor is woman]\nSome more examples:-\nShe went to a female doctor. [Correct]\nRaj went to a female doctor to get himself\ntreated. [Incorrect]\nRaj went to a woman doctor to get himself\ntreated. [Correct]"
  },
  {
    "title": "Rule 68: Antecedent Rule:",
    "desc": "The noun or pronoun that comes just before\na Relative pronoun is called an Antecedent.",
    "example": "Examples:-\nRam met him who they say has helped us.\n[“him” in this case is an Antecedent]\nHe saw her whom everyone admires.\n[“her” in this case is an Antecedent]\n*NOTE: When there is no antecedent in a\nsentence, we use “whoever, whomever, etc.” as\nrelative pronouns.\nExamples:-\nRam met whoever they has helped us.\n[No Antecedent in the sentence]\nHe saw whomever everyone admires.\n[No Antecedent in the sentence]"
  },
  {
    "title": "Rule 69: Rule of Question tags:",
    "desc": "A small question is added at the end of a\nstatement. This is called Question Tag.\nA question tag for a positive statement\nis always negative and vice-versa.",
    "example": "Examples:-\nHe has worked very hard on this project,\nhasn’t he? [Negative question tag for a\npositive statement]\nHe has not worked hard on this project, has\nhe? [Positive question tag for a negative\nstatement]"
  },
  {
    "title": "Rule 70: Some typical errors related to the above rule.",
    "desc": "",
    "example": "Examples:-\nI am working very hard for my\nstudents, amn’t I? [Incorrect]\nI am working very hard for my\nstudents, aren’t I? [Correct]\nI am getting better at this, aren't I? [Correct]\nThe first sentence is incorrect because there is\nno such word “amn’t”. It should be written as\n“aren’t I” which means “am I not”."
  },
  {
    "title": "Rule 71: Certain words like “Seldom, barely, hardly, scarcely, never” often define a negative meaning to the statement, thus these should be followed by a positive question tag.",
    "desc": "",
    "example": "Examples:-\nHe seldom comes to my house, does he?\n[Positive question tag for a negative\nstatement]\nThey have barely enough to pay the rent this\nmonth, have they? [Positive question tag for a\nnegative statement]\nI never realized you knew my brother, did I?\n[Positive question tag for a negative\nstatement]\nWe hardly ever go to concerts, do\nwe? [Positive question tag for a\nnegative statement]\nI seldom drive my car into the city, do\nI? [Positive question tag for a negative\nstatement]\nI scarcely registered the fact that he was\nthere, did I? [Positive question tag for a\nnegative statement]"
  },
  {
    "title": "Rule 72: It is important to note that question tag statement must be in same tense as the main statement.",
    "desc": "",
    "example": "Examples:-\nI am doing the work which you gave\nme, don’t I? [Incorrect]\nI am doing the work which you gave\nme, aren’t I? [Correct]\nThe first statement is incorrect as the\nmain statement is in Present Continuous\nTense which the question tag statement\ndoesn’t follow."
  },
  {
    "title": "Rule 73: When we use “Each or Every” in a sentence, a singular noun or pronoun is followed which is further followed by a singular verb. But in the case of question tag, noun (or, pronoun) following “Each or Every” is considered plural and thus we use plural verb in question tag statement.",
    "desc": "",
    "example": "Examples:-\nEvery girl is very talented, isn’t she?\n[Incorrect]\nEvery girl is very talented, aren’t they?\n[Correct]\nEach one has to work hard to make\nboth ends meet, hasn’t he? [Incorrect]\nEach one has to work hard to make\nboth ends meet, haven’t they? [Correct]"
  },
  {
    "title": "Rule 74: When a collective noun is used in the main statement and depicting all its units are working together on the same thing or all are behaving similarly, we consider everything to be singular.",
    "desc": "However, if all the units are working on\ndifferent things, we consider everything to be\nplural.",
    "example": "Examples:-\nThe jury has taken the decision, hasn’t it?\n[Only one decision is taken]\nThe audience took the seats, didn’t they?\n[Audience took their respective seats]\nThe army changed the uniforms, didn’t they?\n[Army changed their respective uniforms]"
  },
  {
    "title": "Rule 75: When we talk about Imperative Sentences and that also when we talk about proposals, in that case we always use “shall we” in question tag statement.",
    "desc": "",
    "example": "Examples:-\nLet us go for a walk, don’t we? [Incorrect]\nLet us go for a walk, shall we? [Correct]\nLet us consider all the possibilities, shall we?\n[Correct]\nLet us hear from Sue at our travel desk, shall\nwe? [Correct]\nLet us go out to dinner, shall we? [Correct]"
  },
  {
    "title": "Rule 76: Use of the Prepositions “in, on, and at”:",
    "desc": "‘In’ refers to town, cities, and countries in a\nwider sense while [ In Delhi, in Dubai, in\nSaudi Arabia ]\n‘At’ is used for speaking of comparatively\nsmaller place. [ at Rohini in Delhi, at\nLaxminagar ]\nCONCEPT:-\nPreposition “in” implies Area/Volume.\nPreposition “on” implies Surface.\nPreposition “at” implies Point.\nBased on the above concept, we use these\nprepositions in following order:\nPoint of time < day < month <\nyear At < on < in < in\nThe above order can be understood by\nthis way as well:\nSince “point” is smaller than “surface” which\nin turn is smaller than “volume”, we follow\nthe order of these prepositions in the same\nmanner.",
    "example": "Examples:-\nAt 4 pm.\nOn Sunday.\nIn 1947.\nOn 15\nth\nAugust.\nIn April.\nAt night.\nIn the morning.\nThere's a meeting at 2.30 this afternoon.\nAre you free at lunchtime?\nHair salons don't usually open on Sundays.\nMy birthday is on 30 May.\nI started working here in 2009.\nWe are going to Italy in April.\nBye, see you in the morning.\n*NOTE: There are certain words before\nwhich we don’t use any preposition like “last\nMonday, coming Monday, today, tomorrow,\nyesterday, etc.”\nExamples:-\nI am having dinner with Rachel tomorrow\nnight.\nI saw her yesterday afternoon.\nI have a checklist of things that I must\ndo today.\nThe weather forecast said it would be\nfine and dry coming Monday."
  },
  {
    "title": "Rule 77: The conjunction “Both” is always followed by “and” and not “as well as”.",
    "desc": "",
    "example": "Examples:-\nBoth Ram as well as Shyam are good at\nEnglish. [Incorrect]\nBoth Ram and Shyam are good at\nEnglish. [Correct]\nBoth men as well as women have complained\nabout the advertisement. [Incorrect]\nBoth men and women have complained\nabout the advertisement. [Correct]\nI felt both happy as well as sad at the\nsame time. [Incorrect]\nI felt both happy and sad at the same\ntime. [Correct]\n*NOTE: The word “good” is always followed\nby the preposition “at”.\nExamples:-\nShe is very good at geography.\nRohan is good at football."
  },
  {
    "title": "Rule 78: Use of the conjunction “Lest”:",
    "desc": "Lest means otherwise.\nThe conjunction “lest” is always followed\neither by the verb “should” or no helping\nverb at all.",
    "example": "Examples:-\nWork hard, lest you would fail. [Incorrect]\nWork hard, lest you fail. [Correct]\nWork hard, lest you should fail. [Correct]\nHe cut the remark out of the final program\nlest it should offend listeners. [Correct]"
  },
  {
    "title": "Rule 79: Use of “Until” and “Unless”:",
    "desc": "CONCEPT:-\nUntil – Time Oriented\nUnless – Action Oriented",
    "example": "Examples:-\nWait for me until sunset. [referring Time]\nUnless the government reduces the tax, the\ntax-payer base will not increase. [referring\nAction]\nI was up until three o'clock trying to get it\nfinished! [referring Time]\nUnless you call me to say you're not coming, I\nwill see you at the theatre. [referring Action]\n*NOTE: There is no difference in meaning\nbetween “till” and “until” as both mean “up to\n(the time that)”. However, we cannot use “till”\nat the beginning of the sentence which is not\nthere with the case of “until”.\nExamples:-\nUntil your next birthday, you will have to\nwait for a new bike.\nWe did not eat till past midnight."
  },
  {
    "title": "Rule 80: Error of Parallelism:",
    "desc": "The rule of Parallelism explains that sentence\nelements that are alike in function should\nalso be alike in construction. These elements\nshould be in the same grammatical form so\nthat they are parallel.\nHere are some examples of parallel elements:\n(I)Words: thinking, running, etc.\n(II)Infinitives: to see, to understand, etc.\n(III)Prepositional phrases: at the time, in the\nhouse, etc.\n(IV)Subordinate clauses: because I care, after\nthey met, etc.\n(V)Linking words: not only…but also…,\neither…or…, neither…or…, if…then…, etc.\n(VI)Nouns: honesty, originality,\ngoodness, etc.\n(VII)Adjectives: charming,\ncourteous, beautiful, etc.",
    "example": "Examples:-\nI like singing, dancing, and to walk.\n[Incorrect]\nI like singing, dancing, and walking. [Correct]\nHe asked his mother to cook, to rest and\nprepare the dish. [Incorrect]\nHe asked his mother to cook, to rest and\nto prepare the dish. [Correct]\nMy friends never judged me by my words\nor what I did. [Incorrect]\nMy friends never judged me by my words\nor my actions. [Correct]\nThe teacher not only wants his students to\nkeep quiet but also to do the task. [Incorrect]\nThe teacher wants his students not only to\nkeep quiet but also to do the task. [Correct]\nI like to read books over watching\nmovies. [Incorrect]\nI like reading books over watching movies.\n[Correct]\nI would rather pay for my education\nthan financial aid. [Incorrect]\nI would rather pay for my education\nthan receive financial aid. [Correct]\nTom is known for his honesty and\noriginal ideas. [Incorrect]\nTom is known for his honesty and originality.\n[Correct]\nTo learn is understanding the world.\n[Incorrect]\nTo learn is to understand the world. [Correct]\nThis task can be done individually, in pairs,\nor can be done in groups of four. [Incorrect]\nThis task can be done individually, in\npairs, or in groups of four. [Correct]"
  },
  {
    "title": "Rule 81: Use of proper Prepositions:",
    "desc": "It is important to use exact prepositions after\nthe words.",
    "example": "Examples:-\nHe is superior to and older than me.\nThis book is different from and better\nthan that book.\nIn the first example, the word “superior” is\nfollowed by the preposition “to” and\n“older” is followed by “than”.\nSimilarly, in the second case, the word\n“different” is followed by “from” and\n“better” is followed by “than”.\nSome more examples:-\nNobody seems to have responsibility for\nthe budget.\nWhat’s the reason for your unhappiness?\nChanges in society have meant that\nyoung people leave home earlier.\nThere’s been a steady increase in the value\nof the euro.\nGo to our website to get the address of your\nnearest branch.\nMy reaction to it all was to try to forget it.\nHer response to the criticism was very strong.\n18 is the age at which you are allowed to vote.\nFisk is making his third attempt at the world\nrecord.\nThe police inquiry into the theft continues.\nShe did some research into the causes of\nback pain.\nThis is an example of international\ncollaboration.\nWe need to find another way of doing things.\nHer response to the criticism was very strong.\nI saw an advertisement for a teaching job\nin Malawi which looked interesting.\nThere is a growing awareness of the impact of\nclimate change among the young.\nCongratulations on your new job!\nI’d like to do a course in computer\nprogramming if I could find a good one.\nDo you have any previous experience of\nworking with children?\nHe seems to have less interest in everything\nthese days.\nCan you give us some information on/about\nbus tours, please?\nThe invitation to the reception at the embassy\narrived the next day.\nHe has an amazing knowledge of European\nhistory.\nCan anyone become a member of your book\nclub?\nI was a newcomer to windsurfing so I\nwas very nervous.\nI’d love to show you some of the nice places in\nmy hometown.\nThe visit to the temple was the high point\nof the holiday.\nI need some lessons in how to set up\na website.\nChanges in our diet have meant that more\nand more people suffer heart disease.\n[Changes that happen]\nThe director of studies must be informed of\nany changes to the timetable. [Changes that\npeople purposely make]"
  },
  {
    "title": "Rule 82: Use of “too much” and “much too”:",
    "desc": "We use “much” and “too” together in two\nways:\n(1)too much – we use “too much” as\nan Adjective.\n(2)much too – we use “much too” as\nan Adverb.\n“MUCH” indicates a big quantity of an\nuncountable substance or element (one that\nyou can't count).\nIf the quantity becomes too big, much is\npreceded by “TOO”: TOO MUCH +\nuncountable noun = an excessive quantity.\nAnother construction describing an excessive\nquantity is less frequent and is built with an\nadjective: = MUCH TOO + ADJECTIVE\nIn this construction, ‘MUCH’ has played\nthe function of ‘increasing’, amplifying the\nadverb ‘too'; it is equivalent to ‘far too\nheavy’.",
    "example": "Examples:-\nHe is too much strong. [Incorrect]\nHe is much too strong. [Correct]\nThere is much too sugar. [Incorrect]\nThere is too much sugar. [Correct]\nIn the above examples, it is to be noted that\n“strong” is an Adjective and “sugar” is a\nNoun. Thus, we use the Adjective “too\nmuch” with the noun.\nSome more examples:-\nHe drank too much alcohol last night,\nand this morning he feels ill. [Too much\nis an adjective here ]\nToo much work and not enough play make\nJack a dull boy. [Too much is an adjective\nhere]\nThis car is much too expensive for me\nto buy[Much too is an adverb here]\nThis case is much too heavy; you can't carry\nit![Much too is an adverb here]"
  },
  {
    "title": "Rule 83: Possessive Case is always followed by a Noun.",
    "desc": "",
    "example": "Examples:-\nHis belongings were lost. [Correct]\nHis earnings are not enough. [Correct]\nHis surroundings are not clean. [Correct]\nIn the above examples, all three word\nfollowing the possessive case “his” -\n“belongings, earnings, and surroundings” are\nnouns\nSome more examples of nouns which are\nalways plural are\nRiches ,premises, spectacles, Bowels,\nValuables, Proceeds, Alms, Billiards,\nMovables, Wages, Thanks, Annals, Measles,\nTrousers, Goods, Socks, Fetters, Shorts,\nPantaloons, Tidings, Mumps, Eatables,\nScissors, Stockings,\nSurroundings,Breeches, Arms, Tongs”\n*NOTE: Some Verbs play the role of\nNouns, just by adding ‘s’ at the end.\nExamples:-\nVERB NOUN\nBelong Belongings\nEarning Earnings\nSurrounding Surroundings\nSome more examples:-\nAll his goods were sold at throw away prices.\nSpectacles have been broken\nKindly give me a pair of scissors."
  },
  {
    "title": "Rule 84: Use of the word “Politics”:",
    "desc": "When the word “Politics” is considered as\na field or a subject, it is used as singular.\nWhen the word “Politics” is considered as\na set of political beliefs, it is used as plural.",
    "example": "Examples:-\nPolitics is a very dirty game.\nHis politics are different from mine.\nIn the first example, “politics” is used as a\nwhole field, so it requires a singular verb. In\nthe second example, “politics” is used as\npolitical beliefs, thus it requires a plural verb.\nSome more examples:-\nHer politics have become more liberal over\nthe past few years.\nHis politics are generally considered to be\nright of centre.\nPolitics is the main subject at Leicester\nUniversity.\nJoe is very active in left-wing politics."
  },
  {
    "title": "Rule 85: Usage of “Mathematics” and “Statistics”:",
    "desc": "When these two words are used as a field or a\nsubject, we consider them uncountable nouns\nand thus a singular verb is used.\nHowever, when the meaning of the word\n“Mathematics” is “Calculation” and\n“Statistics” is “Data”, we use plural verb in\nboth the cases.",
    "example": "Examples:-\nMathematics is an interesting subject. [Used\nas a subject]\nMathematics are telling that he has made a lot\nof money. [Here it means “calculations”]\nStatistics is difficult to understand. [Used as a\nsubject]\nStatistics tell us that it will rain today. [Here it\nmeans “data”]\n*NOTE: The word “Data” is plural. The\nsingular form of “Data” is “Datum”.\nExamples:-\nData warns us and we will have to change\nour strategy. [Incorrect]\nData warn us and we will have to change\nour strategy. [Correct]\n*NOTE: The word “Summons” is a singular\nnoun but “Summon” is a verb. The plural\nform of “Summons” is “Summonses”.\nExamples:-\nTwo summons were issued. [Incorrect]\nTwo summonses were issued. [Correct]"
  },
  {
    "title": "Rule 86: We use the article “A” when we mean “One of many” and the article “The” when we mean “only one”. Moreover, we use the article “A” with the possessive case and “The” with the objective case.",
    "desc": "",
    "example": "Examples:-\nThe brother of me is a scientist. [Objective\ncase]\nA brother of mine is a scientist. [Possessive\ncase]\nIn the first sentence, “The brother of me”\nsuggests that there is only one brother. In the\nsecond example, “A brother of mine”\nsuggests that there are many brothers.\nSome more examples:-\nA servant of theirs lives in Delhi.\nThe servant of them lives in Delhi.\n*NOTE: We can rewrite these phrases:\nMy car – The car of me\nMy brother – The brother of me\nOne of my brothers – A brother of mine"
  },
  {
    "title": "Rule 87: Usage of “too”, “as well” and “also”:",
    "desc": "When we have to denote some extra thing in\na sentence, we use these three words. It is to\nbe noted that “also” cannot be used at the\nend of the sentence. However, “too” and “as\nwell as” can be used at the end of the\nsentence.",
    "example": "Examples:-\nI have brought a bag too. [Correct]\nI have brought a bag as well. [Correct]\nI have brought a bag also. {Incorrect]\nI have also brought a bag. [Correct]\n*NOTE: In normal cases, “too” and “so” are\nused to give negative sense to the sentence.\nWhen we use “too” with the meaning of\n“addition”, we can use it at the end. However,\nwhen we use “too” with the meaning of “high\nintensity”, we cannot use it alone.\nShe is too beautiful. [Incorrect because\nthe sentence is incomplete]\nShe is very beautiful. [Correct]\nIt is too hot to go outside. [Correct]\nIt is so hot that I cannot go outside. [Correct]\nThe question was too difficult to solve.\n[Correct]"
  },
  {
    "title": "Rule 88: Optative Sentences:",
    "desc": "The sentence which expresses a prayer, keen\nwish, curse etc. is called an optative\nsentence. This kind of sentence generally\nstarts with ‘may’ and ‘wish’. Sometimes,\n‘may’ remains hidden.\nIn the case of optative sentences, whether the\nsubject is singular or plural, we use the base\nform of the verb (i.e. V1).",
    "example": "Examples:-\nMay God bless you!\nLong live the king.\nMay the almighty help in this tragedy!\nWish you a happy journey together."
  },
  {
    "title": "Rule 89: Pseudo Subjects:",
    "desc": "When in a sentence, irrespective of the\npresence of main subject, we have to talk\nabout something which is not related to the\nmain subject, in that case we use “pseudo\nsubject”.",
    "example": "Examples:-\nBeing a rainy day, I did not go to school.\n[Incorrect]\nIt being a rainy day, I did not go to\nschool. [Correct]\nIn the above example, there is no Subject of\n“rainy day”, “I” is the main Subject and has\nno relation with “rainy day”. So to add a\nSubject, we use “It” as a Pseudo Subject.\nBeing ill, he did not come to class. [Correct]\nIn the above example, there is no need of\npseudo subject as “ill” in the first part\nrefers to the main subject “he”.\nBeing vacant, I did not enter the room.\n[Incorrect]\nIt being vacant, I did not enter the room.\n[Correct]\nIn the above example, there is no subject of\n“vacant” which has no relation with the\nmain subject “I”, thus we need a Pseudo\nsubject “It” to make the sentence\ngrammatically correct."
  },
  {
    "title": "Rule 90: Whenever infinitive (to + V1) in a sentence talks about a noun, it is always followed by a preposition.",
    "desc": "",
    "example": "Examples:-\nThe child has no bed to sleep in. [Infinitive is\nused to talk about the noun “bed”]\nI have a pen to write with. [Infinitive is used\nto talk about the noun “pen”]\nThe child wanted a toy to play with.\n[Infinitive is used to talk about the\nnoun “toy”]"
  },
  {
    "title": "Rule 91: When two different helping verbs are required in a sentence, we always use the main verb in both the cases.",
    "desc": "",
    "example": "Examples:-\nI have never and will never watch this movie.\n[Incorrect]\nI have never watched and will never\nwatch this movie. [Correct]"
  },
  {
    "title": "Rule 92: Certain words like “belongings, savings, congratulations, scissors, proceeds, surroundings, regards, pliers, tongs, jeans, pyjamas, pantaloons, shorts, contents, outskirts, glasses, clothes, thanks, goggles, premises, surroundings, belongings, earnings, earrings, tidings etc.” are considered Plural, so they always take plural verbs.",
    "desc": "",
    "example": "Examples:-\nHis regards were conveyed to his parents.\nAll proceeds from the auction are donated to\ncharity.\nHis belongings were lost.\nThese scissors are for cutting paper.\nYour clothes are dirty.\nHave you seen my glasses? I want to read the\nnewspaper.\nThe table of contents should not contain\nany pictures.\nI live on the outskirts of the city.\nMy trousers are dirty. I need to wash them.\nHer thanks were clearly sincere.\nIf your clothes are wet you can dry them\nupstairs.\nAre those your belongings?\nI would like two glasses of orange juice\nplease.\nPass me that pair of pliers, please.\nYou can get rid of that old pair\nof headphones.\nMy spectacles have been broken.\nKindly give me a pair of scissors.\nRiches have wings ."
  },
  {
    "title": "Rule 93: Certain words like “Mathematics, Physics, Statistics, News, Economics, Innings, Politics, Athletics, Gymnastics, Gallows, Mechanics, Summons, Classics etc.” are always considered Singular and thus they always require singular verbs.",
    "desc": "(a) Mathematics are difficult\nsubject. [Incorrect]\nMathematics is a difficult subject. [Correct]\n(b) Politics are a game of\ncompromise. [Incorrect]\nPolitics is a game of compromise. [Correct]\n(c)These news were broadcast from All India\nRadio only yesterday. [Incorrect]\nThis news was broadcast from All\nIndia Radio only yesterday [Correct]\nNote\nExceptions of Mathematics, Statistics and\nPolitics have been studied earlier.",
    "example": ""
  },
  {
    "title": "Rule 94: Certain words like “equipment, furniture, jewellery, luggage, machinery, poetry, scenery, information, advice, baggage, hair, etc.” do not exist in their plural forms because they all are uncountable nouns.",
    "desc": "His luggages was booked. [Incorrect]\nHis luggage was booked. [Correct]\nFurniture sets off the beauty of a house.\n[Incorrect]\nFurniture set off the beauty of a\nhouse. [Correct]\nHe has given me good information.\n[Incorrect]\nHe has given me a good\ninformation. [Correct]\nThe poetries Society was founded\nin 1909. [Incorrect]\nThe Poetry Society was founded in\n1909. [Correct]\nHere is a list of stationeries. [Incorrect]\nHere is the list of stationary. [Correct]",
    "example": ""
  },
  {
    "title": "Rule 95: Rules of Conditional Sentences:",
    "desc": "Types of Conditional Sentences:\nCONDITION RESULT\nSimple Present will-future or\n(Modal + infinitive)\nor,\nshall/can/may/must\n+ V1\nSimple Past would + V1 or,\ncould/might/should\n+ V1\nPast Perfect would + have + past\nparticiple (V3) or,\ncould/might/should\n+ have + past\nparticiple (V3)",
    "example": "Examples:-\nAs soon as he comes, I will ask him this\nquestion.\nWhen he comes, I will ask him this question.\nHad he come earlier, I would have asked him\nthis question.\nIf he studied, he would pass the exam."
  },
  {
    "title": "Rule 96: Use of Possessive case in a sentence:",
    "desc": "Possessive case is used after “all” and “both”.\nConsider these examples:-\nMy all students are very talented. [Incorrect]\nAll my students are very talented. [Correct]\nMy both friends are very talented.\n[Incorrect]\nBoth my friends are very talented. [Correct]\nIn the above examples, the possessive case\n“my” should be placed after “all” and\n“both” respectively.",
    "example": ""
  },
  {
    "title": "Rule 97: Superfluous Sentences:",
    "desc": "(1) “As soon as” is not followed by\n“than”. “than” is used after “No sooner”",
    "example": "Examples:-\nAs soon as I complete the work than I will\ngo to his house. [Incorrect]\nAs soon as I complete the work I will go to\nhis house. [Correct]\nNo sooner had I started mowing the lawn\nthan it started raining. [Correct]\n(2) “As” is not used with “so”.\nExamples:-\nAs he was unwell, so he didn’t come to\nthe class. [Incorrect]\nAs he was unwell, he didn’t come to the\nclass. [Correct]\n(3) “Due to” is not used with “the reason”\nand vice versa.\nExamples:-\nDue to the reason that he is not well, he did\nnot come to the class. [Incorrect]\nHe did not come to the class due to sickness.\n[Correct]"
  },
  {
    "title": "Rule 98: Usage of the word “quantity”:",
    "desc": "When the word “quantity” is used in the\nsentence, we cannot use “little”, “few”, etc.\nwith it. We can only use “small” with it.",
    "example": "Examples:-\nLittle quantity of food was wasted. [Incorrect]\nFew quantity of food was wasted. [Incorrect]\nSmall quantity of food was wasted. [Correct]"
  },
  {
    "title": "Rule 99: Different forms of some confusing Verbs:",
    "desc": "V1 V2 V3\nFly Flew Flown\nFlow Flowed Flowed\nFind Found Found\nFound Founded Founded\nHang(Priso Hanged Hanged\nner) Hung Hung\nHang(Othe\nr things)",
    "example": "Examples:-\nThe water overflown from the\nbanks. [Incorrect]\nThe water overflowed from the banks.\n[Correct]\nThe secretary has found this organization.\n[Incorrect]\nThe secretary has founded this\norganization. [Correct]\nThe prisoner was hanged till death. [Correct]\nThe clock was hung on the wall. [Correct]\nIn the fourth sentence, it is to be noted that\nwe use the word “founded” when\nsomething is established or discovered.\nIn the second last sentence, we use the word\n“hanged” whenever we talk about the\nprisoner. But when we talk about the clock,\nwe use “hung” i.e. V2 form of the verb as can\nbe seen in the last sentence."
  },
  {
    "title": "Rule 100: Different forms of the verb “Lie”:",
    "desc": "S. V1 V2 V3\nNo.\n1. Lie Lied Lied\n2. Lay Laid Laid\n3. Lie Lay Lain\n(1) We use this “Lie” to say or write\nsomething that is not true in order to deceive\nsomeone.\n(2) We use “Lay” to put something in\nespecially a flat or horizontal position,\nusually carefully or for a particular purpose.\n(3) We use this “Lie” to be in or move into a\nhorizontal position on a surface.",
    "example": "Examples:-\n(1) I suspect he lies about his age. [V1]\nShe lied to her parents about her new\ncar. [V2]\nHe has never lied to me before, so I have\nno reason to doubt his word. [V3]\n(2)He lays the old man on the table. [V1]\nShe laid the baby on the bed. [V2]\nHe has laid his bag on the ground. [V3]\n(3) He lies awake at night, worrying. [V1]\nA pen lay on the desk. [V2]\nWomen have lain down their\nlives throughout history. [V3]"
  },
  {
    "title": "Rule 101: Use of preposition with the word “Die”:",
    "desc": "We use either the preposition “of” or “from”\nwith the word “Die”.\nWe use “Die of” whenever it is talked about a\ndisease.\nWe use “Die from” whenever it is talked\nabout the reason.",
    "example": "Examples:-\nShe died from overwork. [Reason]\nHe died of cancer. [Disease]\nHe died of tuberculosis. [Disease]\nTrees are dying from acid rain. [Reason]"
  },
  {
    "title": "Rule 102: Difference between “Beside” and “Besides”:",
    "desc": "Beside is a preposition, which means at\nthe side of, next to.\nBesides is a linking adverb, which means\nin addition to; also.",
    "example": "Examples:-\nCome and sit here beside me.\nShe knelt down beside the child.\nDo you play any other sports\nbesides basketball?\nBesides being a doctor, he is also an actor."
  },
  {
    "title": "Rule 103: Certain words like “friendly, miserly, cowardly, monthly, yearly, weekly, manly, orderly, etc.” are adjectives and can only be used as an adjective. We cannot use them as adverb.",
    "desc": "",
    "example": "Examples:-\nHe behaved friendly. [Incorrect]\nHe behaved in a friendly manner. [Correct]\nIn the first example, “friendly” is used as\nan adverb, which is incorrect. It should be\nrewritten as the second statement where\n“friendly” is used as an adjective.\nThis was a particularly brutal and cowardly\nattack. [Adjective]\nThe workers are paid a miserly $2 a day.\n[Adjective]\nShe put the letters in three orderly piles.\n[Adjective]\nThere was a weekly dance on Wednesdays.\n[Adjective]\nOne quality she especially likes to reward is\nthus held to be manly courage. [Adjective]\nNewspapers are constrained by a yearly\nlicense required from the Home Ministry.\n[Adjective]\nOther than the monthly meeting, not much\nis going on at the association. [Adjective]"
  },
  {
    "title": "Rule 104: Position of Adverbs:",
    "desc": "We place an adverb generally at three\ndifferent positions in a sentence:\n(a)Starting of Sentence\n(b)Between helping verb and main verb\n(c)At the end\n*NOTE: An adverb can never be\nplaced between main verb and object.",
    "example": "Examples:-\nHe comes often to my house. [Incorrect]\nHe often comes to my house. [Correct]\nIn the first sentence, “comes” is the main\nverb and “often” is an adverb. So we cannot\nplace adverb between the main verb and the\nobject.\nThe second sentence is the correct order of\nthe sentence structure.\nHe tells always the truth. [Incorrect]\nHe always tells the truth. [Correct]\nIn the above example, “always” is an adverb\nand “tells” is the main verb. So “always”\nshould be placed before the main verb.\nSuddenly the phone rang. [Correct]\nHe was probably late for the interview.\n[Correct]\nThey ate dinner quietly. [Correct]\nThere are few exceptions to this rule.\nAdverbs like too, even , only can be\nplaced anywhere in a sentence."
  },
  {
    "title": "Rule 105: Whenever we place multiple adverbs in a sentence, in that case we follow a particular order:",
    "desc": "Adverb of Manner ---> Adverb of Place ---\n> Adverb of Time [MPT order]",
    "example": "Examples:-\nI walked yesterday slowly. [Incorrect order]\nI walked slowly yesterday. [Correct order]\nI have to run quickly (manner) down the street\n(place) each morning (frequency) after\nbreakfast (time). [Correct order]\nImpatiently (manner), I waited by the\nbank (place) yesterday (time) for my\nfather to arrive. [Correct order]"
  },
  {
    "title": "Rule 106: Usage of “very” and “much”:",
    "desc": "In a sentence, both these terms are used\ndifferently.\n“Very” is preceded by Adjective’s positive\ndegree. Very emphasizes the exact identity of\na particular person or thing.\n“Much” means ‘large in amount or extent’.\nIt is preceded by comparative degree and\npast participle.",
    "example": "Examples:-\nIt is very interesting.\nHe is much weaker than Shyam.\nThe girl is very beautiful.\nThe weather changes very quickly.\nI am much better now.\nThey both talk too much.\nHe is much interested in the project.\nThank you so much for your help.\n*NOTE: We do not usually use very to modify\nsuperlative adjectives. Instead, we use much or\nby far. But note that very can be used to\nemphasize superlatives. It is also used with\nfirst, next and last.\nExamples:-\nThis is the very best wine I have tasted in my\nlife.\nThis is your very last chance."
  },
  {
    "title": "Rule 107: “Between” is always followed by “and” and not “to”.",
    "desc": "",
    "example": "Examples:-\nHe will distribute these sweets between 4\npm to 5 pm. [Incorrect]\nHe will distribute these sweets between 4\npm and 5 pm. [Correct]\nHe will distribute these sweets from 4 pm to 5\npm. [Correct]"
  },
  {
    "title": "Rule 108: Generally, Uncountable nouns cannot be converted into their plural.",
    "desc": "However, there are certain uncountable\nnouns which are found with “s” or “es”\nadded to the end. These nouns do not form\ntheir plurals, rather they give a different\nmeaning to the word.",
    "example": "Examples:-\nAdvice means suggestion.\nAdvices means information.\nAir means the mixture of gases\nthat surrounds the earth.\nAirs means arrogance\nWood means timber.\nWoods means forest.\nIron means a chemical element.\nIrons means fetters, chain.\nThe Noun Its The noun Its\nSingular meaning in plural meaning(\nin (two) Only one)\nAbuse i) Wrong Abuses Wrong\nuse practices(\nii) Evils)\nReproach\nForce i) Forces Troops\nStrength\nii) Body of\narmed\nmen\nIssue i) Result Issues Results\nii)\nOffspring\nWood i) Timber Woods Forests\nii) Forest\nLight i) Lamp Lights Lamps\nii)\nBrilliance\nGain i) Profit Gains Profits\nii)\nAcquisitio\nn of\nwealth\nPeople i) Persons Peoples Nations\nii) Nations\nExamples:-\nWood is used in almost all wooden\nhouses. (Timber)\nHe lives in a wood. (Forest)\nWoods are fast disappearing from\nindia. (Forests)\nForce should be met with force.(Strength)\nA force of ten persons attacked him .(Body\nof armed men)\nThe Indian Forces are known for their\nbravery and loyalty. (troops)\nExamples:-\nHe caught the old man by the arm.\nHe was standing with his arms cigarette\nbetween his lips.\nPakistan is buying arms from USA.\nEvery letter of a language expresses a\nparticular sound.\nPlease write your telegram in capital letters.\nHe is a man of letters.\nThe spectacle was horrible.\nMy spectacles have broken.\nThe Noun Its The noun Its\nis meanings in plural Meaning\nSingular (Only (two)\nOne)\nArm Upper Arms i)\nlimb(Part Weapons\nof the ii) Upper\nbody) limbs\nPain Ache Pains i)\nTroubles\nii) Care\nManner Method Manners i)\nMethods\nii)\nbehaviour\nCustom Habit Customs i) Habits\nii) Duties\non goods\nLetter Alphabet Letters i)\nAlphabet\nii)\nLearning\nSpectacle Sight Spectacles i) Sights\nii) Eye-\nglasses\nColour Hue Colours i) Hues\nii) Flags\nMinute A unit of Minutes i) Units of\ntime time\nii) The\nproceedin\ngs of a\nmeeting\nMoral Lesson Morals i) Moral\nLesson\nConduct\nii)\nConduct\nExamples :-\nIt is shameful for a man to use force with a\nwoman . (Strength)\nThe forces on the border have been\nalerted. (Army)\nI shall return within three hours. (Come\nback)\nIron is useful metal. (Metal)\nThe judge ordered that the irons of the\nunder trial should be removed. (Chains)\nNouns in Their Nouns in Their\nSingular meaning Plural meaning\nAdvice Counsel Advices Informati\non\nAir Atmosphe Airs Proud\nre Behaviour\nAuthority Comman Authoritie Persons in\nd s Power\nGood Nice Goods Property(\nthings)\nIron Metal Irons Fetters,\nchains\nForce Strength Forces Army\nContent Satisfactio Contents Things\nn Contained\nRespects Regards Respects Complime\nnts\nWork job Works Compositi\non\nfactories\nExamples :-\nIron is a useful metal.\nThe judge ordered that the irons of the\nunder trial should be removed.\nIt is shameful for a man to use force with\na woman.\nI shall return within three hours.\nExamples :-\n(a) He is my younger brother. ( Brother\n- a singular Noun )\nWe are four brothers. (Brothers- sons of\nsame parents)\nWe are brethren of the same profession\n.(Brethren- person engaged in the same\nprofession)\n(b) The cloth from Ahmedabad is\nsold everywhere in India. (Cloth-\nkind of cloth)\nA man needs many clothes.\n(Clothes-garment)\n(c) It is not possible to master of mathematics\nwithout learning formulae that govern it.\n(Formulae- the rules of mathematics)\nA number of formulas were offered.\n(Modes of Application)\nThe Plural Its Plural Its\nNoun of the meanin of the meaning\nSingular Noun I g Noun II\nBrothers Brother Sons of Brethre Members\ns the n of a\nsame community\nparents or society\nCloth Cloths Kind or clothes Garments\npieces\nof a\ncloth\nDie Dies Stamps Dice Small\nfor cubes for\nCoining playing\nGenius Geniuse Talente Dice Small\ns d cubes for\nPersons playing\nIndex Indexes Table Indices Signs of\nof Algebra\ncontent\ns\nShot Shots Balls of Shots Firing\nIron from the\nthrow, gun\nstroke\nor hit in\ncertain\ngames.\nFish Fish Conside Fishes Considere\nred d\ncollecti separately\nvely\nPenny Pennies Separat Pence A\ne coins collective\nnoun\nNouns (in Their Examples\npairs) proper use\n1. Habit It belongs Mohan is a victim\nCustom to of many bad habits.\nindividuals The Nigerains have\nIt belongs strange customs.\nto a society\nor country\n2. House It is a This house is made\nHome building to of brick and stone.\nlive in You should go\nIt is a home now.\nparticular\nhouse in\nwhich one\nis living\n3. Cause ‘Cause’ The scientists have\nproduces a not been able to tell\nReason result the cause of an\nearthquake .\n‘Reason’ You have good\nexplains or reason for going to\njustifies a the court .\ncause\n4. Air ‘Air’ is Water and air\nWind what we sustain life.\nbreathe Everyone longs for\n‘Wind’ is a cool wind in\nwhat makes summer.\nthe leaves\nof the trees\nmove.\n5. Men The plural Only men of\nof man. It is character can make\nused in a nation great.\nPeople ordinary\nsense Most of the people\npersons\nare superstitious\n6. Man Used in The man in the red\nGentlema ordinary dress is my cousin\nn sense Mr. sohanlal is a\nMan of gentleman\ncharacter\n7. Cost Amount The cost of\npaid by the production in every\nPrice\nshopkeeper field have gone up.\nAmount What is the price of\npaid by the this pen ?\ncustomer.\n8. Customer A buyer of Gandhi used to say\ngoods that a customer is\nClient like a God for a\nOne who shopkeeper.\navails That lawyer has\noneself of plenty of clients.\nservices ?\n9. Shade A place The peepal tree\nsheltered makes a nice\nfrom the shadow.\nShadow sun.\nThe shadow The lion saw its\nof a distinct shadow in the water\nform or and roared at it.\nobject .\n10. Ground It is outside The ground was\nFloor the house. slippery.\nIt is a part I saw my books\nof the lying on the floor.\nroom."
  },
  {
    "title": "Rule 109: Consider these errors:",
    "desc": "I am an English teacher. [Incorrect]\nHe is a Mathematics teacher. [Incorrect]\nAll his family members were going to\nthe temple. [Incorrect]\nIn the first example, “English teacher”\ndenotes “teacher from England”. In the\nsecond case, “Mathematics teacher” denotes\n“teacher made up of Mathematics” and in the\nthird example, “family members” denotes\n“members made up of family”. Thus, all these\nsentences are not meaningful.\nTo correct them, we may rewrite these\nsentences in the following ways:\nI am a teacher of English. [Correct]\nHe is a teacher of Mathematics. [Correct]\nAll the members of his family were going\nto the temple. [Correct]\n*NOTE: There is no such words “pick-\npocketer, cousin brother, cousin sister, etc.”\nWe use “pick-pocket” and “cousin” to mean\nthe same.\nSome important points\n●Brother or sister never follows cousin.\n●Boarding is wrong use. It should\nbe boarding house.\n●Poor people is slang use. It should be\nthe poor.\n●Signature should be used in place of\nthe abbreviation sign.\n●Food taken once is meal and not meals.\nMeals means both lunch and dinner\nand we cannot take them together .\n●‘Alphabet’ is generally used in the\nsingular sense. But it can also be used\nin the plural sense. When different\nlanguages are referred to at the same\ntime.\n●‘Inning’ is no word. The actual word is\n‘Innings’ and is always used in the\nsingular sense.\n●‘English teacher’ is slang .It should\nbe ‘the teacher of English’.\n●‘Agendum’ is not used in Enlgish.\nAgenda (Programme-of a meeting) is\ntreated as singular in English.\n●‘Mankind’ is not used in the plural sense.\n●‘Room’ in a compartment or on a\nbench, etc. means ‘unoccupied seat’.\n●‘Witness’ means knowledge brought in\nproof. ‘Evidence’ denotes means of\nproving an unknown or disputed fact.\n●‘Family members’ is a slang use. The\ncorrect form is ‘members of the family’.\n● ‘Goodnight’ is a parting salutation,\nbut ‘Good evening’ is a meeting\nsalutation from evening till midnight.\n●‘Wage’ when used in the singular form\nmeans ‘punishment’ but when used in the\nplural sense it means charges for the\n‘labor’.\n●The use of double possessive should be\navoided. It is better to write the ‘son of\nmy uncle’s friend’ than ‘my uncle’s\nfriend’s son’.",
    "example": ""
  },
  {
    "title": "Rule 110: Use of ‘Possessive Adjectives:",
    "desc": "Possessive adjectives refer to words\nwhich modify a noun by showing a form\nof possession or a sense of belonging to a\nparticular person or thing.\nTable of Possessive Adjectives and Possessive\nPronouns",
    "example": "Examples:-\nEveryone should do one’s duty. [Incorrect]\nEveryone should do his duty. [Correct]\nOne should do his duty. [Incorrect]\nOne should do one’s duty. [Correct]\nIn the above examples, it is to be noted that\nwords like “one’s” and “his” are not used\nas possessive pronouns. These are\npossessive adjectives as they are describing\nthe noun “duty” respectively.\nWe use “one’s” only when the Subject is\n“One” and if the subject is “Every, each,\netc.”, we use “his”or “her” accordingly.\nEvery girl should do her duty.\nIn the above example “gender” is clearly\nmentioned. In such cases, we use “her” and\nwhen gender is not clear we give the priority\nto “his”."
  },
  {
    "title": "Rule 111: Use of “fewer” and “less”:",
    "desc": "“Fewer” is used with Countable subjects.\n“Less” is used with Uncountable subjects.",
    "example": "Examples:-\nNo less than 50 students completed the\nwork. [Incorrect]\nNo fewer than 50 students completed\nthe work. [Correct]\nThere is no fewer than five liters of water in\nthe vessel. [Incorrect]\nThere is no less than five liters of water in\nthe vessel. [Correct]"
  },
  {
    "title": "Rule 112: Difference between “Elder” and “Older”:",
    "desc": "In a sentence, “elder” is used for someone\nwho is in our family.\n“older” is used for someone who is not\nin family.",
    "example": "Examples:-\nA friend of mine in my company is elder than\nme. [Incorrect]\nA friend of mine in my company is older\nthan me. [Correct]\nThe elder son of King John, Henry was\nnine when his father died. [Correct]\n*NOTE: Difference between “Later” and\n“Latter”:\nWe use later when referring to time while we\nuse latter when referring to the second of\ntwo persons or things mentioned previously.\nExamples:-\nBran said that he would call me later.\nThere are two kinds of worries: those you can\ndo something about and those you can’t.\nDon’t spend any time on the latter.\nDifference between “Farther” and\n“Further”:-\nIn a sentence, “farther” is used for more\ndistant object . “further” is used for extra\nor additional distance\nExamples:-\nVillagers saw a temple on the farther side of\nthe river.\nSuman has appealed in the high court\nfor further judgement.\nDifference between “Nearest” and “Next”:-\nIn a sentence, “Nearest” is used for space\nor distance .“Next” is used for in order or\nposition\nExamples :-\nDelhi railway station is nearest to my house.\nMr. gupta lives in the next house.\nDifference between “Latest” and “Last”:-\nIn a sentence, “Latest” is used word opposite\nto Earliest, it denotes time . “Last” is word\nopposite to first and it denotes order or\nposition.\nExamples:-\nShe is the last girl to stay in the office\nWhat is the latest news today ?\nDifference between “Less” and “Fewer”:-\nIn a sentence, “Less ” is used to denote\nquantity and is used as Singular Uncountable\nNoun .“Fewer” is used to denote number and\nis used as Plural Countable Noun.\nExamples:-\nHe has less money than I . [Correct]\nHe has fewer money than I . [Incorrect]\nMoney is an Uncountable noun. Notes and\ncoins are countable nouns.\nDifference between “Less” and “Lesser”:-\nIn a sentence, “Less” is used to denote\nsomething smaller in size,\nmeasurement, duration, number etc.\n“Lesser” is used to denote something not so\ngreat as the other one.\nExamples:-\nMaths is less difficult than Enlgish.\nShe agreed to plead guilty to a lesser charge."
  },
  {
    "title": "Rule 113: While making comparisons, it is necessary to look at the things being compared:",
    "desc": "",
    "example": "Examples:-\nThe weather of Delhi is far better than\nMumbai. [Incorrect]\nThe weather of Delhi is far better than the\nweather of Mumbai. [Correct]\nThe weather of Delhi is far better than that of\nMumbai. [Correct]\nIn the above examples, the first sentence is\nincorrect as we are comparing “the weather\nof Delhi” with “Mumbai”. The comparisons\nshould be made on common grounds. In this\ncase, it should be compared with “the weather\nof Mumbai” instead of “Mumbai”.\nThe apples of Shimla are tastier than\nOoty. [Incorrect]\nThe apples of Shimla are tastier than those of\nOoty. [Correct]"
  },
  {
    "title": "Rule 114: The words “One of the, either of, neither of, and each of” are always followed by plural nouns.",
    "desc": "",
    "example": "Examples:-\nOne of the student was selected to\nvisit NASA. [Incorrect]\nOne of the students was selected to visit\nNASA. [Correct]\nA person can turn on either of the light\nbulb. [Incorrect]\nA person can turn on either of the light\nbulbs. [Correct]\nDo you go to each of the meetings? [Correct]"
  },
  {
    "title": "Rule 115: When “but, except, or between” are used as preposition, it must followed by the objective case of pronoun (me, him, her, you, us, them, etc.) and not the subjective case (I, he, she, you, we, they, etc.).",
    "desc": "",
    "example": "Examples:-\nThere is friendship between you and I.\n[Incorrect]\nThere is friendship between you and me.\n[Correct]\nAll but he are going to the party. [Incorrect]\nAll but him are going to the party. [Correct]\nLet he do the work. [Incorrect]// Let is a\nverb and we use objective case after a verb\nLet him do the work. [Correct]\nAll except him are going to the\nparty. [Correct]"
  },
  {
    "title": "Rule 116: Whenever we use the pseudo subject in a sentence, the pronoun following the pseudo subject should always be in subjective case and not in objective case.",
    "desc": "",
    "example": "Examples:-\nIt is him who should be blamed. [Incorrect]\nIt is he who should be blamed. [Correct]\n*NOTE: Pseudo subject takes the place of\nsubject but cannot perform the role of subject.\nA subject is the combination of syntax (study\nof structure) and semantics (study of\nmeaning). Pseudo subject can only fulfill the\nrequirement of syntax. As Pseudo subject\nsemantically fails, it is called Pseudo subject.\nExamples:-\nIt is a lovely day. [Correct]\nIt is us who have defeated the champion.\n[Incorrect]\nIt is we who have defeated the champion .\n[Correct]\nIt is me who am guilty. [Incorrect]\nIt is I who am guilty. [Correct]\nHere subject is day. So, ‘it’ which works as\nan introductory subject, is a Pseudo subject."
  },
  {
    "title": "Rule 117: When we use the word “such” as a determiner, we will only use “as” as its connector.",
    "desc": "‘Else’ should be followed by ‘but’\n‘Other’ and ‘otherwise’ are followed by\n‘than’\nHe is such a person that you\nmentioned. [Incorrect]\nHe is such a person as you\nmentioned. [Correct]\nSuch a book as this is referred by a teacher.\n[Correct]\nThey want nothing else but to have\ntheir honor and dignity .[Correct]\nIt was nothing else but sheer madness\n[Correct]",
    "example": ""
  },
  {
    "title": "Rule 118: While showing possession with a plural noun, we should make sure that we do not put apostrophe (‘s) in such a way that it creates a hissing sound. In English, words creating a hissing sound are avoided.",
    "desc": "Exception:- “else’s” is grammatically correct\nin spite of the hissing sound.",
    "example": "Examples:-\nGovernment girls’s school. [Incorrect]\nGovernment girls’ school. [Correct]\nIn the first case, “girls’s” is incorrect as it\ncreates the hissing sound. It should be\nrewritten as “girls’”.\nSome more examples:-\nJesus’ sake\nFor peace’ sake\nResidents’ Welfare Association\nPythagoras’ theorem\nFor goodness’ sake\nFor justice’ sake"
  },
  {
    "title": "Rule 119: We never use apostrophe (‘s) with pronouns to show possession. It is only used with nouns.",
    "desc": "",
    "example": "Examples:-\nYour’s friendly. [Incorrect]\nYours friendly. [Correct]\nThe kids are yours and mine. [Correct]\nWe shall finally have what is rightfully\nours. [Correct]\nThe ring is hers. [Correct]\nThe bag is theirs. [Correct]\nTheir mother gets along well with\nyours. [Correct]"
  },
  {
    "title": "Rule 120: There are certain words which are never followed by Noun. These are “afraid, asleep, due, ready, unable, alike, aware, glad, sorry, well, alone, ill, sure, worth. etc.",
    "desc": "",
    "example": "Examples:-\nWe were unable to contact him at the time.\nThe army is said to be ready for action.\nI am glad to know the parcel arrived safely.\nHe likes being alone in the house.\nYour painting has come out really well.\nHe has proved his worth to the team."
  }
];

window.getSafeDateStr = function(d = new Date()) { const y = d.getFullYear(); const m = String(d.getMonth() + 1).padStart(2, '0'); const day = String(d.getDate()).padStart(2, '0'); return `${y}-${m}-${day}`; };

window.appData = { mocks: [], studyLogs: [], attendance: {}, countdowns: [], tasks: {}, dailySessions: {}, vaultFolders: [], vaultNotes: [], quizHistory: [] };

// CLEAN LOCAL DATA STORE (V53)
// Only the current V53 store is used. No V21–V52 migration chain.
const DATA_KEY = 'kkMonitoringV53';

const FRESH_MARKER = 'kkFreshStartV53Done';
let currentMockType = 'full';
window.setMockType = function(type) {
    currentMockType = (type === 'sectional') ? 'sectional' : 'full';
    const bFull = document.getElementById('btnFull');
    const bSec = document.getElementById('btnSec');
    const secSel = document.getElementById('sectionalSelector');
    if (bFull) bFull.className = currentMockType === 'full' ? 'btn-primary' : 'btn-secondary';
    if (bSec) bSec.className = currentMockType === 'sectional' ? 'btn-primary' : 'btn-secondary';
    if (secSel) secSel.classList.toggle('hidden', currentMockType !== 'sectional');
    if (typeof window.renderMockSubjectsVisibility === 'function') window.renderMockSubjectsVisibility();
};
function getRandIdx(arr, key) {
    if (!Array.isArray(arr) || !arr.length) return 0;
    try {
        const saved = parseInt(window.kkSafeLocal.getItem('kk_' + key + '_idx'), 10);
        if (Number.isFinite(saved) && saved >= 0 && saved < arr.length) return saved;
    } catch (_) {}
    return Math.floor(Math.random() * arr.length);
}
window.getRandIdx = getRandIdx;

// Android WebView & Sandbox Safe In-App Glass Modal for Prompt / Confirm
window.kkDialogPrompt = function(title, defaultValue = '') {
    return new Promise(resolve => {
        document.getElementById('kkCustomDialogModal')?.remove();
        const overlay = document.createElement('div');
        overlay.id = 'kkCustomDialogModal';
        overlay.className = 'cmd-modal';
        overlay.style.zIndex = '200000';
        overlay.innerHTML = `
          <div class="cmd-modal-card" style="max-width:420px;width:92vw;padding:24px;">
            <div class="cc-eyebrow">INPUT REQUIRED</div>
            <h3 style="margin:8px 0 14px;font-size:1.15rem;">${escapeHTML(title)}</h3>
            <input id="kkDialogInput" class="modern-input" type="text" value="${escapeHTML(defaultValue)}" style="margin-bottom:16px;">
            <div style="display:flex;gap:10px;justify-content:flex-end;">
              <button type="button" class="btn-secondary" id="kkDialogCancel">Cancel</button>
              <button type="button" class="btn-primary" id="kkDialogOk">Save</button>
            </div>
          </div>`;
        document.body.appendChild(overlay);
        const inp = document.getElementById('kkDialogInput');
        const close = val => { overlay.remove(); resolve(val); };
        document.getElementById('kkDialogCancel').onclick = () => close(null);
        document.getElementById('kkDialogOk').onclick = () => close(inp.value.trim() || null);
        overlay.addEventListener('click', e => { if (e.target === overlay) close(null); });
        inp.addEventListener('keydown', e => {
            if (e.key === 'Enter') { e.preventDefault(); close(inp.value.trim() || null); }
            else if (e.key === 'Escape') { e.preventDefault(); close(null); }
        });
        setTimeout(() => { inp.focus(); inp.select(); }, 30);
    });
};

window.kkDialogConfirm = function(message, confirmLabel = 'Confirm', isDanger = true) {
    return new Promise(resolve => {
        document.getElementById('kkCustomDialogModal')?.remove();
        const overlay = document.createElement('div');
        overlay.id = 'kkCustomDialogModal';
        overlay.className = 'cmd-modal';
        overlay.style.zIndex = '200000';
        overlay.innerHTML = `
          <div class="cmd-modal-card" style="max-width:420px;width:92vw;padding:24px;">
            <div class="cc-eyebrow">CONFIRM ACTION</div>
            <p style="margin:12px 0 20px;font-size:0.98rem;line-height:1.5;">${escapeHTML(message)}</p>
            <div style="display:flex;gap:10px;justify-content:flex-end;">
              <button type="button" class="btn-secondary" id="kkDialogCancel">Cancel</button>
              <button type="button" class="${isDanger ? 'btn-danger' : 'btn-primary'}" id="kkDialogOk">${escapeHTML(confirmLabel)}</button>
            </div>
          </div>`;
        document.body.appendChild(overlay);
        const close = val => { overlay.remove(); resolve(val); };
        document.getElementById('kkDialogCancel').onclick = () => close(false);
        document.getElementById('kkDialogOk').onclick = () => close(true);
        overlay.addEventListener('click', e => { if (e.target === overlay) close(false); });
    });
};

window.kkDownloadFile = async function(filename, content, mimeType = 'text/plain;charset=utf-8') {
    try {
        if (window.AndroidBridge && typeof window.AndroidBridge.saveFile === 'function') {
            window.AndroidBridge.saveFile(filename, typeof content === 'string' ? content : '', mimeType);
            window.showToast?.('Saved to Android Downloads: ' + filename);
            return true;
        }
        const blob = content instanceof Blob ? content : new Blob([content], { type: mimeType });
        if (navigator.canShare && navigator.share && /Android/i.test(navigator.userAgent)) {
            const file = new File([blob], filename, { type: mimeType });
            if (navigator.canShare({ files: [file] })) {
                try {
                    await navigator.share({ files: [file], title: filename });
                    return true;
                } catch (_) {}
            }
        }
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        a.remove();
        setTimeout(() => window.URL.revokeObjectURL(url), 1500);
        return true;
    } catch (e) {
        console.warn('Download error:', e);
        return false;
    }
};

const PREVIOUS_CURRENT_KEY = 'kkMonitoringV51';

function quizRecordId(record){
    const r = record && typeof record === 'object' ? record : {};
    if(r.id !== undefined && r.id !== null && String(r.id) !== '') return String(r.id);
    const ts = Number(r.timestamp) || 0;
    const date = String(r.date || '');
    const score = Number(r.score) || 0;
    const taken = Number(r.timeTakenMs) || 0;
    const correct = Number(r.correct) || 0;
    const wrong = Number(r.wrong) || 0;
    return `quiz-${date}-${ts}-${score}-${taken}-${correct}-${wrong}`;
}

function dedupeQuizHistory(list){
    const input = Array.isArray(list) ? list : [];
    const seen = new Map();
    const out = [];
    for(const raw of input){
        if(!raw || typeof raw !== 'object') continue;
        const item = {...raw, id: quizRecordId(raw)};
        const key = item.id;
        if(!seen.has(key)){ seen.set(key, true); out.push(item); }
    }
    return out;
}

function ensureDataShape(){
    if(!window.appData || typeof window.appData!=='object' || Array.isArray(window.appData)) window.appData={};
    if(!Array.isArray(window.appData.countdowns)) window.appData.countdowns=[];
    if(!Array.isArray(window.appData.mocks)) window.appData.mocks=[];
    if(!Array.isArray(window.appData.studyLogs)) window.appData.studyLogs=[];
    if(!Array.isArray(window.appData.quizHistory)) window.appData.quizHistory=[];
    window.appData.quizHistory = dedupeQuizHistory(window.appData.quizHistory);
    if(!window.appData.tasks||typeof window.appData.tasks!=='object'||Array.isArray(window.appData.tasks)) window.appData.tasks={};
    if(!Array.isArray(window.appData.vaultFolders)) window.appData.vaultFolders=[];
    if(!Array.isArray(window.appData.vaultNotes)) window.appData.vaultNotes=[];
    if(!window.appData.attendance||Array.isArray(window.appData.attendance)) window.appData.attendance={};
    if(!window.appData.dailySessions||typeof window.appData.dailySessions!=='object'||Array.isArray(window.appData.dailySessions)) window.appData.dailySessions={};
    if(!window.appData.xp||typeof window.appData.xp!=='object'||Array.isArray(window.appData.xp)) window.appData.xp={total:0,daily:{}};
    if(!window.appData.xp.daily||typeof window.appData.xp.daily!=='object'||Array.isArray(window.appData.xp.daily)) window.appData.xp.daily={};
    if(!window.appData.vocabProgress||typeof window.appData.vocabProgress!=='object'||Array.isArray(window.appData.vocabProgress)) window.appData.vocabProgress={};
    if(!window.appData.grammarProgress||typeof window.appData.grammarProgress!=='object'||Array.isArray(window.appData.grammarProgress)) window.appData.grammarProgress={};
}

function loadLocalData(){
    try{
        let raw=window.kkSafeLocal.getItem(DATA_KEY);
        // Carry forward only the last clean build's store once. Older V21–V50 stores are never read.
        if(!raw){
            const previous=window.kkSafeLocal.getItem(PREVIOUS_CURRENT_KEY);
            if(previous){ raw=previous; try{ window.kkSafeLocal.setItem(DATA_KEY, previous); }catch(_){} }
        }
        if(raw){
            const parsed=JSON.parse(raw);
            if(parsed&&typeof parsed==='object'&&!Array.isArray(parsed)) window.appData={...window.appData,...parsed};
        }
        ensureDataShape();
        // Remove stale app-data/session keys after the current clean store has been established.
        for(const key of ['kkMonitoringV21','kkMonitoringV22','kkMonitoringV23','kkMonitoringV24','kkMonitoringV25','kkMonitoringV26','kkMonitoringV27','kkMonitoringV28','kkMonitoringV29','kkMonitoringV30','kkMonitoringV31','kkMonitoringV32','kkMonitoringV33','kkMonitoringV34','kkMonitoringV35','kkMonitoringV36','kkMonitoringV37','kkMonitoringV38','kkMonitoringV39','kkMonitoringV40','kkMonitoringV41','kkMonitoringV42','kkMonitoringV43','kkMonitoringV44','kkMonitoringV45','kkMonitoringV46','kkMonitoringV47','kkMonitoringV48','kkMonitoringV49','kkMonitoringV50','kkFreshStartV51Done','kkUnlocked','kkUnlocked_v48','kkUnlocked_v50','kkUnlocked_v51']){ try{ window.kkSafeLocal.removeItem(key); }catch(_){} }
    }catch(e){console.error('Local data load:',e);ensureDataShape();}
}

function saveDataLocally(reason='save'){
    try{
        ensureDataShape();
        window.kkSafeLocal.setItem(DATA_KEY,JSON.stringify(window.appData));
        window.dispatchEvent(new CustomEvent('kk:data-saved',{detail:{source:'local',reason}}));
    }catch(e){console.warn('Local save failed:',e);}
}
window.saveDataLocally=saveDataLocally;
window.kkQuizRecordId=quizRecordId; window.kkDedupeQuizHistory=dedupeQuizHistory;

function escapeHTML(value) {
    return String(value ?? '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
}
function safeJSString(value) { return JSON.stringify(String(value ?? '')); }

window.showToast = function(msg, isError = false) {
    try {
        const toast = document.getElementById('toast'); const icon = document.getElementById('toastIcon'); const msgEl = document.getElementById('toastMsg');
        if (!toast || !msgEl) return; msgEl.innerText = msg;
        icon.className = isError ? "ph-fill ph-warning-circle text-danger" : "ph-fill ph-check-circle text-emerald"; 
        toast.style.borderColor = isError ? "var(--danger)" : "var(--neon-emerald)";
        toast.classList.add('show'); setTimeout(() => toast.classList.remove('show'), 3000);
    } catch(e){}
};


// --- FLASHCARD AUTO-LOADER ---
let flashcardAttempt = 0;
function tryLoadFlashcards() {
    try {
        let gL = false; let vL = false;
        if(typeof grammarData !== 'undefined' && document.getElementById('gRuleTitle')) { window.renderGrammarRule(); gL = true; }
        if(typeof vocabData !== 'undefined' && document.getElementById('vWord')) { window.renderVocabWord(); vL = true; }
        if((!gL || !vL) && flashcardAttempt < 20) { flashcardAttempt++; setTimeout(tryLoadFlashcards, 100); } 
    } catch(e){}
}

// --- CORE INIT ---
let __dashboardInitPromise=null;
window.initDashboard = function() {
    if(__dashboardInitPromise) return __dashboardInitPromise;
    __dashboardInitPromise=(async()=>{ try { 
        loadLocalData(); bindLearnHubControls(); 
        tryLoadFlashcards(); 
        updateDashboardKPIs();
        renderCountdowns(); 
        renderDailySchedule(); 
        renderCalendar(); 
        updateMockUI(); 
        renderTracker(); 
        updateDailyCountdown(); 
        renderDashboardStickyNotes();
        // FORCE RENDER ROOT FOLDERS ON INIT
        renderVaultFolders(null);
    } catch(e){ console.error(e); } })();
    return __dashboardInitPromise;
};

function bindCoreNavigationAndInit() {
    try {
        if (window.kkSafeSession.getItem('kkUnlocked_v57') === 'true') initDashboard();
    } catch(e){ console.error('Core init failed', e); }
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', bindCoreNavigationAndInit, {once:true});
else bindCoreNavigationAndInit();

// --- DASHBOARD STICKY NOTES WALL ---
window.renderDashboardStickyNotes = function() {
    try {
        const grid = document.getElementById('dashboardStickyNotes');
        if(!grid) return;
        grid.innerHTML = '';
        let pinnedNotes = (window.appData.vaultNotes || []).filter(n => n.pinned === true);

        if(pinnedNotes.length === 0) {
            grid.innerHTML = `<p style="color:var(--text-muted); font-size:0.9rem; grid-column: 1 / -1;">No notes pinned yet. Go to Study Room & Vault, create a note, and click the Pin 📌 icon.</p>`;
            return;
        }

        const stickyColors = ['#fef08a', '#bbf7d0', '#bae6fd', '#fbcfe8'];
        pinnedNotes.forEach((n, idx) => {
            let color = stickyColors[idx % stickyColors.length];
            let contentHtml = n.type === 'text' ? `<div style="flex:1; margin:8px 0; font-size: 0.8rem; line-height: 1.4; font-weight:600; white-space: pre-wrap; word-wrap: break-word; color:#222; overflow-y:auto;">${escapeHTML(n.content)}</div>` : `<div style="flex:1; margin:8px 0; text-align:center; color:#222;"><i class="ph-duotone ph-image" style="font-size:2.5rem; opacity:0.8;"></i><p style="font-size:0.8rem; font-weight:bold;">Attachment</p></div>`;
            grid.innerHTML += `<div class="hover-lift" style="background: ${color}; border-radius: 2px 15px 15px 15px; padding: 12px; position:relative; box-shadow: 2px 4px 10px rgba(0,0,0,0.3); min-height: 120px; max-height: 180px; display:flex; flex-direction:column;">
                <div style="position:absolute; top:-5px; left:50%; transform:translateX(-50%); width:30px; height:12px; background:rgba(255,255,255,0.7); box-shadow: 0 1px 2px rgba(0,0,0,0.1);"></div>
                <div style="text-align:right; margin-bottom:5px;"><i class="ph-fill ph-push-pin" style="color:#ea580c; cursor:pointer; font-size:1.1rem;" onclick="togglePinNote(${n.id})" title="Unpin Note"></i></div>
                ${contentHtml}
                ${n.type !== 'text' ? `<button style="margin-top:auto; width:100%; font-size:0.75rem; padding:4px; border-radius:6px; background:rgba(0,0,0,0.8); color:#fff; border:none; cursor:pointer;" onclick="previewFile('${n.id}')">View</button>` : ''}
            </div>`;
        });
    } catch(e) { console.error(e); }
};

// --- CIRCULAR COUNTDOWN TIMER (6AM-9PM) ---
function updateDailyCountdown() {
    try {
        const now = new Date(); const h = now.getHours(); let target = new Date(now); let label = ""; let totalSecs = 15*3600; let remSecs = 0;
        if (h >= 6 && h < 21) { target.setHours(21, 0, 0, 0); label = "Study Window Closes:"; remSecs = Math.floor((target - now) / 1000); } 
        else { if (h >= 21) target.setDate(target.getDate() + 1); target.setHours(6, 0, 0, 0); label = "Next Window Starts:"; totalSecs = 9*3600; remSecs = Math.floor((target - now) / 1000); }
        
        document.querySelectorAll('.daily-timer-label').forEach(el => el.innerText = label);
        document.querySelectorAll('.daily-timer-value').forEach(el => el.innerText = `${String(Math.floor(remSecs/3600)).padStart(2,'0')}:${String(Math.floor((remSecs%3600)/60)).padStart(2,'0')}:${String(remSecs%60).padStart(2,'0')}`);
        
        const circle = document.getElementById('studyTimerRing');
        if(circle) { const circ = circle.r.baseVal.value * 2 * Math.PI; circle.style.strokeDasharray = `${circ} ${circ}`; circle.style.strokeDashoffset = circ - (remSecs/totalSecs) * circ; }
        const el = document.getElementById('liveDateTime'); if (el) el.innerText = now.toLocaleString('en-US', { hour12: true, dateStyle: 'short', timeStyle: 'medium' });
    } catch(e){}
}
let dailyCountdownTimer=null; const startDailyCountdownTimer=()=>{if(!dailyCountdownTimer)dailyCountdownTimer=setInterval(updateDailyCountdown,1000)}; if(window.kkSafeSession.getItem('kkUnlocked_v57')==='true')startDailyCountdownTimer(); else window.addEventListener('kk:unlocked',startDailyCountdownTimer,{once:true});

// --- GRAMMAR & VOCAB ---
let currentRuleIndex = 0;
let currentVocabIndex = 0;

// Auto-change Grammar Rule every 5 minutes (300,000 milliseconds).
const startGrammarAutoTimer=()=>{
    if(window.__kkGrammarAutoTimer) return;
    window.__kkGrammarAutoTimer=setInterval(()=>{
        try{if(typeof grammarData!=='undefined')window.nextGrammarRule();}catch(e){}
    },300000);
};
if(window.kkSafeSession.getItem('kkUnlocked_v57')==='true') startGrammarAutoTimer();
else window.addEventListener('kk:unlocked',startGrammarAutoTimer,{once:true});

// --- LEARN HUB REPAIR ---
// The original Learn Hub renderer wrote only to hidden compatibility nodes.
// These renderers update the real Learn Hub UI and keep the legacy nodes in sync.
function setTextIfPresent(id, value) {
    const el = document.getElementById(id);
    if (el) el.textContent = value == null ? '' : String(value);
}
function renderLearnRuleUI(idx) {
    if (typeof grammarData === 'undefined' || !Array.isArray(grammarData) || !grammarData.length) return;
    currentRuleIndex = idx === undefined
        ? getRandIdx(grammarData, 'grammar')
        : ((Number(idx) % grammarData.length) + grammarData.length) % grammarData.length;
    const rule = grammarData[currentRuleIndex];
    setTextIfPresent('learnRuleTitle', rule.title);
    setTextIfPresent('learnRuleText', rule.desc);
    setTextIfPresent('learnRuleExample', rule.example);
    setTextIfPresent('gRuleTitle', rule.title);
    setTextIfPresent('gRuleText', rule.desc);
    setTextIfPresent('gRuleExample', rule.example);
    window.kkSafeLocal.setItem('kk_grammar_idx', String(currentRuleIndex));
}
function renderLearnVocabUI(idx) {
    if (typeof vocabData === 'undefined' || !Array.isArray(vocabData) || !vocabData.length) return;
    currentVocabIndex = idx === undefined
        ? getRandIdx(vocabData, 'vocab')
        : ((Number(idx) % vocabData.length) + vocabData.length) % vocabData.length;
    const v = vocabData[currentVocabIndex];
    const hindi = window.sanitizeVocabDisplay ? window.sanitizeVocabDisplay(v) : (v.hindi || '');
    setTextIfPresent('learnWord', v.word);
    setTextIfPresent('learnPos', v.pos || 'Word');
    setTextIfPresent('learnHindi', hindi);
    setTextIfPresent('learnMeaning', v.meaning);
    setTextIfPresent('learnVExample', v.example ? `"${v.example}"` : '');
    setTextIfPresent('vWord', v.word);
    setTextIfPresent('vPos', v.pos || 'Word');
    setTextIfPresent('vHindi', hindi);
    setTextIfPresent('vMeaning', v.meaning);
    setTextIfPresent('vExample', v.example ? `"${v.example}"` : '');
    window.kkSafeLocal.setItem('kk_vocab_idx', String(currentVocabIndex));
}
window.renderGrammarRule = renderLearnRuleUI;
window.nextGrammarRule = () => renderLearnRuleUI(currentRuleIndex + 1);
window.prevGrammarRule = () => renderLearnRuleUI(currentRuleIndex - 1);
window.renderVocabWord = renderLearnVocabUI;
window.nextVocab = () => renderLearnVocabUI(currentVocabIndex + 1);
window.prevVocab = () => renderLearnVocabUI(currentVocabIndex - 1);

function bindLearnHubControls() {
    if (window.__kkLearnHubBound) return;
    window.__kkLearnHubBound = true;
    document.getElementById('learnRulePrev')?.addEventListener('click', () => window.prevGrammarRule());
    document.getElementById('learnRuleNext')?.addEventListener('click', () => window.nextGrammarRule());
    document.getElementById('learnVPrev')?.addEventListener('click', () => window.prevVocab());
    document.getElementById('learnVNext')?.addEventListener('click', () => window.nextVocab());
    document.getElementById('learnRuleGo')?.addEventListener('click', () => {
        window.markGrammarLearned?.();
        window.showToast?.('Grammar rule marked for revision.');
    });
    document.getElementById('learnOnlineBtn')?.addEventListener('click', async () => {
        const result = document.getElementById('learnOnlineResult');
        const word = vocabData?.[currentVocabIndex]?.word;
        if (!result || !word) return;
        result.hidden = false;
        result.textContent = 'Looking up meaning…';
        try {
            const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(word)}`);
            if (!response.ok) throw new Error('lookup failed');
            const data = await response.json();
            const meanings = (data[0]?.meanings || []).slice(0, 2);
            result.innerHTML = meanings.map(m => {
                const defs = (m.definitions || []).slice(0, 2).map(d => escapeHTML(d.definition)).join('<br>');
                return `<b>${escapeHTML(m.partOfSpeech || 'Meaning')}</b><br>${defs}`;
            }).join('<hr>') || 'No online definition found.';
        } catch (_) {
            result.textContent = 'Online lookup is unavailable right now. Use the saved meaning above.';
        }
    });
    renderLearnRuleUI();
    renderLearnVocabUI();
}
window.bindLearnHubControls = bindLearnHubControls;


window.addCountdown = function() {
    try { const name = document.getElementById('cdName').value; const dateStr = document.getElementById('cdDate').value; if (!name || !dateStr) return showToast("Enter Name and Date!", true); window.appData.countdowns.push({ id: Date.now(), name, targetTime: new Date(dateStr).getTime() }); saveDataLocally(); renderCountdowns(); document.getElementById('cdForm').classList.add('hidden'); showToast("Added!"); } catch(e){}
};
window.deleteCountdown = function(id) { try { window.appData.countdowns = window.appData.countdowns.filter(c => String(c.id) !== String(id)); saveDataLocally('delete'); renderCountdowns(); window.kkCloudReplaceNow?.(); } catch(e){} };
function renderCountdowns() {
    try { const container = document.getElementById('activeCountdowns'); if (!container) return; container.innerHTML = ''; (window.appData.countdowns || []).forEach(cd => { const diff = cd.targetTime - new Date().getTime(); let dStr = "Passed!"; if (diff > 0) dStr = `${Math.floor(diff/86400000)}d ${Math.floor((diff%86400000)/3600000)}h ${Math.floor((diff%3600000)/60000)}m ${Math.floor((diff%60000)/1000)}s`; container.innerHTML += `<div class="cd-card"><i class="ph-bold ph-x cd-del" onclick="deleteCountdown(${cd.id})"></i><h4>${cd.name}</h4><p>${dStr}</p></div>`; }); } catch(e){}
}
let countdownTimer=null; const startCountdownTimer=()=>{ if(countdownTimer) return; countdownTimer=true; }; if(window.kkSafeSession.getItem('kkUnlocked_v57')==='true')startCountdownTimer(); else window.addEventListener('kk:unlocked',startCountdownTimer,{once:true});

// --- DAILY TO-DO PLAN ---
// One deterministic random plan per calendar day.
// Each of the 4 sections contributes exactly one item from Part A and one from Part B.
// The seed changes every day, so the selection stays stable during the day but changes tomorrow.
const DAILY_PLAN_SECTIONS = [
  {
    key: 'english', label: 'English', icon: '📘',
    parts: [
      [
        { title: 'Editorial Lecture', minutes: 90 },
        { title: 'Perfection Lecture by Nimish Bansal', minutes: 90 }
      ],
      [
        { title: '120 Rules of Grammar', minutes: 30 },
        { title: 'Black Book', minutes: 30 },
        { title: 'Random Rules and Lecture', minutes: 30 },
        { title: 'Topic to be Read', minutes: 30 }
      ]
    ]
  },
  {
    key: 'quants', label: 'Quants', icon: '🔢',
    parts: [
      [
        { title: 'Lecture by Aashis Sir', minutes: 90 },
        { title: 'Lecture by Harshal Agrawal', minutes: 90 }
      ],
      [
        { title: 'Learn Table, Cubes, Percentage and Formula', minutes: 30 },
        { title: 'Solve Checklist', minutes: 30 },
        { title: 'Solve PDF & Book', minutes: 30 }
      ]
    ]
  },
  {
    key: 'reasoning', label: 'Reasoning', icon: '🧠',
    parts: [
      [
        { title: 'Lecture by Rahul Garg', minutes: 90 },
        { title: 'Lecture by Ankush Lamba', minutes: 90 }
      ],
      [
        { title: 'Checklist', minutes: 30 },
        { title: 'Sectional', minutes: 30 }
      ]
    ]
  },
  {
    key: 'mock', label: 'Mock & Analysis', icon: '📝',
    parts: [
      [
        { title: 'Mock', minutes: 60 },
        { title: 'Analysis', minutes: 120 }
      ],
      [
        { title: 'Sectional', minutes: 30 }
      ]
    ]
  }
];

function dailyPlanSeed(dateStr) {
  let h = 2166136261;
  for (let i = 0; i < dateStr.length; i++) {
    h ^= dateStr.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}
function seededPick(list, state) {
  state.value = (Math.imul(state.value ^ (state.value >>> 16), 2246822519) + 3266489917) >>> 0;
  return list[state.value % list.length];
}
function minutesToClock(total) {
  const h = Math.floor(total / 60), m = total % 60;
  const ampm = h >= 12 ? 'PM' : 'AM', hh = h % 12 || 12;
  return `${String(hh).padStart(2,'0')}:${String(m).padStart(2,'0')} ${ampm}`;
}
function generateDailySchedule(dateOverride) {
  const dateStr = dateOverride || getSafeDateStr();
  const rng = { value: dailyPlanSeed(dateStr) };
  const selected = [];
  DAILY_PLAN_SECTIONS.forEach(section => {
    section.parts.forEach((part, partIndex) => {
      const item = seededPick(part, rng);
      selected.push({
        ...item,
        section: section.key,
        sectionLabel: section.label,
        sectionIcon: section.icon,
        part: partIndex + 1
      });
    });
  });

  // Fixed study window: 08:00–20:30, with the requested lunch and walk breaks.
  // The selected items are placed in a stable daily order; remaining time becomes
  // intentional "flex revision" rather than an accidental empty gap.
  const breakWindows = [
    { start: 13 * 60, end: 15 * 60, title: '🍱 Lunch Break', id: 'break-lunch' },
    { start: 18 * 60, end: 18 * 60 + 30, title: '🚶 Walk Break', id: 'break-walk' }
  ];
  const workItems = selected.slice();
  for (let i = workItems.length - 1; i > 0; i--) {
    const j = seededPick(Array.from({length: i + 1}, (_, n) => n), rng);
    [workItems[i], workItems[j]] = [workItems[j], workItems[i]];
  }

  const result = [];
  let cursor = 8 * 60;
  let index = 0;
  const pushBreaksUntil = (nextWorkEnd) => {
    for (const b of breakWindows) {
      if (cursor < b.start && nextWorkEnd > b.start) return false;
    }
    return true;
  };
  while (index < workItems.length) {
    const item = workItems[index];
    // Never cross a fixed break; insert the break first when needed.
    const nextEnd = cursor + item.minutes;
    const crossing = breakWindows.find(b => cursor < b.start && nextEnd > b.start);
    if (crossing) {
      result.push({ id: crossing.id, time: `${minutesToClock(crossing.start)} - ${minutesToClock(crossing.end)}`, title: crossing.title, isBreak: true });
      cursor = crossing.end;
      continue;
    }
    if (breakWindows.some(b => cursor >= b.start && cursor < b.end)) {
      const b = breakWindows.find(b => cursor >= b.start && cursor < b.end);
      result.push({ id: b.id, time: `${minutesToClock(b.start)} - ${minutesToClock(b.end)}`, title: b.title, isBreak: true });
      cursor = b.end;
      continue;
    }
    const id = `plan-${dateStr}-${item.section}-${item.part}`;
    result.push({
      id,
      time: `${minutesToClock(cursor)} - ${minutesToClock(nextEnd)}`,
      title: `${item.sectionIcon} ${item.sectionLabel} · ${item.title}`,
      taskTitle: item.title,
      section: item.section,
      sectionLabel: item.sectionLabel,
      part: item.part,
      duration: item.minutes,
      isBreak: false
    });
    cursor = nextEnd;
    index++;
  }
  // Insert fixed breaks that occur after the last selected item only if needed.
  breakWindows.forEach(b => {
    if (cursor <= b.start && !result.some(x => x.id === b.id)) {
      result.push({ id: b.id, time: `${minutesToClock(b.start)} - ${minutesToClock(b.end)}`, title: b.title, isBreak: true });
    }
  });
  result.sort((a,b) => {
    const toMin = s => {
      const m = String(s).match(/(\d+):(\d+) (AM|PM)/); if (!m) return 0;
      let h = Number(m[1]) % 12; if (m[3] === 'PM') h += 12;
      return h * 60 + Number(m[2]);
    };
    return toMin(a.time.split(' - ')[0]) - toMin(b.time.split(' - ')[0]);
  });

  // Keep the full window visible without inventing extra study tasks.
  // Any unused time is shown as a light flex/revision block.
  const final = [];
  let previousEnd = 8 * 60;
  result.forEach(item => {
    const start = (() => {
      const m = item.time.split(' - ')[0].match(/(\d+):(\d+) (AM|PM)/);
      let h = Number(m[1]) % 12; if (m[3] === 'PM') h += 12;
      return h * 60 + Number(m[2]);
    })();
    if (start > previousEnd) {
      const gap = start - previousEnd;
      if (gap >= 30) final.push({
        id: `flex-${dateStr}-${previousEnd}`,
        time: `${minutesToClock(previousEnd)} - ${minutesToClock(start)}`,
        title: '↻ Flex Revision / Backlog Buffer',
        isBreak: false,
        sectionLabel: 'Flex'
      });
    }
    final.push(item);
    const end = (() => {
      const m = item.time.split(' - ')[1].match(/(\d+):(\d+) (AM|PM)/);
      let h = Number(m[1]) % 12; if (m[3] === 'PM') h += 12;
      return h * 60 + Number(m[2]);
    })();
    previousEnd = Math.max(previousEnd, end);
  });
  if (previousEnd < 20 * 60 + 30) {
    final.push({
      id: `flex-${dateStr}-end`,
      time: `${minutesToClock(previousEnd)} - 08:30 PM`,
      title: '↻ Flex Revision / Backlog Buffer',
      isBreak: false,
      sectionLabel: 'Flex'
    });
  }
  return final;
}
function renderDailySchedule() {
  try {
    const container = document.getElementById('todoListContainer'); if (!container) return;
    const day = new Date(`${getSafeDateStr()}T12:00:00`);
    const cycleEl = document.getElementById('cycleDay'); if (cycleEl) cycleEl.innerText = `${((Math.floor(day.getTime() / 86400000) % 40) + 1)}`;
    const tStr = getSafeDateStr();
    if (!window.appData.tasks) window.appData.tasks = {};
    if (!window.appData.tasks[tStr]) window.appData.tasks[tStr] = {};
    const tState = window.appData.tasks[tStr];
    const plan = generateDailySchedule();
    container.innerHTML = plan.map(item => {
      const safeId = String(item.id).replace(/'/g, "\\'");
      const checked = !!tState[item.id];
      return `<label class="checkbox-container todo-item ${item.isBreak ? 'break' : ''}" data-plan-section="${escapeHTML(item.sectionLabel || 'Flex')}">
        <div class="todo-main"><span class="todo-time">${escapeHTML(item.time)}</span><span class="todo-task ${item.isBreak ? 'text-orange' : ''}">${escapeHTML(item.title)}</span></div>
        ${item.isBreak ? '<span class="todo-break-label">BREAK</span>' : `<input type="checkbox" ${checked ? 'checked' : ''} onchange="toggleTask('${safeId}', this.checked)"><span class="checkmark"></span>`}
      </label>`;
    }).join('');
    updateTaskSummaryAndStreak();
    window.commandRenderMission?.();
  } catch(e) { console.error('Daily plan render:', e); }
}

window.toggleTask = function(tId, checked) { try{ const tStr = getSafeDateStr(); if (!window.appData.tasks[tStr]) window.appData.tasks[tStr] = {}; window.appData.tasks[tStr][tId] = checked; saveDataLocally(); updateTaskSummaryAndStreak(); } catch(e){} };
function updateTaskSummaryAndStreak() {
    try {
        let streak = 0; const curr = new Date();
        while (streak < 366) {
            const dStr = getSafeDateStr(curr);
            const state = window.appData.tasks[dStr] || {};
            const taskIds = generateDailySchedule(dStr).filter(x => !x.isBreak).map(x => x.id);
            const completed = taskIds.filter(tid => !!state[tid]).length;
            if (!completed) break;
            streak++; curr.setDate(curr.getDate() - 1);
        }
        const el=document.getElementById('taskStreak'); if(el)el.innerText = streak;
    } catch(e){}
}

// --- 0ms DELAY SPEED QUIZ ---
let quizQs = []; let currentQ = 0; let quizScore = 0; let quizInterval = null; let quizStartTime = 0; let quizDurationMs = 300000; let quizTimeTaken = 0; let quizCorrect = 0; let quizWrong = 0; let quizLog = [];
window.startSpeedQuiz = function() {
    try {
        if(quizInterval) clearInterval(quizInterval); quizQs = []; quizScore = 0; currentQ = 0; quizTimeTaken = 0; quizCorrect = 0; quizWrong = 0; quizLog = [];
        for(let i=0; i<20; i++) {
            let type = Math.floor(Math.random() * 3); let q, ans;
            if(type === 0) { let n1 = Math.floor(Math.random() * 16) + 10; let n2 = Math.floor(Math.random() * 9) + 1; q = `${n1} × ${n2} = ?`; ans = n1 * n2; } 
            else if(type === 1) { let n = Math.floor(Math.random() * 29) + 2; q = `${n}² = ?`; ans = n * n; } 
            else { let n = Math.floor(Math.random() * 15) + 1; q = `${n}³ = ?`; ans = n * n * n; } 
            let opts = [ans]; while(opts.length < 4) { let wrg = ans + (Math.floor(Math.random() * 40) - 20); if(!opts.includes(wrg) && wrg > 0) opts.push(wrg); } opts.sort(() => Math.random() - 0.5); quizQs.push({ q, ans, opts });
        }
        quizStartTime = Date.now(); quizInterval = setInterval(updateQuizTimer, 30); renderQuizQ();
    } catch(e){}
};

function updateQuizTimer() {
    try {
        let left = quizDurationMs - (Date.now() - quizStartTime); if(left <= 0) { left = 0; finishQuiz(); }
        document.getElementById('quizTimerDisplay').innerText = `${String(Math.floor(left/60000)).padStart(2,'0')}:${String(Math.floor((left%60000)/1000)).padStart(2,'0')}:${String(Math.floor((left%1000)/10)).padStart(2,'0')}`;
    } catch(e){}
}

function renderQuizQ() {
    try {
        if(currentQ >= 20) { finishQuiz(); return; }
        document.getElementById('quizScore').innerText = quizScore; let qData = quizQs[currentQ];
        let html = `<h2 style="margin-bottom: 25px; font-size:2.5rem; font-weight:800; color:var(--text-main);">${currentQ+1}. ${qData.q}</h2><div style="display:grid; grid-template-columns: 1fr 1fr; gap:15px;" id="quizOpts">`;
        qData.opts.forEach((opt, idx) => { html += `<button class="btn-secondary hover-lift quiz-opt-btn" id="qBtn${idx}" onclick="checkQuiz(${opt}, ${qData.ans}, 'qBtn${idx}')">${opt}</button>`; });
        document.getElementById('quizContainer').innerHTML = html + `</div>`;
    } catch(e){}
}

window.checkQuiz = function(sel, ans, btnId) {
    try { let isRight = (sel === ans); let btn = document.getElementById(btnId); if(isRight) { btn.classList.add('quiz-correct'); quizScore++; quizCorrect++; } else { btn.classList.add('quiz-wrong'); quizWrong++; } quizLog.push({ q: quizQs[currentQ].q, ans: ans, sel: sel, isRight }); document.querySelectorAll('.quiz-opt-btn').forEach(b => b.disabled = true); setTimeout(() => { currentQ++; renderQuizQ(); }, 600); } catch(e){}
};

function finishQuiz() {
    try {
        if(quizInterval) clearInterval(quizInterval); let timeTakenMs = Date.now() - quizStartTime; if(timeTakenMs > quizDurationMs) timeTakenMs = quizDurationMs;
        document.getElementById('quizContainer').innerHTML = `<h3 class="text-emerald mb-3">Quiz Finished!</h3><button class="btn-primary" onclick="startSpeedQuiz()">Restart Quiz</button>`;
        let sumHtml = `<div style="display:flex; justify-content:space-around; margin-bottom:15px; font-size:1.1rem; border-bottom:1px solid var(--border-glass); padding-bottom:10px;"><span class="text-emerald">Score: ${quizScore}/20</span> <span>Time: ${String(Math.floor(timeTakenMs/60000)).padStart(2,'0')}:${String(Math.floor((timeTakenMs%60000)/1000)).padStart(2,'0')}</span></div>`;
        quizLog.forEach((l, i) => { let bg = l.isRight ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)'; let border = l.isRight ? 'var(--neon-emerald)' : 'var(--danger)'; let icon = l.isRight ? '✅' : '❌'; sumHtml += `<div style="background:${bg}; border: 1px solid ${border}; border-radius: 8px; padding: 12px; display:flex; flex-direction:column; gap:5px;"><div style="display:flex; justify-content:space-between; font-weight:bold; font-size:1.1rem;"><span>Q${i+1}: ${l.q}</span><span>${icon}</span></div><div style="font-size:0.95rem; color:var(--text-muted);">Correct Ans: <b class="text-emerald">${l.ans}</b> &nbsp;|&nbsp; Your Ans: <b style="color:${l.isRight ? 'var(--neon-emerald)' : 'var(--danger)'};">${l.sel}</b></div></div>`; });
        document.getElementById('quizSummaryList').innerHTML = sumHtml; document.getElementById('quizSummaryModal').classList.add('show');
        if(!window.appData.quizHistory) window.appData.quizHistory = [];
        const finishedAt = Date.now();
        window.appData.quizHistory.push({
            id: `quiz-${finishedAt}-${quizScore}-${quizCorrect}-${quizWrong}`,
            date: getSafeDateStr(), score: quizScore, timeTakenMs: timeTakenMs,
            correct: quizCorrect, wrong: quizWrong, timestamp: finishedAt
        });
        window.appData.quizHistory = dedupeQuizHistory(window.appData.quizHistory);
        saveDataLocally();
        renderTracker();
        if(document.getElementById('view-analytics')?.classList.contains('active')) renderCharts();
    } catch(e){}
}

// --- STUDY ROOM TIMERS ---
let sessionInterval = null, sessionSecs = 0, sessionStartedAt = null;
let focusInterval = null, focusSecs = 0, focusStartedAt = null;
let wasteInterval = null, wasteSecs = 0, wasteStartedAt = null;
function formatHMS(s) { if(isNaN(s) || s < 0) s = 0; return `${String(Math.floor(s/3600)).padStart(2,'0')}:${String(Math.floor((s%3600)/60)).padStart(2,'0')}:${String(s%60).padStart(2,'0')}`; }
function elapsedFrom(start, base){ return Math.max(0, Math.floor((Date.now() - start) / 1000) + (base || 0)); }

window.resetSessionTimer = function() {
    try {
        if (sessionInterval) clearInterval(sessionInterval);
        sessionInterval = null; sessionStartedAt = null; sessionSecs = 0;
        const el = document.getElementById('sessionTimeDisplay'); if (el) el.innerText = '00:00:00';
        const startBtn = document.getElementById('btnSessionStart'); if (startBtn) startBtn.disabled = false;
        const endBtn = document.getElementById('btnSessionEnd'); if (endBtn) endBtn.disabled = true;
        showToast('Session timer reset.');
    } catch(e) {}
};

window.startSession = function() { try { if (!sessionInterval) { if (isNaN(sessionSecs)) sessionSecs = 0; sessionStartedAt = Date.now(); sessionInterval = setInterval(() => { sessionSecs = elapsedFrom(sessionStartedAt, 0); const el=document.getElementById('sessionTimeDisplay'); if(el) el.innerText = formatHMS(sessionSecs); }, 1000); document.getElementById('btnSessionStart').disabled = true; document.getElementById('btnSessionEnd').disabled = false; showToast("Study Session Started!"); } } catch(e){} };
window.endSession = function() { try { if (sessionInterval) { sessionSecs = elapsedFrom(sessionStartedAt, 0); clearInterval(sessionInterval); sessionInterval = null; sessionStartedAt = null; } document.getElementById('btnSessionStart').disabled = false; document.getElementById('btnSessionEnd').disabled = true; const todayStr = getSafeDateStr(); if (isNaN(sessionSecs)) sessionSecs = 0; window.appData.dailySessions[todayStr] = (window.appData.dailySessions[todayStr] || 0) + sessionSecs; if(!window.appData.attendance) window.appData.attendance = {}; if(!window.appData.attendance[todayStr]) window.appData.attendance[todayStr] = { status: 'present', hours: 0 }; window.appData.attendance[todayStr].status = 'present'; window.appData.attendance[todayStr].hours = ((window.appData.attendance[todayStr].hours || 0) + (sessionSecs/3600)); saveDataLocally(); renderDailySummaryTable(); renderCalendar(); showToast(`Session Ended. Total Sitting: ${formatHMS(sessionSecs)}`); sessionSecs = 0; document.getElementById('sessionTimeDisplay').innerText = "00:00:00"; } catch(e){} };
window.resetFocusTimer = function() {
    try {
        if (focusInterval) clearInterval(focusInterval);
        focusInterval = null; focusStartedAt = null; focusSecs = 0;
        const el = document.getElementById('focusTimerDisplay'); if (el) el.innerText = '00:00:00';
        const btn = document.getElementById('btnFocus');
        if (btn) {
            btn.innerHTML = '<i class="ph-fill ph-play"></i> Start';
            btn.classList.remove('btn-danger'); btn.classList.add('btn-primary');
        }
        showToast('Focus timer reset.');
    } catch(e) {}
};

window.toggleFocusTimer = function() { try { const btn = document.getElementById('btnFocus'); if (focusInterval) { focusSecs = elapsedFrom(focusStartedAt, 0); clearInterval(focusInterval); focusInterval = null; focusStartedAt = null; btn.innerHTML = '<i class="ph-fill ph-play"></i> Resume'; btn.classList.replace('btn-danger', 'btn-primary'); } else { if (isNaN(focusSecs)) focusSecs = 0; focusStartedAt = Date.now() - (focusSecs * 1000); focusInterval = setInterval(() => { focusSecs = elapsedFrom(focusStartedAt, 0); const el=document.getElementById('focusTimerDisplay'); if(el) el.innerText = formatHMS(focusSecs); }, 1000); btn.innerHTML = '<i class="ph-fill ph-pause"></i> Pause'; btn.classList.replace('btn-primary', 'btn-danger'); } } catch(e){} };
window.submitFocusTimer = function() { try { if (focusInterval) { focusSecs = elapsedFrom(focusStartedAt, 0); clearInterval(focusInterval); focusInterval = null; focusStartedAt = null; } const btn = document.getElementById('btnFocus'); btn.innerHTML = '<i class="ph-fill ph-play"></i> Start'; btn.classList.replace('btn-danger', 'btn-primary'); if (isNaN(focusSecs)) focusSecs = 0; if (focusSecs > 0) { const subjEl = document.getElementById('focusSubject'); window.appData.studyLogs.unshift({ id: Date.now(), date: getSafeDateStr(), type: 'Focus', subject: subjEl ? subjEl.value : 'Study', duration: focusSecs, durationStr: formatHMS(focusSecs) }); saveDataLocally(); renderDailySummaryTable(); showToast("Focus Time Logged!"); } else { showToast("Timer is 0!", true); } focusSecs = 0; document.getElementById('focusTimerDisplay').innerText = "00:00:00"; } catch(e){} };
window.resetWasteTimer = function() {
    try {
        if (wasteInterval) clearInterval(wasteInterval);
        wasteInterval = null; wasteStartedAt = null; wasteSecs = 0;
        const el = document.getElementById('wasteTimerDisplay'); if (el) el.innerText = '00:00:00';
        const btn = document.getElementById('btnWaste');
        if (btn) {
            btn.innerHTML = '<i class="ph-fill ph-play"></i> Start';
            btn.classList.remove('btn-secondary'); btn.classList.add('btn-danger');
        }
        showToast('Waste timer reset.');
    } catch(e) {}
};

window.toggleWasteTimer = function() { try { const btn = document.getElementById('btnWaste'); if (wasteInterval) { wasteSecs = elapsedFrom(wasteStartedAt, 0); clearInterval(wasteInterval); wasteInterval = null; wasteStartedAt = null; btn.innerHTML = '<i class="ph-fill ph-play"></i> Resume'; btn.classList.replace('btn-secondary', 'btn-danger'); } else { if (isNaN(wasteSecs)) wasteSecs = 0; wasteStartedAt = Date.now() - (wasteSecs * 1000); wasteInterval = setInterval(() => { wasteSecs = elapsedFrom(wasteStartedAt, 0); const el=document.getElementById('wasteTimerDisplay'); if(el) el.innerText = formatHMS(wasteSecs); }, 1000); btn.innerHTML = '<i class="ph-fill ph-pause"></i> Pause'; btn.classList.replace('btn-danger', 'btn-secondary'); } } catch(e){} };
window.submitWasteTimer = function() { try { if (wasteInterval) { wasteSecs = elapsedFrom(wasteStartedAt, 0); clearInterval(wasteInterval); wasteInterval = null; wasteStartedAt = null; } const btn = document.getElementById('btnWaste'); btn.innerHTML = '<i class="ph-fill ph-play"></i> Start'; btn.classList.replace('btn-secondary', 'btn-danger'); const noteEl = document.getElementById('wasteNote'); const note = noteEl ? noteEl.value : 'Time Wasted'; if (isNaN(wasteSecs)) wasteSecs = 0; if (wasteSecs > 0) { window.appData.studyLogs.unshift({ id: Date.now(), date: getSafeDateStr(), type: 'Waste', subject: note, duration: wasteSecs, durationStr: formatHMS(wasteSecs) }); saveDataLocally(); renderDailySummaryTable(); showToast("Time Waste Logged!"); } wasteSecs = 0; document.getElementById('wasteTimerDisplay').innerText = "00:00:00"; if(noteEl) noteEl.value = ''; } catch(e){} };

// --- SCHOOL ATTENDANCE ---
window.markAttendance = function() { try { const today = getSafeDateStr(); if (!window.appData.attendance) window.appData.attendance = {}; if (!window.appData.attendance[today]) { window.appData.attendance[today] = { status: 'present', hours: 0 }; saveDataLocally(); renderCalendar(); updateTaskSummaryAndStreak(); showToast("Attendance Marked Present!"); } else { showToast("Already Marked Today!", true); } } catch(e){} };
function renderCalendar() {
    try {
        const grid = document.getElementById('calendarGrid'); if (!grid) return; grid.innerHTML = '';
        const tbody = document.getElementById('attendanceRegisterBody'); if (tbody) tbody.innerHTML = '';
        if(!window.appData.attendance || Array.isArray(window.appData.attendance)) window.appData.attendance = {}; 

        const now = new Date(); const year = now.getFullYear(); const month = now.getMonth(); const todayDate = now.getDate();
        const daysInMonth = new Date(year, month + 1, 0).getDate(); const firstDay = new Date(year, month, 1).getDay();
        
        for (let i = 0; i < firstDay; i++) { grid.innerHTML += `<div class="cal-day" style="opacity:0;"></div>`; }
        const todayStr = getSafeDateStr();
        let mPres = 0, mAbs = 0, yPres = 0, yAbs = 0;

        for(let yM = 0; yM <= month; yM++) {
            let maxD = (yM === month) ? todayDate : new Date(year, yM + 1, 0).getDate();
            for(let d = 1; d <= maxD; d++) {
                let loopD = new Date(year, yM, d); let lStr = getSafeDateStr(loopD);
                let isP = window.appData.attendance[lStr] && window.appData.attendance[lStr].status === 'present';
                if(isP) yPres++; else if(loopD < now && lStr !== todayStr) yAbs++;
            }
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const loopD = new Date(year, month, day); const loopStr = getSafeDateStr(loopD); const isToday = loopStr === todayStr; const isPast = loopD < new Date(now.getFullYear(), now.getMonth(), todayDate);
            let attObj = window.appData.attendance[loopStr]; let isPresent = attObj && attObj.status === 'present';
            let statusClass = 'cal-future'; 
            
            if (isPresent) { statusClass = 'cal-present'; mPres++; } else if (isPast && !isToday) { statusClass = 'cal-absent'; mAbs++; }
            if (isToday) statusClass += ' cal-today'; 
            grid.innerHTML += `<div class="cal-day ${statusClass}">${day}</div>`;

            if (tbody && (isPresent || isPast)) { 
                let statusText = isPresent ? 'Present' : 'Absent'; let hrs = attObj && attObj.hours ? attObj.hours.toFixed(1) + ' hrs' : '-';
                tbody.innerHTML = `<tr><td>${loopStr}</td><td>${loopD.toLocaleDateString('en-US', {weekday:'short'})}</td><td class="att-${statusClass.split(' ')[0]}">${statusText}</td><td>${hrs}</td></tr>` + tbody.innerHTML; 
            }
        }
        const setTxt = (id, val) => { const el = document.getElementById(id); if(el) el.innerText = val; };
        setTxt('monthPresent', mPres); setTxt('monthAbsent', mAbs); setTxt('yearPresent', yPres); setTxt('yearAbsent', yAbs);
    } catch(e) { console.error("Calendar Error:", e); }
}

// --- SMART VAULT (FIXED: SHOWS ALL FOLDERS EVEN WITHOUT PARENT ID) ---
let currentFolderParent = null; 
function renderVaultFolders(parentId = null) {
    try {
        currentFolderParent = parentId; const grid = document.getElementById('vaultFolders'); if(!grid) return; grid.innerHTML = ''; const bread = document.getElementById('vaultBreadcrumb');
        if(parentId) { bread.style.display = 'block'; let f = window.appData.vaultFolders.find(x => x.id === parentId); bread.innerHTML = `<i class="ph-bold ph-arrow-left"></i> Back (Current: ${escapeHTML(f ? f.name : '')})`; } else { bread.style.display = 'none'; }
        
        // DEEP FOLDER RECOVERY: If parentId is null (at the main page), fetch any folder that doesn't have a parentId or parentId is explicitly null.
        const folders = (window.appData.vaultFolders || []).filter(f => {
            if (!parentId) return !f.parentId; 
            return f.parentId === parentId; 
        });

        folders.forEach(f => { grid.innerHTML += `<div class="folder-card"><div style="cursor:pointer;" onclick="renderVaultFolders(${f.id})"><i class="ph-fill ph-folder" style="font-size:3rem; color:var(--neon-blue);"></i> <h4 style="margin-top:10px;">${escapeHTML(f.name)}</h4></div><div class="folder-actions"><button class="btn-secondary" style="padding:2px 6px;" onclick="renameFolder(${f.id})">✏️</button><button class="btn-danger" style="padding:2px 6px;" onclick="deleteFolder(${f.id})">🗑️</button></div><div style="margin-top:10px;"><button class="btn-primary" style="font-size:0.7rem; padding:4px 8px;" onclick='openFolderModal(${f.id}, ${safeJSString(f.name)})'>View Notes/Files</button></div></div>`; });
    } catch(e){}
}
window.createNewFolder = async function() { try{ let name = await window.kkDialogPrompt("Enter Folder Name:"); if(name) { window.appData.vaultFolders.push({id: Date.now(), name, parentId: currentFolderParent}); saveDataLocally(); renderVaultFolders(currentFolderParent); showToast("Folder Created!"); } } catch(e){} };
window.renameFolder = async function(id) { try{ let folder = window.appData.vaultFolders.find(f => f.id === id); if(!folder) return; let newName = await window.kkDialogPrompt("Rename folder:", folder.name); if(newName) { folder.name = newName; saveDataLocally(); renderVaultFolders(currentFolderParent); const h=document.getElementById("currentFolderName"); if(h && currentOpenFolderId===id) h.innerText=newName; } } catch(e){} }

let currentOpenFolderId = null;
window.openFolderModal = function(id, name) { try{ currentOpenFolderId = id; document.getElementById('currentFolderName').innerText = name; renderNotesGrid(); document.getElementById('folderModal').classList.add('show'); } catch(e){} };
window.createSubFolder = async function() { try{ let name = await window.kkDialogPrompt("Enter Sub-Folder Name:"); if(name) { window.appData.vaultFolders.push({id: Date.now(), name, parentId: currentOpenFolderId}); saveDataLocally(); showToast("Sub-folder Created!"); closeModal('folderModal'); renderVaultFolders(currentOpenFolderId); } } catch(e){} }

window.togglePinNote = function(id) {
    try { let note = window.appData.vaultNotes.find(n => n.id === id); if(note) { note.pinned = !note.pinned; saveDataLocally(); renderNotesGrid(); renderDashboardStickyNotes(); } } catch(e){}
};

function renderNotesGrid() {
    try {
        const grid = document.getElementById('notesGrid'); grid.innerHTML = ''; 
        grid.style.display = 'grid'; grid.style.gridTemplateColumns = 'repeat(4, 1fr)'; grid.style.gap = '15px'; grid.style.alignItems = 'start';
        
        let notes = (window.appData.vaultNotes || []).filter(n => n.folderId === currentOpenFolderId);
        notes.sort((a, b) => { if (a.pinned === b.pinned) return b.id - a.id; return a.pinned ? -1 : 1; });

        if(notes.length === 0) grid.innerHTML = `<p style="color:var(--text-muted); grid-column: 1 / -1;">No notes/files here yet.</p>`;
        
        const stickyColors = ['#fef08a', '#bbf7d0', '#bae6fd', '#fbcfe8']; 

        notes.forEach((n, idx) => { 
            let color = stickyColors[idx % stickyColors.length];
            let pinIcon = n.pinned ? 'ph-fill ph-push-pin' : 'ph ph-push-pin';
            let pinStyle = n.pinned ? 'color: #ea580c;' : 'color: rgba(0,0,0,0.5);';

            let contentHtml = '';
            if(n.type === 'text') {
                contentHtml = `<div style="flex:1; margin:8px 0; font-size: 0.85rem; line-height: 1.4; font-weight:600; white-space: pre-wrap; word-wrap: break-word; color:#222; overflow-y:auto;">${escapeHTML(n.content)}</div>`;
            } else {
                let fileCount = Array.isArray(n.content) ? n.content.length : 1;
                contentHtml = `<div style="flex:1; margin:8px 0; text-align:center; color:#222;"><i class="ph-duotone ph-image" style="font-size:2.5rem; opacity:0.8;"></i><p style="font-size:0.8rem; margin-top:5px; font-weight:bold;">${fileCount} File(s)</p><button style="margin-top:10px; width:100%; font-size:0.8rem; padding:6px; border-radius:6px; background:rgba(0,0,0,0.8); color:#fff; border:none; cursor:pointer;" onclick="previewFile('${n.id}')">View Preview</button></div>`;
            }

            grid.innerHTML += `
            <div class="hover-lift" style="background: ${color}; border-radius: 2px 15px 15px 15px; padding: 12px; position:relative; box-shadow: 2px 4px 10px rgba(0,0,0,0.3); min-height: 160px; max-height: 220px; display:flex; flex-direction:column;">
                <div style="position:absolute; top:-5px; left:50%; transform:translateX(-50%); width:30px; height:12px; background:rgba(255,255,255,0.7); box-shadow: 0 1px 2px rgba(0,0,0,0.1);"></div>
                <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid rgba(0,0,0,0.1); padding-bottom:5px; margin-bottom:5px; margin-top:5px;">
                    <b style="color:#444; font-size:0.75rem; cursor:pointer;" onclick="editNoteDate(${n.id})" title="Edit Date">${n.date}</b>
                    <i class="${pinIcon}" style="font-size:1.1rem; cursor:pointer; ${pinStyle}" onclick="togglePinNote(${n.id})" title="Pin/Unpin Note"></i>
                </div>
                ${contentHtml}
                <div style="display:flex; justify-content:space-between; margin-top:auto; border-top:1px solid rgba(0,0,0,0.1); padding-top:6px;">
                    ${n.type === 'text' ? `<button onclick="editNoteContent(${n.id})" style="background:transparent; border:none; font-size:0.75rem; font-weight:800; cursor:pointer; color:#111;">Edit</button>` : '<div></div>'}
                    <button onclick="deleteNote(${n.id})" style="background:transparent; border:none; font-size:0.75rem; font-weight:800; cursor:pointer; color:#dc2626;">Delete</button>
                </div>
            </div>`; 
        });
    } catch(e){}
}

window.addNoteToFolder = async function() { try{ let content = await window.kkDialogPrompt("Type your note here:"); if(content) { window.appData.vaultNotes.push({ id: Date.now(), folderId: currentOpenFolderId, type: 'text', content, date: getSafeDateStr(), pinned: false }); saveDataLocally(); renderNotesGrid(); } } catch(e){} };
window.editNoteContent = async function(id) { try{ let note = window.appData.vaultNotes.find(n => n.id === id); if(note) { let newContent = await window.kkDialogPrompt("Edit note:", note.content); if(newContent) { note.content = newContent; saveDataLocally(); renderNotesGrid(); renderDashboardStickyNotes(); } } } catch(e){} };
window.editNoteDate = async function(id) { try{ let note = window.appData.vaultNotes.find(n => n.id === id); if(note) { let newDate = await window.kkDialogPrompt("Edit Date (YYYY-MM-DD):", note.date); if(newDate) { note.date = newDate; saveDataLocally(); renderNotesGrid(); renderDashboardStickyNotes(); } } } catch(e){} };


let currentPreviewFiles = []; let currentPreviewIndex = 0;

window.renderCurrentPreview = function() {
    let container = document.getElementById('previewContainer'); let controls = document.getElementById('previewControls'); let counter = document.getElementById('previewCounter');
    if(currentPreviewFiles.length > 1) { controls.style.display = 'flex'; if(counter) counter.innerText = `(${currentPreviewIndex + 1} / ${currentPreviewFiles.length})`; } else { controls.style.display = 'none'; if(counter) counter.innerText = ''; }
    let fileObj = currentPreviewFiles[currentPreviewIndex];
    if(fileObj.type && fileObj.type.includes("pdf")) { container.innerHTML = `<iframe src="${fileObj.data}" width="100%" height="100%" style="border:none; border-radius:10px;"></iframe>`; } 
    else { container.innerHTML = `<img src="${fileObj.data}" style="max-width:100%; max-height:100%; object-fit:contain; border-radius:10px;">`; }
};
window.prevPreviewFile = function() { if(currentPreviewIndex > 0) { currentPreviewIndex--; window.renderCurrentPreview(); } };
window.nextPreviewFile = function() { if(currentPreviewIndex < currentPreviewFiles.length - 1) { currentPreviewIndex++; window.renderCurrentPreview(); } };
window.toggleSections = function() { try{ renderMockSubjectsVisibility(); } catch(e){} };

window.renderMockSubjectsVisibility = function() {
    try {
        const exam = document.getElementById('mockExamType').value; const pattern = EXAM_PATTERNS[exam] || EXAM_PATTERNS["SBI PO"]; const isSec = currentMockType === 'sectional'; const secSub = document.getElementById('secSubject').value;
        const engCard = document.getElementById('card-english'); const quaCard = document.getElementById('card-quant'); const reaCard = document.getElementById('card-reasoning');
        engCard.style.display = (!isSec || secSub === 'english') && pattern.hasEng ? 'flex' : 'none'; quaCard.style.display = (!isSec || secSub === 'quant') ? 'flex' : 'none'; reaCard.style.display = (!isSec || secSub === 'reasoning') ? 'flex' : 'none';
        if(pattern.hasEng) document.getElementById('engMax').innerText = pattern.eng; document.getElementById('quaName').innerText = pattern.quaName; document.getElementById('quaMax').innerText = pattern.qua; document.getElementById('reaMax').innerText = pattern.rea;
        if(isSec) { if(secSub === 'english' && pattern.hasEng) document.getElementById('grandMax').innerText = pattern.eng; if(secSub === 'quant') document.getElementById('grandMax').innerText = pattern.qua; if(secSub === 'reasoning') document.getElementById('grandMax').innerText = pattern.rea; } else { document.getElementById('grandMax').innerText = pattern.max; }
        calculateLive(); window.updateMockInputLimits?.();
    } catch(e){}
};
window.updateMockUI = function() { try{ renderMockSubjectsVisibility(); } catch(e){} };

window.calculateLive = function() {
    try {
        const exam = document.getElementById('mockExamType').value; const pattern = EXAM_PATTERNS[exam] || EXAM_PATTERNS["SBI PO"];
        const getSubData = (rId, wId) => { let r = parseFloat(document.getElementById(rId).value) || 0; let w = parseFloat(document.getElementById(wId).value) || 0; if(r < 0) r = 0; if(w < 0) w = 0; let att = r + w; let net = r - (w * 0.25); let acc = att > 0 ? (r / att) * 100 : 0; return {r, w, att, net, acc}; };
        let e = pattern.hasEng && document.getElementById('card-english').style.display !== 'none' ? getSubData('engR', 'engW') : {r:0, w:0, att:0, net:0, acc:0};
        let q = document.getElementById('card-quant').style.display !== 'none' ? getSubData('quaR', 'quaW') : {r:0, w:0, att:0, net:0, acc:0};
        let r = document.getElementById('card-reasoning').style.display !== 'none' ? getSubData('reaR', 'reaW') : {r:0, w:0, att:0, net:0, acc:0};
        const setTxt = (id, val) => { const el = document.getElementById(id); if(el) el.innerText = val; };
        if(pattern.hasEng) { setTxt('engAtt', e.att); setTxt('engAcc', e.acc.toFixed(1) + '%'); setTxt('engMarks', e.net.toFixed(2)); } setTxt('quaAtt', q.att); setTxt('quaAcc', q.acc.toFixed(1) + '%'); setTxt('quaMarks', q.net.toFixed(2)); setTxt('reaAtt', r.att); setTxt('reaAcc', r.acc.toFixed(1) + '%'); setTxt('reaMarks', r.net.toFixed(2));
        let tAtt = e.att + q.att + r.att; let tR = e.r + q.r + r.r; let tMarks = e.net + q.net + r.net; let tAcc = tAtt > 0 ? ((tR/tAtt)*100).toFixed(1) : 0; 
        setTxt('totAtt', tAtt); setTxt('totAcc', tAcc + '%'); setTxt('totMarks', tMarks.toFixed(2));
    } catch(e){}
};


window.editMock = function(id) {
    try {
        const mock = window.appData.mocks.find(m => m.id === id); if (!mock) return;
        document.getElementById('editingMockId').value = mock.id; document.getElementById('mockDate').value = mock.date; document.getElementById('mockExamType').value = mock.examType; document.getElementById('mockPlatform').value = mock.platform; document.getElementById('mockPercentile').value = mock.percentile; document.getElementById('mockTarget').value = mock.target; document.getElementById('engR').value = mock.eR; document.getElementById('engW').value = mock.eW; document.getElementById('quaR').value = mock.qR; document.getElementById('quaW').value = mock.qW; document.getElementById('reaR').value = mock.rR; document.getElementById('reaW').value = mock.rW;
        setMockType(mock.type); renderMockSubjectsVisibility(); document.getElementById('mockFormTitle').innerText = '✏️ Edit Mock Test Performance'; document.querySelectorAll('.nav-links li').forEach(l => l.classList.remove('active')); const link = document.querySelector('[data-tab="view-add-data"]'); if(link) link.classList.add('active'); document.querySelectorAll('.view-section').forEach(sec => sec.classList.remove('active')); document.getElementById('view-add-data').classList.add('active');
    } catch(e){}
};

// --- TRACKER & CHARTS ---
window.updateTracker = function() { renderTracker(); };
window.renderTracker = function() {
    try {
        const fEl = document.getElementById('trackerFilter'); const filter = fEl ? fEl.value : 'All'; const tbody = document.getElementById('trackerBody'); if (!tbody) return; tbody.innerHTML = ''; let count = 1;
        (window.appData.mocks || []).forEach(m => {
            if (filter === 'All' || m.examType === filter) {
                let safelyTotalMarks = parseFloat(m.totalMarks || 0).toFixed(2); let hasE = !(m.examType.includes("RRB"));
                tbody.innerHTML += `<tr><td>${count++}</td><td>${m.type==='full'?'Full':'Sectional ('+m.sub+')'}</td><td>${m.date || '-'}</td><td>${m.examType || '-'}</td><td>${m.target !== undefined && m.target !== null && m.target !== '' ? m.target : '-'}</td><td>${m.platform || '-'}</td><td>${hasE ? m.eAtt : '-'}</td><td class="text-emerald">${hasE ? m.eR : '-'}</td><td class="text-danger">${hasE ? m.eW : '-'}</td><td class="font-bold">${hasE ? m.eMarks : '-'}</td><td>${m.qAtt}</td><td class="text-emerald">${m.qR}</td><td class="text-danger">${m.qW}</td><td class="font-bold">${m.qMarks}</td><td>${m.rAtt}</td><td class="text-emerald">${m.rR}</td><td class="text-danger">${m.rW}</td><td class="font-bold">${m.rMarks}</td><td style="background:rgba(255,255,255,0.05);">${m.totalAtt}</td><td class="text-emerald" style="background:rgba(255,255,255,0.05);">${(parseFloat(m.eR||0)+parseFloat(m.qR||0)+parseFloat(m.rR||0))}</td><td class="text-danger" style="background:rgba(255,255,255,0.05);">${(parseFloat(m.eW||0)+parseFloat(m.qW||0)+parseFloat(m.rW||0))}</td><td class="${parseFloat(m.totalAcc) > 85 ? 'acc-high' : 'acc-low'}">${m.totalAcc}%</td><td class="text-purple">${m.percentile}</td><td class="font-bold" style="font-size:1.1rem; background:rgba(253, 224, 71, 0.15); color: #fde047;">${safelyTotalMarks}/${m.maxScore||100}</td><td><button class="btn-secondary" style="padding: 4px 8px; margin-right:4px;" onclick="editMock(${m.id})">Edit</button><button class="btn-danger" style="padding: 4px 8px;" onclick="window.deleteMock(${m.id})">Del</button></td></tr>`;
            }
        });
        renderDailySummaryTable(); renderQuizHistoryTable();
    } catch(e){}
};
function renderDailySummaryTable() {
    try {
        const tbody = document.getElementById('dailySummaryBody'); if (!tbody) return; tbody.innerHTML = ''; const datesMap = {};
        (window.appData.studyLogs || []).forEach(log => { if (!datesMap[log.date]) datesMap[log.date] = { focusSecs: 0, wasteSecs: 0, subjects: {}, wasteReasons: [] }; if (log.type === 'Focus') { datesMap[log.date].focusSecs += log.duration; datesMap[log.date].subjects[log.subject] = (datesMap[log.date].subjects[log.subject] || 0) + log.duration; } else { datesMap[log.date].wasteSecs += log.duration; datesMap[log.date].wasteReasons.push(log.subject); } });
        Object.keys(window.appData.dailySessions || {}).forEach(d => { if (!datesMap[d]) datesMap[d] = { focusSecs: 0, wasteSecs: 0, subjects: {}, wasteReasons: [] }; });
        const sortedDates = Object.keys(datesMap).sort((a,b) => new Date(b) - new Date(a));
        sortedDates.forEach(date => { const item = datesMap[date]; const subStr = Object.keys(item.subjects).map(s => `${s}: ${formatHMS(item.subjects[s])}`).join(', ') || 'N/A'; const wasteStr = item.wasteReasons.join('; ') || 'None'; const sessSecs = window.appData.dailySessions[date] || 0; tbody.innerHTML += `<tr><td class="font-bold">${date}</td><td class="text-emerald font-bold">${formatHMS(item.focusSecs)}</td><td>${subStr}</td><td class="text-danger font-bold">${formatHMS(item.wasteSecs)}</td><td><div class="waste-reason-cell">${wasteStr}</div></td><td class="text-blue font-bold">${formatHMS(sessSecs)}</td></tr>`; });
    } catch(e){}
}
function renderQuizHistoryTable() {
    try {
        const tbody = document.getElementById('quizLogBody'); if (!tbody) return; tbody.innerHTML = ''; const sorted = [...(window.appData.quizHistory || [])].sort((a,b) => b.timestamp - a.timestamp);
        sorted.forEach(q => { let m = Math.floor(q.timeTakenMs / 60000); let s = Math.floor((q.timeTakenMs % 60000) / 1000); tbody.innerHTML += `<tr><td>${q.date}</td><td>${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}</td><td class="text-emerald">${q.correct}</td><td class="text-danger">${q.wrong}</td><td class="font-bold text-blue">${q.score}</td></tr>`; });
    } catch(e){}
}
window.deleteMock = async function(id) {
    try {
        if (!(await window.kkDialogConfirm("Delete this mock data?", "Delete", true))) return;
        const targetId = String(id);
        const before = window.appData.mocks.length;
        window.appData.mocks = window.appData.mocks.filter(m => String(m.id) !== targetId);
        if (window.appData.mocks.length === before) return;
        // Tell the single cloud-sync owner which destructive record change happened.
        window.dispatchEvent(new CustomEvent('kk:mock-deleted', { detail: { id: targetId } }));
        saveDataLocally('delete');
        renderTracker();
        updateDashboardKPIs();
        window.renderCharts?.();
    } catch(e) { console.warn('Delete mock failed:', e); }
};
window.exportCSV = function() { try{ let csv = "Date,Exam,Type,Att,Marks,Accuracy\n"; (window.appData.mocks || []).forEach(m => { csv += `${m.date},${m.examType},${m.type},${m.totalAtt},${m.totalMarks},${m.totalAcc}\n`; }); window.kkDownloadFile('KK_Monitoring_Data.csv', csv, 'text/csv'); }catch(e){} };

let charts = {};
function renderBaseCharts() {
    try {
        if (typeof Chart === 'undefined') { if (window.__kkEnsureChart) window.__kkEnsureChart().then(ok => { if (ok) window.renderCharts?.(); }); return; }
        const filter = document.getElementById('analyticsFilter').value; const typeFilter = document.getElementById('analyticsTypeFilter').value;
        let data = window.appData.mocks || []; if (filter !== 'All') data = data.filter(m => m.examType === filter); if (typeFilter !== 'All') data = data.filter(m => m.type === typeFilter); 
        data = data.slice(0, 20).reverse(); let labels = data.map(m => m.date ? m.date.substring(5) : ''); if(labels.length === 0) labels = ['No Data'];
        const safeMap = (arr, mapper) => arr.length ? arr.map(mapper) : [0];

        Object.keys(charts).forEach(k => { if (charts[k]) charts[k].destroy(); });

        try {
            const c1 = document.getElementById('chartTargetActual');
            if (c1) { charts.target = new Chart(c1, { type: 'line', data: { labels: labels.length ? labels : ['No Data'], datasets: [ { label: 'Actual Score', data: safeMap(data, m => parseFloat(m.totalMarks)||0), borderColor: '#38bdf8', backgroundColor: 'rgba(56, 189, 248, 0.1)', fill: true, tension: 0.4 }, { label: 'Target', data: safeMap(data, m => parseFloat(m.target)||0), borderColor: '#fb923c', borderDash: [5, 5], tension: 0 } ] }, options: { responsive: true, maintainAspectRatio: false } }); }
        } catch(e){}
        try {
            const c2 = document.getElementById('chartRadarSubjects');
            if (c2) {
                let avgE=0, avgQ=0, avgR=0;
                if(data.length > 0) {
                    let noRrbData = data.filter(m => !m.examType.includes("RRB") && m.eMarks !== '-'); 
                    avgE = noRrbData.length > 0 ? (noRrbData.reduce((s, m) => s + parseFloat(m.eMarks||0), 0) / noRrbData.length) : 0; 
                    avgQ = data.reduce((s, m) => s + parseFloat(m.qMarks||0), 0) / data.length; avgR = data.reduce((s, m) => s + parseFloat(m.rMarks||0), 0) / data.length;
                }
                charts.radar = new Chart(c2, { type: 'radar', data: { labels: ['English (No RRB)', 'Quants', 'Reasoning'], datasets: [{ label: 'Avg Score', data: [avgE.toFixed(1), avgQ.toFixed(1), avgR.toFixed(1)], backgroundColor: 'rgba(167, 139, 250, 0.2)', borderColor: '#a78bfa', pointBackgroundColor: '#38bdf8' }] }, options: { responsive: true, maintainAspectRatio: false, scales: { r: { beginAtZero: true } } } });
            }
        } catch(e){}
        try {
            const c3 = document.getElementById('chartQuizProgress');
            if(c3) {
                let qHist = window.appData.quizHistory || []; let qLabels = ['No Data'], qScores = [0], qTimes = [0];
                if(qHist.length > 0) {
                    let qData = qHist.slice(-20); qLabels = qData.map(q => q.date ? q.date.substring(5) : ''); qScores = qData.map(q => q.score || 0); qTimes = qData.map(q => (q.timeTakenMs||0)/1000);
                    document.getElementById('kpiQuizTotal').innerText = qHist.length; let avgS = qHist.reduce((s, q) => s + (q.score||0), 0) / qHist.length; document.getElementById('kpiQuizAvgScore').innerText = avgS.toFixed(1);
                    let avgT = qHist.reduce((s, q) => s + (q.timeTakenMs||0), 0) / qHist.length; document.getElementById('kpiQuizAvgTime').innerText = `${Math.floor(avgT/60000)}m ${Math.floor((avgT%60000)/1000)}s`; document.getElementById('kpiQuizTotalWrong').innerText = qHist.reduce((s, q) => s + (q.wrong||0), 0);
                }
                charts.quiz = new Chart(c3, { type: 'line', data: { labels: qLabels, datasets: [{ label: 'Score (/20)', yAxisID: 'y', data: qScores, borderColor: '#34d399', backgroundColor: 'rgba(52, 211, 153, 0.2)', fill: true, tension:0.3 }, { label: 'Time (Sec)', yAxisID: 'y1', data: qTimes, borderColor: '#fb923c', borderDash: [5,5], tension:0.3 }] }, options: { responsive:true, maintainAspectRatio:false, scales: { y: { type: 'linear', position: 'left', min: 0, max: 20 }, y1: { type: 'linear', position: 'right', min: 0 } } } });
            }
        } catch(e){}
        try {
            const c4 = document.getElementById('chartSessionDuration');
            if (c4) {
                let sessDates = Object.keys(window.appData.dailySessions||{}).sort((a,b)=> new Date(a)-new Date(b)).slice(-10);
                let sessLabels = sessDates.length ? sessDates.map(d => d.substring(5)) : ['No Data']; let sessHours = sessDates.length ? sessDates.map(d => (window.appData.dailySessions[d] / 3600).toFixed(2)) : [0];
                charts.session = new Chart(c4, { type: 'bar', data: { labels: sessLabels, datasets: [{ label: 'Sitting Duration (Hrs)', data: sessHours, backgroundColor: '#38bdf8', borderRadius: 8 }] }, options: { responsive: true, maintainAspectRatio: false } });
            }
        } catch(e){}
        try {
            const c5 = document.getElementById('chartPercentileTrend');
            if (c5) { charts.percentile = new Chart(c5, { type: 'line', data: { labels: labels.length ? labels : ['No Data'], datasets: [{ label: 'Percentile (%ile)', data: safeMap(data, m => parseFloat(m.percentile) || 0), borderColor: '#a78bfa', backgroundColor: 'rgba(167, 139, 250, 0.1)', fill: true, tension: 0.3 }] }, options: { responsive: true, maintainAspectRatio: false, scales: { y: { min: 0, max: 100 } } } }); }
        } catch(e){}
        try {
            const ca = document.getElementById('chartAccuracyTrend');
            if (ca) { charts.accuracy = new Chart(ca, { type: 'line', data: { labels: labels.length ? labels : ['No Data'], datasets: [{ label: 'Overall Accuracy %', data: safeMap(data, m => parseFloat(m.totalAcc) || 0), borderColor: '#f43f5e', backgroundColor: 'rgba(244, 63, 94, 0.1)', fill: true, tension: 0.3 }] }, options: { responsive: true, maintainAspectRatio: false, scales: { y: { min: 0, max: 100 } } } }); }
        } catch(e){}
        try {
            const c6 = document.getElementById('chartSubjectRightWrong');
            if (c6) {
                let eR=0, eW=0, qR=0, qW=0, rR=0, rW=0;
                if(data.length > 0) {
                    let noRrbData = data.filter(m => !m.examType.includes("RRB") && m.eMarks !== '-');
                    eR = noRrbData.reduce((s, m) => s + parseInt(m.eR||0), 0); eW = noRrbData.reduce((s, m) => s + parseInt(m.eW||0), 0); 
                    qR = data.reduce((s, m) => s + parseInt(m.qR||0), 0); qW = data.reduce((s, m) => s + parseInt(m.qW||0), 0); 
                    rR = data.reduce((s, m) => s + parseInt(m.rR||0), 0); rW = data.reduce((s, m) => s + parseInt(m.rW||0), 0);
                }
                charts.rightWrong = new Chart(c6, { type: 'bar', data: { labels: ['English (No RRB)', 'Quants', 'Reasoning'], datasets: [ { label: 'Right Answers', data: [eR, qR, rR], backgroundColor: '#34d399' }, { label: 'Wrong Answers', data: [eW, qW, rW], backgroundColor: '#f87171' } ] }, options: { responsive: true, maintainAspectRatio: false } });
            }
        } catch(e){}
    } catch(e) { console.error("Global Chart Error", e); }
};
// ============================================================
// V29.1 FUNCTIONALITY PATCH — MODALS, CHEAT SHEET & CALCULATORS
// ============================================================

window.closeModal = function(id) {
    try {
        const el = document.getElementById(id);
        if (!el) return;
        el.classList.remove('show');
        if (id === 'quizSummaryModal') {
            const list = document.getElementById('quizSummaryList');
            if (list) list.scrollTop = 0;
        }
        if (id === 'filePreviewModal') {
            try { (currentPreviewFiles || []).forEach(f => { if (f?.objectUrl) URL.revokeObjectURL(f.objectUrl); }); } catch (_) {}
            const c = document.getElementById('previewContainer');
            if (c) c.innerHTML = '';
            currentPreviewFiles = [];
        }
    } catch (e) { console.error('closeModal error', e); }
};

// Allow clicking the dark backdrop to close a modal, but not the modal card itself.
document.addEventListener('click', function(e) {
    try {
        if (e.target && e.target.classList && e.target.classList.contains('modal-overlay')) {
            if (e.target.id !== 'authOverlay') window.closeModal(e.target.id);
        }
    } catch (_) {}
});

// ---------- Cheat Sheet ----------
const CHEAT_SHEET = {
    quant: {
        'Percentage': [
            ['Percentage', 'Percentage = (Part / Whole) × 100', 'Used for marks, population, expenditure and comparison.'],
            ['Percentage Change', 'Change% = (Change / Original) × 100', 'For increase/decrease questions.'],
            ['Successive Change', 'Net % = a + b + (ab/100)', 'Use signs: increase positive, decrease negative.']
        ],
        'Profit, Loss & Discount': [
            ['Profit', 'Profit = SP − CP', 'Profit% = Profit/CP × 100.'],
            ['Loss', 'Loss = CP − SP', 'Loss% = Loss/CP × 100.'],
            ['Discount', 'Discount = MP − SP', 'Discount% = Discount/MP × 100.'],
            ['Selling Price', 'SP = CP × (100 + Profit%)/100', 'For profit. For loss use 100 − Loss%.']
        ],
        'Ratio & Proportion': [
            ['Ratio', 'a:b = a/b', 'Multiply/divide both terms by the same non-zero number.'],
            ['Proportion', 'a:b = c:d  ⇒  ad = bc', 'Cross multiplication.'],
            ['Divide a Total', 'A share = Total × a/(a+b)', 'For a:b division.']
        ],
        'Simple & Compound Interest': [
            ['Simple Interest', 'SI = PRT/100', 'P = principal, R = annual rate, T = years.'],
            ['Amount (SI)', 'A = P + SI', 'Amount after simple interest.'],
            ['Compound Amount', 'A = P(1 + R/100)^T', 'For annual compounding.'],
            ['Compound Interest', 'CI = A − P', 'For annual compounding.'],
            ['2-Year Difference', 'CI − SI = P(R/100)^2', 'Useful shortcut for 2 years, annual compounding.']
        ],
        'Average': [
            ['Average', 'Average = Sum / Number of items', 'Basic average formula.'],
            ['Combined Average', 'Avg = (n₁a₁ + n₂a₂)/(n₁+n₂)', 'For two groups.'],
            ['New Average', 'New sum = old sum ± change', 'Useful when one value is replaced.']
        ],
        'Time, Speed & Distance': [
            ['Speed', 'Speed = Distance / Time', 'Keep units consistent.'],
            ['Distance', 'Distance = Speed × Time', 'Convert hours/minutes when required.'],
            ['Time', 'Time = Distance / Speed', 'Basic relation.'],
            ['km/h to m/s', '× 5/18', 'Multiply km/h by 5/18.'],
            ['m/s to km/h', '× 18/5', 'Multiply m/s by 18/5.'],
            ['Relative Speed', 'Same direction: |u−v|; Opposite: u+v', 'Used in trains and races.']
        ],
        'Boats & Streams': [
            ['Downstream', 'D = B + S', 'B = boat speed in still water, S = stream speed.'],
            ['Upstream', 'U = B − S', 'Speed against stream.'],
            ['Boat Speed', 'B = (D + U)/2', 'Average of downstream and upstream speeds.'],
            ['Stream Speed', 'S = (D − U)/2', 'Half the difference.']
        ],
        'Time & Work / Pipes': [
            ['One-Day Work', 'If A finishes in x days, rate = 1/x', 'Add work rates for people working together.'],
            ['Together', '1/T = 1/A + 1/B', 'For two people/pipes working together.'],
            ['Efficiency', 'Efficiency ∝ 1/Time', 'Higher efficiency means less time.'],
            ['Work', 'Work = Efficiency × Time', 'Keep efficiency units consistent.']
        ],
        'Mixture & Alligation': [
            ['Weighted Average', 'Average = Total value / Total quantity', 'For mixtures of different prices/values.'],
            ['Alligation', 'Cheaper : Dearer = (Dearer−Mean):(Mean−Cheaper)', 'Classic mixture shortcut.']
        ],
        'Ages': [
            ['Age after n years', 'Present age + n', 'For future age.'],
            ['Age n years ago', 'Present age − n', 'For past age.'],
            ['Age Ratio', 'a:b remains based on actual ages', 'Difference in ages stays constant.']
        ],
        'Trains': [
            ['Train crossing pole', 'Time = Train length / Speed', 'Use metres and m/s.'],
            ['Two trains opposite', 'Relative speed = u + v', 'Time = total lengths / relative speed.'],
            ['Two trains same direction', 'Relative speed = |u−v|', 'Time = total lengths / relative speed.']
        ],
        'Number System / HCF / LCM': [
            ['Two Numbers', 'HCF × LCM = Product of the two numbers', 'Valid for two positive integers.'],
            ['Divisibility by 3', 'Digit sum divisible by 3', 'Same for 9 with digit sum divisible by 9.'],
            ['Divisibility by 11', 'Difference of alternating digit sums is 0 or multiple of 11', 'Useful shortcut.']
        ],
        'Mensuration': [
            ['Rectangle', 'Area = l×b; Perimeter = 2(l+b)', 'Basic 2D formula.'],
            ['Square', 'Area = a²; Perimeter = 4a', 'Diagonal = a√2.'],
            ['Circle', 'Area = πr²; Circumference = 2πr', 'Use π = 22/7 or 3.14 as required.'],
            ['Cylinder', 'Volume = πr²h', 'Curved surface area = 2πrh.']
        ]
    },
    reasoning: {
        'Syllogism': [
            ['Some A are B', 'A ∩ B exists', 'Do not assume all A are B.'],
            ['No A is B', 'A ∩ B = ∅', 'A and B are mutually exclusive.'],
            ['Some A are not B', 'At least one A lies outside B', 'It does not mean no A is B.']
        ],
        'Inequality': [
            ['Transitivity', 'A > B and B > C ⇒ A > C', 'Same-direction signs can be chained.'],
            ['Opposite signs', 'A > B and C < B', 'A and C cannot be directly compared.']
        ],
        'Direction Sense': [
            ['Cardinal directions', 'North ↑, South ↓, East →, West ←', 'Draw a small coordinate sketch.'],
            ['Right turn', 'N→E→S→W', 'Each right turn rotates 90°.'],
            ['Left turn', 'N→W→S→E', 'Each left turn rotates 90°.']
        ],
        'Coding-Decoding': [
            ['Alphabet positions', 'A=1, B=2, … Z=26', 'Memorize common positions.'],
            ['Opposite positions', 'A↔Z, B↔Y, …', 'Position pair sums to 27.']
        ],
        'Blood Relations': [
            ['Generation method', 'Draw a family tree', 'Do not solve long chains mentally.'],
            ['Maternal/Paternal', 'Mother side = maternal; father side = paternal', 'Use a simple tree.']
        ],
        'Seating Arrangement': [
            ['Linear', 'Fix a reference person/seat first', 'Track left/right carefully.'],
            ['Circular', 'Facing centre: left = clockwise; right = anticlockwise', 'Reverse when facing outside.']
        ],
        'Ranking & Order': [
            ['Total persons', 'Total = rank from top + rank from bottom − 1', 'Standard ranking formula.']
        ],
        'Calendar & Clock': [
            ['Leap year', 'Divisible by 4; century years must be divisible by 400', 'Example: 2000 leap, 1900 not.'],
            ['Clock angle', 'Angle = |30H − 5.5M|', 'H = hour, M = minutes.']
        ]
    },
    english: {
        'Subject-Verb Agreement': [
            ['Either / Neither', 'Usually takes a singular verb when used alone.', 'Either of the answers is correct.'],
            ['As well as', 'Verb agrees with the main subject before it.', 'The manager, as well as his staff, is present.'],
            ['Each / Every', 'Takes a singular verb.', 'Each student is ready.']
        ],
        'Articles': [
            ['A / An', 'Use a before consonant sound, an before vowel sound.', 'an hour, a university.'],
            ['The', 'Used for a specific/known noun and unique references.', 'the sun, the book on the table.']
        ],
        'Prepositions': [
            ['Senior / Junior', 'Use “to”, not “than”.', 'senior to me.'],
            ['Good at', 'Use “at” for ability/performance.', 'good at English.'],
            ['Different from', '“Different from” is the standard exam-safe form.', 'different from the original.']
        ],
        'Conjunctions & Pairs': [
            ['No sooner', 'No sooner … than …', 'No sooner did he arrive than it rained.'],
            ['Scarcely / Hardly', 'Scarcely/Hardly … when …', 'Hardly had I reached when it started.'],
            ['Lest', 'Often followed by should; avoid “not” after should.', 'Work hard lest you should fail.']
        ],
        'Tenses': [
            ['Since / For', 'Since = starting point; for = duration.', 'since Monday; for two days.'],
            ['Past Perfect', 'Earlier of two past actions takes had + V3.', 'He had left before I arrived.']
        ],
        'Pronouns': [
            ['Between you and me', 'After a preposition, use objective case.', 'between you and me.'],
            ['One', 'Maintain one/one’s consistently in formal usage.', 'One should do one’s duty.']
        ],
        'Common Error Rules': [
            ['Discuss', 'Do not use “discuss about” in standard exam usage.', 'We discussed the issue.'],
            ['Return', 'Avoid “return back”.', 'He returned home.'],
            ['Comprise', 'Whole comprises parts; “is comprised of” is often avoided in strict grammar tests.', 'The team comprises five members.']
        ]
    },
    banking: {
        'Banking Basics': [
            ['CRR', 'Cash Reserve Ratio = cash reserve maintained with RBI as a % of NDTL', 'Higher CRR generally reduces lendable funds.'],
            ['SLR', 'Statutory Liquidity Ratio = prescribed liquid assets as a % of NDTL', 'Used as a liquidity requirement.'],
            ['Repo Rate', 'Rate at which RBI lends short-term funds to banks against eligible securities', 'Policy-rate concept for exams.'],
            ['Reverse Repo', 'Rate at which RBI absorbs liquidity from banks', 'Conceptual banking awareness.']
        ],
        'Banking Numericals': [
            ['Simple Interest', 'SI = PRT/100', 'Common in banking arithmetic.'],
            ['Compound Interest', 'A = P(1+R/100)^T; CI=A−P', 'For annual compounding unless specified otherwise.'],
            ['EMI concept', 'EMI depends on principal, rate and tenure', 'Use the exact formula only when a question requires it; bank exams often test approximation/concepts.']
        ],
        'Economy Terms': [
            ['Inflation', 'General rise in price level', 'Reduces purchasing power when incomes do not rise proportionately.'],
            ['GDP', 'Market value of final goods and services produced within an economy', 'Know nominal vs real GDP conceptually.'],
            ['Fiscal Deficit', 'Total expenditure − total receipts excluding borrowings', 'Common economy awareness term.']
        ]
    }
};

window.openCheatSheet = function() {
    try {
        document.getElementById('cheatSheetModal').classList.add('show');
        window.switchCheatTab('maths');
    } catch (e) { console.error('openCheatSheet error', e); }
};
window.switchCheatTab = function(tab) {
    try {
        const maths = document.getElementById('cheatMathsTab'), formulas = document.getElementById('cheatFormulasTab');
        const b1 = document.querySelector("#cheatSheetModal button[onclick=\"switchCheatTab('maths')\"]");
        const b2 = document.querySelector("#cheatSheetModal button[onclick=\"switchCheatTab('formulas')\"]");
        if (tab === 'formulas') {
            if (maths) maths.style.display='none'; if (formulas) formulas.style.display='block';
            if (b1) b1.className='btn-secondary'; if (b2) b2.className='btn-primary';
            window.renderCheatFormulas('quant');
        } else {
            if (maths) maths.style.display='block'; if (formulas) formulas.style.display='none';
            if (b1) b1.className='btn-primary'; if (b2) b2.className='btn-secondary';
            window.renderCheatMaths();
        }
    } catch (e) { console.error('switchCheatTab error', e); }
};
window.renderCheatMaths = function() {
    try {
        const t=document.getElementById('csTables'), s=document.getElementById('csSquares'), c=document.getElementById('csCubes');
        if(t){t.innerHTML=''; for(let n=12;n<=30;n++){let col='<div class="cheat-col"><b>'+n+' Table</b><br>'; for(let i=1;i<=10;i++) col+=`${n} × ${i} = ${n*i}<br>`; col+='</div>'; t.innerHTML+=col;}}
        if(s){s.innerHTML=''; for(let i=2;i<=50;i++) s.innerHTML+=`${i}² = ${i*i}<br>`;}
        if(c){c.innerHTML=''; for(let i=1;i<=30;i++) c.innerHTML+=`${i}³ = ${i*i*i}<br>`;}
    } catch(e){console.error(e);}
};
window.renderCheatFormulas = function(subject='quant', chapter) {
    try {
        const data=CHEAT_SHEET[subject]||CHEAT_SHEET.quant;
        const sel=document.getElementById('cheatChapterSelect'); const current=document.getElementById('cheatCurrentSubject'); const content=document.getElementById('cheatFormulaContent');
        if(current) current.value=subject;
        document.querySelectorAll('#cheatFormulasTab .cheat-filter-row button').forEach(b=>b.className='btn-secondary');
        const active=document.getElementById('cheatSub'+subject.charAt(0).toUpperCase()+subject.slice(1)); if(active) active.className='btn-primary';
        if(sel){ const keys=Object.keys(data); sel.innerHTML=keys.map(k=>`<option value="${k.replace(/"/g,'&quot;')}">${k}</option>`).join(''); const chosen=chapter&&data[chapter]?chapter:keys[0]; sel.value=chosen; chapter=chosen; }
        const items=data[chapter]||data[Object.keys(data)[0]]||[];
        if(content) content.innerHTML=items.map(x=>`<div class="cheat-formula-card"><h4>${x[0]}</h4><div class="formula">${x[1]}</div><p>${x[2]}</p></div>`).join('');
    } catch(e){console.error('renderCheatFormulas error',e);}
};

// ---------- Smart Calculator ----------
window.openCalculator = function(){
    try { document.getElementById('calculatorModal').classList.add('show'); window.switchCalcTool('basic'); } catch(e){console.error(e);}
};
window.switchCalc = function(type){ window.switchCalcTool(type==='quad'?'quadratic':type); };
window.switchCalcTool = function(tool){
    try{
        document.querySelectorAll('#calculatorModal .calc-panel').forEach(p=>p.classList.remove('active'));
        const panel=document.getElementById('calcTool'+tool.charAt(0).toUpperCase()+tool.slice(1)+'Panel'); if(panel) panel.classList.add('active');
        document.querySelectorAll('#calculatorModal .calc-tool-grid > button').forEach(b=>b.className='btn-secondary');
        const btn=document.getElementById('calcTool'+(tool==='quadratic'?'Quad':tool.charAt(0).toUpperCase()+tool.slice(1))); if(btn) btn.className='btn-primary';
    }catch(e){console.error(e);}
};
let calcExpression='';
window.calcPress=function(v){ try{ calcExpression+=String(v); const d=document.getElementById('calcDisplay'); if(d)d.value=calcExpression; }catch(e){} };
window.calcClear=function(){calcExpression='';const d=document.getElementById('calcDisplay');if(d)d.value='';};
window.calcEval=function(){
    try{ if(!calcExpression)return; if(!/^[0-9+\-*/().\s]+$/.test(calcExpression))throw new Error('Invalid expression'); const result=Function('"use strict"; return ('+calcExpression+')')(); if(!Number.isFinite(result))throw new Error('Invalid calculation'); calcExpression=String(Number(result.toFixed(10))); document.getElementById('calcDisplay').value=calcExpression; }
    catch(e){ document.getElementById('calcDisplay').value='Error'; calcExpression=''; }
};
const num=id=>parseFloat(document.getElementById(id)?.value);
const out=(id,html)=>{const e=document.getElementById(id);if(e)e.innerHTML=html;};
const fmt=n=>Number.isFinite(n)?Number(n.toFixed(6)).toString():'—';
window.solveQuadratic=function(){
    const a=num('quadA'),b=num('quadB'),c=num('quadC');
    if(!Number.isFinite(a)||!Number.isFinite(b)||!Number.isFinite(c)||a===0){out('quadResult','Enter valid coefficients with <b>a ≠ 0</b>.');return;}
    const d=b*b-4*a*c;
    if(d>0){const r1=(-b+Math.sqrt(d))/(2*a),r2=(-b-Math.sqrt(d))/(2*a);out('quadResult',`<b>Discriminant:</b> ${fmt(d)}<div class="root-card"><div class="root-value">x₁ = ${fmt(r1)}</div><div class="root-value">x₂ = ${fmt(r2)}</div></div>`);}
    else if(d===0){const r=-b/(2*a);out('quadResult',`<b>Equal real roots</b><div class="root-card"><div class="root-value">x₁ = ${fmt(r)}</div><div class="root-value">x₂ = ${fmt(r)}</div></div>`);}
    else {const real=-b/(2*a), imag=Math.sqrt(-d)/(2*a);out('quadResult',`<b>Complex roots</b><div class="root-card"><div class="root-value">x₁ = ${fmt(real)} + ${fmt(Math.abs(imag))}i</div><div class="root-value">x₂ = ${fmt(real)} − ${fmt(Math.abs(imag))}i</div></div>`);}
};
window.calcPercentage=function(){const a=num('pctPart'),b=num('pctTotal');out('pctResult',Number.isFinite(a)&&Number.isFinite(b)&&b!==0?`Percentage = <b>${fmt(a/b*100)}%</b>`:'Enter valid Part and Total.');};
window.calcProfitLoss=function(){const cp=num('plCP'),sp=num('plSP');if(!Number.isFinite(cp)||!Number.isFinite(sp)||cp<=0){out('plResult','Enter valid prices.');return;}const diff=sp-cp,p=Math.abs(diff)/cp*100;out('plResult',diff>=0?`Profit = <b>${fmt(diff)}</b><br>Profit% = <b>${fmt(p)}%</b>`:`Loss = <b>${fmt(-diff)}</b><br>Loss% = <b>${fmt(p)}%</b>`);};
window.calcSI=function(){const p=num('siP'),r=num('siR'),t=num('siT');const si=p*r*t/100;out('siResult',Number.isFinite(si)?`SI = <b>${fmt(si)}</b><br>Amount = <b>${fmt(p+si)}</b>`:'Enter valid values.');};
window.calcCI=function(){const p=num('ciP'),r=num('ciR'),t=num('ciT');if(!Number.isFinite(p)||!Number.isFinite(r)||!Number.isFinite(t)){out('ciResult','Enter valid values.');return;}const a=p*Math.pow(1+r/100,t);out('ciResult',`Amount = <b>${fmt(a)}</b><br>CI = <b>${fmt(a-p)}</b>`);};
window.calcDST=function(){const f=document.getElementById('dstFind').value,a=num('dstA'),b=num('dstB'),c=num('dstC');if(f==='distance'){out('dstResult',Number.isFinite(b)&&Number.isFinite(c)?`Distance = <b>${fmt(b*c)} km</b>`:'Enter speed and time.');}else if(f==='speed'){out('dstResult',Number.isFinite(a)&&Number.isFinite(c)&&c!==0?`Speed = <b>${fmt(a/c)} km/h</b>`:'Enter distance and time.');}else{out('dstResult',Number.isFinite(a)&&Number.isFinite(b)&&b!==0?`Time = <b>${fmt(a/b)} hours</b>`:'Enter distance and speed.');}};
window.calcBoat=function(){const d=num('boatDown'),u=num('boatUp');out('boatResult',Number.isFinite(d)&&Number.isFinite(u)&&d>=u?`Boat speed = <b>${fmt((d+u)/2)}</b><br>Stream speed = <b>${fmt((d-u)/2)}</b>`:'Enter valid speeds (downstream ≥ upstream).');};
window.calcAverage=function(){const arr=(document.getElementById('avgNums')?.value||'').split(',').map(Number).filter(Number.isFinite);out('avgResult',arr.length?`Sum = <b>${fmt(arr.reduce((a,b)=>a+b,0))}</b><br>Average = <b>${fmt(arr.reduce((a,b)=>a+b,0)/arr.length)}</b>`:'Enter comma-separated numbers.');};
window.calcRatio=function(){const a=num('ratioA'),b=num('ratioB'),t=num('ratioTotal');if(!Number.isFinite(a)||!Number.isFinite(b)||a<=0||b<=0){out('ratioResult','Enter positive ratio terms.');return;}const g=Math.abs(gcdInt(Math.round(a),Math.round(b)));let html=`Simplified Ratio = <b>${fmt(a/g)} : ${fmt(b/g)}</b>`;if(Number.isFinite(t))html+=`<br>A share = <b>${fmt(t*a/(a+b))}</b><br>B share = <b>${fmt(t*b/(a+b))}</b>`;out('ratioResult',html);};
function gcdInt(a,b){a=Math.abs(a);b=Math.abs(b);while(b){[a,b]=[b,a%b];}return a||1;}
window.calcTimeWork=function(){const a=num('twA'),b=num('twB');out('twResult',Number.isFinite(a)&&Number.isFinite(b)&&a>0&&b>0?`Together = <b>${fmt(1/(1/a+1/b))} days</b>`:'Enter valid days.');};
window.calcTrain=function(){const len=num('trLen'),speed=num('trSpeed'),time=num('trTime');if(Number.isFinite(len)&&Number.isFinite(speed)&&Number.isFinite(time)){const required=(len/(speed*5/18));out('trResult',`Time to cross a pole = <b>${fmt(required)} sec</b><br>Distance covered in given time = <b>${fmt(speed*5/18*time)} m</b>`);}else if(Number.isFinite(len)&&Number.isFinite(speed)){out('trResult',`Time to cross a pole = <b>${fmt(len/(speed*5/18))} sec</b>`);}else{out('trResult','Enter train length and speed.');}};
window.calcAge=function(){const a=num('ageNowA'),b=num('ageNowB'),y=num('ageYears');out('ageResult',Number.isFinite(a)&&Number.isFinite(b)&&Number.isFinite(y)?`A's age = <b>${fmt(a+y)}</b><br>B's age = <b>${fmt(b+y)}</b><br>Age difference = <b>${fmt(Math.abs(a-b))}</b>`:'Enter valid ages and years.');};
window.calcMixture=function(){const q1=num('mixQ1'),p1=num('mixP1'),q2=num('mixQ2'),p2=num('mixP2');out('mixResult',Number.isFinite(q1)&&Number.isFinite(p1)&&Number.isFinite(q2)&&Number.isFinite(p2)&&q1+q2>0?`Average price = <b>${fmt((q1*p1+q2*p2)/(q1+q2))}</b>`:'Enter valid quantities and prices.');};
window.calcPartnership=function(){const ca=num('partCA'),ma=num('partMA'),cb=num('partCB'),mb=num('partMB');if(![ca,ma,cb,mb].every(Number.isFinite)){out('partResult','Enter all values.');return;}const a=ca*ma,b=cb*mb;const g=gcdInt(Math.round(a),Math.round(b));out('partResult',`Profit ratio = <b>${fmt(a/g)} : ${fmt(b/g)}</b>`);};
window.calcHcfLcm=function(){const arr=(document.getElementById('hcfLcmNums')?.value||'').split(',').map(Number).filter(Number.isFinite).map(Math.abs);if(!arr.length){out('hcfLcmResult','Enter comma-separated positive integers.');return;}const h=arr.reduce((x,y)=>gcdInt(x,y));const l=arr.reduce((x,y)=>Math.abs(x/gcdInt(x,y)*y));out('hcfLcmResult',`HCF = <b>${h}</b><br>LCM = <b>${l}</b>`);};
window.calcWorkPipes=function(){
  const a=num('wpA'),b=num('wpB'),c=num('wpC');
  if(!Number.isFinite(a)||!Number.isFinite(b)||a===0||b===0){out('wpResult','Enter valid days/hours for A and B (use negative for emptying pipe).');return;}
  const rate=(1/a)+(1/b)+(Number.isFinite(c)&&c!==0?(1/c):0);
  if(rate<=0){out('wpResult','Net rate is ≤ 0 (tank will not fill).');return;}
  out('wpResult',`Combined time = <b>${fmt(1/rate)} days/hrs</b>`);
};
window.calcProbability=function(){
  const fav=num('probFavour'),tot=num('probTotal');
  if(!Number.isFinite(fav)||!Number.isFinite(tot)||tot<=0||fav<0||fav>tot){out('probResult','Enter valid favourable (0 ≤ fav ≤ total) and total outcomes.');return;}
  const g=gcdInt(Math.round(fav),Math.round(tot));
  out('probResult',`Probability = <b>${Math.round(fav/g)}/${Math.round(tot/g)}</b> (${fmt(fav/tot*100)}%)`);
};
function fact(n){n=Math.round(n);if(n<0||n>170)return NaN;let r=1;for(let i=2;i<=n;i++)r*=i;return r;}
window.calcPC=function(mode){
  const n=Math.round(num('pcN')),r=Math.round(num('pcR'));
  if(!Number.isFinite(n)||!Number.isFinite(r)||n<0||r<0||r>n||n>170){out('pcResult','Enter integers with 0 ≤ r ≤ n ≤ 170.');return;}
  const npr=fact(n)/fact(n-r);
  const val=mode==='ncr'?npr/fact(r):npr;
  out('pcResult',`${mode==='ncr'?`${n}C${r}`:`${n}P${r}`} = <b>${fmt(val)}</b>`);
};
window.calcMensuration=function(){
  const shape=document.getElementById('mensShape')?.value||'rectangle';
  const a=num('mensA'),b=num('mensB');
  if(!Number.isFinite(a)||a<=0){out('mensResult','Enter a positive primary dimension.');return;}
  if(shape==='square'){out('mensResult',`Area = <b>${fmt(a*a)}</b><br>Perimeter = <b>${fmt(4*a)}</b><br>Diagonal = <b>${fmt(a*Math.SQRT2)}</b>`);}
  else if(shape==='circle'){out('mensResult',`Area = <b>${fmt(Math.PI*a*a)}</b><br>Circumference = <b>${fmt(2*Math.PI*a)}</b>`);}
  else if(shape==='rectangle'){if(!Number.isFinite(b)||b<=0){out('mensResult','Enter positive length and breadth.');return;}out('mensResult',`Area = <b>${fmt(a*b)}</b><br>Perimeter = <b>${fmt(2*(a+b))}</b>`);}
  else {if(!Number.isFinite(b)||b<=0){out('mensResult','Enter positive radius and height.');return;}out('mensResult',`Volume = <b>${fmt(Math.PI*a*a*b)}</b><br>CSA = <b>${fmt(2*Math.PI*a*b)}</b><br>TSA = <b>${fmt(2*Math.PI*a*(a+b))}</b>`);}
};
window.calcRace=function(){
  const a=num('raceA'),b=num('raceB'),t=num('raceTime');
  if(!Number.isFinite(a)||!Number.isFinite(b)||a<=0||b<=0){out('raceResult','Enter valid positive distances.');return;}
  const g=gcdInt(Math.round(a),Math.round(b));
  let res=`Speed Ratio (A : B) = <b>${fmt(a/g)} : ${fmt(b/g)}</b>`;
  if(Number.isFinite(t)&&t>0) res+=`<br>Speed A = <b>${fmt(a/t)} m/s</b>, Speed B = <b>${fmt(b/t)} m/s</b>`;
  out('raceResult',res);
};


// Remove the accidental generic Hindi placeholder from older/generated vocabulary data.
window.sanitizeVocabDisplay = function(v){
    const bad='प्रतियोगी परीक्षा में उपयोगी शब्द';
    return v && v.hindi && v.hindi.trim()===bad ? '' : (v?.hindi || '');
};

// Keyboard support for the basic calculator.
document.addEventListener('keydown',function(e){
    try{
        const modal=document.getElementById('calculatorModal'); if(!modal||!modal.classList.contains('show'))return;
        if(!document.getElementById('calcToolBasicPanel')?.classList.contains('active'))return;
        if(/[0-9+\-*/().]/.test(e.key)){e.preventDefault();calcPress(e.key);}
        else if(e.key==='Enter'){e.preventDefault();calcEval();}
        else if(e.key==='Escape'){e.preventDefault();closeModal('calculatorModal');}
        else if(e.key==='Backspace'){e.preventDefault();calcExpression=calcExpression.slice(0,-1);document.getElementById('calcDisplay').value=calcExpression;}
    }catch(_){ }
});

// Current-folder aliases used by the Vault modal buttons.
window.renameCurrentFolder = function(){
    try{
        if(!currentOpenFolderId) return showToast('Root folder cannot be renamed here.', true);
        window.renameFolder(currentOpenFolderId);
        const f=window.appData.vaultFolders.find(x=>x.id===currentOpenFolderId);
        if(f){const h=document.getElementById('currentFolderName'); if(h)h.innerText=f.name; renderNotesGrid();}
    }catch(e){console.error(e);}
};
// ============================================================
// V29.2 FINAL ENHANCEMENT PATCH
// Approved A-F + Smart Coach + full exam-aware analytics,
// validation, revision, backup, RRB timer, security and mobile.
// ============================================================
(function(){
'use strict';

function ensureData(){
  if(!window.appData) window.appData={};
  const d=window.appData;
  d.mocks=Array.isArray(d.mocks)?d.mocks:[];
  d.studyLogs=Array.isArray(d.studyLogs)?d.studyLogs:[];
  d.quizHistory=Array.isArray(d.quizHistory)?d.quizHistory:[];
  d.tasks=d.tasks&&typeof d.tasks==='object'&&!Array.isArray(d.tasks)?d.tasks:{};
  d.dailySessions=d.dailySessions&&typeof d.dailySessions==='object'&&!Array.isArray(d.dailySessions)?d.dailySessions:{};
  d.vocabProgress=d.vocabProgress&&typeof d.vocabProgress==='object'&&!Array.isArray(d.vocabProgress)?d.vocabProgress:{};
  d.grammarProgress=d.grammarProgress&&typeof d.grammarProgress==='object'&&!Array.isArray(d.grammarProgress)?d.grammarProgress:{};
}
ensureData();

function save(){ if(typeof saveDataLocally==='function') saveDataLocally(); }
function esc(v){ return typeof escapeHTML==='function'?escapeHTML(v):String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
function pct(score,max){ return max>0 ? (score/max*100) : 0; }
function mockMax(m){
  if(Number.isFinite(+m.maxScore)&&+m.maxScore>0) return +m.maxScore;
  const p=EXAM_PATTERNS[m.examType]||EXAM_PATTERNS['SBI PO'];
  if(m.type==='sectional'){
    if(m.sub==='english') return p.eng;
    if(m.sub==='quant') return p.qua;
    if(m.sub==='reasoning') return p.rea;
  }
  return p.max;
}
function activeSubjects(m){
  if(m.type==='sectional') return m.sub==='english'?['english']:m.sub==='quant'?['quant']:['reasoning'];
  const p=EXAM_PATTERNS[m.examType]||EXAM_PATTERNS['SBI PO'];
  return (p.hasEng?['english']:[]).concat(['quant','reasoning']);
}

// ---------- Exam-aware mock input limits + calculation ----------
window.updateMockInputLimits=function(){
  try{
    const exam=document.getElementById('mockExamType')?.value||'SBI PO';
    const p=EXAM_PATTERNS[exam]||EXAM_PATTERNS['SBI PO'];
    const isSec=typeof currentMockType!=='undefined'&&currentMockType==='sectional';
    const sub=document.getElementById('secSubject')?.value;
    const maxes={eng:p.eng,qua:p.qua,rea:p.rea};
    [['engR','engW','eng'],['quaR','quaW','qua'],['reaR','reaW','rea']].forEach(([r,w,k])=>{
      const mr=document.getElementById(r),mw=document.getElementById(w); if(mr)mr.max=maxes[k]||0;if(mw)mw.max=maxes[k]||0;
      if(isSec && ((k==='eng'&&sub!=='english')||(k==='qua'&&sub!=='quant')||(k==='rea'&&sub!=='reasoning'))){ if(mr)mr.value=0;if(mw)mw.value=0; }
    });
    if(!p.hasEng){ const er=document.getElementById('engR'),ew=document.getElementById('engW');if(er)er.value=0;if(ew)ew.value=0; }
  }catch(e){}
};

// Strictly validate right+wrong <= section max on submit, and store only active subjects.
window.handleMockSubmit=function(e){
  try{
    if(e&&e.preventDefault)e.preventDefault();
    window.updateMockInputLimits();
    const exam=document.getElementById('mockExamType').value;
    const p=EXAM_PATTERNS[exam]||EXAM_PATTERNS['SBI PO'];
    const type=(typeof currentMockType!=='undefined'?currentMockType:'full');
    const sub=type==='sectional'?(document.getElementById('secSubject')?.value||''):'All';
    const active=type==='sectional'?[sub]:((p.hasEng?['english']:[]).concat(['quant','reasoning']));
    const vals={english:[+document.getElementById('engR').value||0,+document.getElementById('engW').value||0,p.eng],quant:[+document.getElementById('quaR').value||0,+document.getElementById('quaW').value||0,p.qua],reasoning:[+document.getElementById('reaR').value||0,+document.getElementById('reaW').value||0,p.rea]};
    for(const s of active){ const [r,w,max]=vals[s]; if(r<0||w<0||r+w>max){ showToast(`${s[0].toUpperCase()+s.slice(1)}: Right + Wrong cannot exceed ${max}.`,true); return false; } }
    const get=(s)=>{const [r,w,max]=vals[s];const att=r+w,net=r-w*.25;return {r,w,att,net,acc:att?100*r/att:0,max};};
    const eD=active.includes('english')?get('english'):{r:0,w:0,att:0,net:0,acc:0,max:0};
    const qD=active.includes('quant')?get('quant'):{r:0,w:0,att:0,net:0,acc:0,max:0};
    const rD=active.includes('reasoning')?get('reasoning'):{r:0,w:0,att:0,net:0,acc:0,max:0};
    const total=eD.net+qD.net+rD.net,totalAtt=eD.att+qD.att+rD.att,totalRight=eD.r+qD.r+rD.r,totalWrong=eD.w+qD.w+rD.w;
    const maxScore=type==='sectional'?(sub==='english'?p.eng:sub==='quant'?p.qua:p.rea):p.max;
    const target=+document.getElementById('mockTarget').value||0;
    const editingId=document.getElementById('editingMockId').value;
    const mockObj={
      id:editingId?parseInt(editingId):Date.now(),date:document.getElementById('mockDate').value,examType:exam,
      platform:document.getElementById('mockPlatform').value,percentile:document.getElementById('mockPercentile').value||'-',
      type,sub,target,eAtt:eD.att,eR:eD.r,eW:eD.w,eMarks:p.hasEng&&active.includes('english')?eD.net.toFixed(2):'-',
      qAtt:qD.att,qR:qD.r,qW:qD.w,qMarks:qD.net.toFixed(2),rAtt:rD.att,rR:rD.r,rW:rD.w,rMarks:rD.net.toFixed(2),
      totalAtt,totalAcc:totalAtt?(totalRight/totalAtt*100).toFixed(1):'0.0',totalMarks:+total.toFixed(2),maxScore,
      activeSubjects:active
    };
    if(editingId) window.appData.mocks=window.appData.mocks.map(m=>m.id===parseInt(editingId)?mockObj:m); else window.appData.mocks.unshift(mockObj);
    save();
    const form=document.getElementById('mockForm');if(form)form.reset();const eid=document.getElementById('editingMockId');if(eid)eid.value='';
    const title=document.getElementById('mockFormTitle');if(title)title.innerText='📝 Add Mock Test Performance';
    window.renderMockSubjectsVisibility(); updateDashboardKPIs(); renderTracker(); window.renderCharts?.();
    window.showSmartCoach(mockObj);
  }catch(err){console.error(err);showToast('Could not save mock. Please check the entries.',true);} return false;
};
window.saveMockData=window.handleMockSubmit;

// ---------- Dashboard: normalized performance ----------
window.updateDashboardKPIs=function(){
  try{
    ensureData();const mocks=window.appData.mocks;document.getElementById('kpiTotal').innerText=mocks.length;
    if(!mocks.length){document.getElementById('kpiBest').innerText='0%';document.getElementById('kpiAvg').innerText='0%';document.getElementById('kpiAcc').innerText='0%';return;}
    const pcts=mocks.map(m=>pct(+m.totalMarks||0,mockMax(m)));const best=Math.max(...pcts),avg=pcts.reduce((a,b)=>a+b,0)/pcts.length,acc=mocks.reduce((a,m)=>a+(+m.totalAcc||0),0)/mocks.length;
    const kb=document.getElementById('kpiBest'),ka=document.getElementById('kpiAvg');if(kb)kb.innerText=best.toFixed(1)+'%';if(ka)ka.innerText=avg.toFixed(1)+'%';if(document.getElementById('kpiAcc'))document.getElementById('kpiAcc').innerText=acc.toFixed(1)+'%';
    const labels=document.querySelectorAll('#view-dashboard .kpi-card p'); if(labels[1])labels[1].innerText='Highest Performance'; if(labels[3])labels[3].innerText='Average Performance';
  }catch(e){console.error(e)}
};

// ---------- Smart Coach ----------
function coachText(m){
  const max=mockMax(m),score=+m.totalMarks||0,sp=pct(score,max),target=+m.target||0,tp=target?pct(target,max):0,acc=+m.totalAcc||0;
  const subs=[];for(const s of activeSubjects(m)){const marks=s==='english'?+m.eMarks||0:s==='quant'?+m.qMarks||0:+m.rMarks||0;const mx=s==='english'?(EXAM_PATTERNS[m.examType]?.eng||0):s==='quant'?(EXAM_PATTERNS[m.examType]?.qua||0):(EXAM_PATTERNS[m.examType]?.rea||0);if(mx)subs.push({s,p:pct(marks,mx)});}
  subs.sort((a,b)=>b.p-a.p);const best=subs[0],weak=subs[subs.length-1];
  const wrong=(+m.eW||0)+(+m.qW||0)+(+m.rW||0),att=+m.totalAtt||0;
  const history=(window.appData.mocks||[]).filter(x=>x.id!==m.id&&x.examType===m.examType&&x.type===m.type).slice(0,5);let trend='Not enough previous mocks for a reliable trend.';
  if(history.length){const prev=history.reduce((a,x)=>a+pct(+x.totalMarks||0,mockMax(x)),0)/history.length;const diff=sp-prev;trend=diff>2?`Your latest performance is ${diff.toFixed(1)} percentage points above your recent average.`:diff<-2?`Your latest performance is ${Math.abs(diff).toFixed(1)} percentage points below your recent average.`:'Your latest performance is close to your recent average.';}
  let next=weak?`Focus on ${weak.s==='english'?'English':weak.s==='quant'?'Quant/Numerical':'Reasoning'} practice before your next mock.`:'Continue your current preparation plan.';
  if(acc<80)next+=' Improve accuracy before increasing attempts.'; else if(wrong>=5)next+=' Reduce low-confidence attempts to control negative marking.';
  return `<div class="coach-grid"><div><b>Score</b><span>${score.toFixed(2)} / ${max} (${sp.toFixed(1)}%)</span></div><div><b>Accuracy</b><span>${acc.toFixed(1)}%</span></div><div><b>Target</b><span>${target?`${target} (${tp.toFixed(1)}%)`:'Not set'}</span></div><div><b>Attempts</b><span>${att} &nbsp; | &nbsp; Wrong: ${wrong}</span></div></div><p><b>What went well:</b> ${best?`${best.s==='english'?'English':best.s==='quant'?'Quant/Numerical':'Reasoning'} is your strongest active section at ${best.p.toFixed(1)}%.`:'No subject data.'}</p><p><b>What needs work:</b> ${weak?`${weak.s==='english'?'English':weak.s==='quant'?'Quant/Numerical':'Reasoning'} is currently the weakest active section at ${weak.p.toFixed(1)}%.`:'No subject data.'}</p><p><b>Trend:</b> ${trend}</p><p><b>Next action:</b> ${next}</p>`;
}
window.showSmartCoach=function(m){const b=document.getElementById('aiModalBody');if(b)b.innerHTML=coachText(m);const modal=document.getElementById('aiModal');if(modal)modal.classList.add('show');};

// ---------- Revision Due ----------
function today(){return getSafeDateStr();}
function dueDate(days){const d=new Date();d.setDate(d.getDate()+days);return getSafeDateStr(d);}
function progressFor(store,key){ensureData();return window.appData[store][key]||(window.appData[store][key]={status:'new',interval:0,nextReview:null,updatedAt:null,correct:0,wrong:0});}
function markReview(store,key,status){
  const p=progressFor(store,key);const intervals=[1,3,7,15,30];
  if(status==='difficult'){p.status='difficult';p.interval=0;p.nextReview=dueDate(1);p.wrong=(p.wrong||0)+1;}
  else if(status==='learned'){p.status='learned';p.interval=Math.min((p.interval||0)+1,intervals.length);const days=intervals[Math.max(0,p.interval-1)];p.nextReview=dueDate(days);p.correct=(p.correct||0)+1;}
  p.updatedAt=Date.now();save();renderRevisionDue();
}
window.markVocabLearned=()=>{if(typeof vocabData!=='undefined')markReview('vocabProgress',String(vocabData[currentVocabIndex]?.word||currentVocabIndex),'learned');};
window.markVocabDifficult=()=>{if(typeof vocabData!=='undefined')markReview('vocabProgress',String(vocabData[currentVocabIndex]?.word||currentVocabIndex),'difficult');};
window.markGrammarLearned=()=>{if(typeof grammarData!=='undefined')markReview('grammarProgress',String(currentRuleIndex),'learned');};
window.markGrammarDifficult=()=>{if(typeof grammarData!=='undefined')markReview('grammarProgress',String(currentRuleIndex),'difficult');};
function dueItems(store){const data=window.appData[store]||{},now=today();return Object.entries(data).filter(([,p])=>p&&p.nextReview&&p.nextReview<=now).map(([k])=>k);}
window.reviewDue=function(type){
  const arr=dueItems(type==='vocab'?'vocabProgress':'grammarProgress');
  if(!arr.length){showToast(`No ${type==='vocab'?'vocabulary':'grammar'} revision due today.`);return;}
  document.querySelectorAll('.nav-links li').forEach(l=>l.classList.remove('active'));document.querySelector('[data-tab="view-dashboard"]')?.classList.add('active');document.querySelectorAll('.view-section').forEach(s=>s.classList.remove('active'));document.getElementById('view-dashboard')?.classList.add('active');
  if(type==='vocab'&&typeof vocabData!=='undefined'){const i=vocabData.findIndex(v=>String(v.word)===arr[0]);if(i>=0)renderVocabWord(i);}
  if(type==='grammar'&&typeof grammarData!=='undefined'){const i=parseInt(arr[0]);if(Number.isFinite(i))renderGrammarRule(i);}
};

})();


// ============================================================
// V29.3 — LOCAL-FIRST VAULT (IndexedDB), SETTINGS & ANALYTICS
// ============================================================
(function(){
'use strict';

const IDB_NAME='KKMonitoringFilesDB';
const IDB_VERSION=1;
const IDB_STORE='vaultFiles';
let idbPromise=null;
window.vaultFileCache=window.vaultFileCache||new Map();

function openVaultDB(){
  if(idbPromise) return idbPromise;
  idbPromise=new Promise((resolve,reject)=>{
    if(!('indexedDB' in window)){reject(new Error('IndexedDB is not supported in this browser.'));return;}
    const req=indexedDB.open(IDB_NAME,IDB_VERSION);
    req.onupgradeneeded=()=>{const db=req.result;if(!db.objectStoreNames.contains(IDB_STORE))db.createObjectStore(IDB_STORE,{keyPath:'id'});};
    req.onsuccess=()=>resolve(req.result);req.onerror=()=>reject(req.error||new Error('IndexedDB open failed'));
  });
  return idbPromise;
}
function idbPut(record){return openVaultDB().then(db=>new Promise((res,rej)=>{const tx=db.transaction(IDB_STORE,'readwrite');tx.objectStore(IDB_STORE).put(record);tx.oncomplete=()=>res(true);tx.onerror=()=>rej(tx.error);}));}
function idbGet(id){return openVaultDB().then(db=>new Promise((res,rej)=>{const tx=db.transaction(IDB_STORE,'readonly');const r=tx.objectStore(IDB_STORE).get(id);r.onsuccess=()=>res(r.result||null);r.onerror=()=>rej(r.error);}));}
function idbDelete(id){return openVaultDB().then(db=>new Promise((res,rej)=>{const tx=db.transaction(IDB_STORE,'readwrite');tx.objectStore(IDB_STORE).delete(id);tx.oncomplete=()=>res(true);tx.onerror=()=>rej(tx.error);}));}
function idbGetAll(){return openVaultDB().then(db=>new Promise((res,rej)=>{const tx=db.transaction(IDB_STORE,'readonly');const r=tx.objectStore(IDB_STORE).getAll();r.onsuccess=()=>res(r.result||[]);r.onerror=()=>rej(r.error);}));}

function dataUrlToBlob(dataUrl){
  const parts=String(dataUrl||'').split(',');
  if(parts.length<2) throw new Error('Invalid data URL');
  const meta=parts[0], raw=atob(parts[1]);let mime='application/octet-stream';
  const m=meta.match(/data:([^;]+)/i);if(m)mime=m[1];
  const bytes=new Uint8Array(raw.length);for(let i=0;i<raw.length;i++)bytes[i]=raw.charCodeAt(i);
  return new Blob([bytes],{type:mime});
}
function blobToDataURL(blob){return new Promise((res,rej)=>{const r=new FileReader();r.onload=()=>res(r.result);r.onerror=()=>rej(r.error);r.readAsDataURL(blob);});}

async function migrateLegacyVaultFiles(){
  try{
    const notes=Array.isArray(window.appData?.vaultNotes)?window.appData.vaultNotes:[];
    let changed=false;
    for(const note of notes){
      if(note.type!=='file') continue;
      if(Array.isArray(note.fileRefs)&&note.fileRefs.length) continue;
      const legacy=Array.isArray(note.content)?note.content:[];
      if(!legacy.length) continue;
      const refs=[];
      for(const item of legacy){
        if(!item?.data) continue;
        const fileId='vf_'+Date.now()+'_'+Math.random().toString(36).slice(2,10);
        const blob=dataUrlToBlob(item.data);
        await idbPut({id:fileId,blob,type:item.type||blob.type||'application/octet-stream',name:item.name||'Vault File',size:blob.size,createdAt:Date.now()});
        refs.push({id:fileId,type:item.type||blob.type||'application/octet-stream',name:item.name||'Vault File',size:blob.size});
      }
      note.fileRefs=refs;delete note.content;changed=true;
    }
    if(changed) saveDataLocally();
  }catch(e){console.warn('Vault migration skipped/failed:',e);}
}

async function hydrateVaultCache(){
  try{
    const all=await idbGetAll();
    window.vaultFileCache.clear();
    all.forEach(r=>window.vaultFileCache.set(r.id,r));
    renderVaultFolders?.(currentFolderParent||null);
    if(typeof renderDashboardStickyNotes==='function')renderDashboardStickyNotes();
  }catch(e){console.warn('Vault hydration:',e);}
}
try{ loadLocalData(); }catch(_){}
let vaultStoragePromise=null;
window.ensureVaultStorageReady=function(){
  if(vaultStoragePromise)return vaultStoragePromise;
  vaultStoragePromise=(async()=>{await migrateLegacyVaultFiles();await hydrateVaultCache();return true;})().catch(e=>{console.warn('Vault storage startup:',e);return false;});
  window.vaultStorageReady=vaultStoragePromise;
  return vaultStoragePromise;
};
window.vaultStorageReady=Promise.resolve(true);
function scheduleVaultStartup(){
  const start=()=>window.ensureVaultStorageReady?.();
  if('requestIdleCallback' in window) requestIdleCallback(start,{timeout:2500});
  else setTimeout(start,1200);
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',scheduleVaultStartup,{once:true});
else scheduleVaultStartup();

// Replace file upload: binary data goes to IndexedDB, only lightweight refs stay in appData/window.kkSafeLocal.
window.addFileToFolder=async function(e){
  try{
    const files=Array.from(e?.target?.files||[]);if(!files.length)return;
    if(!('indexedDB' in window)){showToast('IndexedDB is unavailable in this browser.',true);return;}
    const refs=[];
    for(const file of files){
      const fileId='vf_'+Date.now()+'_'+Math.random().toString(36).slice(2,10);
      await idbPut({id:fileId,blob:file,type:file.type||'application/octet-stream',name:file.name,size:file.size,createdAt:Date.now()});
      refs.push({id:fileId,type:file.type||'application/octet-stream',name:file.name,size:file.size});
    }
    window.appData.vaultNotes.push({id:Date.now(),folderId:currentOpenFolderId,type:'file',fileRefs:refs,date:getSafeDateStr(),pinned:false});
    saveDataLocally();
    await hydrateVaultCache();renderNotesGrid();showToast(`${files.length} File(s) Saved to IndexedDB!`);
    e.target.value='';
  }catch(err){console.error(err);showToast('Could not save file(s).',true);}
};

// Replace preview: fetch binary blobs from IndexedDB and create temporary object URLs.
window.previewFile=async function(id){
  try{
    const note=window.appData.vaultNotes.find(n=>n.id===parseInt(id));if(!note)return;
    if(note.type!=='file')return;
    const refs=Array.isArray(note.fileRefs)?note.fileRefs:[];
    if(!refs.length && Array.isArray(note.content)){
      // Legacy fallback if migration has not completed yet.
      currentPreviewFiles=note.content;currentPreviewIndex=0;window.renderCurrentPreview();document.getElementById('filePreviewModal')?.classList.add('show');return;
    }
    currentPreviewFiles=[];
    for(const ref of refs){
      let rec=window.vaultFileCache.get(ref.id)||await idbGet(ref.id);
      if(!rec?.blob)continue;
      const url=URL.createObjectURL(rec.blob);window.vaultFileCache.set(ref.id,rec);
      currentPreviewFiles.push({type:rec.type||ref.type,data:url,objectUrl:url,name:rec.name||ref.name});
    }
    currentPreviewIndex=0;if(!currentPreviewFiles.length){showToast('File not found in IndexedDB.',true);return;}
    window.renderCurrentPreview();document.getElementById('filePreviewModal')?.classList.add('show');
  }catch(err){console.error(err);showToast('Could not preview file.',true);}
};


window.deleteNote=async function(id){
  try{
    const note=window.appData.vaultNotes.find(n=>n.id===id);if(!note)return;
    if(!(await window.kkDialogConfirm('Delete this note/file?', 'Delete', true)))return;
    if(note.type==='file'){
      for(const ref of (note.fileRefs||[])){try{await idbDelete(ref.id);}catch(_){}window.vaultFileCache.delete(ref.id);}
    }
    window.appData.vaultNotes=window.appData.vaultNotes.filter(n=>n.id!==id);saveDataLocally('delete');renderNotesGrid();renderDashboardStickyNotes();window.kkCloudReplaceNow?.();
  }catch(e){showToast('Could not delete item.',true);}
};


// ---------- SETTINGS ----------
function getStoredTheme(){return window.kkSafeLocal.getItem('kkMonitoringTheme')||'dark';}
window.setTheme=function(mode){
  const root=document.body;
  if(mode==='light'){root.classList.add('light-theme');root.classList.remove('dark-theme');}
  else if(mode==='dark'){root.classList.remove('light-theme');root.classList.add('dark-theme');}
  else {const dark=window.matchMedia?.('(prefers-color-scheme: dark)').matches;root.classList.toggle('light-theme',!dark);root.classList.toggle('dark-theme',dark);}
  window.kkSafeLocal.setItem('kkMonitoringTheme',mode);updateThemeStatus();
};
window.toggleTheme=function(){const cur=getStoredTheme();setTheme(cur==='light'?'dark':'light');};
window.updateThemeStatus=function(){const el=document.getElementById('themeStatus');if(el){const t=getStoredTheme();el.innerText=`Current theme: ${t==='system'?'System preference':t.charAt(0).toUpperCase()+t.slice(1)+' Mode'}`;}};

window.changeAppPin=function(){
  const cur=document.getElementById('currentPinSetting')?.value||'',nw=document.getElementById('newPinSetting')?.value||'',cf=document.getElementById('confirmPinSetting')?.value||'';
  const stored=window.kkSafeLocal.getItem('kkMonitoringPin')||'1204';
  if(cur!==stored)return showToast('Current PIN is incorrect.',true);
  if(!/^\d{4}$/.test(nw))return showToast('New PIN must be exactly 4 digits.',true);
  if(nw!==cf)return showToast('New PIN and confirmation do not match.',true);
  window.kkSafeLocal.setItem('kkMonitoringPin',nw);['currentPinSetting','newPinSetting','confirmPinSetting'].forEach(id=>{const e=document.getElementById(id);if(e)e.value='';});showToast('PIN changed successfully.');
};
window.lockSystem=function(){window.kkSafeSession.removeItem('kkUnlocked_v58');window.kkSafeSession.removeItem('kkUnlocked_v65');location.reload();};
window.clearAllAppData=async function(){
  if(!(await window.kkDialogConfirm('This will permanently clear local study data and Vault files on this device. Continue?', 'Continue', true)))return;
  if(!(await window.kkDialogConfirm('Final confirmation: erase ALL KK Monitoring data?', 'Erase All', true)))return;
  Promise.resolve().then(async()=>{try{const all=await idbGetAll();for(const r of all)await idbDelete(r.id);}catch(_){}window.kkSafeLocal.removeItem(DATA_KEY);window.kkSafeLocal.removeItem(FRESH_MARKER);showToast('All data cleared. Reloading…');setTimeout(()=>location.reload(),700);});
};
window.refreshStorageStatus=async function(){
  const el=document.getElementById('storageStatus');if(!el)return;
  try{
    const all=await idbGetAll();const bytes=all.reduce((s,r)=>s+(r.size||r.blob?.size||0),0);const mb=(bytes/1048576).toFixed(2);let quota='';
    if(navigator.storage?.estimate){const est=await navigator.storage.estimate();quota=` • Browser quota: ${((est.quota||0)/1073741824).toFixed(2)} GB`}
    el.innerText=`IndexedDB files: ${all.length} • Vault size: ${mb} MB${quota}`;
  }catch(e){el.innerText='IndexedDB storage information unavailable.';}
};

// ---------- Improved unlock PIN compatibility ----------
window.getAppPin=()=>window.kkSafeLocal.getItem('kkMonitoringPin')||'1204';

// ---------- Additional Deep Analytics ----------
const oldRenderCharts=renderBaseCharts;
function makeChart(id,type,data,options,key){
  const c=document.getElementById(id);if(!c||typeof Chart==='undefined')return;
  if(charts[key])charts[key].destroy();charts[key]=new Chart(c,{type,data,options:Object.assign({responsive:true,maintainAspectRatio:false},options||{})});
}
window.renderCharts=function(){
  try{if(oldRenderCharts)oldRenderCharts();}catch(e){console.warn('Base analytics:',e)}
  try{
    const filter=document.getElementById('analyticsFilter')?.value||'All',tf=document.getElementById('analyticsTypeFilter')?.value||'All';
    let data=(window.appData.mocks||[]).filter(m=>(filter==='All'||m.examType===filter)&&(tf==='All'||m.type===tf)).slice(0,30).reverse();
    const labels=data.length?data.map(m=>m.date?.substring(5)||'Mock'):['No Data'];const vals=a=>data.length?data.map(a):[0];
    makeChart('chartScorePct','line',{labels,datasets:[{label:'Score %',data:vals(m=>{const max=Number(m.maxScore)||100;return max?(Number(m.totalMarks)||0)/max*100:0}),fill:true,tension:.3}]},{scales:{y:{min:0,max:100}}},'scorePct');
    let eR=0,eA=0,qR=0,qA=0,rR=0,rA=0;eR=data.reduce((s,m)=>s+Number(m.eR||0),0);eA=data.filter(m=>m.eMarks!=='-').reduce((s,m)=>s+Number(m.eR||0)+Number(m.eW||0),0);qR=data.reduce((s,m)=>s+Number(m.qR||0),0);qA=data.reduce((s,m)=>s+Number(m.qR||0)+Number(m.qW||0),0);rR=data.reduce((s,m)=>s+Number(m.rR||0),0);rA=data.reduce((s,m)=>s+Number(m.rR||0)+Number(m.rW||0),0);
    makeChart('chartSubjectAccuracy','bar',{labels:['English','Quants','Reasoning'],datasets:[{label:'Accuracy %',data:[eA?eR/eA*100:0,qA?qR/qA*100:0,rA?rR/rA*100:0]}]},{scales:{y:{min:0,max:100}}},'subAcc');
    makeChart('chartAttemptsAccuracy','scatter',{datasets:[{label:'Mocks',data:data.map((m,i)=>({x:Number(m.totalAtt)||0,y:Number(m.totalAcc)||0})),pointRadius:5}]},{scales:{x:{title:{display:true,text:'Attempts'}},y:{title:{display:true,text:'Accuracy %'},min:0,max:100}}},'attemptAcc');
    const subjectSec={};(window.appData.studyLogs||[]).forEach(x=>{if(String(x.type||'')!=='Focus')return;const k=x.subject||'Other';subjectSec[k]=(subjectSec[k]||0)+(Number(x.duration)||0);});
    makeChart('chartStudySubjects','doughnut',{labels:Object.keys(subjectSec).length?Object.keys(subjectSec):['No Data'],datasets:[{label:'Minutes',data:Object.keys(subjectSec).length?Object.values(subjectSec).map(v=>v/60):[0]}]}, {},'studySubjects');
    const examCounts={};(window.appData.mocks||[]).forEach(m=>examCounts[m.examType]=(examCounts[m.examType]||0)+1);
    makeChart('chartMocksByExam','bar',{labels:Object.keys(examCounts).length?Object.keys(examCounts):['No Data'],datasets:[{label:'Mocks',data:Object.keys(examCounts).length?Object.values(examCounts):[0]}]},{indexAxis:'y'},'mocksExam');
    makeChart('chartWrongUnattempted','bar',{labels:labels,datasets:[{label:'Wrong',data:vals(m=>Number(m.eW||0)+Number(m.qW||0)+Number(m.rW||0))},{label:'Unattempted',data:vals(m=>Math.max(0,(Number(m.maxScore)||100)-((Number(m.eR||0)+Number(m.eW||0))+(Number(m.qR||0)+Number(m.qW||0))+(Number(m.rR||0)+Number(m.rW||0)))))}]},{scales:{y:{beginAtZero:true}}},'wrongUnattempted');
  }catch(e){console.warn('Extended analytics:',e)}
};

// Initial theme and storage status.
setTheme(getStoredTheme());
setTimeout(()=>{updateThemeStatus();refreshStorageStatus();},200);

})();



window.ensureDataShape = ensureDataShape;
window.loadLocalData = loadLocalData;
window.renderCountdowns = renderCountdowns;
window.generateDailySchedule = generateDailySchedule;
window.renderDailySchedule = renderDailySchedule;
window.updateTaskSummaryAndStreak = updateTaskSummaryAndStreak;
window.renderCalendar = renderCalendar;
window.renderVaultFolders = renderVaultFolders;
window.renderNotesGrid = renderNotesGrid;
window.renderDailySummaryTable = renderDailySummaryTable;
window.renderQuizHistoryTable = renderQuizHistoryTable;
window.escapeHTML = escapeHTML;
