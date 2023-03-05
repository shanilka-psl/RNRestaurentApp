import React, {useState} from 'react';
import {TouchableOpacity, View, Text, Modal, StyleSheet} from 'react-native';
import CommonStyles from '../common/CommonStyles';
import {CustomTextInput} from './CustomTextInput';

const CustomModal = ({data, visible, onSaveNote, onCancelNote}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Add your Note here!</Text>

          <CustomTextInput
            title={'Title'}
            value={data ? data.title : title}
            onChangeText={setTitle}
          />

          <CustomTextInput
            title={'Description'}
            value={data ? data.description : description}
            onChangeText={setDescription}
            multiline
            numberOfLines={5}
            customInputStyle={styles.customInput}
          />
          <View style={styles.gap} />

          <View style={styles.btnContainer}>
            <TouchableOpacity
              style={[styles.button, styles.buttonSave]}
              onPress={() => onSaveNote(title, description)}>
              <Text style={styles.textStyle}>Save Note</Text>
            </TouchableOpacity>
            <View style={styles.gap} />
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={onCancelNote}>
              <Text style={styles.textStyle}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 8,
    height: CommonStyles.height * 0.5,
    width: CommonStyles.width * 0.75,
    alignItems: 'flex-start',
    padding: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  modalText: {
    fontFamily: CommonStyles.fontFamily.bold,
    fontSize: 20,
    marginBottom: 15,
  },

  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },

  buttonSave: {
    backgroundColor: '#2196F3',
  },

  buttonClose: {
    backgroundColor: '#D3D1D8',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  customInput: {
    height: CommonStyles.height * 0.19,
  },

  btnContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  gap: {padding: 10},
});

export default CustomModal;
