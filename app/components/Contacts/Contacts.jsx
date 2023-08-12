import EmailContacts from "./EmailContacts";
import FormContacts from "./FormContacts";
import PhoneContacts from "./PhoneContacts";
import SocialCommunities from "./SocialCommunities";
import TitleContact from "./TitleContact";

const Contacts = () => {
  //  contacts_section_mobile contacts_section_tablet contacts_section_desktop
  return (
    <section
      id="contacts"
      className="h-[856px] md:h-[691px] xl:h-[762px] bg-contacts_section_mobile md:bg-contacts_section_tablet xl:bg-contacts_section_desktop bg-no-repeat  bg-cover py-14 md:py-16 xl:py-20 "
    >
      <div className="container-main xl:p-6 ">
        <TitleContact />
        <div className="flex flex-col gap-3 xl:flex-row">
          <div className="text-[14px] md:text-[16px] xl:text-[18px]  md:ml-9  xl:flex-1 xl:flex-col xl:ml-0 ">
            <div className="flex flex-col xl:w-[311px] xl:ml-32 md:flex-row md:gap-[90px] xl:flex-col xl:justify-between">
              <div>
                <PhoneContacts />
                <EmailContacts />
              </div>
              <div>
                <SocialCommunities />
              </div>
            </div>
          </div>
          <div className="xl:flex-1">
            <FormContacts />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
