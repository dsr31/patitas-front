import { Text, View, TouchableOpacity, Modal, Dimensions } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import styles from '../styles/imageModal'

const ImageModal = ({ image, visible, closeImageModal }) => {
    const { width: screenWidth } = Dimensions.get('window');
    const imageHeight = screenWidth;

    return (
        <Modal visible = { visible } transparent = { true } animationType = "fade" onRequestClose = { closeImageModal }>
            <View style = { styles.modalContainer }>
                <TouchableOpacity style = { styles.modalCloseButton } onPress = { closeImageModal }>
                    <Text style = { styles.closeText }>CERRAR</Text>
                </TouchableOpacity>
                <Image source = { image } style={{ width: screenWidth, height: imageHeight }}  />
            </View>
        </Modal>
    )
}

export default ImageModal