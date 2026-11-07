import React, { useState } from 'react';
import { ActivityIndicator, Pressable, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

const SITE = 'https://alessaib-dot.github.io/GRC/';

export default function App() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  return (
    <SafeAreaView style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor="#102638" />
      {!open ? (
        <View style={styles.welcome}>
          <Text style={styles.logo}>GRC</Text>
          <Text style={styles.title}>منصة الحوكمة والمخاطر والامتثال</Text>
          <Text style={styles.description}>تجربة تطبيق الآيفون المتصل بنسخة الموقع الحالية</Text>
          <Pressable accessibilityRole="button" style={styles.button} onPress={() => { setError(''); setOpen(true); }}>
            <Text style={styles.buttonText}>فتح منصة GRC</Text>
          </Pressable>
        </View>
      ) : (
        <View style={styles.content}>
          <View style={styles.toolbar}>
            <Pressable accessibilityRole="button" onPress={() => { setOpen(false); setLoading(false); setError(''); }} style={styles.back}>
              <Text style={styles.backText}>العودة</Text>
            </Pressable>
            <Text style={styles.heading}>GRC</Text>
          </View>
          {error ? (
            <View style={styles.welcome}>
              <Text style={styles.description}>{error}</Text>
              <Pressable style={styles.button} onPress={() => { setError(''); setOpen(false); }}>
                <Text style={styles.buttonText}>العودة والمحاولة مجددًا</Text>
              </Pressable>
            </View>
          ) : (
            <WebView
              source={{ uri: SITE }}
              style={styles.web}
              javaScriptEnabled
              domStorageEnabled
              pullToRefreshEnabled
              startInLoadingState
              onLoadStart={() => setLoading(true)}
              onLoadEnd={() => setLoading(false)}
              onError={() => { setLoading(false); setError('تعذر فتح موقع GRC. تحقق من اتصال الإنترنت.'); }}
              onHttpError={({ nativeEvent }) => {
                if (nativeEvent.statusCode >= 400) {
                  setLoading(false);
                  setError('تعذر تحميل GRC. رمز الاستجابة: ' + nativeEvent.statusCode);
                }
              }}
            />
          )}
          {loading && !error ? <View style={styles.loading}><ActivityIndicator color="#4be1ce" /></View> : null}
        </View>
      )}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#102638' },
  welcome: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 26 },
  logo: { fontSize: 46, fontWeight: '800', color: '#4be1ce', marginBottom: 16 },
  title: { fontSize: 21, color: '#fff', fontWeight: '700', textAlign: 'center' },
  description: { fontSize: 15, color: '#c4d6de', textAlign: 'center', marginTop: 15, lineHeight: 24 },
  button: { backgroundColor: '#4be1ce', borderRadius: 12, paddingHorizontal: 26, paddingVertical: 16, marginTop: 28 },
  buttonText: { color: '#102638', fontWeight: '800', fontSize: 16 },
  content: { flex: 1 },
  toolbar: { minHeight: 50, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 18 },
  back: { padding: 10 },
  backText: { color: '#4be1ce', fontSize: 15 },
  heading: { color: '#fff', fontSize: 18, fontWeight: '700' },
  web: { flex: 1, backgroundColor: '#fff' },
  loading: { position: 'absolute', top: 65, right: 18 },
});
