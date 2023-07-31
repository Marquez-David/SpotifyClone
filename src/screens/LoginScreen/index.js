import React, { useEffect } from 'react';
import { SafeAreaView, View, Text, Pressable } from 'react-native';

import styles from './styles';
import colors from '../../utils/Colors';
import { LoginStrings } from '../../utils/Strings';
import { spotifyAuthConfig } from '../../utils/Constants';

import { useNavigation } from "@react-navigation/native";

import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

/* Importing a package using curly braces {} allows you to specifically import functions from the source 
file, while importing without curly braces imports the default export from the source file. */
import { authorize } from 'react-native-app-auth';

import AsyncStorage from "@react-native-async-storage/async-storage";


async function onLogin(navigation) {
	try {
		const result = await authorize(spotifyAuthConfig);
		if (result.accessToken) {
			console.log("token: " + result.accessToken);
			const expirationDate = new Date(result.accessTokenExpirationDate).getTime();
			await AsyncStorage.setItem('spotifyToken', result.accessToken);
			await AsyncStorage.setItem('tokenExpirationDate', expirationDate.toString());
			navigation.navigate('Main');
		}
		//return result;
	} catch (error) {
		console.log(JSON.stringify(error));
	}
}

/*
async function refreshLogin(refreshToken) {
		const result = await refresh(this.spotifyAuthConfig, {
				refreshToken: refreshToken,
		});
		return result;
}*/

const LoginScreen = () => {
	const navigation = useNavigation();
	return (
		<SafeAreaView style={styles.background}>
			<View style={styles.logoView}>
				<Entypo name='spotify' size={90} color={colors.spotifyWhite}></Entypo>
				<Text style={[{ marginTop: 70 }, styles.logoText]}> {LoginStrings.loginString1} {LoginStrings.loginString2}</Text>
			</View>
			<View style={styles.pressableView}>
				<Pressable onPress={() => onLogin(navigation)} style={[{ backgroundColor: colors.spotifyGreen }, styles.genericPressable]}>
					<Text style={[styles.pressableText, { color: 'black' }]}> {LoginStrings.signInWithSpotify}</Text>
				</Pressable>
				<Pressable style={[{ marginTop: 15, borderColor: colors.spotifyWhite, borderWidth: 0.7, }, styles.genericPressable]}>
					<AntDesign name='google' size={23} color={colors.spotifyWhite}></AntDesign>
					<Text style={styles.pressableText}> {LoginStrings.signInWithGoogle}</Text>
				</Pressable>
				<Pressable style={[{ marginTop: 15, borderColor: colors.spotifyWhite, borderWidth: 0.7, }, styles.genericPressable]}>
					<MaterialCommunityIcons name='facebook' size={26} color={colors.spotifyWhite}></MaterialCommunityIcons>
					<Text style={styles.pressableText}> {LoginStrings.signInWithFacebook}</Text>
				</Pressable>
				<Pressable onPress={() => navigation.navigate('Main')} style={styles.genericPressable}>
					<Text style={[{ paddingTop: 10 }, styles.pressableText]}> {LoginStrings.signIn}</Text>
				</Pressable>
			</View>
		</SafeAreaView>
	);
};

export default LoginScreen;