import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Switch, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../context/ThemeContext';

export default function ProfileScreen() {
    const { theme, isDark, toggleTheme, language, toggleLanguage, t, isRTL } = useTheme();

    const options = [
        { icon: 'settings-outline', label: t.settings },
        { icon: 'card-outline', label: t.paymentMethods },
        { icon: 'location-outline', label: t.addresses },
        { icon: 'help-circle-outline', label: t.helpSupport },
    ];

    return (
        <ScrollView
            style={[styles.container, { backgroundColor: theme.background }]}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.contentContainer}
        >
            <View style={styles.header}>
                <Image
                    source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png' }}
                    style={styles.avatar}
                />
                <Text style={[styles.name, { color: theme.text }]}>Mohammed Yahsop</Text>
                <Text style={[styles.email, { color: theme.textSecondary }]}>mohammed@example.com</Text>
            </View>

            {/* Theme & Language Controls */}
            <View style={[styles.controlsContainer, { backgroundColor: theme.cardBackground }]}>
                <View style={styles.controlItem}>
                    <View style={styles.controlLeft}>
                        <View style={[styles.iconBox, { backgroundColor: theme.border }]}>
                            <Ionicons name={isDark ? "moon" : "sunny"} size={20} color={theme.text} />
                        </View>
                        <Text style={[styles.controlLabel, { color: theme.text }]}>{t.darkMode}</Text>
                    </View>
                    <Switch
                        value={isDark}
                        onValueChange={toggleTheme}
                        trackColor={{ false: '#E5E5EA', true: '#34C759' }}
                        thumbColor="#FFFFFF"
                    />
                </View>

                <View style={[styles.divider, { backgroundColor: theme.border }]} />

                <TouchableOpacity style={styles.controlItem} onPress={toggleLanguage}>
                    <View style={styles.controlLeft}>
                        <View style={[styles.iconBox, { backgroundColor: theme.border }]}>
                            <Ionicons name="language" size={20} color={theme.text} />
                        </View>
                        <Text style={[styles.controlLabel, { color: theme.text }]}>{t.language}</Text>
                    </View>
                    <View style={styles.languageToggle}>
                        <Text style={[styles.langText, { color: theme.textSecondary }]}>
                            {language === 'ar' ? 'العربية' : 'English'}
                        </Text>
                        <Ionicons name={isRTL ? "chevron-back" : "chevron-forward"} size={20} color={theme.textSecondary} />
                    </View>
                </TouchableOpacity>
            </View>

            {/* Options */}
            <View style={[styles.optionsContainer, { backgroundColor: theme.cardBackground }]}>
                {options.map((option, index) => (
                    <TouchableOpacity key={index} style={styles.optionItem}>
                        <View style={styles.optionLeft}>
                            <View style={[styles.iconBox, { backgroundColor: theme.border }]}>
                                <Ionicons name={option.icon} size={20} color={theme.text} />
                            </View>
                            <Text style={[styles.optionLabel, { color: theme.text }]}>{option.label}</Text>
                        </View>
                        <Ionicons name={isRTL ? "chevron-back" : "chevron-forward"} size={20} color={theme.textSecondary} />
                    </TouchableOpacity>
                ))}
            </View>

            <TouchableOpacity style={styles.logoutBtn}>
                <Text style={styles.logoutText}>{t.logout}</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        padding: 20,
        paddingBottom: 40,
    },
    header: {
        alignItems: 'center',
        marginBottom: 25,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 15,
    },
    name: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    email: {
        fontSize: 14,
    },
    controlsContainer: {
        borderRadius: 20,
        padding: 15,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        elevation: 2,
    },
    controlItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 5,
    },
    controlLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    controlLabel: {
        fontSize: 16,
        fontWeight: '500',
    },
    languageToggle: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
    langText: {
        fontSize: 15,
        fontWeight: '500',
    },
    divider: {
        height: 1,
        marginVertical: 5,
    },
    optionsContainer: {
        borderRadius: 20,
        padding: 10,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        elevation: 2,
    },
    optionItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'transparent',
    },
    optionLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconBox: {
        width: 35,
        height: 35,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
    },
    optionLabel: {
        fontSize: 16,
        fontWeight: '500',
    },
    logoutBtn: {
        marginTop: 30,
        backgroundColor: '#FF3B30',
        padding: 15,
        borderRadius: 15,
        alignItems: 'center',
    },
    logoutText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,
    },
});
