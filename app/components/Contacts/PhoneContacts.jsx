const PhoneContacts = () => {
  return (
    <div className="mb-6 flex gap-5 justify-end md:ml-8 xl:mb-16">
      <div className="flex flex-col xl:flex-3 ">
        <span>+38 (098) 12 34 567</span> <span>+38 (073) 12 34 567</span>
      </div>
      <div className="w-[81px]">
        <span className="  text-[12px] font-thin">Phone number</span>
      </div>
    </div>
  );
};

export default PhoneContacts;
