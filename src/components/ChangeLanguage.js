import { useTranslation } from 'react-i18next';

const ChangeLanguage = () => {
    const { t, i18n } = useTranslation();
    return (
        <button
            onClick={() => {
                i18n.changeLanguage(
                    i18n.language === 'en' ? 'es' : 'en'
                )
            }}
            className='btn btn-link text-white ms-3 ms-xl-0'
            type='submit'
        >
            <img src={`${process.env.PUBLIC_URL}/images/${t("flag")}`} alt="" />
        </button>
    )
}

export default ChangeLanguage