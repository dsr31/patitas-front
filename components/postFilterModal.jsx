import { Text, View, TouchableOpacity, Modal, Dimensions, Image, TextInput } from 'react-native'
import React from 'react'
import styles from '../styles/filterModal'
import images from '../constants/images'
import icons from '../constants/icons'

const PostFilterModal = ({ visible, closeImageModal }) => {
    const { width: screenWidth } = Dimensions.get('window');
    const imageHeight = screenWidth;
    
    return (
        <Modal visible = { visible } transparent = { false } animationType = "slide" onRequestClose = { closeImageModal }>
            <View style = { styles.header }>
                <Image
                    source = { images.logov3 }
                    style  = { styles.logoHeader }
                />        
                <View style={styles.spacer} />
                <TouchableOpacity onPress = { closeImageModal }>
                    <Image 
                        source = { icons.cerrar }
                        style  = { styles.iconHeader } 
                    />
                </TouchableOpacity>
            </View>
            <View style = {{ width: '100%', height: '100%', backgroundColor: '#D5C59B', position: 'absolute' }}>
                <View style = { styles.filterContentContainer }>
                    <View style = { styles.filterContentInfo }>
                        <Text style = { styles.title }>FILTRA TU BÚSQUEDA</Text>
                        <Text style = { styles.subTitle }>Rellena únicamente aquellos parámetros por los cuales quieras filtrar tu búsqueda.</Text>
                    </View>
                    <View style = { styles.dividerLine }/>
                    <View>
                        <View style = { styles.searchForms }>
                            <View style = { styles.searchFormsDouble }>
                                <View style = { styles.searchFormComponent }>
                                    <Text style = { styles.searchFormTitle }>ESPECIE</Text>
                                    <TextInput style = { styles.searchFormInput } />
                                </View>
                                <View style = {{ width: '10%' }} />
                                <View style = { styles.searchFormComponent }>
                                    <Text style = { styles.searchFormTitle }>RAZA</Text>
                                    <TextInput style = { styles.searchFormInput } />
                                </View>
                            </View>
                            <View style = { styles.searchFormsSingle }>
                                <Text style = { styles.searchFormTitle }>DIRECCIÓN</Text>
                                <TextInput style = { styles.searchFormInput }/>
                            </View>
                            <View style = { styles.searchFormsSingle }>
                                <Text style = { styles.searchFormTitle }>NOMBRE</Text>
                                <TextInput style = { styles.searchFormInput }/>
                            </View>
                            <View style = { styles.searchFormsSingle }>
                                <Text style = { styles.searchFormTitle }>NÚMERO DE IDENTIFICACIÓN / CHIP</Text>
                                <TextInput style = { styles.searchFormInput }/>
                            </View>
                            <View style = { styles.searchFormsDouble }>
                                <View style = { styles.searchFormComponent }>
                                    <Text style = { styles.searchFormTitle }>TIPO DE POST</Text>
                                    <TextInput style = { styles.searchFormInput } />
                                </View>
                                <View style = {{ width: '10%' }} />
                                <View style = { styles.searchFormComponent }>
                                    <Text style = { styles.searchFormTitle }>GÉNERO</Text>
                                    <TextInput style = { styles.searchFormInput } />
                                </View>
                            </View>
                            <View style = { styles.searchFormsDouble }>
                                <View style = { styles.searchFormComponent }>
                                    <Text style = { styles.searchFormTitle }>FECHA INICIO</Text>
                                    <TextInput style = { styles.searchFormInput } />
                                </View>
                                <View style = {{ width: '10%', justifyContent:'center', alignItems: 'center' }}>
                                    <Text>_</Text>
                                </View>
                                <View style = { styles.searchFormComponent }>
                                    <Text style = { styles.searchFormTitle }>FECHA FIN</Text>
                                    <TextInput style = { styles.searchFormInput } />
                                </View>
                            </View>
                        </View>
                        <View style = { styles.searchButtonContainer }>
                            <TouchableOpacity style = { [styles.searchButtonContainer, styles.searchButton ]}>
                                <Text style = {{ fontFamily: 'Inter-Black', fontSize: 16 }}>BUSCAR</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default PostFilterModal