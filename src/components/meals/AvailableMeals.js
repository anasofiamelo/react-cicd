import classes from "./AvailableMeals.module.css";
import MEALS from "../../MEALS";
import Card from "../ui/card";
import MealItem from "./meal-item";

const AvailableMeals = () => {
  const mealsList = MEALS.map((meal) => <MealItem key={meal.id} {...meal} />);
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
