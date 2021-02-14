import facebookIcon from '../assets/icons/facebook.png';
import googleIcon from '../assets/icons/google-logo.png'
import { useTranslation } from "react-i18next";

 const SocialBtns = () => {
     const { t } = useTranslation();
  return [
    {
        icon: facebookIcon,
        alt: 'facebook icon',
        text: t('Continue with Facebook')
    },
    {
        icon: googleIcon,
        alt: 'google icon',
        text: t('Continue with Google')
    }
];
}

export default SocialBtns;