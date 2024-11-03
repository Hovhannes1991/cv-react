import React from "react";
import styles from "./MainContainer.module.scss";
import { ContactsList } from "../contacts-list/ContactsList";
import { SeperatorLine } from "../../utils/seperator-line/SeperatorLine";
import { EducationInfo } from "../education-info/EducationInfo.tsx";
import { TwoColumns } from "../../utils/the-columns/TwoColumns";
import { ExperienceList } from "../experience-list/ExperienceList";
import { LanguagesList } from "../languages-list/LanguagesList";
import { SkillsList } from "../skills-list/SkillsList";

export const MainContainer: React.FC = () => {
  return (
    <main className={styles.main}>
      <SeperatorLine />

      <TwoColumns>
        <ContactsList />
        <EducationInfo />
      </TwoColumns>

      <SeperatorLine />

      <TwoColumns columns_breackpoint={600}>
        <ExperienceList />
        <LanguagesList />
      </TwoColumns>

      <SeperatorLine />

      <SkillsList />

      <SeperatorLine />
    </main>
  );
};
