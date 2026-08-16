import PageHeading from "../../Components/PageHeading";
import DocumentLibrary from "../../Components/DocumentLibrary";
import documentLibrary from "../../data/documentLibrary";
import { useLanguage } from "../../context/LanguageContext";
import { pageTitle } from "../../helper";

export default function DocumentsPage() {
  const { language } = useLanguage();
  const data = documentLibrary[language] || documentLibrary.me;
  const isMontenegrin = language === "me";

  const breadcrumbsData = {
    title: isMontenegrin ? "DOKUMENTA" : "DOCUMENTS",
    disableAnimation: true,
    breadcrumbs: [
      { label: isMontenegrin ? "Početna" : "Home", link: "/" },
      { label: isMontenegrin ? "Dokumenta" : "Documents", active: true },
    ],
  };

  pageTitle(
    isMontenegrin
      ? "Dokumenta | Agencija za upravljanje prirodnim dobrima"
      : "Documents | Agency for Management of Natural Assets",
    {
      description: isMontenegrin
        ? "Javna dokumentacija Agencije za upravljanje prirodnim dobrima Bijelo Polje: osnivački akti, odluke, programi, izvještaji, planovi, pravilnici i zakoni."
        : "Public documentation of the Agency for Management of Natural Assets Bijelo Polje: founding acts, decisions, programmes, reports, plans, rulebooks and laws.",
      path: "/documents",
      image: "/assets/img/about_heading_bg.jpg",
      locale: language,
      structuredData: {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: isMontenegrin ? "Dokumenta" : "Documents",
        description: data.description,
        url: "https://aupd.me/documents",
        isPartOf: {
          "@type": "WebSite",
          name: "Agencija za upravljanje prirodnim dobrima",
          url: "https://aupd.me/",
        },
      },
    },
  );

  return (
    <>
      <PageHeading data={breadcrumbsData} />
      <DocumentLibrary data={data} />
    </>
  );
}
