import { SkillsProps } from "./skills.types";
import { useState, useEffect } from "react";
export default function Skills(props: SkillsProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { skills } = props;

  useEffect(() => {
    setTimeout(function () {
      setIsLoggedIn(true);
    }, 1500);
  }, []);
  return (
    <>
      <ul>
        {skills.map((skill) => {
          return <li key={skill}>{skill}</li>;
        })}
      </ul>
      {isLoggedIn ? (
        <button>Start learning</button>
      ) : (
        <button
          onClick={() => {
            setIsLoggedIn(true);
          }}
        >
          Login
        </button>
      )}
    </>
  );
}
