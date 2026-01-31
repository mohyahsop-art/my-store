import React from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../context/ThemeContext';

export default function ExploreScreen() {
    const { theme, t, isRTL } = useTheme();

    const clothingItems = [
        { id: 1, name: 'بلوزة أنيقة', price: '79', image: 'https://images.unsplash.com/photo-1485218126466-34e6392ec754?w=400' },
        { id: 2, name: 'سترة جلد', price: '299', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400' },
        { id: 3, name: 'فستان كاجوال', price: '139', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400' },
        { id: 4, name: 'حذاء رياضي', price: '249', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400' },
        { id: 5, name: 'شنطة يد', price: '189', image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400' },
        { id: 6, name: 'قبعة صيفية', price: '49', image: 'https://images.unsplash.com/photo-1529958030586-3aae4ca485ff?w=400' },
    ];

    return (
        <View style={[styles.container, { backgroundColor: theme.background }]}>
            {/* Search Bar */}
            <View style={[styles.searchContainer, { backgroundColor: theme.cardBackground }]}>
                <Ionicons name="search" size={20} color={theme.textSecondary} />
                <TextInput
                    placeholder={t.searchPlaceholder}
                    style={[styles.input, { color: theme.text }]}
                    placeholderTextColor={theme.textSecondary}
                />
                <TouchableOpacity>
                    <Ionicons name="options-outline" size={22} color={theme.text} />
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={styles.gridContainer} showsVerticalScrollIndicator={false}>
                {clothingItems.map((item) => (
                    <TouchableOpacity key={item.id} style={[styles.card, { backgroundColor: theme.cardBackground }]} activeOpacity={0.8}>
                        <Image
                            source={{ uri: item.image }}
                            style={styles.image}
                        />
                        <View style={styles.cardContent}>
                            <Text style={[styles.cardTitle, { color: theme.text, textAlign: isRTL ? 'right' : 'left' }]}>{item.name}</Text>
                            <Text style={[styles.cardPrice, { color: theme.text, textAlign: isRTL ? 'right' : 'left' }]}>{item.price} ر.س</Text>
                        </View>
                        <TouchableOpacity style={styles.favoriteBtn}>
                            <Ionicons name="heart-outline" size={18} color={theme.text} />
                        </TouchableOpacity>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
        borderRadius: 15,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        elevation: 2,
        gap: 10,
    },
    input: {
        flex: 1,
        fontSize: 16,
        textAlign: 'right',
    },
    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingBottom: 20,
    },
    card: {
        width: '48%',
        borderRadius: 20,
        padding: 10,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        elevation: 2,
    },
    image: {
        width: '100%',
        height: 180,
        borderRadius: 15,
        backgroundColor: '#EEE',
        marginBottom: 10,
    },
    cardContent: {
        paddingHorizontal: 5,
    },
    cardTitle: {
        fontWeight: '600',
        fontSize: 14,
        marginBottom: 5,
    },
    cardPrice: {
        fontWeight: 'bold',
        fontSize: 15,
    },
    favoriteBtn: {
        position: 'absolute',
        top: 18,
        right: 18,
        backgroundColor: '#FFF',
        width: 32,
        height: 32,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        elevation: 3,
    },
});
