import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import firebase from "../FirebaseConfig";
import QuizItem from "../components/QuizItem";
import SnackBar from "../components/SnackBar";

export default function MyQuizes({ navigation }) {
  const [myQuizzes, setMyQuizzes] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [snackBarVisible, setSnackBarVisible] = useState(false);
  const [snackBarText, setSnackBarText] = useState("");
  const [snackBarType, setSnackBarType] = useState("");

  //component did mount
  useEffect(() => {
    fetchUsersQuizes();
    //call the function to get the logged in user's quizes from database
  }, []);

  //function to fetch quizes of the user that is logged in.
  async function fetchUsersQuizes() {
    const loggedUserId = await AsyncStorage.getItem("loggedUserId");
    if (loggedUserId) {
      const quizDbRef = firebase.app().database().ref("quizes/");
      quizDbRef.on("value", function (resp) {
        const quizes = resp.val();
        if (quizes) {
          var myQuizes = [];
          for (const key in quizes) {
            const quiz = quizes[key];
            const createdByUserId = quiz.createdByUserId;
            if (createdByUserId == loggedUserId) {
              myQuizes.push(quiz);
            }
          }
          myQuizes.reverse();
          setMyQuizzes(myQuizes);
        }
        setIsLoading(false);
      });
    } else {
      displaySnackBar("error", "User is not Logged in");
    }
  }
  //function to display snackbar
  function displaySnackBar(type, text) {
    setSnackBarType(type);
    setSnackBarText(text);
    setSnackBarVisible(true);
  }

  //function to hide snackbar
  function hideSnackBar() {
    setSnackBarVisible(false);
  }

  //function to handle when any quiz item is clicked on
  function handleQuizItemClick(index) {
    console.log("navigation", navigation);
    console.log(index);
    navigation.navigate("QuizDetails",myQuizzes[index]);
  }

  //fuction to handle when add new quiz btn is pressed on
  function handleAddNewQuizBtnClick() {
    //redirecting to CreateQuiz.js
    navigation.navigate("CreateQuiz");
  }

  //component rendering
  return (
    <>
      {isLoading ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator style={styles.loader} />
        </View>
      ) : (
        <ScrollView style={styles.container}>
          {myQuizzes.map((item, idx) => {
            return (
              <QuizItem
                key={idx}
                index={idx}
                name={item.quizName}
                imageUrl={item.quizImgUri}
                onPress={handleQuizItemClick}
              />
            );
          })}

          <TouchableOpacity
            style={styles.addNewBtn}
            onPress={handleAddNewQuizBtnClick}
          >
            <Text style={styles.addNewBtnText}>+ Add new quiz</Text>
          </TouchableOpacity>
        </ScrollView>
      )}

      {snackBarVisible ? (
        <SnackBar
          isVisible={snackBarVisible}
          text={snackBarText}
          type={snackBarType}
          onClose={hideSnackBar}
        />
      ) : null}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 10,
    paddingHorizontal: 30,
  },

  title: {
    fontWeight: "500",
    fontSize: 20,
    letterSpacing: 0.1,
    color: "#2E2E2E",
  },

  divider: {
    paddingVertical: 8,
  },

  addNewBtn: {
    marginTop: 35,
    alignItems: "center",
  },

  addNewBtnText: {
    fontWeight: "500",
    fontSize: 16,
    color: "#2A34DC",
  },

  loaderContainer: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 30,
    justifyContent: "center",
  },
});
