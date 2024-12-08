import { Link, Stack } from "expo-router";
import { View, StyleSheet } from "react-native";

export default function NotFoundScreen() {
    return (
        <>
            <Stack.Screen options={{ title: "Ohh No! Chạy ngay đi !!!" }} />
            <View style={styles.container}>
                <Link href="/">
                    Về đây bên nhau ta nối lại tình xưa, chuyện tình mà bao năm
                    qua em gói góp từng kỉ niệm
                </Link>
            </View>
        </>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
