// import Contacts from "./components/Contacts/Contacts";
// import HomeSection from "./components/HomeSection";
// import Servisec from "./components/Services/Servisec";

import Contacts from "./components/Contacts/Contacts";
import HomeSection from "./components/Hero/HomeSection";
import Servisec from "./components/Services/Servisec";

export default function Home() {
  return (
    <>
      <HomeSection />
      <Servisec />
      <Contacts />
    </>
  );
}
