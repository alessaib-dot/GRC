import React, { useRef, useState } from 'react';
import { ActivityIndicator, Pressable, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

const SITE = 'https://alessaib-dot.github.io/GRC/';

export default function App() {
  const web = useRef(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  return (
    <SafeAreaView style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor="#102638" />
      <View style={styles.content}>
        {error ? (
          <View style={styles.error}>
            <Text style={styles.errorTitle}>تعذر الاتصال بالمنصة</Text>
            <Text style={styles.errorText}>{error}</Text>
            <Pressable accessibilityRole="button" style={styles.retry} onPress={() => { setError(''); setLoading(true); web.current?.reload(); }}>
              <Text style={styles.retryText}>إعادة المحاولة</Text>
            </Pressable>
          </View>
        ) : null}
        <WebView
          ref={web}
          source={{ uri: SITE }}
          style={[styles.web, error ? styles.hidden : null]}
          javaScriptEnabled
          domStorageEnabled
          pullToRefreshEnabled
          startInLoadingState
          onLoadStart={() => setLoading(true)}
          onLoadEnd={() => setLoading(false)}
          onError={() => { setLoading(false); setError('تحقق من اتصال الإنترنت ثم أعد المحاولة.'); }}
          onHttpError={({ nativeEvent }) => {
            if (nativeEvent.statusCode >= 400) {
              setLoading(false);
              setError('تعذر تحميل المنصة. رمز الاستجابة: ' + nativeEvent.statusCode);
            }
          }}
        />
        {loading && !error ? <View style={styles.loading} pointerEvents="none"><ActivityIndicator color="#4be1ce" size="large" /></View> : null}
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#102638' },
  content: { flex: 1 },
  web: { flex: 1, backgroundColor: '#071321' },
  hidden: { display: 'none' },
  loading: { position: 'absolute', top: 24, alignSelf: 'center', padding: 12, backgroundColor: '#102638', borderRadius: 16 },
  error: { position: 'absolute', inset: 0, zIndex: 2, alignItems: 'center', justifyContent: 'center', padding: 24, backgroundColor: '#102638' },
  errorTitle: { color: '#fff', fontSize: 21, fontWeight: '700', textAlign: 'center' },
  errorText: { color: '#b8d0db', fontSize: 15, marginTop: 12, textAlign: 'center' },
  retry: { backgroundColor: '#4be1ce', borderRadius: 12, paddingHorizontal: 25, paddingVertical: 14, marginTop: 22 },
  retryText: { color: '#102638', fontWeight: '800' },
});
