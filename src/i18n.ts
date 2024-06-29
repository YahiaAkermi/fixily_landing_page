import i18n from "i18next";
import { Translation, initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      fr: {
        translation: {
          navbar: {
            rejoindre: "Rejoindre",
            seconnecter: "Se Connecter",
            mesdemandes: "Mes Demandes",
            services: "Services",
            language: {
              language: "language",
              arabe: "arabe",
              francais: "français",
            },
          },
          hero: {
            h1: "Les Meilleurs Professionnels en Algérie:<br /> Qualifiés, à Proximité et à Votre Service!",
            subtitle: "Téléchargez l'application gratuitement sur:",
          },
          explore: {
            h1: "Vous avez des travaux à faire? Nous vous trouvons quelqu'un en quelques minutes",
            placeholder: "Trouvez une service...",
          },
          categories: {
            h1: "Explorer Nos Catégories",
            btn_text: "Voir plus",
          },
          howSection: {
            h1: "Comment ça marche?",
            para: "Publiez une demande, nos professionnels répondent, et choisissez le meilleur profil.<br /> Simple, rapide, efficace. Voir comment ça marche.",
            etape: "Étape",
          },
          workersSection: {
            h1: "Avez-vous une compétence?",
            subtitle:
              "Gagnez plus d'argent et développez votre travail avec <br/> Fixily, obtenez plus de clients dans votre région.",
            para: "Fixily est le moyen fiable d'obtenir le travail que vous souhaitez. Recevez un<br/> flux constant de missions locales correspondant à vos compétences.<br/> Acceptez de grands projets ou des petits travaux pour remplir votre emploi du<br/> temps - le choix vous appartient!",
          },
          qa: {
            h1: "Questions Fréquentes",
            sub: "Retrouvez ici les réponses aux questions les plus courantes sur notre <br/> service, son fonctionnement, les tarifs, et les conditions.",
            q1: "C’est quoi Fixily?",
            a1: "Fixyli est une plateforme qui met en relation des clients avec des professionnels qualifiés pour divers services, tels que réparations, installations, et entretien, de manière simple et rapide.",
            q2: "Comment je peux trouver des professionnels ?",
            a2: "",
            q3: "Combien ça me coûte pour trouver des professionnels?",
            a3: "",
            q4: "puis-je être client et professionnel  à la fois?",
            a4: "",
            q5: "Je ne trouve pas de réponse à ma question",
            a5: "",
          },
          articles: {
            h1: "Articles Récents",
            btn_text: "Tous les articles",
          },
          footer: {
            txt_below_logo:
              "Besoin d’aide ? Trouvez des artisans de<br/> confiance et qualifiés sur Fixily pour <br/>toutes vos tâches !",
            contanctez_nous: "Contactez-nous",
            copyright: "Copyright © Fixily",
            droits: "Tous droits réservés",
            mentions: "Mentions Légales",
            condition: "Conditions Générales D'utilisation",
            politique: "Politique de Confidentialité",
          },
        },
      },
      ar: {
        translation: {
          navbar: {
            rejoindre: "انضم",
            seconnecter: "تسجيل الدخول",
            mesdemandes: "طلباتي",
            services: "الخدمات",
            language: {
              language: "اللغة",
              arabe: "العربية",
              francais: "الفرنسية",
            },
          },
          hero: {
            h1: "أفضل المهنيين في الجزائر<br /> مؤهلون، قريبون، وفي خدمتك!",
            subtitle: ": قم بتحميل التطبيق مجاناً على",
          },
          explore: {
            h1: "هل لديك أعمال تحتاج لإنجازها؟ نحن نجد لك شخصاً في بضع دقائق",
            placeholder: "ابحث عن خدمة",
          },
          categories: {
            h1: "استكشف فئاتنا",
            btn_text: "عرض المزيد",
          },
          howSection: {
            h1: "كيف يعمل؟",
            para: "انشر طلباً، سيجيب محترفونا، واختر أفضل ملف شخصي. بسيط، سريع، وفعال. شاهد كيف يعمل",
            etape: "خطوة",
          },
          workersSection: {
            h1: "هل لديك مهارة؟",
            subtitle:
              "اكسب المزيد من المال وطور عملك مع Fixily، احصل على المزيد من العملاء في منطقتك",
            para: "هو الطريقة الموثوقة للحصول على العمل الذي تريده. احصل على تدفق مستمر من المهام المحلية التي تتناسب مع مهاراتك. يمكنك قبول مشاريع كبيرة أو أعمال صغيرة لملء جدولك - الخيار لك Fixily",
          },
          qa: {
            h1: "أسئلة شائعة",
            sub: "ستجد هنا إجابات للأسئلة الأكثر شيوعًا حول خدمتنا، وكيفية عملها، والتعريفات، والشروط",
            q1: "ما هو فيكسيلي؟ ",
            a1: "فيكسيلي هي منصة تربط العملاء بمحترفين مؤهلين لتقديم خدمات متنوعة مثل الإصلاحات والتركيبات والصيانة بطريقة بسيطة وسريعة.",
            q2: "كيف يمكنني العثور على محترفين؟",
            a2: "",
            q3: "كم يكلفني العثور على محترفين؟",
            a3: "",
            q4: "هل يمكنني أن أكون عميلاً ومحترفًا في نفس الوقت؟",
            a4: "",
            q5: "لم أجد إجابة لسؤالي.",
            a5: "",
          },
          articles: {
            h1: "مقالات حديثة",
            btn_text: "جميع المقالات",
          },
          footer: {
            txt_below_logo:
              "تحتاج مساعدة؟ اعثر على حرفيين موثوقين ومؤهلين على فيكسيلي لجميع مهامك",
            contanctez_nous: "اتصل بنا",
            copyright: "حقوق الطبع والنشر © فيكسيلي",
            droits: "جميع الحقوق محفوظة",
            mentions: "الشروط القانونية",
            condition: "شروط الاستخدام العامة",
            politique: "سياسة الخصوصية",
          },
        },
      },
    },
  });

export default i18n;
