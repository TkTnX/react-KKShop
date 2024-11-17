import { useState } from "react";
import { useOrderStore } from "../../../../store/useOrderStore";
import { Button } from "../../../ui/button";
import { Input } from "../../../ui/input";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "../../../ui/sheet";

const ChangeAddressMenu = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  const changeAddress = useOrderStore((state) => state.changeAddress);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const street = formData.get("street");
    const apartment = formData.get("apartment");

    if (street && apartment) {
      changeAddress(`${street}, ${apartment}`);
      setOpen(false);
    }
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="pt-36 ">
        <SheetTitle className="font-bold text-5xl">новый адрес</SheetTitle>
        <SheetDescription></SheetDescription>
        <form onSubmit={handleSubmit}>
          <Input name="street" placeholder="Улица и Дом" className="mt-7" />
          <Input name="apartment" placeholder="Квартира" className="mt-5" />
          <Button className="w-full mt-12">Применить</Button>
        </form>
      </SheetContent>
    </Sheet>
  );
};

export default ChangeAddressMenu;
