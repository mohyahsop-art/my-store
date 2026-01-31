import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(false);
    const [language, setLanguage] = useState('ar'); // 'ar' or 'en'

    const toggleTheme = () => setIsDark(!isDark);
    const toggleLanguage = () => setLanguage(language === 'ar' ? 'en' : 'ar');

    const theme = {
        // Colors
        background: isDark ? '#000000' : '#F2F2F7',
        cardBackground: isDark ? '#1C1C1E' : '#FFFFFF',
        text: isDark ? '#FFFFFF' : '#000000',
        textSecondary: isDark ? '#8E8E93' : '#8E8E93',
        primary: isDark ? '#232323ff' : '#000000',
        primaryInverse: isDark ? '#ffffffff' : '#FFFFFF',
        border: isDark ? '#2C2C2E' : '#F2F2F7',

        // Gradients & Accents
        accentGradient: isDark
            ? ['#1C1C1E', '#2C2C2E']
            : ['#000000', '#1a1a1a'],
    };

    const translations = {
        ar: {
            // Home
            goodMorning: 'مرحباً، ☀️',
            userName: 'محمد',
            discount: 'خصم 50%',
            discountDesc: 'على جميع الملابس الصيفية',
            shopNow: 'تسوق الآن',
            categories: 'الفئات',
            popular: 'الأكثر مبيعاً 🔥',
            newArrivals: 'وصل حديثاً ✨',

            // Categories
            tshirts: 'تيشيرتات',
            dresses: 'فساتين',
            pants: 'بناطيل',
            shoes: 'أحذية',
            accessories: 'إكسسوارات',

            // Explore
            searchPlaceholder: 'ابحث عن الملابس...',

            // Cart
            myCart: 'سلة التسوق',
            subtotal: 'المجموع الفرعي',
            delivery: 'التوصيل',
            total: 'الإجمالي',
            checkout: 'إتمام الطلب',

            // Profile
            settings: 'الإعدادات',
            paymentMethods: 'طرق الدفع',
            addresses: 'العناوين',
            helpSupport: 'المساعدة والدعم',
            logout: 'تسجيل الخروج',
            darkMode: 'الوضع الداكن',
            language: 'اللغة',

            // Bottom Nav
            home: 'الرئيسية',
            explore: 'استكشف',
            cart: 'السلة',
            profile: 'الملف',
        },
        en: {
            // Home
            goodMorning: 'Good Morning, ☀️',
            userName: 'Mohammed',
            discount: '50% OFF',
            discountDesc: 'On all summer clothing',
            shopNow: 'Shop Now',
            categories: 'Categories',
            popular: 'Popular Now 🔥',
            newArrivals: 'New Arrivals ✨',

            // Categories
            tshirts: 'T-Shirts',
            dresses: 'Dresses',
            pants: 'Pants',
            shoes: 'Shoes',
            accessories: 'Accessories',

            // Explore
            searchPlaceholder: 'Search for clothes...',

            // Cart
            myCart: 'My Cart',
            subtotal: 'Subtotal',
            delivery: 'Delivery',
            total: 'Total',
            checkout: 'Checkout',

            // Profile
            settings: 'Settings',
            paymentMethods: 'Payment Methods',
            addresses: 'Addresses',
            helpSupport: 'Help & Support',
            logout: 'Log Out',
            darkMode: 'Dark Mode',
            language: 'Language',

            // Bottom Nav
            home: 'Home',
            explore: 'Explore',
            cart: 'Cart',
            profile: 'Profile',
        },
    };

    return (
        <ThemeContext.Provider
            value={{
                theme,
                isDark,
                toggleTheme,
                language,
                toggleLanguage,
                t: translations[language],
                isRTL: language === 'ar',
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};
