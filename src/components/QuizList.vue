<template>
  <div>
    <form @submit.prevent="addQuiz">
      <input v-model="newQuiz" placeholder="Enter quiz question" class="border p-2 mb-4 w-full" />
      <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">Add Quiz</button>
    </form>
    <ul>
      <li v-for="(quiz, index) in quizzes" :key="quiz.id" class="flex justify-between items-center border-b p-2">
        <input v-model="quiz.question" class="border p-2 flex-1" />
        <button @click="deleteQuiz(quiz.id)" class="bg-red-500 text-white px-4 py-2 rounded ml-2">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useQuizStore } from '../stores/quizStore'

const quizStore = useQuizStore()
const newQuiz = ref('')

const addQuiz = () => {
  if (newQuiz.value.trim()) {
    quizStore.addQuiz(newQuiz.value)
    newQuiz.value = ''
  }
}

const deleteQuiz = (id) => {
  quizStore.deleteQuiz(id)
}

const quizzes = quizStore.quizzes
</script>
