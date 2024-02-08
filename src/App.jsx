import React from 'react';
import './App.css'

const questions = [
  {
    title: 'Какой город не входил в состав Древнерусского государства?',
    variants: ['Смоленск', 'Полоцк', 'Тмутаракань', 'Тобольск', 'Переславль'],
    correct: 3,
  },
  {
    title: 'Какое слово не характеризует общественный строй восточных славян накануне образования Древнерусского государства?',
    variants: ['вервь', 'вече', 'союзы племен', 'народное ополчение', 'уроки'],
    correct: 4,
  },
  {
    title: 'Какое слово не характеризует хозяйство восточных славян в 16-19 вв.?',
    variants: [
      'бортничество',
      'перелог',
      'подсечно-огневое земледелие',
      'скотоводство',
      'картофелеводство'
    ],
    correct: 4,
  },
  {
    title: 'какой термин не характеризует занятия восточных славян в 15-18вв.',
    variants: ['переложное земледелие', 'кочевое скотоводство', 'охота', 'бортничество', 'рыболовство'],
    correct: 1,
  },
  {
    title: 'Какое слово не обозначает категорию населения Древнерусского государства, находившееся в полной или частичной зависимости?',
    variants: ['челядин', 'рядович', 'закуп', 'купец', 'холоп'],
    correct: 3,
  },
  
];

function Result({correct}) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>Вы отгадали {correct} ответа из {questions.length}</h2>
      <a href="/">
        <button>Попробовать снова</button>
      </a>
    </div>
  );
}

function Game({step, question, onClickVariant}) {
  const progress = Math.round(step / questions.length * 100); 
  return (
    <>
      <div className="progress">
        <div style={{ width: `${progress}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {
          question.variants.map((text, index) => (
            <li onClick={() => onClickVariant(index)} key={text}>{text}</li>
          ))}
      </ul>
    </>
  );
}

function App() {
  const [step, SetStep] = React.useState(0);
  const [correct, SetCorrect] = React.useState(0);
  const question = questions[step];

  const onClickVariant = (index) =>
  {
    SetStep(step + 1);
    if (question.correct === index){
      SetCorrect(correct + 1)
    }
  }

  return (
    <div className="App">
      {
        step !== questions.length ?
        (<Game step={step} question={question} onClickVariant={onClickVariant}/>):
        (<Result correct={correct}/>)
      }
    </div>
  );
}

export default App;        