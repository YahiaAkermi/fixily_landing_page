import { useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
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

  useEffect(() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng);
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
      <div className="flex gap-2 items-center justify-evenly w-full max-w-[70%] max-md:hidden">
        <Select>
          <SelectTrigger className="text-myblack font-bold w-[180px] bg-secondary">
            <img src="/assets/images/translate.png" alt="translate" />
            <SelectValue placeholder={navigator.language} className="hidden" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <DropdownMenu>
          <DropdownMenuTrigger className="text-myblack text-base font-medium flex items-center gap-2">
            Services
            <img src="/assets/images/arrow_down.png" alt="arrow down" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
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
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button className="border-none bg-transparent">
              <img src="/assets/images/burger_menu.png" alt="burger menu" />
            </Button>
          </SheetTrigger>
          <SheetContent></SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
