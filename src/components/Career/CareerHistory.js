import CareerHistoryClause from "./components/CareerHistoryClause";
import styles from "./CareerHistory.module.scss";
import { careerHistory } from "../../information";

const CareerHistory = () => {
  return (
    <section className={styles.careerHistory} name="careerHistory">
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Career History</h1>
      </div>
      <ul>
        {careerHistory.map((career, index) => (
          <li key={index}>
            <CareerHistoryClause
              index={index + 1}
              subtitle={career.subtitle ?? null}
              title={career.title}
              backgroundColor={career.backgroundColor}
              summary={career.summary}
              techs={career.techs}
              website={career.website ?? null}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CareerHistory;
