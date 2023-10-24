import React, { useContext } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import colors from '../../utils/colors';
import { loginStrings, modalDialogStrings } from '../../utils/strings';
import { spotifyAuthConfig } from '../../utils/constants';

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { authorize } from 'react-native-app-auth';

import { ModalContext } from '../../context/modal';

/**
 * Handles user login for the application.
 * This function initiates the login process by authorizing the user using a specified authentication configuration.
 * @param {object} navigation - The navigation object used to navigate the user to the main screen.
 * @returns {void}
 */
const onLogin = async (navigation) => {
	try {
		const result = await authorize(spotifyAuthConfig);
		if (result.accessToken) {
			console.log("token: " + result.accessToken);
			const expirationDate = new Date(result.accessTokenExpirationDate).getTime();
			await AsyncStorage.setItem('spotifyToken', result.accessToken);
			await AsyncStorage.setItem('tokenExpirationDate', expirationDate.toString());
			navigation.navigate('HomeStack');
		}
	} catch (error) {
		console.log(JSON.stringify(error));
	}
};

/*
async function refreshLogin(refreshToken) {
		const result = await refresh(this.spotifyAuthConfig, {
				refreshToken: refreshToken,
		});
		return result;
}*/

const LoginScreen = () => {
	const navigation = useNavigation();
	const { openModal } = useContext(ModalContext);

	return (
		<SafeAreaView style={styles.background}>
			<View style={styles.logoView}>
				<Entypo name='spotify' size={90} color={colors.spotifyWhite}></Entypo>
				<Text style={[{ marginTop: 70 }, styles.logoText]}> {loginStrings.loginString1} {loginStrings.loginString2}</Text>
			</View>
			<View style={styles.touchableOpacityView}>
				<TouchableOpacity onPress={() => onLogin(navigation)} style={[{ backgroundColor: colors.spotifyGreen }, styles.genericTouchableOpacity]}>
					<Text style={[styles.touchableOpacityText, { color: 'black' }]}> {loginStrings.signInWithSpotify}</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={[{ marginTop: 15, borderColor: colors.spotifyWhite, borderWidth: 0.7, }, styles.genericTouchableOpacity]}
					onPress={() => openModal(modalDialogStrings.undeDevelopment)}>
					<AntDesign name='google' size={23} color={colors.spotifyWhite}></AntDesign>
					<Text style={styles.touchableOpacityText}> {loginStrings.signInWithGoogle}</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={[{ marginTop: 15, borderColor: colors.spotifyWhite, borderWidth: 0.7, }, styles.genericTouchableOpacity]}
					onPress={() => openModal(modalDialogStrings.undeDevelopment)}>
					<MaterialCommunityIcons name='facebook' size={26} color={colors.spotifyWhite}></MaterialCommunityIcons>
					<Text style={styles.touchableOpacityText}> {loginStrings.signInWithFacebook}</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => openModal(modalDialogStrings.undeDevelopment)} style={styles.genericTouchableOpacity}>
					<Text style={[{ paddingTop: 10 }, styles.touchableOpacityText]}> {loginStrings.signIn}</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};

export default LoginScreen;