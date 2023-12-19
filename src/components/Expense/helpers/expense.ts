import housing from "../../../assets/expense-types/housing.png";
import transportation from "../../../assets/expense-types/transportation.png";
import groceries from "../../../assets/expense-types/groceries.png";
import leisure from "../../../assets/expense-types/leisure.png";
import health from "../../../assets/expense-types/health.png";
import services from "../../../assets/expense-types/services.png";
import investment from "../../../assets/expense-types/investment.png";

export const selectPhotoByType = (type: string) => {
  switch (type) {
    case "housing":
      return housing;
    case "transportation":
      return transportation;
    case "groceries":
      return groceries;
    case "leisure":
      return leisure;
    case "health":
      return health;
    case "services":
      return services;
    case "investment":
      return investment;
    default:
      return "";
  }
};
