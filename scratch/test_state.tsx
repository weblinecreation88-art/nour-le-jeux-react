import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

const INITIAL_PROGRESS = {
  xp: 0,
  level: 1,
  lightPercent: 10,
  stats: { savoir: 0 },
  completedIslamicQuizIds: []
};

const App = () => {
  const [progress, setProgress] = useState(INITIAL_PROGRESS);

  const triggerXpGain = (amount, reason) => {
    setProgress((prev) => {
      console.log('triggerXpGain called with prev:', prev);
      const newXp = prev.xp + amount;
      return {
        ...prev,
        xp: newXp,
        lightPercent: Math.min(100, prev.lightPercent + Math.round(amount / 20))
      };
    });
  };

  const handleCompleteIslamicQuiz = (quizId, xpReward) => {
    triggerXpGain(xpReward, `Quiz Islamique (+${xpReward} XP)`);
    setProgress((prev) => {
      console.log('handleCompleteIslamicQuiz called with prev:', prev);
      const updatedStats = { ...prev.stats, savoir: Math.min(100, prev.stats.savoir + 2) };
      return {
        ...prev,
        stats: updatedStats,
        completedIslamicQuizIds: Array.from(
          new Set([...(prev.completedIslamicQuizIds || []), quizId])
        )
      };
    });
  };

  return (
    <div>
      <button id="btn" onClick={() => handleCompleteIslamicQuiz('quiz_1', 10)}>Complete Quiz</button>
      <pre id="output">{JSON.stringify(progress, null, 2)}</pre>
    </div>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(<App />);
