# Quizzical Solo Project {React Course, Scrimba}

This is a solution to the [Quizzical Solo Project](https://scrimba.com/learn/learnreact/solo-project-quizzical-co24f49bea8aace7c174082c8).
The course is offered for FREE on Scrimba by Bob Ziroll [Learn React](https://scrimba.com/learn/learnreact)(An amazing tutor -- really understood his course)


## Table of contents

- [Quizzical Solo Project {React Course, Scrimba}](#quizzical-solo-project-react-course-scrimba)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
  - [Author](#author)

## Overview

### The challenge

Requirements : -

Recreate the Quizzical App from the figma file shared
Use the [Open Trivia Database](https://opentdb.com/) to generate 5 questions then check and tell the use how many questions they got correct

Mini Proj:-
- Add a category to select the type of questions to be queried


### Screenshot

Screenshot of the Quizzical App mock up

![](./src/assets/images/screenshot.jpg)

### Links

- Solution URL: [GitHub Link](https://github.com/issagoodlifeInc/quizzical.git)
- Live Site URL: [Netlify Deploy](https://lesquiz.netlify.app/)

## My process

1. Recreated the design as per [Figma](https://www.figma.com/file/E9S5iPcm10f0RIHK8mCqKL/Quizzical-App?node-id=0%3A1&t=auIHPhVjWmCbWZRz-0)

2. Started with the mockup -- deleteting unrequired files and adding the `component` and `images` files to the structure after `npm create vite@latest Quizzical -- --template react`

3. Writing out this `README.md` file

### Built with

- React
- JSX syntax
- Semantic HTML5 markup
- CSS custom properties
- Grid

### What I learned

- Using Figma files to code

- ##### Handling async fetch and manipulating the data for use
  
```JSX
 React.useEffect(() => {
    let url = `https://opentdb.com/api.php?amount=5&type=multiple${category}`;
    async function getData() {
      const res = await fetch(url);
      const data = await res.json();

      // created newdata from the data returned and manipulated it to have an answers array with the correct and incorrect answers + keeping isCorrect true if the answer is thew same as the correct one given
      
      // Then pushed the newData to the setQuestionsd state
      const newData = data.results.map((quiz) => {

        let answersArray = [];
        answersArray.push(quiz.correct_answer);
        answersArray.push(...quiz.incorrect_answers);
        answersArray = answersArray.sort(() => Math.random() - 0.5);
        answersArray = answersArray.map((ans) => {
          return {
            id: nanoid(),
            choice: decodeHtml(ans),
            isCorrect: ans === quiz.correct_answer ? true : false,
            isSelected: false,
          };
        });
        return {
          id: nanoid(),
          question: decodeHtml(quiz.question),
          answers: answersArray,
        };
      });
      setQuestions(newData);
    }
    console.log(url);

    getData();
    // this will run on first load and only if playAgain or category changes
  }, [playAgain, category]);

```
- ##### Updating the setQuestion state when on selected an answer

```jsx
const updatedQuestions = questions.map((quiz) => {
      if (quiz.id === questionId) {
        const updatedAnswers = quiz.answers.map((ans) => {
          if (ans.choice === selectedAnswer) {
            return {
              ...ans,
              isSelected: true,
            };
          } else {
            return {
              ...ans,
              isSelected: false,
            };
          }
        });
        return {
          ...quiz,
          answers: updatedAnswers,
        };
      } else {
        return { ...quiz };
      }
    });
    setQuestions(updatedQuestions);
```

- ##### React! React! React!

### Continued development

- Learning more React! (yeah reenacting React problems and tackling them)

- Better turnaround time -- simple stuff but worked on it for a while

- Less Code (code cleanup)

## Author

- Website - [Lesley Kimutai](https://leskim.github.io/myweb/)
- Frontend Mentor - [Frontend Mentor](https://www.frontendmentor.io/profile/Leskim)
