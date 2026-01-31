import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../context/ThemeContext';

export default function CartScreen() {
    const { theme, t, isRTL } = useTheme();

    const cartItems = [
        { id: '1', name: 'تيشيرت كلاسيكي', price: 89, quantity: 2, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200' },
        { id: '2', name: 'بنطلون جينز', price: 129, quantity: 1, image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=200' },
        { id: '3', name: 'فستان صيفي', price: 149, quantity: 1, image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=200' },
    ];

    const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const deliveryFee = 25;

    return (
        <View style={[styles.container, { backgroundColor: theme.background }]}>
            <Text style={[styles.headerTitle, { color: theme.text, textAlign: isRTL ? 'right' : 'left' }]}>{t.myCart}</Text>

            <FlatList
                data={cartItems}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <View style={[styles.cartItem, { backgroundColor: theme.cardBackground }]}>
                        <Image source={{ uri: item.image }} style={styles.itemImage} />
                        <View style={styles.itemInfo}>
                            <Text style={[styles.itemName, { color: theme.text, textAlign: isRTL ? 'right' : 'left' }]}>{item.name}</Text>
                            <Text style={[styles.itemPrice, { color: theme.textSecondary, textAlign: isRTL ? 'right' : 'left' }]}>{item.price} ر.س</Text>
                        </View>
                        <View style={styles.quantityContainer}>
                            <TouchableOpacity style={[styles.qtyBtn, { backgroundColor: theme.border }]}>
                                <Ionicons name="remove" size={16} color={theme.text} />
                            </TouchableOpacity>
                            <Text style={[styles.qtyText, { color: theme.text }]}>{item.quantity}</Text>
                            <TouchableOpacity style={[styles.qtyBtn, { backgroundColor: theme.border }]}>
                                <Ionicons name="add" size={16} color={theme.text} />
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            />

            <View style={[styles.footer, { backgroundColor: theme.cardBackground }]}>
                <View style={styles.summaryRow}>
                    <Text style={[styles.summaryValue, { color: theme.text }]}>{total} ر.س</Text>
                    <Text style={[styles.summaryLabel, { color: theme.textSecondary }]}>{t.subtotal}</Text>
                </View>
                <View style={styles.summaryRow}>
                    <Text style={[styles.summaryValue, { color: theme.text }]}>{deliveryFee} ر.س</Text>
                    <Text style={[styles.summaryLabel, { color: theme.textSecondary }]}>{t.delivery}</Text>
                </View>
                <View style={[styles.divider, { backgroundColor: theme.border }]} />
                <View style={styles.totalRow}>
                    <Text style={[styles.totalPrice, { color: theme.text }]}>{total + deliveryFee} ر.س</Text>
                    <Text style={[styles.totalLabel, { color: theme.text }]}>{t.total}</Text>
                </View>
                <TouchableOpacity style={[styles.checkoutBtn, { backgroundColor: theme.primary }]}>
                    <Text style={[styles.checkoutText, { color: theme.primaryInverse }]}>{t.checkout}</Text>
                    <Ionicons name={isRTL ? "arrow-back" : "arrow-forward"} size={20} color={theme.primaryInverse} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    cartItem: {
        padding: 15,
        borderRadius: 15,
        marginBottom: 15,
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.05,
        elevation: 2,
    },
    itemImage: {
        width: 70,
        height: 70,
        borderRadius: 12,
        backgroundColor: '#EEE',
    },
    itemInfo: {
        flex: 1,
        marginRight: 15,
    },
    itemName: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 5,
    },
    itemPrice: {
        fontWeight: '600',
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    qtyBtn: {
        width: 30,
        height: 30,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    qtyText: {
        fontWeight: 'bold',
        fontSize: 15,
    },
    footer: {
        padding: 20,
        borderRadius: 20,
        marginTop: 10,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        elevation: 3,
    },
    summaryRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    summaryLabel: {
        fontSize: 15,
    },
    summaryValue: {
        fontSize: 15,
        fontWeight: '600',
    },
    divider: {
        height: 1,
        marginVertical: 12,
    },
    totalRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    totalLabel: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    totalPrice: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    checkoutBtn: {
        padding: 18,
        borderRadius: 25,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 10,
    },
    checkoutText: {
        fontWeight: 'bold',
        fontSize: 16,
    },
});