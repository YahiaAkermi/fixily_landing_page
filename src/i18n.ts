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
        },
      },
      ar: {
        translation: {
          navbar: {
            rejoindre: "انضم",
            seconnecter: "تسجيل الدخول",
            mesdemandes: "طلباتي",
          },
          hero: {
            h1: "أفضل المهنيين في الجزائر:<br /> مؤهلون، قريبون، وفي خدمتك!",
            subtitle: ": قم بتحميل التطبيق مجاناً على",
          },
          explore: {
            h1: "هل لديك أعمال تحتاج لإنجازها؟ نحن نجد لك شخصاً في بضع دقائق",
            placeholder: "Trouvez une service...",
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
            Subtitle:
              "اكسب المزيد من المال وطور عملك مع Fixily، احصل على المزيد من العملاء في منطقتك.",
            para: "هو الطريقة الموثوقة للحصول على العمل الذي تريده. احصل على تدفق مستمر من المهام المحلية التي تتناسب مع مهاراتك. يمكنك قبول مشاريع كبيرة أو أعمال صغيرة لملء جدولك - الخيار لك Fixily",
          },
        },
      },
    },
  });

export default i18n;
