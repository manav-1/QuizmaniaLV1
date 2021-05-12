import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MyQuizzes from "../screens/MyQuizzes";
import QuizDetails from "../screens/QuizDetails";
import CreateQuiz from "../screens/CreateQuiz";
import AddQuizQstn from "../screens/AddQuizQstn";

const Stack = createStackNavigator();

export default function MyQuizStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MyQuizzes"
        component={MyQuizzes}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CreateQuiz"
        component={CreateQuiz}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="QuizDetails"
        component={QuizDetails}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Add Question"
        component={AddQuizQstn}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
