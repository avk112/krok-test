import { Flex, Radio } from 'antd';
import { useState, type FC } from 'react';
import questionsData from './data/question.json';
import type { Question } from './types';
import LogoImg from './assets/image/logo.png';

// interface AppProps {}

const App: FC = () => {
  const [questions, setQuestions] = useState<Question[]>(() => [...questionsData].sort(() => Math.random() - 0.5));
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentCorrectIndex, setCurrentCorrectIndex] = useState<number | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const toNextQuestion = () => {
    const newIndex = currentQuestionIndex + 1;
    setCurrentQuestionIndex(newIndex);
    setCurrentCorrectIndex(null);
    setSelectedAnswer(null);
  };

  const handleRadioDate = (index: number) => {
    setCurrentCorrectIndex(questions[currentQuestionIndex].correct_index);
    setSelectedAnswer(index);
  };

  return (
    <Flex className="app">
      <Flex className="page">
        <Flex className="page__top">
          <img src={LogoImg} alt="krok-logo" className="page__top__logo" />
          <h1>Твоя підготовка до КРОК-тестування</h1>
        </Flex>

        {questions.length ? (
          <Flex className="page__main">
            <h2>{questions[currentQuestionIndex].question}</h2>
            <Radio.Group
              vertical
              className="page__main__radioGroup"
              value={selectedAnswer}
              onChange={(e) => {
                handleRadioDate(e.target.value);
              }}
            >
              <Radio value={0} className={currentCorrectIndex === 0 ? 'correct' : 'default'}>
                {' '}
                {questions[currentQuestionIndex].option_0}{' '}
              </Radio>
              <Radio value={1} className={currentCorrectIndex === 1 ? 'correct' : 'default'}>
                {' '}
                {questions[currentQuestionIndex].option_1}{' '}
              </Radio>
              <Radio value={2} className={currentCorrectIndex === 2 ? 'correct' : 'default'}>
                {' '}
                {questions[currentQuestionIndex].option_2}{' '}
              </Radio>
              <Radio value={3} className={currentCorrectIndex === 3 ? 'correct' : 'default'}>
                {' '}
                {questions[currentQuestionIndex].option_3}{' '}
              </Radio>
              <Radio value={4} className={currentCorrectIndex === 4 ? 'correct' : 'default'}>
                {' '}
                {questions[currentQuestionIndex].option_4}{' '}
              </Radio>
            </Radio.Group>
            <button onClick={toNextQuestion}>наступне питання</button>
          </Flex>
        ) : (
          <p>Wait</p>
        )}
      </Flex>
    </Flex>
  );
};

export default App;
