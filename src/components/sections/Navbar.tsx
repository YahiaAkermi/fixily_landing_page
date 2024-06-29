import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(navigator.language);

  useEffect(() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng);
    setLanguage(lng);
  }, []);

  return (
    <nav className="w-full flex justify-between items-center text-4xl h-[100px] px-4 xl:px-20 bg-secondary">
      <div className="">
        <img
          src="/assets/images/logo.png"
          alt=""
          className="w-[120px] h-[60px]"
        />
      </div>
      <div className="flex gap-2 items-center justify-evenly w-full max-w-[70%] hidden md:flex">
        <Select>
          <SelectTrigger className="text-myblack font-bold w-[180px] bg-secondary">
            <img src="/assets/images/translate.png" alt="translate" />
            <SelectValue
              placeholder={t("navbar.language.language")}
              className="hidden"
            />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="français">
                <div
                  className={`${
                    language.substring(0, 2) === "ar" ? "text-right" : ""
                  } w-full`}
                >
                  {t("navbar.language.francais")}
                </div>
              </SelectItem>
              <SelectItem value="arabe">
                <div
                  className={`${
                    language.substring(0, 2) === "ar" ? "text-right" : ""
                  } w-full`}
                >
                  {t("navbar.language.arabe")}
                </div>
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <DropdownMenu>
          <DropdownMenuTrigger className="text-myblack text-base font-medium flex items-center gap-2">
            <div
              className={`p-1 flex items-center gap-1 ${
                language.substring(0, 2) === "ar" ? "flex-row-reverse" : ""
              }`}
            >
              {t("navbar.services")}
              <img src="/assets/images/arrow_down.png" alt="arrow down" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mt-3">
            <DropdownMenuLabel
              className={`${
                language.substring(0, 2) === "ar" ? "text-right" : ""
              } w-full`}
            >
              {t("navbar.services")}
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="w-full">
              <div
                className={`${
                  language.substring(0, 2) === "ar" ? "text-right" : ""
                } w-full`}
              >
                وفي
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem className="w-full">
              <div
                className={`${
                  language.substring(0, 2) === "ar" ? "text-right" : ""
                } w-full`}
              >
                Billing
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem className="w-full">
              <div
                className={`${
                  language.substring(0, 2) === "ar" ? "text-right" : ""
                } w-full`}
              >
                Team
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem className="w-full">
              <div
                className={`${
                  language.substring(0, 2) === "ar" ? "text-right" : ""
                } w-full`}
              >
                Subscription
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Button variant="link" className="text-myblack">
          {t("navbar.mesdemandes")}
        </Button>

        <div className="flex items-center gap-3">
          <Button className="bg-transparent text-myblack rounded-3xl w-[112px] h-[48px] border border-myblack">
            {t("navbar.seconnecter")}
          </Button>
          <Button className="bg-primary text-myblack rounded-3xl w-[112px] h-[48px]">
            {t("navbar.rejoindre")}
          </Button>
        </div>
      </div>
      <div className="flex md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button className="border-none bg-transparent">
              <img src="/assets/images/burger_menu.png" alt="burger menu" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col gap-9 p-4">
              <Select>
                <SelectTrigger className="text-myblack font-bold w-full bg-secondary">
                  <img src="/assets/images/translate.png" alt="translate" />
                  <SelectValue
                    placeholder={t("navbar.language.language")}
                    className="hidden"
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="français">
                      <div
                        className={`${
                          language.substring(0, 2) === "ar" ? "text-right" : ""
                        } w-full`}
                      >
                        {t("navbar.language.francais")}
                      </div>
                    </SelectItem>
                    <SelectItem value="arabe">
                      <div
                        className={`${
                          language.substring(0, 2) === "ar" ? "text-right" : ""
                        } w-full`}
                      >
                        {t("navbar.language.arabe")}
                      </div>
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <DropdownMenu>
                <DropdownMenuTrigger className="text-myblack text-base font-medium flex items-center gap-2 hover:bg-secondary p-2 rounded-lg">
                  <div
                    className={`p-1 flex items-center gap-1 w-full ${
                      language.substring(0, 2) === "ar"
                        ? "flex-row-reverse"
                        : ""
                    }`}
                  >
                    <div className="flex justify-center items-center w-full">
                      {t("navbar.services")}
                    </div>

                    <img src="/assets/images/arrow_down.png" alt="arrow down" />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="mt-3">
                  <DropdownMenuLabel
                    className={`${
                      language.substring(0, 2) === "ar" ? "text-right" : ""
                    } w-full`}
                  >
                    {t("navbar.services")}
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="w-full">
                    <div
                      className={`${
                        language.substring(0, 2) === "ar" ? "text-right" : ""
                      } w-full`}
                    >
                      وفي
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="w-full">
                    <div
                      className={`${
                        language.substring(0, 2) === "ar" ? "text-right" : ""
                      } w-full`}
                    >
                      Billing
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="w-full">
                    <div
                      className={`${
                        language.substring(0, 2) === "ar" ? "text-right" : ""
                      } w-full`}
                    >
                      Team
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="w-full">
                    <div
                      className={`${
                        language.substring(0, 2) === "ar" ? "text-right" : ""
                      } w-full`}
                    >
                      Subscription
                    </div>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Button variant="link" className="text-myblack">
                {t("navbar.mesdemandes")}
              </Button>

              <Button className="bg-transparent text-myblack rounded-3xl w-full h-[48px] border border-myblack">
                {t("navbar.seconnecter")}
              </Button>
              <Button className="bg-primary text-myblack rounded-3xl w-full h-[48px]">
                {t("navbar.rejoindre")}
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
