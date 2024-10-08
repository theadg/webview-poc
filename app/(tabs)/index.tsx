import { StyleSheet } from 'react-native'
import WebView from 'react-native-webview'

export default function HomeScreen() {
    return (
        <WebView
            source={{ uri: 'http://10.0.2.2:3000' }}
            style={{ flex: 1 }}
        />
    )
}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    stepContainer: {
        gap: 8,
        marginBottom: 8,
    },
    reactLogo: {
        height: 178,
        width: 290,
        bottom: 0,
        left: 0,
        position: 'absolute',
    },
})
