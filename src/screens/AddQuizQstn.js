import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, ScrollView } from "react-native";

import BasicButton from "../components/BasicButton";

export default function AddQuizQstn() {
  const [qstn, setQstn] = useState("");
  const [correctOption, setCorrectOption] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");

  //function to handle when add btn clicked on
  function hanldeAddBtnClick() {
    console.log("add btn clicked");
  }

  //function to handle when cancel btn is pressed
  function hanldeCancelBtnClick() {
    console.log("cancel btn clicked");
  }

  //component rendering
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Create Quiz</Text>

      <View style={styles.form}>
        <Text style={styles.label}>Question</Text>
        <TextInput
          style={styles.inputField}
          placeholder="your question?"
          value={qstn}
          onChangeText={(val) => setQstn(val)}
        />
        <View style={styles.divider}></View>
        <View style={styles.divider}></View>

        <Text style={styles.label}>Correct Answer</Text>
        <TextInput
          style={styles.inputField}
          placeholder="correct answer"
          value={correctOption}
          onChangeText={(val) => setCorrectOption(val)}
        />
        <View style={styles.divider}></View>

        <Text style={styles.label}>Option 1</Text>
        <TextInput
          style={styles.inputField}
          placeholder="option 1"
          value={option1}
          onChangeText={(val) => setOption1(val)}
        />
        <View style={styles.divider}></View>

        <Text style={styles.label}>Option 2</Text>
        <TextInput
          style={styles.inputField}
          placeholder="option 2"
          value={option2}
          onChangeText={(val) => setOption2(val)}
        />
        <View style={styles.divider}></View>

        <Text style={styles.label}>Option 3</Text>
        <TextInput
          style={styles.inputField}
          placeholder="option 3"
          value={option3}
          onChangeText={(val) => setOption3(val)}
        />
        <View style={styles.divider}></View>

        <View style={styles.btnsContainer}>
          <BasicButton
            text="Add"
            customStyle={styles.button}
            onPress={hanldeAddBtnClick}
          />

          <BasicButton
            text="Cancel"
            customStyle={styles.button}
            onPress={hanldeCancelBtnClick}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 60,
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

  form: {
    marginTop: 35,
  },

  label: {
    fontSize: 16,
    lineHeight: 18,
    color: "#666666",
    marginBottom: 3,
  },

  inputField: {
    fontSize: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#BFBFBF",
    paddingVertical: 6,
  },

  btnsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
  },

  button: {
    width: "43%",
  },
});
