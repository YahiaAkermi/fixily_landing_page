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
          },
        },
      },
    },
  });

export default i18n;
