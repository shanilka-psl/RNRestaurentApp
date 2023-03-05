import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import CommonStyles from '../common/CommonStyles';
import CustomModal from '../components/CustomModal';

const Favorites = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [noteData, setNoteData] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);

  const renderFabButton = () => {
    return (
      <TouchableOpacity
        style={styles.fabButton}
        onPress={() => openNoteModal({})}>
        <Icon name="add" size={50} />
      </TouchableOpacity>
    );
  };

  const onSaveData = (title, description) => {
    setModalVisible(!modalVisible);

    const noteObject = {
      title,
      description,
    };

    setNoteData(noteData => [noteObject, ...noteData]);
  };

  const NoteListItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.noteContainer}
        onPress={() => openNoteModal(item)}>
        <Text>{item.title}</Text>
        <Text>{item.description}</Text>
      </TouchableOpacity>
    );
  };

  const openNoteModal = item => {
    setModalVisible(!modalVisible);
    setSelectedNote(item);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>Note App</Text>
      <CustomModal
        data={selectedNote}
        visible={modalVisible}
        onSaveNote={onSaveData}
        onCancelNote={() => setModalVisible(!modalVisible)}
      />

      <FlatList
        data={noteData}
        renderItem={({item}) => <NoteListItem item={item} />}
      />

      {renderFabButton()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
  },

  headerText: {
    fontSize: 18,
    alignSelf: 'flex-start',
    fontFamily: CommonStyles.fontFamily.medium,
    marginVertical: 15,
  },

  fabButton: {
    position: 'absolute',
    backgroundColor: '#2196F3',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    bottom: 50,
    right: 50,
    padding: 10,
  },

  noteContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default Favorites;
