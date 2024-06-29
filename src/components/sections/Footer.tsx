import { Separator } from "@radix-ui/react-dropdown-menu";
import { useEffect, useState } from "react";
import { Trans, useTranslation } from "react-i18next";

const Footer = () => {
  const { t, i18n } = useTranslation();

  const [agencyDetails, setAgencyDetails] = useState({
    email: "Chaker@fixily.com",
    mobileNumber: "0770 12 23 34",
  });

  useEffect(() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng);
  }, []);
  return (
    <footer className="h-auto bg-secondary font-lato">
      <div className="w-full flex flex-col gap-9 p-8 lg:px-[200px] lg:py-[100px] max-lg:px-[30px]">
        <div className="flex max-md:flex-col lg:gap-[200px] gap-[80px] ">
          <div className="flex flex-col gap-8 ">
            <img
              src="/assets/images/fixily.png"
              alt="logo"
              className="w-[172px] h-[64px]"
            />
            <p className="text-lightblack pl-[20px]">
              {<Trans i18nKey="footer.txt_below_logo" />}
            </p>
            <div className="flex gap-2 pl-[20px] pt-2">
              <img src="/assets/images/facebook.png" alt="" />
              <img src="/assets/images/insta.png" alt="" />
              <img src="/assets/images/linkedIn.png" alt="" />
              <img src="/assets/images/youtube.png" alt="" />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-[35px] max-md:text-[24px]  font-semibold text-myblack ">
              {t("footer.contanctez_nous")}
            </h2>
            <p className="text-base  font-semibold text-lightblack ">
              {agencyDetails.email}
            </p>
            <p className="text-base  font-semibold text-lightblack ">
              {agencyDetails.mobileNumber}
            </p>
            <div className="flex max-xl:flex-col  xl:items-center w-full gap-4 pt-[25px]">
              <img
                src="/assets/images/apple.png"
                alt="apple"
                className="w-[227px]"
              />
              <img
                src="/assets/images/google.png"
                alt="ggle"
                className="w-[227px]"
              />
            </div>
          </div>
        </div>
        <Separator className="my-4 bg-lightblack h-[1px] rounded-full" />
        <div className="w-full flex max-md:flex-col md:justify-center items-center gap-5 text-base  font-semibold text-lightblack">
          <p>{t("footer.copyright")}</p>
          <p>{t("footer.droits")}</p>
          <p>{t("footer.mentions")}</p>
          <p>{t("footer.condition")}</p>
          <p>{t("footer.politique")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
