import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../context/ThemeContext';

export default function BottomNavBar({ activeTab, onTabChange }) {
    const { theme, t, isRTL } = useTheme();

    const tabs = [
        { name: 'Home', icon: 'home-outline', activeIcon: 'home', label: t.home },
        { name: 'Explore', icon: 'grid-outline', activeIcon: 'grid', label: t.explore },
        { name: 'Cart', icon: 'cart-outline', activeIcon: 'cart', label: t.cart },
        { name: 'Profile', icon: 'person-outline', activeIcon: 'person', label: t.profile },
    ];

    return (
        <View style={[styles.container, { backgroundColor: theme.cardBackground }]}>
            {tabs.map((tab) => {
                const isActive = activeTab === tab.name;
                return (
                    <TouchableOpacity
                        key={tab.name}
                        style={styles.tab}
                        onPress={() => onTabChange(tab.name)}
                        activeOpacity={0.7}
                    >
                        <View style={[styles.iconContainer, isActive && { backgroundColor: theme.primary }]}>
                            <Ionicons
                                name={isActive ? tab.activeIcon : tab.icon}
                                size={24}
                                color={isActive ? theme.primaryInverse : theme.textSecondary}
                            />
                        </View>
                        {isActive && (
                            <Text style={[styles.label, { color: theme.text }]}>{tab.label}</Text>
                        )}
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 20,
        marginHorizontal: 20,
        marginBottom: Platform.OS === 'ios' ? 25 : 15,
        borderRadius: 30,
        // Premium Shadow
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 8,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
    tab: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 8,
    },
    iconContainer: {
        padding: 8,
        borderRadius: 20,
    },
    label: {
        fontSize: 12,
        fontWeight: '600',
        marginLeft: 5,
    },
});
