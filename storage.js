import { storage } from "./config";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";

// Upload File and retrieve Download URL
const uploadFile = async (directory, filename, file) => {
  const storageRef = ref(storage, `${directory}/${filename}`);
  try {
    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(ref(storage, `${directory}/${filename}`));
    return [true, url];
  } catch (error) {
    return [false, error];
  }
};

// Delete File
const deleteFile = async (directory, filename) => {
  const storageRef = ref(storage, `${directory}/${filename}`);
  try {
    await deleteObject(storageRef);
    return [true, "File deleted"];
  } catch (error) {
    return [false, error];
  }
};

export { uploadFile, deleteFile };
