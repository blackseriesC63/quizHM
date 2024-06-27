import { defineStore } from "pinia";
import { ref } from "vue";

export const useQuizStore = defineStore("quizStore", () => {
  const quizzes = ref([]);

  const addQuiz = (question) => {
    quizzes.value.push({ id: Date.now(), question });
  };

  const deleteQuiz = (id) => {
    quizzes.value = quizzes.value.filter((quiz) => quiz.id !== id);
  };

  return { quizzes, addQuiz, deleteQuiz };
});
