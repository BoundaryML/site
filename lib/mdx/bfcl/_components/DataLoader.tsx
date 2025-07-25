'use server'

import type { Question, TestResult } from '../_loader/types'
import { parseJSONL } from '../_loader/utils'

export default async function DataLoader() {
  // This request should be cached until manually invalidated.
  // Similar to `getStaticProps`.
  // `force-cache` is the default and can be omitted.
  const parsedResultsP = fetch(`http://localhost:3000/merged.json`, {
    cache: 'no-cache',
  })
    .then((response) => response.text())
    .then((data) => parseJSONL<TestResult>(data))

  const files = [
    // "executable_multiple_function",
    // "executable_parallel_function",
    // "executable_simple",
    // "executable_parallel_multiple_function",
    'multiple_function',
    'parallel_function',
    'simple',
    'parallel_multiple_function',
    // "java",
    // "javascript",
    'relevance',
  ]
  const questionsP = Promise.all(
    files.map((file) =>
      fetch(`http://localhost:3000/questions/gorilla_openfunctions_v1_test_${file}.json`)
        .then((response) => response.text())
        .then((data) => {
          const questions = parseJSONL<Omit<Question, 'idx' | 'test_type'>>(data)
          return questions.map((question, idx) => ({
            idx,
            test_type: file,
            ...question,
          }))
        }),
    ),
  ).then((data) => data.flat())

  const [parsedResults, questions] = await Promise.all([parsedResultsP, questionsP])

  return { parsedResults, questions }
}
