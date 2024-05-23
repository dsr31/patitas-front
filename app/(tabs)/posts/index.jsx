import { TouchableOpacity, Image, ScrollView, StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { React, useState, useEffect, useCallback } from 'react';
import 'react-native-reanimated';
import { router, Link, Redirect, useFocusEffect } from 'expo-router';
import images from '../../../constants/images';
import styles from '../../../styles/tabs';
import icons from '../../../constants/icons';
import PostCard from '../../../components/postCard';
import PostFilterModal from '../../../components/postFilterModal';

const Posts = () => {
  // Conexion base de datos
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(() => {
    setLoading(true);
    fetch('http://192.168.231.18:4000/api/posts')
      .then(res => res.json())
      .then(
        (resultado) => {
          setLoading(false);
          setData(resultado.body);
        },
        (error) => {
          setLoading(true);
          console.warn("Houston tenemos un problema en tablon de anuncios");
        }
      );
  }, []);

  useFocusEffect(
    useCallback(() => {
      fetchData();
    }, [fetchData])
  );

  const handleFilterData = (filteredData) => {
    setData(filteredData);
  };

  // Variables para el modal
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const pressedImageController = (val) => {
    setSelectedImage(true);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedImage(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={images.logov3}
          style={styles.logoHeader}
        />
        <View style={styles.spacer} />
        <TouchableOpacity onPress={() => pressedImageController(true)}>
          <Image
            source={icons.filter}
            style={styles.iconHeader}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.titlePageSection}>
        <View style={[styles.lineSection, styles.lineSectionL]} />
        <Text style={styles.titlePage}>TABLÓN DE ANUNCIOS</Text>
        <View style={[styles.lineSection, styles.lineSectionR]} />
      </View>
      <View style={styles.feed}>
        <View style={{ marginTop: 50 }} />
        <View style={{ height: '100%', backgroundColor: '#E2D8BE' }}>
          {loading ? (
            <ActivityIndicator size="large" />
          ) : (
            <FlatList
              data={data}
              keyExtractor={(item) => item.id_post}
              renderItem={({ item }) => (
                <PostCard content={item} />
              )}
            />
          )}
        </View>
      </View>
      {selectedImage && (
        <PostFilterModal visible={modalVisible} closeImageModal={closeModal} onFilter={handleFilterData} />
      )}
    </SafeAreaView>
  );
}

export default Posts;
