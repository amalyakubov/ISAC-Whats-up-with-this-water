import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import { resolve } from "styled-jsx/css";

const firebaseConfig = {
  apiKey: "AIzaSyDCP7j32Vc4kfP0hy1z57A8oiLAVKmAfks",
  authDomain: "water-c4e12.firebaseapp.com",
  projectId: "water-c4e12",
  storageBucket: "water-c4e12.appspot.com",
  messagingSenderId: "231491109365",
  appId: "1:231491109365:web:cc27b96084c0a248fc60bc",
};
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export async function getRobot(name, db) {
  const robotInfo = await getDoc(doc(db, "robot", name));
  const robotData = (await getDoc(doc(db, "data", name))).data();
  return {
    name: robotInfo.id,
    data: robotData,
    battery: robotInfo.data()["battery"],
    location: robotInfo.data()["location"],
  };
}

export async function getNames(db) {
  let datas = [];
  const info = await getDocs(collection(db, "robot"));

  info.forEach((doc) => {
    datas.push(doc.id);
  });
  return datas;
}
