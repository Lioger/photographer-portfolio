import { useSelector } from 'react-redux';
import Head from 'next/head';
import { Container, PageTitle, TextBlock } from '../../styles/GlobalStyle';
import { ContactInfoSection, ContactLink, ContactLinkIcon } from './../../styles/pages/cooperation';
import { pageAnimation } from '../../animations/globalAnimations';

const Contact = () => {
  const contactTexts = useSelector((state) => state.texts).pages.find((page) => page.id === 'cooperation');

  return (
    <Container variants={pageAnimation} initial="hidden" animate="show" exit="exit">
      <Head>
        <title>{contactTexts.title}</title>
      </Head>
      <PageTitle>{contactTexts.pageTitles[0]}</PageTitle>
      {contactTexts.terms.map((term, index) => (
        <TextBlock key={index}>{term}</TextBlock>
      ))}
      <PageTitle>{contactTexts.pageTitles[1]}</PageTitle>
      <TextBlock>{contactTexts.description}</TextBlock>
      <ContactInfoSection>
        {contactTexts.contactLinks.map((contactLink) => (
          <ContactLink key={contactLink.id} href={contactLink.link} target="_blank" rel="noopener noreferrer">
            <ContactLinkIcon src={contactLink.iconPath.src} alt={contactLink.id} />
            {contactLink.text}
          </ContactLink>
        ))}
      </ContactInfoSection>
    </Container>
  );
};

export default Contact;
