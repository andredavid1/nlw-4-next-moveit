import { createContext, ReactNode, useState} from 'react'


interface ChallengesContextData {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  levelUp: () => void;
  startNewChallenge: () => void;
}

interface ChallengesProviderProps {
  children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider ({ children }: ChallengesProviderProps) {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengeCompleted] = useState(0);

  function startNewChallenge() {
    console.log('New challenge')
  }

  function levelUp() {
    setLevel(level + 1);
  }

  return (
    <ChallengesContext.Provider
      value={{
        challengesCompleted,
        currentExperience,
        levelUp,
        level,
        startNewChallenge
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
}
