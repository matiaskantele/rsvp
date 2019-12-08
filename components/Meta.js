import Head from "next/head";
import { useTranslation } from "react-i18next";

const Meta = ({ route }) => {
  const { t } = useTranslation();
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link rel="shortcut icon" href="favicon.ico" />
      <link rel="stylesheet" type="text/css" href="nprogress.css" />
      <link
        href="https://fonts.googleapis.com/css?family=Marck+Script|Montserrat:500&display=swap&subset=cyrillic"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap&subset=cyrillic"
        rel="stylesheet"
      />
      <title>{t(route)}</title>
    </Head>
  );
};

export default Meta;
