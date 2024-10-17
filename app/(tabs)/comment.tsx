import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

const CensusScreen = () => {
    return (
        <View style={styles.container}>
        {/* Logo and Census Title */}
        <Image source={require('@/assets/images/header.png')} style={styles.logo} />
        
        {/* Comment Section */}
        <Text style={styles.commentLabel}>COMMENT</Text>
        <TextInput
            style={styles.textInput}
            placeholder="Enter your comments here..."
            multiline
            numberOfLines={4}
            placeholderTextColor="#888"
        />
        
        {/* Thank You Text */}
        <Text style={styles.thankYouText}>THANK YOU FOR YOUR PARTICIPATION</Text>
        
        {/* Log Out Button */}
        <TouchableOpacity style={styles.logoutButton}>
            <Text style={styles.logoutButtonText}>Log out</Text>
        </TouchableOpacity>
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e6e6e6',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    logo: {
        width: 420,
        height: 220,

        top: -130,

    },
    censusTitle: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#000',
    },
    yearContainer: {
        flexDirection: 'row',
        marginVertical: 5,
    },
    yearText: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#000',
    },
    yearTextYellow: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#FFD700',
    },
    censusSubTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#D32F2F',
    },
    censusSubText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 5,
    },
    sloganText: {
        fontSize: 14,
        fontStyle: 'italic',
        color: '#555',
        marginBottom: 30,
    },
    commentLabel: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        alignSelf: 'flex-start',
        marginBottom: 10,
        top: -20,
    },
    textInput: {
        height: 100,
        width: '100%',
        borderColor: '#888',
        borderWidth: 1,
        padding: 10,
        textAlignVertical: 'top',
        backgroundColor: '#fff',
        marginBottom: 30,
        top: -20,
        
    },
    thankYouText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 20,
        top: -20,
    },
    logoutButton: {
        backgroundColor: '#FF8C00',
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 5,
    },
    logoutButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default CensusScreen;
