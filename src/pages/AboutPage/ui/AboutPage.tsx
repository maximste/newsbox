import { useTranslation } from 'react-i18next';

const AboutPage = () => {
    const {t} = useTranslation('about')
    
    return (
        <div>
            {t('Содержание страницы о нас')}
        </div>
    );
};

export default AboutPage;