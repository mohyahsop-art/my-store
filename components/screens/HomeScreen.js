import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../context/ThemeContext';

export default function HomeScreen() {
    const { theme, t, isRTL } = useTheme();

    const categories = [t.tshirts, t.dresses, t.pants, t.shoes, t.accessories];

    return (
        <ScrollView style={[styles.container, { backgroundColor: theme.background }]} showsVerticalScrollIndicator={false}>
            {/* Welcome Section */}
            <View style={styles.welcomeSection}>
                <Text style={[styles.greeting, { color: theme.textSecondary, textAlign: isRTL ? 'right' : 'left' }]}>{t.goodMorning}</Text>
                <Text style={[styles.username, { color: theme.text, textAlign: isRTL ? 'right' : 'left' }]}>{t.userName}</Text>
            </View>

            {/* Banner */}
            <View style={[styles.banner, { backgroundColor: theme.primary }]}>
                <View style={styles.bannerTextContainer}>
                    <Text style={[styles.bannerTitle, { textAlign: isRTL ? 'right' : 'left' }]}>{t.discount}</Text>
                    <Text style={[styles.bannerSubtitle, { textAlign: isRTL ? 'right' : 'left' }]}>{t.discountDesc}</Text>
                    <TouchableOpacity style={[styles.shopButton, { backgroundColor: theme.primaryInverse, alignSelf: isRTL ? 'flex-end' : 'flex-start' }]}>
                        <Text style={[styles.shopButtonText, { color: theme.primary }]}>{t.shopNow}</Text>
                    </TouchableOpacity>
                </View>
                <Image
                    source={{ uri: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400' }}
                    style={styles.bannerImage}
                />
            </View>

            {/* Categories */}
            <Text style={[styles.sectionTitle, { color: theme.text, textAlign: isRTL ? 'right' : 'left' }]}>{t.categories}</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesList}>
                {categories.map((item, index) => (
                    <TouchableOpacity key={index} style={[styles.categoryCard, { backgroundColor: index === 0 ? theme.primary : theme.cardBackground }, index === 0 && styles.activeCategory]}>
                        <Text style={[styles.categoryText, { color: index === 0 ? theme.primaryInverse : theme.text }, index === 0 && styles.activeCategoryText]}>{item}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            {/* Popular Items */}
            <Text style={[styles.sectionTitle, { color: theme.text, textAlign: isRTL ? 'right' : 'left' }]}>{t.popular}</Text>
            <View style={styles.popularContainer}>
                {[
                    { name: 'تيشيرت كلاسيكي', price: '89', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400' },
                    { name: 'فستان صيفي', price: '149', image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400' },
                    { name: 'بنطلون جينز', price: '129', image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400' },
                ].map((item, index) => (
                    <View key={index} style={[styles.clothingCard, { backgroundColor: theme.cardBackground }]}>
                        <Image
                            source={{ uri: item.image }}
                            style={styles.clothingImage}
                        />
                        <View style={styles.clothingInfo}>
                            <Text style={[styles.clothingName, { color: theme.text, textAlign: isRTL ? 'right' : 'left' }]}>{item.name}</Text>
                            <Text style={[styles.clothingPrice, { color: theme.text, textAlign: isRTL ? 'right' : 'left' }]}>{item.price} ر.س</Text>
                            <View style={styles.ratingContainer}>
                                <Ionicons name="star" size={14} color="#FFD700" />
                                <Text style={[styles.rating, { color: theme.textSecondary }]}>4.8</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={[styles.addButton, { backgroundColor: theme.primary }]}>
                            <Ionicons name="bag-add-outline" size={24} color={theme.primaryInverse} />
                        </TouchableOpacity>
                    </View>
                ))}
            </View>


            <View style={{ height: 20 }} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F2F7',
        paddingHorizontal: 20,
    },
    welcomeSection: {
        marginTop: 20,
        marginBottom: 20,
    },
    greeting: {
        fontSize: 16,
        color: '#8E8E93',
        textAlign: 'right',
    },
    username: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'right',
    },
    banner: {
        backgroundColor: '#1a1a1a',
        borderRadius: 25,
        padding: 30, // Increased padding for more space
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 30,
        overflow: 'hidden',
        minHeight: 180, // Increased minimum height
    },
    bannerTextContainer: {
        flex: 1,
    },
    bannerTitle: {
        fontSize: 32, // Larger title
        fontWeight: 'bold',
        color: '#FFF',
        textAlign: 'right',
    },
    bannerSubtitle: {
        fontSize: 16, // Larger subtitle
        color: '#CCC',
        marginBottom: 15,
        textAlign: 'right',
    },
    shopButton: {
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
        alignSelf: 'flex-end',
    },
    shopButtonText: {
        fontWeight: 'bold',
        color: '#000',
    },
    bannerImage: {
        width: 120, // Larger image
        height: 120, // Larger image
        borderRadius: 60,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 15,
        color: '#000',
        textAlign: 'right',
    },
    categoriesList: {
        marginBottom: 25,
    },
    categoryCard: {
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
        marginRight: 10,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        elevation: 2,
    },
    activeCategory: {
        backgroundColor: '#000',
    },
    categoryText: {
        fontWeight: '600',
        color: '#000',
    },
    activeCategoryText: {
        color: '#FFF',
    },
    popularContainer: {
        gap: 15,
        paddingBottom: 20,
    },
    clothingCard: {
        backgroundColor: '#FFF',
        borderRadius: 20,
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.05,
        elevation: 3,
    },
    clothingImage: {
        width: 80,
        height: 80,
        borderRadius: 15,
        backgroundColor: '#EEE',
    },
    clothingInfo: {
        flex: 1,
        marginLeft: 15,
        marginRight: 15,
    },
    clothingName: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 5,
        textAlign: 'right',
    },
    clothingPrice: {
        color: '#000',
        fontWeight: '800',
        fontSize: 16,
        textAlign: 'right',
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
        justifyContent: 'flex-end',
    },
    rating: {
        fontSize: 12,
        color: '#8E8E93',
        marginLeft: 5,
    },
    addButton: {
        backgroundColor: '#000',
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    newArrivalsContainer: {
        marginBottom: 25,
    },
    newArrivalCard: {
        backgroundColor: '#FFF',
        borderRadius: 15,
        padding: 10,
        marginRight: 15,
        width: 140,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        elevation: 2,
    },
    newArrivalImage: {
        width: '100%',
        height: 150,
        borderRadius: 10,
        backgroundColor: '#EEE',
        marginBottom: 10,
    },
    newArrivalName: {
        fontWeight: '600',
        fontSize: 14,
        marginBottom: 5,
        textAlign: 'right',
    },
    newArrivalPrice: {
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'right',
    },
});
