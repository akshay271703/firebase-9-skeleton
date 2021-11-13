import { db } from "./config";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  query,
  where,
} from "@firebase/firestore";

// Get all documents
const getDocuments = async (collectionName) => {
  const refernece = collection(db, collectionName);
  let docs = [];
  try {
    const snapshot = await getDocs(refernece);
    snapshot.docs.forEach((doc) => {
      docs.push({
        ...doc.data(),
        id: doc.id,
      });
    });
    return [true, docs];
  } catch (error) {
    return [false, error];
  }
};

// Add single document
const addDocument = async (collectionName, data) => {
  const refernece = collection(db, collectionName);
  try {
    const doc = await addDoc(refernece, data);
    return [true, doc];
  } catch (error) {
    return [false, error];
  }
};

// Delete Single Document
const deleteDocument = async (collectionName, docId) => {
  const refernece = doc(db, collectionName, docId);
  try {
    const deletedDoc = await deleteDoc(refernece);
    return [true, deleteDoc];
  } catch (error) {
    return [false, error];
  }
};

// Get Filtered Data by a property name

const getFilteredData = async (collectionName, propertyName, searchValue) => {
  const reference = collection(db, collectionName);
  const customQuery = query(reference, where(propertyName, "==", searchValue));
  try {
    let data = [];
    snapshot.docs.forEach((doc) => {
      data.push({
        ...doc.data(),
        id: doc.id,
      });
    });
    return [true, data];
  } catch (error) {
    return [false, error];
  }
};

// Get filtered Data in array
const getArrayFilterData = async (
  collectionName,
  arrayToSearchIn,
  arrayToSearch
) => {
  const reference = collection(db, collectionName);
  const customQuery = query(
    reference,
    where(arrayToSearchIn, "array-contains-any", arrayToSearch)
  );
  try {
    const snapshot = await getDocs(customQuery);
    let data = [];
    snapshot.docs.forEach((doc) => {
      data.push({
        ...doc.data(),
        id: doc.id,
      });
    });
    return [true, data];
  } catch (error) {
    return [false, error];
  }
};

export {
  getDocuments,
  addDocument,
  deleteDocument,
  getFilteredData,
  getArrayFilterData,
};
